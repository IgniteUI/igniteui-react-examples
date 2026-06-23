import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class BadgeDot extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="sample">
        <IgrBadge dot={true} />
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeDot />);
