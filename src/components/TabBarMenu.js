//Importações Globais
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

//Importações Personalizadas
import TabBarDetalhes from './TabBarDetalhes';
import ListaPostagens from './ListaPostagens';
import ListaTags from './ListaTags';
import LordBot from './LordBot';

export default class Principal extends Component {

  state = {
    index: 0,
    routes: [
      { key: 'Publicacoes', title: 'Publicações'},
      { key: 'Tags', title: 'Tags' },
      { key: 'Lord', title: 'Lørd' }
    ],
  };


  //Variável que possibilita a transição de telas do TabBar
  _handleIndexChange = index => this.setState({ index });

  //Variável que recebe parâmetros específicos para o cabeçalho da TabBar
  _renderHeader = props => <TabBarDetalhes {...props} />;

  //Variável que recebe as telas que serão utilizadas no TabBar
  _renderScene = SceneMap({
    'Publicacoes': ListaPostagens,
    'Lord': LordBot,
    'Tags': ListaTags
  });

  render() {
    return (
      //Cria a TabBar passando todos os parâmetros configurados anteriormente
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});