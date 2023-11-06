
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Navbar } from './components/nav';
import { Home } from './components/Home';
import { About   } from './components/About';
import { OrderSummary } from './components/OrderSummary';
import { NewProducts } from './components/NewProducts';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Products } from './components/Products';
 function App() {

return(
  <>
  <Navbar />
  <Routes>
  <Route path='/' element={<Home/>}/>

  <Route path='Order' element={<OrderSummary />}/>
  
  <Route path='About' element={<About/>}/>
  <Route path='Products' element={<Products/>}>
  <Route path='NewProducts' element={<NewProducts/>}/>
  <Route path='FeaturedProducts' element={<FeaturedProducts/>}/>

  </Route>



    
  
  </Routes>
  </>       
)
  
}

export default App;
