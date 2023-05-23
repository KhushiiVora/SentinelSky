import React, { useState } from 'react';
import Header from "../components/header";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      alert(`Username: ${username} Password: ${password}`);
    }  

    return (
        <div>
            <form onSubmit={handleSubmit}></form>
            <Header/>
     <section>
        <div class="login-box">
            <form action="">
                <h2>Login</h2>
                <div class="input-box">
                    <span class="icon"><ion-icon name="username"></ion-icon></span>
                    <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
                    <label>Password</label>
                </div>
                
                <button type="submit">Login</button>
                
            </form>
        </div>
    </section>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </div>
    );
  }
   
  export default Login;