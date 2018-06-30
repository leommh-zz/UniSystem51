//Importações Globais
import React, {Component} from 'react';

//Importações Personalizadas
import ListaPosts from './ListaPosts';

export default class TagDetalhes extends Component{
	render(){
		if(this.props.term){
			if (this.props.term !== undefined){
				//Cria a Lista de Postagens passando os posts personalizados de acordo com a Tag escolhida anteriormente
				return(
					<ListaPosts data={ this.props.term }  />
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
	

