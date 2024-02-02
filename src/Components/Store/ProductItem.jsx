import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { addItem } from '../../ReduxStore/CartSlice';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch()
  const addItems = useSelector((state) => state.cart.items)

  const handleAddItem = () => {
    dispatch(addItem({title,price,description}))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;