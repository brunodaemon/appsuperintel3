import React from 'react'
import { StackedBarChart } from 'react-native-svg-charts'
 
class Participacaotrocas extends React.PureComponent {
    render() {
        const data = [
            {
                month: new Date(2015, 0, 1),
                apples: 3840,
                bananas: 1920,
                cherries: 960,
                dates: 400,
                oranges: 400,
            },

        ]
 
        const colors = ['#021017', '#153354', '#175A9C', '#3883C9',  '#C5C5C5']
        const keys = ['apples', 'bananas', 'cherries', 'dates', 'oranges']
 
        return (
            <StackedBarChart
                style={{ height: 42, borderRadius: 10, marginTop: 0, }}
                keys={keys}
                colors={colors}
                data={data}
                showGrid={false}
                contentInset={{ top: 0, bottom: 0 }}
                horizontal={true}
            />
        )
    }
}

export default Participacaotrocas