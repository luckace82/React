
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Navbar } from './components/nav';
import { Home } from './components/Home';
import { About   } from './components/About';
import { OrderSummary } from './components/OrderSummary';
 function App() {

return(
  <>
  <Navbar />
  <Routes>
  <Route path='/' element={<Home/>}/>

  <Route path='Order' element={<OrderSummary />}/>
  
  <Route path='About' element={<About/>}/>
    
  
  </Routes>
  </>       
)
  
}

export default App;
