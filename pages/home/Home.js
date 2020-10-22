import React, { useState } from 'react';
import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
         ScrollView,
} from 'react-native';
import Navbar from '../../components/Navbar';
import Totaltrocas from './../../components/Totaltrocas';
import Participacaotrocas from  './../../components/Participacaotrocas';
import Participacaoperdas from  './../../components/Participacaoperdas';
import Participacaofaturamento from  './../../components/Participacaofaturamento';
import Percentualfaturamento from  './../../components/Percentualfaturamento';
import Faturamento from './Faturamento';
import Perdas from './Perdas';
import Trocas from './Trocas';


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#EEEEEE',
    },
    containerscroll:{
      flex:1,
      backgroundColor: '#EEEEEE',
      borderRadius:10,
    },
    Navbar:{
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
    variacao:{
      fontSize: 25,
      fontWeight: 'bold',
      color: '#032639',
      marginLeft: 0,
      marginTop: 0,
    },
    titulomotivo:{
      fontSize: 16,
      color: '#032639',
      marginTop: 5,
    },
    titulocard:{
      fontSize: 17,
      color: '#707070',
      marginTop: -5,
    },
    subtitulo:{
      fontSize: 12,
      color: '#707070',
    },
    subtitulo2:{
      fontSize: 12,
      color: '#707070',
      marginTop: 14,
    },
    subtitulo3:{
      fontSize: 12,
      color: '#707070',
      marginTop: 5,
    },
    R$:{
      fontSize: 16,
      color: '#032639',
      marginTop: 4.5,
      marginRight: 3,
    },
    valor:{
      fontSize: 20,
      color: '#032639',
      fontWeight: 'bold',
    },
    R$troca:{
      fontSize: 16,
      color: '#032639',
      marginTop: 4.5,
      marginRight: 3,
      marginLeft: 18,
    },
    valortroca:{
      fontSize: 20,
      color: '#032639',
      fontWeight: 'bold',
    },
    grafico2:{
      backgroundColor: '#FFF',
      marginTop: 5,
      height: 150,
      marginBottom: 0,
      borderRadius: 10,
    },
    grafico:{
      backgroundColor: '#FFF',
      height: 40,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: -10,
      marginRight: -10,
      borderRadius: 10,
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
    card4:{
      backgroundColor: "#FFF",
      borderRadius: 10,
      height: 100,
      marginTop: 15,
      marginBottom:15,
      padding: 20,
      flex: 1,
    },
    card5:{
      backgroundColor: "#FFF",
      borderRadius: 10,
      height: 100,
      marginTop: 15,
      marginBottom:15,
      marginLeft: 15,
      padding: 20,
      flex: 1,
    },
    card6:{
      backgroundColor: "#FFF",
      borderRadius: 10,
      height: 160,
      marginTop: -15,
      padding: 20,
      flex: 1,
    },
    card7:{
      backgroundColor: "#FFF",
      borderRadius: 10,
      height: 340,
      marginTop: 15,
      marginBottom: 30,
      padding: 20,
    },
    card8:{
      backgroundColor: "#FFF",
      borderRadius: 10,
      height: 340,
      marginTop: 15,
      marginBottom: 15,
      padding: 20,
    },
    card9:{
      backgroundColor: "#FFF",
      borderRadius: 10,
      height: 260,
      marginTop: 15,
      padding: 20,
    },
    circulo1:{
      marginTop:2,
      marginLeft: 0,
      marginBottom:0,
      marginRight:5,
      height: 12,
      width:12,
      borderRadius:12,
      backgroundColor: '#1A4069',
    },
    circulo2:{
      marginTop:8,
      marginLeft: 0,
      marginBottom:0,
      marginRight:5,
      height: 12,
      width:12,
      borderRadius:12,
      backgroundColor: '#00E152',
    },
    circulo3:{
      marginTop:2,
      marginLeft: 0,
      marginBottom:0,
      marginRight:5,
      height: 12,
      width:12,
      borderRadius:12,
      backgroundColor: '#3883C9',
    },
  });

export default function Home() {

    let nomeRede = `Casa Fiesta`

    return(
        <SafeAreaView style={styles.container}>
          <Navbar nomeRede={nomeRede} style={styles.Navbar}/>
          <ScrollView style={styles.containerscroll}>
            <Faturamento/>
            <Perdas/>
            <Trocas/>            
          </ScrollView> 
        </SafeAreaView>
      )

}