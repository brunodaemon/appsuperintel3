import React, { useState } from 'react';
import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
} from 'react-native';
import Totaltrocas from './../../components/Totaltrocas';
import Participacaotrocas from  './../../components/Participacaotrocas';



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
    grafico:{
      backgroundColor: '#FFF',
      height: 40,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: -10,
      marginRight: -10,
      borderRadius: 10,
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

export default function Trocas() {

    let nomeRede = `Casa Fiesta`

    return(
        <SafeAreaView style={styles.container}>
    
    
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
 
        </SafeAreaView>
      )

}