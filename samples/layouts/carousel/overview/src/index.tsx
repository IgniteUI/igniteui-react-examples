import React from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCarousel,
  IgrCarouselModule,
  IgrCarouselSlide,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./CarouselOverview.css";
import "./index.css";

IgrCarouselModule.register();

export default function CarouselOverview() {
  return (
    <div className="carousel-container">
      <IgrCarousel>
        <IgrCarouselSlide key="slide-1">
          <div className="image-container" key="image-container">
            <img src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-indigo-design.png" />
          </div>
        </IgrCarouselSlide>
        <IgrCarouselSlide key="slide-2">
          <div className="image-container" key="image-container">
            <img src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slider-image-chart.png" />
          </div>
        </IgrCarouselSlide>
        <IgrCarouselSlide key="slide-3">
          <div className="image-container" key="image-container">
            <img src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-charts.png" />
          </div>
        </IgrCarouselSlide>
      </IgrCarousel>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselOverview />);
