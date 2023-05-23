import React, {useContext} from 'react';
import CartContext from '../../model/cart-context';
import CartItemModel from '../../model/CartItemModel';
import classes from './Sidebar.module.css';
import CartWidget from '../UI/CartWidget/CartWidget';

const Sidebar = () => {

  const ctx = useContext(CartContext);

  function removeItemHandler(event:any, item:CartItemModel){
    console.log("removing item " + item.name);
    ctx.updateCart(item, -1);
  }

  //const [items, setItems] = useState(ctx.cart.items);
  console.log("sidebar thinks cart looks like " + ctx.cart.items.length + " items");
  console.log("sidebar thinks cart was last updated at " + ctx.cart.lastUpdateTime);

  return (
    <React.Fragment>
      <ul className={classes.sidebar}>
        {ctx.cart.items.map((item) => (  
          <li key={item.id} >
            {          
            <div className={classes.sidebar_item}>
              <span><img className={classes.icon} src={item.iconPath} alt={item.name}/>{item.name}</span>
              <span>
                <p>Amount: {item.amount}</p>
                <p>Cost: {(item.amount * item.price).toFixed(2)}</p>
              </span>
              <span><button className={classes.cancel} onClick={(event:any) =>{removeItemHandler(event, item)}}><img className={classes.cancel} title='Cancel' src={'/images/icons/cancel.png'} alt="Remove Item"></img></button></span>
            </div>
            }
          </li> 
        ))}
      </ul>

    
    {ctx.cart.items.length > 0 &&
    <span>
      <br></br>
      <span>Total Cost: {ctx.cart.getCartTotal()}</span>
      <br></br>
      Checkout:
      <CartWidget></CartWidget>
    </span>}

    </React.Fragment>
  );
};

export default Sidebar;
