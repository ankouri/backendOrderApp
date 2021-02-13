// REACT_APP_FIREBASE_API =AIzaSyAPXbo4vdyKEUBRHf5WN1jmGGBTdR0iiBA
// REACT_APP_FIREBASE_DOMAIN =auth-dev-50406.firebaseapp.com
// REACT_APP_FIREBASE_DATABASE =https://auth-dev-50406-default-rtdb.firebaseio.com 
// REACT_APP_FIREBASE_PROJECT =auth-dev-50406
// REACT_APP_FIREBASE_STORAGE =auth-dev-50406.appspot.com
// REACT_APP_FIREBASE_MESSAGIN =311415817224 
// REACT_APP_FIREBASE_APPID =1:311415817224:web:583659087a30dd74c7bdbd 

import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState()
    const [ loading, setLoading ] = useState(true)

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }
    
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email){
        return currentUser.updateEmail(email)
    }

    function updatePassword(password){
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })
            
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
    )
}
