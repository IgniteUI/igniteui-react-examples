import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const homeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const notificationsIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>';

export default function BreadcrumbsOverview() {
  useEffect(() => {
    registerIconFromText("home", homeIcon);
    registerIconFromText("notifications", notificationsIcon);
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
            <IgrIcon slot="prefix" name="notifications" />
            <a href="/home/item" onClick={(e) => e.preventDefault()}>Item</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="notifications" />
            <a href="/home/item/item" onClick={(e) => e.preventDefault()}>Item</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="notifications" />
            <a href="/home/item/item/item" onClick={(e) => e.preventDefault()}>Item</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb current={true}>
            <IgrIcon slot="prefix" name="notifications" />
            <a href="/home/item/item/item/current" onClick={(e) => e.preventDefault()}>Current Item</a>
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsOverview />);
