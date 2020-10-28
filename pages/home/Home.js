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
    let cnpjMatriz = `4686827000151`; // TEMPORÁRIO ATÉ TERMOS AUTENTICAÇÃO
    const [ valoresPerdas, setValoresPerdas ] = React.useState('');
    const [ valoresTrocas, setValoresTrocas ] = React.useState('');

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
      }, (error) => {
        var errorMsg = 'Erro ao buscar os Valores para a tabela';
        alert(errorMsg);
        console.log(`${errorMsg} -> `, error);
        setValoresPerdas('');
      })
    }

    if(valoresTrocas === '') {     
      var trocas = {
        ultimos7dias: 0,
        ultimos35dias: 0,
        lixoIndenizado: {
          bonificacao: 0,
          deposito: 0
        },
        devolucao: {
          boleto: 0
        },
        total: 0
      }

      api_call(`cardtrocas/tfcard/?cnpjmatriz=${cnpjMatriz}`).then((data) => {
        let result = data[0].results;
        result.forEach((value) => {
          if(value.id === 1) {
            trocas.ultimos7dias = value.valortrocas;
          }

          if(value.id === 2) {
            trocas.ultimos35dias = value.valortrocas;
          };
        })
        
        api_call(`cardtrocas/grafico12m/?cnpjmatriz=${cnpjMatriz}`).then((data) => {
          let result = data[0].results;
          result.forEach((value) => {
            console.log(value);
            if(value.desctrocaformapagto === 'Bonificacao') {
              trocas.lixoIndenizado.bonificacao = value.total;
            };

            if(value.desctrocaformapagto === 'Deposito') {
              trocas.lixoIndenizado.deposito = value.total;
            };

            if(value.desctrocaformapagto === 'Boleto') {
              trocas.devolucao.boleto = value.total;
            }
          })
          total = trocas.lixoIndenizado.bonificacao + trocas.lixoIndenizado.deposito + trocas.devolucao.boleto;
        }, (error) => {
          var errorMsg = 'Erro ao buscar os Valores para a tabela';
          alert(errorMsg);
          console.log(`${errorMsg} -> `, error);
          setValoresTrocas('');
        })

        setValoresTrocas(trocas);
        console.log(result);
      }, (error) => {
        var errorMsg = 'Erro ao buscar os Valores para a tabela';
        alert(errorMsg);
        console.log(`${errorMsg} -> `, error);
        setValoresTrocas('');
      })
      
      setValoresTrocas(trocas);
    }

    return(
        <SafeAreaView style={styles.container}>
          <Navbar nomeRede={nomeRede} style={styles.Navbar}/>
          <ScrollView style={styles.containerscroll}>
            <Faturamento valoresPerdas={valoresPerdas}/>
            <Perdas valoresPerdas={valoresPerdas}/>
            <Trocas valoresTrocas={valoresTrocas}/>
          </ScrollView>
        </SafeAreaView>
      )

}