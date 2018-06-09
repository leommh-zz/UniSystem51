import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatBot from 'react-native-chatbot';

export default class lordBot extends Component {
  
render() {

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
            //{previousValue}
              id: 'pesquisar_módulo_1',
              component: (
                <Text> Teste </Text>
              ),
              end: true,
          },
        
          /*Parte de Conversa (Opicional)*/
          {
            id: 'conversar_1',
            message: 'Desde muito tempo atrás as pessoas vêem ao meu encontro em busca de conhecimento, mesmo eu dizendo não saber nada, enquanto ao mesmo tempo sei sobre tudo, estes mortais não param de me aborrecer...',
            end: true,
          },
      ];

    return (
      <View style={{padding: 5}}>
        <ChatBot steps={steps} />
      </View>
    );
  }
}
