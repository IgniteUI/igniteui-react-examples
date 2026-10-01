import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrQrCode } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function QrCodeSize() {
  return (
    <div className="container sample">
      <div>
        <IgrQrCode value="https://www.infragistics.com" size={128} />
        <span>
          Size: <strong>128px</strong>
        </span>
      </div>
      <div>
        <IgrQrCode value="https://www.infragistics.com" size={192} />
        <span>
          Size: <strong>192px</strong>
        </span>
      </div>
      <div>
        <IgrQrCode value="https://www.infragistics.com" size={256} />
        <span>
          Size: <strong>256px</strong>
        </span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<QrCodeSize />);
