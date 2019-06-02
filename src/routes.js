import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import discover from "./components/discover/discover";
import discover0 from "./components/discover/discover0";
import artists from "./components/discover/artists";
import artists1 from "./components/discover/artists";
import Signup from "./components/Signup/Signup";
import Login from "./components/login/login";
import pageSetup from "./components/pageSetup/pageSetup";
import displayPage from "./components/displayPage1/displayPage";
import portfolio from "./components/Portfolio/portfolio";
import workAdd from "./components/Portfolio/workAdd";
import welcome from "./components/welcome/welcome";
import Contact from "./components/contactForm/contactForm";

export default (
  <Switch>
    <Route exact path="/welcome" component={welcome} />
    <Route exact path="/" component={welcome} />
    <Route exact path="/discover" component={discover} />
    <Route path="/contact" component={Contact} />
    <Route path="/discover0" component={discover0} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/auth/pageSetup" component={pageSetup} />
    <Route path="/auth/displayPage" component={displayPage} />
    <Route path="/auth/portfolio/add" component={workAdd} />
    <Route path="/auth/portfolio" component={portfolio} />
    <Route path="/auth/creators" component={artists} />
    <Route path="/auth/creatorsLogged" component={artists1} />
    <Route path="/loggedIn" component={Home} />
  </Switch>
);
