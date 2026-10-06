import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrQrCode } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function QrCodeStyling() {
  return (
    <div className="container sample">
      <IgrQrCode
        className="qr-blue"
        value="https://www.infragistics.com/products/ignite-ui-web-components"
        size={150}
        dotStyle="rounded"
        squareStyle="rounded"
        errorLevel="H"
      />
      <IgrQrCode
        className="qr-orange"
        value="https://www.infragistics.com/products/ignite-ui-web-components"
        size={150}
        dotStyle="rounded"
        squareStyle="rounded"
        errorLevel="H"
      />
      <IgrQrCode
        className="qr-green"
        value="https://www.infragistics.com/products/ignite-ui-web-components"
        size={150}
        dotStyle="rounded"
        squareStyle="rounded"
        errorLevel="H"
      />
      <IgrQrCode
        className="qr-dark"
        value="https://www.infragistics.com/products/ignite-ui-web-components"
        size={150}
        dotStyle="rounded"
        squareStyle="rounded"
        errorLevel="H"
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<QrCodeStyling />);
