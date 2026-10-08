import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrChip, IgrInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const skills = ['Figma', 'React', 'CSS', 'Prototyping', 'Motion Design'];

export default function ChipOverview(): JSX.Element {
    const [name, setName] = useState('Jordan Lee');
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const toggleSkill = (skill: string, selected: boolean) => {
        setSelectedSkills((current) =>
            selected ? [...current, skill] : current.filter((item) => item !== skill)
        );
    };

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
                        Skills · {selectedSkills.length} selected
                    </span>
                    <div className="skills" role="group" aria-labelledby="skills-header">
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
