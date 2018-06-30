//Importações Globais
import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Dimensions,  PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import HTMLView from 'react-native-htmlview';

class PostagemDetalhes extends Component {
  render() {
    //Recebe o conteudo do Post via props
  	const conteudo = this.props.postagemAtual.content.$t;

    //Função que verifica e substituis certas características do HTML recebido
  	renderNode = (node, index, siblings, parent, defaultRenderer) => {
        let RandomNumber = Math.floor(Math.random() * 100) + 1 ;
      console.log(node);
        if (node.name == 'img') {
            const img = node.attribs;
            return( <Image key={ img.src + RandomNumber } style={ styles.imagem } source={{ uri: img.src }} /> );
        }
    }

	return(
    <ScrollView contentContainerStyle={ styles.scrollView }>

      <HTMLView
  	      value={conteudo}
  	      renderNode={renderNode}
  	      addLineBreaks={false}
          stylesheet={styles}
  	    />

      </ScrollView>
    );

  }
}

//Parâmetros de largura e altura
const width = Dimensions.get('screen').width * PixelRatio.get();
const height = Dimensions.get('screen').height * PixelRatio.get();

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff', 
    padding: 8,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,  
  },
  data:{
    color: 'white'
  },
  text: {
    fontWeight: '300',
    color: '#631a3b', // make links coloured pink
  },
  imagem: {
    margin: 2, 
    width: width, 
    height:400,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,  
  }
});

mapStateToProps = state => {
    return({
      postagemAtual: state.PostagemReducer.postagemAtual
    });
}

export default connect(mapStateToProps, { })(PostagemDetalhes);
