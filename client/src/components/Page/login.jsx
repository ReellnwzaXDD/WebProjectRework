import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let Navi = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/login', { // Use Post API 
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  username,
                  password,
                }),
              });
    
          const data = await response.json();
    
          if (data.success) {
            // Login successful
            // Handle storing user details in session or redirect to another page
            console.log('Login successful');
            Navi("/shop");
          } else {
            // Login failed
            console.error('Invalid username or password. Please try again.');
          }
        } catch (error) {
          console.error('Error during login:', error.message);
        }
      };
    return(
      <html lang="en" data-theme="emerald">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>O'clock</title>
            <link rel="icon" type="image/x-icon" href="/img/logo.png" />
            <link rel="stylesheet" href="/css/stylelog.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300&display=swap" rel="stylesheet" />
            <script src="app.js" defer></script>
            <link rel="stylesheet" href="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.css" />
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" defer></script>
        </head>
        <div className="Login-page">
        <div className="mybox">
          <form className="Loginform" onSubmit={handleLogin}>
            <div className="Logintext">
              <img src="/img/Loginlogo.png" alt="Login Logo" />
            </div>
            <div className="myinput">
            <ion-icon name="home" class="text-4xl text-blue-500"></ion-icon>
              <input
                type="text"
                placeholder="USERNAME"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="myinput">
              <ion-icon name="lock-closed"></ion-icon>
              <input
                type="password"
                placeholder="PASSWORD"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="Remember">
              <p>
                <input type="checkbox" value="Remember" />
                REMEMBER ME!
              </p>
            </div>
            <input type="submit" value="Login" className="btnlogin" />
            <button className="btn btn-outline btn-success "  onClick={()=> Navi("/")} >Home</button> 
            <div className="Register">
              <p>
                IF YOU DON'T HAVE AN ACCOUNT <button onClick={()=> Navi("/register") } className="link link-error" >Register</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </html>
    )
}