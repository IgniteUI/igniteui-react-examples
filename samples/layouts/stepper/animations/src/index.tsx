import React, { useRef, useState } from "react";
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
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function StepperAnimations() {

    const stepperRef = useRef<IgrStepper>(null);
    const [orientation, setOrientation] = useState<StepperOrientation>("horizontal");
    const [horizontalAnimation, setHorizontalAnimation] = useState<HorizontalTransitionAnimation>("slide");
    const [verticalAnimation, setVerticalAnimation] = useState<StepperVerticalAnimation>("grow");
    const [animationDuration, setAnimationDuration] = useState("320");
    

    const orientationChange = (e: IgrSelectItemComponentEventArgs) => {
        const selectedValue = e.detail.value as StepperOrientation;
        setOrientation(selectedValue);
    }
    
    const horizontalAnimationChange = (e: IgrSelectItemComponentEventArgs) => {
        const selectedValue = e.detail.value as HorizontalTransitionAnimation;
        setHorizontalAnimation(selectedValue);

    }

    const verticalAnimationChange = (e: IgrSelectItemComponentEventArgs) => {
        const selectedValue = e.detail.value as StepperVerticalAnimation;
        setVerticalAnimation(selectedValue);
    }

    const animationDurationChange = (e: IgrComponentValueChangedEventArgs) => {
        const animationDuration = e.detail;
        setAnimationDuration(animationDuration);
    }

    return (
      <div className="container sample">
        <article className="settings">
          <IgrSelect label="Orienation" onChange={orientationChange}>
            <IgrSelectItem value="horizontal" selected={orientation === 'horizontal'}>
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
            <IgrSelectItem value="grow" selected={verticalAnimation === 'grow'}>
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
            <IgrSelectItem value="slide" selected={horizontalAnimation === 'slide'}>
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
            <span slot="title">Personal Info</span>
            <form>
              <IgrInput
                label="Full Name"
                type="text"
                name="fullName"
              ></IgrInput>
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
root.render(<StepperAnimations />);
