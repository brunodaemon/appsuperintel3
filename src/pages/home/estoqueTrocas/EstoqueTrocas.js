import React, { useState, useEffect } from 'react';
import { View,
         Text,
         SafeAreaView, 
} from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import NumberFormat from 'react-number-format';

import BarraParticipacao from  '../../../components/Graficos/BarraParticipacao';
import TabelaParticipacao from  '../../../components/Tabelas/TabelaParticipacao';

import { TrocasStyles as styles } from './EstoqueTrocasStyles';
import { getTotalizadoresEstoqueTrocas, 
  getTabelaEstoqueTrocas } from '../../../services/home/TrocasApi';

import Loading from './../../../components/Loading/LoadingComponent';

const EstoqueTrocas = () => {

    const [ valoresTrocas, setValoresTrocas ] = useState({});
    const [ valoresTrocasLojasSemanal, setValoresTrocasLojasSemanal ] = useState([]);
    
    const [ loadingTrocas, setLoadingTrocas ] = useState(true);
    const [ loadingTabela, setLoadingTabela ] = useState(true);

    const load = async () => {
      await getTotalizadoresEstoqueTrocas().then((data) => {
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
      }).then(() => {
        setLoadingTrocas(false);
      })

      await getTabelaEstoqueTrocas().then((data) => {
        let result = data.data.results;
        let rows = [];

        result.sort((a, b) => {return parseFloat(b.vlrtrocas) - parseFloat(a.vlrtrocas)});
        let id = 1;
        result.forEach((valor) => {
          console.log(valor);
          valor.id = id
          id += 1;
          rows.push({id: valor.id, nomeLoja: valor.apelidoloja, cnpj: valor.cnpjloja, valor: parseFloat(valor.vlrestoque2), porcentagem: parseFloat(valor.percestoque2)});
        })
        setValoresTrocasLojasSemanal(rows);
      },(error) => {
        console.error('ERROR -> ', error);
        alert('Erro ao buscar Tabela de Trocas');
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
  
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {

    const renderTotalizadoresEstoqueTroca = () => {
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
            { loadingTrocas ? <Loading/> : 
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.R$}>
                  R$
                </Text>
                <Text style={styles.valor}>
                  { valoresTrocas.ultimos7dias ? <NumberFormat value={ valoresTrocas.ultimos7dias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>  : <Text> - </Text> }
                </Text>
              </View>
            }
          </View>

          <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
            <Text style={styles.subtitulo}>
              últimos 35 dias
            </Text>
            { loadingTrocas ? <Loading/> : 
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.R$}>
                  R$
                </Text>
                <Text style={styles.valor}>
                  { valoresTrocas.ultimos35dias ? <NumberFormat value={ valoresTrocas.ultimos35dias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>  : <Text> - </Text> }
                </Text>
              </View>
            }
          </View>

        </View>
      </View>
      )
    }

    const renderTabelaEstoqueTroca = () => {
      return(
        <View style={styles.cardTabelaTroca}>
          <Text style={styles.titulocard}>
            Participação das Lojas
          </Text>
          <Text style={styles.subtitulo}>
            no envio de produtos para trocas
          </Text>
          { loadingTabela ? <Loading height={42}/> : 
            valoresTrocasLojasSemanal.length > 0 ? 
            <View>
              <View style={styles.grafico}>
                <BarraParticipacao 
                  valores={valoresTrocasLojasSemanal}
                  colors={['#021017', '#153354', '#175A9C', '#3883C9', '#C5C5C5']}/>
              </View>
              <View style={styles.tabela}>
                <TabelaParticipacao 
                  valores={valoresTrocasLojasSemanal}
                  colors={['#021017', '#153354', '#175A9C', '#3883C9', '#C5C5C5']}/> 
              </View>
            </View> : 
            <View style={{paddingVertical: 8}}>
              <Text style={styles.textoInformativoSemDados}>Não há dados para serem exibidos!</Text>
            </View> 
          }
        </View>
      )
    }

    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.Sessao}>
          <Text style={styles.nomesessao}>
            Estoque de Trocas
          </Text>
        </View> 
        { renderTotalizadoresEstoqueTroca() }
        { renderTabelaEstoqueTroca() }
      </SafeAreaView>
  )}
};

export default EstoqueTrocas;