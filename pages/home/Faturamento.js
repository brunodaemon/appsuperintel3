import React, { useState } from 'react';
import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
} from 'react-native';
import Participacaofaturamento from  '../../components/Graficos/Participacaofaturamento';
import Percentualfaturamento from  '../../components/Graficos/Percentualfaturamento';
import Listalojas from  '../../components/Tabelas/Participacaofaturamento';


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#EEEEEE',
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
    titulocard:{
      fontSize: 17,
      color: '#707070',
      marginTop: -5,
    },
    subtitulo:{
      fontSize: 12,
      color: '#707070',
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
      height: 350,
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
    tabela:{
        marginLeft: -20,
        marginRight:-20,
        height: 60,
    },

  });

export default function Faturamento() {


    return(
        <SafeAreaView style={styles.container}>
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
                Participação das Lojas
              </Text>
              <Text style={styles.subtitulo}>
                no faturamento total semanal
              </Text>
              <View style={styles.grafico}>
                <Participacaofaturamento/>
              </View>
              <View style={styles.tabela}>
                 <Listalojas/> 
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
            
        </SafeAreaView>
      )

}