import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
   

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password, firstName, lastName)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, firstName, lastName, email, password)
    }
    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleSignIn = ()=>{
        setLoading(true)
       return signInWithPopup(auth, provider)
    }
    

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('onAUthChange',currentUser)
            setUser(currentUser);
            setLoading(false)
            
        });
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo = {
        loading,
        user,
        createUser,
        login, 
        logOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider state={true} value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;