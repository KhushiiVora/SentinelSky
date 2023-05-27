import React, { useState } from "react";
import axios from "axios";
import Header from "../components/header";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    const loginData = {
      username,
      password,
    };

    console.log(username);
    try {
      await axios.post("/login", loginData);
    } catch (error) {
      // Handle error
      // console.error("Error sending user data to MongoDB:", error);
    }
    event.preventDefault();
    // alert(`Username: ${username} Password: ${password}`);
  };

  return (
    <div>
      <Header />
      <div className="section">
        <div className="login-box">
          {/* <form onSubmit={handleSubmit}> */}
          <div>
            <h2>Login</h2>
            <div class="input-box">
              <span class="icon">
                <ion-icon name="username"></ion-icon>
              </span>
              <input
                type="text"
                value={username}
                name="username"
                onChange={(event) => setUsername(event.target.value)}
              />
              <label>Email</label>
            </div>
            <div class="input-box">
              <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type="password"
                value={password}
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <label>Password</label>
            </div>

            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
            <div className="already">
              Don't have an account? <span> </span>
              <Link to="/signup">signup</Link> Here.
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
