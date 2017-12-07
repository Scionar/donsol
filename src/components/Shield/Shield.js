import React from 'react';
import './Shield.css';

class Shield extends React.Component {
  constructor() {
    super();
    this.getClasses = this.getClasses.bind(this);
    this.lastMonster = this.lastMonster.bind(this);
  }

  getClasses() {
    const classList = ['shield'];
    if (this.props.dp) classList.push(`shield_${this.props.dp}`);
    return classList.join(' ');
  }

  lastMonster() {
    let output = '';
    if (this.props.monster && this.props.dp) output = `/${this.props.monster}`;
    return output;
  }

  render() {
    return (
      <div className={this.getClasses()}>
        {this.props.dp}{this.lastMonster()} DP
      </div>
    );
  }
}

export default Shield;
