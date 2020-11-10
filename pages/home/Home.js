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
    const [ valoresFaturamentoTotal, setValoresFaturamentoTotal ] = React.useState('');
    const [ valoresFaturamentoVariacao, setValoresFaturamentoVariacao ] = React.useState('');
    const [ valoresFaturamentoLojasSemanal, setValoresFaturamentoLojasSemanal ] = React.useState('');
    const [ valoresFaturamentoGrafico, setValoresFaturamentoGrafico ] = React.useState('');
    const [ valoresFaturamentoComprasVendas, setValoresFaturamentoComprasVendas ] = React.useState('');
    const [ valoresPerdas, setValoresPerdas ] = React.useState('');
    const [ valoresTrocas, setValoresTrocas ] = React.useState('');
    const [ valoresTrocasGrafico, setValoresTrocasGrafico ] = React.useState('');

    if(valoresFaturamentoTotal === '') {
      api_call(`app001/app001-faturamento-rede-7dd-35dd/?cnpjmatriz=${cnpjMatriz}`).then((data) => {
        let result = data[0].results;
        var totaisFaturamento = {
          seteDias: 0,
          trinaCincoDias: 0,
        }

        result.forEach((value) => {
          if(value.id === 7) {
            totaisFaturamento.seteDias = value.faturamento
          }
          
          if(value.id === 35) {
            totaisFaturamento.trinaCincoDias = value.faturamento
          }
        })

        setValoresFaturamentoTotal(totaisFaturamento);
      }, (error) => {
        var errorMsg = 'Erro ao buscar os Valores para a tabela';
        alert(errorMsg);
        console.error(`${errorMsg} -> `, error);
        setValoresPerdas('');
      })
    }

    if(valoresFaturamentoVariacao === '') {
      api_call(`app001/app001-faturamento-variacao-percentual/`).then((data) => {
        let result = data[0].results;
        setValoresFaturamentoVariacao(result[0]);
      }, (error) => {
        var errorMsg = 'Erro ao buscar os Valores para a tabela';
        alert(errorMsg);
        console.error(`${errorMsg} -> `, error);
        setValoresPerdas('');
      })
    }

    if(valoresFaturamentoLojasSemanal === '') {
      api_call(`app001/app001-faturamento-semanal-lojas/?id=7`).then((data) => {
        let result = data[0].results;
        let rows = [];
        let total = 0;
        if(result) {
          result.forEach((valor) => {
            total += parseFloat(valor.faturamento7dd);
          });

          result.forEach((valor) => {
            rows.push({loja: valor.apelidoloja, cnpj: valor.cnpjloja, faturamento: parseFloat(valor.faturamento7dd), porcentagem: (parseFloat(valor.faturamento7dd) / total)});
          })
        }
        rows.sort((a, b) => {return b.faturamento - a.faturamento});
        let id = 1;
        rows.forEach((row) => {
          row.id = id
          id += 1;
        })
        setValoresFaturamentoLojasSemanal(rows);
      }, (error) => {
        var errorMsg = 'Erro ao buscar os Valores para a tabela';
        alert(errorMsg);
        console.error(`${errorMsg} -> `, error);
        setValoresPerdas('');
      })
    }

    if(valoresFaturamentoGrafico === '') {
      api_call(`app001/app001-faturamento-semanal-rede-grafico-linha/`).then((data) => {
        let result = data[0].results;
        setValoresFaturamentoGrafico(result);
      }, (error) => {
        var errorMsg = 'Erro ao buscar os Valores para a tabela';
        alert(errorMsg);
        console.error(`${errorMsg} -> `, error);
        setValoresPerdas('');
      })
    }

    if(valoresFaturamentoComprasVendas === '') {
      api_call(`app001/app001-compras-vendas-trocas-perdas-ultimos7dd/`).then((data) => {
        let result = data[0].results;
        
        var valores = {
          compras: 0,
          vendas: 0
        }

        result.forEach((value) => {
          if(value.operacao === 'COMPRAS') valores.compras = parseFloat(value.valor)
          if(value.operacao === 'VENDAS') valores.vendas = parseFloat(value.valor)
        })

        setValoresFaturamentoComprasVendas(valores);
      }, (error) => {
        var errorMsg = 'Erro ao buscar os Valores para a tabela';
        alert(errorMsg);
        console.error(`${errorMsg} -> `, error);
        setValoresFaturamentoComprasVendas('');
      })
    }

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

    if(valoresTrocasGrafico === '') {
      var trocasGraficos = {
        lixoIndenizado: {
          bonificacao: 0,
          deposito: 0
        },
        devolucao: {
          boleto: 0
        }
      }
        
      api_call(`cardtrocas/grafico12m/?cnpjmatriz=${cnpjMatriz}`).then((data) => {
        let result = data[0].results;
        result.forEach((value) => {
          if(value.desctrocaformapagto === 'Bonificacao') {
            trocasGraficos.lixoIndenizado.bonificacao = value.total;
          };

          if(value.desctrocaformapagto === 'Deposito') {
            trocasGraficos.lixoIndenizado.deposito = value.total;
          };

          if(value.desctrocaformapagto === 'Boleto') {
            trocasGraficos.devolucao.boleto = value.total;
          }
        })

        setValoresTrocasGrafico(trocasGraficos);
      }, (error) => {
        var errorMsg = 'Erro ao buscar os Valores para a tabela';
        alert(errorMsg);
        console.error(`${errorMsg} -> `, error);
        setValoresTrocas('');
      })        
    }

    return(
        <SafeAreaView style={styles.container}>
          <Navbar nomeRede={nomeRede} style={styles.Navbar}/>
          <ScrollView style={styles.containerscroll}>
            <Faturamento valoresFaturamentoTotal={valoresFaturamentoTotal} 
              valoresFaturamentoVariacao={valoresFaturamentoVariacao} 
              valoresFaturamentoLojasSemanal={valoresFaturamentoLojasSemanal}
              valoresFaturamentoGrafico={valoresFaturamentoGrafico}
              valoresFaturamentoComprasVendas={valoresFaturamentoComprasVendas}/>
            <Perdas valoresPerdas={valoresPerdas}/>
            <Trocas valoresTrocas={valoresTrocas} valoresTrocasGrafico={valoresTrocasGrafico}/>
          </ScrollView>
        </SafeAreaView>
      )

}