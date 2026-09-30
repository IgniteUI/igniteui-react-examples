import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

const slashIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M12.8535 3C13.3976 3 13.7655 3.55489 13.5537 4.05604L7.85788 17.5331C7.73829 17.8161 7.46093 18 7.15374 18C6.60638 18 6.23639 17.4416 6.44976 16.9375L12.1535 3.46381C12.2725 3.18266 12.5482 3 12.8535 3Z" fill="currentColor"/></svg>';

export default function BreadcrumbsCustomSeparator() {
  useEffect(() => {
    registerIconFromText("slash", slashIcon);
  }, []);

  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs separator="slash">
          <IgrBreadcrumb><a href="/home" onClick={(e) => e.preventDefault()}>Home</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/home/products" onClick={(e) => e.preventDefault()}>Products</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/home/products/laptops" onClick={(e) => e.preventDefault()}>Laptops</a></IgrBreadcrumb>
          <IgrBreadcrumb current={true}><a href="/home/products/laptops/gaming" onClick={(e) => e.preventDefault()}>Gaming Laptop</a></IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsCustomSeparator />);
