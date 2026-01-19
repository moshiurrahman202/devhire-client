import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
// import axios from "axios";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass)
            .finally(() => setLoading(false));
    }

    const signIn = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
            .finally(() => setLoading(false));
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
            .finally(() => setLoading(false));
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            // console.log(currentUser)
            // if(currentUser?.email){
            //     axios.post("https://devhire-server-47ycxg3dh-moshiurrahman202s-projects.vercel.app/jwt", {email: currentUser.email}, {
            //         withCredentials: true
            //     })
            //     .then(res => {
            //         console.log(res.data);      
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     })
            // }
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const userInfo = {
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signOutUser,
        user
    }
    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;