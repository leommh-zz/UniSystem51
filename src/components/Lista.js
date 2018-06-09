//Importações Globais
import React, { Component } from 'react';
import { Text, ListView, ActivityIndicator, View, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

//Importações Personalizadas
import Postagens from './Postagens';
import { todasAsPostagens } from '../actions/PostagemActions';


class ListaPostagens extends Component {

  constructor(props){
    super(props);
    this.state = { dataSource: null, dataPura: 0, final: false, isLoading: false };
  }

  componentWillReceiveProps(nextProps){
    //Só repassa os posts e cria a DataSource se o conteúdo for válido
    if (nextProps.jsonData !== undefined){
      if (this.props.JsonData !== nextProps.jsonData){

        this.criaFonteDeDados(nextProps.jsonData);
        //console.log(nextProps.jsonData.length);
      }
    }
  }

  componentDidMount() {
     this.setState({ isLoading: false })
  }

  criaFonteDeDados(postagens){
    //Cria o DataSource para o ListView
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.setState({ dataSource: ds.cloneWithRows(postagens) });
    this.state.dataPura = postagens;
    //console.log(this.state.dataPura);
  }

  renderRow(postagens){
    //Cria cada postagem individualmente
    return(
      <Postagens key={ postagens.id.$t } postagens={ postagens } />
    );
  }

  renderNewRow(tamanho){

    this.props.todasAsPostagens(1, tamanho+5);
  }

//Renderização Principal
  render() {


    //Método utilizado para não ocorrer erros
    if ( this.state.dataSource !== null ){
      let RandomNumber = Math.floor(Math.random() * 100) + 1 ;
      return (

       <ListView
            style={{ backgroundColor: '#ffd6bf' }}
            enableEmptySections
            dataSource={ this.state.dataSource }
            renderRow={ this.renderRow }

            onEndReached={
              () => {
                  return(this.setState({ isLoading: true }, () => this.renderNewRow(this.state.dataPura.length)) )
              }
            }
            renderFooter={() => {
              if (this.state.isLoading == true){
                return(
                  <View style={{ flex: 1 }}>
                    <ActivityIndicator size="small" hidesWhenStopped={true} />
                  </View>
                );
              }
              return false;
            }}


           /* renderFooter = { () => {
                return(
                  <TouchableHighlight onPress={() => this.renderNewRow(this.state.dataPura.length) }
                    underlayColor='#631a3b' style={{ backgroundColor: '#401026', padding: 30, marginTop: 5 }}>
                    <Text style={{ fontSize: 25, textAlign: 'center', color: '#fff' }}>Carregar Mais Publicações</Text>
                  </TouchableHighlight>
                );
              }
            }     */
        />

      );
    }

    return(
      <ActivityIndicator size="large" color="#f04963" />
    );
  }

}

mapStateToProps = state => {
    //Variável contendo os posts
    return({
      jsonData: state.PostagemReducer.jsonData
    });
}

export default connect(mapStateToProps, { todasAsPostagens })(ListaPostagens);
