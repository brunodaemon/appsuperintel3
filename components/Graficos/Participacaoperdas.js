import React from 'react'
import { StackedBarChart } from 'react-native-svg-charts'
 
class Participacaoperdas extends React.PureComponent {
    render() {

        let valoresPerdasLojasSemanal = this.props.valoresPerdasLojasSemanal || [];
        let valoresLojas = {
            lojaum: 0,
            lojadois: 0,
            lojatres: 0,
            lojaquatro: 0,
            outros: 0,
        }

        if(valoresPerdasLojasSemanal && valoresPerdasLojasSemanal.length > 0) {
            if(valoresPerdasLojasSemanal[0]) {
                valoresLojas.lojaum = parseFloat(valoresPerdasLojasSemanal[0].vlrperdas);
            }
                        
            if(valoresPerdasLojasSemanal[1]) {
                valoresLojas.lojadois = parseFloat(valoresPerdasLojasSemanal[1].vlrperdas);
            }

            if(valoresPerdasLojasSemanal[2]) {
                valoresLojas.lojatres = parseFloat(valoresPerdasLojasSemanal[2].vlrperdas);
            }

            if(valoresPerdasLojasSemanal[3]) {
                valoresLojas.lojaquatro = parseFloat(valoresPerdasLojasSemanal[3].vlrperdas);
            }
            
            for (let index = 4; index < valoresPerdasLojasSemanal.length; index++) {
                valoresLojas.outros += parseFloat(valoresPerdasLojasSemanal[index].vlrperdas);
            }
        }

        const data = [
            valoresLojas
        ]
 
        const colors = ['#D61D00', '#FF7700', '#FFA200', '#F9DC1F',  '#C5C5C5']
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

export default Participacaoperdas