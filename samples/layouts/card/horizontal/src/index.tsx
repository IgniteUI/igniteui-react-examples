import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CardHorizontal.css';
import { IgrCard, IgrCardHeader, IgrCardContent, IgrCardActions } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function CardHorizontal() {

    return (
        <div className="container sample">
            <div className="card-wrapper">
                <IgrCard>
                    <div className="card-horizontal">
                        <div>
                            <IgrCardHeader>
                                <img src="https://static.infragistics.com/xplatform/images/music/rozes.jpg" slot="thumbnail"></img>
                                <h5 slot="title">Rozes</h5>
                                <h5 slot="subtitle">Under the Grave (2016)</h5>
                            </IgrCardHeader>
                            <IgrCardContent>
                                <p>As I have always said: I write what’s real and what’s true,
                                    even if it means throwing myself under the bus.</p>
                            </IgrCardContent>
                        </div>
                        <div className="divider"></div>
                        <IgrCardActions>
                            <span className="material-icons">skip_previous</span>
                            <span className="material-icons">play_arrow</span>
                            <span className="material-icons">skip_next</span>
                        </IgrCardActions>
                    </div>
                </IgrCard>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CardHorizontal/>);
