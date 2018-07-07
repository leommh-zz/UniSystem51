//Importações Globais
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

//Importações Personalizadas
import { postsTagCatch } from '../actions/PostagemActions';

export default class Tag extends Component {

  componentWillMount(){
    this.tag = this.props.tag.term; 
  }


  render() {
    return (
      <TouchableHighlight 
        onPress={ () => {
            //Recebe o JSON do blogger contendo o conteúdo personalizado de acordo com a tag selecionada
    
            Actions.tagDetalhes({
              title: this.tag, 'tag': this.tag
            }) 
                
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

