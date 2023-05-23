import React, { useState } from 'react';
// import './SignUpPage.css';
import Header from '../components/header';


function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [weatherNotifications, setWeatherNotifications] = useState(false);
  const [disasterNotifications, setDisasterNotifications] = useState(false);
  const [notificationMethod, setNotificationMethod] = useState('');
  const [requestLocationPermission, setRequestLocationPermission] = useState(false);
  const [location, setLocation] = useState('');

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

  const handleWeatherNotificationsChange = (event) => {
    setWeatherNotifications(event.target.checked);
  };

  const handleDisasterNotificationsChange = (event) => {
    setDisasterNotifications(event.target.checked);
  };

  const handleNotificationMethodChange = (event) => {
    setNotificationMethod(event.target.value);
  };

  const handleRequestLocationPermissionChange = (event) => {
    setRequestLocationPermission(event.target.checked);
  };

  const handleLocationChange = () => {
    if (requestLocationPermission) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(
            `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
          );
        },
        (error) => {
          console.log(error);
          setLocation('Unable to retrieve location');
        }
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform sign-up logic here (e.g., API call)

    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setMobileNumber('');
    setWeatherNotifications(false);
    setDisasterNotifications(false);
    setNotificationMethod('');
    setLocation('');
  };
  return (
    <div>
      <Header/>
    <div className="signup-page">
      <h1 className="signup-heading">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-input"
            value={username}
            onChange={handleUsernameChange}
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
            onChange={handleEmailChange}
          />
        </div>
  
        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="form-input"
            value={password}
            onChange={handlePasswordChange}
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
            onChange={handleMobileNumberChange}
          />
        </div>
  
        {/* Weather Notifications */}
        <div className="form-group">
          <label htmlFor="weatherNotifications">Weather Notifications:</label>
          <input
            type="checkbox"
            id="weatherNotifications"
            checked={weatherNotifications}
            onChange={handleWeatherNotificationsChange}
          />
        </div>
  
        {/* Disaster Notifications */}
        <div className="form-group">
          <label htmlFor="disasterNotifications">Disaster Notifications:</label>
          <input
            type="checkbox"
            id="disasterNotifications"
            checked={disasterNotifications}
            onChange={handleDisasterNotificationsChange}
          />
        </div>
  
        {/* Notification Method */}
        <div className="form-group">
          <label htmlFor="notificationMethod">Notification Method:</label>
          <select
            id="notificationMethod"
            className="form-input"
            value={notificationMethod}
            onChange={handleNotificationMethodChange}
          >
            <option value="">Select method</option>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
          </select>
        </div>
  
        {/* Request Location Permission */}
        <div className="form-group">
          <label htmlFor="requestLocationPermission">Request Location Permission:</label>
          <input
            type="checkbox"
            id="requestLocationPermission"
            checked={requestLocationPermission}
            onChange={handleRequestLocationPermissionChange}
          />
        </div>
  
        {/* Location */}
        {requestLocationPermission && (
          <div className="form-group">
            <button type="button" onClick={handleLocationChange}>
              Get Location
            </button>
            {location && <p>{location}</p>}
          </div>
        )}
  
        {/* Submit Button */}
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
    </div>
  );
        }  
export default SignUpPage;