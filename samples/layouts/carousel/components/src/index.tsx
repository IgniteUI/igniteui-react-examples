import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrButton,
  IgrButtonModule,
  IgrCarousel,
  IgrCarouselModule,
  IgrCarouselSlide,
  IgrIcon,
  IgrIconModule,
  IgrInput,
  IgrInputModule,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./CarouselComponents.css";
import "./index.css";

IgrButtonModule.register();
IgrCarouselModule.register();
IgrIconModule.register();
IgrInputModule.register();

const icons = [
  {
    name: "person",
    iconText:
      '<svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"/></svg>',
  },
  {
    name: "password",
    iconText:
      '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8ZM14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z"/></svg>',
  },
  {
    name: "search",
    iconText:
      '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>',
  },
];

export default function CarouselComponents() {
  useEffect(() => {
    icons.forEach((icon) => {
      registerIconFromText(icon.name, icon.iconText);
    });
  }, []);

  return (
    <div className="carousel-container">
      <IgrCarousel>
        <IgrCarouselSlide key="slide-1">
          <div key="slide-content">
            <img src="https://www.infragistics.com/angular-demos-lob/assets/images/svg/carousel/SignUp.svg" />
            <form>
              <IgrInput type="text" placeholder="Username">
                <IgrIcon slot="prefix" name="person" key="icon"></IgrIcon>
              </IgrInput>
              <IgrInput type="password" placeholder="Password">
                <IgrIcon slot="prefix" name="password" key="icon"></IgrIcon>
              </IgrInput>
              <IgrButton type="reset">
                <span key="button-span">Sign In</span>
              </IgrButton>
            </form>
          </div>
        </IgrCarouselSlide>
        <IgrCarouselSlide key="slide-2">
          <div key="slide-content">
            <img src="https://www.infragistics.com/angular-demos-lob/assets/images/svg/carousel/Route.svg" />
            <form>
              <IgrInput type="text" placeholder="Search">
                <IgrIcon slot="prefix" name="search" key="icon"></IgrIcon>
              </IgrInput>
              <IgrButton type="reset">
                <span key="button-span">Search</span>
              </IgrButton>
            </form>
          </div>
        </IgrCarouselSlide>
      </IgrCarousel>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselComponents />);
