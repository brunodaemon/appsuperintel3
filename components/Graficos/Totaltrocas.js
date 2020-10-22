import React from 'react'
import { PieChart } from 'react-native-svg-charts'

class PieChartWithDifferentArcs extends React.PureComponent {

    render() {

        const data = [

            {
                key: 1,
                value: 40256,
                svg: { fill: '#1A4069' }
            },
            {
                key: 2,
                value: 45369,
                svg: { fill: '#00E152' }
            },
            {
                key: 3,
                value: 250256,
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