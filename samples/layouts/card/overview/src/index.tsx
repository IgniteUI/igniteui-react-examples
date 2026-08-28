import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrCard,
  IgrCardMedia,
  IgrCardHeader,
  IgrCardContent,
  IgrCardActions,
  IgrIconButton,
  IgrButton,
  IgrRipple,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { facebookIcon, twitterIcon } from "./icons";

export default function CardOverview() {
  useEffect(() => {
    registerIconFromText("twitter", twitterIcon, "material");
    registerIconFromText("facebook", facebookIcon, "material");
  }, []);

  return (
    <div className="container sample center">
      <div className="card-wrapper">
        <IgrCard>
          <IgrCardMedia>
            <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50"></img>
          </IgrCardMedia>
          <IgrCardHeader>
            <span slot="title">New York City</span>
            <span slot="subtitle">City in New York</span>
          </IgrCardHeader>
          <IgrCardContent>
            <p>
              New York City comprises 5 boroughs sitting where the Hudson River
              meets the Atlantic Ocean. At its core is Manhattan, a densely
              populated borough that’s among the world’s major commercial,
              financial and cultural centers.
            </p>
          </IgrCardContent>
          <IgrCardActions>
            <IgrButton>
              <span>Read more</span>
              <IgrRipple />
            </IgrButton>
            <div slot="end">
              <IgrIconButton
                style={{ marginRight: "10px" }}
                name="twitter"
                collection="material"
              >
                <IgrRipple />
              </IgrIconButton>
              <IgrIconButton name="facebook" collection="material">
                <IgrRipple />
              </IgrIconButton>
            </div>
          </IgrCardActions>
        </IgrCard>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardOverview />);
