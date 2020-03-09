import React from 'react';

import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'

import './App.css';

import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
