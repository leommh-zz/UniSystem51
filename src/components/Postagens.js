//Importações Globais
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

//Importações Personalizadas
import { postagemSelecionada } from '../actions/PostagemActions';

class Postagens extends Component {
  render() {
    //Cria o design de cada postagem do ListView individualmente
    return (
      <TouchableHighlight onPress={ () => {
        this.props.postagemSelecionada(this.props.postagens);
        Actions.postagemDetalhes({ title: this.props.postagens.title.$t }); }
      } underlayColor='rgba(190, 42, 68, 0.1)' style={{margin: 4}}>

        <View style={ Styles.painelPrincipal }>
          <View style={{ padding: 0.8 }}>
            <Image style={ Styles.imagemPostagem } source={{ uri: this.props.postagens.media$thumbnail.url }} />
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={ Styles.tituloPostagem }> { this.props.postagens.title.$t} </Text>
            <Text style={ Styles.txtPostagem }> Autor: { this.props.postagens.author[0].name.$t } </Text>
          </View>
        </View>

      </TouchableHighlight>
    );
  }
}

const Styles = StyleSheet.create({
  painelPrincipal:{
    flex: 1, backgroundColor: '#fff', margin: 3, flexDirection: 'row',
    borderRadius: 1, borderColor: '#fbcaaf', borderWidth: 0.5, elevation: 0.9,
    padding: 4
  },
  imagemPostagem:{
    width: 90, height: 90
  },
  tituloPostagem: {
    fontSize: 20, textAlign: 'center', fontFamily: 'Montserrat', color: '#631a3b'
  },
  txtPostagem: {
    fontSize: 16, textAlign: 'center', fontFamily: 'Montserrat', color: '#631a3b'
  }
});

mapStateToProps = state => { return({}) }

export default connect(mapStateToProps, { postagemSelecionada })(Postagens);
