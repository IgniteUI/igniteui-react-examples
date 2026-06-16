import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrHighlight } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class HighlightOverview extends React.Component<any, any> {

  public render(): JSX.Element {
    return (
      <div className="sample">
      <IgrHighlight search-text="dolor">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae doloribus
          odit id excepturi ipsum provident eaque dignissimos beatae!
        </p>
      </IgrHighlight>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HighlightOverview/>);
