import React, { Component } from 'react';
import './App.css';
import Head from './components/Head/Head';
import Title from './components/Title/Title';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* < Head /> */}
      < Title />
      < Projects />
      < Skills />
      < Contact />
      < Footer />
      
        
      </div>
    );
  }
}

export default App;
