import React, { useState } from "react";
import "./CreateAccount.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Create_Account = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //handle inpouts
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  //handle submits
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { username, password } = user;
    try {
      const res = await fetch("/register", {
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
        window.alert("Details Already in Use");
      } else {
        window.alert("Registered Successfully");
        // history.pushState("/login");
        navigate("/loginpage");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signUp_container">
      <div className="formR_container">
        <form onSubmit={handleSubmit} method="POST">
          <h2>Create An Account</h2>
          <div className="Reg_inputs">
            <input
              type="text"
              placeholder="Create Username"
              name="username"
              value={user.username}
              onChange={handleInput}
            />
            <br />
            <input
              type="text"
              Placeholder="Create password"
              name="password"
              value={user.password}
              onChange={handleInput}
            />
            <br />
            <button type="submit" className="createButtons">
              Create Account
            </button>
            <p>or</p>
            <Link to="/">
              <button id="go_home" className="createButtons">
                Home
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create_Account;
