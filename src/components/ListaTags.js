//Importações Globais
import React, { Component } from 'react';
import { View, Image, ActivityIndicator, ListView, ScrollView } from 'react-native';
import { connect } from 'react-redux';

//Importações Personalizadas
import Tag from './Tag';

class ListaTags extends Component {
  constructor(props){
    super(props);
    this.state = { dataSource: null };
  }

  componentWillReceiveProps(nextProps){
    //Só cria o DataSource se existir o conteúdo válido
    if (nextProps.conteudoCompleto !== undefined){
      if (this.props.conteudoCompleto !== nextProps.conteudoCompleto){
        this.criaFonteDeDados(nextProps.conteudoCompleto.feed.category);
      }
    }
  }

  criaFonteDeDados(tags){
    //Cria o DataSource para o ListView
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.setState({ dataSource: ds.cloneWithRows(tags) });
  }

  renderRow(tags){
    //Cria cada tag individualmente
    return(
      <Tag key={ tags.term } tag={ tags } />
    );
  }

  //Renderização Principal
  render() {
    //Método utilizado para não ocorrer erros
    if ( this.state.dataSource !== null ){
      return (
      <ScrollView style={{ backgroundColor: '#ffd6bf' }}>
        <ListView
            enableEmptySections
            dataSource={ this.state.dataSource }
            renderRow={ this.renderRow }
        />
      </ScrollView>
      );
    }

    return(
      <ActivityIndicator size="large" color="#f04963" />
    );

  }
}

mapStateToProps = state => {
    return({
      //Variável que recebe todo o conteudo do blog, inclusive as categorias
      conteudoCompleto: state.PostagemReducer.conteudoCompleto
    });
}

export default connect(mapStateToProps, {})(ListaTags);
