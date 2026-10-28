import ReactDOM from 'react-dom/client';
import { IgrHighlight } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function HighlightOverview() {
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

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<HighlightOverview/>);
