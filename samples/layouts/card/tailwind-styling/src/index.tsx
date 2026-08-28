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
      <div className="w-[min(320px,100%)] min-w-[220px]">
        <IgrCard className="bg-[#011627]">
          <IgrCardMedia>
            <img src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></img>
          </IgrCardMedia>
          <IgrCardHeader className="[&>*[slot='title']]:text-[#FEFEFE] [&>*[slot='subtitle']]:text-[#ECAA53] [&>*[slot='subtitle']]:opacity-90">
            <span slot="title">Jane Doe</span>
            <span slot="subtitle">Professional Photographer</span>
          </IgrCardHeader>
          <IgrCardContent className="text-[#FEFEFE]">
            <p>
              Hi! I am Jane, photographer and filmmaker. Photography is a way of
              feeling, of touching, of loving. What you have caught on film is
              captured forever... it remembers little things, long after you
              have forgotten everything.
            </p>
          </IgrCardContent>
          <IgrCardActions>
            <div slot="end" className="flex gap-2.5">
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardStyling />);
