import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useGlobalContext} from "./context";
//import pages
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';
//import components
import Navbar from './components/Navbar'


function App() {
  

  return (
    <Router>
      <Navbar path="/"></Navbar>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/cocktail/:id" element={<SingleCocktail></SingleCocktail>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </Router>
  )
}

export default App
