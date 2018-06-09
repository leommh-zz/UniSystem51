//Importações Globais
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

//Importações Personalizadas...
import ListaPostagens from './ListaPostagens';
import TabBarMenu from './TabBarMenu';
import { todasAsPostagens } from '../actions/PostagemActions';

class Inicio extends Component {

  componentWillMount() {
    //Recupera as postagens no blog
    this.props.todasAsPostagens(1, 10);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar backgroundColor="#401026" />
        <TabBarMenu />
      </View>
    );
  }
}

mapStateToProps = state => { return({}) }

export default connect(mapStateToProps, { todasAsPostagens })(Inicio);
