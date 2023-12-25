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
        <div className="Login-page">
      <div className="mybox">
        <form className="Loginform" onSubmit={handleLogin}>
          <div className="Logintext">
            <img src="/img/Loginlogo.png" alt="Login Logo" />
          </div>
          <div className="myinput">
            <ion-icon name="person"></ion-icon>
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
          <button onClick={()=> Navi("/")} >Home</button>
          
          <div className="Register">
            <p>
              IF YOU DON'T HAVE AN ACCOUNT <a href="./register.php">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    )
}