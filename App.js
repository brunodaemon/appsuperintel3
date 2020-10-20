import React, { useState } from 'react';
import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
         StatusBar,
         ScrollView,
} from 'react-native';
import Appbar from './components/header';

export default function App(){
  return(
    <SafeAreaView style={styles.container}>
      <Appbar style={styles.Appbar}/>
      <ScrollView style={styles.container}>
        <View style={styles.Sessao}>
          <Text style={styles.nomesessao}>
            Faturamento
          </Text>
        </View>
        <View style={styles.card1}>
          <Text style={styles.titulocard}>
            Total Rede
          </Text>
        </View>
        <View style={styles.card2}>
          <Text style={styles.titulocard}>
            Variação Percentual Faturamento
          </Text>
        </View>
        <View style={styles.card3}>
          <Text style={styles.titulocard}>
            Perticipação das Lojas
          </Text>
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
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  Sessao:{
    backgroundColor: '#1A4069',
    borderRadius: 10,
    height: 55,
  },
  nomesessao:{
    fontSize: 17,
    color: '#FFF',
    marginLeft: 20,
    marginTop: 10
  },
  titulocard:{
    fontSize: 17,
    color: '#707070',
  },
  card1:{
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 100,
    marginTop: -15,
    padding: 20,
  },
  card2:{
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 240,
    marginTop: 15,
    padding: 20,
  },
  card3:{
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 340,
    marginTop: 15,
    padding: 20,
  },
});