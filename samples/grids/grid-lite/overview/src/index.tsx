import React, { useEffect } from 'react';
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

// Define cellTemplate functions outside component
const avatarCellTemplate = (params: any) => {
  const cell = document.createElement('igc-avatar');
  cell.setAttribute('shape', 'circle');
  cell.setAttribute('alt', 'User avatar');
  cell.setAttribute('src', params.value);
  return cell;
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


export default function Sample() {
  const [data, setData] = React.useState<User[]>([]);	

  useEffect(() => {
      const dataService = new GridLiteDataService();
      const data: User[] = dataService.generateUsers(1000);
      setData(data);
  }, []);

  return (
    <div className="container sample">
      <div className="grid-lite-wrapper">
        <igc-grid-lite data={data} id="grid-lite">
          <igc-grid-lite-column field="avatar" header="Avatar" cellTemplate={avatarCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="firstName" header="First name" sortable filterable resizable></igc-grid-lite-column>
          <igc-grid-lite-column field="lastName" header="Last name" sortable filterable resizable></igc-grid-lite-column>
          <igc-grid-lite-column field="email" header="Email Address"></igc-grid-lite-column>
          <igc-grid-lite-column field="satisfaction" header="Satisfaction rating" data-type="number" sortable filterable cellTemplate={satisfactionCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="registeredAt" header="Registered @" sortable cellTemplate={registeredAtCellTemplate}></igc-grid-lite-column>
        </igc-grid-lite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
