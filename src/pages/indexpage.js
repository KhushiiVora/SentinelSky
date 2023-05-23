import React from 'react';
import Header from '../components/header';

function IndexPage() {
  return (
   
    <div>
      <div className='bodi'>
      <Header/>
      <div class="heading">
    <h1 id="weather">Weather & Disaster SMS Notifications</h1><br/>
    <p><h4>Welcome to our website! We provide a service that sends SMS notifications to subscribed users about weather and nearby disasters.</h4></p>
  </div>

  {/* <div class="navbar">
    <ul>
      <li><a class="active" href="#home">Home</a></li>
      <li><a href="#profile">Profile</a></li>
      <li><a href="#login">Login</a></li>
      <li><a href="#signup">SignUp</a></li>
    </ul>
  </div> */}
  <div class="info">
    <div class="how">
      <span>How it Works?</span><br/>
      <ol>
        <li>Sign up for our service with your phone number and location.</li>
        <li>When there is severe weather or a disaster near your location, we will send you a text message with information and instructions.</li>
        <li>Stay safe and prepared!</li>
      </ol>
    </div>
    <img  src='../public/user.jpeg' id="message" alt='user'></img>    
    <div class="why">
      <span>Why Choose Us?</span><br/>
      <ul>
        <li>Reliable and accurate notifications.</li>
        <li>Customizable alert settings so you only receive notifications about the events that matter to you.</li>
        <li>24/7 support available.</li>
        <li>Easy to use and user-friendly interface.</li>
      </ul>
    </div>

    <div class="signup">
      <h2>Sign Up Now</h2>
      <p>Don't wait until it's too late! Sign up now to start receiving weather and disaster SMS notifications.</p>
      <button id="but" herf="/signup">Sign Up</button>
    </div>
    
  </div>
    </div>
   </div>
  );
}

export default IndexPage;
