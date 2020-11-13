import * as React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import NumberFormat from 'react-number-format';

import { TabelaTrocasStyles as styles } from './TabelaTrocasStyles';

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

  let valoresTrocasLojasSemanal = props.valoresTrocasLojasSemanal || [];
  let [fontsLoaded] = useFonts({
    'TitilliumWeb': require('../../../assets/fonts/TitilliumWeb-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <View style={styles.container}>
      { valoresTrocasLojasSemanal.map((valor) => (
        <View style={styles.linhaTabela}>
          <View style={styles.barra}>
            { mostrarIcone(valor.id) }
          </View>

          <View style={styles.colunaLoja}>
            <Text style={styles.texto}>
              { valor.apelidoloja }
            </Text>
          </View>

          <View style={styles.colunaValor}>
            <Text style={styles.texto}>
              R$ <NumberFormat value={ valor.vlrtrocas } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
            </Text>
          </View>

          <View style={styles.colunaPorcentagem}>
            <Text style={styles.texto}>
              <NumberFormat value={ valor.perctrocas } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> %
            </Text>
          </View>
        </View>
      ))}
   
  </View>
  )

}

};