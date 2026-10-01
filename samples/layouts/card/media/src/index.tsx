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

const directionsBusIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"></path></svg>';

const directionsCarIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></svg>';

const flightIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></svg>';

const placeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>';

const pinRightIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(-45 12 12)"><path d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"></path></g></svg>';

export default function CardMedia() {
  useEffect(() => {
    registerIconFromText("videocam", videocamIcon, "material");
    registerIconFromText("bluetooth", bluetoothIcon, "material");
    registerIconFromText("volume-off", volumeOffIcon, "material");
    registerIconFromText("directions-bus", directionsBusIcon, "material");
    registerIconFromText("directions-car", directionsCarIcon, "material");
    registerIconFromText("flight", flightIcon, "material");
    registerIconFromText("place", placeIcon, "material");
    registerIconFromText("pin-right", pinRightIcon, "material");
  }, []);

  return (
    <div className="container sample card-container">
      <IgrCard className="media-card">
        <IgrCardMedia className="media-card__media">
          <img
            src="https://dl.infragistics.com/x/img/card/media/the_red_ice_forest.jpg"
            alt="A meeting room with a long table and chairs"
          />
        </IgrCardMedia>
        <IgrCardHeader>
          <span slot="title">Book your meeting room</span>
          <span slot="subtitle">Max 15 seats / 10 m2</span>
        </IgrCardHeader>
        <IgrCardActions>
          <div slot="start" className="media-card__icons">
            <IgrIcon name="videocam" collection="material" />
            <IgrIcon name="bluetooth" collection="material" />
            <IgrIcon name="volume-off" collection="material" />
          </div>
          <IgrButton slot="end" variant="flat" className="media-card__action">
            Book now
          </IgrButton>
        </IgrCardActions>
      </IgrCard>

      <IgrCard className="media-card">
        <IgrCardMedia className="media-card__media">
          <img
            src="https://dl.infragistics.com/x/img/card/media/yosemite.jpg"
            alt="A street map with the event space marked"
          />
        </IgrCardMedia>
        <IgrCardHeader>
          <span slot="title">Main Event Space</span>
          <span slot="subtitle">Floor 4, Suite 402</span>
        </IgrCardHeader>
        <IgrCardActions>
          <div slot="start" className="media-card__icons">
            <IgrIcon name="directions-bus" collection="material" />
            <IgrIcon name="directions-car" collection="material" />
            <IgrIcon name="flight" collection="material" />
          </div>
          <IgrButton slot="end" variant="flat" className="media-card__action">
            Get directions
          </IgrButton>
        </IgrCardActions>
      </IgrCard>

      <IgrCard className="media-card">
        <IgrCardMedia className="media-card__media">
          <img
            src="https://dl.infragistics.com/x/img/card/media/the_red_ice_forest.jpg"
            alt="A map of Europe showing the sales region"
          />
        </IgrCardMedia>
        <IgrCardHeader>
          <span slot="title">View your coverage area</span>
          <span slot="subtitle">Sales region</span>
        </IgrCardHeader>
        <IgrCardActions>
          <div slot="start" className="media-card__icons">
            <IgrIcon name="place" collection="material" />
            <IgrIcon name="pin-right" collection="material" />
          </div>
          <IgrButton slot="end" variant="flat" className="media-card__action">
            See details
          </IgrButton>
        </IgrCardActions>
      </IgrCard>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardMedia />);
