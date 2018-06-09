//Importações Globais
import React, { Component } from 'react';
import { Text, ListView, ActivityIndicator, View, Image, TouchableHighlight, RefreshControl, ScrollView } from 'react-native';
import { connect } from 'react-redux';

//Importações Personalizadas
import Postagens from './Postagens';
import { todasAsPostagens, recarregarPostagens } from '../actions/PostagemActions';

class ListaPostagens extends Component {

  constructor(props){
    super(props);
    this.state = { dataSource: null, dataPura: 0, final: false, isLoading: false, refreshing: false };
  }

  componentWillReceiveProps(nextProps){
    //Só repassa os posts e cria a DataSource se o conteúdo for válido
    if (nextProps.jsonData !== undefined){
      if (this.props.JsonData !== nextProps.jsonData){

        this.criaFonteDeDados(nextProps.jsonData);
        //console.log(nextProps.jsonData.length);
      }
    }

    if (this.props.reload == false){
      this.setState({ refreshing: false });
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

  _onRefresh() {
    this.setState({refreshing: true});
    this.props.recarregarPostagens();

    let stop = new Promise(
      function (resolve) {
          if (this.state.reload == false) {
            this.setState({refeshing: false});
            console.log('teste')
            resolve(); // fulfilled
          } 
      });
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

            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
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
      jsonData: state.PostagemReducer.jsonData,
      reload: state.PostagemReducer.reload
    });
}

export default connect(mapStateToProps, { todasAsPostagens, recarregarPostagens })(ListaPostagens);
