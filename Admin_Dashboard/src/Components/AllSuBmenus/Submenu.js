import React from 'react';
import Pages from './Pages'
import Dashboard from './Dashboard'
import Apps from './Apps'
import Divider from '@material-ui/core/Divider';
import {List} from '@material-ui/core'
import Widgets from './Widgets';
import Forms from './Forms';
import Charts from './Charts';
import Maps from './Map';
import Tables from './Tables';
import Elements from './Elements';
import Ecommerce from './Ecom';
import BasicElemets from './BasicPage';
import Account from './Account';
import Error from './Error';
import SubMenus from '../../Submenus';
export default function NestedList() {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"> 
      <Dashboard />
     <Apps />
     <Widgets/>
     <Forms/>
      <Charts/>
      <Maps />
      <Tables />
      <Elements />
      <Pages />
      <Ecommerce />
     <BasicElemets />
      <Account />
      <Error />
      <SubMenus />
    </List>
 
  );
}
