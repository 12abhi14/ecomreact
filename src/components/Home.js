import React,{useState,useEffect} from 'react'
import '../css/Home.css'
import { Navbar } from './Navbar'
import { Products } from './Products'
import {auth,db } from '../Config/Config'
import { fetchSignInMethodsForEmail } from 'firebase/auth'

export const Home = () => {

  // current user function
  function GetCurrentUser(){
    const [user,setUser]=useState(null);
    useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        if (user){
          db.collection('users').doc(user.uid).get().then(snapshot=>{
            setUser(snapshot.data().FullName);
          })
          
        }
        else{
          setUser(null)
        }
      })
    })
    return user;
  }

  const user = GetCurrentUser();
  console.log(user);
  return (
    <div className='wrapper'>
        <Navbar/>
        <Products/>
    </div>
  )
}
