import React from 'react';
import startNewGame from '../../helpers/start-new-game';
import run from '../../helpers/run';
import './Message.css';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.renderStartButton = this.renderStartButton.bind(this);
    this.renderRunButton = this.renderRunButton.bind(this);
  }

  renderStartButton() {
    if (this.props.gameStatus !== 'on') return (<div onClick={startNewGame} className="message__button">Start</div>);
  }

  renderRunButton() {
    if (this.props.gameStatus === 'on' && this.props.canRun === true) {
      return (<div onClick={run} className="message__button">Run</div>);
    }
  }

  render() {
    return (
      <div className="message">
        {this.renderStartButton()}
        {this.renderRunButton()}
        {this.props.message}
      </div>
    );
  }
}

export default Message;
