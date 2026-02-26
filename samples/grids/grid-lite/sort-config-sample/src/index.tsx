import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, User } from './GridLiteDataService';

import { IgrGridLite, IgrGridLiteColumn } from 'igniteui-react/grid-lite';
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

export default function GridLiteSortConfig() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const dataService = new GridLiteDataService();
    setData(dataService.generateUsers(50));
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <IgrGridLite id="grid-lite" data={data}>
          <IgrGridLiteColumn field="firstName" header="First name" sortable={true}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="lastName" header="Last name" sortable={true}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="age" header="Age" sortable={true} dataType="number"></IgrGridLiteColumn>
          <IgrGridLiteColumn field="email" header="Email" sortable={true}></IgrGridLiteColumn>
        </IgrGridLite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GridLiteSortConfig/>);
