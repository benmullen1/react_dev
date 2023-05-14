import React, { useContext } from 'react';
import classes from './MenuItem.module.css';
import MenuItemModel from "../../model/MenuItemModel";
import CartContext from '../../model/cart-context';
import Button from '../UI/Button/Button';

interface MenuItemProps {
    item:MenuItemModel
}

const MenuItem = (props: MenuItemProps)=>{
    
    const ctx = useContext(CartContext);

    function clickHandler(event:any, item:MenuItemModel){
        console.log("Clicked on item " + item.name);
        ctx.updateCart(item,1);
    };

    return(
        <div className={classes.item}>
            <img src={props.item.iconPath} alt={props.item.name}/>
            <p>
                <span>Name: {props.item.name}</span>
                <br/>
                <span>Price: {props.item.price} </span>
                <span><Button onClick={(event:any) =>{clickHandler(event, props.item)}}>Add to Cart</Button></span>
            </p>
        </div>
    );

}

export default MenuItem;