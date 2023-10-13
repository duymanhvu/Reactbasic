import React from 'react';

const UserContext = React.createContext({username: '', auth: false});


const UserProvider = ({children}) => {
    const [user, setUser] = React.useState({username: '', auth: false});

    const loginContext = (username, access_token) => {
        setUser((user) => ({
            username: username,
            auth: true,
        }));
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('username', username);
    };

    const logout = () => {
        localStorage.removeItem("access_token")
        localStorage.removeItem("username")
        setUser((user) => ({
            username: '',
            auth: false,
        }));
    };

    return (
        <UserContext.Provider value={{user, loginContext, logout}}>
            {children}
        </UserContext.Provider>
    )
}


export {UserContext, UserProvider};