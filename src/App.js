import React, { Component } from 'react';
import Header from './Header/Header'
import './App.css';

// Import Route components here:
import {
  BrowserRouter as Router
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

        </div>
        
      </Router>
    );
  }
}

export default App;
