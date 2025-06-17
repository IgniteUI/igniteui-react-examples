import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrStepper,
  IgrStep,
  IgrRadio,
  IgrRadioGroup,
  IgrButton,
  IgrInput,
  IgrSelect,
  IgrSelectItem,
  IgrSelectItemComponentEventArgs,
  IgrComponentValueChangedEventArgs,
  StepperOrientation,
  HorizontalTransitionAnimation,
  StepperVerticalAnimation,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const personalInfoIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>';
const addressIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/></svg>';
const paymentIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v2h20V6c0-1.1-.9-2-2-2zM2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H2v8zm4-3h4v2H6v-2z"/></svg>';
const deliveryStatusIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2a2 2 0 1 0 4 0h8a2 2 0 1 0 4 0h3v-5l-4-4zm-5 5H4V6h11v7zm2-4.17L19.17 13H17V8.83zM6 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm12 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>';

export default function StepperStyling() {
  const stepperRef = useRef<IgrStepper>(null);
  const [orientation, setOrientation] =
    useState<StepperOrientation>("horizontal");
  const [horizontalAnimation, setHorizontalAnimation] =
    useState<HorizontalTransitionAnimation>("slide");
  const [verticalAnimation, setVerticalAnimation] =
    useState<StepperVerticalAnimation>("grow");
  const [animationDuration, setAnimationDuration] = useState("320");

  useEffect(() => {
    registerIconFromText("personal", personalInfoIcon, "material");
    registerIconFromText("address", addressIcon, "material");
    registerIconFromText("payment", paymentIcon, "material");
    registerIconFromText("delivery", deliveryStatusIcon, "material");
  }, []);

  const orientationChange = (e: IgrSelectItemComponentEventArgs) => {
    const selectedValue = e.detail.value as StepperOrientation;
    setOrientation(selectedValue);
  };

  const horizontalAnimationChange = (e: IgrSelectItemComponentEventArgs) => {
    const selectedValue = e.detail.value as HorizontalTransitionAnimation;
    setHorizontalAnimation(selectedValue);
  };

  const verticalAnimationChange = (e: IgrSelectItemComponentEventArgs) => {
    const selectedValue = e.detail.value as StepperVerticalAnimation;
    setVerticalAnimation(selectedValue);
  };

  const animationDurationChange = (e: IgrComponentValueChangedEventArgs) => {
    const animationDuration = e.detail;
    setAnimationDuration(animationDuration);
  };

  return (
    <div className="container sample">
      <article className="settings">
        <IgrSelect label="Orienation" onChange={orientationChange}>
          <IgrSelectItem
            value="horizontal"
            selected={orientation === "horizontal"}
          >
            <span>Horizontal</span>
          </IgrSelectItem>
          <IgrSelectItem value="vertical">
            <span>Vertical</span>
          </IgrSelectItem>
        </IgrSelect>
        <IgrSelect
          label="Vertical Animation"
          onChange={verticalAnimationChange}
        >
          <IgrSelectItem value="grow" selected={verticalAnimation === "grow"}>
            <span>Grow</span>
          </IgrSelectItem>
          <IgrSelectItem value="fade">
            <span>Fade</span>
          </IgrSelectItem>
          <IgrSelectItem value="none">
            <span>None</span>
          </IgrSelectItem>
        </IgrSelect>
        <IgrSelect
          label="Horizontal Animation"
          onChange={horizontalAnimationChange}
        >
          <IgrSelectItem
            value="slide"
            selected={horizontalAnimation === "slide"}
          >
            <span>Slide</span>
          </IgrSelectItem>
          <IgrSelectItem value="fade">
            <span>Fade</span>
          </IgrSelectItem>
          <IgrSelectItem value="none">
            <span>None</span>
          </IgrSelectItem>
        </IgrSelect>
        <IgrInput
          type="number"
          value={animationDuration}
          label="Duration"
          onChange={animationDurationChange}
        >
          <span slot="suffix">ms</span>
        </IgrInput>
      </article>

      <IgrStepper
        ref={stepperRef}
        orientation={orientation}
        horizontalAnimation={horizontalAnimation}
        verticalAnimation={verticalAnimation}
        animationDuration={+animationDuration}
      >
        <IgrStep>
          <IgrIcon slot="indicator" name="personal" collection="material" />
          <p slot="title">Personal Info</p>
          <form>
            <IgrInput label="Full Name" type="text" name="fullName"></IgrInput>
            <IgrInput label="Email" type="email" name="email"></IgrInput>

            <IgrButton
              onClick={() => {
                stepperRef.current.next();
              }}
            >
              <span>NEXT</span>
            </IgrButton>
          </form>
        </IgrStep>

        <IgrStep>
          <IgrIcon slot="indicator" name="address" collection="material" />
          <span slot="title">Delivery address</span>
          <form>
            <IgrInput label="City" type="text" name="city"></IgrInput>
            <IgrInput label="Street" type="text" name="street"></IgrInput>

            <IgrButton
              onClick={() => {
                stepperRef.current.prev();
              }}
            >
              <span>PREVIOUS</span>
            </IgrButton>
            <IgrButton
              onClick={() => {
                stepperRef.current.next();
              }}
            >
              <span>NEXT</span>
            </IgrButton>
          </form>
        </IgrStep>
        <IgrStep>
          <IgrIcon slot="indicator" name="payment" collection="material" />
          <span slot="title">Payment</span>
          <IgrRadioGroup>
            <IgrRadio name="payment" checked>
              <span>PayPal (n@mail.com; 18/02/2021)</span>
            </IgrRadio>
            <IgrRadio name="payment">
              <span>Visa (**** **** **** 1234; 12/23)</span>
            </IgrRadio>
            <IgrRadio name="payment">
              <span>MasterCard (**** **** **** 5678; 12/24)</span>
            </IgrRadio>
          </IgrRadioGroup>

          <IgrButton
            onClick={() => {
              stepperRef.current.prev();
            }}
          >
            <span>PREVIOUS</span>
          </IgrButton>
          <IgrButton
            onClick={() => {
              stepperRef.current.next();
            }}
          >
            <span>SUBMIT</span>
          </IgrButton>
        </IgrStep>
        <IgrStep>
          <IgrIcon slot="indicator" name="delivery" collection="material" />
          <span slot="title">Delivery status</span>
          <p>
            Your order is on its way. Expect delivery on 25th September 2021.
            Delivery address: San Jose, CA 94243.
          </p>

          <IgrButton
            onClick={() => {
              stepperRef.current.prev();
            }}
          >
            <span>PREVIOUS</span>
          </IgrButton>
          <IgrButton
            onClick={() => {
              stepperRef.current.reset();
            }}
          >
            <span>RESET</span>
          </IgrButton>
        </IgrStep>
      </IgrStepper>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StepperStyling />);
