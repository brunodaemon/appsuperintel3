import * as React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Divider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

import NumberFormat from 'react-number-format';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 5,
  },
  barra: {
    width: 50,
    height: 32,
    justifyContent: 'center',
  },
  view: {
    width: 160,
    height: 32,
    justifyContent: 'center',
  },
  view2: {
    width: 120,
    height: 32,
    justifyContent: 'center',
  },
  view3: {
    width: 50,
    height: 32,
    justifyContent: 'center',
  },
  texto: {
    fontSize: 15,
    color: '#032639',
    fontFamily: 'TitilliumWeb',
  },
  icone: {
    height: 10,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#021704',
    marginLeft: 20,
  },
  icone2: {
    height: 10,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#15541D',
    marginLeft: 20,
  },
  icone3: {
    height: 10,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#179C32',
    marginLeft: 20,
  },
  icone4: {
    height: 10,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#00E152',
    marginLeft: 20,
  },
  icone5: {
    height: 10,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#C5C5C5',
    marginLeft: 20,
  },


});

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
    'TitilliumWeb': require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <View style={styles.container}>
          
        { valoresFaturamentoLojasSemanal.map((valor) => (
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.barra}>
              { mostrarIcone(valor.id) }
            </View>

            <View style={styles.view}>
              <Text style={styles.texto}>
                { valor.loja }
              </Text>
            </View>

            <View style={styles.view2}>
              <Text style={styles.texto}>
                R$ <NumberFormat value={ valor.faturamento } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
              </Text>
            </View>

            <View style={styles.view3}>
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