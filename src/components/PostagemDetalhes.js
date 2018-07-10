//Importações Globais
import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Text, Dimensions,  PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import HTMLView from 'react-native-htmlview';

class PostagemDetalhes extends Component {
  
  render() {
      //Função que verifica e substituis certas características do HTML recebido
    renderNode = (node) => {

      if (node.name == 'img') {
          return( <Image key={ Math.random() } style={ styles.imagem } source={{ uri: node.attribs.src }} /> );
      }
    
    }

    if (this.props.postagemAtual !== undefined){
      
      this.conteudo = this.props.postagemAtual.content.$t;

      return(
        <ScrollView contentContainerStyle={ styles.scrollView }>
    
          <HTMLView
              value={this.conteudo}
              renderNode={renderNode}
              addLineBreaks={false}
              stylesheet={styles}
            />
    
          </ScrollView>
        );
    
      }else{
        return(
          <ScrollView style={styles.scrollView}>
            <Text>Carregando...</Text>
          </ScrollView>
        );
      }

    }
}

//Parâmetros de largura e altura
const width = Dimensions.get('screen').width * PixelRatio.get();

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff', 
    padding: 8
  },
  data:{
    color: 'white'
  },
  text: {
    fontWeight: '300',
    color: '#ff6c6a',
  },
  imagem: {
    margin: 2, 
    width: width, 
    height:500
  }
});

mapStateToProps = state => {
    return({
      postagemAtual: state.PostagemReducer.postagemAtual
    });
}

mapDispatch = {}

export default connect(mapStateToProps, mapDispatch)(PostagemDetalhes);
