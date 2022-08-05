import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import SamplesBrowser from "./navigation/SamplesBrowser";
import RegisterServiceWorker from './serviceWorker';

import './index.css'; // styles shared between all samples

// console.log('SB index');
// addEventListener('activate', function(event) {
   console.log('SB index activate');
   // event.waitUntil(
     caches.keys().then(function(keyList) {
       return Promise.all(keyList.map(function(key) {
            console.log('SB index caches ' + key);
            return caches.delete(key);
       }));
     })
   // );
//  });

ReactDOM.render(
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

// // copied from https://stenciljs.com/docs/react
// import { applyPolyfills, defineCustomElements } from 'igniteui-dockmanager/loader';

// applyPolyfills().then(() => {
//   defineCustomElements();
// });
