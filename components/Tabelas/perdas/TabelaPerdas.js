import * as React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Divider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

import NumberFormat from 'react-number-format';


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
        marginTop: 5,
        height: 'auto'
    },
    barra:{
        width: 50,
        height: 32,
        justifyContent: 'center',
    },
    view: {
      width: 140,
      height: 32,
      justifyContent: 'center',
    },
    view2: {
      width: 140,
      height: 32,
      justifyContent: 'center',
    },
    view3: {
      width: 50,
      height: 32,
      justifyContent: 'center',
    },
    texto:{
        fontSize: 15,
        color:'#032639',
        fontFamily: 'TitilliumWeb',
    },
    icone:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#D61D00',
        marginLeft: 20,
    },
    icone2:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#FF7700',
        marginLeft: 20,
    },
    icone3:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#FFA200',
        marginLeft: 20,
    },
    icone4:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#F9DC1F',
        marginLeft: 20,
    },
    icone5:{
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
  
  let valoresPerdasLojasSemanal = props.valoresPerdasLojasSemanal || [];
  let [fontsLoaded] = useFonts({
    'TitilliumWeb': require('../../../assets/fonts/TitilliumWeb-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return (
    <View style={styles.container}>
      { valoresPerdasLojasSemanal.map((valor) => (
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.barra}>
            { mostrarIcone(valor.id) }
          </View>

          <View style={styles.view}>
            <Text style={styles.texto}>
              { valor.apelidoloja }
            </Text>
          </View>

          <View style={styles.view2}>
            <Text style={styles.texto}>
              R$ <NumberFormat value={ valor.vlrperdas } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
            </Text>
          </View>

          <View style={styles.view3}>
            <Text style={styles.texto}>
              <NumberFormat value={ valor.percperdas } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> %
            </Text>
          </View>
        </View>
      ))}
   
  </View>
  )

}

};