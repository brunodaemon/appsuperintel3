import React from 'react'
import { StackedBarChart } from 'react-native-svg-charts'
 
class Participacaofaturamento extends React.PureComponent {
    render() {
        let valoresFaturamentoLojasSemanal = this.props.valoresFaturamentoLojasSemanal || [];
        let valoresLojas = {
            lojaum: 0,
            lojadois: 0,
            lojatres: 0,
            lojaquatro: 0,
            outros: 0,
        }
        console.log(valoresFaturamentoLojasSemanal);

        if(valoresFaturamentoLojasSemanal && valoresFaturamentoLojasSemanal.length > 0) {
            if(valoresFaturamentoLojasSemanal[0]) {
                valoresLojas.lojaum = parseFloat(valoresFaturamentoLojasSemanal[0].faturamento);
            }
                        
            if(valoresFaturamentoLojasSemanal[1]) {
                valoresLojas.lojadois = parseFloat(valoresFaturamentoLojasSemanal[1].faturamento);
            }

            if(valoresFaturamentoLojasSemanal[2]) {
                valoresLojas.lojatres = parseFloat(valoresFaturamentoLojasSemanal[2].faturamento);
            }

            if(valoresFaturamentoLojasSemanal[3]) {
                valoresLojas.lojaquatro = parseFloat(valoresFaturamentoLojasSemanal[3].faturamento);
            }
            
            for (let index = 4; index < valoresFaturamentoLojasSemanal.length; index++) {
                valoresLojas.outros += parseFloat(valoresFaturamentoLojasSemanal[index].faturamento);
            }
        }

        const data = [
            valoresLojas
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