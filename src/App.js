//Importações Globais
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

//Importações Personalizadas
import Routes from './Routes';
import reducers from './reducers';

export default class App extends Component {
  render() {
    return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <Routes />
        </Provider>
    );
  }
}
