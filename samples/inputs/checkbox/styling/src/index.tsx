import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrButton, IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface TeamMember {
    name: string;
    email: string;
    avatar: string;
    selected: boolean;
}

const initialMembers: TeamMember[] = [
    { name: 'Emily Potter', email: 'emily@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png', selected: false },
    { name: 'Alex Lima', email: 'alex@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-05.png', selected: true },
    { name: 'Mateo García', email: 'mateo@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png', selected: false },
    { name: 'Kate Roberts', email: 'kate@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png', selected: false },
];

export default function CheckboxStyling(): JSX.Element {
    const [members, setMembers] = useState<TeamMember[]>(initialMembers);

    const allSelected = members.every((member) => member.selected);

    const toggleAll = (checked: boolean) => {
        setMembers((current) => current.map((member) => ({ ...member, selected: checked })));
    };

    const toggleMember = (index: number, checked: boolean) => {
        setMembers((current) => current.map((member, i) => (i === index ? { ...member, selected: checked } : member)));
    };

    return (
        <div className="sample">
            <div className="team-card">
                <p className="team-title">Team members</p>

                <IgrCheckbox
                    className="select-all"
                    labelPosition="before"
                    checked={allSelected}
                    onChange={(e) => toggleAll(e.detail.checked)}
                >
                    <span>Select all</span>
                </IgrCheckbox>

                {members.map((member, index) => (
                    <IgrCheckbox
                        className={member.selected ? 'member member-selected' : 'member'}
                        key={member.email}
                        labelPosition="before"
                        checked={member.selected}
                        onChange={(e) => toggleMember(index, e.detail.checked)}
                    >
                        <span className="member-info">
                            <IgrAvatar src={member.avatar} shape="circle" alt={member.name} />
                            <span className="member-text">
                                <span className="member-name">{member.name}</span>
                                <span className="member-email">{member.email}</span>
                            </span>
                        </span>
                    </IgrCheckbox>
                ))}

                <IgrButton variant="contained" className="continue-button">Continue</IgrButton>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckboxStyling/>);
