import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password, firstName, lastName) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, firstName, lastName, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('onAUthChange', currentUser)
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }
            setUser(currentUser);
            setLoading(false)
            if (currentUser) {

                axios.post('https://libary-management-system-server.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
            else {
                axios.post('https://libary-management-system-server.vercel.app/logOut', loggedUser, {
                    withCredentials: true
                })
                .then(res=>{
                    console.log(res.data)
                })
            }

        });
        return () => {
            unSubscribe();
        }
    }, [user])
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