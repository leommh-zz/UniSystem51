import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-native-chatbot';

//Importações Personalizadas
import Pesquisar from './Pesquisar';

export default class lordBot extends Component {
  constructor(props){
    super(props);
    this.state = { key: 1 };
  }


  render() {

    let res = () => {
      this.setState({ key: Math.random() });
    }

    const steps = [
        {
            id: 'mensagem_1',
            message: 'O que deseja aqui? mero mortal!',
            trigger: 'pergunta_1',
          },
          {
            id: 'pergunta_1',
            options: [
              { value: 1, label: 'Pesquisar', trigger: 'pesquisar_1' },
              { value: 2, label: 'Conversar', trigger: 'conversar_1' },
            ],
          },
    
          /*Parte de Pesquisa*/
          {
            id: 'pesquisar_1',
            message: 'O que deseja encontrar?',
            trigger: 'pesquisar_dados_1',
          },
          {
              id: 'pesquisar_dados_1',
              user: true,
              trigger: 'pesquisar_módulo_1',
          },
          {
              id: 'pesquisar_módulo_1',
              component: <Pesquisar descobrir={this.props} />,
              trigger: 'mensagem_pospesquisar'
          },
          {
            id: 'mensagem_pospesquisar',
            options: [
              { value: 1, label: 'Quero mais ajuda!', trigger: 'help' },
            ],
          },
          {
            id: 'help',
            message: 'OK!',
            end: true
          },
        
          /*Parte de Conversa (Opicional)*/
          {
            id: 'conversar_1',
            message: 'Desde muito tempo atrás as pessoas vêem ao meu encontro em busca de conhecimento, mesmo eu dizendo não saber nada, enquanto ao mesmo tempo sei sobre tudo, estes mortais não param de me aborrecer...',
            trigger: 'mensagem_inicio_2'
          },
          {            
            id: 'mensagem_inicio_2',
            message: 'O que mais você quer?',
            trigger: 'pergunta_1',
          },
          
      ];

    return (
      
      <View key={this.state.key} style={{ backgroundColor: '#1d000e' }}>
          <ChatBot 
            steps={steps} 
            botAvatar='https://i.imgur.com/j9bdSdt.png'
            userAvatar='https://i.imgur.com/D6AOXkF.png'
            botFontColor={ '#fff' } 
            userFontColor={ '#ea4761' }
            botBubbleColor={ '#ea4761' } 
            style={{ backgroundColor: '#1d000e', marginTop: 2 }}
            contentStyle={{ backgroundColor: '#1d000e' }}
            footerStyle={{ backgroundColor: '#fff', margin: 5, padding: 1, borderRadius: 7, elevation: 2, }}
            submitButtonStyle={{ backgroundColor: '#1d000e', borderRadius: 4, width: 63, margin: 2 }}
            handleEnd={res}
          />
 
      </View>
    );
  }
}


