import React, { Component } from 'react';
import _ from 'underscore';
import './LabResults.css';

import LabResult from './LabResult';

class LabResults extends Component {
  render() {
    // Retrieve results
    const last_three_values = this.retrieveValues(this.props.requestedID, 4);

    // Generate list of results
    const listResults = last_three_values.map((value, key) => {
      let isCurrent = false;
      if (key === 0) isCurrent = true;
      return(
        <LabResult key={value.result_id} name={value.name} value={value.value} current={isCurrent} />
      );
    });

    return (
      <div className="LabResults">
        {listResults}
      </div>
    );
  }

  retrieveValues(requestedID,num) {
    let requestedValues = [];
    const results = this.props.results;

    // Find requested result object by ID
    const requestedResultObject = _.findWhere(
      results,
      {result_id: requestedID}
    );
    // Build list
    const sortedTypeList = _.sortBy(
      // Filter list
      _.where(results, {name: requestedResultObject.name, patient_id: requestedResultObject.patient_id})
      // Sort List
      , function(data) { return data.date; })
      .reverse();

    // Grab index of request from filtered/sorted list
    const requestedResultIndex = _.findIndex(
      sortedTypeList,
      {result_id: requestedID}
    );

    // Retrieve wanted results
    for (let i = requestedResultIndex; i < requestedResultIndex + num; i++) {
      requestedValues.push(sortedTypeList[i]);
    }

    return requestedValues;
  }
}

export default LabResults;
