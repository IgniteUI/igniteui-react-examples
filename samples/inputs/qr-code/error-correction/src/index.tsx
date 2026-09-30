import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrQrCode } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function QrCodeErrorCorrection() {
  return (
    <div className="container sample">
      <div>
        <IgrQrCode value="https://www.infragistics.com" errorLevel="L" />
        <span>
          Error level: <strong>L</strong>
        </span>
      </div>
      <div>
        <IgrQrCode value="https://www.infragistics.com" errorLevel="M" />
        <span>
          Error level: <strong>M</strong>
        </span>
      </div>
      <div>
        <IgrQrCode value="https://www.infragistics.com" errorLevel="Q" />
        <span>
          Error level: <strong>Q</strong>
        </span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<QrCodeErrorCorrection />);
