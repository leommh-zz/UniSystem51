//Importações Globais
import React, { Component } from 'react';
import { ListView, ActivityIndicator, View, RefreshControl} from 'react-native';
import { connect } from 'react-redux';

//Importações Personalizadas
import ListaPosts from './ListaPosts';
import { postsCatch } from '../actions/PostagemActions';

class ListaPostagens extends Component {

  constructor(props){
    super(props);
    this.state = { conteudo: null };
  }

  componentWillMount(){
    this.props.postsCatch();
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.conteudo !== undefined){
      this.setState({ conteudo: nextProps.conteudo });
    }
  }

  render(){
    if(this.state.conteudo !== null){
      return(
        <ListaPosts data={this.state.conteudo} />
      );
    }else{
      return(
        <ActivityIndicator size="large" color="#f04963" />  
      );
    }
  }
  
}

mapStateToProps = state => {
    //Variável contendo os posts
    return({
      conteudo: state.PostagemReducer.conteudo
    });
}

export default connect(mapStateToProps, { postsCatch })(ListaPostagens);
