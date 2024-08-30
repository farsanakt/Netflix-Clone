
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { getAuth } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAJKdJ6nBsxWxGD2WGQbGaQzQ9hKXwE8zs",
  authDomain: "netflix-clone-d3123.firebaseapp.com",
  projectId: "netflix-clone-d3123",
  storageBucket: "netflix-clone-d3123.appspot.com",
  messagingSenderId: "754038469669",
  appId: "1:754038469669:web:dc86b45c6caf0634783bcc"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)

const signup=async(name,email,password)=>{
    try {

       const res= await createUserWithEmailAndPassword(auth,email,password)
       const user=res.user;
       await addDoc(collection(db,'user'),{
        uid:user.uid,
        name,
        authProvider:'local',
        email,

       })
    } catch (error) {

        console.log(error)

        toast.error(error.code.split('/')[1].split('-').join(' '))
    }

}

const login=async(email,password)=>{
    try {

      await  signInWithEmailAndPassword(auth,email,password)
           
    } catch (error) {

    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(' '))

    }
}

const logout=async()=>{
    signOut(auth)
}


export {auth,db,login,signup,logout};