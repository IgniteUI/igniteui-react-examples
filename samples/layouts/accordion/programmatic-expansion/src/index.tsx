import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrAccordion, IgrButton, IgrExpansionPanel } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function AccordionProgrammaticExpansion() {
  const accordionRef = useRef<IgrAccordion>(null);

  return (
    <div className="accordion-sample">
      <div className="accordion-content">
        <div className="accordion-toolbar">
          <IgrButton
            className="action-button"
            variant="contained"
            onClick={() => accordionRef.current?.showAll()}
          >
            <span>Show All</span>
          </IgrButton>
          <IgrButton
            className="action-button"
            variant="contained"
            onClick={() => accordionRef.current?.hideAll()}
          >
            <span>Hide All</span>
          </IgrButton>
        </div>

        <IgrAccordion ref={accordionRef}>
          <IgrExpansionPanel open>
            <span slot="title">Billing</span>
            <span slot="subtitle">Invoices and payment settings</span>
            <p>
              Review invoices, update payment methods, and manage billing
              contacts.
            </p>
          </IgrExpansionPanel>

          <IgrExpansionPanel open>
            <span slot="title">Security</span>
            <span slot="subtitle">Password and access controls</span>
            <p>
              Configure password rules, multi-factor authentication, and
              recovery options.
            </p>
          </IgrExpansionPanel>

          <IgrExpansionPanel open>
            <span slot="title">Notifications</span>
            <span slot="subtitle">Product updates and account alerts</span>
            <p>
              Choose which product updates and account alerts are sent to your
              team.
            </p>
          </IgrExpansionPanel>
        </IgrAccordion>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AccordionProgrammaticExpansion />);
