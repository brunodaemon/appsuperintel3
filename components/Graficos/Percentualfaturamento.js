import React from 'react'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { View } from 'react-native'
 
class Percentualfaturamento extends React.PureComponent {
    render() {
        let valoresFaturamentoGrafico = this.props.valoresFaturamentoGrafico;
        let data = []

        if(valoresFaturamentoGrafico && valoresFaturamentoGrafico.length > 0) {
            valoresFaturamentoGrafico.forEach((valor) => {
                data.push(parseFloat(valor.faturamento));
            })
        }
 
        const contentInset = { top: 8, bottom:8 }
 
        return (
            <View style={{ height: 150, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: '#707070',
                        fontSize: 12,
                    }}
                    numberOfTicks={4}
                    formatLabel={(value) => `${value}`}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={data}
                    svg={{ stroke: '#175A9C', strokeWidth: 5}}
                    contentInset={contentInset}
                >
                    <Grid />
                </LineChart>
            </View>
        )
    }
}
export default Percentualfaturamento