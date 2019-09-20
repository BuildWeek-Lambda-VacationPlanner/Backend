import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/register' component={ Register } />
      <Route exact path='/login' component={ Login } />
    </div>
  );
}

export default App;
