import React, { Component } from 'react';

import LabResults from './LabResults';
import initial_lab_results from '../data/initial_lab_results.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LabResults results={initial_lab_results} />
      </div>
    );
  }
}

export default App;
