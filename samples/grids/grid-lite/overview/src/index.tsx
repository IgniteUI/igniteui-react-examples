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

export default class Sample extends React.Component<any, any> {
  private dataService: GridLiteDataService;
  private choices = ['Low', 'Standard', 'High'];
  private gridRef: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
  }

  componentDidMount() {
    if (this.gridRef.current) {
      const data: User[] = this.dataService.generateUsers(1000);
      
      // Set cellTemplate for columns with custom rendering
      const avatarCol = this.gridRef.current.columns.find((c: any) => c.field === 'avatar');
      if (avatarCol) {
        avatarCol.cellTemplate = (params: any) => {
          const cell = document.createElement('igc-avatar');
          cell.setAttribute('shape', 'circle');
          cell.setAttribute('alt', 'User avatar');
          cell.setAttribute('src', params.value);
          return cell;
        };
      }

      const priorityCol = this.gridRef.current.columns.find((c: any) => c.field === 'priority');
      if (priorityCol) {
        priorityCol.sortConfiguration = {
          comparer: (a: string, b: string) => this.choices.indexOf(a) - this.choices.indexOf(b)
        };
        priorityCol.cellTemplate = (params: any) => {
          const select = document.createElement('igc-select');
          select.setAttribute('outlined', '');
          select.setAttribute('flip', '');
          select.setAttribute('value', params.value);
          
          this.choices.forEach(choice => {
            const item = document.createElement('igc-select-item');
            item.setAttribute('value', choice);
            item.textContent = choice;
            select.appendChild(item);
          });
          
          return select;
        };
      }

      const satisfactionCol = this.gridRef.current.columns.find((c: any) => c.field === 'satisfaction');
      if (satisfactionCol) {
        satisfactionCol.cellTemplate = (params: any) => {
          const rating = document.createElement('igc-rating');
          rating.setAttribute('readonly', '');
          rating.setAttribute('value', params.value.toString());
          return rating;
        };
      }

      const registeredAtCol = this.gridRef.current.columns.find((c: any) => c.field === 'registeredAt');
      if (registeredAtCol) {
        registeredAtCol.cellTemplate = (params: any) => {
          const span = document.createElement('span');
          span.textContent = params.value.toLocaleString();
          return span;
        };
      }

      const activeCol = this.gridRef.current.columns.find((c: any) => c.field === 'active');
      if (activeCol) {
        activeCol.cellTemplate = (params: any) => {
          const checkbox = document.createElement('igc-checkbox');
          if (params.value) {
            checkbox.setAttribute('checked', '');
          }
          return checkbox;
        };
      }

      this.gridRef.current.data = data;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <div className="grid-lite-wrapper">
          <igc-grid-lite ref={this.gridRef} id="grid-lite">
            <igc-grid-lite-column field="avatar" header="Avatar"></igc-grid-lite-column>
            <igc-grid-lite-column field="firstName" header="First name" sortable filterable resizable></igc-grid-lite-column>
            <igc-grid-lite-column field="lastName" header="Last name" sortable filterable resizable></igc-grid-lite-column>
            <igc-grid-lite-column field="email" header="Email Address"></igc-grid-lite-column>
            <igc-grid-lite-column field="priority" header="Priority" width="12rem" sortable sorting-case-sensitive></igc-grid-lite-column>
            <igc-grid-lite-column field="satisfaction" header="Satisfaction rating" data-type="number" sortable filterable></igc-grid-lite-column>
            <igc-grid-lite-column field="registeredAt" header="Registered @" sortable></igc-grid-lite-column>
            <igc-grid-lite-column field="active" data-type="boolean" header="Active"></igc-grid-lite-column>
          </igc-grid-lite>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
