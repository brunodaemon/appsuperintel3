import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Navbar from '../../components/Navbar';
import Faturamento from './faturamento/Faturamento';
import Perdas from './perdas/Perdas';
import Trocas from './trocas/Trocas';

import { Api_GET } from './../../Services/api';

import { HomeStyles as styles } from './HomeStyles';


const api_call = (endpoint) => {
  return Api_GET(endpoint)
        .then(data => {return data})
}

export default function Home() {
    let nomeRede = `Casa Fiesta`;
    let cnpjMatriz = `4686827000151`; // TEMPORÁRIO ATÉ TERMOS AUTENTICAÇÃO
    const [ valoresPerdas, setValoresPerdas ] = React.useState('');
    const [ valoresPerdasLojasSemanal, setValoresPerdasLojasSemanal ] = React.useState('');
    const [ valoresTrocas, setValoresTrocas ] = React.useState('');
    const [ valoresTrocasLojasSemanal, setValoresTrocasLojasSemanal ] = React.useState('');

    if(valoresPerdas === '') {
      let perdas = {
        ultimos7dias: 0,
        ultimos35dias: 0
      }

      api_call(`cardperdas/pfcard/?cnpjmatriz=${cnpjMatriz}`).then((data) => {
        let result = data[0].results;
        result.forEach((value) => {
          if(value.id === 1) {
            perdas.ultimos7dias = value.valorperdas;
          }

          if(value.id === 2) {
            perdas.ultimos35dias = value.valorperdas;
          };
        });

        setValoresPerdas(perdas);
      }, (error) => {
        var errorMsg = 'Erro ao buscar os Valores para a tabela';
        alert(errorMsg);
        console.error(`${errorMsg} -> `, error);
        setValoresPerdas('');
      })
    }

        
    if(valoresPerdasLojasSemanal === '') {
      api_call(`app001/app001-tabela-perdas-por-loja-com-percentuais/`).then((data) => {
        let result = data[0].results;
        result.sort((a, b) => {return parseFloat(b.vlrperdas) - parseFloat(a.vlrperdas)});
        let id = 1;
        result.forEach((row) => {
          row.id = id
          id += 1;
        })
        setValoresPerdasLojasSemanal(result);
      }, (error) => {
        var errorMsg = 'Erro ao buscar os Valores para a tabela';
        alert(errorMsg);
        console.error(`${errorMsg} -> `, error);
        setValoresPerdas('');
      })
    }

    if(valoresTrocas === '') {
      var trocas = {
        ultimos7dias: 0,
        ultimos35dias: 0
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
        });
        setValoresTrocas(trocas);
      }, (error) => {
        var errorMsg = 'Erro ao buscar os Valores para a tabela';
        alert(errorMsg);
        console.error(`${errorMsg} -> `, error);
        setValoresTrocas('');
      })
    }
    
    if(valoresTrocasLojasSemanal === '') {
      api_call(`app001/app001-tabela-trocas-por-loja-com-percentuais/`).then((data) => {
        let result = data[0].results;
        result.sort((a, b) => {return parseFloat(b.vlrtrocas) - parseFloat(a.vlrtrocas)});
        let id = 1;
        result.forEach((row) => {
          row.id = id
          id += 1;
        })
        setValoresTrocasLojasSemanal(result);
      }, (error) => {
        var errorMsg = 'Erro ao buscar os Valores para a tabela';
        alert(errorMsg);
        console.error(`${errorMsg} -> `, error);
        setValoresPerdas('');
      })
    }

    return(
        <SafeAreaView style={styles.container}>
          <Navbar nomeRede={nomeRede} style={styles.Navbar}/>
          <ScrollView style={styles.containerscroll}>
            <Faturamento />
            <Perdas valoresPerdas={valoresPerdas} valoresPerdasLojasSemanal={valoresPerdasLojasSemanal} />
            <Trocas valoresTrocas={valoresTrocas} valoresTrocasLojasSemanal={valoresTrocasLojasSemanal} />
          </ScrollView>
        </SafeAreaView>
      )

}