import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrAvatar,
  IgrBadge,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

const mailIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>';

const checkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m9 16.17-4.17-4.17-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z"/></svg>';

export default function AvatarShape() {
  useEffect(() => {
    registerIconFromText("mail", mailIcon, "material");
    registerIconFromText("check", checkIcon, "material");
  }, []);

  return (
    <div className="avatar-overview-sample">
      <div className="avatar-variant">
        <span className="avatar-with-badge">
          <IgrAvatar
            className="size-small"
            shape="circle"
            src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png"
            alt="A profile photo of a man."
          />
          <IgrBadge
            className="avatar-status avatar-dot-badge size-small"
            dot={true}
            outlined={true}
            variant="success"
          />
        </span>
        <span className="avatar-label">Circle</span>
      </div>

      <div className="avatar-variant">
        <span className="avatar-with-badge">
          <IgrAvatar className="size-small" shape="square">
            <IgrIcon name="mail" collection="material" />
          </IgrAvatar>
          <IgrBadge
            className="avatar-status avatar-count-badge size-small"
            outlined={true}
            shape="square"
            variant="info"
          >
            2
          </IgrBadge>
        </span>
        <span className="avatar-label">Square</span>
      </div>

      <div className="avatar-variant">
        <span className="avatar-with-badge">
          <IgrAvatar
            className="size-small"
            shape="rounded"
            src="https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png"
            alt="A profile photo of a man."
          />
          <IgrBadge
            className="avatar-status avatar-check-badge size-small"
            outlined={true}
            shape="rounded"
            variant="success"
          >
            <IgrIcon name="check" collection="material" />
          </IgrBadge>
        </span>
        <span className="avatar-label">Rounded</span>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AvatarShape />);
