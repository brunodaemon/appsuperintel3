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

import { PerdasStyles as styles } from './PerdasStyles';
import { getTotalizadoresPerdas, 
  getTabelaPerdas } from './../../../services/home/PerdasApi';

import Loading from './../../../components/Loading/LoadingComponent';

const Perdas = () => {

  const [ valoresPerdas, setValoresPerdas ] = useState({});
  const [ valoresPerdasLojasSemanal, setValoresPerdasLojasSemanal ] = useState([]);

  const [ loadingPerdas, setLoadingPerdas ] = useState(true);
  const [ loadingTabela, setLoadingTabela ] = useState(true);

  const load = async () => {
    await getTotalizadoresPerdas().then((data) => {
      let result = data.data.results;
      let perdas = {
        ultimos7dias: 0,
        ultimos35dias: 0
      }

      result.forEach((value) => {
        if(value.id === 1) {
          perdas.ultimos7dias = value.valorperdas;
        }

        if(value.id === 2) {
          perdas.ultimos35dias = value.valorperdas;
        };
      });

      setValoresPerdas(perdas);
    },(error) => {
      console.error('ERROR -> ', error);
      alert('Erro ao buscar Totalizadores de Perdas');
    }).then(() => {
      setLoadingPerdas(false);
    })

    await getTabelaPerdas().then((data) => {
      let result = data.data.results;
      let rows = [];

      result.sort((a, b) => {return parseFloat(b.vlrperdas) - parseFloat(a.vlrperdas)});
      let id = 1;
      result.forEach((valor) => {
        valor.id = id
        id += 1;
        rows.push({id: valor.id, nomeLoja: valor.apelidoloja, cnpj: valor.cnpjloja, valor: parseFloat(valor.vlrperdas), porcentagem: parseFloat(valor.percperdas)});
      })
      setValoresPerdasLojasSemanal(rows);
    },(error) => {
      console.error('ERROR -> ', error);
      alert('Erro ao buscar Tabela de Perdas');
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

  const renderTotalizadoresPerda = () => {
    return(
      <View style={styles.cardTotalizadoresPerda}>
        <Text style={styles.titulocard}>
          Total Rede
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
            <Text style={styles.subtitulo}>
              últimos 7 dias
            </Text>
            { loadingPerdas ? <Loading /> :
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.R$}>
                  R$
                </Text>
                <Text style={styles.valor}>
                  { valoresPerdas.ultimos7dias ? <NumberFormat value={ valoresPerdas.ultimos7dias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> : <Text> - </Text> }
                </Text>
              </View>
            }
          </View>

          <View style={{flex: 1, backgroundColor: 'white', marginTop: 5}}>
            <Text style={styles.subtitulo}>
              últimos 35 dias
            </Text>
            { loadingPerdas ? <Loading /> :
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.R$}>
                  R$
                </Text>
                <Text style={styles.valor}>
                  { valoresPerdas.ultimos35dias ? <NumberFormat value={ valoresPerdas.ultimos35dias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> : <Text> - </Text> }
                </Text>
              </View>
            }
          </View>

      </View>
    </View>
    )
  }

  const renderTabelaPerdas = () => {
    return(
      <View style={styles.cardTabelaPerda}>
        <Text style={styles.titulocard}>
          Participação das Lojas
        </Text>
        <Text style={styles.subtitulo}>
          nas perdas totais semanais
        </Text>
        {loadingTabela ? <Loading height={42}/> : 
          valoresPerdasLojasSemanal.length > 1 ? 
          <View>
            <View style={styles.grafico}>
              <BarraParticipacao
                valores={valoresPerdasLojasSemanal}
                colors={['#D61D00', '#FF7700', '#FFA200', '#F9DC1F', '#C5C5C5']}/>
            </View>
            <View style={styles.tabela}>
              <TabelaParticipacao
                valores={valoresPerdasLojasSemanal}
                colors={['#D61D00', '#FF7700', '#FFA200', '#F9DC1F', '#C5C5C5']}/> 
            </View>
          </View> : 
          <View style={{paddingVertical: 8}}>
            <Text style={styles.textoInformativoSemDados}>Não há dados para serem exibidos!</Text>
          </View>
        }
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
          Perdas
        </Text>
      </View>
      { renderTotalizadoresPerda() }
      { renderTabelaPerdas() }
    </SafeAreaView>
  )}
};

export default Perdas;