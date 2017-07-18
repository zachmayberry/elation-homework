import React, { Component } from 'react';
import _ from 'underscore';
import './LabResults.css';

import LabResult from './LabResult';

let last_three_values = [];

class LabResults extends Component {
  constructor(props) {
    super(props);
    this.state = {componentReady: false};
  }

  componentDidMount() {
    const requestedID = 198024;
    const data = this.props.results;
    const requestedResultObject = _.findWhere(data, {result_id: requestedID});
    const typeList = _.where(data, {name: requestedResultObject.name, patient_id: requestedResultObject.patient_id});
    const sortedTypeList = _.sortBy(typeList, function(data) { return data.date; }).reverse();
    const requestedResultIndex = _.findIndex(sortedTypeList, {result_id: requestedID});

    for (let i = requestedResultIndex; i < requestedResultIndex + 4; i++) {
      last_three_values.push(sortedTypeList[i]);
    }

    this.setState({componentReady: true});
  }

  render() {
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
