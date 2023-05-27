import React, { useState } from "react";
import axios from "axios";
// import useHistory
import Header from "../components/header";
import { Link, useHistory } from "react-router-dom";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [weatherNotifications, setWeatherNotifications] = useState(false);
  const [disasterNotifications, setDisasterNotifications] = useState(false);
  const [notificationMethod, setNotificationMethod] = useState("");
  let requestLocationPermission = false;
  const [location, setLocation] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    let latitude = "";
    let longitude = "";

    // if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("User allowed location access");
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log("Inside if" + longitude, latitude);

        // setRequestLocationPermission(true);
        requestLocationPermission = true;
        console.log(requestLocationPermission);
        if (requestLocationPermission) {
          const userData = {
            username,
            email,
            password,
            mobileNumber,
            // weatherNotifications,
            // disasterNotifications,
            // notificationMethod,
            location: { latitude, longitude },
          };

          try {
            axios.post("/signup", userData);
            // Handle success
            // console.log("User data sent to MongoDB");
          } catch (error) {
            // Handle error
            // console.error("Error sending user data to MongoDB:", error);
          }
          const history = useHistory();
          history.push("/profile");
          // <Link to="/profile"></Link>;
        }

        // Perform sign-up logic here (e.g., API call)
      },
      (error) => {
        console.log("User denied location access");
        alert("Please allow access to your location to continue.");
      }
    );
    // } else {
    //   console.log("Geolocation is not supported by this browser");
    // }

    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     setLocation(
    //       `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
    //     );
    //     console.log("Before" + requestLocationPermission);
    //     setRequestLocationPermission(true);
    //     console.log("Before2" + requestLocationPermission);
    //     console.log(location);
    //   },
    //   (error) => {
    //     console.log(error);
    //     alert("Allow location");
    //     // setRequestLocationPermission(false);
    //     setLocation("Unable to retrieve location");
    //   }
    // );
    event.preventDefault();

    // Perform sign-up logic here (e.g., API call)

    // Reset form fields
    setUsername("");
    setEmail("");
    setPassword("");
    setMobileNumber("");
    setWeatherNotifications(false);
    setDisasterNotifications(false);
    setNotificationMethod("");
    setLocation("");
  };

  return (
    <div>
      <Header />
      <div className="Background"></div>
      <div className="signup-page">
        <h1 className="signup-heading">Sign Up</h1>
        {/* <form
          className="signup-form"
          method="post"
          action="/Displaydata"
          onSubmit={handleSubmit}
        > */}
        <div className="signup-form">
          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className="form-input"
              value={username}
              name="username"
              onChange={handleUsernameChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              name="email"
              onChange={handleEmailChange}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-input"
              value={password}
              name="password"
              onChange={handlePasswordChange}
              required
            />
            <label className="show-password">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={handleShowPasswordChange}
              />
              Show password
            </label>
          </div>

          {/* Mobile Number */}
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="text"
              id="mobileNumber"
              className="form-input"
              value={mobileNumber}
              name="mobileNumber"
              onChange={handleMobileNumberChange}
              required
            />
          </div>

          {/* Weather Notifications */}

          {/* Submit Button */}
          {/* <Link to="/profile"> */}
          <button
            type="submit"
            className="signup-button"
            formaction="/profilePage.js"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          {/* </Link> */}
          <div className="already">
            Already have an account?<span> </span>
            <Link to="/login">Login</Link> Here.
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}
export default SignUpPage;
