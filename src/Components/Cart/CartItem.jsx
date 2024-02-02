import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { removeItem, updateQuantity } from '../../ReduxStore/CartSlice';

const CartItem = (props) => {
  const {id, title, quantity, price } = props.item;
  const dispatch = useDispatch();

  const handleDecreaseQuantity = () => {
    dispatch(updateQuantity({ dataId: id, newQuantity: quantity - 1 }));
  };

  const handleIncreaseQuantity = () => {
    dispatch(updateQuantity({ dataId: id, newQuantity: quantity + 1 }));
  };

  const handleDelete = () => {
    dispatch(removeItem(id))
  }

  const total = quantity * price;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecreaseQuantity}>-</button>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
        <button onClick={handleDelete}>Remove</button>
      </div>
    </li>
  );
};

export default CartItem;