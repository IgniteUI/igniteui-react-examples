import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrList, IgrListItem, IgrListHeader, IgrRadioGroup, IgrRadio, IgrAvatar, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ListOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);        
        this.state = { listSize: "medium" };
        this.onRadioChange = this.onRadioChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRadioGroup alignment="horizontal" style={{marginBottom: '10px'}}>
                    <IgrRadio name="size" value="small" labelPosition="after" checked={this.state.listSize === "small" } onChange={this.onRadioChange}>
                        <span>Small</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="medium" labelPosition="after" checked={this.state.listSize === "medium" } onChange={this.onRadioChange}>
                        <span>Medium</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="large" labelPosition="after" checked={ this.state.listSize === "large" } onChange={this.onRadioChange}>
                        <span>Large</span>
                    </IgrRadio>
                </IgrRadioGroup>

                <IgrList className={'size-' + this.state.listSize}>
                    <IgrListHeader>
                        <span>Contacts</span>
                    </IgrListHeader>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://dl.infragistics.com/x/img/avatars/8.jpg" shape="circle" />
                        </div>                        
                        <h2 slot="title">Terrance Orta</h2>
                        <span slot="subtitle">770-504-2217</span>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://dl.infragistics.com/x/img/avatars/17.jpg" shape="circle" />
                        </div>
                        <h2 slot="title">Richard Mahoney</h2>
                        <span slot="subtitle">423-676-2869</span>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://dl.infragistics.com/x/img/avatars/9.jpg" shape="circle" />
                        </div>
                        <h2 slot="title">Donna Price</h2>
                        <span slot="subtitle">859-496-2817</span>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                </IgrList>
            </div>
        );
    }

    public onRadioChange(e: any) {
        if (e.detail.checked == true) {
            this.setState({ listSize: e.detail.value });
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListOverview/>);
