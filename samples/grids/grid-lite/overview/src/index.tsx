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
      
      const columns = [
        {
          key: 'avatar',
          headerText: 'Avatar',
          cellTemplate: (params: any) => {
            const cell = document.createElement('igc-avatar');
            cell.setAttribute('shape', 'circle');
            cell.setAttribute('alt', 'User avatar');
            cell.setAttribute('src', params.value);
            return cell;
          }
        },
        {
          key: 'firstName',
          headerText: 'First name',
          sort: true,
          filter: true,
          resizable: true
        },
        {
          key: 'lastName',
          headerText: 'Last name',
          sort: true,
          filter: true,
          resizable: true
        },
        {
          key: 'email',
          headerText: 'Email Address'
        },
        {
          key: 'priority',
          headerText: 'Priority',
          width: '12rem',
          sort: {
            comparer: (a: string, b: string) => this.choices.indexOf(a) - this.choices.indexOf(b),
            caseSensitive: true
          },
          cellTemplate: (params: any) => {
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
          }
        },
        {
          key: 'satisfaction',
          headerText: 'Satisfaction rating',
          type: 'number',
          sort: true,
          filter: true,
          cellTemplate: (params: any) => {
            const rating = document.createElement('igc-rating');
            rating.setAttribute('readonly', '');
            rating.setAttribute('value', params.value.toString());
            return rating;
          }
        },
        {
          key: 'registeredAt',
          headerText: 'Registered @',
          sort: true,
          cellTemplate: (params: any) => {
            const span = document.createElement('span');
            span.textContent = params.value.toLocaleString();
            return span;
          }
        },
        {
          key: 'active',
          type: 'boolean',
          headerText: 'Active',
          cellTemplate: (params: any) => {
            const checkbox = document.createElement('igc-checkbox');
            if (params.value) {
              checkbox.setAttribute('checked', '');
            }
            return checkbox;
          }
        }
      ];

      this.gridRef.current.columns = columns;
      this.gridRef.current.data = data;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <div className="grid-lite-wrapper">
          <igc-grid-lite ref={this.gridRef} id="grid-lite"></igc-grid-lite>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
