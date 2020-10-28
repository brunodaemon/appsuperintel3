import React from 'react'
import { PieChart } from 'react-native-svg-charts'

class PieChartWithDifferentArcs extends React.PureComponent {

    render() {
        let props = this.props;
        let valoresTrocas = props.valoresTrocas || {
            ultimos7dias: 0,
            ultimos35dias: 0,
            lixoIndenizado: {
                bonificacao: 0,
                deposito: 0
            },
            devolucao: {
                boleto: 0
            }
        }

        const data = [
            {
                key: 1,
                value: valoresTrocas.lixoIndenizado.bonificacao.toString(),
                svg: { fill: '#1A4069' }
            },
            {
                key: 2,
                value: valoresTrocas.lixoIndenizado.deposito.toString(),
                svg: { fill: '#00E152' }
            },
            {
                key: 3,
                value: valoresTrocas.devolucao.boleto.toString(),
                svg: { fill: '#3883C9' }
            },
        ]

        return (
            <PieChart
                style={{ flex:1 }}
                outerRadius={'99%'}
                innerRadius={40}
                data={data}
                padAngle={0}
            />
        )
    }

}

export default PieChartWithDifferentArcs