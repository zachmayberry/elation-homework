import React, { Component } from 'react';
import _ from 'underscore';

import './App.css';

import LabResults from './LabResults';
import initial_lab_results from '../data/initial_lab_results.json';

const sampleList = _.sample(initial_lab_results, 10);

class App extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {requestedID: sampleList[0].result_id};

    // Events
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  render() {
    const selectList = sampleList.map((value, key) =>
      <option key={value.result_id} value={value.result_id}>{value.date}</option>
    );

    return (
      <div className="App">
        <select onChange={this.onChangeHandler} value={this.state.requestedID}>
          {selectList}
        </select>
        <LabResults results={initial_lab_results} requestedID={this.state.requestedID} />
      </div>
    );
  }

  onChangeHandler(event) {
    this.setState({requestedID: parseInt(event.target.value)});
    this.forceUpdate();
  }
}

export default App;
