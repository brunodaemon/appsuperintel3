import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomDrawer from './src/components/Drawer';

import Home from './src/pages/home/Home'

import { withAuthenticator } from 'aws-amplify-react-native'

import Amplify from '@aws-amplify/core'
import config from './aws-exports'
Amplify.configure(config)

class App extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}

export default withAuthenticator( App, { includeGreetings: false })