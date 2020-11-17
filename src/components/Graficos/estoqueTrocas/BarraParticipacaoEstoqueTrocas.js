import React from 'react'
import { StackedBarChart } from 'react-native-svg-charts'
 
class BarraParticipacaoEstoqueTrocas extends React.PureComponent {
    render() {

        let valoresTrocasLojasSemanal = this.props.valoresTrocasLojasSemanal || [];
        let valoresLojas = {
            lojaum: 0,
            lojadois: 0,
            lojatres: 0,
            lojaquatro: 0,
            outros: 0,
        }

        if(valoresTrocasLojasSemanal && valoresTrocasLojasSemanal.length > 0) {
            if(valoresTrocasLojasSemanal[0]) {
                valoresLojas.lojaum = parseFloat(valoresTrocasLojasSemanal[0].vlrestoque2);
            }
                        
            if(valoresTrocasLojasSemanal[1]) {
                valoresLojas.lojadois = parseFloat(valoresTrocasLojasSemanal[1].vlrestoque2);
            }

            if(valoresTrocasLojasSemanal[2]) {
                valoresLojas.lojatres = parseFloat(valoresTrocasLojasSemanal[2].vlrestoque2);
            }

            if(valoresTrocasLojasSemanal[3]) {
                valoresLojas.lojaquatro = parseFloat(valoresTrocasLojasSemanal[3].vlrtrocas);
            }
            
            for (let index = 4; index < valoresTrocasLojasSemanal.length; index++) {
                valoresLojas.outros += parseFloat(valoresTrocasLojasSemanal[index].vlrestoque2);
            }
        }

        const data = [
            valoresLojas
        ]
 
        const colors = ['#021017', '#153354', '#175A9C', '#3883C9',  '#C5C5C5']
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

export default BarraParticipacaoEstoqueTrocas