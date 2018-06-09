//Importações Globais
import React from 'react';
import { StyleSheet} from 'react-native'
import { Router, Scene } from 'react-native-router-flux';

//Importações Personalizadas
import Inicio from './components/Inicio';
import PostagemDetalhes from './components/PostagemDetalhes';
import TagDetalhes from './components/TagDetalhes';

export default props => {

	return(
		<Router navigationBarStyle={ styles.navBar } titleStyle={ styles.navTitle } navBarButtonColor='#ff836c' sceneStyle={styles.routerScene} >
			<Scene key='root'>
		        <Scene key='inicio' component={ Inicio } hideNavBar={ true } initial />
		        <Scene key='postagemDetalhes' component={ PostagemDetalhes } title='Detalhes' hideNavBar={ false } />
		        <Scene key='tagDetalhes' component={ TagDetalhes } title='TagDetalhes' hideNavBar={ false } />
			</Scene>
		</Router>
	);
}

const styles = StyleSheet.create({
	navBar: {
    	backgroundColor: '#631a3b'//Alterar navbar color
  	},
	navTitle: {
    	color: '#ff836c', //Alterar navbar title color
  	},
	routerScene: {
		backgroundColor: '#ffffff'
	}
});
