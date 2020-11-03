import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomDrawer from './components/Drawer';

import Home from './pages/home/Home'

const Routes = createAppContainer(
  createDrawerNavigator({
    Home,
  }, {
    initialRoutName: 'Home',
    contentComponent: CustomDrawer
  })
);

export default Routes;