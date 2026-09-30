import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb } from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

export default function BreadcrumbsWrapping() {
  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs>
          <IgrBreadcrumb>
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <a href="/home/billing" onClick={(e) => e.preventDefault()}>Billing</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <a href="/home/billing/subscriptions" onClick={(e) => e.preventDefault()}>Subscriptions</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb current={true}>
            <a href="/home/billing/subscriptions/add-seats" onClick={(e) => e.preventDefault()}>How to add seats to an existing subscription</a>
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsWrapping />);
