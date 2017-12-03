import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Message from './components/Message/Message';
import Health from './components/Health/Health';
import Experience from './components/Experience/Experience';
import Shield from './components/Shield/Shield';
import CardContainer from './containers/CardContainer/CardContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <Message gameStatus={this.props.gameStatus} message={this.props.message} />
          <Health hp={this.props.hp} />
          <Shield dp={this.props.dp} />
          <Experience xp={this.props.xp} />
        </header>
        <main className="main">
          <CardContainer />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hp: state.hp,
  xp: state.xp,
  dp: state.dp,
  message: state.message,
  gameStatus: state.status
});

export default connect(mapStateToProps)(App);
