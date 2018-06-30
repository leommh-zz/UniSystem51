//Importações Globais
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

//Importações Personalizadas...
import ListaPostagens from './ListaPostagens';
import TabBarMenu from './TabBarMenu';


export default class Inicio extends Component {
  
  render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <StatusBar backgroundColor="#401026" />
          <TabBarMenu />
        </View>
      );
  }
  
}

