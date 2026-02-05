import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, User } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';
import { 
  defineComponents,
  IgcRatingComponent,
  IgcCheckboxComponent,
  IgcSelectComponent,
  IgcAvatarComponent
} from 'igniteui-webcomponents';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Register components
IgcGridLite.register();
defineComponents(
  IgcAvatarComponent,
  IgcRatingComponent,
  IgcCheckboxComponent,
  IgcSelectComponent
);

const choices = ['Low', 'Standard', 'High'];

// Define cellTemplate functions outside component
const avatarCellTemplate = (params: any) => {
  const cell = document.createElement('igc-avatar');
  cell.setAttribute('shape', 'circle');
  cell.setAttribute('alt', 'User avatar');
  cell.setAttribute('src', params.value);
  return cell;
};

const priorityCellTemplate = (params: any) => {
  const select = document.createElement('igc-select');
  select.setAttribute('outlined', '');
  select.setAttribute('flip', '');
  select.setAttribute('value', params.value);
  
  choices.forEach(choice => {
    const item = document.createElement('igc-select-item');
    item.setAttribute('value', choice);
    item.textContent = choice;
    select.appendChild(item);
  });
  
  return select;
};

const satisfactionCellTemplate = (params: any) => {
  const rating = document.createElement('igc-rating');
  rating.setAttribute('readonly', '');
  rating.setAttribute('value', params.value.toString());
  return rating;
};

const registeredAtCellTemplate = (params: any) => {
  const span = document.createElement('span');
  span.textContent = params.value.toLocaleString();
  return span;
};

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
      const data: User[] = dataService.generateUsers(1000);
      
      // Set custom sortConfiguration for priority column (can't be passed as prop)
      const priorityCol = gridRef.current.columns.find((c: any) => c.field === 'priority');
      if (priorityCol) {
        priorityCol.sortConfiguration = {
          comparer: (a: string, b: string) => choices.indexOf(a) - choices.indexOf(b)
        };
      }
      
      gridRef.current.data = data;
    }
  }, []);

  return (
    <div className="container sample">
      <div className="grid-lite-wrapper">
        <igc-grid-lite ref={gridRef} id="grid-lite">
          <igc-grid-lite-column field="avatar" header="Avatar" cellTemplate={avatarCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="firstName" header="First name" sortable filterable resizable></igc-grid-lite-column>
          <igc-grid-lite-column field="lastName" header="Last name" sortable filterable resizable></igc-grid-lite-column>
          <igc-grid-lite-column field="email" header="Email Address"></igc-grid-lite-column>
          <igc-grid-lite-column field="priority" header="Priority" width="12rem" sortable sorting-case-sensitive cellTemplate={priorityCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="satisfaction" header="Satisfaction rating" data-type="number" sortable filterable cellTemplate={satisfactionCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="registeredAt" header="Registered @" sortable cellTemplate={registeredAtCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="active" data-type="boolean" header="Active" cellTemplate={activeCellTemplate}></igc-grid-lite-column>
        </igc-grid-lite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
