import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrQrCode } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function QrCodeDotShapes() {
  return (
    <div className="container sample">
      <div>
        <IgrQrCode value="https://www.infragistics.com" dotStyle="square" />
        <span>
          Dot style: <strong>square</strong>
        </span>
      </div>
      <div>
        <IgrQrCode value="https://www.infragistics.com" dotStyle="circle" />
        <span>
          Dot style: <strong>circle</strong>
        </span>
      </div>
      <div>
        <IgrQrCode value="https://www.infragistics.com" dotStyle="rounded" />
        <span>
          Dot style: <strong>rounded</strong>
        </span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<QrCodeDotShapes />);
