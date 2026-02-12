import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';
import { 
  defineComponents,
  IgcButtonComponent
} from 'igniteui-webcomponents';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Register components
IgcGridLite.register();
defineComponents(IgcButtonComponent);

export default function Sample() {
  const gridRef = React.useRef<any>(null);
  const [showingProducts, setShowingProducts] = React.useState(true);

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      gridRef.current.data = dataService.generateProducts(50);
      
      window.addEventListener('error', (e) => {
        if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
          e.stopImmediatePropagation();
        }
      });
    }
  }, []);

  const switchData = React.useCallback(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      gridRef.current.columns = [];
      
      if (showingProducts) {
        gridRef.current.data = dataService.generateUsers(50);
        setShowingProducts(false);
      } else {
        gridRef.current.data = dataService.generateProducts(50);
        setShowingProducts(true);
      }
    }
  }, [showingProducts]);

  return (
    <div className="container sample ig-typography">
      <div className="controls-wrapper">
        <button className="sample-button" onClick={switchData}>Switch Data</button>
      </div>
      <div className="grid-lite-wrapper">
        <igc-grid-lite auto-generate="true" ref={gridRef} id="grid-lite"></igc-grid-lite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
