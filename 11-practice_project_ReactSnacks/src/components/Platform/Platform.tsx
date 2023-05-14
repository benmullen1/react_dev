import React from 'react';
import MenuItemModel from '../../model/MenuItemModel';
import Sidebar from '../Sidebar/Sidebar';
import MenuList from './MenuList';
import classes from './Platform.module.css';

interface MenuListProps{
    items:MenuItemModel[];
  }

const Platform = (props: MenuListProps) => {



  return (
    <div className={classes.platform}>
        <div className={classes.left_sidebar}><Sidebar></Sidebar></div>
        <div className={classes.content}><MenuList items={props.items}></MenuList></div>
    </div>
  );
};

export default Platform;
