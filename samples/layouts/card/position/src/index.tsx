import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrButton,
  IgrCard,
  IgrCardActions,
  IgrCardHeader,
  IgrCardMedia,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const videocamIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></svg>';

const bluetoothIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"></path></svg>';

const volumeOffIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></svg>';

const roomImage = "https://dl.infragistics.com/x/img/card/card-2.png";

export default function CardPosition() {
  useEffect(() => {
    registerIconFromText("videocam", videocamIcon, "material");
    registerIconFromText("bluetooth", bluetoothIcon, "material");
    registerIconFromText("volume-off", volumeOffIcon, "material");
  }, []);

  return (
    <div className="container sample card-container">
      <div className="card-item">
        <span className="card-item__label">Media before header</span>

        <IgrCard className="position-card">
          <IgrCardMedia className="position-card__media">
            <img src={roomImage} alt="A meeting room with a long table and chairs" />
          </IgrCardMedia>
          <IgrCardHeader>
            <span slot="title">Book your meeting room</span>
            <span slot="subtitle">Max 15 seats / 10 m2</span>
          </IgrCardHeader>
          <IgrCardActions>
            <div slot="start" className="position-card__icons">
              <IgrIcon name="videocam" collection="material" />
              <IgrIcon name="bluetooth" collection="material" />
              <IgrIcon name="volume-off" collection="material" />
            </div>
            <IgrButton slot="end" variant="flat" className="position-card__action">
              Book now
            </IgrButton>
          </IgrCardActions>
        </IgrCard>
      </div>

      <div className="card-item">
        <span className="card-item__label">Media after header</span>

        <IgrCard className="position-card">
          <IgrCardHeader>
            <span slot="title">Book your meeting room</span>
            <span slot="subtitle">Max 15 seats / 10 m2</span>
          </IgrCardHeader>
          <IgrCardMedia className="position-card__media">
            <img src={roomImage} alt="A meeting room with a long table and chairs" />
          </IgrCardMedia>
          <IgrCardActions>
            <div slot="start" className="position-card__icons">
              <IgrIcon name="videocam" collection="material" />
              <IgrIcon name="bluetooth" collection="material" />
              <IgrIcon name="volume-off" collection="material" />
            </div>
            <IgrButton slot="end" variant="flat" className="position-card__action">
              Book now
            </IgrButton>
          </IgrCardActions>
        </IgrCard>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardPosition />);
