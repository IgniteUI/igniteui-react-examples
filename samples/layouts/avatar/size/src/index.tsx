import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrAvatar, IgrBadge } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function AvatarSize() {
  return (
    <div className="avatar-size-sample">
      <IgrAvatar
        shape="circle"
        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-05.png"
        alt="A profile photo of a man."
      />
      <IgrBadge dot={true} outlined={true} variant="success" />
      <span>Large</span>

      <IgrAvatar
        shape="circle"
        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-03.png"
        alt="A profile photo of a man."
      />
      <IgrBadge dot={true} outlined={true} variant="success" />
      <span>Medium</span>

      <IgrAvatar
        shape="circle"
        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
        alt="A profile photo of a man."
      />
      <IgrBadge dot={true} outlined={true} variant="success" />
      <span>Small</span>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AvatarSize />);
