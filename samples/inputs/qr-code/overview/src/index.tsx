import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrQrCode, IgrRadio, IgrRadioGroup, IgrSwitch } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const logoSrc =
  "https://static.infragistics.com/marketing/Website/products/ignite-ui/shared/ignite-ui-logo-light-background-horizontal.svg";

type DotShape = "square" | "circle" | "rounded";

export default function QrCodeOverview() {
  const [shape, setShape] = useState<DotShape>("square");
  const [size, setSize] = useState(300);
  const [logoEnabled, setLogoEnabled] = useState(true);

  return (
    <div className="container sample">
      <div className="qr-controls">
        <IgrRadioGroup alignment="horizontal">
          <IgrRadio
            name="shape"
            value="square"
            checked={shape === "square"}
            onChange={(e: any) => e.detail.checked && setShape("square")}
          >
            Square
          </IgrRadio>
          <IgrRadio
            name="shape"
            value="circle"
            checked={shape === "circle"}
            onChange={(e: any) => e.detail.checked && setShape("circle")}
          >
            Circle
          </IgrRadio>
          <IgrRadio
            name="shape"
            value="rounded"
            checked={shape === "rounded"}
            onChange={(e: any) => e.detail.checked && setShape("rounded")}
          >
            Rounded
          </IgrRadio>
        </IgrRadioGroup>
        <IgrRadioGroup alignment="horizontal">
          <IgrRadio
            name="size"
            value="120"
            checked={size === 120}
            onChange={(e: any) => e.detail.checked && setSize(120)}
          >
            Small
          </IgrRadio>
          <IgrRadio
            name="size"
            value="180"
            checked={size === 180}
            onChange={(e: any) => e.detail.checked && setSize(180)}
          >
            Medium
          </IgrRadio>
          <IgrRadio
            name="size"
            value="240"
            checked={size === 240}
            onChange={(e: any) => e.detail.checked && setSize(240)}
          >
            Large
          </IgrRadio>
          <IgrRadio
            name="size"
            value="300"
            checked={size === 300}
            onChange={(e: any) => e.detail.checked && setSize(300)}
          >
            Extra large
          </IgrRadio>
        </IgrRadioGroup>
        <IgrSwitch
          labelPosition="before"
          checked={logoEnabled}
          onChange={(e: any) => setLogoEnabled(e.detail.checked)}
        >
          Logo
        </IgrSwitch>
      </div>
      <IgrQrCode
        value="https://www.infragistics.com/products/ignite-ui-web-components"
        size={size}
        dotStyle={shape}
        squareStyle={shape}
        logoMargin={3}
        errorLevel="H"
        logoSrc={logoEnabled ? logoSrc : undefined}
        logoSize={1}
      />
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<QrCodeOverview />);
