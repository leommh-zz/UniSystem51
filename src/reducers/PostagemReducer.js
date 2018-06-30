//Importações Personalizadas
import { CONTEUDO_COMPLETO, POSTAGEM_ATUAL, POSTAGENS, TAGS_POSTAGENS, RELOAD_STOP, TAGS, ERROR404 } from '../actions/types';

const INITIAL_STATE = {
    postagemAtual: [],
    tagPostagens: [],
    conteudo: [],
    tags: [],
    error: false
};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case ERROR404: 
            return { error: action.payload }
    	case POSTAGEM_ATUAL:
    		return { postagemAtual: action.payload }
        case POSTAGENS:
            return { conteudo: action.payload }
        case TAGS_POSTAGENS: 
            return { tagPostagens: action.payload }
        case TAGS: 
            return { tags: action.payload }
        default:
            return state;
    }
}