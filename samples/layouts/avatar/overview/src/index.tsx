import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrAvatar, IgrBadge } from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

export default function AvatarOverview() {
  return (
    <div className="sample avatar-overview-sample">
      <IgrAvatar
        className="size-large"
        shape="circle"
        src="https://dl.infragistics.com/x/img/people/men/11.png"
        alt="A profile photo of a man."
      />
      <span className="avatar-with-badge">
        <IgrAvatar
          className="size-large"
          shape="circle"
          src="https://dl.infragistics.com/x/img/people/men/11.png"
          alt="A profile photo of a man."
        />
        <IgrBadge
          className="avatar-status size-large"
          dot={true}
          outlined={true}
          variant="success"
        />
      </span>
      <span className="avatar-stack" aria-label="Project members">
        <IgrAvatar
          className="size-large"
          shape="circle"
          src="https://dl.infragistics.com/x/img/people/men/11.png"
          alt="A profile photo of a man."
        />
        <IgrAvatar
          className="size-large"
          shape="circle"
          src="https://dl.infragistics.com/x/img/people/men/11.png"
          alt="A profile photo of a man."
        />
        <IgrAvatar
          className="size-large"
          shape="circle"
          src="https://dl.infragistics.com/x/img/people/men/11.png"
          alt="A profile photo of a man."
        />
        <IgrAvatar
          className="size-large"
          shape="circle"
          initials="+3"
          alt="A profile photo of a man."
        />
      </span>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AvatarOverview />);
