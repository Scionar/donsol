import React, { Component } from 'react';
import './App.css';
import Message from './components/Message/Message';
import Health from './components/Health/Health';
import Experience from './components/Experience/Experience';
import Shield from './components/Shield/Shield';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <Message />
          <Health />
          <Shield />
          <Experience />
        </header>
        <main>
          // todo: Cards
        </main>
      </div>
    );
  }
}

export default App;
