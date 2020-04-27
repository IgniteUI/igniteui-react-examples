import "@babel/polyfill";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import AppRouter from './navigation/AppRouter';
import RegisterServiceWorker from './navigation/ServiceWorker';

console.log("Starting SB in " + process.env.NODE_ENV + " environment");
// console.log("Index process.env PUBLIC_URL: " + process.env.PUBLIC_URL);
// console.log("Index window.location: " + window.location);
// console.log("Index window.location.hostname: " + window.location.hostname);

ReactDOM.render(
  // <BrowserRouter basename={'/react-demos'}>
  <BrowserRouter basename={AppRouter.basename}>
    <AppRouter   />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);

RegisterServiceWorker();


