import { createContext, useState } from 'react';

// data to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState({});
    const [ isLoggedIn, setIsLoggedIn ] = useState( false );
    const [width, setWidth] = useState(window.innerWidth);
    
    const value = { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, width, setWidth };

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}