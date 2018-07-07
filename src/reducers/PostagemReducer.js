//Importações Personalizadas
import { CONTEUDO_COMPLETO, POSTS_SEARCH, POSTAGEM_ATUAL, POSTAGENS, TAGS_POSTAGENS, POSTS_TAG, TAGS, ERROR404 } from '../actions/types';

const INITIAL_STATE = {
    postagemAtual: [],
    tagPostagens: [],
    conteudo: [],
    postsTags: [],
    postsSearch: [],
    tags: [],
    error: false
};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
    	case POSTAGEM_ATUAL:
    		return { postagemAtual: action.payload }
        case POSTAGENS:
            return { conteudo: action.payload }
        case POSTS_TAG: 
            return { postsTag: action.payload }
        case POSTS_SEARCH: 
            return { postsSearch: action.payload }
        case TAGS_POSTAGENS: 
            return { tagPostagens: action.payload }
        case TAGS: 
            return { tags: action.payload }
        default:
            return state;
    }
}