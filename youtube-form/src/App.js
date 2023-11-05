
import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';
const App=()=>{
  const [username,setusername]=useState("")

  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(username)
    const data =new FormData(e.target)
    console.log(data)
  }
  return<div className='app'>
    <form onSubmit={handleSubmit}>
    
      <FormInput  name="username "placeholder="Username" setusername={setusername}/>
      <FormInput name="name "placeholder="name"/>

      <FormInput name="email "placeholder="email"/>

      <FormInput name="phone no "placeholder="phone no"/>

   <button>submit</button>
    </form>

  </div>
}

export default App;
