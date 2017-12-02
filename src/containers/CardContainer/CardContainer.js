import React from 'react';
import Card from '../../components/Card/Card';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.printCards = this.printCards.bind(this);
  }

  printCards() {
    const data = ['h1', 'h2', 'h3', 'h4'];
    return data.map(current => (<Card type={current} />));
  }

  render() {
    return this.printCards()
  }
}

export default CardContainer;
