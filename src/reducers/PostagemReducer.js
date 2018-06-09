//Importações Personalizadas
import { CONTEUDO_COMPLETO, POSTAGEM_ATUAL, POSTAGENS, TAGS_POSTAGENS, RELOAD_STOP } from '../actions/types';

const INITIAL_STATE = {
    postagemAtual: [],
    jsonData: [],
    conteudoCompleto: [],
    tagPostagens: [],
    reload: []
};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
    	case POSTAGEM_ATUAL:
    		return { postagemAtual: action.payload }
        case POSTAGENS:
            return { jsonData: action.payload }
        case CONTEUDO_COMPLETO:
            return { conteudoCompleto: action.payload }
        case TAGS_POSTAGENS: 
            return { tagPostagens: action.payload }
        case RELOAD_STOP: 
            return { reload: 'false' }
        default:
            return state;
    }
}