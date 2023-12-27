import { useNavigate } from "react-router-dom"
import { useEffect} from 'react'
export default function Error(){
    let Navi = useNavigate();
    useEffect(() => {
        // setTimeout(() => {
        //     Navi('/');
        // }, 2000);
      });
    return(
        <div>
            <h1> ERRORRRR Page not found</h1>
            <button onClick={()=> Navi("/")}>Retrun To home</button>
        </div>
        
    )
}