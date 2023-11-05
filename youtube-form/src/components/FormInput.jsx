import './formInput.css';

const FormInput=(props)=>{
    return(
        <div className="FormInput">
            <label>UserName</label>
            <input name={props.name}
             placeholder={props.placeholder} 
            onChange={e=>props.setusername(e.target.value)}
                />
        </div>
    )
}
export default FormInput