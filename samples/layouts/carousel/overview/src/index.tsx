import React from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCarousel,
  IgrCarouselSlide,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./CarouselOverview.css";
import "./index.css";


export default function CarouselOverview() {
  return (
    <div className="carousel-container">
      <IgrCarousel>
        <IgrCarouselSlide>
          <div className="image-container">
            <img src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-indigo-design.png" />
          </div>
        </IgrCarouselSlide>
        <IgrCarouselSlide>
          <div className="image-container">
            <img src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slider-image-chart.png" />
          </div>
        </IgrCarouselSlide>
        <IgrCarouselSlide>
          <div className="image-container">
            <img src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-charts.png" />
          </div>
        </IgrCarouselSlide>
      </IgrCarousel>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselOverview />);
