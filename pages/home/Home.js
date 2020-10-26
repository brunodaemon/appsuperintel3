import React, { useState } from 'react';
import { StyleSheet, 
         SafeAreaView, 
         ScrollView,
} from 'react-native';
import NumberFormat from 'react-number-format';
import Navbar from '../../components/Navbar';
import Faturamento from './Faturamento';
import Perdas from './Perdas';
import Trocas from './Trocas';

import { Api_GET } from './../../Services/api';

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


const api_call = (endpoint) => {
  return Api_GET(endpoint)
        .then(data => {return data})
}

export default function Home() {

    let nomeRede = `Casa Fiesta`;
    const [ valoresPerdas, setValoresPerdas ] = React.useState('');

    if(valoresPerdas === '') {
      api_call(`cardperdas/calendario-perdas-semanais-valores-consolidados/`).then((data) => {
        let result = data[0].results;
        
        var perdas = {
          compras: 0,
          vendas: 0,
          ultimos7dias: 0,
          ultimos35dias: 0
        }

        result.forEach((value) => {

          if(value.id === 1) {
            if(value.operacao === 'PERDAS') perdas.ultimos35dias += parseFloat(value.valor)
          }

          if(value.id === 2) {
            if(value.operacao === 'PERDAS') perdas.ultimos35dias += parseFloat(value.valor)
          }

          if(value.id === 3) {
            if(value.operacao === 'PERDAS') perdas.ultimos35dias += parseFloat(value.valor)
          }

          if(value.id === 4) {
            if(value.operacao === 'PERDAS') perdas.ultimos35dias += parseFloat(value.valor)
          }

          if(value.id === 5) {
            if(value.operacao === 'COMPRAS') perdas.compras = parseFloat(value.valor)
            if(value.operacao === 'VENDAS') perdas.vendas = parseFloat(value.valor)
            if(value.operacao === 'PERDAS') perdas.ultimos7dias = parseFloat(value.valor)
            if(value.operacao === 'PERDAS') perdas.ultimos35dias += parseFloat(value.valor)
          }
        })

        setValoresPerdas(perdas);
        console.log(result);
        console.log(valoresPerdas);
      }, (error) => {
        var errorMsg = 'Erro ao buscar os Valores para a tabela';
        alert(errorMsg);
        console.log(`${errorMsg} -> `, error);
        setValoresPerdas('');
      })
    }

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