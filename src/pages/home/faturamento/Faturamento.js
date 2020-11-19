import React, { useState, useEffect } from 'react';
import { View,
         Text,
         SafeAreaView, 
} from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { Card } from 'react-native-paper';
import NumberFormat from 'react-number-format';

import { FaturamentoStyles as styles } from './FaturamentoStyles';
import { getTotalizadoresFaturamento, 
  getVariacaoPercentual,
  getComprasVendasRedeSemanal,
  getGraficoLinhaSemanal,
  getTabelaFaturamentoSemanal } from './../../../services/home/FaturamentoApi';

import GraficoFaturamento from  '../../../components/Graficos/GraficoFaturamento';

import TabelaParticipacao from '../../../components/Tabelas/TabelaParticipacao';
import BarraParticipacao from  '../../../components/Graficos/BarraParticipacao';

import Loading from './../../../components/Loading/LoadingComponent';

const Faturamento = () => {

  const [ valoresFaturamentoTotal, setValoresFaturamentoTotal ] = useState({});
  const [ valoresFaturamentoComprasVendas, setValoresFaturamentoComprasVendas ] = useState({});
  const [ valoresFaturamentoVariacao, setValoresFaturamentoVariacao ] = useState({});
  const [ valoresFaturamentoGrafico, setValoresFaturamentoGrafico ] = useState({});
  const [ valoresFaturamentoLojasSemanal, setValoresFaturamentoLojasSemanal ] = useState([]);

  const [ loadingTotal, setLoadingTotal ] = useState(true);
  const [ loadingComprasVendas, setLoadingComprasVendas ] = useState(true);
  const [ loadingVariacao, setLoadingVariacao ] = useState(true);
  const [ loadingGrafico, setLoadingGrafico ] = useState(true);
  const [ loadingTabela, setLoadingTabela ] = useState(true);
  
  const load = async () => {
    await getTotalizadoresFaturamento().then((data) => {
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
    }).then(() => {
      setLoadingTotal(false);
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
      alert('Erro ao buscar Totalizadores de Compras e Vendas');
    }).then(() => {
      setLoadingComprasVendas(false);
    })

    await getVariacaoPercentual().then((data) => {
      let result = data.data.results;
      setValoresFaturamentoVariacao(result[0]);
    }, (error) => {
      console.error('ERROR -> ', error);
      alert('Erro ao buscar Porcentagem de Variação');
    }).then(() => {
      setLoadingVariacao(false);
    })

    await getGraficoLinhaSemanal().then((data) => {
      let result = data.data.results;
      setValoresFaturamentoGrafico(result);
    }, (error) => {
      console.error('ERROR -> ', error);
      alert('Erro ao buscar Gráfico de Faturamento Semanal');
    }).then(() => {
      setLoadingGrafico(false);
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
          rows.push({nomeLoja: valor.apelidoloja, cnpj: valor.cnpjloja, valor: parseFloat(valor.faturamento7dd), porcentagem: ((parseFloat(valor.faturamento7dd) / total) * 100)});
        })
      }

      rows.sort((a, b) => {return b.valor - a.valor});
      let id = 1;
      rows.forEach((row) => {
        row.id = id
        id += 1;
      })

      setValoresFaturamentoLojasSemanal(rows);
    }, (error) => {
      console.error('ERROR -> ', error);
      alert('Erro ao buscar Tabela de Faturamento Semanal');
    }).then(() => {
      setLoadingTabela(false);
    })
  }
  
  useEffect(() => {
    load();
  }, []);

  let [fontsLoaded] = useFonts({
    'TitilliumWeb': require('../../../../assets/fonts/TitilliumWeb-Regular.ttf'),
    'TitilliumWebBold': require('../../../../assets/fonts/TitilliumWeb-Bold.ttf'),
    'TitilliumWebLight': require('../../../../assets/fonts/TitilliumWeb-Light.ttf'),
  });

  const renderTotalizadoresRede = () => {
    return (              
      <View style={styles.cardTotalizadoresRede}>
        <Text style={styles.titulocard}>
          Total Rede
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
            <Text style={styles.subtitulo}>
              últimos 7 dias
            </Text>
              { loadingTotal ? <Loading /> :
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.R$}>
                  R$
                </Text>
                <Text style={styles.valor}>
                  { valoresFaturamentoTotal.seteDias  ? <NumberFormat value={ valoresFaturamentoTotal.seteDias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> : <Text> - </Text> }
                </Text>
              </View>
              }
          </View>

          <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
            <Text style={styles.subtitulo}>
              últimos 35 dias
            </Text>
              { loadingTotal ? <Loading /> :
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.R$}>
                  R$
                </Text>
                <Text style={styles.valor}>
                  { valoresFaturamentoTotal.trinaCincoDias ? <NumberFormat value={ valoresFaturamentoTotal.trinaCincoDias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> : <Text> - </Text> }
                </Text>
              </View>
              }
          </View>

        </View>
      </View>
    )
  }

  const renderComprasVendasRede = () => {
    return(
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={styles.cardComprasRede}>
        <Text style={styles.titulocard}>
          Compras Rede
        </Text>
        <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
          <Text style={styles.subtitulo}>esta semana</Text>
          { loadingComprasVendas ? <Loading /> : 
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.R$}>
                R$
              </Text>
              <Text style={styles.valor}>
                { valoresFaturamentoComprasVendas.compras ? <NumberFormat value={ valoresFaturamentoComprasVendas.compras } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> : <Text> - </Text> }
              </Text>
            </View>
          }
        </View>
      </View>

      <View style={styles.cardVendasRede}>
        <Text style={styles.titulocard}>
          Vendas Rede
        </Text>
        <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
          <Text style={styles.subtitulo}>esta semana</Text>
          { loadingComprasVendas ? <Loading /> : 
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.R$}>
                R$
              </Text>
              <Text style={styles.valor}>
                { valoresFaturamentoComprasVendas.vendas ? <NumberFormat value={ valoresFaturamentoComprasVendas.vendas } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> : <Text> - </Text> }
              </Text>
            </View>
          }
        </View>
      </View>
    </View>
    )
  }

  const renderVariacaoPercentual = () => {
    return(
      <View style={styles.cardVariacaoPercentual}>
        <Text style={styles.titulocard}>
          Variação Percentual
        </Text>
      <Text style={styles.subtitulo}>faturamento diário</Text>
      <View style={{flex: 1, flexDirection: 'row', marginBottom: -8, zIndex: 3}}>
          <Card size={60} icon="chevron-up" />
          { loadingVariacao ? <Loading height={26} width={65} /> : 
            <Text style={styles.variacao}>
              { valoresFaturamentoVariacao ?
                <NumberFormat value={ valoresFaturamentoVariacao.fatperc2 } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> :
                <Text>0,00</Text>
              } %
            </Text>
          }
      </View>
      <View style={styles.grafico2}>
        { loadingGrafico ? <Loading width={320} height={150}/> :
          <GraficoFaturamento valoresFaturamentoGrafico={valoresFaturamentoGrafico}/>
        }
      </View>
    </View>
    )
  }

  const renderTabelaParticipacaoLojas = () => {
    return (
      <View style={styles.cardTabelaFaturamento}>
        <Text style={styles.titulocard}>
          Participação das Lojas
        </Text>
        <Text style={styles.subtitulo}>
          no faturamento total semanal
        </Text>
        <View style={styles.grafico}>
          { loadingTabela ? <Loading height={42}/> : 
            <BarraParticipacao           
              valores={valoresFaturamentoLojasSemanal}
              colors={['#021704', '#15541D', '#179C32', '#00E152',  '#C5C5C5']}/>
          }
        </View>
        <View style={styles.tabela}>
            <TabelaParticipacao 
              valores={valoresFaturamentoLojasSemanal}
              colors={['#021704', '#15541D', '#179C32', '#00E152',  '#C5C5C5']}/> 
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