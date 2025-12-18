import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrSwitch } from 'igniteui-react';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';
import { 
  defineComponents,
  IgcRatingComponent
} from 'igniteui-webcomponents';
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Register components
IgcGridLite.register();
defineComponents(IgcRatingComponent);

export default class Sample extends React.Component<any, any> {
  private dataService: GridLiteDataService;
  private gridRef: React.RefObject<any>;
  private sortConfiguration: any = {
    multiple: true,
    triState: true
  };

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
    this.updateConfig = this.updateConfig.bind(this);
  }

  componentDidMount() {
    if (this.gridRef.current) {
      const data: ProductInfo[] = this.dataService.generateProducts(100);
      
      const columns = [
        { 
          key: 'name', 
          headerText: 'Name', 
          sort: true 
        },
        { 
          key: 'price', 
          type: 'number', 
          headerText: 'Price', 
          sort: true 
        },
        {
          key: 'rating',
          type: 'number',
          headerText: 'Rating',
          sort: true,
          cellTemplate: (params: any) => {
            const rating = document.createElement('igc-rating');
            rating.setAttribute('readonly', '');
            rating.setAttribute('step', '0.01');
            rating.setAttribute('value', params.value.toString());
            return rating;
          }
        },
        { 
          key: 'sold', 
          type: 'number', 
          headerText: 'Sold', 
          sort: true 
        },
        { 
          key: 'total', 
          type: 'number', 
          headerText: 'Total', 
          sort: true 
        }
      ];

      this.gridRef.current.columns = columns;
      this.gridRef.current.data = data;
      this.gridRef.current.sortConfiguration = this.sortConfiguration;
    }
  }

  private updateConfig(prop: string, checked: boolean) {
    this.sortConfiguration = { ...this.sortConfiguration, [prop]: checked };
    if (this.gridRef.current) {
      this.gridRef.current.sortConfiguration = this.sortConfiguration;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="controls-wrapper">
          <IgrSwitch id="multisort" checked={true} onChange={(e: any) => this.updateConfig('multiple', e.target.checked)}>
            Multiple Sort
          </IgrSwitch>
          <IgrSwitch id="triState" checked={true} onChange={(e: any) => this.updateConfig('triState', e.target.checked)}>
            Tri-State
          </IgrSwitch>
        </div>
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
