import React, { useState } from 'react';
import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
         StatusBar,
         ScrollView,
         ActivityIndicator,
} from 'react-native';

export default function App(){

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#032639"/>
        <View style={styles.Appbar}>
          <Text>Superintel</Text>
        </View>
        <View style={styles.fundocardtop}>
        <View style={styles.cardTop}>
          <Text style={styles.nomeRede}>Casa Fiesta</Text>
        </View>
        </View>
      </ScrollView> 
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#EEEEEE',
  },
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