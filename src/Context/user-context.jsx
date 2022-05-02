import { createContext, useState } from 'react';

// data to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const [ state, setState ] = useState( false );
    //const setLogin = (isLoggedIn) => setState({isLoggedIn});

    /*const login =(email, password) => {
        setLogin(true);
    }*/
    const value = { currentUser, setCurrentUser, state, setState };

    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}