import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTextarea, IgrButton, IgrToast } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function TextAreaFormIntegration() {
  let toastRef: IgrToast;

  const onToastRef = (toast: IgrToast) => {
    if (!toast) {
      return;
    }
    toastRef = toast;
  };

  const onSubmitButtonClicked = (e: React.FormEvent<HTMLFormElement>) => {
    if (toastRef) {
      e.preventDefault();
      toastRef.show();
    }
  };

  return (
    <div className="sample">
      <form id="form" onSubmit={onSubmitButtonClicked}>
        <IgrTextarea
          rows={3}
          name="user_feedback"
          label="Your review"
          required
        ></IgrTextarea>
        <div className="controls">
          <IgrButton type="submit">
            <span>Submit review</span>
          </IgrButton>
          <IgrButton type="reset" variant="outlined">
            <span>Reset</span>
          </IgrButton>
        </div>
        <IgrToast
          id="submitted"
          position="top"
          displayTime={1000}
          ref={onToastRef}
        >
          <span>Your review was submitted</span>
        </IgrToast>
      </form>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TextAreaFormIntegration />);
