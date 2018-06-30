//Importações Globais
import axios from 'axios';

//Importações Personalizadas
import { POSTAGEM_ATUAL, POSTAGENS, TAGS, ERROR404 } from './types';

export const postagemSelecionada = (data) => {
	return ({
		type: POSTAGEM_ATUAL,
		payload: data
	})
}

export const tagsCatch = () => {
	return dispatch => {
		//Recebe as Tags do Blog
	    axios.get(`http://unisystem51.blogspot.com/feeds/posts/default?alt=json&max-results=1&start-index=1`)
	      .then((response) => {
			dispatch({
				type: TAGS,
				payload: response.data.feed.category
			})
	      })
	      .catch(() => {
			dispatch({
				type: ERROR404,
				payload: true
			}); 
	      });
	}
}

export const postsCatch = () => {
	return dispatch => {
		//Recupera as postagens do blog via GET em modo JSON
	    axios.get(`http://unisystem51.blogspot.com/feeds/posts/default?alt=json&start-index=1&max-results=99999`)
	      .then((response) => {
	      	dispatch({
				type: POSTAGENS,
				payload: response.data.feed.entry
			});
	      })
	      .catch(() => {
	      	dispatch({
				type: ERROR404,
				payload: true
			}); 
	      });
	}
}


