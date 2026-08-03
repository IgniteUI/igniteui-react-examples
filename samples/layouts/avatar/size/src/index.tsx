import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrAvatar, IgrBadge } from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

export default function AvatarSize() {
  return (
    <div className="avatar-overview-sample">
      <div className="avatar-variant">
        <span className="avatar-with-badge">
          <IgrAvatar
            className="size-large"
            shape="circle"
            src="https://dl.infragistics.com/x/img/people/men/11.png"
            alt="A profile photo of a man."
          />
          <IgrBadge
            className="avatar-status avatar-dot-badge size-large"
            dot={true}
            outlined={true}
            variant="success"
          />
        </span>
        <span className="avatar-label">Large</span>
      </div>

      <div className="avatar-variant">
        <span className="avatar-with-badge">
          <IgrAvatar
            className="size-medium"
            shape="circle"
            src="https://dl.infragistics.com/x/img/people/men/11.png"
            alt="A profile photo of a man."
          />
          <IgrBadge
            className="avatar-status avatar-dot-badge size-medium"
            dot={true}
            outlined={true}
            variant="success"
          />
        </span>
        <span className="avatar-label">Medium</span>
      </div>

      <div className="avatar-variant">
        <span className="avatar-with-badge">
          <IgrAvatar
            className="size-small"
            shape="circle"
            src="https://dl.infragistics.com/x/img/people/men/11.png"
            alt="A profile photo of a man."
          />
          <IgrBadge
            className="avatar-status avatar-dot-badge size-small"
            dot={true}
            outlined={true}
            variant="success"
          />
        </span>
        <span className="avatar-label">Small</span>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AvatarSize />);
