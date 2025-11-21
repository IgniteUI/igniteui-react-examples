import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, User } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';
import "igniteui-webcomponents/themes/light/bootstrap.css";

// Register components
IgcGridLite.register();

export default class Sample extends React.Component<any, any> {
  private dataService: GridLiteDataService;
  private gridRef: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
  }

  componentDidMount() {
    if (this.gridRef.current) {
      const data: User[] = this.dataService.generateUsers(50);
      
      const columns = [
        { 
          key: 'id', 
          headerText: '🆔 ID',
          width: '150px'
        },
        { 
          key: 'firstName', 
          headerText: '👤 First Name'
        },
        { 
          key: 'lastName', 
          headerText: '👤 Last Name'
        },
        { 
          key: 'age', 
          headerText: '🎂 Age',
          type: 'number',
          width: '100px'
        },
        { 
          key: 'email', 
          headerText: '📧 Email'
        }
      ];

      this.gridRef.current.columns = columns;
      this.gridRef.current.data = data;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
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
