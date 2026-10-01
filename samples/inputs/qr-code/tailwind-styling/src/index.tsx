import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrQrCode } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function QrCodeTailwindStyling() {
  return (
    <div className="container sample">
      <IgrQrCode
        value="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        size={150}
        errorLevel="H"
        dotStyle="circle"
        squareStyle="rounded"
        logoSrc="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        logoSize={0.75}
        className="!light-qr-code [--ig-qr-code-dark-color:#1a1a1a] [--ig-qr-code-background:#f7df1e] [--ig-qr-code-corner-square-color:#1a1a1a] [--ig-qr-code-corner-dot-color:#1a1a1a]"
      />
      <IgrQrCode
        value="https://developer.mozilla.org/en-US/docs/Web/HTML"
        size={150}
        errorLevel="H"
        dotStyle="circle"
        squareStyle="rounded"
        logoSrc="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
        logoSize={0.75}
        className="!light-qr-code [--ig-qr-code-dark-color:#ffffff] [--ig-qr-code-background:#e44d26] [--ig-qr-code-corner-square-color:#ffffff] [--ig-qr-code-corner-dot-color:#ffffff]"
      />
      <IgrQrCode
        value="https://developer.mozilla.org/en-US/docs/Web/CSS"
        size={150}
        errorLevel="H"
        dotStyle="circle"
        squareStyle="rounded"
        logoSrc="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
        logoSize={0.75}
        className="!light-qr-code [--ig-qr-code-dark-color:#ffffff] [--ig-qr-code-background:#1572b6] [--ig-qr-code-corner-square-color:#ffffff] [--ig-qr-code-corner-dot-color:#ffffff]"
      />
      <IgrQrCode
        value="https://www.infragistics.com/products/ignite-ui-web-components"
        size={150}
        errorLevel="H"
        dotStyle="circle"
        squareStyle="rounded"
        logoSrc="https://static.infragistics.com/marketing/Website/products/ignite-ui/shared/ignite-ui-logo-light-background-horizontal.svg"
        logoSize={0.75}
        className="!light-qr-code [--ig-qr-code-dark-color:#0f172a] [--ig-qr-code-background:#ffffff] [--ig-qr-code-corner-square-color:#0f172a] [--ig-qr-code-corner-dot-color:#0f172a]"
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<QrCodeTailwindStyling />);
