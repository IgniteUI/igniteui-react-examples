import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, User } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Register components
IgcGridLite.register();

export default function Sample() {
  const gridRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      const data: User[] = dataService.generateUsers(50);
      gridRef.current.data = data;
    }
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <igc-grid-lite ref={gridRef} id="grid-lite">
          <igc-grid-lite-column field="firstName" header="First name" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="lastName" header="Last name" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="age" header="Age" sortable data-type="number"></igc-grid-lite-column>
          <igc-grid-lite-column field="email" header="Email" sortable></igc-grid-lite-column>
        </igc-grid-lite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
