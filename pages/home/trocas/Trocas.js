import React, { useState, useEffect } from 'react';
import { View,
         Text,
         SafeAreaView, 
} from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import NumberFormat from 'react-number-format';

import BarraParticipacaoTrocas from  '../../../components/Graficos/trocas/BarraParticipacaoTrocas';
import TabelaTrocas from  '../../../components/Tabelas/trocas/TabelaTrocas';

import { TrocasStyles as styles } from './TrocasStyles';
import { getTotalizadoresTrocas, 
  getTabelaTrocas } from './../../../Services/home/TrocasApi'

const Trocas = () => {

    const [ valoresTrocas, setValoresTrocas ] = useState({});
    const [ valoresTrocasLojasSemanal, setValoresTrocasLojasSemanal ] = useState([]);
    
    const load = async () => {
      await getTotalizadoresTrocas().then((data) => {
        let result = data.data.results;
        let trocas = {
          ultimos7dias: 0,
          ultimos35dias: 0
        }

        result.forEach((value) => {
          if(value.id === 1) {
            trocas.ultimos7dias = value.valortrocas;
          }

          if(value.id === 2) {
            trocas.ultimos35dias = value.valortrocas;
          };
        });
        setValoresTrocas(trocas);
      },(error) => {
        console.error('ERROR -> ', error);
        alert('Erro ao buscar Totalizadores de Trocas');
      })

      await getTabelaTrocas().then((data) => {
        let result = data.data.results;
        result.sort((a, b) => {return parseFloat(b.vlrtrocas) - parseFloat(a.vlrtrocas)});
        let id = 1;
        result.forEach((row) => {
          row.id = id
          id += 1;
        })
        setValoresTrocasLojasSemanal(result);
      },(error) => {
        console.error('ERROR -> ', error);
        alert('Erro ao buscar Totalizadores de Perdas');
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
  
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {

    const renderTotalizadoresTroca = () => {
      return(  
      
      <View style={styles.cardTotalizadoresTroca}>
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
                { valoresTrocas.ultimos7dias ? <NumberFormat value={ valoresTrocas.ultimos7dias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>  : <Text> - </Text> }
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
                { valoresTrocas.ultimos35dias ? <NumberFormat value={ valoresTrocas.ultimos35dias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>  : <Text> - </Text> }
              </Text>
            </View>
          </View>

        </View>
      </View>
      )
    }

    const renderTabelaTroca = () => {
      return(
        <View style={styles.cardTabelaTroca}>
          <Text style={styles.titulocard}>
            Participação das Lojas
          </Text>
          <Text style={styles.subtitulo}>
            nas trocas totais semanais
          </Text>
          { valoresTrocasLojasSemanal.length > 1 ? 
            <View>
              <View style={styles.grafico}>
                <BarraParticipacaoTrocas valoresTrocasLojasSemanal={valoresTrocasLojasSemanal}/>
              </View>
              <View style={styles.tabela}>
                <TabelaTrocas valoresTrocasLojasSemanal={valoresTrocasLojasSemanal}/> 
              </View>
            </View> : 
            <View style={{paddingVertical: 8}}>
              <Text style={styles.textoInformativoSemDados}>Não há dados para serem exibidos!</Text>
            </View> }
        </View>
      )
    }

    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.Sessao}>
          <Text style={styles.nomesessao}>
            Trocas
          </Text>
        </View>
        {renderTotalizadoresTroca()}
        {renderTabelaTroca()}
      </SafeAreaView>
  )}
};

export default Trocas;