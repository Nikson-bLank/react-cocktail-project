import React from "react";
import {Switch, Route} from "react-router-dom"

// pages Import 
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Erorr";
import SingleCocktail from "./pages/SingleCocktail"
//component import 
import Navbar from "./component/Navbar";

function App() {
 
  return (
    <>
     <Navbar></Navbar>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path = "/about"><About></About></Route>
        <Route path = "/cocktail/:id"><SingleCocktail></SingleCocktail></Route>
        <Route path = "*"><Error></Error></Route>
      </Switch>
      
    </>
  );
}

export default App;
