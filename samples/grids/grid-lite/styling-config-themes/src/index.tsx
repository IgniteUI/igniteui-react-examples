import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';
import { IgcGridLite } from 'igniteui-grid-lite';
import {
  defineComponents,
  IgcRatingComponent,
  IgcSelectComponent
} from 'igniteui-webcomponents';
import { html } from 'lit-html';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.scss";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'igc-select': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'igc-select-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { value?: string; selected?: boolean }, HTMLElement>;
      'igc-grid-lite': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'igc-grid-lite-column': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { field?: string; header?: string; sortable?: boolean; filterable?: boolean; 'data-type'?: string; cellTemplate?: any }, HTMLElement>;
      'igc-rating': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

IgcGridLite.register();
defineComponents(IgcRatingComponent, IgcSelectComponent);

export default class Sample extends React.Component<any, any> {
  private dataService: GridLiteDataService;
  private gridRef: React.RefObject<any>;
  private selectRef: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
    this.selectRef = React.createRef();
    this.state = {
      currentTheme: 'bootstrap-light'
    };
  }

  componentDidMount() {
    if (this.gridRef.current) {
      const data: ProductInfo[] = this.dataService.generateProducts(50);
      this.gridRef.current.data = data;
    }

    if (this.selectRef.current) {
      this.selectRef.current.addEventListener('igcChange', (event: any) => {
        this.changeTheme(event.detail.value);
      });
    }

    this.changeTheme(this.state.currentTheme);
  }

  private changeTheme = (theme: string) => {
    this.setState({ currentTheme: theme });
    document.body.setAttribute('data-theme', theme);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="options">
          <label className="options-label">Theme:</label>
          <igc-select ref={this.selectRef} id="theme-select">
            <igc-select-item value="bootstrap-light" selected>Light Bootstrap</igc-select-item>
            <igc-select-item value="material-light">Light Material</igc-select-item>
            <igc-select-item value="fluent-light">Light Fluent</igc-select-item>
            <igc-select-item value="indigo-light">Light Indigo</igc-select-item>
            <igc-select-item value="bootstrap-dark">Dark Bootstrap</igc-select-item>
            <igc-select-item value="material-dark">Dark Material</igc-select-item>
            <igc-select-item value="fluent-dark">Dark Fluent</igc-select-item>
            <igc-select-item value="indigo-dark">Dark Indigo</igc-select-item>
          </igc-select>
        </div>

        <div className="grid-lite-wrapper">
          <igc-grid-lite ref={this.gridRef} id="grid-lite">
            <igc-grid-lite-column field="name" header="Product" sortable filterable></igc-grid-lite-column>
            <igc-grid-lite-column field="price" header="Price" sortable filterable data-type="number"></igc-grid-lite-column>
            <igc-grid-lite-column field="sold" header="Sold" sortable filterable data-type="number"></igc-grid-lite-column>
            <igc-grid-lite-column field="total" header="Total" sortable filterable data-type="number"></igc-grid-lite-column>
            <igc-grid-lite-column
              field="rating"
              header="Rating"
              data-type="number"
              sortable
              filterable
              cellTemplate={(params: any) => html`<igc-rating readonly value=${params.value}></igc-rating>`}
            ></igc-grid-lite-column>
          </igc-grid-lite>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
