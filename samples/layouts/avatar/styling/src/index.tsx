import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrList,
  IgrListHeader,
  IgrListItem,
  IgrAvatar,
  IgrBadge,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";
import {
  calendarTodayIcon,
  checkIcon,
  horizontalRuleIcon,
  peopleIcon,
  xIcon,
} from "./icons";

type AvatarListItem = {
  title: string;
  subtitle: string;
  end: string;
  avatar: {
    src?: string;
    icon?: string;
    initials?: string;
    alt: string;
    className?: string;
  };
  badge?: {
    icon: string;
    variant: "success" | "info" | "warning" | "danger" | "primary";
    className?: string;
  };
};

type AvatarListSection = {
  header: string;
  items: AvatarListItem[];
};

const sections: AvatarListSection[] = [
  {
    header: "Chats",
    items: [
      {
        title: "Nick Evans",
        subtitle: "Hi Samira, thanks for the ...",
        end: "9:44 AM",
        avatar: {
          src: "https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png",
          alt: "A profile photo of Nick Evans.",
        },
        badge: {
          icon: "check",
          variant: "success",
        },
      },
      {
        title: "James Ford",
        subtitle: "I'll send the text and im ...",
        end: "8:30 AM",
        avatar: {
          initials: "JF",
          alt: "A profile photo of Nick Evans.",
          className: "avatar-muted",
        },
        badge: {
          icon: "x",
          variant: "primary",
          className: "avatar-muted-badge",
        },
      },
      {
        title: "Kate Porter",
        subtitle: "That's great!",
        end: "Yesterday",
        avatar: {
          src: "https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png",
          alt: "A profile photo of Nick Evans.",
        },
        badge: {
          icon: "horizontalRule",
          variant: "danger",
        },
      },
    ],
  },
  {
    header: "Meetings",
    items: [
      {
        title: "Weekly Meeting",
        subtitle: "https://www.infra.com",
        end: "Monday",
        avatar: {
          icon: "calendar",
          alt: "Calendar Icon.",
          className: "avatar-meeting",
        },
      },
      {
        title: "Design Discussion",
        subtitle: "https://www.infra.com",
        end: "11:30 AM",
        avatar: {
          icon: "people",
          alt: "Group Icon.",
          className: "avatar-meeting",
        },
      },
    ],
  },
];

function renderAvatar(item: AvatarListItem) {
  return (
    <IgrAvatar
      className={`size-small${item.avatar.className ? ` ${item.avatar.className}` : ""}`}
      shape="circle"
      src={item.avatar.src}
      initials={item.avatar.initials}
      alt={item.avatar.alt}
    >
      {item.avatar.icon && (
        <IgrIcon className="avatar-icon size-small" name={item.avatar.icon} collection="material" />
      )}
    </IgrAvatar>
  );
}

export default function AvatarStyling() {
  useEffect(() => {
    registerIconFromText("calendar", calendarTodayIcon, "material");
    registerIconFromText("check", checkIcon, "material");
    registerIconFromText("x", xIcon, "material");
    registerIconFromText("horizontalRule", horizontalRuleIcon, "material");
    registerIconFromText("people", peopleIcon, "material");
  }, []);

  return (
    <div className="container sample">
      <IgrList className="chat-list">
        {sections.map((section) => (
          <React.Fragment key={section.header}>
            <IgrListHeader>{section.header}</IgrListHeader>
            {section.items.map((item) => (
              <IgrListItem
                className={section.header === "Chats" ? "chat-list-item--split" : undefined}
                key={`${section.header}-${item.title}-${item.end}`}
              >
                <div className="avatar-with-badge" slot="start">
                  {renderAvatar(item)}
                  {item.badge && (
                    <IgrBadge
                      className={`avatar-status avatar-check-badge size-small${
                        item.badge.className ? ` ${item.badge.className}` : ""
                      }`}
                      outlined={true}
                      shape="rounded"
                      variant={item.badge.variant}
                    >
                      <IgrIcon name={item.badge.icon} collection="material" />
                    </IgrBadge>
                  )}
                </div>
                <h2 slot="title">{item.title}</h2>
                <span slot="subtitle">{item.subtitle}</span>
                <div slot="end">{item.end}</div>
              </IgrListItem>
            ))}
          </React.Fragment>
        ))}
      </IgrList>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AvatarStyling />);
