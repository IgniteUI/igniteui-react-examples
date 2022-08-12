import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CardSemiHorizontal.css';
import { IgrCard, IgrCardHeader, IgrCardContent, IgrCardActions, IgrCardMedia, IgrAvatar, IgrButton, IgrAvatarModule, IgrButtonModule, IgrCardModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCardModule.register();
IgrAvatarModule.register();
IgrButtonModule.register();

export default class CardSemiHorizontal extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <div className="card-wrapper">
                    <IgrCard>
                        <div key="cardContainer" className="semi-horizontal">
                            <div key="cardHeaderContainer" >
                                <IgrCardHeader key="header">
                                    <IgrAvatar key="headerAvatar" src="https://static.infragistics.com/xplatform/images/music/singer_with_mic.jpg" slot="thumbnail" />
                                    <h5 key="headerTitle" slot="title">HERE</h5>
                                    <h5 key="headerSubtitle" slot="subtitle">by Mellow D</h5>
                                </IgrCardHeader>

                                <IgrCardContent key="content">
                                    <p key="contentParagraph">Far far away, behind the word mountains,
                                        far from the countries Vokalia and Consonantia,
                                        there live the blind texts.</p>
                                </IgrCardContent>

                                <IgrCardActions key="actions">
                                    <IgrButton key="actionsBtn">
                                        <span key="btnCaption">Play Album</span>
                                    </IgrButton>
                                </IgrCardActions>
                            </div>
                            
                            <IgrCardMedia key="media" className='card-media'>
                                <img key="mediaImg" src="https://static.infragistics.com/xplatform/images/music/singer_female.jpg"></img>
                            </IgrCardMedia>
                        </div>
                    </IgrCard>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CardSemiHorizontal />, document.getElementById('root'));
