//Importações Globais
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { TabBar } from 'react-native-tab-view';

//Cria os detalhes do Cabeçalho da TabBar
const TabBarDetalhes = props => (
    <View >
        <Image style={ Styles.background } source={ require('../imgs/background2.png') }  >
          <Text style={ Styles.titulo }>Uni System 51</Text>
        </Image>
        <View style={{ elevation: 0.2 }}>
          <TabBar {...props} indicatorStyle={Styles.indicator} labelStyle={{fontSize: 13}}  style={{ backgroundColor: '#631a3b'}} />
        </View>
    </View>
);

const Styles = StyleSheet.create({
  background: {
    width: null, height: 50
  },
  titulo: {
    padding: 8, color: '#fff', fontSize: 25, textAlign: 'center', fontFamily: 'Montserrat'
  },
  indicator: {
    backgroundColor: '#ff836c',
    height: 3
  }
});

export default TabBarDetalhes;
