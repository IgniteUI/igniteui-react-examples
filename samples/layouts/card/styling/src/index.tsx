import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrCard,
  IgrCardActions,
  IgrCardContent,
  IgrCardHeader,
  IgrCardMedia,
  IgrChip,
  IgrIcon,
  IgrIconButton,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const trendingUpIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>';

const linkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>';

const moreVertIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>';

export default function CardStyling() {
  useEffect(() => {
    registerIconFromText("trending-up", trendingUpIcon, "material");
    registerIconFromText("link", linkIcon, "material");
    registerIconFromText("more-vert", moreVertIcon, "material");
  }, []);

  return (
    <div className="container sample">
      <IgrCard className="balance-card">
        <IgrChip className="trend-chip">
          <IgrIcon slot="prefix" name="trending-up" collection="material" />
          <span>+12.4%</span>
        </IgrChip>
        <IgrCardHeader>
          <span slot="title">Total balance</span>
        </IgrCardHeader>
        <IgrCardContent>
          <span className="balance-amount">$24,860</span>
        </IgrCardContent>
        <IgrCardActions>
          <div slot="end" className="balance-actions">
            <IgrIconButton
              variant="flat"
              name="link"
              collection="material"
              aria-label="Copy account link"
            />
            <IgrIconButton
              variant="flat"
              name="more-vert"
              collection="material"
              aria-label="More options"
            />
          </div>
        </IgrCardActions>
      </IgrCard>

      <IgrCard className="support-card">
        <IgrChip className="support-tag">Support</IgrChip>
        <IgrCardMedia className="support-media">
          <img
            src="https://dl.infragistics.com/x/img/avatars/image-bg4.png"
            alt="Support agent reviewing system dashboards on a laptop"
          />
        </IgrCardMedia>
        <IgrCardHeader>
          <span slot="title">Review the issue and check system logs</span>
        </IgrCardHeader>
        <IgrCardActions>
          <span className="support-link">Find out more</span>
        </IgrCardActions>
      </IgrCard>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardStyling />);
