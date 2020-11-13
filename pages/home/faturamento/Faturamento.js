import React, { useState } from 'react';
import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
} from 'react-native';
import Participacaofaturamento from  '../../../components/Graficos/Participacaofaturamento';
import Percentualfaturamento from  '../../../components/Graficos/Percentualfaturamento';
import Listalojas from  '../../../components/Tabelas/Participacaofaturamento';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { Card } from 'react-native-paper';
import NumberFormat from 'react-number-format';
import { FaturamentoStyles as styles } from './FaturamentoStyles';

export default function Faturamento(props) {

  // const valoresFaturamentoTotal
  
  let valoresFaturamentoTotal = props.valoresFaturamentoTotal || {
    seteDias: 0,
    trinaCincoDias: 0,
  }

  let valoresFaturamentoVariacao = props.valoresFaturamentoVariacao || {            
    id: 1,
    fatperc2: 0
  };

  let valoresFaturamentoLojasSemanal = props.valoresFaturamentoLojasSemanal || [];
  let valoresFaturamentoGrafico = props.valoresFaturamentoGrafico || [];

  let valoresFaturamentoComprasVendas = props.valoresFaturamentoComprasVendas || {
    compras: 0,
    vendas: 0
  }

  let [fontsLoaded] = useFonts({
    'TitilliumWeb': require('../../../assets/fonts/TitilliumWeb-Regular.ttf'),
    'TitilliumWebBold': require('../../../assets/fonts/TitilliumWeb-Bold.ttf'),
    'TitilliumWebLight': require('../../../assets/fonts/TitilliumWeb-Light.ttf'),
  });

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
                    <NumberFormat value={ valoresFaturamentoTotal.seteDias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
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
                    <NumberFormat value={ valoresFaturamentoTotal.trinaCincoDias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
                  </Text>
                </View>
              </View>
    
              </View>
            </View>

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
                  <NumberFormat value={ valoresFaturamentoComprasVendas.compras } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
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
                <NumberFormat value={ valoresFaturamentoComprasVendas.vendas } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
              </Text>
              </View>
              </View>
            </View>
            </View>
    
            <View style={styles.card2}>
              <Text style={styles.titulocard}>
                Variação Percentual Faturamento
              </Text>
              <View style={{flex: 1, flexDirection: 'row', marginBottom: -8, zIndex: 3}}>
                <Card size={60} icon="chevron-up" />
                <Text style={styles.variacao}>
                  <NumberFormat value={ valoresFaturamentoVariacao.fatperc2 } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> %
                </Text>
              </View>
              <View style={styles.grafico2}>
                <Percentualfaturamento valoresFaturamentoGrafico={valoresFaturamentoGrafico}/>
              </View>
              
            </View>
    
            <View style={styles.card3}>
              <Text style={styles.titulocard}>
                Participação das Lojas
              </Text>
              <Text style={styles.subtitulo}>
                no faturamento total semanal
              </Text>
              <View style={styles.grafico}>
                <Participacaofaturamento valoresFaturamentoLojasSemanal={valoresFaturamentoLojasSemanal}/>
              </View>
              <View style={styles.tabela}>
                <Listalojas valoresFaturamentoLojasSemanal={valoresFaturamentoLojasSemanal}/> 
              </View>
            </View>
            
        </SafeAreaView>
      )

}
};