import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrSelect,
  IgrSelectItem,
  IgrIcon,
  IgrSelectGroup,
  registerIconFromText,
} from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const placeSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/></svg>';

export default function SelectGroup() {

  useEffect(() => {
    registerIconFromText("place", placeSvg, "material");
  }, []);

  return (
    <div className="sample">
      <IgrSelect label="Destinations:">
        <span slot="prefix">
          <IgrIcon name="place" collection="material"></IgrIcon>
        </span>
        <span slot="helper-text">Choose the desired place</span>
        
        <IgrSelectGroup disabled>
          <span slot="label">Europe</span>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Germany </span>
          </IgrSelectItem>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> France </span>
          </IgrSelectItem>
          <IgrSelectItem selected>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Spain </span>
          </IgrSelectItem>
        </IgrSelectGroup>

        <IgrSelectGroup>
          <span slot="label">North America</span>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> USA </span>
          </IgrSelectItem>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Canada </span>
          </IgrSelectItem>
          <IgrSelectItem>
            <span slot="prefix">
              <IgrIcon name="place" collection="material"></IgrIcon>
            </span>
            <span> Mexico </span>
          </IgrSelectItem>
        </IgrSelectGroup>
      </IgrSelect>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SelectGroup />);
