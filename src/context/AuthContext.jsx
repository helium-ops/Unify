import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

export default function Auth({children}){
    const [loggedIn, setLoggedIn] = useState(false);
    const [signIn, setSignin] = useState(true);

    function signUp(){
       
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