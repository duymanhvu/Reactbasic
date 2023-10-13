import {toast} from 'react-toastify'
import { loginApi } from '../../Services/UserService';

export const FETCH_USER_LOGIN = 'FETCH_USER_LOGIN';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
 
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_REFRESH = 'USER_REFRESH';


export const handleLoginRedux = (username, password) => {
    return async (dispatch, getState) => {
        dispatch({type: FETCH_USER_LOGIN});

        let res = await loginApi(username, password)
        console.log(res);
        if (res && res.access_token) {
            localStorage.setItem('access_token', res.access_token);
            localStorage.setItem('username', username.trim());

            dispatch({
                type: FETCH_USER_SUCCESS,
                data: {username: username.trim(), access_token: res.access_token}
            });
            
        } else {
            //error
            if (res && res.status === 404) {
                toast.error(res.headers.error);
            }

            dispatch({
                type: FETCH_USER_ERROR
            });
        }
    }
}


export const handleLogoutRedux = () => {
    return (dispatch, getState) => {
        dispatch({
            type: USER_LOGOUT
        })
    }
}

export const handleRefresh = () => {
    return (dispatch, getState) => {
        dispatch({
            type: USER_REFRESH
        })
    }
}
