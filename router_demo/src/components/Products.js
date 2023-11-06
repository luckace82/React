import { Link,Outlet } from "react-router-dom"
export const Products = () => {
  return (
    <div>
          <div>Products</div>
    <nav>

    <Link to='FeaturedProducts'>Featured Products</Link>
    <Link to='NewProducts'>New Products</Link>

    </nav>
    <Outlet/>
    </div>
  
  )
}
