import React from 'react';
import startNewGame from '../../helpers/start-new-game';
import './Message.css';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.renderStartButton = this.renderStartButton.bind(this);
  }

  renderStartButton() {
    if (this.props.gameStatus !== 'on') return (<div onClick={startNewGame} className="message__button">Start</div>);
  }

  render() {
    return (
      <div className="message">
        {this.renderStartButton()}
        {this.props.message}
      </div>
    );
  }
}

export default Message;
