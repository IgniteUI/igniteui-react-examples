import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, IgrRating, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const headphonesIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>';

export default function RatingTailwindStyling(): JSX.Element {
    useEffect(() => {
        registerIconFromText('headphones', headphonesIcon, 'material');
    }, []);

    return (
        <div className="sample flex items-center justify-center">
            <div className="w-[328px] rounded-xl border border-product-border bg-white p-2 font-[aktiv-grotesk,sans-serif] [--ig-font-family:aktiv-grotesk,sans-serif]">
                <div className="flex items-center gap-4 px-4 py-2">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-b from-[#d2f7ff] to-[#8fb0cf]">
                        <IgrIcon className="text-[#5f83a7] [--ig-icon-size:1.75rem]" name="headphones" collection="material" />
                    </div>
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
