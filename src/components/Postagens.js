//Importações Globais
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, Dimensions, PixelRatio } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Avatar, Divider } from 'react-native-material-design';

//Importações Personalizadas
import { postagemSelecionada } from '../actions/PostagemActions';

class Postagens extends Component {
  
  render() {
    let imagem = this.props.postagens.media$thumbnail.url.replace("s72", "s400");
    //Cria o design de cada postagem do ListView individualmente
    return (
      <TouchableHighlight onPress={
        () => {  this.props.postagemSelecionada(this.props.postagens), Actions.postagemDetalhes({ title: this.props.postagens.title.$t }) }
      } underlayColor='rgba(190, 42, 68, 0.1)' style={{margin: 4, flex: 1}}>

        <View style={ styles.painelPrincipal }>
          <View style={ styles.imagemViewPost }>
            <Image style={ styles.imagemPostagem } source={{ uri: imagem }} />
          </View>
     
          <View style={ styles.viewConteudo }>
            <View style={ styles.viewTituloPostagem }>
              <Text style={ styles.tituloPostagem }> { this.props.postagens.title.$t} </Text>
            </View>
            <Divider/>
            <View style={ styles.viewTxtPostagem }>
              <Text style={ styles.txtPostagem }> Autor: { this.props.postagens.author[0].name.$t } </Text>
            </View>
          </View>
        </View> 
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  
  painelPrincipal:{
    flex: 1, 
    backgroundColor: '#fff', 
    margin: 5, 
    flexDirection: 'row',
    borderRadius: 7,
    elevation: 2,
    padding: 0
  },
  imagemPostagem:{
    width: 120, 
    height: 120,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 0,  
       
  },
  viewConteudo:{
    flex: 1,
    padding: 2,
    justifyContent: 'center'
  },
  tituloPostagem:{
    fontSize: 19, 
    textAlign: 'center', 
    fontFamily: 'Montserrat', 
    color: '#ff856c'
  },
  txtPostagem:{
    fontSize: 12, 
    textAlign: 'center', 
    fontFamily: 'Montserrat', 
    color: '#ff6c6a'
  },
  viewTxtPostagem: {
    marginTop: 6 
  },
  viewTituloPostagem: {
    marginBottom: 6
  }

});

mapStateToProps = state => { return({}) }

export default connect(mapStateToProps, { postagemSelecionada })(Postagens);
