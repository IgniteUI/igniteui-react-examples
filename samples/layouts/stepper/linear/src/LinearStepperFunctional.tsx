import React, { useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrStepper,
    IgrStep,
    IgrRadio,
    IgrRadioGroup,
    IgrButton,
    IgrSwitch,
    IgrCheckboxChangeEventArgs,
    IgrInput,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function LinearStepper() {
    const stepperRef = useRef<IgrStepper>(null);
    const infoFormRef = useRef<HTMLFormElement>(null);
    const addressFormRef = useRef<HTMLFormElement>(null);

    const [linear, setLinear] = useState(false);
    const [firstStepInvalid, setFirstStepInvalid] = useState(true);
    const [secondStepInvalid, setSecondStepInvalid] = useState(true);

    const checkFormValidity = useCallback((form: React.RefObject<HTMLFormElement>): boolean => {
        for (const element of Array.from(form.current?.children ?? [])) {
            if (
                element.tagName.toLowerCase() === 'igc-input' &&
                (element as any).value === ''
            ) {
                const oldInvalid = (element as any).invalid;
                const isElementInvalid = !(element as any).checkValidity();
                (element as any).invalid = oldInvalid;
                if (isElementInvalid) return true;
            }
        }
        return false;
    }, []);

    const checkActiveStepValidity = useCallback((isLinear: boolean) => {
        if (!isLinear) return;
        const steps = stepperRef.current?.steps ?? [];
        const activeIndex = steps.findIndex((s: any) => s.active);
        if (activeIndex === 0) {
            setFirstStepInvalid(checkFormValidity(infoFormRef));
        } else if (activeIndex === 1) {
            setSecondStepInvalid(checkFormValidity(addressFormRef));
        }
    }, [checkFormValidity]);

    const handleInput = useCallback(() => checkActiveStepValidity(linear), [linear, checkActiveStepValidity]);

    const onSwitchChange = useCallback((e: IgrCheckboxChangeEventArgs) => {
        const isLinear = e.detail.checked;
        setLinear(isLinear);
        if (isLinear) {
            checkActiveStepValidity(isLinear);
        }
    }, [checkActiveStepValidity]);

    return (
        <div className="container sample">
            <IgrSwitch onChange={onSwitchChange}>
                <span>Linear</span>
            </IgrSwitch>

            <IgrStepper ref={stepperRef} linear={linear}>
                <IgrStep invalid={linear && firstStepInvalid}>
                    <span slot="title">Personal Info</span>
                    <form ref={infoFormRef} onInput={handleInput}>
                        <IgrInput required label="Full Name" type="text" name="fullName" />
                        <IgrInput required label="Email" type="email" name="email" />
                        <IgrButton
                            disabled={linear && firstStepInvalid}
                            onClick={() => stepperRef.current?.next()}
                        >
                            <span>NEXT</span>
                        </IgrButton>
                    </form>
                </IgrStep>
                <IgrStep invalid={linear && secondStepInvalid}>
                    <span slot="title">Delivery address</span>
                    <form ref={addressFormRef} onInput={handleInput}>
                        <IgrInput required label="City" type="text" name="city" />
                        <IgrInput required label="Street" type="text" name="street" />
                        <IgrButton onClick={() => stepperRef.current?.prev()}>
                            <span>PREVIOUS</span>
                        </IgrButton>
                        <IgrButton
                            disabled={linear && secondStepInvalid}
                            onClick={() => stepperRef.current?.next()}
                        >
                            <span>NEXT</span>
                        </IgrButton>
                    </form>
                </IgrStep>
                <IgrStep optional>
                    <span slot="title">Billing address</span>
                    <span slot="subtitle">(optional)</span>
                    <form>
                        <IgrInput required label="City" type="text" name="bill-city" />
                        <IgrInput required label="Street" type="text" name="bill-street" />
                        <IgrButton onClick={() => stepperRef.current?.prev()}>
                            <span>PREVIOUS</span>
                        </IgrButton>
                        <IgrButton onClick={() => stepperRef.current?.next()}>
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
                    <IgrButton onClick={() => stepperRef.current?.prev()}>
                        <span>PREVIOUS</span>
                    </IgrButton>
                    <IgrButton onClick={() => stepperRef.current?.next()}>
                        <span>SUBMIT</span>
                    </IgrButton>
                </IgrStep>
                <IgrStep>
                    <span slot="title">Delivery status</span>
                    <p>
                        Your order is on its way. Expect delivery on 25th September 2021.
                        Delivery address: San Jose, CA 94243.
                    </p>
                    <IgrButton onClick={() => stepperRef.current?.prev()}>
                        <span>PREVIOUS</span>
                    </IgrButton>
                    <IgrButton onClick={() => stepperRef.current?.reset()}>
                        <span>RESET</span>
                    </IgrButton>
                </IgrStep>
            </IgrStepper>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearStepper/>);
