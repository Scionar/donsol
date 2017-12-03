import React from 'react';
import './Experience.css';

class Experience extends React.Component {
  constructor() {
    super();
    this.getClasses = this.getClasses.bind(this);
  }

  getClasses() {
    const classList = ['experience'];
    if (this.props.xp) classList.push(`experience_${this.props.xp}`);
    return classList.join(' ');
  }

  render() {
    return (
      <div className={this.getClasses()}>
        {this.props.xp} XP
      </div>
    );
  }
}

export default Experience;
