//Importações Globais
import React, {Component} from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

//Importações Personalizadas
import ListaTagPostagens from './ListaTagPostagens';

class TagDetalhes extends Component{

	constructor(props){
		super(props);
		
		//Estado criado para facilitar
		this.state = { posts: this.props.term };
	}

	render(){
		//Cria a Lista de Postagens passando os posts personalizados de acordo com a Tag escolhida anteriormente
		return(
			<ListaTagPostagens tagPostagens={ this.state.posts }  />
		);
	}
}
	
mapStateToProps = state => { return({}) }

export default connect(mapStateToProps, { })(TagDetalhes);

