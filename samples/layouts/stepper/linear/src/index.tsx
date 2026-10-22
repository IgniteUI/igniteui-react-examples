import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrStepper,
  IgrStep,
  IgrRadio,
  IgrRadioGroup,
  IgrButton,
  IgrSwitch,
  IgrCheckboxChangeEventArgs,
  IgrInput,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

// Checks empty inputs without leaving them visibly marked invalid
function checkFormValidity(form: HTMLFormElement) {
  let isInvalidForm = false;
  for (const element of form.children) {
    const input = element as IgrInput;
    if (
      element.tagName.toLowerCase() === "igc-input" &&
      input.value === ""
    ) {
      const oldInvalid = input.invalid;
      const isElementInvalid = !input.checkValidity();
      input.invalid = oldInvalid;
      if (isElementInvalid) {
        isInvalidForm = true;
        break;
      }
    }
  }
  return isInvalidForm;
}

export default function LinearStepper() {
  const stepperRef = useRef<IgrStepper>(null);
  const infoFormRef = useRef<HTMLFormElement>(null);
  const addressFormRef = useRef<HTMLFormElement>(null);

  const [linear, setLinear] = useState(false);
  const [firstStepInvalid, setFirstStepInvalid] = useState(true);
  const [secondStepInvalid, setSecondStepInvalid] = useState(true);

  // Re-subscribed on each toggle so the listener sees the current `linear`
  useEffect(() => {
    const forms = [infoFormRef.current!, addressFormRef.current!];
    forms.forEach((form) => form.addEventListener("igcInput", onInput));

    return () => {
      forms.forEach((form) => form.removeEventListener("igcInput", onInput));
    };
  }, [linear]);

  function onSwitchChange(e: IgrCheckboxChangeEventArgs) {
    setLinear(e.detail.checked);
    if (e.detail.checked) {
      checkActiveStepValidity();
    }
  }

  function onInput() {
    if (!linear) {
      return;
    }

    checkActiveStepValidity();
  }

  function checkActiveStepValidity() {
    const activeStepIndex = stepperRef.current!.steps.findIndex(
      (step: IgrStep) => step.active
    );
    if (activeStepIndex === 0) {
      const isInvalidForm = checkFormValidity(infoFormRef.current!);
      setFirstStepInvalid(isInvalidForm);
    }
    if (activeStepIndex === 1) {
      const isInvalidForm = checkFormValidity(addressFormRef.current!);
      setSecondStepInvalid(isInvalidForm);
    }
  }

  return (
    <div className="container sample">
      <IgrSwitch onChange={onSwitchChange}>
        <span>Linear</span>
      </IgrSwitch>

      <IgrStepper ref={stepperRef} linear={linear}>
        <IgrStep
          invalid={linear && firstStepInvalid}
        >
          <span slot="title">
            Personal Info
          </span>
          <form ref={infoFormRef}>
            <IgrInput
              required
              label="Full Name"
              type="text"
              name="fullName"
            ></IgrInput>
            <IgrInput
              required
              label="Email"
              type="email"
              name="email"
            ></IgrInput>

            <IgrButton
              disabled={linear && firstStepInvalid}
              onClick={() => {
                stepperRef.current!.next();
              }}
            >
              <span>NEXT</span>
            </IgrButton>
          </form>
        </IgrStep>
        <IgrStep
          invalid={linear && secondStepInvalid}
        >
          <span slot="title">
            Delivery address
          </span>
          <form ref={addressFormRef}>
            <IgrInput
              required
              label="City"
              type="text"
              name="city"
            ></IgrInput>
            <IgrInput
              required
              label="Street"
              type="text"
              name="street"
            ></IgrInput>
            <IgrButton
              onClick={() => {
                stepperRef.current!.prev();
              }}
            >
              <span>PREVIOUS</span>
            </IgrButton>
            <IgrButton
              disabled={linear && secondStepInvalid}
              onClick={() => {
                stepperRef.current!.next();
              }}
            >
              <span>NEXT</span>
            </IgrButton>
          </form>
        </IgrStep>
        <IgrStep optional>
          <span slot="title">
            Billing address
          </span>
          <span slot="subtitle">
            (optional)
          </span>
          <form>
            <IgrInput
              required
              label="City"
              type="text"
              name="bill-city"
            ></IgrInput>
            <IgrInput
              required
              label="Street"
              type="text"
              name="bill-street"
            ></IgrInput>
            <IgrButton
              onClick={() => {
                stepperRef.current!.prev();
              }}
            >
              <span>PREVIOUS</span>
            </IgrButton>
            <IgrButton
              onClick={() => {
                stepperRef.current!.next();
              }}
            >
              <span>NEXT</span>
            </IgrButton>
          </form>
        </IgrStep>
        <IgrStep>
          <span slot="title">
            Payment
          </span>
          <IgrRadioGroup>
            <IgrRadio name="payment" checked>
              <span>PayPal (n@mail.com; 18/02/2021)</span>
            </IgrRadio>
            <IgrRadio name="payment">
              <span>Visa (**** **** **** 1234; 12/23)</span>
            </IgrRadio>
            <IgrRadio name="payment">
              <span>
                MasterCard (**** **** **** 5678; 12/24)
              </span>
            </IgrRadio>
          </IgrRadioGroup>
          <IgrButton
            onClick={() => {
              stepperRef.current!.prev();
            }}
          >
            <span>PREVIOUS</span>
          </IgrButton>
          <IgrButton
            onClick={() => {
              stepperRef.current!.next();
            }}
          >
            <span>SUBMIT</span>
          </IgrButton>
        </IgrStep>
        <IgrStep>
          <span slot="title">
            Delivery status
          </span>
          <p>
            Your order is on its way. Expect delivery on 25th September 2021.
            Delivery address: San Jose, CA 94243.
          </p>
          <IgrButton
            onClick={() => {
              stepperRef.current!.prev();
            }}
          >
            <span>PREVIOUS</span>
          </IgrButton>
          <IgrButton
            onClick={() => {
              stepperRef.current!.reset();
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
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<LinearStepper />);
