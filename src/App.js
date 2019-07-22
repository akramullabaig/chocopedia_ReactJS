import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import chocolateslist from "./Components/Chocolatelist"
import ChocolateDetails from "./Components/ChocolateDetails"
import BrandDesc from "./Components/BrandDesc"
import Signup from "./Components/Signup";
import BrandList from "./Components/BrandDetails";
import Login from "./Components/Login";
import Search from "./Components/Search";
import Home from './Components/Home';
function App() {
  return (
    <>






      <Route path="/" component={Login} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/brands" exact component={BrandList} />
      <Route path="/chocolates" exact component={chocolateslist} />
      {/* <Route path="/login" exact component={Login} /> */}
      <Route path="/signup" exact component={Signup} />
      <Route path="/chocolatedetails/:id" exact render={props => <ChocolateDetails {...props} />} />
      <Route path="/BrandDesc/:id" exact render={props => <BrandDesc {...props} />} />
      <Route path="/search" exact component={Search} />



    </>
  );
}
export default App;
