import {useState, useEffect} from 'react'

import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {handleLoginRedux} from '../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const isLoading = useSelector(state => state.user.isLoading);
    const account = useSelector(state => state.user.account);

    const handleLogin =  () => {
        if (!username || !password) {
            toast.error('Email or password is required');
            return;
        }
        
        dispatch(handleLoginRedux(username, password));
 
    }

    const handleGoBack = () => {
        navigate('/');
    }

    const handlePressEnter = (event) => {
        if (event && event.key === 'Enter') {
            handleLogin();
        }
    }

    useEffect(() => {
        if (account && account.auth === true) {
            navigate("/");
        }
    }, [account] )

    return (
        <>
         <div className="login-container col-12 col-sm-8 col-md-6 col-lg-4" > 
            <div className="title">
                Login
            </div>
            <div className="text">
                Email or username (eve.holt@reqres.in)
            </div>
            <input type="text" placeholder="Email or username"
                    value={username}
                    onChange={(event) => setUserName(event.target.value)}
            />

            <div className='input-2'>
                <input type={showPassword === true ? "text" : "password"} placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    onKeyDown={(event) => handlePressEnter(event)}
                />
                <i className={showPassword === true ? "fa-regular fa-eye" :"fa-regular fa-eye-slash" }
                    onClick={() => setShowPassword(!showPassword)}
                ></i>
            </div>

            <button 
                className={username && password ? "active" : ""}
                disabled={(username && password) ? false : true} 
                onClick={() => handleLogin()}
            >
                {isLoading &&  <i className="fa-solid fa-spinner fa-spin-pulse"></i>}
                &nbsp;Login</button>
            <div className="back">
                
                <span onClick={() => handleGoBack()}><i className="fa-solid fa-angle-left"></i> Go Back</span>
            </div>
         </div>
        </>
    )
}

export default Login;