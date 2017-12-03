import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      used: false,
    }
    this.getClasses = this.getClasses.bind(this);
    this.useCard = this.useCard.bind(this);
  }

  useCard() {
    this.setState({
      used: true
    });
  }

  getClasses() {
    const classList = ['card'];
    if (['h', 'd'].includes(this.props.type[0])) classList.push('card_red');
    if (this.state.used === true) classList.push('card_used');
    return classList.join(' ');
  }

  render() {
    return (
      <div className={this.getClasses()} onClick={this.useCard}>
        <div className="card__card-id">
          {this.props.type}
        </div>
      </div>
    );
  }
}

export default Card;
