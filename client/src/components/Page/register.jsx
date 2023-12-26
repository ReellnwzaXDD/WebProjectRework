import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    let Navi = useNavigate();
    const checkUsername = async () => {
        try{
            const response = await fetch(`http://localhost:3001/chkusername?username=${username}`)
            const data = await response.json();

            if (data.available) {
                document.getElementById('username').classList.add('approved');
                handleSubmit();
            }else{
                document.getElementById('username').classList.add('denied');
                alert('Username is already taken. Please choose another.');
            }
        } catch (error){
            console.error('Error', error.message);
        }
    };

    const handleSubmit = async () => {
        try{
            if (!username || !password || !name || !surname || !email || !phone || !address) {
                alert('Please fill in all required fields.');
                return;
            }
            const response = await fetch('http://localhost:3001/register', { // Use Post API 
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  username,
                  password,
                  name,
                  surname,
                  email,
                  phone,
                  address,
                }),
              });
            const data = await response.json();    
            if (data.success) {
                // Login successful
                console.log('Register successful');
                Navi("/login");
              } else {
                // Login failed
                console.error('Please try again.');
              }
        }catch (error) {
            console.error('Error', error.message);
          }
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        checkUsername();
      };
    
    return(
        <html lang="en" data-theme="emerald">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>O'clock</title>
            <link rel="icon" type="image/x-icon" href="/img/logo.png" />
            <link rel="stylesheet" href="/css/styleReg.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300&display=swap" rel="stylesheet" />
            <script src="app.js" defer></script>
            <link rel="stylesheet" href="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.css" />
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" defer></script>    
        </head>
        <form id="Regform" onSubmit={handleFormSubmit}>
        <h1 className="Reg_Header">Create Account</h1>
        <p>Username:</p>
        <input
            type="text"
            id='username'
            pattern="[A-Za-z0-9]{3,20}"
            
            required
            onChange={(e) => setUsername(e.target.value)}
        />
        <p>Password:</p>
        <input
            type="password"
            pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$"
            title="password ต้องมี8ตัว ตัวใหญ่ 1 ตัวเล็ก 1 ตัวเลข1"
            required
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
        />
        <p>ConfPass:</p>
        <input
            type="password"
            pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p>Name:</p>
        <input
            type="text"
            placeholder="ชื่อ"
            required
            onChange={(e) => setName(e.target.value)}
        />
        <p>Surname:</p>
        <input
            type="text"
            placeholder="นามสกุล"
            required
            onChange={(e) => setSurname(e.target.value)}
        />
        <p>Email:</p>
        <input
            type="text"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
            onChange={(e) => setEmail(e.target.value)}
        />
        <p>Tel:</p>
        <input
            type="text"
            pattern="^(\+66|0)[0-9]{1,2}[0-9]{3}[0-9]{4,5}$"
            placeholder="phone"
            required
            onChange={(e) => setPhone(e.target.value)}
        />
        <p>Address:</p>
        <input
            type="text"
            placeholder="ที่อยู่"
            required
            onChange={(e) => setAddress(e.target.value)}
        />

        <a href="../index.php">Home </a>
        <input type="submit" name="Submit" id="btnreg" value="Register" />
            </form>
    </html>
    )
}