import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCarousel,
  IgrCarouselSlide,
  IgrCheckboxChangeEventArgs,
  IgrSwitch,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const slides = [
  {
    title: "Coastal route",
    subtitle: "A compact visual slide for checking navigation and indicators.",
    label: "01",
  },
  {
    title: "City guide",
    subtitle: "A second slide makes loop behavior easy to verify.",
    label: "02",
  },
  {
    title: "Resort access",
    subtitle: "Use the controls to compare the Carousel configuration states.",
    label: "03",
  },
];

export default function CarouselConfiguration() {
  const [hideNavigation, setHideNavigation] = useState(false);
  const [hideIndicators, setHideIndicators] = useState(false);
  const [disableLoop, setDisableLoop] = useState(false);

  const onHideNavigationChange = (e: IgrCheckboxChangeEventArgs) => {
    setHideNavigation(e.detail.checked);
  };

  const onHideIndicatorsChange = (e: IgrCheckboxChangeEventArgs) => {
    setHideIndicators(e.detail.checked);
  };

  const onDisableLoopChange = (e: IgrCheckboxChangeEventArgs) => {
    setDisableLoop(e.detail.checked);
  };

  return (
    <div className="configuration-sample">
      <div className="configuration-controls">
        <IgrSwitch onChange={onHideNavigationChange}>
          <span>Hide navigation</span>
        </IgrSwitch>
        <IgrSwitch onChange={onHideIndicatorsChange}>
          <span>Hide indicators</span>
        </IgrSwitch>
        <IgrSwitch onChange={onDisableLoopChange}>
          <span>Disable loop</span>
        </IgrSwitch>
      </div>
      <IgrCarousel
        hideNavigation={hideNavigation}
        hideIndicators={hideIndicators}
        disableLoop={disableLoop}
      >
        {slides.map((slide) => (
          <IgrCarouselSlide key={slide.title}>
            <article className="slide-card">
              <span>{slide.label}</span>
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
            </article>
          </IgrCarouselSlide>
        ))}
      </IgrCarousel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselConfiguration />);
