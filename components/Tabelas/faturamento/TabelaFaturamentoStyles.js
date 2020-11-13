import { StyleSheet } from 'react-native';

export const TabelaFaturamentoStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      marginTop: 5
    },
    barra: {
        width: 50,
        height: 32,
        justifyContent: 'center',
    },
    linhaTabela: { 
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
    },
    colunaLoja: {
        flexDirection: 'column',
        width: 'auto',
        minWidth: 100,
        height: 32,
        justifyContent: 'center',
    },
    colunaValor: {
        flexDirection: 'column',
        width: 'auto',
        minWidth: 120,
        height: 32,
        justifyContent: 'center',
    },
    colunaPorcentagem: {
        flexDirection: 'column',
        width: 'auto',
        height: 32,
        justifyContent: 'center',
    },
    texto: {
      fontSize: 15,
      color: '#032639',
      fontFamily: 'TitilliumWeb',
    },
    icone: {
      height: 10,
      width: 20,
      borderRadius: 10,
      backgroundColor: '#021704',
      marginLeft: 20,
    },
    icone2: {
      height: 10,
      width: 20,
      borderRadius: 10,
      backgroundColor: '#15541D',
      marginLeft: 20,
    },
    icone3: {
      height: 10,
      width: 20,
      borderRadius: 10,
      backgroundColor: '#179C32',
      marginLeft: 20,
    },
    icone4: {
      height: 10,
      width: 20,
      borderRadius: 10,
      backgroundColor: '#00E152',
      marginLeft: 20,
    },
    icone5: {
      height: 10,
      width: 20,
      borderRadius: 10,
      backgroundColor: '#C5C5C5',
      marginLeft: 20,
    },
});