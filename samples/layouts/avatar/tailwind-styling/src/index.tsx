import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrAvatar,
  IgrButton,
  IgrCard,
  IgrCardActions,
  IgrCardContent,
  IgrCardHeader,
  IgrCardMedia,
  IgrDivider,
  IgrIcon,
  IgrIconButton,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { berealIcon, instagramIcon, plusIcon, threadsIcon } from "./icons";

const profileStats = [
  { value: "23.9K", label: "Likes" },
  { value: "163", label: "Posts" },
  { value: "23.9K", label: "Views" },
];

export default function AvatarTailwindStyling() {
  useEffect(() => {
    registerIconFromText("instagram", instagramIcon, "material");
    registerIconFromText("bereal", berealIcon, "material");
    registerIconFromText("threads", threadsIcon, "material");
    registerIconFromText("plus", plusIcon, "material");
  }, []);

  return (
    <div className='sample font-["Aktiv_Grotesk",Arial,sans-serif]'>
      <IgrCard className="[--ig-card-border-radius:30px] [--ig-card-outline-color:transparent]">
        <IgrCardMedia className="h-[189px]">
          <img
            className="object-cover"
            src="https://dl.infragistics.com/x/img/avatars/image-bg4.png"
            alt="Cafe interior"
          />
        </IgrCardMedia>
        <IgrCardHeader>
          <IgrAvatar
            className="[--ig-size:var(--ig-size-medium)]"
            slot="thumbnail"
            shape="circle"
            src="https://dl.infragistics.com/x/img/avatars/avatar-profile-09.png"
            alt="A profile photo of Kate Thompson."
          />
          <span slot="title">Kate Thompson</span>
        </IgrCardHeader>
        <p className="card-sample-custom-subtitle">
          3D Artist. Turning polygons into worlds and immersive digital
          realities
        </p>
        <IgrCardContent>
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr]">
            {profileStats.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <div className="flex min-w-0 flex-col items-center gap-1 px-3">
                  <span className="stats-title">{stat.value}</span>
                  <span className="stats-subtitle">{stat.label}</span>
                </div>
                {index < profileStats.length - 1 && (
                  <IgrDivider className="h-12" vertical />
                )}
              </React.Fragment>
            ))}
          </div>
        </IgrCardContent>
        <IgrCardActions>
          <IgrButton className="[--ig-contained-button-active-background:var(--ig-gray-400)] [--ig-contained-button-background:var(--ig-gray-200)] [--ig-contained-button-border-radius:16px] [--ig-contained-button-focus-background:var(--ig-gray-300)] [--ig-contained-button-hover-background:var(--ig-gray-300)] [--ig-size:var(--ig-size-small)]">
            <span className="inline-flex items-center gap-1">
              <span>FOLLOW</span>
              <IgrIcon name="plus" collection="material" />
            </span>
          </IgrButton>
          <div slot="end" className="inline-flex gap-1">
            <IgrIconButton
              variant="flat"
              name="instagram"
              collection="material"
              aria-label="Open Instagram profile"
            />
            <IgrIconButton
              variant="flat"
              name="bereal"
              collection="material"
              aria-label="Open BeReal profile"
            />
            <IgrIconButton
              variant="flat"
              name="threads"
              collection="material"
              aria-label="Open Threads profile"
            />
          </div>
        </IgrCardActions>
      </IgrCard>

      <IgrCard className="[--ig-card-border-radius:30px] [--ig-card-outline-color:transparent]">
        <IgrCardHeader>
          <span
            slot="thumbnail"
            className="inline-flex rounded-full p-[5px] bg-[linear-gradient(40deg,#D2F586,#A0C9FF)]"
          >
            <IgrAvatar
              className="[--ig-size:var(--ig-size-medium)]"
              shape="circle"
              src="https://dl.infragistics.com/x/img/avatars/avatar-profile-09.png"
              alt="A profile photo of Kate Thompson."
            />
          </span>
          <span slot="title">Kate Thompson</span>
        </IgrCardHeader>
        <p className="card-sample-custom-subtitle">
          3D Artist. Turning polygons into worlds and immersive digital
          realities
        </p>
        <IgrCardContent>
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr]">
            {profileStats.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <div className="flex min-w-0 flex-col items-center gap-1 px-3">
                  <span className="stats-title">{stat.value}</span>
                  <span className="stats-subtitle">{stat.label}</span>
                </div>
                {index < profileStats.length - 1 && (
                  <IgrDivider className="h-12" vertical />
                )}
              </React.Fragment>
            ))}
          </div>
        </IgrCardContent>
        <IgrCardActions>
          <IgrButton className="[--ig-contained-button-active-background:var(--ig-gray-400)] [--ig-contained-button-background:var(--ig-gray-200)] [--ig-contained-button-border-radius:16px] [--ig-contained-button-focus-background:var(--ig-gray-300)] [--ig-contained-button-hover-background:var(--ig-gray-300)] [--ig-size:var(--ig-size-small)]">
            <span className="inline-flex items-center gap-1">
              <span>FOLLOW</span>
              <IgrIcon name="plus" collection="material" />
            </span>
          </IgrButton>
          <div slot="end" className="inline-flex items-center gap-1">
            <IgrIconButton
              variant="flat"
              name="instagram"
              collection="material"
              aria-label="Open Instagram profile"
            />
            <IgrIconButton
              variant="flat"
              name="bereal"
              collection="material"
              aria-label="Open BeReal profile"
            />
            <IgrIconButton
              variant="flat"
              name="threads"
              collection="material"
              aria-label="Open Threads profile"
            />
          </div>
        </IgrCardActions>
      </IgrCard>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AvatarTailwindStyling />);
