import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrQrCode } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function QrCodeLogo() {
  return (
    <div className="container sample">
      <IgrQrCode
        value="https://www.infragistics.com/"
        logoSize={1}
        logoMargin={2}
        errorLevel="H"
        logoSrc="https://static.infragistics.com/marketing/Website/products/ignite-ui/shared/ignite-ui-logo-light-background-horizontal.svg"
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<QrCodeLogo />);
