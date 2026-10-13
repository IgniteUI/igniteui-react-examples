import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { icons } from './icons';

const activities = [
    { label: 'Yoga', icon: 'self_improvement' },
    { label: 'Swimming', icon: 'pool' },
    { label: 'Hiking', icon: 'hiking' },
    { label: 'Lifting', icon: 'fitness_center' },
    { label: 'Cycling', icon: 'directions_bike' },
    { label: 'Tennis', icon: 'sports_tennis' },
    { label: 'Soccer', icon: 'sports_soccer' },
    { label: 'Baseball', icon: 'sports_baseball' },
];

type Activity = (typeof activities)[number];

const chipLabel = 'text-sm font-medium leading-5 tracking-[0.25px]';

// `flex` keeps the chip host's line box from adding height around the chip.
const selectedChip =
    'flex [--ig-chip-border-radius:0.5rem] ' +
    '[--ig-chip-background:var(--color-activity-primary)] [--ig-chip-text-color:white] ' +
    '[--ig-chip-hover-background:var(--color-activity-primary-strong)] [--ig-chip-hover-text-color:white] ' +
    '[--ig-chip-focus-background:var(--color-activity-primary-strong)] [--ig-chip-focus-text-color:white] ' +
    '[--ig-chip-remove-icon-color:white] [--ig-chip-remove-icon-color-focus:white]';

const availableChip =
    'flex [--ig-chip-border-radius:0.5rem] [--ig-chip-border-color:var(--color-activity-primary)] ' +
    '[--ig-chip-outlined-background:var(--color-activity-tint)] [--ig-chip-outlined-text-color:var(--color-activity-primary)] ' +
    '[--ig-chip-hover-outlined-background:var(--color-activity-tint-strong)] [--ig-chip-hover-outlined-text-color:var(--color-activity-primary)] [--ig-chip-hover-border-color:var(--color-activity-primary)] ' +
    '[--ig-chip-focus-outlined-background:var(--color-activity-tint-strong)] [--ig-chip-focus-outlined-text-color:var(--color-activity-primary)] [--ig-chip-focus-border-color:var(--color-activity-primary)]';

export default function ChipTailwindStyling(): JSX.Element {
    const [selected, setSelected] = useState<Activity[]>(activities.slice(0, 2));
    const available = activities.filter((activity) => !selected.includes(activity));
    const cardRef = useRef<HTMLDivElement>(null);
    const focusTarget = useRef<{ list: 'selected' | 'available'; label: string } | null>(null);

    useEffect(() => {
        Object.entries(icons).forEach(([name, svg]) => registerIconFromText(name, svg, 'material'));
    }, []);

    // The chip that had focus is gone, so focus a chip in the same list, or the moved chip when that list is empty.
    useEffect(() => {
        const target = focusTarget.current;
        focusTarget.current = null;
        const chip = target && cardRef.current?.querySelector<IgrChip>(`[data-activity="${target.label}"]`);
        if (!target || !chip) {
            return;
        }
        // A moved chip renders after this effect, and chips don't delegate focus yet, so wait and focus the control directly.
        chip.updateComplete.then(() => {
            const control = target.list === 'selected'
                ? chip.querySelector<HTMLElement>('[slot="remove"]')
                : chip.shadowRoot?.querySelector<HTMLElement>('[part="action"]');
            control?.focus();
        });
    }, [selected]);

    const addActivity = (activity: Activity) => {
        const rest = available.filter((item) => item !== activity);
        const next = rest[Math.min(available.indexOf(activity), rest.length - 1)];
        focusTarget.current = next ? { list: 'available', label: next.label } : { list: 'selected', label: activity.label };
        setSelected([...selected, activity]);
    };

    const removeActivity = (activity: Activity) => {
        const rest = selected.filter((item) => item !== activity);
        const next = rest[Math.min(selected.indexOf(activity), rest.length - 1)];
        focusTarget.current = next ? { list: 'selected', label: next.label } : { list: 'available', label: activity.label };
        setSelected(rest);
    };

    return (
        <div className="sample flex items-center justify-center">
            <div
                ref={cardRef}
                role="group"
                aria-labelledby="activity-title"
                className="box-border flex w-full max-w-[517px] flex-col gap-4 rounded-2xl bg-activity-surface p-4 font-[aktiv-grotesk,sans-serif] [--ig-font-family:aktiv-grotesk,sans-serif] [--ig-size:var(--ig-size-large)]"
            >
                {/* Not a heading: the theme's heading styles sit outside any CSS layer and would override these utilities. */}
                <span id="activity-title" className="flex h-8 items-center text-xl font-medium leading-6 text-activity-ink">
                    Preferred Activity
                </span>
                <div role="group" aria-label="Selected activities" className="box-border flex min-h-[72px] flex-wrap items-center gap-4 rounded-2xl bg-white px-6 py-5">
                    {selected.map((activity) => (
                        <IgrChip key={activity.label} data-activity={activity.label} className={selectedChip} removable onRemove={() => removeActivity(activity)}>
                            <IgrIcon slot="prefix" name={activity.icon} collection="material" />
                            <span className={chipLabel}>{activity.label}</span>
                            <IgrIcon
                                slot="remove"
                                className="[--ig-icon-size:1.125rem]"
                                name="close"
                                collection="material"
                                role="button"
                                tabIndex={0}
                                aria-label={`Remove ${activity.label}`}
                            />
                        </IgrChip>
                    ))}
                    <IgrIcon className="ms-auto text-activity-primary [--ig-icon-size:1.125rem]" name="add" collection="material" aria-hidden="true" />
                </div>
                <div role="group" aria-label="Add an activity" className="flex flex-wrap gap-4 rounded-2xl bg-white p-5">
                    {available.map((activity) => (
                        <IgrChip key={activity.label} data-activity={activity.label} className={availableChip} outlined onClick={() => addActivity(activity)}>
                            <IgrIcon slot="prefix" name={activity.icon} collection="material" />
                            <span className={chipLabel}>{activity.label}</span>
                        </IgrChip>
                    ))}
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipTailwindStyling/>);
