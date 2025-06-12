import React from "react";
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
  IgrComponentValueChangedEventArgs,
  IgrInput,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class LinearStepper extends React.Component<any, any> {
  private stepperRef = React.createRef<IgrStepper>();
  private InfoForm = React.createRef<any>();
  private AddressForm = React.createRef<any>();
  private activeStepIndex = 0;

  constructor(props: any) {
    super(props);
    this.state = {
      linear: false,
      firstStepInvalid: true,
      secondStepInvalid: true,
    };
    this.onSwitchChange = this.onSwitchChange.bind(this);
  }

  componentDidMount() {
    this.InfoForm.current.addEventListener("igcInput", this.onInput.bind(this));
    this.AddressForm.current.addEventListener(
      "igcInput",
      this.onInput.bind(this)
    );
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrSwitch onChange={this.onSwitchChange}>
          <span>Linear</span>
        </IgrSwitch>

        <IgrStepper ref={this.stepperRef} linear={this.state.linear}>
          <IgrStep
            invalid={this.state.linear && this.state.firstStepInvalid}
          >
            <span slot="title">
              Personal Info
            </span>
            <form ref={this.InfoForm}>
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
                disabled={this.state.linear && this.state.firstStepInvalid}
                onClick={() => {
                  this.stepperRef.current.next();
                }}
              >
                <span>NEXT</span>
              </IgrButton>
            </form>
          </IgrStep>
          <IgrStep
            invalid={this.state.linear && this.state.secondStepInvalid}
          >
            <span slot="title">
              Delivery address
            </span>
            <form ref={this.AddressForm}>
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
                  this.stepperRef.current.prev();
                }}
              >
                <span>PREVIOUS</span>
              </IgrButton>
              <IgrButton
                disabled={this.state.linear && this.state.secondStepInvalid}
                onClick={() => {
                  this.stepperRef.current.next();
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
                  this.stepperRef.current.prev();
                }}
              >
                <span>PREVIOUS</span>
              </IgrButton>
              <IgrButton
                onClick={() => {
                  this.stepperRef.current.next();
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
                this.stepperRef.current.prev();
              }}
            >
              <span>PREVIOUS</span>
            </IgrButton>
            <IgrButton
              onClick={() => {
                this.stepperRef.current.next();
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
                this.stepperRef.current.prev();
              }}
            >
              <span>PREVIOUS</span>
            </IgrButton>
            <IgrButton
              onClick={() => {
                this.stepperRef.current.reset();
              }}
            >
              <span>RESET</span>
            </IgrButton>
          </IgrStep>
        </IgrStepper>
      </div>
    );
  }

  public onSwitchChange(e: IgrCheckboxChangeEventArgs) {
    this.setState({ linear: e.detail.checked });
    if (e.detail.checked) {
      this.checkActiveStepValidity();
    }
  }

  public onInput(s: IgrInput, e: IgrComponentValueChangedEventArgs) {
    if (!this.state.linear) return;

    this.checkActiveStepValidity();
  }

  private checkActiveStepValidity() {
    const activeStep = this.activeStep;
    if (activeStep && this.activeStepIndex === 0) {
      const isInvalidForm = this.checkFormValidity(this.InfoForm);
      this.setState({ firstStepInvalid: isInvalidForm });
    }
    if (activeStep && this.activeStepIndex === 1) {
      const isInvalidForm = this.checkFormValidity(this.AddressForm);
      this.setState({ secondStepInvalid: isInvalidForm });
    }
  }

  private checkFormValidity(form: any) {
    let isInvalidForm = false;
    for (const element of form.current.children) {
      if (
        element.tagName.toLowerCase() === "igc-input" &&
        element.value === ""
      ) {
        const oldInvalid = element.invalid;
        const isElementInvalid = !element.checkValidity();
        element.invalid = oldInvalid;
        if (isElementInvalid) {
          isInvalidForm = true;
          break;
        }
      }
    }
    return isInvalidForm;
  }

  private get activeStep(): IgrStep | undefined {
    return this.stepperRef.current.steps.find(
      (step: IgrStep, index: number) => {
        this.activeStepIndex = index;
        return step.active;
      }
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LinearStepper />);
