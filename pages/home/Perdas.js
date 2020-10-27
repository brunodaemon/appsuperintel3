import React, { useState } from 'react';
import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
} from 'react-native';
import Participacaoperdas from  '../../components/Graficos/Participacaoperdas';
import Listalojas from  '../../components/Tabelas/Participacaoperdas';
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
    card8:{
      backgroundColor: "#FFF",
      borderRadius: 10,
      height: 350,
      marginTop: 15,
      marginBottom: 15,
      padding: 20,
    },
    tabela:{
        marginLeft: -20,
        marginRight:-20,
        height: 60,
    },
  });

export default function Perdas(props) {

    let valoresPerdas = props.valoresPerdas || {
      compras: 0,
      vendas: 0,
      ultimos7dias: 0,
      ultimos35dias: 0
    }

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
                Perdas
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
                <NumberFormat value={ valoresPerdas.ultimos7dias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
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
                <NumberFormat value={ valoresPerdas.ultimos35dias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
              </Text>
              </View>
              </View>
    
              </View>
            </View>
    
            <View style={styles.card8}>
              <Text style={styles.titulocard}>
                Participação das Lojas
              </Text>
              <Text style={styles.subtitulo}>
                nas perdas totais semanais
              </Text>
              <View style={styles.grafico}>
                <Participacaoperdas/>
              </View>
              <View style={styles.tabela}>
                 <Listalojas/> 
              </View>
            </View>

        </SafeAreaView>
      )

}
};