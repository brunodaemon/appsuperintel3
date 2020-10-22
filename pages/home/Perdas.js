import React, { useState } from 'react';
import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
} from 'react-native';
import Participacaoperdas from  '../../components/Graficos/Participacaoperdas';
import Listalojas from  '../../components/Tabelas/Participacaoperdas';


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

export default function Perdas() {

    let nomeRede = `Casa Fiesta`

    return(
        <SafeAreaView style={styles.container}>
    
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