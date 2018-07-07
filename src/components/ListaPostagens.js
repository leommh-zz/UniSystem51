//Importações Globais
import React, { Component } from 'react';
import { ListView, ActivityIndicator, View, RefreshControl} from 'react-native';
import { connect } from 'react-redux';

//Importações Personalizadas
import ListaPosts from './ListaPosts';

export default class ListaPostagens extends Component {

  render(){
      return(
        <ListaPosts type='POSTS' />
      );
  }
  
}

