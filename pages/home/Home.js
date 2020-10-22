import React, { useState } from 'react';
import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
         StatusBar,
         ScrollView,
} from 'react-native';
import Navbar from '../../components/Navbar';
import { Button, Colors } from 'react-native-paper';
import Totaltrocas from './../../components/Totaltrocas';
import Participacaotrocas from  './../../components/Participacaotrocas';
import Participacaoperdas from  './../../components/Participacaoperdas';
import Participacaofaturamento from  './../../components/Participacaofaturamento';
import Percentualfaturamento from  './../../components/Percentualfaturamento';


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
            <View style={styles.Sessao}>
              <Text style={styles.nomesessao}>
                Faturamento
              </Text>
            </View>
            <View style={styles.card1}>
              <Text style={styles.titulocard}>
                Total Rede
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
    
              <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
              <Text style={styles.subtitulo}>
                últimos 7 dias
              </Text>
              <View style={{flexDirection: 'row'}}>
              <Text style={styles.R$}>
                R$
              </Text>
              <Text style={styles.valor}>
                340.256,25
              </Text>
              </View>
              </View>
    
              <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
              <Text style={styles.subtitulo}>
                últimos 35 dias
              </Text>
              <View style={{flexDirection: 'row'}}>
              <Text style={styles.R$}>
                R$
              </Text>
              <Text style={styles.valor}>
                1.245.369,01
              </Text>
              </View>
              </View>
    
              </View>
            </View>
    
            <View style={styles.card2}>
              <Text style={styles.titulocard}>
                Variação Percentual Faturamento
              </Text>
              <Text style={styles.variacao}>
                1,18%
              </Text>
              <View style={styles.grafico2}>
                <Percentualfaturamento/>
              </View>
              
            </View>
    
            <View style={styles.card3}>
              <Text style={styles.titulocard}>
                Perticipação das Lojas
              </Text>
              <Text style={styles.subtitulo}>
                no faturamento total semanal
              </Text>
              <View style={styles.grafico}>
                <Participacaofaturamento/>
              </View>
            </View>
    
            <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.card4}>
              <Text style={styles.titulocard}>
                Compras Rede
              </Text>
              <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
              <Text style={styles.subtitulo}>
                valor semanal
              </Text>
              <View style={{flexDirection: 'row'}}>
              <Text style={styles.R$}>
                R$
              </Text>
              <Text style={styles.valor}>
                1.340.256,25
              </Text>
              </View>
              </View>
            </View>
            <View style={styles.card5}>
            <Text style={styles.titulocard}>
                Vendas Rede
              </Text>
              <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
              <Text style={styles.subtitulo}>
                valor semanal
              </Text>
              <View style={{flexDirection: 'row'}}>
              <Text style={styles.R$}>
                R$
              </Text>
              <Text style={styles.valor}>
                2.580.612,36
              </Text>
              </View>
              </View>
            </View>
            </View>
    
            <View style={styles.Sessao}>
              <Text style={styles.nomesessao}>
                Perdas
              </Text>
            </View>
            <View style={styles.card6}>
              <Text style={styles.titulocard}>
                Total Rede
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
    
              <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
              <Text style={styles.subtitulo}>
                últimos 7 dias
              </Text>
              <View style={{flexDirection: 'row'}}>
              <Text style={styles.R$}>
                R$
              </Text>
              <Text style={styles.valor}>
                340.256,25
              </Text>
              </View>
              <Text style={styles.subtitulo2}>
                últimos 35 dias
              </Text>
              <View style={{flexDirection: 'row'}}>
              <Text style={styles.R$}>
                R$
              </Text>
              <Text style={styles.valor}>
                1.245.369,01
              </Text>
              </View>
              </View>
    
              <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
                
              </View>
    
              </View>
            </View>
    
            <View style={styles.card8}>
              <Text style={styles.titulocard}>
                Perticipação das Lojas
              </Text>
              <Text style={styles.subtitulo}>
                nas perdas totais semanais
              </Text>
              <View style={styles.grafico}>
                <Participacaoperdas/>
              </View>
            </View>
    
            <View style={styles.Sessao}>
              <Text style={styles.nomesessao}>
                Trocas
              </Text>
            </View>
            <View style={styles.card6}>
              <Text style={styles.titulocard}>
                Total Rede
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
    
              <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
              <Text style={styles.subtitulo}>
                últimos 7 dias
              </Text>
              <View style={{flexDirection: 'row'}}>
              <Text style={styles.R$}>
                R$
              </Text>
              <Text style={styles.valor}>
                340.256,25
              </Text>
              </View>
              <Text style={styles.subtitulo2}>
                últimos 35 dias
              </Text>
              <View style={{flexDirection: 'row'}}>
              <Text style={styles.R$}>
                R$
              </Text>
              <Text style={styles.valor}>
                1.245.369,01
              </Text>
              </View>
              </View>
    
              <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
                
              </View>
    
              </View>
            </View>
    
            <View style={styles.card9}>
              <Text style={styles.titulocard}>
                Trocas Recebidas
              </Text>
              <Text style={styles.subtitulo}>
                últimos 12 meses
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
    
              <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
              <Text style={styles.titulomotivo}>
                Lixo Indenizado
              </Text>
              <View style={{flexDirection: 'row'}}>
              <View style={styles.circulo1}/>
              <Text style={styles.subtitulo}>
                Bonificação
              </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
              <Text style={styles.R$troca}>
                R$
              </Text>
              <Text style={styles.valortroca}>
                40.256,25
              </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
              <View style={styles.circulo2}/>
              <Text style={styles.subtitulo3}>
                Depósito
              </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
              <Text style={styles.R$troca}>
                R$
              </Text>
              <Text style={styles.valortroca}>
                45.369,01
              </Text>
              </View>
              <Text style={styles.titulomotivo}>
                Devolução
              </Text>
              <View style={{flexDirection: 'row'}}>
              <View style={styles.circulo3}/>
              <Text style={styles.subtitulo}>
                Boleto
              </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
              <Text style={styles.R$troca}>
                R$
              </Text>
              <Text style={styles.valortroca}>
                250.256,25
              </Text>
              </View>
              </View>
    
              <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
                <Totaltrocas/>
              </View>
    
    </View>
            </View>
    
            <View style={styles.card7}>
              <Text style={styles.titulocard}>
                Perticipação das Lojas
              </Text>
              <Text style={styles.subtitulo}>
                nas trocas totais semanais
              </Text>
              <View style={styles.grafico}>
                <Participacaotrocas/>
              </View>
            </View>
            
          </ScrollView> 
        </SafeAreaView>
      )

}