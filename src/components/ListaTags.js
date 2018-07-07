//Importações Globais
import React, { Component } from 'react';
import { ActivityIndicator, ListView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

//Importações Personalizadas
import { tagsCatch } from '../actions/PostagemActions';
import Tag from './Tag';


class ListaTags extends Component {
  
  constructor(props){
    super(props);
    this.state = { dataSource: null, refreshing: false };
  }

  componentWillMount(){
    this.props.tagsCatch();
  }

  componentWillReceiveProps(nextProps){
    //Só cria o DataSource se existir o conteúdo válido
    if (nextProps.tags !== undefined){
      if (this.props.tags !== nextProps.tags){
        this.criaFonteDeDados(nextProps.tags);
        this.setState({ refreshing: false });
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

  _onRefresh() {
    this.setState({ refreshing: true });
    this.props.tagsCatch();
  }

  //Renderização Principal
  render() {
    //Método utilizado para não ocorrer erros
    if ( this.state.dataSource !== null ){
      return (
        <ListView
            enableEmptySections
            dataSource={ this.state.dataSource }
            renderRow={ this.renderRow }
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
            style={{ backgroundColor: '#ffebe8' }}
        />
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
      tags: state.PostagemReducer.tags
    });
}

export default connect(mapStateToProps, { tagsCatch })(ListaTags);
