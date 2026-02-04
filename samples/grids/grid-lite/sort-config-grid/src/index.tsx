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
  private sortingOptions: any = {
    mode: 'multiple'
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
      
      // Set cellTemplate for rating column
      const ratingCol = this.gridRef.current.columns.find((c: any) => c.field === 'rating');
      if (ratingCol) {
        ratingCol.cellTemplate = (params: any) => {
          const rating = document.createElement('igc-rating');
          rating.setAttribute('readonly', '');
          rating.setAttribute('step', '0.01');
          rating.setAttribute('value', params.value.toString());
          return rating;
        };
      }

      this.gridRef.current.data = data;
      this.gridRef.current.sortingOptions = this.sortingOptions;
    }
  }

  private updateConfig(prop: string, checked: boolean) {
    if (prop === 'multiple') {
      this.sortingOptions = { ...this.sortingOptions, mode: checked ? 'multiple' : 'single' };
    }
    if (this.gridRef.current) {
      this.gridRef.current.sortingOptions = this.sortingOptions;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="controls-wrapper">
          <IgrSwitch id="multisort" checked={true} onChange={(e: any) => this.updateConfig('multiple', e.target.checked)}>
            Multiple Sort
          </IgrSwitch>
        </div>
        <div className="grid-lite-wrapper">
          <igc-grid-lite ref={this.gridRef} id="grid-lite">
            <igc-grid-lite-column field="name" header="Name" sortable></igc-grid-lite-column>
            <igc-grid-lite-column field="price" data-type="number" header="Price" sortable></igc-grid-lite-column>
            <igc-grid-lite-column field="rating" data-type="number" header="Rating" sortable></igc-grid-lite-column>
            <igc-grid-lite-column field="sold" data-type="number" header="Sold" sortable></igc-grid-lite-column>
            <igc-grid-lite-column field="total" data-type="number" header="Total" sortable></igc-grid-lite-column>
          </igc-grid-lite>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
