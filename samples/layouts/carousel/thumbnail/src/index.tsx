import React from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCarousel,
  IgrCarouselIndicator,
  IgrCarouselSlide,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./CarouselThumbnail.css";
import "./index.css";


export default function CarouselThumbnail() {
  const images = [
    {
      src: "https://dl.infragistics.com/x/img/carousel/WonderfulCoast.png",
      alt: "Wonderful Coast",
    },
    {
      src: "https://dl.infragistics.com/x/img/carousel/CulturalDip.png",
      alt: "Cultural Dip",
    },
    {
      src: "https://dl.infragistics.com/x/img/carousel/GoldenBeaches.png",
      alt: "Golden Beaches",
    },
    {
      src: "https://dl.infragistics.com/x/img/carousel/IslandOfHistory.png",
      alt: "Island Of History",
    },
    {
      src: "https://dl.infragistics.com/x/img/carousel/AmazingBridge.png",
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
              <IgrCarouselSlide>
                <img src={image.src} alt={image.alt} />
              </IgrCarouselSlide>
              <IgrCarouselIndicator>
                <img
                  className="blurred"
                  src={image.src.replace(".png", "Thumb.png")}
                  alt={`${image.alt} Thumb`}
                  width="50"
                  height="60"
                />
                <img
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

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselThumbnail />);
