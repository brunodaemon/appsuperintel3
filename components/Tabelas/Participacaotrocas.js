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
    },
    barra:{
        width: 50,
        height: 32,
        justifyContent: 'center',
    },
    view:{
        width: 160,
        height: 32,
        justifyContent: 'center',
    },
    view2:{
        width: 120,
        height: 32,
        justifyContent: 'center',
    },
    view3:{
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
        backgroundColor: '#021017',
        marginLeft: 20,
    },
    icone2:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#153354',
        marginLeft: 20,
    },
    icone3:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#175A9C',
        marginLeft: 20,
    },
    icone4:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#3883C9',
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

  let valoresTrocasLojasSemanal = props.valoresTrocasLojasSemanal || [];
  let [fontsLoaded] = useFonts({
    'TitilliumWeb': require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <View style={styles.container}>
      { valoresTrocasLojasSemanal.map((valor) => (
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.barra}>
            { valor.id === 1 ? <View style={styles.icone} /> : <View/> }
            { valor.id === 2 ? <View style={styles.icone2} /> : <View/> }
            { valor.id === 3 ? <View style={styles.icone3} /> : <View/> }
            { valor.id === 4 ? <View style={styles.icone4} /> : <View/> }
            { valor.id >= 5 ? <View style={styles.icone5} /> : <View/> }
          </View>

          <View style={styles.view}>
            <Text style={styles.texto}>
              { valor.apelidoloja }
            </Text>
          </View>

          <View style={styles.view2}>
            <Text style={styles.texto}>
              R$ <NumberFormat value={ valor.vlrtrocas } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
            </Text>
          </View>

          <View style={styles.view3}>
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