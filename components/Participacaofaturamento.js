import React from 'react'
import { StackedBarChart } from 'react-native-svg-charts'
 
class Participacaofaturamento extends React.PureComponent {
    render() {
        const data = [
            {
                lojaum: 3840,
                lojadois: 1920,
                lojatres: 960,
                lojaquatro: 400,
                outros: 400,
            },

        ]
 
        const colors = ['#021704', '#15541D', '#179C32', '#00E152',  '#C5C5C5']
        const keys = ['lojaum', 'lojadois', 'lojatres', 'lojaquatro', 'outros']
 
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

export default Participacaofaturamento