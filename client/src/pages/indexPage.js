import React from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

function IndexPage() {
  return (
    <div className="bodi">
      <Header />
      <div class="heading">
        <h1 id="weather">SentinelSky</h1>
        <div className="sub">
          <span className="head">Subscribe to </span>
          <TypeAnimation
            className="typing"
            sequence={[
              "Email-Notifications", // Types 'One'
              1000, // Waits 1s
              "SMS-Notification", // Deletes 'One' and types 'Two'
              1000, // Waits 2s
            ]}
            cursor={true}
            repeat={Infinity}
          />
        </div>
        <p>
          <h4>
            Welcome to our website! We provide a service that sends SMS
            notifications to subscribed users about weather and nearby
            disasters.
          </h4>
        </p>
      </div>
      <br />

      <div class="element-items">
        <div>
          <span>How it Works?</span>
          <br />
          <ol>
            <li>
              Sign up for our service with your phone number and location.
            </li>
            <li>
              When there is severe weather or a disaster near your location, we
              will send you a text message with information and instructions.
            </li>
            <li>Stay safe and prepared!</li>
          </ol>
        </div>
        <img src="/user.jpeg" className="image" alt="" />
      </div>

      <div class="element-items">
        <img src="/weather4.jpg" alt="" className="image" />
        <div>
          <span>Why Choose Us?</span>
          <br />
          <ul>
            <li>Reliable and accurate notifications.</li>
            <li>
              Customizable alert settings so you only receive notifications
              about the events that matter to you.
            </li>
            <li>24/7 support available.</li>
            <li>Easy to use and user-friendly interface.</li>
          </ul>
        </div>
      </div>

      <div class="signup">
        <div className="sign">Sign Up Now</div>
        <p className="message">
          Don't wait until it's too late! Sign up now to start receiving weather
          and disaster SMS notifications.
        </p>
        <Link to="/signup">
          <button id="but" herf="/signup">
            Sign Up
          </button>
        </Link>
      </div>
      <br />
    </div>
  );
}

export default IndexPage;
