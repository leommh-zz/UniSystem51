//Importações Globais
import React from 'react';

//Importações Personalizadas
import ListaPosts from './ListaPosts';

export default Pesquisar = props => {
  this.text = props.previousStep.message;
  return(
    <ListaPosts type='SEARCH' search={this.text} />
  );
}

