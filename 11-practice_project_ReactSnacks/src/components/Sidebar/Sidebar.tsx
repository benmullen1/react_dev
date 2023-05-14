import React, {useContext} from 'react';
import CartContext from '../../model/cart-context';
import CartItemModel from '../../model/CartItemModel';
import Button from '../UI/Button/Button';
import classes from './Sidebar.module.css';

const Sidebar = () => {

  const ctx = useContext(CartContext);

  function checkoutHandler(){
    console.log("Checking out");

  }

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
            
            /* <table>
              <tbody>
              
                <tr>
                <td rowSpan={3}>
                  
                </td>
                <tr>
                <td>Name: {item.name}</td>
                </tr>
                <tr>
                <td>Amount: {item.amount}</td>
                </tr>
              </tr>
              <tr>
                <td>Cost: {item.amount * item.price}</td>
                <td><button className='cancel' onClick={(event:any) =>{removeItemHandler(event, item)}}><img className='cancel' title='Cancel' src={'/images/icons/cancel.png'} alt="Remove Item"></img></button></td>
              </tr>
              </tbody>
            </table> */
            
            <div>
              <span><img className={classes.icon} src={item.iconPath} alt={item.name}/>{item.name}</span>
              <div>
              <p>Amount: {item.amount}</p>
              <p>Cost: {item.amount * item.price}</p>
              </div>
              <span><button className={classes.cancel} onClick={(event:any) =>{removeItemHandler(event, item)}}><img className={classes.cancel} title='Cancel' src={'/images/icons/cancel.png'} alt="Remove Item"></img></button></span>
            </div>
            
            }
          </li> 
        ))}
      </ul>
      <br></br>
    <span>Total Cost: {ctx.cart.getCartTotal()}</span>
    <Button onClick={checkoutHandler}>Checkout</Button>
    </React.Fragment>
  );
};

export default Sidebar;
