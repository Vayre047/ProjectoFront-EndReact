import { createContext, useState } from 'react';

// data to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const [ isLoggedIn, setIsLoggedIn ] = useState( false );

    /*const login =(email, password) => {
        setLogin(true);
    }*/
    const value = { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn };

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}