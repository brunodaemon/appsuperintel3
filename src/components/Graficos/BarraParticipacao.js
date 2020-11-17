import React from 'react'
import { StackedBarChart } from 'react-native-svg-charts'
 
class BarraParticipacaoFaturamento extends React.PureComponent {
    render() {
        let valores = this.props.valores || [];
        let valoresLojas = {
            lojaum: 0,
            lojadois: 0,
            lojatres: 0,
            lojaquatro: 0,
            outros: 0,
        }

        if(valores && valores.length > 0) {
            if(valores[0]) {
                valoresLojas.lojaum = parseFloat(valores[0].valor);
            }
                        
            if(valores[1]) {
                valoresLojas.lojadois = parseFloat(valores[1].valor);
            }

            if(valores[2]) {
                valoresLojas.lojatres = parseFloat(valores[2].valor);
            }

            if(valores[3]) {
                valoresLojas.lojaquatro = parseFloat(valores[3].valor);
            }
            
            for (let index = 4; index < valores.length; index++) {
                valoresLojas.outros += parseFloat(valores[index].valor);
            }
        }

        const data = [
            valoresLojas
        ]
 
        const colors = this.props.colors || ['#021704', '#15541D', '#179C32', '#00E152',  '#C5C5C5']
        const keys = ['lojaum', 'lojadois', 'lojatres', 'lojaquatro', 'outros']
 
        return (
            <StackedBarChart
                style={{ height: 42, borderRadius: 10, marginTop: 0 }}
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

export default BarraParticipacaoFaturamento