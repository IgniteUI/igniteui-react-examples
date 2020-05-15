import React from 'react';
import ReactDOM from 'react-dom';

import './sandbox.config.json'; // required for code sandbox
import './index.css'; // styles shared between all samples

import SpreadsheetAdapter from './SpreadsheetAdapter';
ReactDOM.render(<SpreadsheetAdapter />, document.getElementById('root'));


