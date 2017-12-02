import React from 'react';
import './Card.css';

class Health extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card__card-id">
          {this.props.type}
        </div>
      </div>
    );
  }
}

export default Health;
