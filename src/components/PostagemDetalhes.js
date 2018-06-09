//Importações Globais
import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Dimensions,  PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import HTMLView from 'react-native-htmlview';

class PostagemDetalhes extends Component {
  render() {
    //Recebe o conteudo do Post via props
  	const conteudo = this.props.postagemAtual.content.$t;

    //Parâmetros de largura e altura
    const width = Dimensions.get('screen').width * PixelRatio.get();
    const height = Dimensions.get('screen').height * PixelRatio.get();

    //Função que verifica e substituis certas características do HTML recebido
  	renderNode = (node, index, siblings, parent, defaultRenderer) => {
        let RandomNumber = Math.floor(Math.random() * 100) + 1 ;

        if (node.name == 'img') {
            const img = node.attribs;
            return( <Image key={ img.src + RandomNumber } style={{ margin: 2, width: width, height:400}} source={{ uri: img.src }} /> );
        }
    }

	return(
    <ScrollView contentContainerStyle={{ backgroundColor: '#ffffff', margin: 2 }}>

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

const styles = StyleSheet.create({
  text: {
    fontWeight: '300',
    color: 'blue', // make links coloured pink
  },
});

mapStateToProps = state => {
    return({
      postagemAtual: state.PostagemReducer.postagemAtual
    });
}

export default connect(mapStateToProps, { })(PostagemDetalhes);
