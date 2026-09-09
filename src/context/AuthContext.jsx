import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

export default function Auth({children}){
    const [loggedIn, setLoggedIn] = useState(false);
    const [signIn, setSignin] = useState(true);
    const [user, setUser] = useState(localStorage.getItem(localStorage.getIten('currentUserEmail') ? 'currentUserEmail' : '[]'))

    function signUp(email, password){
       const users = localStorage.getItem(localStorage.getItem('currentUserEmail') ? 'currentUserEmail' : '[]');
       
    }
    return(
     <AuthContext.Provider value={{loggedIn, setLoggedIn, signIn, setSignIn, signUp}}>
       {children}
     </AuthContext.Provider>
    )
}

export function useAuth(){
   const auth = useContext(AuthContext);
   return auth;
}