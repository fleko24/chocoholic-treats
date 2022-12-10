import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener, signOutUser,
         createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

// It's the actual component, so we wrap this component
// around any other component that need access to the values inside
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
// Este patron de useEffect hce que la funcion se ejecute una vez que se monta el componente
    useEffect(()=> {
        signOutUser();
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            console.log(user);
        });
        return unsubscribe
    },[]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}