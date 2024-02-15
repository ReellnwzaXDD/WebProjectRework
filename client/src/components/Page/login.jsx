import { useState,useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import Styles from "../css/login.module.css";
export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let Navi = useNavigate();

    useEffect(() => {
      // Check if the user is already logged in
      const isLoggedIn = sessionStorage.getItem('isLoggedIn');
      console.log(isLoggedIn);
      if (isLoggedIn) {
        // Redirect to another page, e.g., the dashboard
        Navi('/shop');
      }
    }, [Navi]);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (!username || !password) {
              alert('Please fill in all required fields.');
              return;
            }
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
            // set user session 
            sessionStorage.setItem('id',data.uid);
            sessionStorage.setItem('username',data.username);
            sessionStorage.setItem('isLoggedIn',true);
            console.log('Login successful');
            Navi('/shop');
          } else {
            // Login failed
            alert('Invalid username or password. Please try again.');
            console.error('Invalid username or password. Please try again.');

          }
        } catch (error) {
          console.error('Error during login:', error.message);
        }
        
      };
    return(
      <html lang="en" data-theme="emerald">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/css/stylelog.css" />
        </head>
        <br/><br/>
        <div className={Styles.Login_page}>
        <div className={Styles.mybox}>
          <form className={Styles.Loginform} onSubmit={handleLogin}>
            <div className={Styles.Logintext}>
              <img src="/img/Loginlogo.png" alt="Login Logo" />
            </div>
            <div className={Styles.myinput}>
            <ion-icon name="home" class="text-4xl text-blue-500"></ion-icon>
              <input
                type="text"
                placeholder="USERNAME"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={Styles.myinput}>
              <ion-icon name="lock-closed"></ion-icon>
              <input
                type="password"
                placeholder="PASSWORD"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={Styles.Remember}>
              <p>
                <input type="checkbox" value="Remember" />
                REMEMBER ME!
              </p>
            </div>
            <input type="submit" value="Login" className="btnlogin" />
            <button className="btn btn-outline btn-success "  onClick={()=> Navi("/")} >Home</button> 
            <div className={Styles.Register}>
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