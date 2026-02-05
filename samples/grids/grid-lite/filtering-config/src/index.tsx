import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, User } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';
import { 
  defineComponents,
  IgcCheckboxComponent
} from 'igniteui-webcomponents';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Register components
IgcGridLite.register();
defineComponents(IgcCheckboxComponent);

// Define cellTemplate function outside component
const activeCellTemplate = (params: any) => {
  const checkbox = document.createElement('igc-checkbox');
  if (params.value) {
    checkbox.setAttribute('checked', '');
  }
  return checkbox;
};

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
          <igc-grid-lite-column field="firstName" header="First name" filterable></igc-grid-lite-column>
          <igc-grid-lite-column field="lastName" header="Last name" filterable></igc-grid-lite-column>
          <igc-grid-lite-column field="age" header="Age" filterable data-type="number"></igc-grid-lite-column>
          <igc-grid-lite-column field="active" header="Active" data-type="boolean" filterable cellTemplate={activeCellTemplate}></igc-grid-lite-column>
        </igc-grid-lite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
