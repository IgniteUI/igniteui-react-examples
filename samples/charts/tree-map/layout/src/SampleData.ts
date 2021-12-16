export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public parent: string;
    public name: string;
    public pop: number;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            parent: null,
            name: `Asia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Middle East`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Europe`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `North America`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Central America`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `South America`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Africa`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Oceania`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Angola`,
            pop: 19618432
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Benin`,
            pop: 9099922
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Botswana`,
            pop: 2030738
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Burkina Faso`,
            pop: 16967845
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Burundi`,
            pop: 8575172
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Cameroon`,
            pop: 20030362
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Cape Verde`,
            pop: 500585
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `CAR`,
            pop: 4486837
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Chad`,
            pop: 11525496
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Comoros`,
            pop: 753943
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Ivory Coast`,
            pop: 20152894
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Djibouti`,
            pop: 905564
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Equatorial Guinea`,
            pop: 720213
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Eritrea`,
            pop: 5415280
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Ethiopia`,
            pop: 84734262
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Gabon`,
            pop: 1534262
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Gambia`,
            pop: 1776103
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Ghana`,
            pop: 24965816
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Guinea`,
            pop: 10221808
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Guinea-Bissau`,
            pop: 1547061
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Kenya`,
            pop: 41609728
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Lesotho`,
            pop: 2193843
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Liberia`,
            pop: 4128572
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Madagascar`,
            pop: 21315135
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Malawi`,
            pop: 15380888
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Mali`,
            pop: 15839538
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Mauritania`,
            pop: 3541540
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Mauritius`,
            pop: 1286051
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Mozambique`,
            pop: 23929708
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Namibia`,
            pop: 2324004
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Niger`,
            pop: 16068994
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Nigeria`,
            pop: 162470737
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Rwanda`,
            pop: 10942950
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Sao Tome`,
            pop: 168526
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Senegal`,
            pop: 12767556
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Seychelles`,
            pop: 86000
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Sierra Leone`,
            pop: 5997486
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `South Africa`,
            pop: 50586757
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `South Sudan`,
            pop: 10314021
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Sudan`,
            pop: 34318385
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Swaziland`,
            pop: 1067773
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Tanzania`,
            pop: 46218486
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Togo`,
            pop: 6154813
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Uganda`,
            pop: 34509205
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Zambia`,
            pop: 13474959
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Zimbabwe`,
            pop: 12754378
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `Congo`,
            pop: 4139748
        }));
        this.push(new DataItem(
        {
            parent: `Africa`,
            name: `DRC`,
            pop: 67757577
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Bangladesh`,
            pop: 150493658
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Bhutan`,
            pop: 738267
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Brunei`,
            pop: 405938
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Cambodia`,
            pop: 14305183
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `China`,
            pop: 1344130000
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `India`,
            pop: 1241491960
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Indonesia`,
            pop: 242325638
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Japan`,
            pop: 127817277
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Kazakhstan`,
            pop: 16558676
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Kyrgyzstan`,
            pop: 5514600
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `North Korea`,
            pop: 24451285
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `South Korea`,
            pop: 49779000
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Macao`,
            pop: 555731
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Hong Kong`,
            pop: 7071600
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Lao PDR`,
            pop: 6288037
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Malaysia`,
            pop: 28859154
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Maldives`,
            pop: 320081
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Mongolia`,
            pop: 2800114
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Myanmar`,
            pop: 48336763
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Nepal`,
            pop: 30485798
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Philippines`,
            pop: 94852030
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Singapore`,
            pop: 5183700
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Sri Lanka`,
            pop: 20869000
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Tajikistan`,
            pop: 6976958
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Thailand`,
            pop: 69518555
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Turkmenistan`,
            pop: 5105301
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Uzbekistan`,
            pop: 29341200
        }));
        this.push(new DataItem(
        {
            parent: `Asia`,
            name: `Vietnam`,
            pop: 87840000
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Antigua and Barbuda`,
            pop: 89612
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Aruba`,
            pop: 108141
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Bahamas`,
            pop: 347176
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Barbados`,
            pop: 273925
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Belize`,
            pop: 356600
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Bermuda`,
            pop: 64700
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Cayman Islands`,
            pop: 56729
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Costa Rica`,
            pop: 4726575
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Cuba`,
            pop: 11253665
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Curacao`,
            pop: 145619
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Dominica`,
            pop: 67675
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Dominican Republic`,
            pop: 10056181
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Faeroe Islands`,
            pop: 48863
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Grenada`,
            pop: 104890
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Guam`,
            pop: 182111
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Guatemala`,
            pop: 14757316
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Haiti`,
            pop: 10123787
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Honduras`,
            pop: 7754687
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Jamaica`,
            pop: 2706500
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Nicaragua`,
            pop: 5869859
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Northern Mariana Islands`,
            pop: 61174
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Panama`,
            pop: 3571185
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `St. Kitts and Nevis`,
            pop: 53051
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `St. Lucia`,
            pop: 176000
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `St. Vincent and the Grenadines`,
            pop: 109365
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Trinidad and Tobago`,
            pop: 1346350
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Turks and Caicos Islands`,
            pop: 39184
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Virgin Islands (U.S.)`,
            pop: 109666
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `El Salvador`,
            pop: 6227491
        }));
        this.push(new DataItem(
        {
            parent: `Central America`,
            name: `Puerto Rico`,
            pop: 3706690
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Albania`,
            pop: 3215988
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Andorra`,
            pop: 86165
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Armenia`,
            pop: 3100236
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Austria`,
            pop: 8423635
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Belarus`,
            pop: 9473000
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Belgium`,
            pop: 11020952
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Bosnia and Herzegovina`,
            pop: 3752228
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Bulgaria`,
            pop: 7348328
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Channel Islands`,
            pop: 153876
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Croatia`,
            pop: 4403000
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Cyprus`,
            pop: 1116564
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Czechia`,
            pop: 10496088
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Denmark`,
            pop: 5570572
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Estonia`,
            pop: 1339928
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Finland`,
            pop: 5388272
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `France`,
            pop: 65433714
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Georgia`,
            pop: 4486000
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Germany`,
            pop: 81797673
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Greece`,
            pop: 11300410
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Hungary`,
            pop: 9971727
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Iceland`,
            pop: 319014
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Ireland`,
            pop: 4576317
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Isle of Man`,
            pop: 83327
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Italy`,
            pop: 60723603
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Kosovo`,
            pop: 1802765
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Latvia`,
            pop: 2058184
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Liechtenstein`,
            pop: 36304
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Lithuania`,
            pop: 3030173
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Luxembourg`,
            pop: 518252
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Malta`,
            pop: 415654
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Moldova`,
            pop: 3559000
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Monaco`,
            pop: 35427
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Montenegro`,
            pop: 632261
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Netherlands`,
            pop: 16693074
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Norway`,
            pop: 4953088
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Poland`,
            pop: 38534157
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Portugal`,
            pop: 10556999
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Romania`,
            pop: 21384832
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Russian`,
            pop: 142960000
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `San Marino`,
            pop: 31735
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Serbia`,
            pop: 7258745
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Sint Maarten`,
            pop: 36609
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Slovak Republic`,
            pop: 5398384
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Slovenia`,
            pop: 2052843
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Spain`,
            pop: 46174601
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `St. Martin (French part)`,
            pop: 30615
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Sweden`,
            pop: 9449213
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Switzerland`,
            pop: 7912398
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `Ukraine`,
            pop: 45706100
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `UK`,
            pop: 62744081
        }));
        this.push(new DataItem(
        {
            parent: `Europe`,
            name: `North Macedonia`,
            pop: 2063893
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Afghanistan`,
            pop: 35320445
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Algeria`,
            pop: 35980193
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Azerbaijan`,
            pop: 9173082
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Bahrain`,
            pop: 1323535
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Iraq`,
            pop: 32961959
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Israel`,
            pop: 7765900
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Jordan`,
            pop: 6181000
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Kuwait`,
            pop: 2818042
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Lebanon`,
            pop: 4259405
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Libya`,
            pop: 6422772
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Morocco`,
            pop: 32272974
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Oman`,
            pop: 2846145
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Pakistan`,
            pop: 176745364
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Qatar`,
            pop: 1870041
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Saudi Arabia`,
            pop: 28082541
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Somalia`,
            pop: 9556873
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Syrian Arab Republic`,
            pop: 20820311
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Tunisia`,
            pop: 10673800
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Turkey`,
            pop: 73639596
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `United Arab Emirates`,
            pop: 7890924
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `West Bank and Gaza`,
            pop: 3927051
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Yemen`,
            pop: 24799880
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Iran`,
            pop: 74798599
        }));
        this.push(new DataItem(
        {
            parent: `Middle East`,
            name: `Egypt.`,
            pop: 82536770
        }));
        this.push(new DataItem(
        {
            parent: `North America`,
            name: `Canada`,
            pop: 34483975
        }));
        this.push(new DataItem(
        {
            parent: `North America`,
            name: `Greenland`,
            pop: 56840
        }));
        this.push(new DataItem(
        {
            parent: `North America`,
            name: `Mexico`,
            pop: 114793341
        }));
        this.push(new DataItem(
        {
            parent: `North America`,
            name: `United States`,
            pop: 311591917
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `American Samoa`,
            pop: 69543
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `Australia`,
            pop: 22323900
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `Fiji`,
            pop: 868406
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `French Polynesia`,
            pop: 273777
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `Kiribati`,
            pop: 101093
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `Marshall Islands`,
            pop: 54816
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `New Caledonia`,
            pop: 254024
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `New Zealand`,
            pop: 4405200
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `Palau`,
            pop: 20609
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `Papua New Guinea`,
            pop: 7013829
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `Samoa`,
            pop: 183874
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `Timor-Leste`,
            pop: 1175880
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `Tonga`,
            pop: 104509
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `Tuvalu`,
            pop: 9847
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `Vanuatu`,
            pop: 245619
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `Micronesia`,
            pop: 111542
        }));
        this.push(new DataItem(
        {
            parent: `Oceania`,
            name: `Solomon Islands`,
            pop: 552267
        }));
        this.push(new DataItem(
        {
            parent: `South America`,
            name: `Argentina`,
            pop: 40764561
        }));
        this.push(new DataItem(
        {
            parent: `South America`,
            name: `Bolivia`,
            pop: 10088108
        }));
        this.push(new DataItem(
        {
            parent: `South America`,
            name: `Brazil`,
            pop: 196655014
        }));
        this.push(new DataItem(
        {
            parent: `South America`,
            name: `Chile`,
            pop: 17269525
        }));
        this.push(new DataItem(
        {
            parent: `South America`,
            name: `Colombia`,
            pop: 46927125
        }));
        this.push(new DataItem(
        {
            parent: `South America`,
            name: `Ecuador`,
            pop: 14666055
        }));
        this.push(new DataItem(
        {
            parent: `South America`,
            name: `Guyana`,
            pop: 756040
        }));
        this.push(new DataItem(
        {
            parent: `South America`,
            name: `Paraguay`,
            pop: 6568290
        }));
        this.push(new DataItem(
        {
            parent: `South America`,
            name: `Peru`,
            pop: 29399817
        }));
        this.push(new DataItem(
        {
            parent: `South America`,
            name: `Suriname`,
            pop: 529419
        }));
        this.push(new DataItem(
        {
            parent: `South America`,
            name: `Uruguay`,
            pop: 3368595
        }));
        this.push(new DataItem(
        {
            parent: `South America`,
            name: `Venezuela`,
            pop: 29278000
        }));
    }
}
