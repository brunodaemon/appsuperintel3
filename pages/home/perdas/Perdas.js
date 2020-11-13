import React, { useState } from 'react';
import { View,
         Text,
         SafeAreaView, 
} from 'react-native';
import Participacaoperdas from  '../../../components/Graficos/Participacaoperdas';
import Listalojas from  '../../../components/Tabelas/Participacaoperdas';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import NumberFormat from 'react-number-format';
import { PerdasStyles as styles } from './PerdasStyles';

export default function Perdas(props) {

    let valoresPerdas = props.valoresPerdas || {
      ultimos7dias: 0,
      ultimos35dias: 0
    }

    let valoresPerdasLojasSemanal = props.valoresPerdasLojasSemanal || [];

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
                Perdas
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
                { valoresPerdas.ultimos7dias ? <NumberFormat value={ valoresPerdas.ultimos7dias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> : <Text> - </Text> }
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
                { valoresPerdas.ultimos35dias ? <NumberFormat value={ valoresPerdas.ultimos35dias } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> : <Text> - </Text> }
              </Text>
              </View>
              </View>
    
              </View>
            </View>
    
            <View style={styles.card8}>
              <Text style={styles.titulocard}>
                Participação das Lojas
              </Text>
              <Text style={styles.subtitulo}>
                nas perdas totais semanais
              </Text>

              { valoresPerdasLojasSemanal.length > 1 ? 
                <View>
                  <View style={styles.grafico}>
                    <Participacaoperdas valoresPerdasLojasSemanal={valoresPerdasLojasSemanal}/>
                  </View>
                  <View style={styles.tabela}>
                    <Listalojas valoresPerdasLojasSemanal={valoresPerdasLojasSemanal}/> 
                  </View>
                </View> : 
                <View style={{paddingVertical: 8}}>
                  <Text style={styles.textoInformativoSemDados}>Não há dados para serem exibidos!</Text>
                </View> }

            </View>

        </SafeAreaView>
      )

}
};