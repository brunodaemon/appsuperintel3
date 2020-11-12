import React from 'react';
import { View,
         Text, 
         StyleSheet, 
         SafeAreaView, 
         StatusBar,
         Image,
} from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';


export default function Navbar(props){
  
  const styles = StyleSheet.create({
    Appbar:{
      backgroundColor: "#032639",
      height: 55,
      justifyContent: 'center',
    },
    fundocardtop:{
      backgroundColor:'#EEEEEE',
      height: 80,
    },
    cardTop:{
      backgroundColor: "#FFF",
      borderRadius: 10,
      height: 50,
      marginTop: 15,
      justifyContent: 'center',
    },
    nomeRede:{
      fontSize: 26,
      marginLeft: 20,
      color: "#032639",
      fontFamily: 'TitilliumWebBold',
    },
    logo:{
      height: 16,
      width: 190,
      justifyContent: 'center',
    },
    navBar: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'row'
    }
  });

  let nomeRede = props.nomeRede ? props.nomeRede : ' ';

  let [fontsLoaded] = useFonts({
    'TitilliumWebBold': require('../assets/fonts/TitilliumWeb-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return(
      <SafeAreaView>
          <StatusBar backgroundColor="#032639"/>
          <View style={styles.Appbar}>
            <View style={styles.navBar}>
              <Image
              style={styles.logo}
              source={require('../assets/icones/superintel_branco.png')}/>
            </View>
          </View>
          <View style={styles.fundocardtop}>
            <View View style={styles.cardTop}>
              <Text style={styles.nomeRede}>{nomeRede}</Text>
            </View>
          </View> 
      </SafeAreaView>
    )
  }
};