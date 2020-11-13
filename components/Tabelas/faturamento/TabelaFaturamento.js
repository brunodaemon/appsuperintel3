import * as React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import NumberFormat from 'react-number-format';

import { TabelaFaturamentoStyles as styles } from './TabelaFaturamentoStyles';

export default props => {

  const mostrarIcone = (id) => {
    switch(id) {
      case 1:
        return (<View style={styles.icone} />)

      case 2:
        return (<View style={styles.icone2} />)

      case 3:
        return (<View style={styles.icone3} />)

      case 4:
        return (<View style={styles.icone4} />)

      default:
        return (<View style={styles.icone5} />)
    }
  }

  let valoresFaturamentoLojasSemanal = props.valoresFaturamentoLojasSemanal || [];
  let [fontsLoaded] = useFonts({
    'TitilliumWeb': require('../../../assets/fonts/TitilliumWeb-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <View style={styles.container}>
          
        { valoresFaturamentoLojasSemanal.map((valor) => (
          <View style={styles.linhaTabela}>
            <View style={styles.barra}>
              { mostrarIcone(valor.id) }
            </View>

            <View style={styles.colunaLoja}>
              <Text style={styles.texto}>
                { valor.loja }
              </Text>
            </View>

            <View style={styles.colunaValor}>
              <Text style={styles.texto}>
                R$ <NumberFormat value={ valor.faturamento } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
              </Text>
            </View>

            <View style={styles.colunaPorcentagem}>
              <Text style={styles.texto}>
                <NumberFormat value={ (valor.porcentagem * 100) } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> %
              </Text>
            </View>
          </View>
        ))}
       
      </View>
    )

  }

};