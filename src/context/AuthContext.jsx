import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

export default function Auth({children}){
    const [loggedIn, setLoggedIn] = useState(false);
    const [signIn, setSignin] = useState(true);
    return(
     <AuthContext.Provider value={{loggedIn, setLoggedIn, signIn, setSignIn}}>
       {children}
     </AuthContext.Provider>
    )
}

export function useAuth(){
   const auth = useContext(AuthContext);
   return auth;
}