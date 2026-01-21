import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  HorizontalTransitionAnimation,
  IgrButton,
  IgrCard,
  IgrCardActions,
  IgrCardContent,
  IgrCardHeader,
  IgrCardMedia,
  IgrCarousel,
  IgrCarouselSlide,
  IgrCheckboxChangeEventArgs,
  IgrSelect,
  IgrSelectItem,
  IgrSwitch,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./CarouselAnimations.css";
import "./index.css";

export default function CarouselComponents() {

  const [animationType, setAnimationType] = useState<HorizontalTransitionAnimation>('slide');
  const [isCarouselVertical, setIsCarouselVertical] = useState<boolean>(false);

  const onSelectChange = (e: CustomEvent<IgrSelectItem>) => {
    const value = e.detail.value as HorizontalTransitionAnimation;
    setAnimationType(value);
  }

  const onSwitchChange = (e: IgrCheckboxChangeEventArgs) => {
    setIsCarouselVertical(e.detail.checked);
  }

  return (
    <div className="carousel-wrapper">
      <div className="action-wrapper">
        <div className="action">
          <span>Animation type</span>
          <IgrSelect onChange={onSelectChange}>
            <IgrSelectItem value="slide" selected={true}>
              <span>Slide</span>
            </IgrSelectItem>
            <IgrSelectItem value="fade">
              <span>Fade</span>
            </IgrSelectItem>
            <IgrSelectItem value="none">
              <span>None</span>
            </IgrSelectItem>
          </IgrSelect>
        </div>
        <div className="action">
          <IgrSwitch
            onChange={onSwitchChange}
            labelPosition="before"
          >
            <span>Vertical alignment</span>
          </IgrSwitch>
        </div>
      </div>
      <IgrCarousel 
        hideIndicators={true} 
        animationType={animationType} 
        vertical={isCarouselVertical}>
        <IgrCarouselSlide>
          <div className="slide-wrapper">
            <IgrCard>
              <IgrCardHeader>
                <h3 slot="title">
                  Ignite UI for Angular
                </h3>
              </IgrCardHeader>
              <IgrCardContent>
                <p>
                  30+ Material-based Angular components to code speedy web apps
                  faster.
                </p>
              </IgrCardContent>
              <IgrCardMedia>
                <img
                  src="https://dl.infragistics.com/x/img/carousel/slide1-angular.png"
                />
              </IgrCardMedia>
              <IgrCardActions>
                <IgrButton
                  slot="start"
                  href="https://www.infragistics.com/products/ignite-ui-angular"
                  target="_blank"
                  rel="noopener"
                >
                  <span>Visit Page</span>
                </IgrButton>
              </IgrCardActions>
            </IgrCard>
          </div>
        </IgrCarouselSlide>
        <IgrCarouselSlide>
          <div className="slide-wrapper">
            <IgrCard>
              <IgrCardHeader>
                <h3 slot="title">
                  Ignite UI for Javascript
                </h3>
              </IgrCardHeader>
              <IgrCardContent>
                <p>
                  A complete JavaScript UI library empowering you to build
                  data-rich responsive web apps.
                </p>
              </IgrCardContent>
              <IgrCardMedia>
                <img
                  src="https://dl.infragistics.com/x/img/carousel/slide2-ignite.png"
                />
              </IgrCardMedia>
              <IgrCardActions>
                <IgrButton
                  slot="start"
                  href="https://www.infragistics.com/products/ignite-ui"
                  target="_blank"
                  rel="noopener"
                >
                  <span>Visit Page</span>
                </IgrButton>
              </IgrCardActions>
            </IgrCard>
          </div>
        </IgrCarouselSlide>
        <IgrCarouselSlide>
          <div className="slide-wrapper">
            <IgrCard>
              <IgrCardHeader>
                <h3 slot="title">
                  Ultimate UI for ASP.NET
                </h3>
              </IgrCardHeader>
              <IgrCardContent>
                <p>
                  Build full-featured business apps with the most versatile set
                  of ASP.NET AJAX UI controls.
                </p>
              </IgrCardContent>
              <IgrCardMedia>
                <img
                  src="https://dl.infragistics.com/x/img/carousel/slide3-aspnet.png"
                />
              </IgrCardMedia>
              <IgrCardActions>
                <IgrButton
                  slot="start"
                  href="https://www.infragistics.com/products/aspnet"
                  target="_blank"
                  rel="noopener"
                >
                  <span>Visit Page</span>
                </IgrButton>
              </IgrCardActions>
            </IgrCard>
          </div>
        </IgrCarouselSlide>
      </IgrCarousel>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselComponents />);
