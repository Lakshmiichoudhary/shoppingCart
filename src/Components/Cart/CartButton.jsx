import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../ReduxStore/CartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQty)

  const handletoggleCart = () => {
    dispatch(toggleCart())
  }

  return (
    <button className={classes.button} onClick={handletoggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;