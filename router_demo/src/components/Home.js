import { useNavigate } from "react-router-dom"

export const Home=()=>{
    const nvte=useNavigate();

    
    return (<div>Home page

        <br/>
        <button onClick={()=>  nvte('Order')}>submit</button>
    </div>
    
    )
}