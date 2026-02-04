import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';
import { 
  defineComponents,
  IgcRatingComponent,
  IgcSelectComponent
} from 'igniteui-webcomponents';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.scss";

// Add custom elements to JSX namespace for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'igc-select': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'igc-select-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'igc-grid-lite': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'igc-rating': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

// Register components
IgcGridLite.register();
defineComponents(IgcRatingComponent, IgcSelectComponent);

export default class Sample extends React.Component<any, any> {
  private dataService: GridLiteDataService;
  private gridRef: React.RefObject<any>;
  private wrapperRef: React.RefObject<HTMLDivElement>;
  private selectRef: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
    this.wrapperRef = React.createRef();
    this.selectRef = React.createRef();
    this.state = {
      currentTheme: 'bootstrap-light'
    };
  }

  componentDidMount() {
    if (this.gridRef.current) {
      const data: ProductInfo[] = this.dataService.generateProducts(50);
      
      const columns = [
        { 
          key: 'name', 
          headerText: 'Product', 
          sort: true, 
          filter: true 
        },
        {
          key: 'price',
          headerText: 'Price',
          sort: true,
          filter: true,
          type: 'number'
        },
        {
          key: 'sold',
          headerText: 'Sold',
          sort: true,
          filter: true,
          type: 'number'
        },
        {
          key: 'total',
          headerText: 'Total',
          sort: true,
          filter: true,
          type: 'number'
        },
        {
          key: 'rating',
          headerText: 'Rating',
          type: 'number',
          sort: true,
          filter: true,
          cellTemplate: (params: any) => {
            const rating = document.createElement('igc-rating');
            rating.setAttribute('readonly', '');
            rating.setAttribute('value', params.value.toString());
            return rating;
          }
        }
      ];

      this.gridRef.current.columns = columns;
      this.gridRef.current.data = data;
    }

    // Set up theme select listener
    if (this.selectRef.current) {
      this.selectRef.current.addEventListener('igcChange', (event: any) => {
        const selectedValue = event.detail.value;
        this.changeTheme(selectedValue);
      });
    }

    // Apply initial theme
    this.changeTheme(this.state.currentTheme);
  }

  private changeTheme = (theme: string) => {
    this.setState({ currentTheme: theme });
    if (this.wrapperRef.current) {
      this.wrapperRef.current.setAttribute('data-theme', theme);
    }
    // Force grid refresh by reassigning data
    if (this.gridRef.current) {
      const currentData = this.gridRef.current.data;
      this.gridRef.current.data = [...currentData];
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="options">
          <label className="options-label">Theme:</label>
          <igc-select ref={this.selectRef} id="theme-select">
            <igc-select-item value="bootstrap-light" selected>
              Light Bootstrap
            </igc-select-item>
            <igc-select-item value="material-light">
              Light Material
            </igc-select-item>
            <igc-select-item value="fluent-light">
              Light Fluent
            </igc-select-item>
            <igc-select-item value="indigo-light">
              Light Indigo
            </igc-select-item>
            <igc-select-item value="bootstrap-dark">
              Dark Bootstrap
            </igc-select-item>
            <igc-select-item value="material-dark">
              Dark Material
            </igc-select-item>
            <igc-select-item value="fluent-dark">
              Dark Fluent
            </igc-select-item>
            <igc-select-item value="indigo-dark">
              Dark Indigo
            </igc-select-item>
          </igc-select>
        </div>
        
        <div className="grid-lite-wrapper" ref={this.wrapperRef}>
          <igc-grid-lite ref={this.gridRef} id="grid-lite"></igc-grid-lite>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
