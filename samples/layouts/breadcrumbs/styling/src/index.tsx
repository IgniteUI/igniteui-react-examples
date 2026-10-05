import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const homeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const musicNoteIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>';

export default function BreadcrumbsStyling() {
  useEffect(() => {
    registerIconFromText("home", homeIcon);
    registerIconFromText("music_note", musicNoteIcon);
  }, []);

  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs separator="music_note">
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb><a href="/home/item" onClick={(e) => e.preventDefault()}>Item</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/home/item/item" onClick={(e) => e.preventDefault()}>Item</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/home/item/item/item" onClick={(e) => e.preventDefault()}>Item</a></IgrBreadcrumb>
          <IgrBreadcrumb current={true}><a href="/home/item/item/item/current" onClick={(e) => e.preventDefault()}>Current Item</a></IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsStyling />);
