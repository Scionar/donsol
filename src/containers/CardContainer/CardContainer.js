import React from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import renewTable from '../../helpers/renew-table';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.printCards = this.printCards.bind(this);
    renewTable();
  }

  printCards() {
    const data = this.props.table;
    return data.map((current, index) => (<Card key={index} name={current.name} used={current.used} />));
  }

  render() {
    return this.printCards()
  }
}

const mapStateToProps = state => ({
  table: state.table
});

export default connect(mapStateToProps)(CardContainer);
