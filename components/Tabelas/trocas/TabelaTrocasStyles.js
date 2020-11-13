import { StyleSheet } from 'react-native';

export const TabelaTrocasStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
        marginTop: 5,
        height: 'auto'
    },
    barra:{
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
    texto:{
        fontSize: 15,
        color:'#032639',
        fontFamily: 'TitilliumWeb',
    },
    icone:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#021017',
        marginLeft: 20,
    },
    icone2:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#153354',
        marginLeft: 20,
    },
    icone3:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#175A9C',
        marginLeft: 20,
    },
    icone4:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#3883C9',
        marginLeft: 20,
    },
    icone5:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#C5C5C5',
        marginLeft: 20,
    },
})