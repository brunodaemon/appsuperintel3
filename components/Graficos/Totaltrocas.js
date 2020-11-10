import React from 'react'
import { PieChart } from 'react-native-svg-charts'

class PieChartWithDifferentArcs extends React.PureComponent {

    render() {
        let props = this.props;
        console.log('pie! ->', JSON.stringify(props));
        let valoresTrocasGrafico = props.valoresTrocasGrafico;

        const data = [
            {
                key: 1,
                value: valoresTrocasGrafico.lixoIndenizado.bonificacao.toString(),
                svg: { fill: '#1A4069' }
            },
            {
                key: 2,
                value: valoresTrocasGrafico.lixoIndenizado.deposito.toString(),
                svg: { fill: '#00E152' }
            },
            {
                key: 3,
                value: valoresTrocasGrafico.devolucao.boleto.toString(),
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