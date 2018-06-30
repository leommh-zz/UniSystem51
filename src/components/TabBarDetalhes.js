//Importações Globais
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { TabBar } from 'react-native-tab-view';

//Cria os detalhes do Cabeçalho da TabBar
const TabBarDetalhes = props => (
    <View style={{backgroundColor: '#232a34' }}>
        
      
      <Image style={ styles.imgTab } source={ require('../imgs/background2.png') }  > 
        <Text style={ styles.titleTab }>Uni System 51</Text>
      </Image>
      <View style={{ elevation: 0.9 }}>
        <TabBar {...props} indicatorStyle={styles.indicatorTab} labelStyle={{fontSize: 13}}  style={styles.tab} />
      </View>

    </View>
);

const styles = StyleSheet.create({
  imgTab: {
    width: null, height: 50
  },
  titleTab: {
    padding: 8, color: '#fff', fontSize: 25, textAlign: 'center', fontFamily: 'Montserrat'
  },
  indicatorTab: {
    backgroundColor: '#ff836c',
    height: 3
  },
  tab: {
    backgroundColor: '#631a3b'
  }
});

export default TabBarDetalhes;
