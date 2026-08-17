import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrCarousel,
  IgrCarouselIndicator,
  IgrCarouselSlide,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

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

export default function CarouselTailwindStyling() {
  React.useEffect(() => {
    registerIconFromText("chevron-left", chevronLeft);
    registerIconFromText("chevron-right", chevronRight);
  }, []);

  return (
    <div className="container sample center">
      <IgrCarousel className="styled-carousel mt-4 h-[430px] w-full max-w-[860px] overflow-hidden rounded-lg border border-[var(--ig-gray-300)] bg-[var(--ig-surface-500)]">
        <span slot="previous-button" className="carousel-navigation-button inline-grid h-5 w-5 place-items-center leading-none">
          <IgrIcon name="chevron-left"></IgrIcon>
        </span>
        <span slot="next-button" className="carousel-navigation-button inline-grid h-5 w-5 place-items-center leading-none">
          <IgrIcon name="chevron-right"></IgrIcon>
        </span>

        {slides.map((slide) => (
          <React.Fragment key={slide.title}>
            <IgrCarouselSlide>
              <article className="relative m-0 grid h-full w-full overflow-hidden">
                <img className="h-full w-full object-cover" src={slide.image} alt={slide.alt} />
                <div className="absolute inset-x-14 bottom-11 max-w-[380px] rounded-lg bg-white/90 px-6 py-5 text-[var(--ig-gray-900)] shadow-[0_14px_34px_rgba(11,31,53,0.18)]">
                  <span className="mb-2 block text-xs font-bold leading-none text-[var(--ig-primary-600)]">{slide.label}</span>
                  <h3 className="m-0 text-2xl leading-tight">{slide.title}</h3>
                  <p className="mb-0 mt-2 leading-snug text-[var(--ig-gray-700)]">{slide.subtitle}</p>
                </div>
              </article>
            </IgrCarouselSlide>
            <IgrCarouselIndicator>
              <span className="block h-[9px] w-[9px] rounded-full border-2 border-[var(--ig-gray-600)] bg-transparent"></span>
              <span
                slot="active"
                className="block h-[9px] w-[9px] rounded-full border-2 border-[var(--ig-primary-500)] bg-[var(--ig-primary-500)]"
              ></span>
            </IgrCarouselIndicator>
          </React.Fragment>
        ))}
      </IgrCarousel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselTailwindStyling />);
