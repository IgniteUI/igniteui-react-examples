import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import SamplesBrowser from "./navigation/SamplesBrowser";
import RegisterServiceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';
import { initSampleThemeListener } from './sample-theme';
import { initSampleSizeReporter } from './sample-size-reporter';

import './index.css'; // styles shared between all samples

// console.log('SB index');
// addEventListener('activate', function(event) {
  //  console.log('SB index activate');
   // event.waitUntil(
     caches.keys().then(function(keyList) {
       return Promise.all(keyList.map(function(key) {
            console.log('SB index cache delete ' + key);
            return caches.delete(key);
       }));
     })
   // );
//  });

// Lets the docs ThemingWidget re-theme this browser while embedded.
initSampleThemeListener();
// Lets docs samples embedded with <Sample fitContent> size their iframe to
// their content. Dormant unless the docs host asks for it.
initSampleSizeReporter();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
   <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SamplesBrowser />
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
RegisterServiceWorker();
// serviceWorker.unregister();
