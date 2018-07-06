//Importações Globais
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Animated } from 'react-native';
import { TabBar } from 'react-native-tab-view';

//Cria os detalhes do Cabeçalho da TabBar
const TabBarDetalhes = props => {


    return(
    
        <View style={{ elevation: 0.9, backgroundColor: '#20262f'  }}>
          <TabBar {...props} indicatorStyle={styles.indicatorTab} labelStyle={{fontSize: 13}}  style={styles.tab} />
        </View>

    );



  }

  const styles = StyleSheet.create({
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
      backgroundColor: '#20262f'
      
  
    }
  });

export default TabBarDetalhes;