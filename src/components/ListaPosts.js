//Importações Globais
import React, { Component } from 'react';
import { Text, ListView, ActivityIndicator, RefreshControl, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

//Importações Personalizadas
import Postagens from './Postagens';
import { postsTagCatch, postsCatch, postsSearchCatch } from '../actions/PostagemActions';

class ListaPosts extends Component {
  
  constructor(props){
    super(props);
    this.state = { dataSource: null, tamanhoDados: null, refreshing: false, isLoading: false, data: null, emptyData: false };
  }

  componentWillMount(){
    
    if (this.props.type == 'POSTS_TAG'){
      this.props.postsTagCatch(this.props.tag);
    }else if (this.props.type == 'POSTS'){
      this.props.postsCatch();
    }else if (this.props.type == 'SEARCH'){
      console.log(this.props.search);
      if (this.props.search !== undefined){
        this.props.postsSearchCatch(this.props.search);
      }else{
        console.log('Texto de Pesquisa é Indefinido!');
      }
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props.type == 'POSTS_TAG'){
      if (nextProps.postsTag !== undefined){
        this.criaFonteDeDados(nextProps.postsTag);
      }
    }else if (this.props.type == 'POSTS'){
      if (nextProps.posts !== undefined){
        this.criaFonteDeDados(nextProps.posts);
      }
    }else if (this.props.type == 'SEARCH'){
      if (nextProps.postsSearch !== undefined){
        this.criaFonteDeDados(nextProps.postsSearch);
      }else{
        this.state.emptyData = true;
      }
    }
  }

  criaFonteDeDados(posts){
    if (posts !== undefined){
      
      posts.slice(0, 12);
      
      
      //Cria o DataSource para o ListView
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.setState({ dataSource: ds.cloneWithRows(posts) });
      this.setState({ tamanhoDados: posts.length, refreshing: false, isLoading: false, data: posts });
    }
  }

  renderRow(posts){
    //Cria cada postagem individualmente
      return(
        <Postagens key={ posts.id.$t } postagens={ posts } />
      );

  }

  _onRefresh(){
    this.setState({ refreshing: true, fim: false });
    if (this.props.type == 'POSTS_TAG'){
      this.props.postsTagCatch(this.props.tag);
    }else if (this.props.type == 'POSTS'){
      this.props.postsCatch();
    }else if (this.props.type == 'SEARCH'){
      this.props.postsSearchCatch(this.props.search);
    }
  }

  loadMore(){
    this.setState({ isLoading: true });
    let tamanhoDataOriginal = this.state.data.length;
    let tamanhoDataTratada = this.state.tamanhoDados;

    if (tamanhoDataTratada < tamanhoDataOriginal){
      let posts = this.state.data;
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
                    <Text style={styles.textoMensagem}>
                      Não existem mais postagens a serem carregadas!
                    </Text>
                  </View>
                );
              }
              return false;
            }}
        />
      );
    }

    if (this.state.emptyData == false){
      return(
        <ActivityIndicator size="large" color="#ff6c6a"/>
      );
    }else{
      return(
        <Text>Nenhum Post Encontrado!</Text>
      );
    }
  }

}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#ffebe8'
  },
  fundoMensagem: {
    backgroundColor: '#fff',
    margin: 8, 
    borderRadius: 7,
    elevation: 2
  },
  textoMensagem: {
    textAlign: 'center',
    padding: 7,
    color: '#ff6c6a'
  }
});


mapStateToProps = state => {

    return({
      posts: state.PostagemReducer.conteudo,
      postsTag: state.PostagemReducer.postsTag,
      postsSearch: state.PostagemReducer.postsSearch
    });


}

export default connect(mapStateToProps, { postsTagCatch, postsCatch, postsSearchCatch })(ListaPosts);