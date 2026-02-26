import { useCallback, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { GridLiteDataService } from "./GridLiteDataService";

import { IgrGridLite } from 'igniteui-react/grid-lite';
import { IgrButton } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";


export default function GridLiteDataBinding() {
  const [showingProducts, setShowingProducts] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataService = new GridLiteDataService();
    setData(dataService.generateProducts(50));

    window.addEventListener("error", (e) => {
      if (
        e.message ===
        "ResizeObserver loop completed with undelivered notifications."
      ) {
        e.stopImmediatePropagation();
      }
    });
  }, []);

  const switchData = useCallback(() => {
    const dataService = new GridLiteDataService();

    if (showingProducts) {
      const data = dataService.generateUsers(50);
      setData(data);
      setShowingProducts(false);
    } else {
      const data = dataService.generateProducts(50);
      setData(data);
      setShowingProducts(true);
    }
  }, [showingProducts]);

  return (
    <div className="container sample ig-typography">
      <div className="controls-wrapper">
        <IgrButton className="sample-button" onClick={switchData}>
          Switch Data
        </IgrButton>
      </div>
      <IgrGridLite
        autoGenerate={true}
        id="grid-lite"
        data={data}
      ></IgrGridLite>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GridLiteDataBinding />);
