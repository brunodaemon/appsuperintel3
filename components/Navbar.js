import React, { useState } from 'react';
import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
         StatusBar,
         ScrollView,
         ActivityIndicator,
} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';


export default function Navbar(props){

  console.log(props);
  let nomeRede = props.nomeRede ? props.nomeRede : ' ';

  return(
    <SafeAreaView>
        <StatusBar backgroundColor="#032639"/>
        <View style={styles.Appbar}>
        <IconButton
          icon="menu"
          color={Colors.white}
          size={25}
          onPress={() => console.log('Pressed')}
        />
        </View>
        <View style={styles.fundocardtop}>
          <View View style={styles.cardTop}>
            <Text style={styles.nomeRede}>{nomeRede}</Text>
          </View>
        </View> 
    </SafeAreaView>
  )
}

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
    fontWeight: 'bold',
    marginLeft: 20,
    color: "#032639",
  }
});