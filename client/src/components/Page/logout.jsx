import {  useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Logout(){
    let Navi = useNavigate();
    useEffect(() => {
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('isLoggedIn');
        setTimeout(() => {
            alert("You have been logout!")
            Navi('/');
        }, 1000);
      });
    return(
        <div>
            <h1>You are Logout!</h1>
        </div>
    )
}