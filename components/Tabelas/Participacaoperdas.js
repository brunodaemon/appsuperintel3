import * as React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Divider } from 'react-native-paper';


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
        marginTop: 5,
    },
    barra:{
        width: 40,
        height: 32,
        justifyContent: 'center',
    },
    view:{
        width: 170,
        height: 32,
        justifyContent: 'center',
    },
    view2:{
        width: 130,
        height: 32,
        justifyContent: 'center',
    },
    view3:{
        width: 50,
        height: 32,
        justifyContent: 'center',
    },
    texto:{
        fontSize: 15,
        color:'#032639',
    },
    icone:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#D61D00',
        marginLeft: 10,
    },
    icone2:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#FF7700',
        marginLeft: 10,
    },
    icone3:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#FFA200',
        marginLeft: 10,
    },
    icone4:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#F9DC1F',
        marginLeft: 10,
    },
    icone5:{
        height: 10,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#C5C5C5',
        marginLeft: 10,
    },


});

const Participacaoperdas = () => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row'}}>
        <View style={styles.barra}><View style={styles.icone}/></View>
        <View style={styles.view}>
         <Text style={styles.texto}>
           Avenida Iguaçu
         </Text>
        </View>
        <View style={styles.view2}>
         <Text style={styles.texto}>
           R$ 145.362,32
         </Text>
        </View>
        <View style={styles.view3}>
         <Text style={styles.texto}>
           20,3%
         </Text>
        </View>
    </View>
    <Divider />
    <View style={{flexDirection: 'row'}}>
        <View style={styles.barra}><View style={styles.icone2}/></View>
        <View style={styles.view}>
         <Text style={styles.texto}>
           XV de Novembro
         </Text>
        </View>
        <View style={styles.view2}>
         <Text style={styles.texto}>
           R$ 127.362,32
         </Text>
        </View>
        <View style={styles.view3}>
         <Text style={styles.texto}>
           18,6%
         </Text>
        </View>
    </View>
    <Divider />
    <View style={{flexDirection: 'row'}}>
        <View style={styles.barra}><View style={styles.icone3}/></View>
        <View style={styles.view}>
         <Text style={styles.texto}>
           Jardim das Américas
         </Text>
        </View>
        <View style={styles.view2}>
         <Text style={styles.texto}>
           R$ 103.456,85
         </Text>
        </View>
        <View style={styles.view3}>
         <Text style={styles.texto}>
           17,9%
         </Text>
        </View>
    </View>
    <Divider />
    <View style={{flexDirection: 'row'}}>
        <View style={styles.barra}><View style={styles.icone4}/></View>
        <View style={styles.view}>
         <Text style={styles.texto}>
           Dr. Pedrosa
         </Text>
        </View>
        <View style={styles.view2}>
         <Text style={styles.texto}>
           R$ 96.845,47
         </Text>
        </View>
        <View style={styles.view3}>
         <Text style={styles.texto}>
           15,9%
         </Text>
        </View>
    </View>
    <Divider />
    <View style={{flexDirection: 'row'}}>
        <View style={styles.barra}><View style={styles.icone5}/></View>
        <View style={styles.view}>
         <Text style={styles.texto}>
           João Gualberto
         </Text>
        </View>
        <View style={styles.view2}>
         <Text style={styles.texto}>
           R$ 33.214,62
         </Text>
        </View>
        <View style={styles.view3}>
         <Text style={styles.texto}>
           9,2%
         </Text>
        </View>
    </View>
    <Divider />
    <View style={{flexDirection: 'row'}}>
        <View style={styles.barra}><View style={styles.icone5}/></View>
        <View style={styles.view}>
         <Text style={styles.texto}>
           Sinduscon
         </Text>
        </View>
        <View style={styles.view2}>
         <Text style={styles.texto}>
           R$ 26.845,74
         </Text>
        </View>
        <View style={styles.view3}>
         <Text style={styles.texto}>
           8,5%
         </Text>
        </View>
    </View>
    <Divider />
    <View style={{flexDirection: 'row'}}>
        <View style={styles.barra}><View style={styles.icone5}/></View>
        <View style={styles.view}>
         <Text style={styles.texto}>
           Fernando Simas
         </Text>
        </View>
        <View style={styles.view2}>
         <Text style={styles.texto}>
           R$ 19.267,41
         </Text>
        </View>
        <View style={styles.view3}>
         <Text style={styles.texto}>
           7,6%
         </Text>
        </View>
    </View>
    <Divider />
  </View>
);

export default Participacaoperdas;