//Importações Globais
import React, {Component} from 'react';

//Importações Personalizadas
import ListaPosts from './ListaPosts';

export default class TagDetalhes extends Component{

	render(){
		if(this.props.tag){
			if (this.props.tag !== undefined){
				//Cria a Lista de Postagens passando os posts personalizados de acordo com a Tag escolhida anteriormente
				return(
					<ListaPosts tag={ this.props.tag } type='POSTS_TAG'  />
				);
			}else{
				return(
					console.log('[TagDetalhes] -> Parâmetros Indefinidos = Erro!')
				);	
			}
		}else{
			console.log('[TagDetalhes] -> Parâmetros não Existem');
		}
	}
}
	

