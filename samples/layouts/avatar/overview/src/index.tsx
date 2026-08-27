import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrAvatar, IgrBadge } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function AvatarOverview() {
  return (
    <div className="sample avatar-overview-sample">
      <IgrAvatar
        shape="circle"
        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
        alt="A profile photo of a man."
      />
      <IgrAvatar
        className="profile-status"
        shape="circle"
        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png"
        alt="A profile photo of a woman."
      />
      <IgrBadge className="status-badge" dot={true} outlined={true} variant="success" />
      <span className="avatar-stack" aria-label="Project members">
        <IgrAvatar
          shape="circle"
          src="https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png"
          alt="A profile photo of an animated kid."
        />
        <IgrAvatar
          shape="circle"
          src="https://dl.infragistics.com/x/img/avatars/avatar-profile-03.png"
          alt="A profile photo of a man."
        />
        <IgrAvatar
          shape="circle"
          src="https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png"
          alt="A profile photo of an abstract flat cat."
        />
        <IgrAvatar
          shape="circle"
          initials="+3"
          alt="Three additional project members."
        />
      </span>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AvatarOverview />);
