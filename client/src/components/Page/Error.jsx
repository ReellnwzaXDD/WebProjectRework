import { Link, useNavigate } from "react-router-dom"
export default function Error(){
    let Navi = useNavigate();
    return(
        <div>
            <h1> ERRORRRR Page not found</h1>
            <button onClick={()=> Navi("/")}>Retrun To home</button>
        </div>
        
    )
}