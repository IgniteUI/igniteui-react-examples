import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RatingTailwindStyling(): JSX.Element {
    return (
        <div className="sample flex items-center justify-center">
            <div className="w-[328px] rounded-xl border border-product-border bg-white p-2 font-[aktiv-grotesk,sans-serif] [--ig-font-family:aktiv-grotesk,sans-serif]">
                <div className="flex items-center gap-4 px-4 py-2">
                    <img className="size-10 shrink-0 rounded-lg object-cover" src="https://dl.infragistics.com/x/img/rating/rating-headphones.png" alt="Wireless headphones" />
                    <div className="flex-1">
                        <span className="block text-sm leading-5 font-medium text-product-ink">Wireless Headphones</span>
                        <span className="block max-w-36 text-xs leading-4 font-semibold text-product-muted">Great sound quality and battery life!</span>
                    </div>
                    <span className="text-xl text-product-primary">$89</span>
                </div>
                <div className="flex items-end justify-between border-t border-product-border p-2">
                    <IgrRating
                        className="[--ig-rating-label-color:var(--color-rating-label)] [--ig-rating-symbol-empty-color:var(--color-rating-empty)] [--ig-rating-symbol-full-color:var(--color-rating-full)] [&::part(label)]:font-['Titillium_Web',sans-serif] [&::part(label)]:text-xs [&::part(label)]:leading-4 [&::part(label)]:font-normal [&::part(label)]:tracking-[0.4px]"
                        label="Rate this product"
                        hoverPreview={true}
                    />
                    <IgrButton
                        className="[--ig-contained-button-active-background:var(--color-product-primary-active)] [--ig-contained-button-background:var(--color-product-primary)] [--ig-contained-button-border-radius:0.375rem] [--ig-contained-button-focus-background:var(--color-product-primary-active)] [--ig-contained-button-focus-hover-background:var(--color-product-primary-hover)] [--ig-contained-button-focus-visible-background:var(--color-product-primary)] [--ig-contained-button-hover-background:var(--color-product-primary-hover)] [--ig-contained-button-size:1.875rem] [&::part(base)]:px-4 [&::part(base)]:text-sm [&::part(base)]:font-medium [&::part(base)]:tracking-[0.1px] [&::part(base)]:normal-case"
                        variant="contained"
                    >
                        Submit review
                    </IgrButton>
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingTailwindStyling/>);
