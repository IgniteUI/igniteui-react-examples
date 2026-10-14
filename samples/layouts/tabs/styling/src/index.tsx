import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrChip, IgrList, IgrListItem, IgrTab, IgrTabs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const sections = [
    {
        label: 'Overview',
        details: [
            { label: 'Email', value: 'emily.carter@gmail.com' },
            { label: 'Team', value: 'Finance, 8 members' },
            { label: 'Joined', value: 'March 2023' },
        ],
    },
    {
        label: 'Activity',
        details: [
            { label: 'Last login', value: 'Today, 09:24' },
            { label: 'Reports', value: '12 this month' },
            { label: 'Approvals', value: '3 pending' },
        ],
    },
    {
        label: 'Billing',
        disabled: true,
        details: [],
    },
];

export default function TabsStyling(): JSX.Element {
    return (
        <div className="sample">
            <div className="profile-card">
                <IgrList className="profile-header">
                    <IgrListItem>
                        <IgrAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/avatar-profile-09.png" alt="Emily Carter" shape="circle" />
                        <span slot="title" className="profile-name">Emily Carter</span>
                        <span slot="subtitle" className="profile-role">Finance lead - Sofia</span>
                        <IgrChip slot="end" className="profile-status">Active</IgrChip>
                    </IgrListItem>
                </IgrList>
                <IgrTabs className="profile-tabs" alignment="justify">
                    {sections.map((section) => (
                        <IgrTab key={section.label} label={section.label} disabled={section.disabled}>
                            <IgrList className="profile-details">
                                {section.details.map((detail) => (
                                    <IgrListItem key={detail.label}>
                                        <span slot="title" className="detail-label">{detail.label}</span>
                                        <span slot="end" className="detail-value">{detail.value}</span>
                                    </IgrListItem>
                                ))}
                            </IgrList>
                        </IgrTab>
                    ))}
                </IgrTabs>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TabsStyling/>);
