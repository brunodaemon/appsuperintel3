import React, { useState } from 'react';
import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
} from 'react-native';
import Totaltrocas from '../../components/Graficos/Totaltrocas';
import Participacaotrocas from  '../../components/Graficos/Participacaotrocas';
import Listalojas from  '../../components/Tabelas/Participacaotrocas';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

import NumberFormat from 'react-number-format';

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
      fontSize: 18,
      color: '#FFF',
      marginLeft: 20,
      marginTop: 8,
      fontFamily: 'TitilliumWeb',
    },
    titulomotivo:{
      fontSize: 17,
      color: '#032639',
      marginTop: 5,
      fontFamily: 'TitilliumWeb',
    },
    titulocard:{
      fontSize: 18,
      color: '#707070',
      marginTop: -8,
      fontFamily: 'TitilliumWeb',
    },
    subtitulo:{
      fontSize: 13,
      color: '#707070',
      fontFamily: 'TitilliumWeb',
    },
    subtitulo2:{
      fontSize: 13,
      color: '#707070',
      marginTop: 14,
      fontFamily: 'TitilliumWeb',
    },
    subtitulo3:{
      fontSize: 13,
      color: '#707070',
      marginTop: 5,
      fontFamily: 'TitilliumWeb',
    },
    R$:{
      fontSize: 17,
      color: '#032639',
      marginTop: 4.5,
      marginRight: 3,
      fontFamily: 'TitilliumWebLight',
    },
    valor:{
      fontSize: 21,
      color: '#032639',
      fontFamily: 'TitilliumWebBold',
    },
    R$troca:{
      fontSize: 17,
      color: '#032639',
      marginTop: 1,
      marginRight: 3,
      marginLeft: 18,
      fontFamily: 'TitilliumWebLight',
    },
    valortroca:{
      fontSize: 21,
      marginTop: -3.6,
      color: '#032639',
      fontFamily: 'TitilliumWebBold',
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
      height: 350,
      marginTop: 15,
      marginBottom: 30,
      padding: 20,
    },
    card9:{
      backgroundColor: "#FFF",
      borderRadius: 10,
      height: 270,
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
    tabela:{
        marginLeft: -20,
        marginRight:-20,
        height: 60,
    },
  });

export default function Trocas(props) {

    let valoresTrocas = props.valoresTrocas || {
      ultimos7dias: 0,
      ultimos35dias: 0
    };

    let valoresTrocasGrafico = props.valoresTrocasGrafico || {
      lixoIndenizado: {
        bonificacao: 0,
        deposito: 0
      },
      devolucao: {
        boleto: 0
      }
    };

    let [fontsLoaded] = useFonts({
      'TitilliumWeb': require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
      'TitilliumWebBold': require('../../assets/fonts/TitilliumWeb-Bold.ttf'),
      'TitilliumWebLight': require('../../assets/fonts/TitilliumWeb-Light.ttf'),
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {

    return(
        <SafeAreaView style={styles.container}>
    
    
    <View style={styles.Sessao}>
      <Text style={styles.nomesessao}>
        Trocas
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
                <NumberFormat value={ valoresTrocas.ultimos7dias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
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
                <NumberFormat value={ valoresTrocas.ultimos35dias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
              </Text>
              </View>
              </View>
    
              </View>
            </View>
    
           {/*
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
                <NumberFormat value={ valoresTrocasGrafico.lixoIndenizado.bonificacao } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
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
                <NumberFormat value={ valoresTrocasGrafico.lixoIndenizado.deposito } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
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
                    <NumberFormat value={ valoresTrocasGrafico.devolucao.boleto } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
                  </Text>
                </View>
              </View>
              
    
              <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
                <Totaltrocas valoresTrocasGrafico={valoresTrocasGrafico}/>
              </View>
            </View>
            </View>
            */}
    
            <View style={styles.card7}>
              <Text style={styles.titulocard}>
                Participação das Lojas
              </Text>
              <Text style={styles.subtitulo}>
                nas trocas totais semanais
              </Text>
              <View style={styles.grafico}>
                <Participacaotrocas/>
              </View>
              <View style={styles.tabela}>
                 <Listalojas/> 
              </View>
            </View>
 
        </SafeAreaView>
      )

}
};