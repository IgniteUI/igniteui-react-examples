import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrBreadcrumbs,
  IgrBreadcrumb,
  IgrDropdown,
  IgrDropdownItem,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const threeDotsIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"></path></svg>';

const folderIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></svg>';

export default function BreadcrumbsDropdown() {
  useEffect(() => {
    registerIconFromText("three-dots", threeDotsIcon);
    registerIconFromText("folder", folderIcon);
  }, []);

  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs>
          <IgrBreadcrumb>
            <a href="/my-drive" onClick={(e) => e.preventDefault()}>My drive</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <IgrDropdown distance={10}>
              <IgrIcon slot="target" name="three-dots" />
              <IgrDropdownItem>
                <IgrIcon name="folder" slot="prefix" />
                Projects
              </IgrDropdownItem>
              <IgrDropdownItem>
                <IgrIcon name="folder" slot="prefix" />
                Website redesign
              </IgrDropdownItem>
            </IgrDropdown>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <a href="/my-drive/assets" onClick={(e) => e.preventDefault()}>Assets</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb current={true}>
            <a href="/my-drive/assets/icons" onClick={(e) => e.preventDefault()}>Icons</a>
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsDropdown />);
