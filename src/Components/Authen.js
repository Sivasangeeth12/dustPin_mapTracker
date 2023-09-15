import React, { useState } from 'react'
import {auth}from "../firebase-config"
import {createUserWithEmailAndPassword,signOut} from "firebase/auth"

const Authen = () => {
  const [email,setEmail]=useState("");
  const [password,SetPassword]=useState("");
  console.log(auth?.currentUser?.email);
  const signIN=async()=>
  {
      await createUserWithEmailAndPassword(auth,email,password)
  }
  
  const logOut=async()=>
  {
      await signOut(auth)
  }
  return (
    <div>
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input placeholder="Password" type="password" onChange={(e)=>SetPassword(e.target.value)}/>
        <button onClick={signIN}>Sign In</button>
        <br/>
        <hr/>
        <button onClick={logOut}>LogOut</button>
    </div>
  )
}

export default Authen;