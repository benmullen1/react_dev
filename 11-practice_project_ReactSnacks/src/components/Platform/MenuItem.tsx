import React, { useContext, useRef } from 'react';
import classes from './MenuItem.module.css';
import MenuItemModel from "../../model/MenuItemModel";
import CartContext from '../../model/cart-context';
import Button from '../UI/Button/Button';

interface MenuItemProps {
    item:MenuItemModel
}

const MenuItem = (props: MenuItemProps)=>{
    
    const ctx = useContext(CartContext);
    const amountRef = useRef<HTMLInputElement | undefined>();

    function clickHandler(event:any, item:MenuItemModel){
        console.log("Clicked on item " + item.name);
        let amount:number = 1;
        if (amountRef.current){
            amount = Number.parseInt(amountRef.current['value']);
        }
        ctx.updateCart(item,amount);
    };

    return(
        <div className={classes.item}>
            <img src={props.item.iconPath} alt={props.item.name}/>
            <div>
                <span>Name: {props.item.name}</span>
                <br/>
                <span>Price: {props.item.price} </span>
            </div>
            <div>
                <input type='number' defaultValue={1} min={0} ref={amountRef}></input>
            </div>
            <div>
                <span><Button onClick={(event:any) =>{clickHandler(event, props.item)}}>Add to Cart</Button></span>
            </div>
        </div>
    );

}

export default MenuItem;