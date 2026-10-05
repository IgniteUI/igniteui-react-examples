import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const slashIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M12.8535 3C13.3976 3 13.7655 3.55489 13.5537 4.05604L7.85788 17.5331C7.73829 17.8161 7.46093 18 7.15374 18C6.60638 18 6.23639 17.4416 6.44976 16.9375L12.1535 3.46381C12.2725 3.18266 12.5482 3 12.8535 3Z" fill="currentColor"/></svg>';

export default function BreadcrumbsTailwindStyling() {
  useEffect(() => {
    registerIconFromText("slash", slashIcon);
  }, []);

  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs
          separator="slash"
          className="!light-breadcrumb ![--ig-breadcrumb-text-color:var(--ig-primary-50)] ![--ig-breadcrumb-hover-text-color:var(--ig-primary-50)] ![--ig-breadcrumb-focus-text-color:var(--ig-primary-50)] ![--ig-breadcrumb-current-text-color:var(--ig-primary-200)] ![--ig-breadcrumb-separator-color:var(--ig-primary-200)] ![--ig-breadcrumb-focus-pressed-text-color:var(--ig-primary-50)] ![padding:0.5rem_1.125rem] ![background:#002146] ![border-radius:3.125rem] max-[235px]:![border-radius:0]"
        >
          <IgrBreadcrumb><a href="/" onClick={(e) => e.preventDefault()}>Home</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/electronics" onClick={(e) => e.preventDefault()}>Electronics</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/electronics/audio" onClick={(e) => e.preventDefault()}>Audio</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/electronics/audio/headphones" onClick={(e) => e.preventDefault()}>Headphones</a></IgrBreadcrumb>
          <IgrBreadcrumb current={true}><a href="/electronics/audio/headphones/sony-x" onClick={(e) => e.preventDefault()}>Sony X Wireless</a></IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsTailwindStyling />);
