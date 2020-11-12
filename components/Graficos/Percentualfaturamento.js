import React from 'react';
import { LineChart, YAxis, Grid, XAxis } from 'react-native-svg-charts';
import { View } from 'react-native';

class Percentualfaturamento extends React.PureComponent {
    render() {
        let valoresFaturamentoGrafico = this.props.valoresFaturamentoGrafico;
        let data = []
        let diaDaSemana = []

        if(valoresFaturamentoGrafico && valoresFaturamentoGrafico.length > 0) {
            valoresFaturamentoGrafico.forEach((valor) => {
                data.push(parseFloat(valor.faturamento));
                diaDaSemana.push(valor.diasem);
            })
        }
        console.log(diaDaSemana);
 
        const contentInset = { top: 8, bottom:8, left: 8, right: 8, }

        return (
            <View style={{ height: 150, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: '#707070',
                        fontSize: 12
                    }}
                    numberOfTicks={4}
                    formatLabel={(value) => `R$ ${value}`}/>
                <View style={{ flex: 1, marginLeft: 10, }}>
                    <LineChart
                        style={{ flex: 1, marginLeft: 0 }}
                        data={data}
                        svg={{ stroke: '#175A9C', strokeWidth: 5}}
                        contentInset={contentInset}>
                            <Grid />                                                  
                    </LineChart>
                    <View>  
                    <XAxis
                        data={diaDaSemana}
                        contentInset={contentInset}
                        svg={{
                            fill: '#707070',
                            fontSize: 10,
                        }}
                        numberOfTicks={7}
                        formatLabel={(value) => `${diaDaSemana[value]}`}/>
                    </View>              
                </View>              
            </View>
        )
    }
}
export default Percentualfaturamento