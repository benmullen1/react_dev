import React, {useState, useEffect} from 'react';
import classes from './App.module.css';
import Footer from './components/Footer/Footer';
import MainHeader from './components/MainHeader/MainHeader';
import Platform from "./components/Platform/Platform";
import AuthContext from './model/auth-context';
import CartContext from './model/cart-context';
import CartItemModel from './model/CartItemModel';
import CartModel from './model/CartModel';
import MenuItemModel from "./model/MenuItemModel";
import ItemProvider from "./services/ItemProvider"

function App() {

  let menuItems = ItemProvider.getMenuItems(); 

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [cart, setCartItems] = useState<CartModel>(new CartModel(new Array<CartItemModel>()));

  //const [menuItems, setMenuItems] = useState(new Array<MenuItemModel>());

  useEffect(()=>{

    //setup Login stuff
    const isLoggedInFlag = localStorage.getItem("isLoggedIn");
    if (isLoggedInFlag === '1'){
      setIsLoggedIn(true);
    }
  }, []); //no dependencies, so only runs once on startup

  //setup Menu stuff

  

  const loginHandler = (username:string, password:string) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn','1');
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const updateCartHandler = (item:MenuItemModel, amount:number) =>{
      cart.addOrUpdateCartItem(item, amount);
      cart.lastUpdateTime = new Date(Date.now());
      setCartItems(new CartModel(cart.items.slice()));//other contexts will not update without this
      console.log("there are " + cart.items.length + " items in the cart");
  };

  const resetCartHandler = () =>{
    console.log("Clear Cart");
    setCartItems(new CartModel(new Array<CartItemModel>()));
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogOut: logoutHandler
    }}>
      <CartContext.Provider value={{ 
        cart:cart, 
        updateCart:updateCartHandler,
        resetCart:resetCartHandler
      }}>

      <div className={classes.container}>
        <div className={classes.header}><MainHeader></MainHeader></div>
        <div className={classes.platform}><Platform items={menuItems}></Platform></div>
        <div className={classes.footer}><Footer loginHandler={loginHandler}></Footer></div>
      </div>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
