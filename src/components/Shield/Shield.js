import React from 'react';
import './Shield.css';

class Shield extends React.Component {
  constructor() {
    super();
    this.getClasses = this.getClasses.bind(this);
  }

  getClasses() {
    const classList = ['shield'];
    if (this.props.dp) classList.push(`shield_${this.props.dp}`);
    return classList.join(' ');
  }

  render() {
    return (
      <div className={this.getClasses()}>
        {this.props.dp} DP
      </div>
    );
  }
}

export default Shield;
