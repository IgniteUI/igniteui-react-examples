import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./CardSemiHorizontal.css";
import {
  IgrCard,
  IgrCardHeader,
  IgrCardContent,
  IgrCardActions,
  IgrCardMedia,
  IgrAvatar,
  IgrButton,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function CardSemiHorizontal() {
  return (
    <div className="container sample center">
      <div className="card-wrapper">
        <IgrCard>
          <div className="semi-horizontal">
            <div>
              <IgrCardHeader>
                <IgrAvatar
                  src="https://static.infragistics.com/xplatform/images/music/singer_with_mic.jpg"
                  slot="thumbnail"
                />
                <h5 slot="title">HERE</h5>
                <h5 slot="subtitle">by Mellow D</h5>
              </IgrCardHeader>

              <IgrCardContent>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </IgrCardContent>

              <IgrCardActions>
                <IgrButton>
                  <span>Play Album</span>
                </IgrButton>
              </IgrCardActions>
            </div>

            <IgrCardMedia className="card-media">
              <img src="https://static.infragistics.com/xplatform/images/music/singer_female.jpg"></img>
            </IgrCardMedia>
          </div>
        </IgrCard>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardSemiHorizontal />);
