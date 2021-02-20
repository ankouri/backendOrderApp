import React, { useContext, useState, useEffect } from 'react'
import { auth , db } from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}
const UserInfromation = {
    id:'12',
    username:'',
    email:'',
    adress:'',
    phone:'',
    isadmin:'',
    createAt:'',
    lastLog:''
}

export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState('')
    const [ loading, setLoading ] = useState(true)


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        });
        return unsubscribe
    }, [])
    
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

    function addUser(uid, username, email,adress ,phone, avatar, isadmin){

        db.collection("users").doc(uid).set({
            uid: uid,
            username: username ? username : "",
            email : email,
            adress : adress ? adress : "",
            avatar : avatar ? adress : "",
            phone : phone ? phone : "",
            isadmin :isadmin ? isadmin : 0
        })
        .then(() => {
           return true;
        })
        .catch((error) => {
            return false;
        });
    }

    function getProfile(){
        var docRef = db.collection("users").doc(currentUser.uid);
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log(doc.data().uid);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
 

    const value = {
        currentUser,
        UserInfromation,
        login,
        logout,
        addUser,
        getProfile,
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
