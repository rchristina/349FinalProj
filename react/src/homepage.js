import React from "react";
import "./homepage.css";
import logo from "./Welcome.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="home_container">
      <div className="welcome_logo">
        <img src={logo} alt="Welcome to Christina's Kitchen" />
      </div>

      <div className="login_buttons">
        <Link to="/loginpage">
          <button className="home_buttons">Log In</button>
        </Link>

        <Link to="createAccount">
          <button className="home_buttons">Sign Up</button>
        </Link>
      </div>

      <div className="browse_container">
        <h1> Browse By Ingredient</h1>

        <div className="ingredients">
          <div className="tag_container">
            <h2>Chicken</h2>
          </div>

          <div className="tag_container">
            <h2>Beef</h2>
          </div>

          <div className="tag_container">
            <h2>Pork</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
