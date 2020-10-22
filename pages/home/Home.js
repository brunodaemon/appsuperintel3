import React, { useState } from 'react';
import { StyleSheet, 
         SafeAreaView, 
         ScrollView,
} from 'react-native';
import Navbar from '../../components/Navbar';
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