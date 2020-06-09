

/* {RepositoryWarning}  */
/* {RepositoryUrl}/tree/master/templates/sample/src/index  */

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'; // styles shared between all samples

import { applyPolyfills, defineCustomElements } from 'igniteui-dockmanager/loader';

import DockManagerOverview from './DockManagerOverview';
ReactDOM.render(<DockManagerOverview />, document.getElementById('root'));

// copied from https://stenciljs.com/docs/react
applyPolyfills().then(() => {
    defineCustomElements();
});