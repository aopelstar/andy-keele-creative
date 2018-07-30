import React, { Component } from 'react';
import './App.css';
import './components/Head/head.css'
import Title from './components/Title/Title';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
import ScrollableAnchor, { goToTop, configureAnchors } from 'react-scrollable-anchor';
import icon from './images/hamburger.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
        menu: false
    }

    this.menuClick = this.menuClick.bind(this)
}

menuClick() {
    this.setState({
        menu: !this.state.menu
    })
}



  render() {
    return (
      <div className="App">
      <div className="head-main">
                <div className="head-container">
                    <div className='head-left'>
                        AndrewKeeleCreative.com
                </div>
                    <div className='head-right' onClick={() => this.menuClick()}>

                        <img src={icon} alt="hamburger" className="hamburger" />
                    </div>
                </div>

                <div className={this.state.menu?"head-menu": "head-menu head-menu-hidden"}>
                    <div className="head-menu-item"><a href='#section1'>Back To Top</a></div>
                    <div className="head-menu-item"><a href='#section2'>Projects</a></div>
                    <div className="head-menu-item"><a href='#section3'>Skills</a></div>
                    <div className="head-menu-item"><a href='#section4'>About</a></div>
                    <div className="head-menu-item"><a href='#section5'>Contact</a></div>

                </div>

            </div>
      <ScrollableAnchor id={'section1'}><div>< Title /></div></ScrollableAnchor>
       
      <ScrollableAnchor id={'section2'}><div>< Projects /></div></ScrollableAnchor>

      <ScrollableAnchor id={'section3'}><div>< Skills /></div></ScrollableAnchor>

      <ScrollableAnchor id={'section4'}><div>< About /></div></ScrollableAnchor>

      <ScrollableAnchor id={'section5'}>< Contact /></ScrollableAnchor>

      < Footer />
      
        
      </div>
    );
  }
}

export default App;
