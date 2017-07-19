import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import App from './App';

import sample_expectations_rd1 from '../tests/sample_expectations_rd1.json';
import sample_expectations_rd2 from '../tests/sample_expectations_rd2.json';

describe("App component data tests", () => {

  it("matches sample_expectations_rd1 for initial lab results", function() {
    for (let i = 0; i < sample_expectations_rd1.length; i++) {
      var root = TestUtils.renderIntoDocument(<App requestedID={sample_expectations_rd1[i].result_id} combineData={false} />);
      // scryRenderedDOMComponentsWithClass
      var LabResultComparisonElements = TestUtils.scryRenderedDOMComponentsWithClass(root, 'LabResultComparison');

      for (let j = 0; j < LabResultComparisonElements.length; j++) {
        expect(parseInt(LabResultComparisonElements[j].innerHTML)).toEqual(sample_expectations_rd1[i].last_three_values[j].value)
      }

    }
  });

  it("matches sample_expectations_rd2 for added lab results", function() {
    for (let i = 0; i < sample_expectations_rd2.length; i++) {
      var root = TestUtils.renderIntoDocument(<App requestedID={sample_expectations_rd2[i].result_id} combineData={true} />);

      // scryRenderedDOMComponentsWithClass
      var LabResultComparisonElements = TestUtils.scryRenderedDOMComponentsWithClass(root, 'LabResultComparison');

      for (let j = 0; j < LabResultComparisonElements.length; j++) {
        expect(parseInt(LabResultComparisonElements[j].innerHTML)).toEqual(sample_expectations_rd2[i].last_three_values[j].value)
      }

    }
  });
});
