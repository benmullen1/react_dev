import React from "react";
import CartItemModel from "./CartItemModel";
import CartModel from "./CartModel";
import MenuItemModel from "./MenuItemModel";

let model:CartModel = new CartModel(new Array<CartItemModel>());

const CartContext = React.createContext({
    cart:model,
    updateCart:(item:MenuItemModel, amount:number)=>{}
});

/* function onAddCartItem(item:MenuItemModel, amount:number, updateTime?:Date){
     
    let updatedUpdateTime:Date = (updateTime ? updateTime: new Date(Date.now()));
    let cartItem:CartItemModel = new CartItemModel(item.name, item.price, item.iconPath, item.id, amount, updateTime);
        
    console.log("added " + amount + " item of " + item.name);
}

function onRemoveCartItem(item:MenuItemModel, amount:number, updateTime?:Date){ 
    console.log("removed item")
} */



export default CartContext;