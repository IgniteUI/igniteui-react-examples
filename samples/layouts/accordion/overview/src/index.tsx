import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './AccordionOverview.css';
import {
    IgrAccordion, IgrAccordionModule, IgrExpansionPanel, IgrExpansionPanelModule, IgrSwitch, IgrSwitchModule,
    IgrComponentBoolValueChangedEventArgs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrAccordionModule.register();
IgrExpansionPanelModule.register();
IgrSwitchModule.register();

export default class AccordionOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { singleExpand: false };
        this.switchChange = this.switchChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div id="root">
                <IgrSwitch key="switch" change={this.switchChange}><span key="swText">Single Expand</span></IgrSwitch>
                <div className="sample-wrapper">
                    <IgrAccordion singleExpand={this.state.singleExpand}>
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
                            <h1 slot="title" key="ep4Title">What happens if I don&apos;t renew my subscription?</h1>
                            <span key="ep4Span">Any unlicensed or trial versions of Ignite UI for Angular, React and Web Components will now include this watermark.</span>
                        </IgrExpansionPanel>
                        <IgrExpansionPanel key="ep5">
                            <h1 slot="title" key="ep5Title">If I don&apos;t renew my subscription will I still have access to previous versions of Infragistics products?</h1>
                            <span key="ep5Span">Any version of Infragistics software which you have downloaded can continue to be used perpetually. Access to download any new or
                                previous versions through our customer portal and package feeds will require maintaining an active subscription by continuing
                                to renew it.</span>
                        </IgrExpansionPanel>
                    </IgrAccordion>
                </div>
            </div>
        );
    }

    public switchChange(s: IgrSwitch, e: IgrComponentBoolValueChangedEventArgs) {
        this.setState({ singleExpand: e.detail })
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AccordionOverview />);
