//Importações Globais
import axios from 'axios';

//Importações Personalizadas
import { POSTAGEM_ATUAL, POSTAGENS, POSTS_SEARCH, POSTS_TAG, TAGS, ERROR404 } from './types';

export const postagemSelecionada = (data) => {
	return ({
		type: POSTAGEM_ATUAL,
		payload: data
	})
}

export const postsSearchCatch = (text) => {

		return dispatch => {
		//Recebe a Pesquisa do Blog
			axios.get(`http://unisystem51.blogspot.com/feeds/posts/default/?alt=json&q=${text}`)
	      	.then((response) => {
				  console.log(response.data.feed.entry);
				dispatch({
					type: POSTS_SEARCH,
					payload: response.data.feed.entry
				})
	      	})
	      	.catch((erro) => {
				console.log(erro);
	      	});
		}

}

export const postsTagCatch = (tag) => {
	return dispatch => {
		//Recebe as Tags do Blog
		axios.get(`http://unisystem51.blogspot.com/feeds/posts/default/-/${tag}?alt=json`)
	      .then((response) => {
			  console.log(response);
			dispatch({
				type: POSTS_TAG,
				payload: response.data.feed.entry
			})
	      })
	      .catch((erro) => {
			console.log(erro);
	      });
	}
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
	      .catch((erro) => {
			console.log(erro);
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
	      .catch((erro) => {
			console.log(erro);
	      });
	}
}


