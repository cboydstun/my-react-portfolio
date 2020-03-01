import React from 'react';

import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import About from './components/About/About'

import './App.css';

import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
    </div>
  );
}

export default App;
