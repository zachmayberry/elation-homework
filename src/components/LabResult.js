import React, { Component } from 'react';
import './LabResult.css';

class LabResult extends Component {
  render() {
    let classList = 'LabResult';
    if (this.props.active) {
      classList += ' active';
    }

    return (
      <div className={classList}>
        {this.props.value}
      </div>
    );
  }
}

export default LabResult;
