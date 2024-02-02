import { useSelector } from "react-redux"
import Cart from "./Components/Cart/Cart"
import Layout from "./Components/Layout/Layout"
import Products from "./Components/Store/Products"

function App() {
  const showCart = useSelector((state) => state.cart.showCart)
 
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  )
}

export default App
