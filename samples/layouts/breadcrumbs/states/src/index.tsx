import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const homeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

export default function BreadcrumbsStates() {
  useEffect(() => {
    registerIconFromText("home", homeIcon);
  }, []);

  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs>
          <span>Idle</span>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs>
          <span>Hover</span>
          <IgrBreadcrumb className="state-hover">
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs>
          <span>Focused</span>
          <IgrBreadcrumb className="state-focused">
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs>
          <span>Pressed</span>
          <IgrBreadcrumb className="state-pressed">
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs>
          <span>Focused &amp; Hover</span>
          <IgrBreadcrumb className="state-focused-hover">
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs>
          <span>Focused &amp; Pressed</span>
          <IgrBreadcrumb className="state-focused-pressed">
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs>
          <span>Disabled</span>
          <IgrBreadcrumb className="state-disabled">
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsStates />);
