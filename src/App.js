import React, {useState} from 'react';
import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"


import firebase from "firebase/app";
import "firebase/auth"


import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PageNotFound from "./Pages/PageNotFound";
import { UserContext } from './Context/UserContext';
import Footer from './layout/Footer';
import Header from "./layout/Header"

import FireBaseConfig from "./config/FireBaseConfig";

firebase.initializeApp(FireBaseConfig);

const App = () => {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="*" component={PageNotFound}/>
        </Switch> 
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
