
import CocktailList from "../components/CocktailList"
import SearchForm from '../components/SearchForm'
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Jumbotron from '../components/jumbotron'
 


const Home = () => {
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [])

const navigate = useNavigate();
 
const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    });
}


  return (
    <main>
    <Jumbotron/>
    <SearchForm></SearchForm>
      <CocktailList></CocktailList>
   
    </main>
  )
}

export default Home
