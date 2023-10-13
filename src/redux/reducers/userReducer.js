import { FETCH_USER_ERROR, FETCH_USER_LOGIN, FETCH_USER_SUCCESS, USER_LOGOUT, USER_REFRESH } from "../actions/userAction";

const INITIAL_STATE = {
    account: {
        username: '',
        auth: null,
        access_token: ''
    },
    isLoading: false,
    isError: false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN: 
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        
        case FETCH_USER_ERROR: 
            return {
                ...state,
                account: {
                    auth: false,
                },
                isLoading: false,
                isError: true
            };
        case FETCH_USER_SUCCESS:
            console.log(">>> check action: ", action)
            return {
                ...state, 
                account: {
                    username: action.username,
                    access_token: action.access_token,
                    auth: true
                },
                isLoading: false,
                isError: false
            };
        case USER_LOGOUT: 
            localStorage.removeItem('username')
            localStorage.removeItem('access_token')
            return {        
                ...state, 
                account: {
                    username: '',
                    access_token: '',
                    auth: false
                },

            }

        case USER_REFRESH:
            return {        
                ...state, 
                account: {
                    username: localStorage.getItem('username'),
                    access_token: localStorage.getItem('access_token'),
                    auth: true
                },

            }

        default: return state;
    }
}

export default userReducer