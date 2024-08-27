import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './DockManagerStyles.css';
import { IgcDockManagerComponent, IgcContentPane, IgcDockManagerLayout, IgcSplitPane, IgcTabGroupPane } from "igniteui-dockmanager";
import { IgcDockManagerPaneType, IgcSplitPaneOrientation } from "igniteui-dockmanager";
import { defineCustomElements } from "igniteui-dockmanager/loader";
import { IgrAvatar, IgrButton, IgrCard, IgrCardActions, IgrCardContent, IgrIcon, IgrIconButton, IgrList, IgrListItem } from "igniteui-react" ;
import { IgrAvatarModule, IgrButtonModule, IgrCardModule, IgrIconModule, IgrListModule } from "igniteui-react";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrIconModule.register();
IgrListModule.register();

/* eslint-disable */
declare global {
    namespace JSX {
        // tslint:disable-next-line:interface-name
        interface IntrinsicElements {
            "igc-dockmanager": any;
        }
    }
}
/* eslint-enable */

defineCustomElements();

export default class DockManagerStyling extends React.Component {

    public dockManager: IgcDockManagerComponent;
    public layouts: any[];

    constructor(props: any){        
        super(props);        
        this.onSampleResize = this.onSampleResize.bind(this);   
        this.iconRef = this.iconRef.bind(this);     
    }

    public iconRef(icon: IgrIcon){
        if(!icon){
            return;
        }

        const arrowDown = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 10l5 5 5-5H7z'/></svg>";
        const arrowUp = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 14l5-5 5 5H7z'/></svg>";

        icon.registerIconFromText("arrow-down", arrowDown, "material");
        icon.registerIconFromText("arrow-up", arrowUp, "material");            
    }

    public render(): JSX.Element {
        return (
            <div id="sampleContainer" className="container sample">
                <igc-dockmanager id="dockManager" height="100%" width="100%">
                    <div slot="accountHeader" className="header">
                        <span>ACCOUNTS</span>
                        {/* <menu-component></menu-component> */}
                    </div>
                    <div slot="accountFloatingHeader" className="floatingHeader">
                        <span>ACCOUNTS</span>
                        <button id="close" className="closeButton">
                            <IgrIcon ref={this.iconRef} name="close" />
                        </button>
                    </div>
                    <div className="dockManagerFull" slot="content1">
                        <IgrCard className="auto-y-overflow" elevated>
                            <IgrCardContent>
                                <div className="account-content">
                                    <div>
                                        <h1>$2980.00</h1>
                                        <span className="usd-caption">United States Dollar</span>
                                    </div>

                                    <IgrAvatar className="margin-avatar size-medium" src="https://static.infragistics.com/xplatform/images/flags/USA.png" shape="rounded">
                                            <span>USA</span>
                                    </IgrAvatar>
                                </div>
                            </IgrCardContent>

                            <IgrCardActions>
                                <div style={{display: "flex"}}>
                                    <div slot="start">
                                        <IgrButton className="size-medium" variant="fab">
                                            <span>Add Money</span>
                                        </IgrButton>
                                    </div>
                                    <div slot="start">
                                        <IgrButton className="size-medium" variant="fab">
                                            <span>Send</span>
                                        </IgrButton>
                                    </div>
                                </div>
                            </IgrCardActions>
                        </IgrCard>
                    </div>

                    <div slot="todayTopMovers" className="header">
                        <span>TODAY&apos;S TOP MOVERS</span>
                        {/* <menu-component></menu-component> */}
                    </div>
                    <div slot="todayTopMoversFloatingHeader" className="floatingHeader">
                        <span>TODAY&apos;S TOP MOVERS </span>
                        <button id="close" className="closeButton">
                            <IgrIcon name="close" />
                        </button>
                    </div>
                    <div className="dockManagerFull" style={{overflowY: "scroll"}} slot="content2">
                        <div className="top-movers-content">
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/tesla.png" shape="circle">
                                    <span>TSLA</span>
                                </IgrAvatar>
                                <span>1017,08$</span>
                                <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>12,54%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/amc.png" shape="circle">
                                    <span>AMC</span>
                                </IgrAvatar>
                                <span>39,33$</span>
                                <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>12,72%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/canoo.png" shape="circle">
                                    <span>GOEV</span>
                                </IgrAvatar>
                                <span>12,33$</span>
                                <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>45,92%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/lucid.png" shape="circle">
                                    <span>LCID</span>
                                </IgrAvatar>
                                <span>58,14$</span>
                                <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>29,42%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/nio.png" shape="circle">
                                    <span>NIO</span>
                                </IgrAvatar>
                                <span>21,67$</span>
                                <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>7,25%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/stoneco.png" shape="circle">
                                    <span>STNE</span>
                                </IgrAvatar>
                                <span>22,48$</span>
                                <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>28,68%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/roku.png" shape="circle">
                                    <span>ROKU</span>
                                </IgrAvatar>
                                <span>249,35$</span>
                                <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>9,5%</div>
                            </div>
                            <div className="top-move-stock-item">
                                <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/maxar.png" shape="circle">
                                    <span>MAXR</span>
                                </IgrAvatar>
                                <span>33,14$</span>
                                <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>8,12%</div>
                            </div>
                        </div>
                    </div>
                    <div slot="transactionsHeader" className="header">
                        <span>TRANSACTIONS</span>
                        {/* <menu-component></menu-component> */}
                    </div>
                    <div slot="transactionsFloatingHeader" className="floatingHeader">
                        <span>TRANSACTIONS</span>
                        <button id="close" className="closeButton">
                            <IgrIcon name="close" />
                        </button>
                    </div>
                    <div className="dockManagerFull" slot="content3" >
                        <IgrList id="list" className="auto-y-overflow">
                            <IgrListItem>
                                <div slot="start" >
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-2.svg" shape="circle">
                                        <span>AMZN</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Money added via **0000</h2>
                                <span slot="subtitle">14:40</span>
                                <div slot="end" className="stock-price">
                                    <span>+ 2000$</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-only.svg" shape="circle">
                                        <span>SET</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Sports Event Tickets</h2>
                                <span slot="subtitle">Jun 21, 06:15, Declined because your card is inactive</span>
                                <div slot="end" className="stock-price">
                                    <span className="line-through">1017,08 $</span>
                                    <span className="light-gray-caption">900,08 $</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start" >
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-only.svg" shape="circle">
                                        <span>AT</span>
                                    </IgrAvatar>
                                </div>                                
                                <h2 slot="title">Airplane Tickets</h2>
                                <span slot="subtitle">Jun 21, 06:15, Declined because your card is inactive</span>
                                <div slot="end" className="stock-price">
                                    <span className="line-through">985,00 $</span>
                                    <span className="light-gray-caption">980,00 $</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start" >
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/building.svg" shape="circle">
                                        <span>H</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Hotel</h2>
                                <span slot="subtitle">Jun 21, 06:15</span>
                                <div slot="end" className="stock-price">
                                    <span>- 400,00 $</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/atm.svg" shape="circle">
                                        <span>ATM</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Cash at ATM 000000</h2>
                                <span slot="subtitle">14:40</span>
                                <div slot="end" className="stock-price">
                                    <span>- 140$</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-1.svg" shape="circle">
                                        <span>U</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Utilities</h2>
                                <span slot="subtitle">21/06/2021 16:00</span>
                                <div slot="end" className="stock-price">
                                    <span>- 200$</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/atm.svg" shape="circle">
                                        <span>ATM</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Cash at ATM 000001</h2>
                                <span slot="subtitle">10:10</span>
                                <div slot="end" className="stock-price">
                                    <span>- 280$</span>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start" >
                                    <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/cash-2.svg" shape="circle">
                                        <span>MA</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Money added via **0000</h2>
                                <span slot="subtitle">14:40</span>
                                <div slot="end" className="stock-price">
                                    <span>+ 2000$</span>
                                </div>
                            </IgrListItem>
                        </IgrList>
                    </div>

                    <div slot="popularStocksHeader" className="header">
                        <span>POPULAR STOCKS</span>
                        {/* <menu-component></menu-component> */}
                    </div>
                    <div slot="popularStocksFloatingHeader" className="floatingHeader">
                        <span>POPULAR STOCKS</span>
                        <button id="close" className="closeButton">
                            <IgrIcon name="close" />
                        </button>
                    </div>
                    <div className="dockManagerFull" slot="content4">
                        <IgrList id="list" className="auto-y-overflow">
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/tesla.png" shape="circle">
                                        <span>TSLA</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Tesla</h2>
                                <span slot="subtitle">TSLA - Electric Vehicles</span>
                                <div slot="end" className="stock-price">
                                    <span>1017,08 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>12,54%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/apple.png" shape="circle">
                                        <span>APPL</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Apple</h2>
                                <span slot="subtitle">APPL - iPhones and Macs</span>
                                <div slot="end" className="stock-price">
                                    <span>150,47 $</span>
                                    <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>0,2%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/nio.png" shape="circle">
                                        <span>NIO</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">NIO</h2>
                                <span slot="subtitle">NIO - Electric Vehicles</span>
                                <div slot="end" className="stock-price">
                                    <span>40,07 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>7,25%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/amazon.png" shape="circle">
                                        <span>AMZN</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Amazon</h2>
                                <span slot="subtitle">AMZN - E-Commerce</span>
                                <div slot="end" className="stock-price">
                                    <span>3582,32 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>2,68%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/gme.png" shape="circle">
                                        <span>GME</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Game Stop</h2>
                                <span slot="subtitle">GME - Video Games Retail</span>
                                <div slot="end" className="stock-price">
                                    <span>205,60 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>5,96%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/amc.png" shape="circle">
                                        <span>AMC</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">AMC</h2>
                                <span slot="subtitle">AMC - Entertainment</span>
                                <div slot="end" className="stock-price">
                                    <span>39,33 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>12,72%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/microsoft.png" shape="circle">
                                        <span>MSFT</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Microsoft</h2>
                                <span slot="subtitle">MSFT - Tech Giant</span>
                                <div slot="end" className="stock-price">
                                    <span>335,66 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>0,39%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/spce.png" shape="circle">
                                        <span>SPCE</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Virgin Galactic</h2>
                                <span slot="subtitle">SPCE - Space Tourism</span>
                                <div slot="end" className="stock-price">
                                    <span>18,90 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>1,66%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/pfizer.png" shape="circle">
                                        <span>PFE</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Pfizer</h2>
                                <span slot="subtitle">PFE - Pharmaceuticals</span>
                                <div slot="end" className="stock-price">
                                    <span>49,43 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>0,60%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/google.png" shape="circle">
                                        <span>GOOGL</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Alpabet (Class A)</h2>
                                <span slot="subtitle">GOOGL - Tech Giant</span>
                                <div slot="end" className="stock-price">
                                    <span>2972,88 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>0,02%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/meta.png" shape="circle">
                                        <span>FB</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Meta Platforms</h2>
                                <span slot="subtitle">FB - Tech Giant</span>
                                <div slot="end" className="stock-price">
                                    <span>347,86 $</span>
                                    <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>2,04%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/palantir.png" shape="circle">
                                        <span>PLTR</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Palantir</h2>
                                <span slot="subtitle">PLTR - Data Analytics</span>
                                <div slot="end" className="stock-price">
                                    <span>23,30 $</span>
                                    <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>2,06%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/aa.png" shape="circle">
                                        <span>AAL</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">American Airlines</h2>
                                <span slot="subtitle">AAL - Airline Service</span>
                                <div slot="end" className="stock-price">
                                    <span>20,45 $</span>
                                    <div className="stock-item-movement-up"><IgrIcon name="arrow-up" collection="material"></IgrIcon>0.79%</div>
                                </div>
                            </IgrListItem>
                            <IgrListItem>
                                <div slot="start">
                                    <IgrAvatar src="https://static.infragistics.com/xplatform/images/company/netflix.png" shape="circle">
                                        <span>NFLX</span>
                                    </IgrAvatar>
                                </div>
                                <h2 slot="title">Netflix</h2>
                                <span slot="subtitle">NFLX - TV Streaming</span>
                                <div slot="end" className="stock-price">
                                    <span>679,39 $</span>
                                    <div className="stock-item-movement-down"><IgrIcon name="arrow-down" collection="material"></IgrIcon>0,47%</div>
                                </div>
                            </IgrListItem>
                        </IgrList>
                    </div>

                    <div slot="cardsHeader" className="header">
                        <span>PHYSICAL CARDS</span>
                        {/* <menu-component></menu-component> */}
                    </div>
                    <div slot="cardsFloatingHeader" className="floatingHeader">
                        <span>TODAY&apos;S TOP MOVERS</span>
                        <button id="close" className="closeButton">
                            <IgrIcon name="close" />
                        </button>
                    </div>
                    <div className="dockManagerFull" slot="content5">
                        <IgrCard className="auto-y-overflow" elevated>
                            <IgrCardContent>                                
                                <IgrButton className="add-card-btn size-small" variant="flat">
                                    <span>+ Add Card</span>
                                </IgrButton>                                
                                <IgrList id="list" className="auto-y-overflow">
                                    <IgrListItem>
                                        <div slot="start">
                                            <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/mastercard.svg" shape="circle">
                                                <span>MC</span>
                                            </IgrAvatar>
                                        </div>
                                        <h2 slot="title">Standard **0000</h2>
                                        <span slot="subtitle">Expires on 11/26</span>
                                    </IgrListItem>
                                    <IgrListItem>
                                        <div slot="start">
                                            <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/visa.svg" shape="circle">
                                                <span>VISA</span>
                                            </IgrAvatar>
                                        </div>
                                        <h2 slot="title">Rose gold **0000</h2>
                                        <span slot="subtitle">Expires on 11/24</span>
                                    </IgrListItem>
                                    <IgrListItem>
                                        <div slot="start" >
                                            <IgrAvatar src="https://raw.githubusercontent.com/IgniteUI/material-icons-extended/363c7f3e2da72df5fc2eb63b762a4e69f6fbc603/src/svgs/visa.svg" shape="circle">
                                                <span>VISA</span>
                                            </IgrAvatar>
                                        </div>
                                        <h2 slot="title">Virtual card **0000</h2>
                                        <span slot="subtitle">Expires on 10/22</span>
                                    </IgrListItem>
                                </IgrList>
                            </IgrCardContent>

                        </IgrCard>
                    </div>
                </igc-dockmanager>
            </div>
        );
    }

    public getContentPane(header: string, contentId: string, headerId: string, floatingHeaderId: string): IgcContentPane {
        const pane: IgcContentPane = {
            type: IgcDockManagerPaneType.contentPane,
            header: header,
            contentId: contentId,
            headerId: headerId,
            floatingHeaderId: floatingHeaderId,
            isPinned: true,
            allowMaximize: false,
            allowPinning: false,
            allowClose: false
        };
                
        return pane;
    }

    public getLayout1() : IgcDockManagerLayout{

        const accountPane = this.getContentPane("ACCOUNTS", "content1", "accountHeader", "accountFloatingHeader");
        const topMoversPane = this.getContentPane("TODAY'S TOP MOVERS", "content2", "todayTopMovers", "todayTopMoversFloatingHeader");        
        const transactionsPane = this.getContentPane("TRANSACTIONS", "content3", "transactionsHeader", "transactionsFloatingHeader");
        const popularStocksPane = this.getContentPane("POPULAR STOCKS", "content4", "popularStocksHeader", "popularStocksFloatingHeader");
        const cardsPane = this.getContentPane("PHYSICAL CARDS", "content5", "cardsHeader", "cardsFloatingHeader");        

        const splitPane1: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: []
        };        

        const splitPane2: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.vertical,
            size: 300,
            panes: []
        };

        const splitPane3: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            size: 300,
            panes: []
        };

        //AccountPane, CardsPane
        const splitPane4: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.vertical,
            size: 300,
            panes: []                 
        };

        //TransactionsPane
        const splitPane5: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.vertical,
            size: 300,
            panes: []
        };

        //Top Movers
        const splitPane6: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            size: 130,
            panes: []
        };

        //Popular Stocks
        const splitPane7: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.vertical,
            size: 200,
            panes: []
        };

        splitPane4.panes.push(accountPane);
        splitPane4.panes.push(cardsPane);

        splitPane5.panes.push(transactionsPane);

        splitPane6.panes.push(topMoversPane);

        splitPane7.panes.push(popularStocksPane);

        splitPane3.panes.push(splitPane4);
        splitPane3.panes.push(splitPane5);

        splitPane2.panes.push(splitPane3);
        splitPane2.panes.push(splitPane6);

        splitPane1.panes.push(splitPane2);
        splitPane1.panes.push(splitPane7);

        const layout: IgcDockManagerLayout = {
            rootPane: splitPane1
        }

        return layout;
    }

    public getLayout2() : IgcDockManagerLayout
    {
        const accountPane = this.getContentPane("ACCOUNTS", "content1", "accountHeader", "accountFloatingHeader");
        const topMoversPane = this.getContentPane("TODAY'S TOP MOVERS", "content2", "todayTopMovers", "todayTopMoversFloatingHeader");        
        const transactionsPane = this.getContentPane("TRANSACTIONS", "content3", "transactionsHeader", "transactionsFloatingHeader");
        const popularStocksPane = this.getContentPane("POPULAR STOCKS", "content4", "popularStocksHeader", "popularStocksFloatingHeader");
        const cardsPane = this.getContentPane("PHYSICAL CARDS", "content5", "cardsHeader", "cardsFloatingHeader");        


        const splitPane1: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: []
        };

        const splitPane2: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.vertical,
            size: 300,
            panes: []
        };

        const splitPane3: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            size: 300,
            panes: []
        };

        //Transactions Pane, TGP1
        const splitPane4: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.vertical,
            size: 300,
            panes: []
        };

        //Popular Stocks Pane
        const splitPane5: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.vertical,
            size: 300,
            panes: []
        };

        //Top Movers
        const splitPane6: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            size: 130,
            panes: []
        };

        //AccountPane, CardsPane
        const tabGroupPane1: IgcTabGroupPane =
        {
            type: IgcDockManagerPaneType.tabGroupPane,
            size: 100,
            panes: []
        };

        tabGroupPane1.panes.push(accountPane);
        tabGroupPane1.panes.push(cardsPane);

        splitPane4.panes.push(tabGroupPane1);
        splitPane4.panes.push(transactionsPane);

        splitPane5.panes.push(popularStocksPane);

        splitPane6.panes.push(topMoversPane);

        splitPane3.panes.push(splitPane4);
        splitPane3.panes.push(splitPane5);

        splitPane2.panes.push(splitPane3);
        splitPane2.panes.push(splitPane6);

        splitPane1.panes.push(splitPane2);

        const layout: IgcDockManagerLayout = {
            rootPane: splitPane1
        };        

        return layout;
    }

    public getLayout3() : IgcDockManagerLayout
    {
        const accountPane = this.getContentPane("ACCOUNTS", "content1", "accountHeader", "accountFloatingHeader");
        const topMoversPane = this.getContentPane("TODAY'S TOP MOVERS", "content2", "todayTopMovers", "todayTopMoversFloatingHeader");
        const transactionsPane = this.getContentPane("TRANSACTIONS", "content3", "transactionsHeader", "transactionsFloatingHeader");
        const popularStocksPane = this.getContentPane("POPULAR STOCKS", "content4", "popularStocksHeader", "popularStocksFloatingHeader");
        const cardsPane = this.getContentPane("PHYSICAL CARDS", "content5", "cardsHeader", "cardsFloatingHeader");

        const splitPane1: IgcSplitPane =
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.vertical,
            panes: []
        };

        const tabGroupPane1: IgcTabGroupPane =
        {
            type: IgcDockManagerPaneType.tabGroupPane,
            size: 200,
            panes: []
        };

        const tabGroupPane2: IgcTabGroupPane =
        {
            type: IgcDockManagerPaneType.tabGroupPane,
            size: 300,
            panes: []
        };

        tabGroupPane1.panes.push(accountPane);
        tabGroupPane1.panes.push(cardsPane);
        tabGroupPane1.panes.push(transactionsPane);

        tabGroupPane2.panes.push(popularStocksPane);
        tabGroupPane2.panes.push(topMoversPane);

        splitPane1.panes.push(tabGroupPane1);
        splitPane1.panes.push(tabGroupPane2);

        const layout: IgcDockManagerLayout = {
            rootPane: splitPane1
        };        

        return layout;
    }

    public onSampleResize() {        
        const width = this.dockManager.offsetWidth;

        if (width > 1200) {
            this.dockManager.layout = this.layouts[0];
        }
        if (width <= 1200) {
            this.dockManager.layout = this.layouts[1];
        }
        if (width <= 800) {
            this.dockManager.layout = this.layouts[2];
        }
    }

    public componentDidMount() {

        const layout1: IgcDockManagerLayout = this.getLayout1();
        const layout2: IgcDockManagerLayout = this.getLayout2();
        const layout3: IgcDockManagerLayout = this.getLayout3();        

        this.dockManager = document.getElementById("dockManager") as IgcDockManagerComponent;                

        window.onresize = this.onSampleResize;

        this.dockManager.layout = layout1;

        this.layouts = [layout1, layout2, layout3];
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DockManagerStyling/>);
