import React, { useState } from "react";
import "./loginpage.css";
import { Link } from "react-router-dom";

const Login_page = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //handle inputs
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  //handle login submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = user;

    try {
      const res = await fetch("/loginpage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (res.status === 400 || !res) {
        window.alert("Inavlid Credentials");
      } else {
        window.alert("Logged In :D");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login_container">
      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <h2>Log In</h2>
          <div className="inputs">
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              Placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <br />
            <button type="submit" className="loginButtons">
              Login
            </button>
            <p>or</p>
            <Link to="/">
              <button className="loginButtons">Home</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login_page;
