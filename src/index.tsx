import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
// import App from './App';
// import { SamplesRouter } from './navigation/SamplesRouter';
import SamplesBrowser from "./navigation/SamplesBrowser";
// import * as serviceWorker from './serviceWorker';
import RegisterServiceWorker from './serviceWorker';

import './index.css'; // styles shared between all samples

ReactDOM.render(
  // <React.StrictMode>
  //   <SamplesRouter />
  // </React.StrictMode>,
   <BrowserRouter basename={'/react-demos'}>
      <SamplesBrowser />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
RegisterServiceWorker();
// serviceWorker.unregister();

// copied from https://stenciljs.com/docs/react
import { applyPolyfills, defineCustomElements } from 'igniteui-dockmanager/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});
