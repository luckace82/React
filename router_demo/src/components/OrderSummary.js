import { useNavigate } from "react-router-dom"
export const OrderSummary=()=>{
    const nvt=useNavigate()
    return (<div>
        <h1>OREDER  CONFIRMED</h1>
    <button onClick={()=>nvt(-1)}>go back</button>
    
    </div>
    )
}