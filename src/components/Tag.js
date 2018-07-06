//Importações Globais
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class Tag extends Component {
  render() {
    return (
      <TouchableHighlight 
        onPress={ () => {
          //Recebe o JSON do blogger contendo o conteúdo personalizado de acordo com a tag selecionada
          axios.get(`http://unisystem51.blogspot.com/feeds/posts/default/-/${this.props.tag.term}?alt=json`)
            .then((response) => { 
              Actions.tagDetalhes({
                 title: this.props.tag.term, 'term': response.data.feed.entry 
              }) 
            })
            .catch(() => { 
              console.log('Erro ao Recuperar Dados!') 
            });
		      }
      	} underlayColor='rgba(190, 42, 68, 0.1)' style={{ margin: 4 }}>

	        <View style={ Styles.painelPrincipal }>
	            <Text style={ Styles.tituloTag }> { this.props.tag.term} </Text>
	        </View>

    	</TouchableHighlight>
    );
  }
}

const Styles = StyleSheet.create({
  painelPrincipal:{
    flex: 1, 
    backgroundColor: '#fff', 
    margin: 2, 
    flexDirection: 'row', 
    margin: 3,
    borderRadius: 7, 
    elevation: 1.5,
    padding: 4
  },
  tituloTag: {
    fontSize: 20, textAlign: 'center', fontFamily: 'Montserrat', color: '#ff6c6a',
    margin: 8
  }
});