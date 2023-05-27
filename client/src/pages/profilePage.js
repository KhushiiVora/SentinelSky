import React from 'react';
import Header from '../components/header';

function ProfilePage() {
  return (
    <div className="profilePage">
    <Header/>
    
    <div className="profile-page">
      <h1>Welcome to our Weather App!</h1>
      <p>Stay informed about the weather and potential disasters in your area.</p>

      <form>
        <h2>Subscribe to Notifications</h2>
        <div className='checkbox'>
        <label>
          <input type="checkbox" name="weather" />
          Weather Alerts
        </label>
        <br />
        <label>
          <input type="checkbox" name="disaster" />
          Disaster Alerts
        </label>
        <br />
        </div>
        <button className='button-89' type="submit">Subscribe</button>
      </form>

      <p>Don't want to receive notifications? No problem! You can still browse the latest weather information and forecasts on our website.</p>
    </div>
    </div>
  );
}

export default ProfilePage;
