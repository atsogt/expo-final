import React from "react";
import { Switch, Route } from "react-router-dom";
import home from "./components/home/home";
import discover from "./components/discover/discover";
import artists from "./components/discover/artists";
import Signup from "./components/Signup/Signup";
import Login from "./components/login/login";
import pageSetup from "./components/pageSetup/pageSetup";
import displayPage from "./components/displayPage1/displayPage";
import portfolio from "./components/Portfolio/portfolio";
import workAdd from "./components/Portfolio/workAdd";
import nav2 from "./components/home/nav2";

export default (
  <Switch>
    <Route exact path="/" component={home} />
    <Route path="/discover" component={discover} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/auth/pageSetup" component={pageSetup} />
    <Route path="/auth/displayPage" component={displayPage} />
    <Route path="/auth/portfolio/add" component={workAdd} />
    <Route path="/auth/portfolio" component={portfolio} />
    <Route path="/auth/creators" component={artists} />
    <Route path="/loggedIn" component={nav2} />
  </Switch>
);
