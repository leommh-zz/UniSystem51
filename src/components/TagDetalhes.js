//Importações Globais
import React from 'react';

//Importações Personalizadas
import ListaPosts from './ListaPosts';

export default TagDetalhes = props =>{

	return (
		props.tag !== undefined ? <ListaPosts tag={ props.tag } type='POSTS_TAG'  /> : console.log('[TagDetalhes] -> Parâmetros Indefinidos = Erro!')
	);
		
}
	

