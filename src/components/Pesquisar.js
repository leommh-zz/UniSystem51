//Importações Globais
import React, { Component } from 'react';

//Importações Personalizadas
import ListaPosts from './ListaPosts';

export default class Pesquisar extends Component {

  componentWillMount(){
    this.text = this.props.previousStep.message;
  }

  render(){
      return(
          <ListaPosts type='SEARCH' search={this.text} />
      );
  }
  
}

