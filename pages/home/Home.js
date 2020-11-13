import React from 'react';

import { SafeAreaView, ScrollView } from 'react-native';
import Navbar from '../../components/Navbar';
import Faturamento from './faturamento/Faturamento';
import Perdas from './perdas/Perdas';
import Trocas from './trocas/Trocas';

import { HomeStyles as styles } from './HomeStyles';

export default function Home() {
    let nomeRede = `Casa Fiesta`;

    return(
        <SafeAreaView style={styles.container}>
          <Navbar nomeRede={nomeRede} style={styles.Navbar}/>
          <ScrollView style={styles.containerscroll}>
            <Faturamento />
            <Perdas />
            <Trocas />
          </ScrollView>
        </SafeAreaView>
      )

}