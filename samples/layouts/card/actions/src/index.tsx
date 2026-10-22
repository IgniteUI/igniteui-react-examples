import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrAvatar,
  IgrCard,
  IgrCardActions,
  IgrCardContent,
  IgrCardHeader,
  IgrIconButton,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const favoriteIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>';

const bookmarkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></svg>';

const linkedinIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>';

export default function CardActions() {
  useEffect(() => {
    registerIconFromText("favorite", favoriteIcon, "material");
    registerIconFromText("bookmark", bookmarkIcon, "material");
    registerIconFromText("linkedin", linkedinIcon, "material");
  }, []);

  return (
    <div className="container sample card-container">
      <div className="card-item">
        <span className="card-item__label">Horizontal actions (default)</span>

        <IgrCard className="post-card">
          <IgrCardHeader>
            <IgrAvatar
              slot="thumbnail"
              shape="circle"
              src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png"
            />
            <span slot="title">Lena Fischer</span>
            <span slot="subtitle">@lena &middot; 2h ago</span>
          </IgrCardHeader>
          <IgrCardContent>
            <p>
              Just shipped our new design system &#128640; Six months of tokens,
              components, and documentation &mdash; and it&rsquo;s finally live.
              So proud of the team.
            </p>
          </IgrCardContent>
          <IgrCardActions orientation="horizontal">
            <IgrIconButton
              slot="end"
              variant="flat"
              name="favorite"
              collection="material"
              aria-label="Like"
            />
            <IgrIconButton
              slot="end"
              variant="flat"
              name="bookmark"
              collection="material"
              aria-label="Save"
            />
            <IgrIconButton
              slot="end"
              variant="flat"
              name="linkedin"
              collection="material"
              aria-label="Share on LinkedIn"
            />
          </IgrCardActions>
        </IgrCard>
      </div>

      <div className="card-item">
        <span className="card-item__label">Vertical actions</span>

        <IgrCard className="post-card post-card--vertical">
          <div className="post-card__body">
            <IgrCardHeader>
              <IgrAvatar
                slot="thumbnail"
                shape="circle"
                src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png"
              />
              <span slot="title">Lena Fischer</span>
              <span slot="subtitle">@lena &middot; 2h ago</span>
            </IgrCardHeader>
            <IgrCardContent>
              <p>
                Just shipped our new design system &#128640; Six months of
                tokens, components, and documentation &mdash; and it&rsquo;s
                finally live. So proud of the team.
              </p>
            </IgrCardContent>
          </div>

          <IgrCardActions orientation="vertical">
            <IgrIconButton
              variant="flat"
              name="favorite"
              collection="material"
              aria-label="Like"
            />
            <IgrIconButton
              variant="flat"
              name="bookmark"
              collection="material"
              aria-label="Save"
            />
            <IgrIconButton
              variant="flat"
              name="linkedin"
              collection="material"
              aria-label="Share on LinkedIn"
            />
          </IgrCardActions>
        </IgrCard>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardActions />);
