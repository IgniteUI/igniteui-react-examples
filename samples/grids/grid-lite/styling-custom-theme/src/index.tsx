import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';

import { IgrSwitch } from 'igniteui-react';
import {
  IgrGridLite,
  IgrGridLiteColumn,
} from 'igniteui-react/grid-lite';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.scss";

export default function Sample() {
  const [data, setData] = React.useState<ProductInfo[]>([]);
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');

  React.useEffect(() => {
    const dataService = new GridLiteDataService();
    const items: ProductInfo[] = dataService.generateProducts(50);
    setData(items);
  }, []);

  const switchTheme = React.useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <section className="theme-switcher">
          <IgrSwitch
            labelPosition="before"
            checked={theme === 'light'}
            onChange={switchTheme}
          >
            {`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          </IgrSwitch>
        </section>
        <IgrGridLite
          id="grid-lite"
          data={data}
          className={theme === 'light' ? 'custom-light' : 'custom-dark'}
        >
          <IgrGridLiteColumn field="name" header="Product" sortable filterable></IgrGridLiteColumn>
          <IgrGridLiteColumn field="price" header="Price" sortable filterable dataType="number"></IgrGridLiteColumn>
          <IgrGridLiteColumn field="sold" header="Sold" sortable filterable dataType="number"></IgrGridLiteColumn>
          <IgrGridLiteColumn field="total" header="Total" sortable filterable dataType="number"></IgrGridLiteColumn>
          <IgrGridLiteColumn field="rating" header="Rating" dataType="number" sortable filterable></IgrGridLiteColumn>
        </IgrGridLite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
