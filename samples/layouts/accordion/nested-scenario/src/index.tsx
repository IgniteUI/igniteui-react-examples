import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './AccordionNestedScenario.css';
import {
    IgrAccordion, IgrExpansionPanel, IgrSwitch,
    IgrCheckboxChangeEventArgs
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function AccordionNestedScenario() {

    const [singleExpand, setSingleExpand] = useState<boolean>(false);
    
    const switchChange = (e: IgrCheckboxChangeEventArgs) => {
        setSingleExpand(e.detail.checked);
    }

    return (
        <div id="root">
            <IgrSwitch key="switch" onChange={switchChange}><span key="swText">Single Expand</span></IgrSwitch>
            <div className="sample-wrapper">
                <IgrAccordion singleExpand={singleExpand}>
                    <IgrExpansionPanel key="ep1">
                        <h1 slot="title" key="ep1Title">What has changed about subscription and pricing model?</h1>
                        <span key="ep1Span">We have moved to a subscription-based pricing model for all our developer tools. This makes it easier
                            for you to manage your license subscriptions and allows us to provide a better level of service for you. We
                            updated our pricing and packages to provide you with flexible options and the best value. This includes Ignite UI
                            (formerly Ignite UI for JavaScript) which includes all of our JavaScript framework components for web development,
                            including: Angular, ASP.NET (Core and MVC), Blazor, JQuery, React and Web Components, as well as Infragistics Professional,
                            Infragistics Ultimate, our Ultimate UI products. We also offer multi-year subscriptions options with a built-in discount,
                            so you can see the value up front. With these updates we are confident that we are providing the best platforms and the best
                            price.</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel key="ep2">
                        <h1 slot="title" key="ep2Title">Who will the updated changes impact?</h1>
                        <span key="ep2Span">The license updates will impact all new and current customers using Ignite UI, Infragistics Professional and
                            Infragistics Ultimate. Specifically, we have also made updates to our product and packaging for Ignite UI for JavaScript,
                            Ignite UI for Angular, Ignite UI for React and Ignite UI for Web components. For more information, please refer to this
                            blog: Announcement: Changes to Ignite UI Product & Packaging The pricing has been updated for all products and packages.
                            So, all new or additional licenses will be sold based on our new pricing and packages. All existing license agreements will
                            be honored and renewed based upon the current agreement.</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel key="ep3">
                        <h1 slot="title" key="ep3Title">What is the difference between your old model and your current subscription model for Ignite UI?</h1>
                        <span key="ep3Span">For Ignite UI customers, we are moving away from NPM for licensed packages. The current NPM packages will be replaced with
                            packages that include a “Trial Version” watermark. Licensed packages for Ignite UI will be available from our cloud hosted ProGet
                            server. For more information, please refer to this article: Moving from Trial to Licensed Ignite UI NPM Packages</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel key="ep4">
                        <h1 slot="title" key="ep4Title">Common questions about renewal.</h1>
                        <span key="ep4Span">
                            <IgrAccordion>
                                <IgrExpansionPanel key="ep4.1">
                                    <h1 slot="title" key="ep4.1Title">What happens if I don&apos;t renew my subscription?</h1>
                                    <span key="ep4.1Span">Any unlicensed or trial versions of Ignite UI for Angular, React and Web Components will now include this watermark.</span>
                                </IgrExpansionPanel>
                                <IgrExpansionPanel key="ep4.2">
                                    <h1 slot="title" key="ep4.2Title">If I don&apos;t renew my subscription will I still have access to previous versions of Infragistics products?</h1>
                                    <span key="ep4.2Span">Any version of Infragistics software which you have downloaded can continue to be used perpetually. Access to download any new or
                                        previous versions through our customer portal and package feeds will require maintaining an active subscription by continuing
                                        to renew it.</span>
                                </IgrExpansionPanel>
                                <IgrExpansionPanel key="ep4.3">
                                    <h1 slot="title" key="ep4.3Title">Will I be automatically charged for my renewal/ Can I be automatically charged for renewal?</h1>
                                    <span key="ep4.3Span">Any new subscriptions purchased online, via our eCommerce system, will renew automatically. Subscription renewal can be canceled,
                                        at any time, before the next automatic renewal date. Subscriptions purchased directly from Infragistics or Infragistics&apos; partners are
                                        subject to the renewal terms that were agreed upon as part of that purchase.</span>
                                </IgrExpansionPanel>
                            </IgrAccordion>
                        </span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel key="ep5">
                        <h1 slot="title" key="ep5Title">I split my work across two computers. Can I install on both using my single-user license?</h1>
                        <span key="ep5Span">The Infragistics Ultimate license is tied to the user, and not the computer. That means you&apos;re welcome to install and use Ignite UI,
                            Infragistics Professional, and Infragistics Ultimate on any computer you use. However, if we notice a large number of activations using the
                            same license, we may contact you to verify this behavior.</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel key="ep6">
                        <h1 slot="title" key="ep6Title">I used up my trial for an earlier version of Infragistics Ultimate. Can I start a new trial when a major version is released?</h1>
                        <span key="ep6Span">Yes! If you have tried a previous version in the past, and used up your 30-day trial, you can try the next major version for another 30 days!
                            You can do this in the following two ways:
                            <ul>
                                <li>If you have days remaining in your 30-day trial period for the current version (e.g., the
                                    Version 15.1 Volume Release), use the Check for Update option inside the Platform Installer or
                                    your account. You will be able to start a fresh trial for the next major version (e.g., 20.1
                                    Volume Release)</li>
                                <li>If you have used up the 30-day trial for the previous major version (e.g., the 19.2 Volume
                                    Release), simply download and install Infragistics Ultimate from our <a
                                        href="https://www.infragistics.com/products/ultimate">website</a> (This will also allow you
                                    to start a new trial.)</li>
                            </ul></span>
                    </IgrExpansionPanel>
                </IgrAccordion>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AccordionNestedScenario />);
