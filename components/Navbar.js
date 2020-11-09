import React, { useState } from 'react';
import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
         StatusBar,
         ScrollView,
         ActivityIndicator,
         Image,
} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';


export default function Navbar(props){

  let nomeRede = props.nomeRede ? props.nomeRede : ' ';

    let [fontsLoaded] = useFonts({
      'TitilliumWebBold': require('../assets/fonts/TitilliumWeb-Bold.ttf'),
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {

  return(
    <SafeAreaView>
        <StatusBar backgroundColor="#032639"/>
        <View style={styles.Appbar}>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <IconButton
          icon="menu"
          color={Colors.white}
          size={25}
          onPress={() => console.log('Pressed')}
        />
        <Image
        style={styles.logo}
        source={require('../assets/icones/superintel_branco.png')}
        />
        </View>
        </View>
        <View style={styles.fundocardtop}>
          <View View style={styles.cardTop}>
            <Text style={styles.nomeRede}>{nomeRede}</Text>
          </View>
        </View> 
    </SafeAreaView>
  )
}
};

const styles = StyleSheet.create({
  Appbar:{
    backgroundColor: "#032639",
    height: 55,
    justifyContent: 'center',
  },
  fundocardtop:{
    backgroundColor:'#EEEEEE',
    height: 80,
  },
  cardTop:{
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 50,
    marginTop: 15,
    justifyContent: 'center',
  },
  nomeRede:{
    fontSize: 26,
    marginLeft: 20,
    color: "#032639",
    fontFamily: 'TitilliumWebBold',
  },
  logo:{
    height: 16,
    width: 190,
    marginTop: 16.5,
    marginLeft: 56,
    justifyContent: 'center',
  },
});