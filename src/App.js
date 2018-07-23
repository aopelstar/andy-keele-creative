import React, { Component } from 'react';
import './App.css';
import Head from './components/Head/Head';
import Title from './components/Title/Title';
import Projects from './components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* < Head /> */}
      < Title />
      < Projects />
      
        
      </div>
    );
  }
}

export default App;
