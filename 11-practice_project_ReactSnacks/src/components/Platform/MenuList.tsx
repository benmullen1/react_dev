import React from 'react';
import Card from '../UI/Card/Card';
import MenuItem from './MenuItem';
import MenuItemModel from '../../model/MenuItemModel';
import classes from './MenuList.module.css';

interface MenuListProps{
  items:MenuItemModel[];
}

const MenuList = (props: MenuListProps) => {

  return (
    <Card className={classes.menu}>
      <ul>
        {props.items.map((item) => (
          
          <li key={item.id} >
            <Card>
              <MenuItem item={item}></MenuItem>
            </Card>
          </li>
          
        ))}
      </ul>
    </Card>
  );
};

export default MenuList;