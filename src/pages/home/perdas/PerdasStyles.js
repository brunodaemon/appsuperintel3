import { StyleSheet } from 'react-native';

export const PerdasStyles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#EEEEEE',
    },
    Sessao:{
      backgroundColor: '#1A4069',
      borderRadius: 10,
      height: 55,
    },
    nomesessao:{
      fontSize: 18,
      color: '#FFF',
      marginLeft: 20,
      marginTop: 8,
      fontFamily: 'TitilliumWeb',
    },
    titulocard:{
      fontSize: 18,
      color: '#707070',
      marginTop: -8,
      fontFamily: 'TitilliumWeb',
    },
    subtitulo:{
      fontSize: 13,
      color: '#707070',
      fontFamily: 'TitilliumWeb',
    },
    subtitulo2:{
      fontSize: 13,
      color: '#707070',
      marginTop: 14,
      fontFamily: 'TitilliumWeb',
    },
    R$:{
      fontSize: 17,
      color: '#032639',
      marginTop: 4.5,
      marginRight: 3,
      fontFamily: 'TitilliumWebLight',
    },
    valor:{
      fontSize: 21,
      color: '#032639',
      fontFamily: 'TitilliumWebBold',
    },
    grafico:{
      backgroundColor: '#FFF',
      height: 40,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: -10,
      marginRight: -10,
      borderRadius: 10,
    },
    cardTotalizadoresPerda:{
      backgroundColor: "#FFF",
      borderRadius: 10,
      height: 'auto',
      marginTop: -15,
      padding: 20,
    },
    cardTabelaPerda:{
      backgroundColor: "#FFF",
      borderRadius: 10,
      height: 'auto',
      marginTop: 15,
      marginBottom: 15,
      padding: 20,
    },
    tabela:{
        marginLeft: -20,
        marginRight:-20,
        height: 'auto',
    },
    textoInformativoSemDados: {
      fontSize: 21,
      color: '#032639',
      fontFamily: 'TitilliumWebBold',
    }
  });