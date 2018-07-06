//Importações Globais
import React, { Component } from 'react';
import { Text, ListView, ActivityIndicator, RefreshControl, View, StyleSheet} from 'react-native';

//Importações Personalizadas
import Postagens from './Postagens';

export default class ListaPosts extends Component {
  
  constructor(props){
    super(props);
    this.state = { dataSource: null, tamanhoDados: null, refreshing: false, isLoading: false };
  }

  componentWillMount(){
    //Só cria o DataSource se existir o conteúdo
    if (this.props.data){
      let posts = this.props.data;
      const postsPage = 12;      
      this.criaFonteDeDados(posts.slice(0, postsPage));
    }
  }

  criaFonteDeDados(posts){
    if (posts !== undefined){
      //Cria o DataSource para o ListView
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.setState({ dataSource: ds.cloneWithRows(posts) });
      this.setState({ tamanhoDados: posts.length, refreshing: false, isLoading: false });
    }
  }

  renderRow(posts){
    //Cria cada postagem individualmente
    return(
      <Postagens key={ posts.id.$t } postagens={ posts } />
    );
  }

  _onRefresh(){
    this.setState({ refreshing: true });
    let tamanhoDataTratada = this.state.tamanhoDados;
    let posts = this.props.data;
    this.criaFonteDeDados(posts.slice(0, 12));
  }

  loadMore(){
    this.setState({ isLoading: true });
    let tamanhoDataOriginal = this.props.data.length;
    let tamanhoDataTratada = this.state.tamanhoDados;

    if (tamanhoDataTratada < tamanhoDataOriginal){
      let posts = this.props.data;
      let postsPage = tamanhoDataTratada + 12;
      this.criaFonteDeDados(posts.slice(0, postsPage));
    }else{
      this.setState({ isLoading: false, fim: true });
    }
  }

//Renderização Principal
  render() {
    //Método utilizado para não ocorrer erros
    if ( this.state.dataSource !== null ){
      return (
        <ListView
            style={ styles.listView }
            enableEmptySections
            onEndReachedThreshold={1}
            pageSize={12}
            dataSource={ this.state.dataSource }
            renderRow={ this.renderRow }

            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }

            onEndReached={
              () => {
                  return(this.setState({ isLoading: true }, () => this.loadMore()) )
              }
            }

            renderFooter={() => {
              if (this.state.isLoading == true){
                return(
                  <View style={{ flex: 1 }}>
                    <ActivityIndicator size="small" hidesWhenStopped={true} color="#ff6c6a" />
                  </View>
                );
              }
              if(this.state.fim == true){
                return(
                  <View style={styles.fundoMensagem}>
                    <Text style={styles.textoMensagem}>Não existem mais postagens a serem carregadas!</Text>
                  </View>
                );
              }
              return false;
            }}
        />
      );
    }

    return(
      <ActivityIndicator size="large" color="#ff6c6a"/>
    );
  }

}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#ffebe8'
  },
  fundoMensagem: {
    backgroundColor: '#631a3b'
  },
  textoMensagem: {
    textAlign: 'center',
    color: '#ff836c'
  }
});


