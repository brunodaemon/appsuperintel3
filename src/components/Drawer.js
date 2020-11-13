import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { DrawerNavigatorItems} from 'react-navigation-drawer';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#032639',
    height: 55,
  },
  username:{
    fontFamily: 'TitilliumWeb',
    color: '#FFF',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 18,
  },
});

function Drawer({...props}){

  let [fontsLoaded] = useFonts({
    'TitilliumWeb': require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
    'TitilliumWebBold': require('../../assets/fonts/TitilliumWeb-Bold.ttf'),
    'TitilliumWebLight': require('../../assets/fonts/TitilliumWeb-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  
  return(
    <View>
      <View style={styles.container}>
      <Text style={styles.username}>Marcelo Breda</Text>
      </View>
      <DrawerNavigatorItems {...props} />
    </View>
  );
}
};



export default Drawer;