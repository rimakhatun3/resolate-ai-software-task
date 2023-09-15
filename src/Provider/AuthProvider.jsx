import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/_firebase_config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const auth = getAuth(app)
const goggleProvider = new GoogleAuthProvider()
const[user,setUser] = useState(null)
const [loading,setLoading] = useState(true)

const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}

const signInGoggle =()=>{
    setLoading(true)
    return signInWithPopup(auth,goggleProvider)
}

const updateUser = (name,photo)=>{
return updateProfile(auth.currentUser,{
displayName:name, photoURL:photo
})
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        
    })

    return ()=>{
       unSubscribe
    }
},[])


const authInfo ={
    loading,
    user,
    signIn,
    createUser,
    logOut,
    signInGoggle,
    updateUser
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;