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
    public constructor(items: Array<CountyHierarchicalDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountyHierarchicalDataItem(
                {
                    code: `AFC`,
                    parent: null,
                    name: `Africa`,
                    population: null
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ASA`,
                    parent: null,
                    name: `Asia`,
                    population: null
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `EUR`,
                    parent: null,
                    name: `Europe`,
                    population: null
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MDE`,
                    parent: null,
                    name: `Middle East`,
                    population: null
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `NAM`,
                    parent: null,
                    name: `North America`,
                    population: null
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CAM`,
                    parent: null,
                    name: `Central America`,
                    population: null
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SAM`,
                    parent: null,
                    name: `South America`,
                    population: null
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `OCE`,
                    parent: null,
                    name: `Oceania`,
                    population: null
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ANG`,
                    parent: `Africa`,
                    name: `Angola`,
                    population: 19618432
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BEN`,
                    parent: `Africa`,
                    name: `Benin`,
                    population: 9099922
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BOT`,
                    parent: `Africa`,
                    name: `Botswana`,
                    population: 2030738
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BUR`,
                    parent: `Africa`,
                    name: `Burkina Faso`,
                    population: 16967845
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BUR`,
                    parent: `Africa`,
                    name: `Burundi`,
                    population: 8575172
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CAM`,
                    parent: `Africa`,
                    name: `Cameroon`,
                    population: 20030362
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CPV`,
                    parent: `Africa`,
                    name: `Cape Verde`,
                    population: 500585
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CAR`,
                    parent: `Africa`,
                    name: `Central African Republic`,
                    population: 4486837
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CHD`,
                    parent: `Africa`,
                    name: `Chad`,
                    population: 11525496
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `COM`,
                    parent: `Africa`,
                    name: `Comoros`,
                    population: 753943
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `DRC`,
                    parent: `Africa`,
                    name: `Congo DRC`,
                    population: 67757577
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CRP`,
                    parent: `Africa`,
                    name: `Congo Republic`,
                    population: 4139748
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CIR`,
                    parent: `Africa`,
                    name: `Cote Ivoire`,
                    population: 20152894
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `DBT`,
                    parent: `Africa`,
                    name: `Djibouti`,
                    population: 905564
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ETG`,
                    parent: `Africa`,
                    name: `Equatorial Guinea`,
                    population: 720213
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ERT`,
                    parent: `Africa`,
                    name: `Eritrea`,
                    population: 5415280
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ETH`,
                    parent: `Africa`,
                    name: `Ethiopia`,
                    population: 84734262
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `GBN`,
                    parent: `Africa`,
                    name: `Gabon`,
                    population: 1534262
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `GMB`,
                    parent: `Africa`,
                    name: `Gambia`,
                    population: 1776103
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `GHN`,
                    parent: `Africa`,
                    name: `Ghana`,
                    population: 24965816
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `GUN`,
                    parent: `Africa`,
                    name: `Guinea`,
                    population: 10221808
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `GNB`,
                    parent: `Africa`,
                    name: `Guinea-Bissau`,
                    population: 1547061
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `KEN`,
                    parent: `Africa`,
                    name: `Kenya`,
                    population: 41609728
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `LES`,
                    parent: `Africa`,
                    name: `Lesotho`,
                    population: 2193843
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `LBR`,
                    parent: `Africa`,
                    name: `Liberia`,
                    population: 4128572
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MDG`,
                    parent: `Africa`,
                    name: `Madagascar`,
                    population: 21315135
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MLW`,
                    parent: `Africa`,
                    name: `Malawi`,
                    population: 15380888
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MAL`,
                    parent: `Africa`,
                    name: `Mali`,
                    population: 15839538
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MRT`,
                    parent: `Africa`,
                    name: `Mauritania`,
                    population: 3541540
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MUS`,
                    parent: `Africa`,
                    name: `Mauritius`,
                    population: 1286051
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MOZ`,
                    parent: `Africa`,
                    name: `Mozambique`,
                    population: 23929708
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `NMB`,
                    parent: `Africa`,
                    name: `Namibia`,
                    population: 2324004
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `NER`,
                    parent: `Africa`,
                    name: `Niger`,
                    population: 16068994
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `NGA`,
                    parent: `Africa`,
                    name: `Nigeria`,
                    population: 162470737
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `RWD`,
                    parent: `Africa`,
                    name: `Rwanda`,
                    population: 10942950
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `STM`,
                    parent: `Africa`,
                    name: `Sao Tome`,
                    population: 168526
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SEN`,
                    parent: `Africa`,
                    name: `Senegal`,
                    population: 12767556
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SYC`,
                    parent: `Africa`,
                    name: `Seychelles`,
                    population: 86000
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SRL`,
                    parent: `Africa`,
                    name: `Sierra Leone`,
                    population: 5997486
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ZAF`,
                    parent: `Africa`,
                    name: `South Africa`,
                    population: 50586757
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SSD`,
                    parent: `Africa`,
                    name: `South Sudan`,
                    population: 10314021
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SDN`,
                    parent: `Africa`,
                    name: `Sudan`,
                    population: 34318385
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SWZ`,
                    parent: `Africa`,
                    name: `Swaziland`,
                    population: 1067773
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `TNZ`,
                    parent: `Africa`,
                    name: `Tanzania`,
                    population: 46218486
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `TOG`,
                    parent: `Africa`,
                    name: `Togo`,
                    population: 6154813
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `UGN`,
                    parent: `Africa`,
                    name: `Uganda`,
                    population: 34509205
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ZMB`,
                    parent: `Africa`,
                    name: `Zambia`,
                    population: 13474959
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ZWE`,
                    parent: `Africa`,
                    name: `Zimbabwe`,
                    population: 12754378
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `AFG`,
                    parent: `Asia`,
                    name: `Afghanistan`,
                    population: 35320445
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BAN`,
                    parent: `Asia`,
                    name: `Bangladesh`,
                    population: 150493658
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BHT`,
                    parent: `Asia`,
                    name: `Bhutan`,
                    population: 738267
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BRN`,
                    parent: `Asia`,
                    name: `Brunei`,
                    population: 405938
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CAM`,
                    parent: `Asia`,
                    name: `Cambodia`,
                    population: 14305183
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CHI`,
                    parent: `Asia`,
                    name: `China`,
                    population: 1344130000
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `HNK`,
                    parent: `Asia`,
                    name: `Hong Kong`,
                    population: 7071600
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `IND`,
                    parent: `Asia`,
                    name: `India`,
                    population: 1241491960
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `IDN`,
                    parent: `Asia`,
                    name: `Indonesia`,
                    population: 242325638
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `JPN`,
                    parent: `Asia`,
                    name: `Japan`,
                    population: 127817277
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `KZH`,
                    parent: `Asia`,
                    name: `Kazakhstan`,
                    population: 16558676
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `NKO`,
                    parent: `Asia`,
                    name: `North Korea`,
                    population: 24451285
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SKO`,
                    parent: `Asia`,
                    name: `South Korea`,
                    population: 49779000
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `KGZ`,
                    parent: `Asia`,
                    name: `Kyrgyzstan`,
                    population: 5514600
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `LAO`,
                    parent: `Asia`,
                    name: `Lao PDR`,
                    population: 6288037
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MAC`,
                    parent: `Asia`,
                    name: `Macao`,
                    population: 555731
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MYS`,
                    parent: `Asia`,
                    name: `Malaysia`,
                    population: 28859154
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MDV`,
                    parent: `Asia`,
                    name: `Maldives`,
                    population: 320081
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MNG`,
                    parent: `Asia`,
                    name: `Mongolia`,
                    population: 2800114
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MYM`,
                    parent: `Asia`,
                    name: `Myanmar`,
                    population: 48336763
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `NPL`,
                    parent: `Asia`,
                    name: `Nepal`,
                    population: 30485798
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `PHP`,
                    parent: `Asia`,
                    name: `Philippines`,
                    population: 94852030
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SNG`,
                    parent: `Asia`,
                    name: `Singapore`,
                    population: 5183700
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SRL`,
                    parent: `Asia`,
                    name: `Sri Lanka`,
                    population: 20869000
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `TKS`,
                    parent: `Asia`,
                    name: `Tajikistan`,
                    population: 6976958
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `THL`,
                    parent: `Asia`,
                    name: `Thailand`,
                    population: 69518555
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `TRK`,
                    parent: `Asia`,
                    name: `Turkmenistan`,
                    population: 5105301
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `UZB`,
                    parent: `Asia`,
                    name: `Uzbekistan`,
                    population: 29341200
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `VTN`,
                    parent: `Asia`,
                    name: `Vietnam`,
                    population: 87840000
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ANT`,
                    parent: `Central America`,
                    name: `Antigua`,
                    population: 89612
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ARB`,
                    parent: `Central America`,
                    name: `Aruba`,
                    population: 108141
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BHM`,
                    parent: `Central America`,
                    name: `Bahamas`,
                    population: 347176
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BRB`,
                    parent: `Central America`,
                    name: `Barbados`,
                    population: 273925
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BLZ`,
                    parent: `Central America`,
                    name: `Belize`,
                    population: 356600
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BRM`,
                    parent: `Central America`,
                    name: `Bermuda`,
                    population: 64700
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CYI`,
                    parent: `Central America`,
                    name: `Cayman Islands`,
                    population: 56729
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CSR`,
                    parent: `Central America`,
                    name: `Costa Rica`,
                    population: 4726575
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CUB`,
                    parent: `Central America`,
                    name: `Cuba`,
                    population: 11253665
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CUR`,
                    parent: `Central America`,
                    name: `Curacao`,
                    population: 145619
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `DMA`,
                    parent: `Central America`,
                    name: `Dominica`,
                    population: 67675
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `DOM`,
                    parent: `Central America`,
                    name: `Dominican Republic`,
                    population: 10056181
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SLV`,
                    parent: `Central America`,
                    name: `El Salvador`,
                    population: 6227491
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `FIS`,
                    parent: `Central America`,
                    name: `Faeroe Islands`,
                    population: 48863
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `GND`,
                    parent: `Central America`,
                    name: `Grenada`,
                    population: 104890
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `GUA`,
                    parent: `Central America`,
                    name: `Guam`,
                    population: 182111
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `GTM`,
                    parent: `Central America`,
                    name: `Guatemala`,
                    population: 14757316
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `HAT`,
                    parent: `Central America`,
                    name: `Haiti`,
                    population: 10123787
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `HON`,
                    parent: `Central America`,
                    name: `Honduras`,
                    population: 7754687
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `JAM`,
                    parent: `Central America`,
                    name: `Jamaica`,
                    population: 2706500
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `NCR`,
                    parent: `Central America`,
                    name: `Nicaragua`,
                    population: 5869859
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `NMI`,
                    parent: `Central America`,
                    name: `Northern Mariana Islands`,
                    population: 61174
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `PAN`,
                    parent: `Central America`,
                    name: `Panama`,
                    population: 3571185
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `PRT`,
                    parent: `Central America`,
                    name: `Puerto Rico`,
                    population: 3706690
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `STK`,
                    parent: `Central America`,
                    name: `St. Kitts`,
                    population: 53051
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `STL`,
                    parent: `Central America`,
                    name: `St. Lucia`,
                    population: 176000
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `STV`,
                    parent: `Central America`,
                    name: `St. Vincent`,
                    population: 109365
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `TAB`,
                    parent: `Central America`,
                    name: `Trinidad and Tobago`,
                    population: 1346350
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `RCI`,
                    parent: `Central America`,
                    name: `Turks and Caicos Islands`,
                    population: 39184
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ISV`,
                    parent: `Central America`,
                    name: `US Virgin Islands`,
                    population: 109666
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ALB`,
                    parent: `Europe`,
                    name: `Albania`,
                    population: 3215988
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `AND`,
                    parent: `Europe`,
                    name: `Andorra`,
                    population: 86165
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ARM`,
                    parent: `Europe`,
                    name: `Armenia`,
                    population: 3100236
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `AUT`,
                    parent: `Europe`,
                    name: `Austria`,
                    population: 8423635
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BER`,
                    parent: `Europe`,
                    name: `Belarus`,
                    population: 9473000
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BEL`,
                    parent: `Europe`,
                    name: `Belgium`,
                    population: 11020952
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BIH`,
                    parent: `Europe`,
                    name: `Bosnia`,
                    population: 3752228
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BUL`,
                    parent: `Europe`,
                    name: `Bulgaria`,
                    population: 7348328
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CHI`,
                    parent: `Europe`,
                    name: `Channel Islands`,
                    population: 153876
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CRO`,
                    parent: `Europe`,
                    name: `Croatia`,
                    population: 4403000
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CYP`,
                    parent: `Europe`,
                    name: `Cyprus`,
                    population: 1116564
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CZE`,
                    parent: `Europe`,
                    name: `Czechia`,
                    population: 10496088
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `DEN`,
                    parent: `Europe`,
                    name: `Denmark`,
                    population: 5570572
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `EST`,
                    parent: `Europe`,
                    name: `Estonia`,
                    population: 1339928
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `FIN`,
                    parent: `Europe`,
                    name: `Finland`,
                    population: 5388272
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `FRA`,
                    parent: `Europe`,
                    name: `France`,
                    population: 65433714
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `GEO`,
                    parent: `Europe`,
                    name: `Georgia`,
                    population: 4486000
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `DEU`,
                    parent: `Europe`,
                    name: `Germany`,
                    population: 81797673
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `GRC`,
                    parent: `Europe`,
                    name: `Greece`,
                    population: 11300410
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `HUN`,
                    parent: `Europe`,
                    name: `Hungary`,
                    population: 9971727
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ICE`,
                    parent: `Europe`,
                    name: `Iceland`,
                    population: 319014
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `IRE`,
                    parent: `Europe`,
                    name: `Ireland`,
                    population: 4576317
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `IOM`,
                    parent: `Europe`,
                    name: `Isle of Man`,
                    population: 83327
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ITA`,
                    parent: `Europe`,
                    name: `Italy`,
                    population: 60723603
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `KOS`,
                    parent: `Europe`,
                    name: `Kosovo`,
                    population: 1802765
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `LAT`,
                    parent: `Europe`,
                    name: `Latvia`,
                    population: 2058184
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `LVA`,
                    parent: `Europe`,
                    name: `Liechtenstein`,
                    population: 36304
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `LTU`,
                    parent: `Europe`,
                    name: `Lithuania`,
                    population: 3030173
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `LUX`,
                    parent: `Europe`,
                    name: `Luxembourg`,
                    population: 518252
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MKD`,
                    parent: `Europe`,
                    name: `North Macedonia`,
                    population: 2063893
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MLT`,
                    parent: `Europe`,
                    name: `Malta`,
                    population: 415654
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MDA`,
                    parent: `Europe`,
                    name: `Moldova`,
                    population: 3559000
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MON`,
                    parent: `Europe`,
                    name: `Monaco`,
                    population: 35427
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MNE`,
                    parent: `Europe`,
                    name: `Montenegro`,
                    population: 632261
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MLD`,
                    parent: `Europe`,
                    name: `Netherlands`,
                    population: 16693074
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `NOR`,
                    parent: `Europe`,
                    name: `Norway`,
                    population: 4953088
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `POL`,
                    parent: `Europe`,
                    name: `Poland`,
                    population: 38534157
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `POR`,
                    parent: `Europe`,
                    name: `Portugal`,
                    population: 10556999
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ROM`,
                    parent: `Europe`,
                    name: `Romania`,
                    population: 21384832
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `RUS`,
                    parent: `Europe`,
                    name: `Russia`,
                    population: 142960000
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SMR`,
                    parent: `Europe`,
                    name: `San Marino`,
                    population: 31735
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SBR`,
                    parent: `Europe`,
                    name: `Serbia`,
                    population: 7258745
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `STM`,
                    parent: `Europe`,
                    name: `Sint Maarten`,
                    population: 36609
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SVK`,
                    parent: `Europe`,
                    name: `Slovakia`,
                    population: 5398384
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SLO`,
                    parent: `Europe`,
                    name: `Slovenia`,
                    population: 2052843
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ESP`,
                    parent: `Europe`,
                    name: `Spain`,
                    population: 46174601
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `STM`,
                    parent: `Europe`,
                    name: `St. Martin`,
                    population: 30615
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SWE`,
                    parent: `Europe`,
                    name: `Sweden`,
                    population: 9449213
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CHE`,
                    parent: `Europe`,
                    name: `Switzerland`,
                    population: 7912398
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `UKR`,
                    parent: `Europe`,
                    name: `Ukraine`,
                    population: 45706100
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `GBR`,
                    parent: `Europe`,
                    name: `United Kingdom`,
                    population: 62744081
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `DZA`,
                    parent: `Middle East`,
                    name: `Algeria`,
                    population: 35980193
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `AZE`,
                    parent: `Middle East`,
                    name: `Azerbaijan`,
                    population: 9173082
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BHR`,
                    parent: `Middle East`,
                    name: `Bahrain`,
                    population: 1323535
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `EGY`,
                    parent: `Middle East`,
                    name: `Egypt`,
                    population: 82536770
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `IRN`,
                    parent: `Middle East`,
                    name: `Iran`,
                    population: 74798599
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `IRQ`,
                    parent: `Middle East`,
                    name: `Iraq`,
                    population: 32961959
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ISR`,
                    parent: `Middle East`,
                    name: `Israel`,
                    population: 7765900
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `JOR`,
                    parent: `Middle East`,
                    name: `Jordan`,
                    population: 6181000
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `KWT`,
                    parent: `Middle East`,
                    name: `Kuwait`,
                    population: 2818042
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `LBN`,
                    parent: `Middle East`,
                    name: `Lebanon`,
                    population: 4259405
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `LBY`,
                    parent: `Middle East`,
                    name: `Libya`,
                    population: 6422772
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MAR`,
                    parent: `Middle East`,
                    name: `Morocco`,
                    population: 32272974
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `OMN`,
                    parent: `Middle East`,
                    name: `Oman`,
                    population: 2846145
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `PKS`,
                    parent: `Middle East`,
                    name: `Pakistan`,
                    population: 176745364
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `QTR`,
                    parent: `Middle East`,
                    name: `Qatar`,
                    population: 1870041
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SAR`,
                    parent: `Middle East`,
                    name: `Saudi Arabia`,
                    population: 28082541
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SOM`,
                    parent: `Middle East`,
                    name: `Somalia`,
                    population: 9556873
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SYR`,
                    parent: `Middle East`,
                    name: `Syria`,
                    population: 20820311
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `TUN`,
                    parent: `Middle East`,
                    name: `Tunisia`,
                    population: 10673800
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `TUR`,
                    parent: `Middle East`,
                    name: `Turkey`,
                    population: 73639596
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `UAE`,
                    parent: `Middle East`,
                    name: `United Arab Emirates`,
                    population: 7890924
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `WTB`,
                    parent: `Middle East`,
                    name: `West Bank`,
                    population: 3927051
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `YEM`,
                    parent: `Middle East`,
                    name: `Yemen`,
                    population: 24799880
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CAN`,
                    parent: `North America`,
                    name: `Canada`,
                    population: 34483975
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `GRL`,
                    parent: `North America`,
                    name: `Greenland`,
                    population: 56840
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MEX`,
                    parent: `North America`,
                    name: `Mexico`,
                    population: 114793341
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `USA`,
                    parent: `North America`,
                    name: `United States`,
                    population: 311591917
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `AMS`,
                    parent: `Oceania`,
                    name: `American Samoa`,
                    population: 69543
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `AUS`,
                    parent: `Oceania`,
                    name: `Australia`,
                    population: 22323900
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `FIJ`,
                    parent: `Oceania`,
                    name: `Fiji`,
                    population: 868406
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `FRP`,
                    parent: `Oceania`,
                    name: `French Polynesia`,
                    population: 273777
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `KIR`,
                    parent: `Oceania`,
                    name: `Kiribati`,
                    population: 101093
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MIS`,
                    parent: `Oceania`,
                    name: `Marshall Islands`,
                    population: 54816
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `MCR`,
                    parent: `Oceania`,
                    name: `Micronesia`,
                    population: 111542
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `NCD`,
                    parent: `Oceania`,
                    name: `New Caledonia`,
                    population: 254024
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `NZL`,
                    parent: `Oceania`,
                    name: `New Zealand`,
                    population: 4405200
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `PAL`,
                    parent: `Oceania`,
                    name: `Palau`,
                    population: 20609
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `PNG`,
                    parent: `Oceania`,
                    name: `Papua New Guinea`,
                    population: 7013829
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SAM`,
                    parent: `Oceania`,
                    name: `Samoa`,
                    population: 183874
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SIS`,
                    parent: `Oceania`,
                    name: `Solomon Islands`,
                    population: 552267
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `TML`,
                    parent: `Oceania`,
                    name: `Timor-Leste`,
                    population: 1175880
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `TON`,
                    parent: `Oceania`,
                    name: `Tonga`,
                    population: 104509
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `TUV`,
                    parent: `Oceania`,
                    name: `Tuvalu`,
                    population: 9847
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `VNT`,
                    parent: `Oceania`,
                    name: `Vanuatu`,
                    population: 245619
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ARG`,
                    parent: `South America`,
                    name: `Argentina`,
                    population: 40764561
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BOL`,
                    parent: `South America`,
                    name: `Bolivia`,
                    population: 10088108
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `BRA`,
                    parent: `South America`,
                    name: `Brazil`,
                    population: 196655014
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `CHI`,
                    parent: `South America`,
                    name: `Chile`,
                    population: 17269525
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `COL`,
                    parent: `South America`,
                    name: `Colombia`,
                    population: 46927125
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `ECU`,
                    parent: `South America`,
                    name: `Ecuador`,
                    population: 14666055
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `GUY`,
                    parent: `South America`,
                    name: `Guyana`,
                    population: 756040
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `PAR`,
                    parent: `South America`,
                    name: `Paraguay`,
                    population: 6568290
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `PER`,
                    parent: `South America`,
                    name: `Peru`,
                    population: 29399817
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `SUR`,
                    parent: `South America`,
                    name: `Suriname`,
                    population: 529419
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `URG`,
                    parent: `South America`,
                    name: `Uruguay`,
                    population: 3368595
                }),
                new CountyHierarchicalDataItem(
                {
                    code: `VEN`,
                    parent: `South America`,
                    name: `Venezuela`,
                    population: 29278000
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
