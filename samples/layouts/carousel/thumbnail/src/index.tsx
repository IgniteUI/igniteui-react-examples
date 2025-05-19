import React from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCarousel,
  IgrCarouselIndicator,
  IgrCarouselModule,
  IgrCarouselSlide,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./CarouselThumbnail.css";
import "./index.css";

IgrCarouselModule.register();

export default function CarouselThumbnail() {
  const images = [
    {
      src: "https://www.infragistics.com/angular-demos-lob/assets/images/carousel/WonderfulCoast.png",
      alt: "Wonderful Coast",
    },
    {
      src: "https://www.infragistics.com/angular-demos-lob/assets/images/carousel/CulturalDip.png",
      alt: "Cultural Dip",
    },
    {
      src: "https://www.infragistics.com/angular-demos-lob/assets/images/carousel/GoldenBeaches.png",
      alt: "Golden Beaches",
    },
    {
      src: "https://www.infragistics.com/angular-demos-lob/assets/images/carousel/IslandOfHistory.png",
      alt: "Island Of History",
    },
    {
      src: "https://www.infragistics.com/angular-demos-lob/assets/images/carousel/AmazingBridge.png",
      alt: "Amazing Bridge",
    },
  ];

  return (
    <div className="container sample">
      <IgrCarousel
        disablePauseOnInteraction={true}
        hideNavigation={true}
        interval={2000}
        vertical={true}
        animationType="fade"
      >
        {images.map((image, index) => {
          return (
            <React.Fragment key={index}>
              <IgrCarouselSlide key={`slide-${index}`}>
                <img src={image.src} alt={image.alt} key="slide-img" />
              </IgrCarouselSlide>
              <IgrCarouselIndicator key={`indicator-${index}`}>
                <img
                  key="img-blur"
                  className="blurred"
                  src={image.src.replace(".png", "Thumb.png")}
                  alt={`${image.alt} Thumb`}
                  width="50"
                  height="60"
                />
                <img
                  key="img-active"
                  slot="active"
                  src={image.src.replace(".png", "Thumb.png")}
                  alt={`${image.alt} Thumb Active`}
                  width="50"
                  height="60"
                />
              </IgrCarouselIndicator>
            </React.Fragment>
          );
        })}
      </IgrCarousel>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselThumbnail />);
