// ProductItem.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { addItem, updateQuantity } from '../../ReduxStore/CartSlice';

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const itemInCart = cartItems.find(item => item.id === id);
  const quantityInCart = itemInCart ? itemInCart.quantity : 0;

  const handleAddToCart = () => {
    if (itemInCart) {
      dispatch(updateQuantity({ dataId: id, newQuantity: quantityInCart + 1 }));
    } else {
      dispatch(addItem({ id, title, price, description }));
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
