import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrButton,
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
    title: "Scenic getaway",
    subtitle: "A flexible travel plan built around memorable views and time to explore.",
    image: "https://dl.infragistics.com/x/img/carousel/AdobeStock_1937350575-s.png",
    alt: "Scenic travel destination",
    label: "01",
    details: ["3 days", "8 stops", "Flexible dates"],
    tags: ["Scenic route", "Flexible pace"],
  },
  {
    title: "Mountain trail ride",
    subtitle: "A high-energy route through rugged terrain, with technical descents and open trail views.",
    image: "https://dl.infragistics.com/x/img/carousel/AdobeStock_215535179-s.png",
    alt: "Mountain trail ride",
    label: "02",
    details: ["1 day", "12 km", "Advanced"],
    tags: ["Mountain bike", "Trail ride"],
  },
  {
    title: "Weekend escape",
    subtitle: "A short break with unhurried moments, fresh perspectives, and room to recharge.",
    image: "https://dl.infragistics.com/x/img/carousel/AdobeStock_637533323-s.png",
    alt: "Weekend escape",
    label: "03",
    details: ["Weekend", "5 highlights", "Year round"],
    tags: ["Unwind", "Go at your pace"],
  },
];

export default function CarouselTailwindStyling() {
  React.useEffect(() => {
    registerIconFromText("chevron-left", chevronLeft);
    registerIconFromText("chevron-right", chevronRight);
  }, []);

  return (
    <div className="container sample center">
      <IgrCarousel className="styled-carousel mx-auto mt-4 h-[430px] w-full max-w-[960px] overflow-hidden rounded-lg border border-[var(--ig-gray-300)] bg-[var(--ig-surface-500)]">
        <span slot="previous-button" className="carousel-navigation-button inline-grid h-5 w-5 place-items-center leading-none">
          <IgrIcon name="chevron-left"></IgrIcon>
        </span>
        <span slot="next-button" className="carousel-navigation-button inline-grid h-5 w-5 place-items-center leading-none">
          <IgrIcon name="chevron-right"></IgrIcon>
        </span>

        {slides.map((slide) => (
          <React.Fragment key={slide.title}>
            <IgrCarouselSlide>
              <article className="m-0 grid h-full w-full overflow-hidden bg-[var(--ig-gray-100)] md:grid-cols-[1.15fr_0.85fr]">
                <img className="h-52 w-full object-cover md:h-full" src={slide.image} alt={slide.alt} />
                <section className="grid content-center gap-5 bg-[var(--ig-surface-500)] py-10 pl-8 pr-24 text-[var(--ig-gray-900)]">
                  <div>
                    <span className="mb-2 block text-xs font-bold leading-none text-[var(--ig-primary-600)]">{slide.label} / ITINERARY</span>
                    <h3 className="m-0 text-2xl leading-tight">{slide.title}</h3>
                    <p className="mb-0 mt-2 leading-snug text-[var(--ig-gray-700)]">{slide.subtitle}</p>
                  </div>
                  <div className="grid grid-cols-3 divide-x divide-[var(--ig-gray-300)] border-y border-[var(--ig-gray-300)] py-3">
                    {slide.details.map((detail) => (
                      <span key={detail} className="px-2 text-center text-xs font-semibold text-[var(--ig-gray-700)] first:pl-0 last:pr-0">
                        {detail}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {slide.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[var(--ig-gray-300)] px-3 py-1 text-xs text-[var(--ig-gray-700)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <IgrButton>
                    <span>View itinerary</span>
                  </IgrButton>
                </section>
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
