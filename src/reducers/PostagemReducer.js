//Importações Personalizadas
import { POSTS_SEARCH, POSTAGEM_ATUAL, POSTAGENS, POSTS_TAG, TAGS } from '../actions/types';

const INITIAL_STATE = {
    postagemAtual: [],
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
        case TAGS: 
            return { tags: action.payload }
        default:
            return state;
    }
}