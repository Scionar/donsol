import React from 'react';
import Card from '../../components/Card/Card';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.printCards = this.printCards.bind(this);
  }

  printCards() {
    const data = ['h1', 'd2', 's3', 'c4'];
    return data.map((current, index) => (<Card key={index} type={current} />));
  }

  render() {
    return this.printCards()
  }
}

export default CardContainer;
