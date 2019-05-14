import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Home from "../home/home";
import Nav2 from "../home/nav2";
import Home from "../home/home";

import styles from "./artists.module.scss";

import Axios from "axios";

export class artists extends Component {
  constructor() {
    super();
    this.state = {
      creators: []
    };
  }
  componentDidMount() {
    Axios.get("/auth/creators").then(res => {
      this.setState({
        creators: res.data
      });
    });
  }
  render() {
    console.log(this.state.creators);
    let mapped = this.state.creators.map((val, index) => {
      return (
        <div key={index}>
          <img src={val.img} />
          <h3>Artist: {val.name}</h3>
          <h3>Practice: {val.medium}</h3>
          {/* <h3>Bio: {val.bio}</h3> */}
        </div>
      );
    });
    return (
      <div>
        <Home />
        <p> List of Artists</p>
        <div className={styles.creators}>
          <Link to="/discover0">
            <h1>Works</h1>
          </Link>
          <Link to="/auth/creators">
            <h1>Artists</h1>
          </Link>
        </div>
        {mapped}
      </div>
    );
  }
}

export default artists;