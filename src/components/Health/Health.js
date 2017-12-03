import React from 'react';
import './Health.css';

class Health extends React.Component {
  constructor() {
    super();
    this.getClasses = this.getClasses.bind(this);
  }

  getClasses() {
    const classList = ['health'];
    if (this.props.hp) classList.push(`health_${this.props.hp}`);
    return classList.join(' ');
  }

  render() {
    return (
      <div className={this.getClasses()}>
        {this.props.hp} HP
      </div>
    );
  }
}

export default Health;
