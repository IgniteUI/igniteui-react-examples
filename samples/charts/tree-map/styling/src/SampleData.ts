export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public parent: any;
    public name: string;
    public pop: any;

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
            parent: null,
            name: `Angola`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Benin`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Botswana`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Burkina Faso`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Burundi`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Cameroon`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Cape Verde`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Central African Republic`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Chad`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Comoros`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Cote Ivoire`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Djibouti`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Equatorial Guinea`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Eritrea`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Ethiopia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Gabon`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Gambia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Ghana`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Guinea`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Guinea-Bissau`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Kenya`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Lesotho`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Liberia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Madagascar`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Malawi`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Mali`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Mauritania`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Mauritius`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Mozambique`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Namibia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Niger`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Nigeria`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Rwanda`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Sao Tome and Principe`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Senegal`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Seychelles`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Sierra Leone`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `South Africa`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `South Sudan`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Sudan`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Swaziland`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Tanzania`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Togo`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Uganda`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Zambia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Zimbabwe`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Congo`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Congo,Dem. Rep.`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Bangladesh`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Bhutan`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Brunei`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Cambodia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `China`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `India`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Indonesia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Japan`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Kazakhstan`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Kyrgyz Republic`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Noth Korea`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `South Korea`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Macao`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Hong Kong`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Lao PDR`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Malaysia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Maldives`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Mongolia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Myanmar`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Nepal`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Philippines`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Singapore`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Sri Lanka`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Tajikistan`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Thailand`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Turkmenistan`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Uzbekistan`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Vietnam`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Antigua and Barbuda`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Aruba`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Bahamas`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Barbados`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Belize`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Bermuda`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Cayman Islands`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Costa Rica`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Cuba`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Curacao`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Dominica`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Dominican Republic`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Faeroe Islands`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Grenada`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Guam`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Guatemala`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Haiti`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Honduras`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Jamaica`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Nicaragua`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Northern Mariana Islands`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Panama`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `St. Kitts and Nevis`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `St. Lucia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `St. Vincent and the Grenadines`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Trinidad and Tobago`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Turks and Caicos Islands`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Virgin Islands (U.S.)`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `El Salvador`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Puerto Rico`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Albania`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Andorra`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Armenia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Austria`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Belarus`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Belgium`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Bosnia and Herzegovina`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Bulgaria`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Channel Islands`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Croatia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Cyprus`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Czech Republic`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Denmark`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Estonia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Finland`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `France`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Georgia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Germany`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Greece`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Hungary`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Iceland`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Ireland`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Isle of Man`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Italy`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Kosovo`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Latvia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Liechtenstein`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Lithuania`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Luxembourg`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Malta`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Moldova`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Monaco`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Montenegro`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Netherlands`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Norway`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Poland`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Portugal`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Romania`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Russian`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `San Marino`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Serbia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Sint Maarten`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Slovak Republic`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Slovenia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Spain`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `St. Martin (French part)`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Sweden`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Switzerland`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Ukraine`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `United Kingdom`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Macedonia,FYR`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Afghanistan`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Algeria`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Azerbaijan`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Bahrain`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Iraq`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Israel`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Jordan`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Kuwait`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Lebanon`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Libya`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Morocco`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Oman`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Pakistan`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Qatar`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Saudi Arabia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Somalia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Syrian Arab Republic`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Tunisia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Turkey`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `United Arab Emirates`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `West Bank and Gaza`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Yemen`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Iran`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Egypt.`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Canada`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Greenland`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Mexico`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `United States`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `American Samoa`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Australia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Fiji`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `French Polynesia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Kiribati`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Marshall Islands`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `New Caledonia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `New Zealand`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Palau`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Papua New Guinea`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Samoa`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Timor-Leste`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Tonga`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Tuvalu`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Vanuatu`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Micronesia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Solomon Islands`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Argentina`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Bolivia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Brazil`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Chile`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Colombia`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Ecuador`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Guyana`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Paraguay`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Peru`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Suriname`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Uruguay`,
            pop: null
        }));
        this.push(new DataItem(
        {
            parent: null,
            name: `Venezuela`,
            pop: null
        }));
    }
}
