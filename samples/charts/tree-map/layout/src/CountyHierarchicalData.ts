export class CountyHierarchicalDataItem {
    public constructor(init: Partial<CountyHierarchicalDataItem>) {
        Object.assign(this, init);
    }
    
    public code: string;
    public parent: string;
    public name: string;
    public population: number;

}
export class CountyHierarchicalData extends Array<CountyHierarchicalDataItem> {
    public constructor() {
        super();
        this.push(new CountyHierarchicalDataItem(
        {
            code: `AFC`,
            parent: null,
            name: `Africa`,
            population: null
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ASA`,
            parent: null,
            name: `Asia`,
            population: null
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `EUR`,
            parent: null,
            name: `Europe`,
            population: null
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MDE`,
            parent: null,
            name: `Middle East`,
            population: null
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `NAM`,
            parent: null,
            name: `North America`,
            population: null
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CAM`,
            parent: null,
            name: `Central America`,
            population: null
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SAM`,
            parent: null,
            name: `South America`,
            population: null
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `OCE`,
            parent: null,
            name: `Oceania`,
            population: null
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ANG`,
            parent: `Africa`,
            name: `Angola`,
            population: 19618432
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BEN`,
            parent: `Africa`,
            name: `Benin`,
            population: 9099922
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BOT`,
            parent: `Africa`,
            name: `Botswana`,
            population: 2030738
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BUR`,
            parent: `Africa`,
            name: `Burkina Faso`,
            population: 16967845
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BUR`,
            parent: `Africa`,
            name: `Burundi`,
            population: 8575172
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CAM`,
            parent: `Africa`,
            name: `Cameroon`,
            population: 20030362
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CPV`,
            parent: `Africa`,
            name: `Cape Verde`,
            population: 500585
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CAR`,
            parent: `Africa`,
            name: `Central African Republic`,
            population: 4486837
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CHD`,
            parent: `Africa`,
            name: `Chad`,
            population: 11525496
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `COM`,
            parent: `Africa`,
            name: `Comoros`,
            population: 753943
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `DRC`,
            parent: `Africa`,
            name: `Congo DRC`,
            population: 67757577
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CRP`,
            parent: `Africa`,
            name: `Congo Republic`,
            population: 4139748
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CIR`,
            parent: `Africa`,
            name: `Cote Ivoire`,
            population: 20152894
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `DBT`,
            parent: `Africa`,
            name: `Djibouti`,
            population: 905564
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ETG`,
            parent: `Africa`,
            name: `Equatorial Guinea`,
            population: 720213
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ERT`,
            parent: `Africa`,
            name: `Eritrea`,
            population: 5415280
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ETH`,
            parent: `Africa`,
            name: `Ethiopia`,
            population: 84734262
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `GBN`,
            parent: `Africa`,
            name: `Gabon`,
            population: 1534262
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `GMB`,
            parent: `Africa`,
            name: `Gambia`,
            population: 1776103
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `GHN`,
            parent: `Africa`,
            name: `Ghana`,
            population: 24965816
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `GUN`,
            parent: `Africa`,
            name: `Guinea`,
            population: 10221808
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `GNB`,
            parent: `Africa`,
            name: `Guinea-Bissau`,
            population: 1547061
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `KEN`,
            parent: `Africa`,
            name: `Kenya`,
            population: 41609728
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `LES`,
            parent: `Africa`,
            name: `Lesotho`,
            population: 2193843
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `LBR`,
            parent: `Africa`,
            name: `Liberia`,
            population: 4128572
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MDG`,
            parent: `Africa`,
            name: `Madagascar`,
            population: 21315135
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MLW`,
            parent: `Africa`,
            name: `Malawi`,
            population: 15380888
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MAL`,
            parent: `Africa`,
            name: `Mali`,
            population: 15839538
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MRT`,
            parent: `Africa`,
            name: `Mauritania`,
            population: 3541540
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MUS`,
            parent: `Africa`,
            name: `Mauritius`,
            population: 1286051
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MOZ`,
            parent: `Africa`,
            name: `Mozambique`,
            population: 23929708
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `NMB`,
            parent: `Africa`,
            name: `Namibia`,
            population: 2324004
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `NER`,
            parent: `Africa`,
            name: `Niger`,
            population: 16068994
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `NGA`,
            parent: `Africa`,
            name: `Nigeria`,
            population: 162470737
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `RWD`,
            parent: `Africa`,
            name: `Rwanda`,
            population: 10942950
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `STM`,
            parent: `Africa`,
            name: `Sao Tome`,
            population: 168526
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SEN`,
            parent: `Africa`,
            name: `Senegal`,
            population: 12767556
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SYC`,
            parent: `Africa`,
            name: `Seychelles`,
            population: 86000
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SRL`,
            parent: `Africa`,
            name: `Sierra Leone`,
            population: 5997486
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ZAF`,
            parent: `Africa`,
            name: `South Africa`,
            population: 50586757
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SSD`,
            parent: `Africa`,
            name: `South Sudan`,
            population: 10314021
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SDN`,
            parent: `Africa`,
            name: `Sudan`,
            population: 34318385
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SWZ`,
            parent: `Africa`,
            name: `Swaziland`,
            population: 1067773
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `TNZ`,
            parent: `Africa`,
            name: `Tanzania`,
            population: 46218486
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `TOG`,
            parent: `Africa`,
            name: `Togo`,
            population: 6154813
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `UGN`,
            parent: `Africa`,
            name: `Uganda`,
            population: 34509205
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ZMB`,
            parent: `Africa`,
            name: `Zambia`,
            population: 13474959
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ZWE`,
            parent: `Africa`,
            name: `Zimbabwe`,
            population: 12754378
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `AFG`,
            parent: `Asia`,
            name: `Afghanistan`,
            population: 35320445
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BAN`,
            parent: `Asia`,
            name: `Bangladesh`,
            population: 150493658
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BHT`,
            parent: `Asia`,
            name: `Bhutan`,
            population: 738267
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BRN`,
            parent: `Asia`,
            name: `Brunei`,
            population: 405938
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CAM`,
            parent: `Asia`,
            name: `Cambodia`,
            population: 14305183
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CHI`,
            parent: `Asia`,
            name: `China`,
            population: 1344130000
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `HNK`,
            parent: `Asia`,
            name: `Hong Kong`,
            population: 7071600
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `IND`,
            parent: `Asia`,
            name: `India`,
            population: 1241491960
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `IDN`,
            parent: `Asia`,
            name: `Indonesia`,
            population: 242325638
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `JPN`,
            parent: `Asia`,
            name: `Japan`,
            population: 127817277
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `KZH`,
            parent: `Asia`,
            name: `Kazakhstan`,
            population: 16558676
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `NKO`,
            parent: `Asia`,
            name: `North Korea`,
            population: 24451285
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SKO`,
            parent: `Asia`,
            name: `South Korea`,
            population: 49779000
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `KGZ`,
            parent: `Asia`,
            name: `Kyrgyzstan`,
            population: 5514600
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `LAO`,
            parent: `Asia`,
            name: `Lao PDR`,
            population: 6288037
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MAC`,
            parent: `Asia`,
            name: `Macao`,
            population: 555731
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MYS`,
            parent: `Asia`,
            name: `Malaysia`,
            population: 28859154
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MDV`,
            parent: `Asia`,
            name: `Maldives`,
            population: 320081
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MNG`,
            parent: `Asia`,
            name: `Mongolia`,
            population: 2800114
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MYM`,
            parent: `Asia`,
            name: `Myanmar`,
            population: 48336763
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `NPL`,
            parent: `Asia`,
            name: `Nepal`,
            population: 30485798
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `PHP`,
            parent: `Asia`,
            name: `Philippines`,
            population: 94852030
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SNG`,
            parent: `Asia`,
            name: `Singapore`,
            population: 5183700
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SRL`,
            parent: `Asia`,
            name: `Sri Lanka`,
            population: 20869000
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `TKS`,
            parent: `Asia`,
            name: `Tajikistan`,
            population: 6976958
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `THL`,
            parent: `Asia`,
            name: `Thailand`,
            population: 69518555
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `TRK`,
            parent: `Asia`,
            name: `Turkmenistan`,
            population: 5105301
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `UZB`,
            parent: `Asia`,
            name: `Uzbekistan`,
            population: 29341200
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `VTN`,
            parent: `Asia`,
            name: `Vietnam`,
            population: 87840000
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ANT`,
            parent: `Central America`,
            name: `Antigua`,
            population: 89612
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ARB`,
            parent: `Central America`,
            name: `Aruba`,
            population: 108141
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BHM`,
            parent: `Central America`,
            name: `Bahamas`,
            population: 347176
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BRB`,
            parent: `Central America`,
            name: `Barbados`,
            population: 273925
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BLZ`,
            parent: `Central America`,
            name: `Belize`,
            population: 356600
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BRM`,
            parent: `Central America`,
            name: `Bermuda`,
            population: 64700
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CYI`,
            parent: `Central America`,
            name: `Cayman Islands`,
            population: 56729
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CSR`,
            parent: `Central America`,
            name: `Costa Rica`,
            population: 4726575
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CUB`,
            parent: `Central America`,
            name: `Cuba`,
            population: 11253665
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CUR`,
            parent: `Central America`,
            name: `Curacao`,
            population: 145619
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `DMA`,
            parent: `Central America`,
            name: `Dominica`,
            population: 67675
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `DOM`,
            parent: `Central America`,
            name: `Dominican Republic`,
            population: 10056181
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SLV`,
            parent: `Central America`,
            name: `El Salvador`,
            population: 6227491
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `FIS`,
            parent: `Central America`,
            name: `Faeroe Islands`,
            population: 48863
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `GND`,
            parent: `Central America`,
            name: `Grenada`,
            population: 104890
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `GUA`,
            parent: `Central America`,
            name: `Guam`,
            population: 182111
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `GTM`,
            parent: `Central America`,
            name: `Guatemala`,
            population: 14757316
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `HAT`,
            parent: `Central America`,
            name: `Haiti`,
            population: 10123787
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `HON`,
            parent: `Central America`,
            name: `Honduras`,
            population: 7754687
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `JAM`,
            parent: `Central America`,
            name: `Jamaica`,
            population: 2706500
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `NCR`,
            parent: `Central America`,
            name: `Nicaragua`,
            population: 5869859
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `NMI`,
            parent: `Central America`,
            name: `Northern Mariana Islands`,
            population: 61174
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `PAN`,
            parent: `Central America`,
            name: `Panama`,
            population: 3571185
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `PRT`,
            parent: `Central America`,
            name: `Puerto Rico`,
            population: 3706690
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `STK`,
            parent: `Central America`,
            name: `St. Kitts`,
            population: 53051
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `STL`,
            parent: `Central America`,
            name: `St. Lucia`,
            population: 176000
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `STV`,
            parent: `Central America`,
            name: `St. Vincent`,
            population: 109365
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `TAB`,
            parent: `Central America`,
            name: `Trinidad and Tobago`,
            population: 1346350
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `RCI`,
            parent: `Central America`,
            name: `Turks and Caicos Islands`,
            population: 39184
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ISV`,
            parent: `Central America`,
            name: `US Virgin Islands`,
            population: 109666
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ALB`,
            parent: `Europe`,
            name: `Albania`,
            population: 3215988
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `AND`,
            parent: `Europe`,
            name: `Andorra`,
            population: 86165
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ARM`,
            parent: `Europe`,
            name: `Armenia`,
            population: 3100236
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `AUT`,
            parent: `Europe`,
            name: `Austria`,
            population: 8423635
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BER`,
            parent: `Europe`,
            name: `Belarus`,
            population: 9473000
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BEL`,
            parent: `Europe`,
            name: `Belgium`,
            population: 11020952
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BIH`,
            parent: `Europe`,
            name: `Bosnia`,
            population: 3752228
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BUL`,
            parent: `Europe`,
            name: `Bulgaria`,
            population: 7348328
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CHI`,
            parent: `Europe`,
            name: `Channel Islands`,
            population: 153876
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CRO`,
            parent: `Europe`,
            name: `Croatia`,
            population: 4403000
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CYP`,
            parent: `Europe`,
            name: `Cyprus`,
            population: 1116564
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CZE`,
            parent: `Europe`,
            name: `Czechia`,
            population: 10496088
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `DEN`,
            parent: `Europe`,
            name: `Denmark`,
            population: 5570572
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `EST`,
            parent: `Europe`,
            name: `Estonia`,
            population: 1339928
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `FIN`,
            parent: `Europe`,
            name: `Finland`,
            population: 5388272
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `FRA`,
            parent: `Europe`,
            name: `France`,
            population: 65433714
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `GEO`,
            parent: `Europe`,
            name: `Georgia`,
            population: 4486000
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `DEU`,
            parent: `Europe`,
            name: `Germany`,
            population: 81797673
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `GRC`,
            parent: `Europe`,
            name: `Greece`,
            population: 11300410
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `HUN`,
            parent: `Europe`,
            name: `Hungary`,
            population: 9971727
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ICE`,
            parent: `Europe`,
            name: `Iceland`,
            population: 319014
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `IRE`,
            parent: `Europe`,
            name: `Ireland`,
            population: 4576317
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `IOM`,
            parent: `Europe`,
            name: `Isle of Man`,
            population: 83327
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ITA`,
            parent: `Europe`,
            name: `Italy`,
            population: 60723603
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `KOS`,
            parent: `Europe`,
            name: `Kosovo`,
            population: 1802765
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `LAT`,
            parent: `Europe`,
            name: `Latvia`,
            population: 2058184
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `LVA`,
            parent: `Europe`,
            name: `Liechtenstein`,
            population: 36304
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `LTU`,
            parent: `Europe`,
            name: `Lithuania`,
            population: 3030173
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `LUX`,
            parent: `Europe`,
            name: `Luxembourg`,
            population: 518252
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MKD`,
            parent: `Europe`,
            name: `North Macedonia`,
            population: 2063893
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MLT`,
            parent: `Europe`,
            name: `Malta`,
            population: 415654
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MDA`,
            parent: `Europe`,
            name: `Moldova`,
            population: 3559000
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MON`,
            parent: `Europe`,
            name: `Monaco`,
            population: 35427
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MNE`,
            parent: `Europe`,
            name: `Montenegro`,
            population: 632261
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MLD`,
            parent: `Europe`,
            name: `Netherlands`,
            population: 16693074
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `NOR`,
            parent: `Europe`,
            name: `Norway`,
            population: 4953088
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `POL`,
            parent: `Europe`,
            name: `Poland`,
            population: 38534157
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `POR`,
            parent: `Europe`,
            name: `Portugal`,
            population: 10556999
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ROM`,
            parent: `Europe`,
            name: `Romania`,
            population: 21384832
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `RUS`,
            parent: `Europe`,
            name: `Russia`,
            population: 142960000
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SMR`,
            parent: `Europe`,
            name: `San Marino`,
            population: 31735
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SBR`,
            parent: `Europe`,
            name: `Serbia`,
            population: 7258745
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `STM`,
            parent: `Europe`,
            name: `Sint Maarten`,
            population: 36609
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SVK`,
            parent: `Europe`,
            name: `Slovakia`,
            population: 5398384
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SLO`,
            parent: `Europe`,
            name: `Slovenia`,
            population: 2052843
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ESP`,
            parent: `Europe`,
            name: `Spain`,
            population: 46174601
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `STM`,
            parent: `Europe`,
            name: `St. Martin`,
            population: 30615
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SWE`,
            parent: `Europe`,
            name: `Sweden`,
            population: 9449213
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CHE`,
            parent: `Europe`,
            name: `Switzerland`,
            population: 7912398
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `UKR`,
            parent: `Europe`,
            name: `Ukraine`,
            population: 45706100
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `GBR`,
            parent: `Europe`,
            name: `United Kingdom`,
            population: 62744081
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `DZA`,
            parent: `Middle East`,
            name: `Algeria`,
            population: 35980193
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `AZE`,
            parent: `Middle East`,
            name: `Azerbaijan`,
            population: 9173082
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BHR`,
            parent: `Middle East`,
            name: `Bahrain`,
            population: 1323535
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `EGY`,
            parent: `Middle East`,
            name: `Egypt`,
            population: 82536770
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `IRN`,
            parent: `Middle East`,
            name: `Iran`,
            population: 74798599
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `IRQ`,
            parent: `Middle East`,
            name: `Iraq`,
            population: 32961959
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ISR`,
            parent: `Middle East`,
            name: `Israel`,
            population: 7765900
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `JOR`,
            parent: `Middle East`,
            name: `Jordan`,
            population: 6181000
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `KWT`,
            parent: `Middle East`,
            name: `Kuwait`,
            population: 2818042
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `LBN`,
            parent: `Middle East`,
            name: `Lebanon`,
            population: 4259405
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `LBY`,
            parent: `Middle East`,
            name: `Libya`,
            population: 6422772
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MAR`,
            parent: `Middle East`,
            name: `Morocco`,
            population: 32272974
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `OMN`,
            parent: `Middle East`,
            name: `Oman`,
            population: 2846145
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `PKS`,
            parent: `Middle East`,
            name: `Pakistan`,
            population: 176745364
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `QTR`,
            parent: `Middle East`,
            name: `Qatar`,
            population: 1870041
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SAR`,
            parent: `Middle East`,
            name: `Saudi Arabia`,
            population: 28082541
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SOM`,
            parent: `Middle East`,
            name: `Somalia`,
            population: 9556873
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SYR`,
            parent: `Middle East`,
            name: `Syria`,
            population: 20820311
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `TUN`,
            parent: `Middle East`,
            name: `Tunisia`,
            population: 10673800
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `TUR`,
            parent: `Middle East`,
            name: `Turkey`,
            population: 73639596
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `UAE`,
            parent: `Middle East`,
            name: `United Arab Emirates`,
            population: 7890924
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `WTB`,
            parent: `Middle East`,
            name: `West Bank`,
            population: 3927051
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `YEM`,
            parent: `Middle East`,
            name: `Yemen`,
            population: 24799880
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CAN`,
            parent: `North America`,
            name: `Canada`,
            population: 34483975
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `GRL`,
            parent: `North America`,
            name: `Greenland`,
            population: 56840
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MEX`,
            parent: `North America`,
            name: `Mexico`,
            population: 114793341
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `USA`,
            parent: `North America`,
            name: `United States`,
            population: 311591917
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `AMS`,
            parent: `Oceania`,
            name: `American Samoa`,
            population: 69543
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `AUS`,
            parent: `Oceania`,
            name: `Australia`,
            population: 22323900
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `FIJ`,
            parent: `Oceania`,
            name: `Fiji`,
            population: 868406
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `FRP`,
            parent: `Oceania`,
            name: `French Polynesia`,
            population: 273777
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `KIR`,
            parent: `Oceania`,
            name: `Kiribati`,
            population: 101093
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MIS`,
            parent: `Oceania`,
            name: `Marshall Islands`,
            population: 54816
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `MCR`,
            parent: `Oceania`,
            name: `Micronesia`,
            population: 111542
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `NCD`,
            parent: `Oceania`,
            name: `New Caledonia`,
            population: 254024
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `NZL`,
            parent: `Oceania`,
            name: `New Zealand`,
            population: 4405200
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `PAL`,
            parent: `Oceania`,
            name: `Palau`,
            population: 20609
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `PNG`,
            parent: `Oceania`,
            name: `Papua New Guinea`,
            population: 7013829
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SAM`,
            parent: `Oceania`,
            name: `Samoa`,
            population: 183874
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SIS`,
            parent: `Oceania`,
            name: `Solomon Islands`,
            population: 552267
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `TML`,
            parent: `Oceania`,
            name: `Timor-Leste`,
            population: 1175880
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `TON`,
            parent: `Oceania`,
            name: `Tonga`,
            population: 104509
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `TUV`,
            parent: `Oceania`,
            name: `Tuvalu`,
            population: 9847
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `VNT`,
            parent: `Oceania`,
            name: `Vanuatu`,
            population: 245619
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ARG`,
            parent: `South America`,
            name: `Argentina`,
            population: 40764561
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BOL`,
            parent: `South America`,
            name: `Bolivia`,
            population: 10088108
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `BRA`,
            parent: `South America`,
            name: `Brazil`,
            population: 196655014
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `CHI`,
            parent: `South America`,
            name: `Chile`,
            population: 17269525
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `COL`,
            parent: `South America`,
            name: `Colombia`,
            population: 46927125
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `ECU`,
            parent: `South America`,
            name: `Ecuador`,
            population: 14666055
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `GUY`,
            parent: `South America`,
            name: `Guyana`,
            population: 756040
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `PAR`,
            parent: `South America`,
            name: `Paraguay`,
            population: 6568290
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `PER`,
            parent: `South America`,
            name: `Peru`,
            population: 29399817
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `SUR`,
            parent: `South America`,
            name: `Suriname`,
            population: 529419
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `URG`,
            parent: `South America`,
            name: `Uruguay`,
            population: 3368595
        }));
        this.push(new CountyHierarchicalDataItem(
        {
            code: `VEN`,
            parent: `South America`,
            name: `Venezuela`,
            population: 29278000
        }));
    }
}
