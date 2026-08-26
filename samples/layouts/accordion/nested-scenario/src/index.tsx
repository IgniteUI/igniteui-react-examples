import React, { useState } from "react";
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
  const [singleExpand, setSingleExpand] = useState<boolean>(false);

  const switchChange = (e: IgrCheckboxChangeEventArgs) => {
    setSingleExpand(e.detail.checked);
  };

  return (
    <div className="accordion-sample">
      <div className="accordion-content">
        <div className="accordion-toolbar">
          <IgrSwitch onChange={switchChange}>
            <span>Single Expand</span>
          </IgrSwitch>
        </div>

        <IgrAccordion singleExpand={singleExpand}>
          <IgrExpansionPanel open>
            <span slot="title">Workspace Settings</span>
            <span slot="subtitle">
              Nested account, access, and billing options
            </span>

            <IgrAccordion singleExpand={singleExpand}>
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
