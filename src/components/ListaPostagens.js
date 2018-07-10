//Importações Globais
import React, { Component } from 'react';

//Importações Personalizadas
import ListaPosts from './ListaPosts';

export default class ListaPostagens extends Component {

  render(){
      return(
        <ListaPosts type='POSTS' />
      );
  }
  
}

