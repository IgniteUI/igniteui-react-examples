import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  HorizontalTransitionAnimation,
  IgrCarousel,
  IgrCarouselSlide,
  IgrCheckboxChangeEventArgs,
  IgrSelect,
  IgrSelectItem,
  IgrSwitch,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const animationTypes: Array<{ value: HorizontalTransitionAnimation; label: string }> = [
  { value: "slide", label: "Slide" },
  { value: "fade", label: "Fade" },
  { value: "none", label: "None" },
];

const slides = [
  {
    title: "Slide transition",
    subtitle: "Moves content horizontally or vertically to preserve directional context.",
    label: "01",
    detail: "Best for sequential browsing",
    metric: "320ms",
  },
  {
    title: "Fade transition",
    subtitle: "Cross-fades between slides when the relationship between items is looser.",
    label: "02",
    detail: "Best for featured content",
    metric: "240ms",
  },
  {
    title: "No transition",
    subtitle: "Updates the active slide immediately for reduced motion or dense workflows.",
    label: "03",
    detail: "Best for direct state changes",
    metric: "0ms",
  },
];

export default function CarouselAnimations() {

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
          <span className="action-label">Animation</span>
          <IgrSelect onChange={onSelectChange}>
            {animationTypes.map((animation) => (
              <IgrSelectItem
                key={animation.value}
                value={animation.value}
                selected={animationType === animation.value}
              >
                <span>{animation.label}</span>
              </IgrSelectItem>
            ))}
          </IgrSelect>
        </div>
        <div className="action">
          <IgrSwitch
            onChange={onSwitchChange}
            labelPosition="before"
          >
            <span>Vertical</span>
          </IgrSwitch>
        </div>
      </div>
      <IgrCarousel 
        hideIndicators={true} 
        animationType={animationType} 
        vertical={isCarouselVertical}>
        {slides.map((slide) => (
          <IgrCarouselSlide key={slide.title}>
            <article className="slide-wrapper">
              <div className="slide-content">
                <span className="slide-label">{slide.label}</span>
                <h3>{slide.title}</h3>
                <p>{slide.subtitle}</p>
                <div className="slide-details">
                  <span>{slide.detail}</span>
                  <strong>{slide.metric}</strong>
                </div>
              </div>
              <div className="slide-preview" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </article>
          </IgrCarouselSlide>
        ))}
      </IgrCarousel>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselAnimations />);
