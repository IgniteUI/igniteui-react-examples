import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrChip, IgrInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const skills = ['Figma', 'React', 'CSS', 'Prototyping', 'Motion Design'];

export default function ChipOverview(): JSX.Element {
    const [name, setName] = useState('Jordan Lee');
    const [selectedSkills, setSelectedSkills] = useState<string[]>(['Prototyping', 'Motion Design']);
    const skillsRef = useRef<HTMLDivElement>(null);
    const selectedRef = useRef<HTMLDivElement>(null);
    const removed = useRef<{ skill: string; index: number } | null>(null);

    // Both groups list the selected skills in the order of the skills list.
    const selected = skills.filter((skill) => selectedSkills.includes(skill));

    const toggleSkill = (skill: string, isSelected: boolean) => {
        setSelectedSkills((current) =>
            isSelected ? [...current, skill] : current.filter((item) => item !== skill)
        );
    };

    const removeSkill = (skill: string) => {
        removed.current = { skill, index: selected.indexOf(skill) };
        toggleSkill(skill, false);
    };

    // The removed chip is gone, so move focus to the next selected skill, or back to the skill itself when none is left.
    useEffect(() => {
        if (!removed.current) {
            return;
        }
        const { skill, index } = removed.current;
        removed.current = null;

        const remaining = selectedRef.current?.querySelectorAll<HTMLElement>('igc-chip');
        const next = remaining?.[index] ?? remaining?.[index - 1];
        // The chip doesn't delegate focus yet, so focus its inner controls directly.
        const target = next
            ? next.shadowRoot?.querySelector<HTMLElement>('[part="remove"] igc-icon')
            : skillsRef.current?.querySelectorAll('igc-chip')[skills.indexOf(skill)]?.shadowRoot?.querySelector<HTMLElement>('[part="action"]');
        target?.focus();
    }, [selectedSkills]);

    return (
        <div className="sample">
            <div className="profile-card">
                <div>
                    <span className="section-header" id="name-header">Name</span>
                    <IgrInput
                        className="name-input"
                        outlined
                        value={name}
                        aria-labelledby="name-header"
                        onInput={(e) => setName(e.detail)}
                    />
                </div>
                <div>
                    <span className="section-header" id="skills-header">
                        Skills · {selected.length} selected
                    </span>
                    <div className="chip-group" ref={skillsRef} role="group" aria-labelledby="skills-header">
                        {skills.map((skill) => (
                            <IgrChip
                                className="skill"
                                key={skill}
                                outlined
                                selectable
                                selected={selectedSkills.includes(skill)}
                                onSelect={(e) => toggleSkill(skill, e.detail)}
                            >
                                {skill}
                            </IgrChip>
                        ))}
                    </div>
                </div>
                <div>
                    <span className="section-header" id="selected-header">Selected</span>
                    <div className="chip-group" ref={selectedRef} role="group" aria-labelledby="selected-header">
                        {selected.map((skill) => (
                            <IgrChip className="skill" key={skill} outlined removable onRemove={() => removeSkill(skill)}>
                                {skill}
                            </IgrChip>
                        ))}
                    </div>
                </div>
                <div className="actions">
                    <IgrButton>Save profile</IgrButton>
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipOverview/>);
