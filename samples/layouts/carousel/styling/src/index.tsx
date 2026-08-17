import React from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCarousel,
  IgrCarouselIndicator,
  IgrCarouselSlide,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const chevronLeft =
  '<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>';
const chevronRight =
  '<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>';

const slides = [
  {
    title: "Coastal retreat",
    subtitle: "A quiet route along cliffs, beach towns, and open water.",
    image: "https://dl.infragistics.com/x/img/carousel/WonderfulCoast.png",
    alt: "Wonderful coast",
    label: "01",
  },
  {
    title: "Cultural district",
    subtitle: "Museums, galleries, and historic streets in one walkable plan.",
    image: "https://dl.infragistics.com/x/img/carousel/CulturalDip.png",
    alt: "Cultural district",
    label: "02",
  },
  {
    title: "Golden beaches",
    subtitle: "A sunny itinerary built around swimming, dining, and sunsets.",
    image: "https://dl.infragistics.com/x/img/carousel/GoldenBeaches.png",
    alt: "Golden beaches",
    label: "03",
  },
];

export default function CarouselStyling() {
  React.useEffect(() => {
    registerIconFromText("chevron-left", chevronLeft);
    registerIconFromText("chevron-right", chevronRight);
  }, []);

  return (
    <div className="container sample center">
      <IgrCarousel className="styled-carousel">
        <span slot="previous-button" className="carousel-navigation-button">
          <IgrIcon name="chevron-left"></IgrIcon>
        </span>
        <span slot="next-button" className="carousel-navigation-button">
          <IgrIcon name="chevron-right"></IgrIcon>
        </span>

        {slides.map((slide) => (
          <React.Fragment key={slide.title}>
            <IgrCarouselSlide>
              <article className="slide-card">
                <img className="slide-image" src={slide.image} alt={slide.alt} />
                <div className="slide-content">
                  <span className="slide-label">{slide.label}</span>
                  <h3>{slide.title}</h3>
                  <p>{slide.subtitle}</p>
                </div>
              </article>
            </IgrCarouselSlide>
            <IgrCarouselIndicator>
              <span className="carousel-indicator"></span>
              <span slot="active" className="carousel-indicator carousel-indicator-active"></span>
            </IgrCarouselIndicator>
          </React.Fragment>
        ))}
      </IgrCarousel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselStyling />);
