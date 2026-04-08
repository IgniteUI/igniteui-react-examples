import React, { useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './AccordionCustomization.css';
import {
    IgrAccordion,
    IgrCheckbox,
    IgrCheckboxChangeEventArgs,
    IgrDateTimeInput,
    IgrExpansionPanel,
    IgrIcon,
    IgrRadio,
    IgrRadioGroup,
    IgrRating,
    IgrRangeSlider,
    IgrRadioChangeEventArgs,
    IgrRangeSliderValueEventArgs,
    IgrComponentDateValueChangedEventArgs,
    registerIconFromText,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

type Category = { checked: boolean; type: string };

const clearIcon =
    "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /></svg>";
const clockIcon =
    "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /></svg>";

registerIconFromText('clear', clearIcon, 'material');
registerIconFromText('clock', clockIcon, 'material');

const INITIAL_CATEGORIES: Category[] = [
    { checked: false, type: 'Bike' },
    { checked: false, type: 'Motorcycle' },
    { checked: false, type: 'Car' },
    { checked: false, type: 'Taxi' },
    { checked: false, type: 'Public Transport' },
];

export default function AccordionCustomization() {
    const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);
    const [cost, setCost] = useState({ lower: 200, upper: 800 });
    const [rating, setRating] = useState('');
    const [time, setTime] = useState('Time');
    const dateTimeInputRef = useRef<IgrDateTimeInput>(null);

    const categoriesChange = useCallback((e: IgrCheckboxChangeEventArgs, type: string) => {
        setCategories(prev =>
            prev.map(c => c.type === type ? { ...c, checked: e.detail.checked } : c)
        );
    }, []);

    const costRangeChange = useCallback((e: IgrRangeSliderValueEventArgs) => {
        setCost({ lower: e.detail.lower, upper: e.detail.upper });
    }, []);

    const ratingChange = useCallback((e: IgrRadioChangeEventArgs) => {
        if (!e.detail.value) return;
        const stars = +e.detail.value;
        setRating(`${stars} star${stars > 1 ? 's' : ''} or more`);
    }, []);

    const timeChange = useCallback((e: IgrComponentDateValueChangedEventArgs) => {
        const s = e.target as IgrDateTimeInput;
        const result =
            s.value !== null
                ? `Arrive before ${e.detail.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
                : 'Time';
        setTime(result);
    }, []);

    const clearTime = useCallback(() => {
        dateTimeInputRef.current?.clear();
        setTime('Time');
    }, []);

    return (
        <div id="root">
            <div className="sample-wrapper">
                <IgrAccordion>
                    <IgrExpansionPanel>
                        <h1 slot="title">
                            Categories
                            {categories.some((c: Category) => c.checked) && ': '}
                            {categories
                                .filter((c: Category) => c.checked)
                                .map((c: Category) => c.type)
                                .join(', ')}
                        </h1>
                        <span>
                            <div className="categories-container">
                                {categories.map((c: Category) => (
                                    <IgrCheckbox
                                        key={'checkbox-' + c.type}
                                        onChange={(e: IgrCheckboxChangeEventArgs) => categoriesChange(e, c.type)}
                                    >
                                        <span>{c.type}</span>
                                    </IgrCheckbox>
                                ))}
                            </div>
                        </span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <h1 slot="title">
                            Cost: $<span id="lowerCost">{cost.lower}</span> to $
                            <span id="upperCost">{cost.upper}</span>
                        </h1>
                        <span>
                            <IgrRangeSlider
                                min={0}
                                max={1000}
                                lower={cost.lower}
                                upper={cost.upper}
                                onChange={costRangeChange}
                            />
                        </span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <h1 slot="title">
                            Rating{rating && ': '}
                            {rating}
                        </h1>
                        <span>
                            <IgrRadioGroup alignment="horizontal">
                                {[1, 2, 3, 4].map(r => (
                                    <IgrRadio
                                        key={`${r}star`}
                                        name="rating"
                                        value={r.toString()}
                                        onChange={ratingChange}
                                    >
                                        <IgrRating
                                            label={`${r} star${r > 1 ? 's' : ''} or more`}
                                            max={5}
                                            value={r + 0.5}
                                            className="size-small"
                                            readOnly={true}
                                        />
                                    </IgrRadio>
                                ))}
                            </IgrRadioGroup>
                        </span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <h1 slot="title">{time}</h1>
                        <span>
                            <IgrDateTimeInput
                                className="size-small"
                                inputFormat="hh:mm tt"
                                label="Arrive before"
                                ref={dateTimeInputRef}
                                onChange={timeChange}
                            >
                                <span slot="prefix">
                                    <IgrIcon name="clock" collection="material" />
                                </span>
                                <span slot="suffix" onClick={clearTime}>
                                    <IgrIcon name="clear" collection="material" />
                                </span>
                            </IgrDateTimeInput>
                        </span>
                    </IgrExpansionPanel>
                </IgrAccordion>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AccordionCustomization/>);
