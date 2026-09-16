import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrCard,
  IgrCardHeader,
  IgrCardContent,
  IgrCardActions,
  IgrButton,
  IgrIconButton,
  IgrRipple,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import {
  bookmarkIcon,
  moreIcon,
  scheduleIcon,
  shareIcon,
  visibilityIcon,
} from "./icons";

export default function CardActions() {
  useEffect(() => {
    registerIconFromText("bookmark", bookmarkIcon, "material");
    registerIconFromText("share", shareIcon, "material");
    registerIconFromText("schedule", scheduleIcon, "material");
    registerIconFromText("visibility", visibilityIcon, "material");
    registerIconFromText("more", moreIcon, "material");
  }, []);

  return (
    <div className="container sample actions-sample">
      <div className="actions-card">
        <IgrCard>
          <IgrCardHeader>
            <span slot="title">Design Review</span>
            <span slot="subtitle">Today, 2:30 PM</span>
          </IgrCardHeader>
          <IgrCardContent>
            <p>Review the latest card layouts and approve the selected direction.</p>
          </IgrCardContent>
          <IgrCardActions>
            <IgrButton slot="start" variant="contained">Open</IgrButton>
            <IgrButton variant="flat">Dismiss</IgrButton>
            <div slot="end" className="icon-actions">
              <IgrIconButton name="bookmark" collection="material" variant="flat">
                <IgrRipple />
              </IgrIconButton>
              <IgrIconButton name="share" collection="material" variant="flat">
                <IgrRipple />
              </IgrIconButton>
            </div>
          </IgrCardActions>
        </IgrCard>
      </div>

      <div className="actions-card rail-card">
        <IgrCard>
          <div className="rail-layout">
            <div>
              <IgrCardHeader>
                <span slot="title">Publish Queue</span>
                <span slot="subtitle">3 items waiting</span>
              </IgrCardHeader>
              <IgrCardContent>
                <p>Review queued items before publishing.</p>
              </IgrCardContent>
            </div>

            <IgrCardActions orientation="vertical" className="action-rail">
              <IgrIconButton name="schedule" collection="material" variant="flat" aria-label="Schedule">
                <IgrRipple />
              </IgrIconButton>
              <IgrIconButton name="visibility" collection="material" variant="flat" aria-label="Preview">
                <IgrRipple />
              </IgrIconButton>
              <IgrIconButton name="more" collection="material" variant="flat" aria-label="More options">
                <IgrRipple />
              </IgrIconButton>
            </IgrCardActions>
          </div>
        </IgrCard>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardActions />);
