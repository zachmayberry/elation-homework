import React, { Component } from 'react';
import './LabResult.css';

class LabResult extends Component {
  render() {
    // Mark current result
    let classList = 'LabResult LabResultComparison';
    if (this.props.current) {
      classList = 'LabResult LabResultCurrent';
    }

    return (
      <div className={classList}>
        {this.props.value}
      </div>
    );
  }
}

export default LabResult;
