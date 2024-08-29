import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './AccordionCustomization.css';
import {
    IgrAccordion, IgrAccordionModule, IgrCheckbox, IgrCheckboxChangeEventArgs, IgrCheckboxModule,
    IgrDateTimeInput, IgrDateTimeInputModule, IgrExpansionPanel, IgrExpansionPanelModule, IgrIcon,
    IgrIconModule, IgrRadio, IgrRadioModule, IgrRadioGroup, IgrRadioGroupModule, IgrRating,
    IgrRatingModule, IgrRangeSlider, IgrRangeSliderModule, IgrRadioChangeEventArgs,
    IgrRangeSliderValueEventArgs, IIgrRadioProps, IgrComponentDateValueChangedEventArgs
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrAccordionModule.register();
IgrCheckboxModule.register();
IgrDateTimeInputModule.register();
IgrExpansionPanelModule.register();
IgrIconModule.register();
IgrRadioModule.register();
IgrRadioGroupModule.register();
IgrRangeSliderModule.register();
IgrRatingModule.register();

type Category = { checked: boolean; type: string };

export default class AccordionCustomization extends React.Component<any, any> {
    private categories = [
        { checked: false, type: "Bike" },
        { checked: false, type: "Motorcycle" },
        { checked: false, type: "Car" },
        { checked: false, type: "Taxi" },
        { checked: false, type: "Public Transport" }
    ];

    private clearIcon: IgrIcon;
    private clockIcon: IgrIcon;
    private dateTimeInput: IgrDateTimeInput;

    constructor(props: any) {
        super(props);
        this.state = {
            categories: this.categories,
            cost: { lower: 200, upper: 800 },
            rating: '',
            time: 'Time'
        };

        this.categoriesChange = this.categoriesChange.bind(this);
        this.costRangeChange = this.costRangeChange.bind(this);
        this.ratingChange = this.ratingChange.bind(this);
        this.timeChange = this.timeChange.bind(this);
        this.clearTime = this.clearTime.bind(this);
        this.clockIconRef = this.clockIconRef.bind(this);
        this.clearIconRef = this.clearIconRef.bind(this);
        this.dateTimeInputRef = this.dateTimeInputRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div id="root">
                <div className="sample-wrapper">
                    <IgrAccordion>
                        <IgrExpansionPanel key="ep1">
                            <h1 slot="title" key="ep1Title">
                                Categories
                                {this.state.categories.some((c: Category) => c.checked) && ': '}
                                {this.state.categories.filter((c: Category) => c.checked).map((c: Category) => c.type).join(', ')}
                            </h1>
                            <span key="ep1Span">
                                <div className="categories-container">
                                    {this.state.categories.map((c: Category) => {
                                        return (
                                            <IgrCheckbox key={'checkbox-' + c.type}
                                                change={(s: IgrCheckbox, e: IgrCheckboxChangeEventArgs) => this.categoriesChange(s, e, c.type)}>
                                                <span key={'cbSpan-' + c.type}>{c.type}</span>
                                            </IgrCheckbox>
                                        );
                                    })}
                                </div>
                            </span>
                        </IgrExpansionPanel>
                        <IgrExpansionPanel key="ep2">
                            <h1 slot="title" key="ep2Title">
                                Cost: $<span id="lowerCost">{this.state.cost.lower}</span> to $<span id="upperCost">{this.state.cost.upper}</span>
                            </h1>
                            <span key="ep2Span">
                                <IgrRangeSlider key="rangeSlider" min="0" max="1000" lower={this.state.cost.lower} upper={this.state.cost.upper}
                                    change={this.costRangeChange}>
                                </IgrRangeSlider>
                            </span>
                        </IgrExpansionPanel>
                        <IgrExpansionPanel key="ep3">
                            <h1 slot="title" key="ep3Title">Rating{this.state.rating && ': '}{this.state.rating}</h1>
                            <span key="ep3Span">
                                <IgrRadioGroup key="radio" alignment="horizontal">
                                    {[1, 2, 3, 4].map(rating => {
                                        return (
                                            <IgrRadio key={`${rating}star`} name="rating" value={rating.toString()} change={this.ratingChange}>
                                                <IgrRating label={`${rating} star${rating > 1 ? 's' : ''} or more`} max="5" value={rating + 0.5}
                                                    className="size-small" readonly key={`{r-${rating}}`}>
                                                </IgrRating>
                                            </IgrRadio>
                                        );
                                    })}
                                </IgrRadioGroup>
                            </span>
                        </IgrExpansionPanel>
                        <IgrExpansionPanel key="ep4">
                            <h1 slot="title" key="ep4Title">{this.state.time}</h1>
                            <span key="ep4Span">
                                <IgrDateTimeInput className="size-small" key="dtInput" inputFormat="hh:mm tt" label="Arrive before"
                                    ref={this.dateTimeInputRef} change={this.timeChange}>
                                    <span key="sPrefix" slot="prefix">
                                        <IgrIcon name="clock" collection="material" ref={this.clockIconRef} />
                                    </span>
                                    <span key="sSuffix" slot="suffix" onClick={this.clearTime}>
                                        <IgrIcon name="clear" collection="material" ref={this.clearIconRef} />
                                    </span>
                                </IgrDateTimeInput>
                            </span>
                        </IgrExpansionPanel>
                    </IgrAccordion>
                </div>
            </div>
        );
    }

    public categoriesChange(s: IgrCheckbox, e: IgrCheckboxChangeEventArgs, type: string) {
        const categoryIndex = this.categories.findIndex(c => c.type === type);
        if (categoryIndex === -1) { return; }
        let categoriesCopy = this.state.categories;
        categoriesCopy[categoryIndex].checked = e.detail.checked;
        this.setState({
            categories: categoriesCopy
        });
    }

    public costRangeChange(s: IgrRangeSlider, e: IgrRangeSliderValueEventArgs) {
        this.setState({
            cost: { lower: e.detail.lower, upper: e.detail.upper }
        });
    }

    public ratingChange(s: IgrRadio<IIgrRadioProps>, e: IgrRadioChangeEventArgs) {
        if (!e.detail) { return; }
        this.setState({
            rating: `${+s.value} star${+s.value > 1 ? 's' : ''} or more`
        });
    }

    public timeChange(s: IgrDateTimeInput, e: IgrComponentDateValueChangedEventArgs) {
        const result = s.value !== null ? `Arrive before ${e.detail.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : 'Time';
        this.setState({
            time: result
        });
    }

    public clearTime() {
        this.dateTimeInput.clear(); this.setState({
            time: 'Time'
        });
    }

    public dateTimeInputRef(input: IgrDateTimeInput) {
        if (!input) { return; }
        this.dateTimeInput = input;
    }

    public clearIconRef(icon: IgrIcon) {
        if (!icon) { return; }
        this.clearIcon = icon;
        const clearIcon =
            "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /></svg>";
        this.clearIcon.registerIconFromText("clear", clearIcon, "material");
    }

    public clockIconRef(icon: IgrIcon) {
        if (!icon) { return; }
        this.clockIcon = icon;
        const clockIcon =
            "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /></svg>";
        this.clockIcon.registerIconFromText("clock", clockIcon, "material");
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AccordionCustomization />);
