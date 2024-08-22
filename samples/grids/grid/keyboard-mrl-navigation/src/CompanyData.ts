export class CompanyDataItem {
    public constructor(init: Partial<CompanyDataItem>) {
        Object.assign(this, init);
    }

    public ID: string;
    public Company: string;
    public Address: string;
    public City: string;
    public Country: string;
    public LifetimeSales: number;
    public QuarterlySales: number;
    public YearlySales: number;
    public MarketPotential: number;
    public AssetsCash: number;
    public AccountsReceivable: number;
    public AssetsBooks: number;

}
export class CompanyData extends Array<CompanyDataItem> {
    public constructor(items: Array<CompanyDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CompanyDataItem(
                {
                    ID: `abc1000`,
                    Company: `Sportan`,
                    Address: `Rapelye Street`,
                    City: `Oceola`,
                    Country: `VU`,
                    LifetimeSales: 40882580.18,
                    QuarterlySales: 430845.78,
                    YearlySales: 1197420.17,
                    MarketPotential: 4210805124.61,
                    AssetsCash: 264714.71,
                    AccountsReceivable: 63084.44,
                    AssetsBooks: 7534.74
                }),
                new CompanyDataItem(
                {
                    ID: `abc1001`,
                    Company: `Bugsall`,
                    Address: `Hoyt Street`,
                    City: `Rosine`,
                    Country: `FM`,
                    LifetimeSales: 29231147.89,
                    QuarterlySales: 227299.97,
                    YearlySales: 1486467.06,
                    MarketPotential: 2505447478.96,
                    AssetsCash: 370690.39,
                    AccountsReceivable: 69242.24,
                    AssetsBooks: 12507.92
                }),
                new CompanyDataItem(
                {
                    ID: `abc1002`,
                    Company: `Hydrocom`,
                    Address: `Sunnyside Court`,
                    City: `Cornfields`,
                    Country: `KE`,
                    LifetimeSales: 35628528.18,
                    QuarterlySales: 226007.91,
                    YearlySales: 1092555.78,
                    MarketPotential: 4930069033.99,
                    AssetsCash: 403038.64,
                    AccountsReceivable: 56183.05,
                    AssetsBooks: 8113.52
                }),
                new CompanyDataItem(
                {
                    ID: `abc1003`,
                    Company: `Eclipto`,
                    Address: `Remsen Avenue`,
                    City: `Orin`,
                    Country: `TZ`,
                    LifetimeSales: 20178683.42,
                    QuarterlySales: 319645.81,
                    YearlySales: 1249194.57,
                    MarketPotential: 2488740024.16,
                    AssetsCash: 237368.76,
                    AccountsReceivable: 50048.48,
                    AssetsBooks: 13100.31
                }),
                new CompanyDataItem(
                {
                    ID: `abc1004`,
                    Company: `Paprikut`,
                    Address: `Bay Parkway`,
                    City: `Motley`,
                    Country: `LR`,
                    LifetimeSales: 25575955.42,
                    QuarterlySales: 347046.85,
                    YearlySales: 1611555.66,
                    MarketPotential: 1923959087.58,
                    AssetsCash: 235064.57,
                    AccountsReceivable: 74596.25,
                    AssetsBooks: 17057.85
                }),
                new CompanyDataItem(
                {
                    ID: `abc1005`,
                    Company: `Unia`,
                    Address: `Richards Street`,
                    City: `Herlong`,
                    Country: `DZ`,
                    LifetimeSales: 13462122.23,
                    QuarterlySales: 368636.73,
                    YearlySales: 489642.54,
                    MarketPotential: 1679474693.72,
                    AssetsCash: 498174.1,
                    AccountsReceivable: 92476.88,
                    AssetsBooks: 6961.9
                }),
                new CompanyDataItem(
                {
                    ID: `abc1006`,
                    Company: `Isologix`,
                    Address: `Williams Court`,
                    City: `Marysville`,
                    Country: `JO`,
                    LifetimeSales: 38448387.27,
                    QuarterlySales: 298248.71,
                    YearlySales: 1904695.32,
                    MarketPotential: 4696918929,
                    AssetsCash: 383266.93,
                    AccountsReceivable: 76247.35,
                    AssetsBooks: 6818.03
                }),
                new CompanyDataItem(
                {
                    ID: `abc1007`,
                    Company: `Deepends`,
                    Address: `Independence Avenue`,
                    City: `Riegelwood`,
                    Country: `NO`,
                    LifetimeSales: 13730298.02,
                    QuarterlySales: 323612.72,
                    YearlySales: 953860.54,
                    MarketPotential: 4825809829.87,
                    AssetsCash: 416146.08,
                    AccountsReceivable: 62282.5,
                    AssetsBooks: 13686.42
                }),
                new CompanyDataItem(
                {
                    ID: `abc1008`,
                    Company: `Quantasis`,
                    Address: `Berriman Street`,
                    City: `Unionville`,
                    Country: `ID`,
                    LifetimeSales: 19875841.19,
                    QuarterlySales: 468274.38,
                    YearlySales: 1569184.18,
                    MarketPotential: 3489758844.49,
                    AssetsCash: 415699.26,
                    AccountsReceivable: 54628.5,
                    AssetsBooks: 19321.38
                }),
                new CompanyDataItem(
                {
                    ID: `abc1009`,
                    Company: `Playce`,
                    Address: `India Street`,
                    City: `Joppa`,
                    Country: `VI`,
                    LifetimeSales: 45960329.03,
                    QuarterlySales: 448358.99,
                    YearlySales: 1855678.13,
                    MarketPotential: 2740892152.3,
                    AssetsCash: 447054.49,
                    AccountsReceivable: 69204.65,
                    AssetsBooks: 23522.18
                }),
                new CompanyDataItem(
                {
                    ID: `abc1010`,
                    Company: `Ezent`,
                    Address: `Decatur Street`,
                    City: `Lithium`,
                    Country: `CV`,
                    LifetimeSales: 43613913.07,
                    QuarterlySales: 140288.25,
                    YearlySales: 594517.52,
                    MarketPotential: 1419141218.99,
                    AssetsCash: 324254.03,
                    AccountsReceivable: 78826.89,
                    AssetsBooks: 20581.79
                }),
                new CompanyDataItem(
                {
                    ID: `abc1011`,
                    Company: `Corepan`,
                    Address: `Jefferson Street`,
                    City: `Roland`,
                    Country: `CA`,
                    LifetimeSales: 19334236.7,
                    QuarterlySales: 413597.57,
                    YearlySales: 1871048.41,
                    MarketPotential: 3524818686.77,
                    AssetsCash: 464374.02,
                    AccountsReceivable: 68634.68,
                    AssetsBooks: 16572.39
                }),
                new CompanyDataItem(
                {
                    ID: `abc1012`,
                    Company: `Quonata`,
                    Address: `Bristol Street`,
                    City: `Belgreen`,
                    Country: `ER`,
                    LifetimeSales: 21467135.56,
                    QuarterlySales: 224717.89,
                    YearlySales: 657562.96,
                    MarketPotential: 3686684834.77,
                    AssetsCash: 345941.49,
                    AccountsReceivable: 51842.73,
                    AssetsBooks: 12948.79
                }),
                new CompanyDataItem(
                {
                    ID: `abc1013`,
                    Company: `Empirica`,
                    Address: `Eaton Court`,
                    City: `Hampstead`,
                    Country: `LY`,
                    LifetimeSales: 21711544.57,
                    QuarterlySales: 290740.22,
                    YearlySales: 1202336.44,
                    MarketPotential: 2343942535.11,
                    AssetsCash: 331479.28,
                    AccountsReceivable: 61027.27,
                    AssetsBooks: 6199.99
                }),
                new CompanyDataItem(
                {
                    ID: `abc1014`,
                    Company: `Eventix`,
                    Address: `Gain Court`,
                    City: `Dowling`,
                    Country: `NG`,
                    LifetimeSales: 27108803.74,
                    QuarterlySales: 322969.25,
                    YearlySales: 951465.66,
                    MarketPotential: 4841022751.3,
                    AssetsCash: 287818.89,
                    AccountsReceivable: 79152.96,
                    AssetsBooks: 9047.59
                }),
                new CompanyDataItem(
                {
                    ID: `abc1015`,
                    Company: `Dogspa`,
                    Address: `Quay Street`,
                    City: `Marne`,
                    Country: `TW`,
                    LifetimeSales: 15372014.44,
                    QuarterlySales: 376294.9,
                    YearlySales: 978453.71,
                    MarketPotential: 1275418042.2,
                    AssetsCash: 374628.65,
                    AccountsReceivable: 84888.29,
                    AssetsBooks: 20578.59
                }),
                new CompanyDataItem(
                {
                    ID: `abc1016`,
                    Company: `Jumpstack`,
                    Address: `Quincy Street`,
                    City: `Hobucken`,
                    Country: `CF`,
                    LifetimeSales: 38882346.28,
                    QuarterlySales: 140607.23,
                    YearlySales: 1197166.82,
                    MarketPotential: 4820347822.28,
                    AssetsCash: 231516.29,
                    AccountsReceivable: 87415.74,
                    AssetsBooks: 12896.54
                }),
                new CompanyDataItem(
                {
                    ID: `abc1017`,
                    Company: `Sybixtex`,
                    Address: `Ryder Street`,
                    City: `Alderpoint`,
                    Country: `IO`,
                    LifetimeSales: 21445732.45,
                    QuarterlySales: 369036.23,
                    YearlySales: 499606.34,
                    MarketPotential: 2807389991.36,
                    AssetsCash: 408474.47,
                    AccountsReceivable: 65344.38,
                    AssetsBooks: 8862.63
                }),
                new CompanyDataItem(
                {
                    ID: `abc1018`,
                    Company: `Dognosis`,
                    Address: `Wolcott Street`,
                    City: `Edgewater`,
                    Country: `GL`,
                    LifetimeSales: 41661881.98,
                    QuarterlySales: 141108.09,
                    YearlySales: 522969.48,
                    MarketPotential: 4374478218.15,
                    AssetsCash: 225730.61,
                    AccountsReceivable: 72839.21,
                    AssetsBooks: 8728.07
                }),
                new CompanyDataItem(
                {
                    ID: `abc1019`,
                    Company: `Twiggery`,
                    Address: `Irwin Street`,
                    City: `Blackgum`,
                    Country: `ZM`,
                    LifetimeSales: 36017506.06,
                    QuarterlySales: 354562.4,
                    YearlySales: 1449893.92,
                    MarketPotential: 1948021644.72,
                    AssetsCash: 376383.08,
                    AccountsReceivable: 62385.03,
                    AssetsBooks: 14270.75
                }),
                new CompanyDataItem(
                {
                    ID: `abc1020`,
                    Company: `Bizmatic`,
                    Address: `Jerome Street`,
                    City: `Sylvanite`,
                    Country: `MM`,
                    LifetimeSales: 11722193.14,
                    QuarterlySales: 213212.65,
                    YearlySales: 1310614.58,
                    MarketPotential: 3463018300.01,
                    AssetsCash: 252123.01,
                    AccountsReceivable: 57229.43,
                    AssetsBooks: 19165.76
                }),
                new CompanyDataItem(
                {
                    ID: `abc1021`,
                    Company: `Accel`,
                    Address: `Louisiana Avenue`,
                    City: `Cornucopia`,
                    Country: `IE`,
                    LifetimeSales: 27607249.98,
                    QuarterlySales: 236774.12,
                    YearlySales: 1546611.47,
                    MarketPotential: 2024251139.72,
                    AssetsCash: 294508.31,
                    AccountsReceivable: 71612.5,
                    AssetsBooks: 18155.66
                }),
                new CompanyDataItem(
                {
                    ID: `abc1022`,
                    Company: `Brainquil`,
                    Address: `Tompkins Avenue`,
                    City: `Hanover`,
                    Country: `MX`,
                    LifetimeSales: 25699331.36,
                    QuarterlySales: 186296.88,
                    YearlySales: 736119.79,
                    MarketPotential: 1098592989.14,
                    AssetsCash: 321341.22,
                    AccountsReceivable: 82055.95,
                    AssetsBooks: 10149.55
                }),
                new CompanyDataItem(
                {
                    ID: `abc1023`,
                    Company: `Eplode`,
                    Address: `Desmond Court`,
                    City: `Lupton`,
                    Country: `GA`,
                    LifetimeSales: 22446181.35,
                    QuarterlySales: 346390.58,
                    YearlySales: 712190.68,
                    MarketPotential: 2534215258.43,
                    AssetsCash: 266537.14,
                    AccountsReceivable: 87164.54,
                    AssetsBooks: 24489.71
                }),
                new CompanyDataItem(
                {
                    ID: `abc1024`,
                    Company: `Crustatia`,
                    Address: `Woodhull Street`,
                    City: `Conestoga`,
                    Country: `GR`,
                    LifetimeSales: 48060275.78,
                    QuarterlySales: 319385.17,
                    YearlySales: 1662973.16,
                    MarketPotential: 3562317203.73,
                    AssetsCash: 471269.15,
                    AccountsReceivable: 98834.5,
                    AssetsBooks: 10641.41
                }),
                new CompanyDataItem(
                {
                    ID: `abc1025`,
                    Company: `Buzzness`,
                    Address: `Guider Avenue`,
                    City: `Gratton`,
                    Country: `MD`,
                    LifetimeSales: 26377352.6,
                    QuarterlySales: 439844.54,
                    YearlySales: 601430.59,
                    MarketPotential: 1486755775.28,
                    AssetsCash: 252524.24,
                    AccountsReceivable: 51795.96,
                    AssetsBooks: 10315.84
                }),
                new CompanyDataItem(
                {
                    ID: `abc1026`,
                    Company: `Helixo`,
                    Address: `Logan Street`,
                    City: `Broadlands`,
                    Country: `RE`,
                    LifetimeSales: 31633703.02,
                    QuarterlySales: 256392.06,
                    YearlySales: 602291.9,
                    MarketPotential: 4323633265.68,
                    AssetsCash: 468025.56,
                    AccountsReceivable: 95638.46,
                    AssetsBooks: 22985.41
                }),
                new CompanyDataItem(
                {
                    ID: `abc1027`,
                    Company: `Geekosis`,
                    Address: `Dictum Court`,
                    City: `Bellamy`,
                    Country: `NF`,
                    LifetimeSales: 29268437.79,
                    QuarterlySales: 147691.1,
                    YearlySales: 1691764.93,
                    MarketPotential: 1362207226.45,
                    AssetsCash: 434628.23,
                    AccountsReceivable: 66871.54,
                    AssetsBooks: 12574.59
                }),
                new CompanyDataItem(
                {
                    ID: `abc1028`,
                    Company: `Zipak`,
                    Address: `Hendrix Street`,
                    City: `Enetai`,
                    Country: `MH`,
                    LifetimeSales: 18691983.29,
                    QuarterlySales: 218666.54,
                    YearlySales: 1038077.26,
                    MarketPotential: 1362313421.44,
                    AssetsCash: 276294.7,
                    AccountsReceivable: 59302.02,
                    AssetsBooks: 11183.04
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
