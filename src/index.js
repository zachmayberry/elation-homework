import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const requestedID = 126;

ReactDOM.render(<App requestedID={requestedID} combineData={false} />, document.getElementById('root'));
registerServiceWorker();
