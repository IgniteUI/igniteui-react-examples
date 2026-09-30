import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrQrCode } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function QrCodeCornerShapes() {
  return (
    <div className="container sample">
      <div>
        <IgrQrCode value="https://www.infragistics.com" squareStyle="square" />
        <span>
          Square style: <strong>square</strong>
        </span>
      </div>
      <div>
        <IgrQrCode value="https://www.infragistics.com" squareStyle="circle" />
        <span>
          Square style: <strong>circle</strong>
        </span>
      </div>
      <div>
        <IgrQrCode value="https://www.infragistics.com" squareStyle="rounded" />
        <span>
          Square style: <strong>rounded</strong>
        </span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<QrCodeCornerShapes />);
