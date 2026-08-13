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
  IgrRipple,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { facebookIcon, instagramIcon, twitterIcon } from "./icons";

export default function CardStyling() {
  useEffect(() => {
    registerIconFromText("facebook", facebookIcon, "material");
    registerIconFromText("twitter", twitterIcon, "material");
    registerIconFromText("instagram", instagramIcon, "material");
  }, []);

  return (
    <div className="container sample center">
      <div className="card-wrapper">
        <IgrCard>
          <IgrCardMedia>
            <img src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></img>
          </IgrCardMedia>
          <IgrCardHeader className="header">
            <span slot="title">Jane Doe</span>
            <span slot="subtitle">Professional Photographer</span>
          </IgrCardHeader>
          <IgrCardContent>
            <p>
              Hi! I am Jane, photographer and filmmaker. Photography is a way of
              feeling, of touching, of loving. What you have caught on film is
              captured forever... it remembers little things, long after you
              have forgotten everything.
            </p>
          </IgrCardContent>
          <IgrCardActions>
            <div slot="end">
              <IgrIconButton name="twitter" collection="material">
                <IgrRipple />
              </IgrIconButton>
              <IgrIconButton name="facebook" collection="material">
                <IgrRipple />
              </IgrIconButton>
              <IgrIconButton name="instagram" collection="material">
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
root.render(<CardStyling />);
