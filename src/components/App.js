import React, { Component } from 'react';
import _ from 'underscore';
import './App.css';

// Load initial data into memory
import LabResults from './LabResults';
import initial_lab_results from '../data/initial_lab_results.json';
import new_lab_results from '../data/new_lab_results.json';

class App extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {requestedID: this.props.requestedID, combineData: this.props.combineData};

    // Events
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  render() {
    // Create button to load next data set
    let button = <button onClick={this.onClickHandler}>Add New Set</button>;
    if (this.state.combineData) {
      button = <div />;
    }
    // Set default state for lab_results array
    let lab_results = initial_lab_results;
    if (this.state.combineData) {
      lab_results = initial_lab_results.concat(new_lab_results);
    }
    // Generate sample list
    const sampleList = this.generateSampleList(lab_results, this.state.requestedID);
    // Create sample list dropdown
    const selectList = sampleList.map((value, key) =>
      <option key={value.result_id} value={value.result_id}>{value.date}</option>
    );

    return (
      <div className="App">
        <select onChange={this.onChangeHandler} value={this.state.requestedID}>
          {selectList}
        </select>
        {button}
        <LabResults results={lab_results} requestedID={this.state.requestedID} />
      </div>
    );
  }

  onChangeHandler(event) {
    this.setState({requestedID: parseInt(event.target.value)});
  }

  onClickHandler(event) {
    this.setState({combineData: true});
  }

  generateSampleList(lab_results, requestedID) {
    let sampleList = _.sample(lab_results, 20);
    // Find requested result object by ID
    const requestedResultObject = _.findWhere(
      lab_results,
      {result_id: requestedID}
    );

    sampleList.unshift(requestedResultObject);
    return sampleList;
  }
}

export default App;
