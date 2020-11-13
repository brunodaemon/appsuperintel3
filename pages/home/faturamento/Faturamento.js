import React, { useState, useEffect } from 'react';
import { View,
         Text,
         SafeAreaView, 
} from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { Card } from 'react-native-paper';
import NumberFormat from 'react-number-format';

import BarraParticipacaoFaturamento from  '../../../components/Graficos/faturamento/BarraParticipacaoFaturamento';
import GraficoFaturamento from  '../../../components/Graficos/faturamento/GraficoFaturamento';
import TabelaFaturamento from  '../../../components/Tabelas/faturamento/TabelaFaturamento';

import { FaturamentoStyles as styles } from './FaturamentoStyles';
import { getTotalizadoresFaturamento, 
  getVariacaoPercentual,
  getComprasVendasRedeSemanal,
  getGraficoLinhaSemanal,
  getTabelaFaturamentoSemanal } from './../../../Services/home/FaturamentoApi'

const Faturamento = (props) => {

  const [ valoresFaturamentoTotal, setValoresFaturamentoTotal ] = React.useState({});
  const [ valoresFaturamentoVariacao, setValoresFaturamentoVariacao ] = React.useState({});
  const [ valoresFaturamentoGrafico, setValoresFaturamentoGrafico ] = React.useState({});
  const [ valoresFaturamentoComprasVendas, setValoresFaturamentoComprasVendas ] = React.useState({});
  const [ valoresFaturamentoLojasSemanal, setValoresFaturamentoLojasSemanal ] = React.useState([]);
  
  const load = async () => {
    await getTotalizadoresFaturamento().then((data) => {
      console.log(data);
      let result = data.data.results;
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
      console.error('ERROR -> ', error);
      alert('Erro ao buscar Totalizadores do Faturamento');
    })

    await getVariacaoPercentual().then((data) => {
      let result = data.data.results;
      setValoresFaturamentoVariacao(result[0]);
    }, (error) => {
      console.error('ERROR -> ', error);
      alert('Erro ao buscar Porcentagem de Variação');
    })

    await getComprasVendasRedeSemanal().then((data) => {
      let result = data.data.results;

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
      console.error('ERROR -> ', error);
      alert('Erro ao buscar Porcentagem de Variação');
    })

    await getGraficoLinhaSemanal().then((data) => {
      let result = data.data.results;
      setValoresFaturamentoGrafico(result);
    })

    await getTabelaFaturamentoSemanal().then((data) => {
      let result = data.data.results;
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
    })  
  }
  
  useEffect(() => {
    load();
  }, []);

  let [fontsLoaded] = useFonts({
    'TitilliumWeb': require('../../../assets/fonts/TitilliumWeb-Regular.ttf'),
    'TitilliumWebBold': require('../../../assets/fonts/TitilliumWeb-Bold.ttf'),
    'TitilliumWebLight': require('../../../assets/fonts/TitilliumWeb-Light.ttf'),
  });

  const renderTotalizadoresRede = () => {
    return (              
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
              { valoresFaturamentoTotal.seteDias  ? <NumberFormat value={ valoresFaturamentoTotal.seteDias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> : <Text> - </Text> }
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
              { valoresFaturamentoTotal.trinaCincoDias ? <NumberFormat value={ valoresFaturamentoTotal.trinaCincoDias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> : <Text> - </Text> }
            </Text>
          </View>
        </View>

      </View>
    </View>
    )
  }

  const renderComprasVendasRede = () => {
    return(
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
              { valoresFaturamentoComprasVendas.compras ? <NumberFormat value={ valoresFaturamentoComprasVendas.compras } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> : <Text> - </Text> }
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
              { valoresFaturamentoComprasVendas.vendas ? <NumberFormat value={ valoresFaturamentoComprasVendas.vendas } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> : <Text> - </Text> }
            </Text>
          </View>
        </View>
      </View>
    </View>
    )
  }

  const renderVariacaoPercentual = () => {
    return(
      <View style={styles.card2}>
      <Text style={styles.titulocard}>
        Variação Percentual Faturamento
      </Text>
      <View style={{flex: 1, flexDirection: 'row', marginBottom: -8, zIndex: 3}}>
        <Card size={60} icon="chevron-up" />
        <Text style={styles.variacao}>
          { valoresFaturamentoVariacao ?
            <NumberFormat value={ valoresFaturamentoVariacao.fatperc2 } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> :
            <Text>0,00</Text>
          } %
        </Text>
      </View>
      <View style={styles.grafico2}>
        <GraficoFaturamento valoresFaturamentoGrafico={valoresFaturamentoGrafico}/>
      </View>
    </View>
    )
  }

  const renderTabelaParticipacaoLojas = () => {
    return (
      <View style={styles.card3}>
        <Text style={styles.titulocard}>
          Participação das Lojas
        </Text>
        <Text style={styles.subtitulo}>
          no faturamento total semanal
        </Text>
        <View style={styles.grafico}>
          <BarraParticipacaoFaturamento valoresFaturamentoLojasSemanal={valoresFaturamentoLojasSemanal}/>
        </View>
        <View style={styles.tabela}>
          <TabelaFaturamento valoresFaturamentoLojasSemanal={valoresFaturamentoLojasSemanal}/> 
        </View>
      </View>
    )
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.Sessao}>
              <Text style={styles.nomesessao}>
                Faturamento
              </Text>
            </View>
            { renderTotalizadoresRede() }
            { renderComprasVendasRede() }
            { renderVariacaoPercentual() }
            { renderTabelaParticipacaoLojas() }
        </SafeAreaView>
      )
  }
};

export default Faturamento;