//Importações Globais
import React, { Component } from 'react';
import { View, StatusBar, Animated, StyleSheet } from 'react-native';

//Importações Personalizadas...
import TabBarMenu from './TabBarMenu';

export default class Inicio extends Component {
  
  componentWillMount(){
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount(){

    Animated.loop(
      Animated.sequence([
        Animated.timing(this.animatedValue, {
          toValue: 600,
          duration: 5000
        }),
        Animated.timing(this.animatedValue, {
          toValue: 0,
          duration: 5000
        }),
      ])
    ).start()

  }

  render() {

    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 100, 200, 300, 400, 500, 600],
      outputRange: [ '#ea4761', '#ff6c6a', '#ff6e6a', '#ff856c', '#ff966d', '#ff9e6e', '#ffa76f']
    });
    
    const animatedStyle = {
      color: interpolateColor,
      padding: 8, fontSize: 25, textAlign: 'center', fontFamily: 'Montserrat'
    }

    return (
      <View style={ styles.fundo }>
        <StatusBar backgroundColor="#7c0037" />
        <View style={ styles.fundoLogo }>
          <Animated.Text style={ animatedStyle }> Uni System 51 </Animated.Text>
        </View>
        <TabBarMenu />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  fundoLogo: {
    backgroundColor: '#8c003f'
  }
});