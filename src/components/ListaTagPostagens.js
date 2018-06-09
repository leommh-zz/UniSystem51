//Importações Globais
import React, { Component } from 'react';
import { ListView, ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';

//Importações Personalizadas
import Postagens from './Postagens';

class ListaTagsPostagens extends Component {

  constructor(props){
    super(props);
    this.state = { dataSource: null };
  }

  componentWillMount(){
    //Só cria o DataSource se existir o conteúdo
    if (this.props.tagPostagens){
      this.criaFonteDeDados(this.props.tagPostagens);
    }
  }

  criaFonteDeDados(postagens){
    //Cria o DataSource para o ListView
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.setState({dataSource: ds.cloneWithRows(postagens)});
  }

  renderRow(postagens){
    //Cria cada postagem individualmente
    return(
      <Postagens key={ postagens.id.$t } postagens={ postagens } />
    );
  }

//Renderização Principal
  render() {
    //Método utilizado para não ocorrer erros
    if ( this.state.dataSource !== null ){
      return (
        <ListView
            style={{ backgroundColor: '#ffd6bf' }}
            enableEmptySections
            dataSource={ this.state.dataSource }
            renderRow={ this.renderRow }
        />
      );
    }

    return(
      <ActivityIndicator size="large" color="#f04963"/>
    );
  }

}

mapStateToProps = state => { return({}) }

export default connect(mapStateToProps, {})(ListaTagsPostagens);
