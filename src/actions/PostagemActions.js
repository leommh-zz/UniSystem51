//Importações Globais
import React, { Component } from 'react';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

//Importações Personalizadas
import { CONTEUDO_COMPLETO, POSTAGEM_ATUAL, POSTAGENS, TAGS_POSTAGENS, RELOAD_STOP } from './types';

export const postagemSelecionada = (data) => {
	return ({
		type: POSTAGEM_ATUAL,
		payload: data
	})
}

export const todasAsPostagens = (postInicial, postFinal) => {
	return dispatch => {
		//Recupera as postagens do blog via GET em modo JSON
	    axios.get(`http://unisystem51.blogspot.com/feeds/posts/default?alt=json&max-results=${ postFinal }&start-index=${ postInicial }`)
	      .then((response) => {
	      	this.postagens = response.data.feed.entry;
	      	this.conteudoCompleto = response.data;

	      	dispatch({
				type: POSTAGENS,
				payload: postagens
			});

	      	dispatch({
	      		type: CONTEUDO_COMPLETO,
	      		payload: conteudoCompleto
	      	});

	      })
	      .catch(() => {
	      	console.log('Erro ao Recuperar Dados!'); 
	      });

	}
}

export const recarregarPostagens = () => {

	return dispatch => {
		//Recupera as postagens do blog via GET em modo JSON
	    axios.get(`http://unisystem51.blogspot.com/feeds/posts/default?alt=json&max-results=10&start-index=1`)
	      .then((response) => {
	      	this.postagens = response.data.feed.entry;
			this.conteudoCompleto = response.data;
			this.reload = false;

	      	dispatch({
				type: POSTAGENS,
				payload: postagens
			});

	      	dispatch({
	      		type: CONTEUDO_COMPLETO,
	      		payload: conteudoCompleto
			});
			
			dispatch({
				type: RELOAD_STOP,
				payload: reload
			});

	      })
	      .catch(() => {
	      	console.log('Erro ao Recuperar Dados!'); 
	      });

	}
}
