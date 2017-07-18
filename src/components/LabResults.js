import React, { Component } from 'react';
import _ from 'underscore';
import './LabResults.css';

import LabResult from './LabResult';

class LabResults extends Component {
  render() {
    let last_three_values = [];
    const requestedResultObject = _.findWhere(this.props.results, {result_id: this.props.requestedID});
    const typeList = _.where(this.props.results, {name: requestedResultObject.name, patient_id: requestedResultObject.patient_id});
    const sortedTypeList = _.sortBy(typeList, function(data) { return data.date; }).reverse();
    const requestedResultIndex = _.findIndex(sortedTypeList, {result_id: this.props.requestedID});

    for (let i = requestedResultIndex; i < requestedResultIndex + 4; i++) {
      last_three_values.push(sortedTypeList[i]);
    }

    const listResults = last_three_values.map((value, key) => {
      let isActive = false;
      if (key === 0) isActive = true;
      return(
        <LabResult key={value.result_id} name={value.name} value={value.value} active={isActive} />
      );
    });

    return (
      <div className="LabResults">
        {listResults}
      </div>
    );
  }
}

export default LabResults;
