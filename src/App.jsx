import { useDispatch, useSelector } from "react-redux"
import Cart from "./Components/Cart/Cart"
import Layout from "./Components/Layout/Layout"
import Products from "./Components/Store/Products"
import { useEffect } from "react"
import Notification from "./Components/UI/Notification"
import { showNotification } from "./ReduxStore/CartSlice"

let isInitial = true;


function App() {
  const dispatch = useDispatch()
  const showCart = useSelector((state) => state.cart.showCart)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.cart.notification)
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
      const response = await fetch(
        'https://shoppingcart-cbc4f-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(
        showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    });
  }, [cart, dispatch]);

 
 
  return (
    <>
    {notification && ( <Notification
      status={notification.status}
      title={notification.title}
      message={notification.message}
       />)}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>  
  )
}

export default App
