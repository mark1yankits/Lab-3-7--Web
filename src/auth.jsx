import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import{app, googleAuthProvider} from "./firebase.js"

export const AuthProvider = ()=>{
    const auth = getAuth(app);
    const [user, setUser] = useState(auth.currentUser);

    useEffect (()=>{
        const mbuser = onAuthStateChanged(auth, (mbuser)=>{
            setUser(mbuser);
        })

        return ()=> mbuser();
    },[auth])

    return user !== null ? <>{user.displayName}</> : <>Loading...</>;
};