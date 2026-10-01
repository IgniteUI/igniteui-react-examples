import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb, IgrIcon, IgrBadge, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

const homeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

export default function BreadcrumbsPrefixSuffix() {
  useEffect(() => {
    registerIconFromText("home", homeIcon);
  }, []);

  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <a href="/home/profile" onClick={(e) => e.preventDefault()}>Mail</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <a href="/home/profile" onClick={(e) => e.preventDefault()}>Messages</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb current={true}>
            <a href="/home/inbox" onClick={(e) => e.preventDefault()}>Inbox</a>
            <IgrBadge slot="suffix" outlined={true} variant="danger">3</IgrBadge>
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsPrefixSuffix />);
