//Importações Globais
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabBar } from 'react-native-tab-view';

//Cria os detalhes do Cabeçalho da TabBar
export default TabBarDetalhes = props => {

  return(
      <View style={ styles.fundo }>
        <TabBar { ...props } indicatorStyle={ styles.indicatorTab } labelStyle={ styles.labelTab }  style={ styles.tab } />
      </View>
  );

}

const styles = StyleSheet.create({
  fundo:{
    elevation: 0.9, 
    backgroundColor: '#20262f'
  },
  labelTab:{
    fontSize: 13
  },
  imgTab: {
    width: null, height: 50
  },
  titleTab: {
    padding: 8, color: '#ff184c', fontSize: 25, textAlign: 'center', fontFamily: 'Montserrat'
  },
  indicatorTab: {
    backgroundColor: '#ff966d',
    height: 3
  },
  tab: {
    backgroundColor: '#8c003f'
  }
});