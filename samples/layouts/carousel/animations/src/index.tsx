import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import {
  CarouselAnimationType,
  CheckboxBaseLabelPosition,
  IgrButton,
  IgrButtonModule,
  IgrCard,
  IgrCardActions,
  IgrCardContent,
  IgrCardHeader,
  IgrCardMedia,
  IgrCardModule,
  IgrCarousel,
  IgrCarouselModule,
  IgrCarouselSlide,
  IgrSelect,
  IgrSelectItem,
  IgrSelectModule,
  IgrSwitch,
  IgrSwitchModule,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./CarouselAnimations.css";
import "./index.css";

IgrButtonModule.register();
IgrCarouselModule.register();
IgrSelectModule.register();
IgrSwitchModule.register();
IgrCardModule.register();

export default function CarouselComponents() {
  const carouselRef = useRef<IgrCarousel>(null);

  function onSelectChange(s: IgrSelect) {
    switch (s.value) {
      case "slide":
        carouselRef.current.animationType = CarouselAnimationType.Slide;
        break;
      case "fade":
        carouselRef.current.animationType = CarouselAnimationType.Fade;
        break;
      default:
        carouselRef.current.animationType = CarouselAnimationType.None;
        break;
    }
  }

  function onSwitchChange(s: IgrSwitch) {
    carouselRef.current.vertical = s.checked;
  }

  return (
    <div className="carousel-wrapper">
      <div className="action-wrapper">
        <div className="action">
          <span>Animation type</span>
          <IgrSelect change={onSelectChange}>
            <IgrSelectItem value="slide" selected={true} key="slide">
              <span key="select-span">Slide</span>
            </IgrSelectItem>
            <IgrSelectItem value="fade" key="fade">
              <span key="select-span">Fade</span>
            </IgrSelectItem>
            <IgrSelectItem value="none" key="none">
              <span key="select-span">None</span>
            </IgrSelectItem>
          </IgrSelect>
        </div>
        <div className="action">
          <IgrSwitch
            change={onSwitchChange}
            labelPosition={CheckboxBaseLabelPosition.Before}
          >
            <span key="switch-span">Vertical alignment</span>
          </IgrSwitch>
        </div>
      </div>
      <IgrCarousel hideIndicators={true} ref={carouselRef}>
        <IgrCarouselSlide key="slide-1">
          <div className="slide-wrapper" key="card-wrapper">
            <IgrCard>
              <IgrCardHeader key="card-header">
                <h3 slot="title" key="header-title">
                  Ignite UI for Angular
                </h3>
              </IgrCardHeader>
              <IgrCardContent key="card-content">
                <p key="content">
                  30+ Material-based Angular components to code speedy web apps
                  faster.
                </p>
              </IgrCardContent>
              <IgrCardMedia key="card-media">
                <img
                  src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slide1-angular.png"
                  key="img"
                />
              </IgrCardMedia>
              <IgrCardActions key="card-actions">
                <IgrButton
                  slot="start"
                  href="https://www.infragistics.com/products/ignite-ui-angular"
                  target="_blank"
                  rel="noopener"
                  key="button"
                >
                  <span key="button-span">Visit Page</span>
                </IgrButton>
              </IgrCardActions>
            </IgrCard>
          </div>
        </IgrCarouselSlide>
        <IgrCarouselSlide key="slide-2">
          <div className="slide-wrapper" key="card-wrapper">
            <IgrCard>
              <IgrCardHeader key="card-header">
                <h3 slot="title" key="header-title">
                  Ignite UI for Javascript
                </h3>
              </IgrCardHeader>
              <IgrCardContent key="card-content">
                <p key="content">
                  A complete JavaScript UI library empowering you to build
                  data-rich responsive web apps.
                </p>
              </IgrCardContent>
              <IgrCardMedia key="card-media">
                <img
                  src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slide2-ignite.png"
                  key="img"
                />
              </IgrCardMedia>
              <IgrCardActions key="card-actions">
                <IgrButton
                  slot="start"
                  href="https://www.infragistics.com/products/ignite-ui"
                  target="_blank"
                  rel="noopener"
                  key="button"
                >
                  <span key="button-span">Visit Page</span>
                </IgrButton>
              </IgrCardActions>
            </IgrCard>
          </div>
        </IgrCarouselSlide>
        <IgrCarouselSlide key="slide-3">
          <div className="slide-wrapper" key="card-wrapper">
            <IgrCard>
              <IgrCardHeader key="card-header">
                <h3 slot="title" key="header-title">
                  Ultimate UI for ASP.NET
                </h3>
              </IgrCardHeader>
              <IgrCardContent key="card-content">
                <p key="content">
                  Build full-featured business apps with the most versatile set
                  of ASP.NET AJAX UI controls.
                </p>
              </IgrCardContent>
              <IgrCardMedia key="card-media">
                <img
                  src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slide3-aspnet.png"
                  key="img"
                />
              </IgrCardMedia>
              <IgrCardActions key="card-actions">
                <IgrButton
                  slot="start"
                  href="https://www.infragistics.com/products/aspnet"
                  target="_blank"
                  rel="noopener"
                  key="button"
                >
                  <span key="button-span">Visit Page</span>
                </IgrButton>
              </IgrCardActions>
            </IgrCard>
          </div>
        </IgrCarouselSlide>
      </IgrCarousel>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselComponents />);
