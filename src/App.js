import React, { Component } from 'react';
import './css/App.css';
import { store } from './store.js';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import './fonts/Roboto/Roboto-Regular.ttf';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div>
          <img className='appLogo' src={require('./images/tranquilityLogo.png')} />
          <h2 className='headerFont'>Tranquility<br/>ToDo App</h2>
        </div>
        <Provider store={store}>
          <Todos />
        </Provider>
      </div>
    );
  }
}

export default App;
