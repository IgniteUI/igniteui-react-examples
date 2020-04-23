import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
