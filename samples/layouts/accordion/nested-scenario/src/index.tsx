import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrAccordion,
  IgrCheckboxChangeEventArgs,
  IgrExpansionPanel,
  IgrSwitch,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function AccordionNestedScenario() {
  const outerAccordionRef = useRef<IgrAccordion>(null);
  const innerAccordionRef = useRef<IgrAccordion>(null);

  const switchChange = (e: IgrCheckboxChangeEventArgs) => {
    const { checked } = e.detail;

    if (outerAccordionRef.current) {
      outerAccordionRef.current.singleExpand = checked;
    }

    if (innerAccordionRef.current) {
      innerAccordionRef.current.singleExpand = checked;
    }
  };

  return (
    <div className="accordion-sample">
      <div className="accordion-content">
        <div className="accordion-toolbar">
          <IgrSwitch onChange={switchChange}>
            <span>Single Expand</span>
          </IgrSwitch>
        </div>

        <IgrAccordion ref={outerAccordionRef}>
          <IgrExpansionPanel open>
            <span slot="title">Workspace Settings</span>
            <span slot="subtitle">
              Nested account, access, and billing options
            </span>

            <IgrAccordion ref={innerAccordionRef}>
              <IgrExpansionPanel open>
                <span slot="title">Profile</span>
                <span slot="subtitle">Name, photo, and contact details</span>
                <p>
                  Update the public information shown to other workspace
                  members.
                </p>
              </IgrExpansionPanel>

              <IgrExpansionPanel>
                <span slot="title">Security</span>
                <span slot="subtitle">Password and sign-in preferences</span>
                <p>
                  Review active sessions, change your password, and configure
                  sign-in requirements.
                </p>
              </IgrExpansionPanel>

              <IgrExpansionPanel>
                <span slot="title">Notifications</span>
                <span slot="subtitle">Email and product updates</span>
                <p>
                  Choose the messages you receive for comments, assignments, and
                  releases.
                </p>
              </IgrExpansionPanel>
            </IgrAccordion>
          </IgrExpansionPanel>

          <IgrExpansionPanel>
            <span slot="title">Team Access</span>
            <span slot="subtitle">Members, roles, and permissions</span>
            <p>
              Invite teammates, assign roles, and review workspace permissions.
            </p>
          </IgrExpansionPanel>

          <IgrExpansionPanel>
            <span slot="title">Billing</span>
            <span slot="subtitle">Plan, invoices, and payment method</span>
            <p>
              Manage subscription details, billing contacts, and invoice
              delivery.
            </p>
          </IgrExpansionPanel>
        </IgrAccordion>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AccordionNestedScenario />);
