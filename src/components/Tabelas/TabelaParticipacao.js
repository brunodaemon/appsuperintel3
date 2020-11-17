import * as React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import NumberFormat from 'react-number-format';

import { TabelaParticipacaoStyles as styles } from './TabelaParticipacaoStyles';

export default props => {

    let colors = props.colors || [`#021017`, `#153354`, `#175A9C`, `#3883C9`, `#C5C5C5`];
    const mostrarIcone = (id) => {
        switch (id) {
            case 1:
            case 2:
            case 3:
            case 4:
                return (<View style={{ 
                    height: 10,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: colors[id - 1],
                    marginLeft: 20 
                }} />)

            default:
                return (<View style={{ 
                    height: 10,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: colors[4],
                    marginLeft: 20 
                }} />)
        }
    }

    let valores = props.valores || [];
    let [fontsLoaded] = useFonts({
        'TitilliumWeb': require('../../../assets/fonts/TitilliumWeb-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                { valores.map((valor) => (
                <View style={styles.linhaTabela}>
                    <View style={styles.barra}>
                    { mostrarIcone(valor.id) }
                    </View>

                    <View style={styles.colunaLoja}>
                        <Text style={styles.texto}>
                            { valor.nomeLoja }
                        </Text>
                    </View>

                    <View style={styles.colunaValor}>
                        <Text style={styles.texto}>
                            R$ <NumberFormat value={ valor.valor } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/>
                        </Text>
                    </View>

                    <View style={styles.colunaPorcentagem}>
                        <Text style={styles.texto}>
                            <NumberFormat value={ valor.porcentagem } renderText={value => <Text>{value}</Text>} isNumericString = {true} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true}/> %
                        </Text>
                    </View>
                </View>
                ))}
            </View>
        )
    }
};