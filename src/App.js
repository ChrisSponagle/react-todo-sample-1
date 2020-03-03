import React, { Component } from 'react';
import './css/App.css';
import { store } from './store.js';
import Todos from './components/Todos';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>ToDo List</h2>
        </div>
        <Provider store={store}>
          <Todos />
        </Provider>
      </div>
    );
  }
}

export default App;
