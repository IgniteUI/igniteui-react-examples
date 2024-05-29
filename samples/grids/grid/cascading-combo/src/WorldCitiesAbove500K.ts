export class WorldCitiesAbove500KItem {
    public constructor(init: Partial<WorldCitiesAbove500KItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public Name: string;
    public Country: string;
    public Region: string;
    public Population: number;

}
export class WorldCitiesAbove500K extends Array<WorldCitiesAbove500KItem> {
    public constructor(items: Array<WorldCitiesAbove500KItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new WorldCitiesAbove500KItem(
                {
                    ID: 10000,
                    Name: `Shanghai`,
                    Country: `China`,
                    Region: `Shanghai`,
                    Population: 22315474
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10001,
                    Name: `Istanbul`,
                    Country: `Turkey`,
                    Region: `Istanbul`,
                    Population: 14804116
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10002,
                    Name: `Buenos Aires`,
                    Country: `Argentina`,
                    Region: `Buenos Aires F.D.`,
                    Population: 13076300
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10003,
                    Name: `Mumbai`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 12691836
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10004,
                    Name: `Mexico City`,
                    Country: `Mexico`,
                    Region: `Mexico City`,
                    Population: 12294193
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10005,
                    Name: `Beijing`,
                    Country: `China`,
                    Region: `Beijing`,
                    Population: 11716620
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10006,
                    Name: `Karachi`,
                    Country: `Pakistan`,
                    Region: `Sindh`,
                    Population: 11624219
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10007,
                    Name: `Tianjin`,
                    Country: `China`,
                    Region: `Tianjin`,
                    Population: 11090314
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10008,
                    Name: `Guangzhou`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 11071424
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10009,
                    Name: `Delhi`,
                    Country: `India`,
                    Region: `Delhi`,
                    Population: 10927986
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10010,
                    Name: `Moscow`,
                    Country: `Russia`,
                    Region: `Moscow`,
                    Population: 10381222
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10011,
                    Name: `Shenzhen`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 10358381
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10012,
                    Name: `Dhaka`,
                    Country: `Bangladesh`,
                    Region: `Dhaka`,
                    Population: 10356500
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10013,
                    Name: `Seoul`,
                    Country: `South Korea`,
                    Region: `Seoul`,
                    Population: 10349312
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10014,
                    Name: `Sao Paulo`,
                    Country: `Brazil`,
                    Region: `Sao Paulo`,
                    Population: 10021295
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10015,
                    Name: `Wuhan`,
                    Country: `China`,
                    Region: `Hubei`,
                    Population: 9785388
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10016,
                    Name: `Lagos`,
                    Country: `Nigeria`,
                    Region: `Lagos`,
                    Population: 9000000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10017,
                    Name: `Jakarta`,
                    Country: `Indonesia`,
                    Region: `Jakarta`,
                    Population: 8540121
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10018,
                    Name: `Tokyo`,
                    Country: `Japan`,
                    Region: `Tokyo`,
                    Population: 8336599
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10019,
                    Name: `New York City`,
                    Country: `United States`,
                    Region: `New York`,
                    Population: 8175133
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10020,
                    Name: `Taipei`,
                    Country: `Taiwan`,
                    Region: `Taiwan`,
                    Population: 7871900
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10021,
                    Name: `Kinshasa`,
                    Country: `Democratic Republic of the Congo`,
                    Region: `Kinshasa`,
                    Population: 7785965
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10022,
                    Name: `Lima`,
                    Country: `Peru`,
                    Region: `Lima`,
                    Population: 7737002
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10023,
                    Name: `Cairo`,
                    Country: `Egypt`,
                    Region: `Cairo`,
                    Population: 7734614
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10024,
                    Name: `Bogota`,
                    Country: `Colombia`,
                    Region: `Bogota D.C.`,
                    Population: 7674366
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10025,
                    Name: `London`,
                    Country: `United Kingdom`,
                    Region: `England`,
                    Population: 7556900
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10026,
                    Name: `Hong Kong`,
                    Country: `Hong Kong`,
                    Region: `Central and Western`,
                    Population: 7482500
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10027,
                    Name: `Chongqing`,
                    Country: `China`,
                    Region: `Chongqing`,
                    Population: 7457600
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10028,
                    Name: `Chengdu`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 7415590
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10029,
                    Name: `Dongguan`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 7271322
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10030,
                    Name: `Baghdad`,
                    Country: `Iraq`,
                    Region: `Baghdad`,
                    Population: 7216000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10031,
                    Name: `Foshan`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 7197394
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10032,
                    Name: `Nanjing`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 7165292
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10033,
                    Name: `Tehran`,
                    Country: `Iran`,
                    Region: `Tehran`,
                    Population: 7153309
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10034,
                    Name: `Xian`,
                    Country: `China`,
                    Region: `Shaanxi`,
                    Population: 6501190
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10035,
                    Name: `Ahmedabad`,
                    Country: `India`,
                    Region: `Gujarat`,
                    Population: 6357693
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10036,
                    Name: `Lahore`,
                    Country: `Pakistan`,
                    Region: `Punjab`,
                    Population: 6310888
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10037,
                    Name: `Shenyang`,
                    Country: `China`,
                    Region: `Liaoning`,
                    Population: 6255921
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10038,
                    Name: `Hangzhou`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 6241971
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10039,
                    Name: `Rio de Janeiro`,
                    Country: `Brazil`,
                    Region: `Rio de Janeiro`,
                    Population: 6023699
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10040,
                    Name: `Harbin`,
                    Country: `China`,
                    Region: `Heilongjiang`,
                    Population: 5878939
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10041,
                    Name: `Suzhou`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 5345961
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10042,
                    Name: `Shantou`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 5329024
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10043,
                    Name: `Bangkok`,
                    Country: `Thailand`,
                    Region: `Bangkok`,
                    Population: 5104476
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10044,
                    Name: `Bengaluru`,
                    Country: `India`,
                    Region: `Karnataka`,
                    Population: 5104047
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10045,
                    Name: `Saint Petersburg`,
                    Country: `Russia`,
                    Region: `St.-Petersburg`,
                    Population: 5028000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10046,
                    Name: `Santiago`,
                    Country: `Chile`,
                    Region: `Santiago Metropolitan`,
                    Population: 4837295
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10047,
                    Name: `Kolkata`,
                    Country: `India`,
                    Region: `West Bengal`,
                    Population: 4631392
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10048,
                    Name: `Sydney`,
                    Country: `Australia`,
                    Region: `New South Wales`,
                    Population: 4627345
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10049,
                    Name: `Surat`,
                    Country: `India`,
                    Region: `Gujarat`,
                    Population: 4591246
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10050,
                    Name: `Taiyuan`,
                    Country: `China`,
                    Region: `Shanxi`,
                    Population: 4529141
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10051,
                    Name: `Yangon`,
                    Country: `Myanmar`,
                    Region: `Rangoon`,
                    Population: 4477638
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10052,
                    Name: `Jinan`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 4335989
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10053,
                    Name: `Chennai`,
                    Country: `India`,
                    Region: `Tamil Nadu`,
                    Population: 4328063
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10054,
                    Name: `Zhengzhou`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 4253913
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10055,
                    Name: `Melbourne`,
                    Country: `Australia`,
                    Region: `Victoria`,
                    Population: 4246375
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10056,
                    Name: `Riyadh`,
                    Country: `Saudi Arabia`,
                    Region: `Riyadh Region`,
                    Population: 4205961
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10057,
                    Name: `Changchun`,
                    Country: `China`,
                    Region: `Jilin`,
                    Population: 4193073
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10058,
                    Name: `Dalian`,
                    Country: `China`,
                    Region: `Liaoning`,
                    Population: 4087733
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10059,
                    Name: `Los Angeles`,
                    Country: `United States`,
                    Region: `California`,
                    Population: 3971883
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10060,
                    Name: `Shijiazhuang`,
                    Country: `China`,
                    Region: `Hebei`,
                    Population: 3938513
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10061,
                    Name: `Chattogram`,
                    Country: `Bangladesh`,
                    Region: `Chittagong`,
                    Population: 3920222
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10062,
                    Name: `Kunming`,
                    Country: `China`,
                    Region: `Yunnan`,
                    Population: 3855346
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10063,
                    Name: `Nanning`,
                    Country: `China`,
                    Region: `Guangxi`,
                    Population: 3839800
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10064,
                    Name: `Alexandria`,
                    Country: `Egypt`,
                    Region: `Alexandria`,
                    Population: 3811516
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10065,
                    Name: `Qingdao`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 3718835
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10066,
                    Name: `Busan`,
                    Country: `South Korea`,
                    Region: `Busan`,
                    Population: 3678555
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10067,
                    Name: `Abidjan`,
                    Country: `Ivory Coast`,
                    Region: `Abidjan`,
                    Population: 3677115
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10068,
                    Name: `Kano`,
                    Country: `Nigeria`,
                    Region: `Kano`,
                    Population: 3626068
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10069,
                    Name: `Hyderabad`,
                    Country: `India`,
                    Region: `Telangana`,
                    Population: 3597816
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10070,
                    Name: `Puyang`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 3590000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10071,
                    Name: `Yokohama`,
                    Country: `Japan`,
                    Region: `Kanagawa`,
                    Population: 3574443
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10072,
                    Name: `Ibadan`,
                    Country: `Nigeria`,
                    Region: `Oyo`,
                    Population: 3565108
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10073,
                    Name: `Singapore`,
                    Country: `Singapore`,
                    Region: ``,
                    Population: 3547809
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10074,
                    Name: `Wuxi`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 3543719
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10075,
                    Name: `Xiamen`,
                    Country: `China`,
                    Region: `Fujian`,
                    Population: 3531347
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10076,
                    Name: `Ankara`,
                    Country: `Turkey`,
                    Region: `Ankara`,
                    Population: 3517182
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10077,
                    Name: `Ningbo`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 3491597
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10078,
                    Name: `Ho Chi Minh City`,
                    Country: `Vietnam`,
                    Region: `Ho Chi Minh`,
                    Population: 3467331
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10079,
                    Name: `Shiyan`,
                    Country: `China`,
                    Region: `Hubei`,
                    Population: 3460000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10080,
                    Name: `Cape Town`,
                    Country: `South Africa`,
                    Region: `Western Cape`,
                    Population: 3433441
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10081,
                    Name: `Berlin`,
                    Country: `Germany`,
                    Region: `Berlin`,
                    Population: 3426354
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10082,
                    Name: `Tangshan`,
                    Country: `China`,
                    Region: `Hebei`,
                    Population: 3372102
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10083,
                    Name: `Hefei`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 3310268
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10084,
                    Name: `Changzhou`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 3290918
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10085,
                    Name: `Madrid`,
                    Country: `Spain`,
                    Region: `Madrid`,
                    Population: 3255944
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10086,
                    Name: `Pyongyang`,
                    Country: `North Korea`,
                    Region: `Pyongyang`,
                    Population: 3222000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10087,
                    Name: `Casablanca`,
                    Country: `Morocco`,
                    Region: `Casablanca-Settat`,
                    Population: 3144909
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10088,
                    Name: `Zibo`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 3129228
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10089,
                    Name: `Durban`,
                    Country: `South Africa`,
                    Region: `KwaZulu-Natal`,
                    Population: 3120282
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10090,
                    Name: `Fuzhou`,
                    Country: `China`,
                    Region: `Fujian`,
                    Population: 3102421
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10091,
                    Name: `Changsha`,
                    Country: `China`,
                    Region: `Hunan`,
                    Population: 3093980
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10092,
                    Name: `Kabul`,
                    Country: `Afghanistan`,
                    Region: `Kabul`,
                    Population: 3043532
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10093,
                    Name: `Guiyang`,
                    Country: `China`,
                    Region: `Guizhou`,
                    Population: 3037159
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10094,
                    Name: `UEruemqi`,
                    Country: `China`,
                    Region: `Xinjiang`,
                    Population: 3029372
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10095,
                    Name: `Caracas`,
                    Country: `Venezuela`,
                    Region: `Distrito Federal`,
                    Population: 3000000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10096,
                    Name: `Dubai`,
                    Country: `United Arab Emirates`,
                    Region: `Dubai`,
                    Population: 2956587
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10097,
                    Name: `Pune`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 2935744
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10098,
                    Name: `Jeddah`,
                    Country: `Saudi Arabia`,
                    Region: `Mecca Region`,
                    Population: 2867446
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10099,
                    Name: `Kanpur`,
                    Country: `India`,
                    Region: `Uttar Pradesh`,
                    Population: 2823249
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10100,
                    Name: `Kyiv`,
                    Country: `Ukraine`,
                    Region: `Kyiv City`,
                    Population: 2797553
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10101,
                    Name: `Luanda`,
                    Country: `Angola`,
                    Region: `Luanda`,
                    Population: 2776168
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10102,
                    Name: `Quezon City`,
                    Country: `Philippines`,
                    Region: `Metro Manila`,
                    Population: 2761720
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10103,
                    Name: `Addis Ababa`,
                    Country: `Ethiopia`,
                    Region: `Addis Ababa`,
                    Population: 2757729
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10104,
                    Name: `Nairobi`,
                    Country: `Kenya`,
                    Region: `Nairobi Area`,
                    Population: 2750547
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10105,
                    Name: `Zhongshan`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 2740994
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10106,
                    Name: `Baoding`,
                    Country: `China`,
                    Region: `Hebei`,
                    Population: 2739887
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10107,
                    Name: `Chicago`,
                    Country: `United States`,
                    Region: `Illinois`,
                    Population: 2720546
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10108,
                    Name: `Salvador`,
                    Country: `Brazil`,
                    Region: `Bahia`,
                    Population: 2711840
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10109,
                    Name: `Jaipur`,
                    Country: `India`,
                    Region: `Rajasthan`,
                    Population: 2711758
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10110,
                    Name: `Dar es Salaam`,
                    Country: `Tanzania`,
                    Region: `Dar es Salaam`,
                    Population: 2698652
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10111,
                    Name: `Wenzhou`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 2686825
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10112,
                    Name: `Lanzhou`,
                    Country: `China`,
                    Region: `Gansu`,
                    Population: 2628426
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10113,
                    Name: `Incheon`,
                    Country: `South Korea`,
                    Region: `Incheon`,
                    Population: 2628000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10114,
                    Name: `Yunfu`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 2612800
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10117,
                    Name: `Basrah`,
                    Country: `Iraq`,
                    Region: `Basra`,
                    Population: 2600000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10116,
                    Name: `Navi Mumbai`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 2600000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10115,
                    Name: `Toronto`,
                    Country: `Canada`,
                    Region: `Ontario`,
                    Population: 2600000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10118,
                    Name: `Osaka`,
                    Country: `Japan`,
                    Region: `Osaka`,
                    Population: 2592413
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10119,
                    Name: `Mogadishu`,
                    Country: `Somalia`,
                    Region: `Banaadir`,
                    Population: 2587183
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10120,
                    Name: `Daegu`,
                    Country: `South Korea`,
                    Region: `Daegu`,
                    Population: 2566540
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10121,
                    Name: `Maoming`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 2539148
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10122,
                    Name: `Faisalabad`,
                    Country: `Pakistan`,
                    Region: `Punjab`,
                    Population: 2506595
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10123,
                    Name: `Izmir`,
                    Country: `Turkey`,
                    Region: `Izmir`,
                    Population: 2500603
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10124,
                    Name: `Huaian`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 2494013
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10125,
                    Name: `Dakar`,
                    Country: `Senegal`,
                    Region: `Dakar`,
                    Population: 2476400
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10126,
                    Name: `Lucknow`,
                    Country: `India`,
                    Region: `Uttar Pradesh`,
                    Population: 2472011
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10127,
                    Name: `Giza`,
                    Country: `Egypt`,
                    Region: `Giza`,
                    Population: 2443203
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10128,
                    Name: `Fortaleza`,
                    Country: `Brazil`,
                    Region: `Ceara`,
                    Population: 2400000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10129,
                    Name: `Cali`,
                    Country: `Colombia`,
                    Region: `Valle del Cauca`,
                    Population: 2392877
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10130,
                    Name: `Surabaya`,
                    Country: `Indonesia`,
                    Region: `East Java`,
                    Population: 2374658
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10131,
                    Name: `Belo Horizonte`,
                    Country: `Brazil`,
                    Region: `Minas Gerais`,
                    Population: 2373224
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10132,
                    Name: `Nanchang`,
                    Country: `China`,
                    Region: `Jiangxi`,
                    Population: 2357839
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10133,
                    Name: `Rome`,
                    Country: `Italy`,
                    Region: `Latium`,
                    Population: 2318895
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10134,
                    Name: `Mashhad`,
                    Country: `Iran`,
                    Region: `Razavi Khorasan`,
                    Population: 2307177
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10135,
                    Name: `Linyi`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 2303648
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10136,
                    Name: `Brooklyn`,
                    Country: `United States`,
                    Region: `New York`,
                    Population: 2300664
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10137,
                    Name: `Houston`,
                    Country: `United States`,
                    Region: `Texas`,
                    Population: 2296224
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10138,
                    Name: `Nantong`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 2273326
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10139,
                    Name: `Queens`,
                    Country: `United States`,
                    Region: `New York`,
                    Population: 2272771
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10140,
                    Name: `Nagpur`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 2228018
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10141,
                    Name: `Yantai`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 2227733
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10142,
                    Name: `Maracaibo`,
                    Country: `Venezuela`,
                    Region: `Zulia`,
                    Population: 2225000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10143,
                    Name: `Brasilia`,
                    Country: `Brazil`,
                    Region: `Federal District`,
                    Population: 2207718
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10144,
                    Name: `Santo Domingo`,
                    Country: `Dominican Republic`,
                    Region: `Nacional`,
                    Population: 2201941
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10145,
                    Name: `Nagoya`,
                    Country: `Japan`,
                    Region: `Aichi`,
                    Population: 2191279
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10146,
                    Name: `Brisbane`,
                    Country: `Australia`,
                    Region: `Queensland`,
                    Population: 2189878
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10147,
                    Name: `Havana`,
                    Country: `Cuba`,
                    Region: `Havana`,
                    Population: 2163824
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10148,
                    Name: `Paris`,
                    Country: `France`,
                    Region: `Ile-de-France`,
                    Population: 2138551
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10149,
                    Name: `Huizhou`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 2090578
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10150,
                    Name: `Al Mawsil al Jadidah`,
                    Country: `Iraq`,
                    Region: `Nineveh`,
                    Population: 2065597
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10151,
                    Name: `Haikou`,
                    Country: `China`,
                    Region: `Hainan`,
                    Population: 2046189
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10152,
                    Name: `Weifang`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 2044028
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10153,
                    Name: `Zunyi`,
                    Country: `China`,
                    Region: `Guizhou`,
                    Population: 2037775
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10154,
                    Name: `Johannesburg`,
                    Country: `South Africa`,
                    Region: `Gauteng`,
                    Population: 2026469
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10155,
                    Name: `Kowloon`,
                    Country: `Hong Kong`,
                    Region: `Kowloon City`,
                    Population: 2019533
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10156,
                    Name: `Al Basrah al Qadimah`,
                    Country: `Iraq`,
                    Region: `Basra`,
                    Population: 2015483
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10157,
                    Name: `Lianyungang`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 2001009
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10158,
                    Name: `Almaty`,
                    Country: `Kazakhstan`,
                    Region: `Almaty`,
                    Population: 2000900
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10159,
                    Name: `Medellin`,
                    Country: `Colombia`,
                    Region: `Antioquia`,
                    Population: 1999979
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10160,
                    Name: `Tashkent`,
                    Country: `Uzbekistan`,
                    Region: `Tashkent`,
                    Population: 1978028
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10161,
                    Name: `Algiers`,
                    Country: `Algeria`,
                    Region: `Algiers`,
                    Population: 1977663
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10162,
                    Name: `Ganzhou`,
                    Country: `China`,
                    Region: `Jiangxi`,
                    Population: 1977253
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10163,
                    Name: `Khartoum`,
                    Country: `Sudan`,
                    Region: `Khartoum`,
                    Population: 1974647
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10164,
                    Name: `Accra`,
                    Country: `Ghana`,
                    Region: `Greater Accra`,
                    Population: 1963264
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10165,
                    Name: `Guayaquil`,
                    Country: `Ecuador`,
                    Region: `Guayas`,
                    Population: 1952029
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10166,
                    Name: `Ordos`,
                    Country: `China`,
                    Region: `Inner Mongolia`,
                    Population: 1940653
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10167,
                    Name: `Sanaa`,
                    Country: `Yemen`,
                    Region: `Amanat Alasimah`,
                    Population: 1937451
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10168,
                    Name: `Beirut`,
                    Country: `Lebanon`,
                    Region: `Beyrouth`,
                    Population: 1916100
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10169,
                    Name: `Jieyang`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 1899394
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10170,
                    Name: `Perth`,
                    Country: `Australia`,
                    Region: `Western Australia`,
                    Population: 1896548
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10171,
                    Name: `Sapporo`,
                    Country: `Japan`,
                    Region: `Hokkaido`,
                    Population: 1883027
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10172,
                    Name: `Jilin`,
                    Country: `China`,
                    Region: `Jilin`,
                    Population: 1881977
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10173,
                    Name: `Bucharest`,
                    Country: `Romania`,
                    Region: `Bucharest`,
                    Population: 1877155
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10174,
                    Name: `Camayenne`,
                    Country: `Guinea`,
                    Region: `Conakry`,
                    Population: 1871242
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10175,
                    Name: `Nanchong`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 1858875
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10176,
                    Name: `Indore`,
                    Country: `India`,
                    Region: `Madhya Pradesh`,
                    Population: 1837041
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10177,
                    Name: `Vadodara`,
                    Country: `India`,
                    Region: `Gujarat`,
                    Population: 1822221
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10178,
                    Name: `Iztapalapa`,
                    Country: `Mexico`,
                    Region: `Mexico City`,
                    Population: 1815786
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10179,
                    Name: `Nanyang`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 1811812
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10180,
                    Name: `Fuyang`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 1768947
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10181,
                    Name: `Conakry`,
                    Country: `Guinea`,
                    Region: `Conakry`,
                    Population: 1767200
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10182,
                    Name: `Bayan Nur`,
                    Country: `China`,
                    Region: `Inner Mongolia`,
                    Population: 1760000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10183,
                    Name: `Maracay`,
                    Country: `Venezuela`,
                    Region: `Aragua`,
                    Population: 1754256
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10184,
                    Name: `Medan`,
                    Country: `Indonesia`,
                    Region: `North Sumatra`,
                    Population: 1750971
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10185,
                    Name: `Chaozhou`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 1750945
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10186,
                    Name: `Rawalpindi`,
                    Country: `Pakistan`,
                    Region: `Punjab`,
                    Population: 1743101
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10187,
                    Name: `Minsk`,
                    Country: `Belarus`,
                    Region: `Minsk City`,
                    Population: 1742124
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10188,
                    Name: `Budapest`,
                    Country: `Hungary`,
                    Region: `Budapest`,
                    Population: 1741041
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10189,
                    Name: `Mosul`,
                    Country: `Iraq`,
                    Region: `Nineveh`,
                    Population: 1739800
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10190,
                    Name: `Hamburg`,
                    Country: `Germany`,
                    Region: `Hamburg`,
                    Population: 1739117
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10191,
                    Name: `Qingyuan`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 1738424
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10192,
                    Name: `Taian`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 1735425
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10193,
                    Name: `Shaoxing`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 1725726
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10194,
                    Name: `Curitiba`,
                    Country: `Brazil`,
                    Region: `Parana`,
                    Population: 1718421
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10195,
                    Name: `Warsaw`,
                    Country: `Poland`,
                    Region: `Mazovia`,
                    Population: 1702139
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10196,
                    Name: `Bandung`,
                    Country: `Indonesia`,
                    Region: `West Java`,
                    Population: 1699719
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10197,
                    Name: `Soweto`,
                    Country: `South Africa`,
                    Region: `Gauteng`,
                    Population: 1695047
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10198,
                    Name: `Vienna`,
                    Country: `Austria`,
                    Region: `Vienna`,
                    Population: 1691468
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10199,
                    Name: `Kallakurichi`,
                    Country: `India`,
                    Region: `Tamil Nadu`,
                    Population: 1682687
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10200,
                    Name: `Huainan`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 1666826
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10201,
                    Name: `Wuhu`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 1665000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10202,
                    Name: `Rabat`,
                    Country: `Morocco`,
                    Region: `Rabat-Sale-Kenitra`,
                    Population: 1655753
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10203,
                    Name: `Ecatepec de Morelos`,
                    Country: `Mexico`,
                    Region: `Mexico`,
                    Population: 1655015
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10204,
                    Name: `Suzhou`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 1647642
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10205,
                    Name: `Luan`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 1644344
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10206,
                    Name: `Barcelona`,
                    Country: `Spain`,
                    Region: `Catalonia`,
                    Population: 1621537
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10207,
                    Name: `Valencia`,
                    Country: `Venezuela`,
                    Region: `Carabobo`,
                    Population: 1619470
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10208,
                    Name: `Pretoria`,
                    Country: `South Africa`,
                    Region: `Gauteng`,
                    Population: 1619438
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10209,
                    Name: `Yancheng`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 1615717
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10210,
                    Name: `Zhanjiang`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 1611868
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10211,
                    Name: `Taizhou`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 1607108
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10212,
                    Name: `Aleppo`,
                    Country: `Syria`,
                    Region: `Aleppo`,
                    Population: 1602264
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10214,
                    Name: `Manila`,
                    Country: `Philippines`,
                    Region: `Metro Manila`,
                    Population: 1600000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10213,
                    Name: `Montreal`,
                    Country: `Canada`,
                    Region: `Quebec`,
                    Population: 1600000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10215,
                    Name: `Patna`,
                    Country: `India`,
                    Region: `Bihar`,
                    Population: 1599920
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10216,
                    Name: `Bhopal`,
                    Country: `India`,
                    Region: `Madhya Pradesh`,
                    Population: 1599914
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10217,
                    Name: `Manaus`,
                    Country: `Brazil`,
                    Region: `Amazonas`,
                    Population: 1598210
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10218,
                    Name: `Dazhou`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 1589435
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10219,
                    Name: `Yangzhou`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 1584237
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10220,
                    Name: `Kaduna`,
                    Country: `Nigeria`,
                    Region: `Kaduna`,
                    Population: 1582102
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10221,
                    Name: `Phnom Penh`,
                    Country: `Cambodia`,
                    Region: `Phnom Penh`,
                    Population: 1573544
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10222,
                    Name: `Guilin`,
                    Country: `China`,
                    Region: `Guangxi`,
                    Population: 1572300
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10223,
                    Name: `Damascus`,
                    Country: `Syria`,
                    Region: `Dimashq`,
                    Population: 1569394
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10224,
                    Name: `Philadelphia`,
                    Country: `United States`,
                    Region: `Pennsylvania`,
                    Population: 1567442
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10225,
                    Name: `Phoenix`,
                    Country: `United States`,
                    Region: `Arizona`,
                    Population: 1563025
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10226,
                    Name: `Zhuhai`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 1562530
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10227,
                    Name: `Zhaoqing`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 1553109
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10228,
                    Name: `Isfahan`,
                    Country: `Iran`,
                    Region: `Isfahan`,
                    Population: 1547164
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10229,
                    Name: `Ludhiana`,
                    Country: `India`,
                    Region: `Punjab`,
                    Population: 1545368
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10230,
                    Name: `Harare`,
                    Country: `Zimbabwe`,
                    Region: `Harare`,
                    Population: 1542813
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10231,
                    Name: `Shangqiu`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 1536392
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10232,
                    Name: `Kobe`,
                    Country: `Japan`,
                    Region: `Hyogo`,
                    Population: 1528478
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10233,
                    Name: `Bekasi`,
                    Country: `Indonesia`,
                    Region: `West Java`,
                    Population: 1520119
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10234,
                    Name: `Kaohsiung`,
                    Country: `Taiwan`,
                    Region: `Takao`,
                    Population: 1519711
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10235,
                    Name: `Stockholm`,
                    Country: `Sweden`,
                    Region: `Stockholm`,
                    Population: 1515017
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10236,
                    Name: `Caloocan City`,
                    Country: `Philippines`,
                    Region: `Metro Manila`,
                    Population: 1500000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10237,
                    Name: `Guadalajara`,
                    Country: `Mexico`,
                    Region: `Jalisco`,
                    Population: 1495182
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10238,
                    Name: `Yinchuan`,
                    Country: `China`,
                    Region: `Ningxia Hui Autonomous Region`,
                    Population: 1487579
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10239,
                    Name: `Manhattan`,
                    Country: `United States`,
                    Region: `New York`,
                    Population: 1487536
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10240,
                    Name: `Asuncion`,
                    Country: `Paraguay`,
                    Region: `Asuncion`,
                    Population: 1482200
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10241,
                    Name: `Jiangmen`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 1480023
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10242,
                    Name: `Recife`,
                    Country: `Brazil`,
                    Region: `Pernambuco`,
                    Population: 1478098
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10243,
                    Name: `Daejeon`,
                    Country: `South Korea`,
                    Region: `Daejeon`,
                    Population: 1475221
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10244,
                    Name: `San Antonio`,
                    Country: `United States`,
                    Region: `Texas`,
                    Population: 1469845
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10245,
                    Name: `Kumasi`,
                    Country: `Ghana`,
                    Region: `Ashanti`,
                    Population: 1468609
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10246,
                    Name: `Jinhua`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 1463990
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10247,
                    Name: `Kota Bharu`,
                    Country: `Malaysia`,
                    Region: `Kelantan`,
                    Population: 1459994
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10248,
                    Name: `Kyoto`,
                    Country: `Japan`,
                    Region: `Kyoto`,
                    Population: 1459640
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10249,
                    Name: `Changde`,
                    Country: `China`,
                    Region: `Hunan`,
                    Population: 1457419
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10250,
                    Name: `Kuala Lumpur`,
                    Country: `Malaysia`,
                    Region: `Kuala Lumpur`,
                    Population: 1453975
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10251,
                    Name: `Kaifeng`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 1451741
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10252,
                    Name: `Karaj`,
                    Country: `Iran`,
                    Region: `Alborz Province`,
                    Population: 1448075
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10253,
                    Name: `Kathmandu`,
                    Country: `Nepal`,
                    Region: `Bagmati Province`,
                    Population: 1442271
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10254,
                    Name: `Palembang`,
                    Country: `Indonesia`,
                    Region: `South Sumatra`,
                    Population: 1441500
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10255,
                    Name: `Suqian`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 1437685
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10256,
                    Name: `Multan`,
                    Country: `Pakistan`,
                    Region: `Punjab`,
                    Population: 1437230
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10257,
                    Name: `Liuzhou`,
                    Country: `China`,
                    Region: `Guangxi`,
                    Population: 1436599
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10258,
                    Name: `Tirunelveli`,
                    Country: `India`,
                    Region: `Tamil Nadu`,
                    Population: 1435844
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10259,
                    Name: `Quanzhou`,
                    Country: `China`,
                    Region: `Fujian`,
                    Population: 1435185
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10260,
                    Name: `Puebla`,
                    Country: `Mexico`,
                    Region: `Puebla`,
                    Population: 1434062
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10261,
                    Name: `Hanoi`,
                    Country: `Vietnam`,
                    Region: `Hanoi`,
                    Population: 1431270
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10262,
                    Name: `Kharkiv`,
                    Country: `Ukraine`,
                    Region: `Kharkiv`,
                    Population: 1430885
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10263,
                    Name: `Agra`,
                    Country: `India`,
                    Region: `Uttar Pradesh`,
                    Population: 1430055
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10264,
                    Name: `Cordoba`,
                    Country: `Argentina`,
                    Region: `Cordoba`,
                    Population: 1428214
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10265,
                    Name: `Tabriz`,
                    Country: `Iran`,
                    Region: `East Azerbaijan`,
                    Population: 1424641
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10266,
                    Name: `Novosibirsk`,
                    Country: `Russia`,
                    Region: `Novosibirsk Oblast`,
                    Population: 1419007
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10267,
                    Name: `Gwangju`,
                    Country: `South Korea`,
                    Region: `Gwangju`,
                    Population: 1416938
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10268,
                    Name: `Bursa`,
                    Country: `Turkey`,
                    Region: `Bursa`,
                    Population: 1412701
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10269,
                    Name: `Bozhou`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 1409436
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10270,
                    Name: `Qujing`,
                    Country: `China`,
                    Region: `Yunnan`,
                    Population: 1408500
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10271,
                    Name: `Belem`,
                    Country: `Brazil`,
                    Region: `Para`,
                    Population: 1407737
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10272,
                    Name: `Fushun`,
                    Country: `China`,
                    Region: `Liaoning`,
                    Population: 1400646
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10273,
                    Name: `Quito`,
                    Country: `Ecuador`,
                    Region: `Pichincha`,
                    Population: 1399814
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10274,
                    Name: `San Diego`,
                    Country: `United States`,
                    Region: `California`,
                    Population: 1394928
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10275,
                    Name: `Fukuoka`,
                    Country: `Japan`,
                    Region: `Fukuoka`,
                    Population: 1392289
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10276,
                    Name: `Antananarivo`,
                    Country: `Madagascar`,
                    Region: `Analamanga`,
                    Population: 1391433
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10277,
                    Name: `Rajkot`,
                    Country: `India`,
                    Region: `Gujarat`,
                    Population: 1390640
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10278,
                    Name: `Luoyang`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 1390581
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10279,
                    Name: `Hyderabad`,
                    Country: `Pakistan`,
                    Region: `Sindh`,
                    Population: 1386330
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10280,
                    Name: `The Bronx`,
                    Country: `United States`,
                    Region: `New York`,
                    Population: 1385108
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10281,
                    Name: `Gujranwala`,
                    Country: `Pakistan`,
                    Region: `Punjab`,
                    Population: 1384471
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10282,
                    Name: `Barranquilla`,
                    Country: `Colombia`,
                    Region: `Atlantico`,
                    Population: 1380425
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10283,
                    Name: `Guankou`,
                    Country: `China`,
                    Region: `Hunan`,
                    Population: 1380000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10284,
                    Name: `Lubumbashi`,
                    Country: `Democratic Republic of the Congo`,
                    Region: `Haut-Katanga`,
                    Population: 1373770
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10285,
                    Name: `Porto Alegre`,
                    Country: `Brazil`,
                    Region: `Rio Grande do Sul`,
                    Population: 1372741
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10286,
                    Name: `Tangerang`,
                    Country: `Indonesia`,
                    Region: `Banten`,
                    Population: 1372124
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10287,
                    Name: `Najafgarh`,
                    Country: `India`,
                    Region: `Delhi`,
                    Population: 1365000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10288,
                    Name: `Santa Cruz de la Sierra`,
                    Country: `Bolivia`,
                    Region: `Santa Cruz`,
                    Population: 1364389
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10289,
                    Name: `Handan`,
                    Country: `China`,
                    Region: `Hebei`,
                    Population: 1358318
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10290,
                    Name: `Mianyang`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 1355331
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10291,
                    Name: `Kampala`,
                    Country: `Uganda`,
                    Region: `Central Region`,
                    Population: 1353189
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10292,
                    Name: `Yichang`,
                    Country: `China`,
                    Region: `Hubei`,
                    Population: 1350150
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10293,
                    Name: `Yekaterinburg`,
                    Country: `Russia`,
                    Region: `Sverdlovsk`,
                    Population: 1349772
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10294,
                    Name: `Heze`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 1346717
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10295,
                    Name: `Khulna`,
                    Country: `Bangladesh`,
                    Region: `Khulna`,
                    Population: 1342339
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10296,
                    Name: `Douala`,
                    Country: `Cameroon`,
                    Region: `Littoral`,
                    Population: 1338082
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10297,
                    Name: `Gorakhpur`,
                    Country: `India`,
                    Region: `Haryana`,
                    Population: 1324570
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10298,
                    Name: `Sharjah`,
                    Country: `United Arab Emirates`,
                    Region: `Sharjah`,
                    Population: 1324473
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10299,
                    Name: `Mecca`,
                    Country: `Saudi Arabia`,
                    Region: `Mecca Region`,
                    Population: 1323624
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10300,
                    Name: `Makassar`,
                    Country: `Indonesia`,
                    Region: `South Sulawesi`,
                    Population: 1321717
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10301,
                    Name: `Ciudad Juarez`,
                    Country: `Mexico`,
                    Region: `Chihuahua`,
                    Population: 1321004
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10302,
                    Name: `Liupanshui`,
                    Country: `China`,
                    Region: `Guizhou`,
                    Population: 1320825
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10303,
                    Name: `Kawasaki`,
                    Country: `Japan`,
                    Region: `Kanagawa`,
                    Population: 1306785
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10304,
                    Name: `South Tangerang`,
                    Country: `Indonesia`,
                    Region: `Banten`,
                    Population: 1303569
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10305,
                    Name: `Baotou`,
                    Country: `China`,
                    Region: `Inner Mongolia`,
                    Population: 1301768
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10306,
                    Name: `Tijuana`,
                    Country: `Mexico`,
                    Region: `Baja California`,
                    Population: 1300983
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10307,
                    Name: `Dallas`,
                    Country: `United States`,
                    Region: `Texas`,
                    Population: 1300092
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10308,
                    Name: `Medina`,
                    Country: `Saudi Arabia`,
                    Region: `Medina Region`,
                    Population: 1300000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10309,
                    Name: `Yaounde`,
                    Country: `Cameroon`,
                    Region: `Centre`,
                    Population: 1299369
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10310,
                    Name: `Bamako`,
                    Country: `Mali`,
                    Region: `Bamako`,
                    Population: 1297281
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10311,
                    Name: `Qinzhou`,
                    Country: `China`,
                    Region: `Guangxi`,
                    Population: 1296300
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10312,
                    Name: `Luohe`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 1294974
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10313,
                    Name: `Xiangyang`,
                    Country: `China`,
                    Region: `Hubei`,
                    Population: 1294733
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10314,
                    Name: `Yangjiang`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 1292987
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10315,
                    Name: `Nashik`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 1289497
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10316,
                    Name: `Semarang`,
                    Country: `Indonesia`,
                    Region: `Central Java`,
                    Population: 1288084
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10317,
                    Name: `Brazzaville`,
                    Country: `Republic of the Congo`,
                    Region: `Brazzaville`,
                    Population: 1284609
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10318,
                    Name: `Pimpri`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 1284606
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10319,
                    Name: `Nizhniy Novgorod`,
                    Country: `Russia`,
                    Region: `Nizhny Novgorod Oblast`,
                    Population: 1284164
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10320,
                    Name: `Amman`,
                    Country: `Jordan`,
                    Region: `Amman`,
                    Population: 1275857
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10321,
                    Name: `Budta`,
                    Country: `Philippines`,
                    Region: `Autonomous Region in Muslim Mindanao`,
                    Population: 1273715
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10322,
                    Name: `Belgrade`,
                    Country: `Serbia`,
                    Region: `Central Serbia`,
                    Population: 1273651
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10323,
                    Name: `Montevideo`,
                    Country: `Uruguay`,
                    Region: `Montevideo`,
                    Population: 1270737
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10324,
                    Name: `Lusaka`,
                    Country: `Zambia`,
                    Region: `Lusaka`,
                    Population: 1267440
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10325,
                    Name: `Xuchang`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 1265536
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10326,
                    Name: `Kalyan`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 1262255
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10327,
                    Name: `Zigong`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 1262064
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10328,
                    Name: `Thane`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 1261517
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10329,
                    Name: `Munich`,
                    Country: `Germany`,
                    Region: `Bavaria`,
                    Population: 1260391
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10330,
                    Name: `Xuzhou`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 1253991
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10331,
                    Name: `Ras Bayrut`,
                    Country: `Lebanon`,
                    Region: `Beyrouth`,
                    Population: 1251739
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10332,
                    Name: `Neijiang`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 1251095
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10333,
                    Name: `Shiraz`,
                    Country: `Iran`,
                    Region: `Fars`,
                    Population: 1249942
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10334,
                    Name: `Yiyang`,
                    Country: `China`,
                    Region: `Hunan`,
                    Population: 1249807
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10335,
                    Name: `Adana`,
                    Country: `Turkey`,
                    Region: `Adana`,
                    Population: 1248988
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10336,
                    Name: `Suwon`,
                    Country: `South Korea`,
                    Region: `Gyeonggi-do`,
                    Population: 1242724
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10337,
                    Name: `Jining`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 1241012
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10338,
                    Name: `Leon de los Aldama`,
                    Country: `Mexico`,
                    Region: `Guanajuato`,
                    Population: 1238962
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10339,
                    Name: `Milan`,
                    Country: `Italy`,
                    Region: `Lombardy`,
                    Population: 1236837
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10340,
                    Name: `Port-au-Prince`,
                    Country: `Haiti`,
                    Region: `Ouest`,
                    Population: 1234742
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10341,
                    Name: `Xinyang`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 1230042
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10342,
                    Name: `Liaocheng`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 1229768
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10343,
                    Name: `Jinzhong`,
                    Country: `China`,
                    Region: `Shanxi`,
                    Population: 1226617
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10344,
                    Name: `Adelaide`,
                    Country: `Australia`,
                    Region: `South Australia`,
                    Population: 1225235
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10345,
                    Name: `Meerut`,
                    Country: `India`,
                    Region: `Uttar Pradesh`,
                    Population: 1223184
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10346,
                    Name: `Nowrangapur`,
                    Country: `India`,
                    Region: `Odisha`,
                    Population: 1220946
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10347,
                    Name: `Faridabad`,
                    Country: `India`,
                    Region: `Haryana`,
                    Population: 1220229
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10348,
                    Name: `Peshawar`,
                    Country: `Pakistan`,
                    Region: `Khyber Pakhtunkhwa`,
                    Population: 1218773
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10349,
                    Name: `Changzhi`,
                    Country: `China`,
                    Region: `Shanxi`,
                    Population: 1214940
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10350,
                    Name: `Tianshui`,
                    Country: `China`,
                    Region: `Gansu`,
                    Population: 1212791
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10351,
                    Name: `Davao`,
                    Country: `Philippines`,
                    Region: `Davao`,
                    Population: 1212504
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10352,
                    Name: `Mandalay`,
                    Country: `Myanmar`,
                    Region: `Mandalay`,
                    Population: 1208099
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10354,
                    Name: `Omdurman`,
                    Country: `Sudan`,
                    Region: `Khartoum`,
                    Population: 1200000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10353,
                    Name: `Santiago de los Caballeros`,
                    Country: `Dominican Republic`,
                    Region: `Santiago`,
                    Population: 1200000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10355,
                    Name: `Anshan`,
                    Country: `China`,
                    Region: `Liaoning`,
                    Population: 1199275
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10356,
                    Name: `Ghaziabad`,
                    Country: `India`,
                    Region: `Uttar Pradesh`,
                    Population: 1199191
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10357,
                    Name: `Depok`,
                    Country: `Indonesia`,
                    Region: `West Java`,
                    Population: 1198129
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10358,
                    Name: `Saitama`,
                    Country: `Japan`,
                    Region: `Saitama`,
                    Population: 1193350
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10359,
                    Name: `Dombivli`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 1193000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10360,
                    Name: `Maputo`,
                    Country: `Mozambique`,
                    Region: `Maputo City`,
                    Population: 1191613
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10361,
                    Name: `Taizhou`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 1189276
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10362,
                    Name: `Gustavo Adolfo Madero`,
                    Country: `Mexico`,
                    Region: `Mexico City`,
                    Population: 1185772
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10363,
                    Name: `Rosario`,
                    Country: `Argentina`,
                    Region: `Santa Fe`,
                    Population: 1173533
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10364,
                    Name: `Jinjiang`,
                    Country: `China`,
                    Region: `Fujian`,
                    Population: 1172827
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10365,
                    Name: `Goiania`,
                    Country: `Brazil`,
                    Region: `Goias`,
                    Population: 1171195
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10366,
                    Name: `Guarulhos`,
                    Country: `Brazil`,
                    Region: `Sao Paulo`,
                    Population: 1169577
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10367,
                    Name: `Prague`,
                    Country: `Czechia`,
                    Region: `Hlavni mesto Praha`,
                    Population: 1165581
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10368,
                    Name: `Varanasi`,
                    Country: `India`,
                    Region: `Uttar Pradesh`,
                    Population: 1164404
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10369,
                    Name: `Batam`,
                    Country: `Indonesia`,
                    Region: `Riau`,
                    Population: 1164352
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10370,
                    Name: `Jiujiang`,
                    Country: `China`,
                    Region: `Jiangxi`,
                    Population: 1164268
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10371,
                    Name: `Copenhagen`,
                    Country: `Denmark`,
                    Region: `Capital Region`,
                    Population: 1153615
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10372,
                    Name: `Sofia`,
                    Country: `Bulgaria`,
                    Region: `Sofia-Capital`,
                    Population: 1152556
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10373,
                    Name: `Tripoli`,
                    Country: `Libya`,
                    Region: `Tripoli`,
                    Population: 1150989
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10374,
                    Name: `Port Harcourt`,
                    Country: `Nigeria`,
                    Region: `Rivers`,
                    Population: 1148665
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10375,
                    Name: `Anyang`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 1146839
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10376,
                    Name: `Hiroshima`,
                    Country: `Japan`,
                    Region: `Hiroshima`,
                    Population: 1143841
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10377,
                    Name: `Zapopan`,
                    Country: `Mexico`,
                    Region: `Jalisco`,
                    Population: 1142483
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10378,
                    Name: `Bijie`,
                    Country: `China`,
                    Region: `Guizhou`,
                    Population: 1137383
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10379,
                    Name: `Monterrey`,
                    Country: `Mexico`,
                    Region: `Nuevo Leon`,
                    Population: 1135512
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10380,
                    Name: `Samara`,
                    Country: `Russia`,
                    Region: `Samara Oblast`,
                    Population: 1134730
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10381,
                    Name: `Zhuzhou`,
                    Country: `China`,
                    Region: `Hunan`,
                    Population: 1129687
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10382,
                    Name: `Omsk`,
                    Country: `Russia`,
                    Region: `Omsk`,
                    Population: 1129281
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10383,
                    Name: `Benin City`,
                    Country: `Nigeria`,
                    Region: `Edo`,
                    Population: 1125058
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10384,
                    Name: `Malingao`,
                    Country: `Philippines`,
                    Region: `Soccsksargen`,
                    Population: 1121974
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10385,
                    Name: `Kunshan`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 1118617
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10386,
                    Name: `Baku`,
                    Country: `Azerbaijan`,
                    Region: `Baki`,
                    Population: 1116513
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10387,
                    Name: `Shangrao`,
                    Country: `China`,
                    Region: `Jiangxi`,
                    Population: 1116486
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10388,
                    Name: `Barquisimeto`,
                    Country: `Venezuela`,
                    Region: `Lara`,
                    Population: 1114097
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10389,
                    Name: `Huaibei`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 1113321
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10390,
                    Name: `Maiduguri`,
                    Country: `Nigeria`,
                    Region: `Borno`,
                    Population: 1112449
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10391,
                    Name: `Meishan`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 1107742
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10392,
                    Name: `Putian`,
                    Country: `China`,
                    Region: `Fujian`,
                    Population: 1107199
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10393,
                    Name: `Kazan`,
                    Country: `Russia`,
                    Region: `Tatarstan Republic`,
                    Population: 1104738
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10394,
                    Name: `Ciudad Nezahualcoyotl`,
                    Country: `Mexico`,
                    Region: `Mexico`,
                    Population: 1104585
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10395,
                    Name: `Yerevan`,
                    Country: `Armenia`,
                    Region: `Yerevan`,
                    Population: 1093485
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10396,
                    Name: `Amritsar`,
                    Country: `India`,
                    Region: `Punjab`,
                    Population: 1092450
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10397,
                    Name: `Fuzhou`,
                    Country: `China`,
                    Region: `Jiangxi`,
                    Population: 1089888
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10398,
                    Name: `Ouagadougou`,
                    Country: `Burkina Faso`,
                    Region: `Centre`,
                    Population: 1086505
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10399,
                    Name: `Guigang`,
                    Country: `China`,
                    Region: `Guangxi`,
                    Population: 1086327
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10400,
                    Name: `Hengyang`,
                    Country: `China`,
                    Region: `Hunan`,
                    Population: 1075516
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10401,
                    Name: `Rostov-na-Donu`,
                    Country: `Russia`,
                    Region: `Rostov`,
                    Population: 1074482
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10402,
                    Name: `Allahabad`,
                    Country: `India`,
                    Region: `Uttar Pradesh`,
                    Population: 1073438
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10403,
                    Name: `Goyang-si`,
                    Country: `South Korea`,
                    Region: `Gyeonggi-do`,
                    Population: 1073069
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10404,
                    Name: `Gaziantep`,
                    Country: `Turkey`,
                    Region: `Gaziantep`,
                    Population: 1065975
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10405,
                    Name: `Visakhapatnam`,
                    Country: `India`,
                    Region: `Andhra Pradesh`,
                    Population: 1063178
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10406,
                    Name: `Sendai`,
                    Country: `Japan`,
                    Region: `Miyagi`,
                    Population: 1063103
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10407,
                    Name: `Chelyabinsk`,
                    Country: `Russia`,
                    Region: `Chelyabinsk`,
                    Population: 1062919
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10408,
                    Name: `Cixi`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 1059942
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10409,
                    Name: `Yulin`,
                    Country: `China`,
                    Region: `Guangxi`,
                    Population: 1056743
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10410,
                    Name: `Datong`,
                    Country: `China`,
                    Region: `Shanxi`,
                    Population: 1052678
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10411,
                    Name: `Jingzhou`,
                    Country: `China`,
                    Region: `Hubei`,
                    Population: 1052282
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10412,
                    Name: `Tbilisi`,
                    Country: `Georgia`,
                    Region: `Tbilisi`,
                    Population: 1049498
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10413,
                    Name: `Changshu`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 1047700
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10414,
                    Name: `Xinxiang`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 1047088
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10415,
                    Name: `Yichun`,
                    Country: `China`,
                    Region: `Jiangxi`,
                    Population: 1045952
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10416,
                    Name: `Taichung`,
                    Country: `Taiwan`,
                    Region: `Taiwan`,
                    Population: 1040725
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10417,
                    Name: `Teni`,
                    Country: `India`,
                    Region: `Tamil Nadu`,
                    Population: 1034724
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10418,
                    Name: `Xianyang`,
                    Country: `China`,
                    Region: `Shaanxi`,
                    Population: 1034081
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10419,
                    Name: `Ufa`,
                    Country: `Russia`,
                    Region: `Bashkortostan Republic`,
                    Population: 1033338
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10420,
                    Name: `Seongnam-si`,
                    Country: `South Korea`,
                    Region: `Gyeonggi-do`,
                    Population: 1031935
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10421,
                    Name: `Campinas`,
                    Country: `Brazil`,
                    Region: `Sao Paulo`,
                    Population: 1031554
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10422,
                    Name: `Jabalpur`,
                    Country: `India`,
                    Region: `Madhya Pradesh`,
                    Population: 1030168
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10423,
                    Name: `Shaoguan`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 1028460
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10424,
                    Name: `Haora`,
                    Country: `India`,
                    Region: `West Bengal`,
                    Population: 1027672
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10425,
                    Name: `San Jose`,
                    Country: `United States`,
                    Region: `California`,
                    Population: 1026908
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10426,
                    Name: `Longyan`,
                    Country: `China`,
                    Region: `Fujian`,
                    Population: 1025087
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10427,
                    Name: `Donetsk`,
                    Country: `Ukraine`,
                    Region: `Donetsk Oblast`,
                    Population: 1024700
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10428,
                    Name: `Dublin`,
                    Country: `Ireland`,
                    Region: `Leinster`,
                    Population: 1024027
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10429,
                    Name: `Yongzhou`,
                    Country: `China`,
                    Region: `Hunan`,
                    Population: 1020715
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10430,
                    Name: `Calgary`,
                    Country: `Canada`,
                    Region: `Alberta`,
                    Population: 1019942
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10431,
                    Name: `Brussels`,
                    Country: `Belgium`,
                    Region: `Brussels Capital`,
                    Population: 1019022
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10432,
                    Name: `Aurangabad`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 1016441
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10433,
                    Name: `Huzhou`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 1015937
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10434,
                    Name: `Jiangyin`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 1013670
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10435,
                    Name: `Odessa`,
                    Country: `Ukraine`,
                    Region: `Odessa`,
                    Population: 1013159
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10436,
                    Name: `Volgograd`,
                    Country: `Russia`,
                    Region: `Volgograd Oblast`,
                    Population: 1011417
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10437,
                    Name: `Hanzhong`,
                    Country: `China`,
                    Region: `Shaanxi`,
                    Population: 1006557
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10438,
                    Name: `Hezhou`,
                    Country: `China`,
                    Region: `Guangxi`,
                    Population: 1005490
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10439,
                    Name: `Nova Iguacu`,
                    Country: `Brazil`,
                    Region: `Rio de Janeiro`,
                    Population: 1002118
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10441,
                    Name: `Shivaji Nagar`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 1000000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10440,
                    Name: `Zhu Cheng City`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 1000000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10442,
                    Name: `Dongying`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 998968
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10443,
                    Name: `Luzhou`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 998900
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10444,
                    Name: `Dnipro`,
                    Country: `Ukraine`,
                    Region: `Dnipropetrovsk Oblast`,
                    Population: 998103
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10445,
                    Name: `Kitakyushu`,
                    Country: `Japan`,
                    Region: `Fukuoka`,
                    Population: 997536
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10446,
                    Name: `Solapur`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 997281
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10447,
                    Name: `Guatemala City`,
                    Country: `Guatemala`,
                    Region: `Guatemala`,
                    Population: 994938
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10448,
                    Name: `Meizhou`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 992351
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10449,
                    Name: `Yueyang`,
                    Country: `China`,
                    Region: `Hunan`,
                    Population: 991465
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10450,
                    Name: `Laiwu`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 989535
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10451,
                    Name: `Benxi`,
                    Country: `China`,
                    Region: `Liaoning`,
                    Population: 987717
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10452,
                    Name: `Birmingham`,
                    Country: `United Kingdom`,
                    Region: `England`,
                    Population: 984333
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10453,
                    Name: `Perm`,
                    Country: `Russia`,
                    Region: `Perm`,
                    Population: 982419
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10454,
                    Name: `Pingdingshan`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 979130
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10455,
                    Name: `Srinagar`,
                    Country: `India`,
                    Region: `Jammu and Kashmir`,
                    Population: 975857
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10456,
                    Name: `Zaria`,
                    Country: `Nigeria`,
                    Region: `Kaduna`,
                    Population: 975153
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10457,
                    Name: `Managua`,
                    Country: `Nicaragua`,
                    Region: `Managua`,
                    Population: 973087
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10458,
                    Name: `Bengbu`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 972784
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10459,
                    Name: `Port Elizabeth`,
                    Country: `South Africa`,
                    Region: `Eastern Cape`,
                    Population: 967677
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10460,
                    Name: `Fes`,
                    Country: `Morocco`,
                    Region: `Fes-Meknes`,
                    Population: 964891
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10461,
                    Name: `Koeln`,
                    Country: `Germany`,
                    Region: `North Rhine-Westphalia`,
                    Population: 963395
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10462,
                    Name: `Ulsan`,
                    Country: `South Korea`,
                    Region: `Ulsan`,
                    Population: 962865
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10463,
                    Name: `Chandigarh`,
                    Country: `India`,
                    Region: `Chandigarh`,
                    Population: 960787
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10464,
                    Name: `Coimbatore`,
                    Country: `India`,
                    Region: `Tamil Nadu`,
                    Population: 959823
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10465,
                    Name: `Naples`,
                    Country: `Italy`,
                    Region: `Campania`,
                    Population: 959470
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10466,
                    Name: `Xiangtan`,
                    Country: `China`,
                    Region: `Hunan`,
                    Population: 959303
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10467,
                    Name: `Linfen`,
                    Country: `China`,
                    Region: `Shanxi`,
                    Population: 959198
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10468,
                    Name: `Maceio`,
                    Country: `Brazil`,
                    Region: `Alagoas`,
                    Population: 954991
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10469,
                    Name: `Cartagena`,
                    Country: `Colombia`,
                    Region: `Bolivar`,
                    Population: 952024
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10470,
                    Name: `Zhenjiang`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 950516
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10471,
                    Name: `Sultanah`,
                    Country: `Saudi Arabia`,
                    Region: `Medina Region`,
                    Population: 946697
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10472,
                    Name: `Monrovia`,
                    Country: `Liberia`,
                    Region: `Montserrado`,
                    Population: 939524
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10473,
                    Name: `Kingston`,
                    Country: `Jamaica`,
                    Region: `Kingston`,
                    Population: 937700
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10474,
                    Name: `Baoshan`,
                    Country: `China`,
                    Region: `Yunnan`,
                    Population: 935618
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10475,
                    Name: `Erbil`,
                    Country: `Iraq`,
                    Region: `Arbil`,
                    Population: 932800
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10476,
                    Name: `Austin`,
                    Country: `United States`,
                    Region: `Texas`,
                    Population: 931830
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10477,
                    Name: `Ruian`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 927383
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10478,
                    Name: `Krasnoyarsk`,
                    Country: `Russia`,
                    Region: `Krasnoyarskiy`,
                    Population: 927200
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10479,
                    Name: `Nay Pyi Taw`,
                    Country: `Myanmar`,
                    Region: `Nay Pyi Taw`,
                    Population: 925000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10480,
                    Name: `Jodhpur`,
                    Country: `India`,
                    Region: `Rajasthan`,
                    Population: 921476
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10481,
                    Name: `Chiba`,
                    Country: `Japan`,
                    Region: `Chiba`,
                    Population: 919729
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10482,
                    Name: `Sao Luis`,
                    Country: `Brazil`,
                    Region: `Maranhao`,
                    Population: 917237
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10483,
                    Name: `Laibin`,
                    Country: `China`,
                    Region: `Guangxi`,
                    Population: 910282
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10484,
                    Name: `Madurai`,
                    Country: `India`,
                    Region: `Tamil Nadu`,
                    Population: 909908
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10485,
                    Name: `Xiaogan`,
                    Country: `China`,
                    Region: `Hubei`,
                    Population: 908266
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10486,
                    Name: `Ziyang`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 905729
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10487,
                    Name: `Sale`,
                    Country: `Morocco`,
                    Region: `Rabat-Sale-Kenitra`,
                    Population: 903485
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10488,
                    Name: `Quzhou`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 902767
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10489,
                    Name: `Cochabamba`,
                    Country: `Bolivia`,
                    Region: `Cochabamba`,
                    Population: 900414
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10493,
                    Name: `Bishkek`,
                    Country: `Kyrgyzstan`,
                    Region: `Bishkek`,
                    Population: 900000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10492,
                    Name: `Qom`,
                    Country: `Iran`,
                    Region: `Qom`,
                    Population: 900000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10491,
                    Name: `Abu Ghurayb`,
                    Country: `Iraq`,
                    Region: `Baghdad`,
                    Population: 900000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10490,
                    Name: `Abobo`,
                    Country: `Ivory Coast`,
                    Region: `Abidjan`,
                    Population: 900000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10494,
                    Name: `Zaozhuang`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 899753
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10495,
                    Name: `Guwahati`,
                    Country: `India`,
                    Region: `Assam`,
                    Population: 899094
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10496,
                    Name: `Aba`,
                    Country: `Nigeria`,
                    Region: `Abia`,
                    Population: 897560
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10497,
                    Name: `Pingxiang`,
                    Country: `China`,
                    Region: `Jiangxi`,
                    Population: 893550
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10498,
                    Name: `Zhoushan`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 882932
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10499,
                    Name: `Gwalior`,
                    Country: `India`,
                    Region: `Madhya Pradesh`,
                    Population: 882458
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10500,
                    Name: `Qiqihar`,
                    Country: `China`,
                    Region: `Heilongjiang`,
                    Population: 882364
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10501,
                    Name: `Klang`,
                    Country: `Malaysia`,
                    Region: `Selangor`,
                    Population: 879867
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10502,
                    Name: `Yiwu`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 878903
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10503,
                    Name: `Weinan`,
                    Country: `China`,
                    Region: `Shaanxi`,
                    Population: 877142
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10504,
                    Name: `Mendoza`,
                    Country: `Argentina`,
                    Region: `Mendoza`,
                    Population: 876884
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10505,
                    Name: `Konya`,
                    Country: `Turkey`,
                    Region: `Konya`,
                    Population: 875530
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10506,
                    Name: `Puning`,
                    Country: `China`,
                    Region: `Guangdong`,
                    Population: 874954
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10507,
                    Name: `Mbuji-Mayi`,
                    Country: `Democratic Republic of the Congo`,
                    Region: `Kasai-Oriental`,
                    Population: 874761
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10508,
                    Name: `Vijayawada`,
                    Country: `India`,
                    Region: `Andhra Pradesh`,
                    Population: 874587
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10509,
                    Name: `Pikine`,
                    Country: `Senegal`,
                    Region: `Dakar`,
                    Population: 874062
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10510,
                    Name: `Turin`,
                    Country: `Italy`,
                    Region: `Piedmont`,
                    Population: 870456
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10511,
                    Name: `Ankang`,
                    Country: `China`,
                    Region: `Shaanxi`,
                    Population: 870126
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10512,
                    Name: `Mysore`,
                    Country: `India`,
                    Region: `Karnataka`,
                    Population: 868313
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10513,
                    Name: `Langfang`,
                    Country: `China`,
                    Region: `Hebei`,
                    Population: 868066
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10514,
                    Name: `Jacksonville`,
                    Country: `United States`,
                    Region: `Florida`,
                    Population: 868031
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10515,
                    Name: `Jiaozuo`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 865413
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10516,
                    Name: `San Francisco`,
                    Country: `United States`,
                    Region: `California`,
                    Population: 864816
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10517,
                    Name: `Liverpool`,
                    Country: `United Kingdom`,
                    Region: `England`,
                    Population: 864122
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10518,
                    Name: `Saratov`,
                    Country: `Russia`,
                    Region: `Saratovskaya Oblast`,
                    Population: 863725
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10519,
                    Name: `Rohini`,
                    Country: `India`,
                    Region: `Delhi`,
                    Population: 860000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10520,
                    Name: `Guangan`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 858159
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10521,
                    Name: `Tegucigalpa`,
                    Country: `Honduras`,
                    Region: `Francisco Morazan`,
                    Population: 850848
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10522,
                    Name: `Bucheon-si`,
                    Country: `South Korea`,
                    Region: `Gyeonggi-do`,
                    Population: 850731
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10523,
                    Name: `Columbus`,
                    Country: `United States`,
                    Region: `Ohio`,
                    Population: 850106
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10524,
                    Name: `Voronezh`,
                    Country: `Russia`,
                    Region: `Voronezj`,
                    Population: 848752
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10525,
                    Name: `Ranchi`,
                    Country: `India`,
                    Region: `Jharkhand`,
                    Population: 846454
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10526,
                    Name: `Ulan Bator`,
                    Country: `Mongolia`,
                    Region: `Ulaanbaatar`,
                    Population: 844818
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10527,
                    Name: `Weihai`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 844310
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10528,
                    Name: `Takeo`,
                    Country: `Cambodia`,
                    Region: `Takeo`,
                    Population: 843931
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10529,
                    Name: `Ahvaz`,
                    Country: `Iran`,
                    Region: `Khuzestan`,
                    Population: 841145
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10530,
                    Name: `Arequipa`,
                    Country: `Peru`,
                    Region: `Arequipa`,
                    Population: 841130
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10531,
                    Name: `Padang`,
                    Country: `Indonesia`,
                    Region: `West Sumatra`,
                    Population: 840352
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10532,
                    Name: `Hubli`,
                    Country: `India`,
                    Region: `Karnataka`,
                    Population: 840214
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10533,
                    Name: `Zhabei`,
                    Country: `China`,
                    Region: `Shanghai`,
                    Population: 840000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10534,
                    Name: `Xinyu`,
                    Country: `China`,
                    Region: `Jiangxi`,
                    Population: 839488
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10535,
                    Name: `Marrakesh`,
                    Country: `Morocco`,
                    Region: `Marrakesh-Safi`,
                    Population: 839296
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10536,
                    Name: `Yibin`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 836340
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10537,
                    Name: `Denpasar`,
                    Country: `Indonesia`,
                    Region: `Bali`,
                    Population: 834881
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10538,
                    Name: `Kampung Baru Subang`,
                    Country: `Malaysia`,
                    Region: `Selangor`,
                    Population: 833571
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10539,
                    Name: `Fort Worth`,
                    Country: `United States`,
                    Region: `Texas`,
                    Population: 833319
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10540,
                    Name: `Indianapolis`,
                    Country: `United States`,
                    Region: `Indiana`,
                    Population: 829718
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10541,
                    Name: `Charlotte`,
                    Country: `United States`,
                    Region: `North Carolina`,
                    Population: 827097
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10542,
                    Name: `Chenzhou`,
                    Country: `China`,
                    Region: `Hunan`,
                    Population: 822534
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10543,
                    Name: `Duque de Caxias`,
                    Country: `Brazil`,
                    Region: `Rio de Janeiro`,
                    Population: 818329
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10544,
                    Name: `Jos`,
                    Country: `Nigeria`,
                    Region: `Plateau`,
                    Population: 816824
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10545,
                    Name: `Valencia`,
                    Country: `Spain`,
                    Region: `Valencia`,
                    Population: 814208
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10546,
                    Name: `Ilorin`,
                    Country: `Nigeria`,
                    Region: `Kwara`,
                    Population: 814192
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10547,
                    Name: `Callao`,
                    Country: `Peru`,
                    Region: `Callao`,
                    Population: 813264
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10548,
                    Name: `La Paz`,
                    Country: `Bolivia`,
                    Region: `La Paz`,
                    Population: 812799
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10549,
                    Name: `Ottawa`,
                    Country: `Canada`,
                    Region: `Ontario`,
                    Population: 812129
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10550,
                    Name: `Chihuahua`,
                    Country: `Mexico`,
                    Region: `Chihuahua`,
                    Population: 809232
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10551,
                    Name: `Anqing`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 804493
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10552,
                    Name: `Freetown`,
                    Country: `Sierra Leone`,
                    Region: `Western Area`,
                    Population: 802639
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10553,
                    Name: `Johor Bahru`,
                    Country: `Malaysia`,
                    Region: `Johor`,
                    Population: 802489
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10554,
                    Name: `Jerusalem`,
                    Country: `Israel`,
                    Region: `Jerusalem`,
                    Population: 801000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10555,
                    Name: `Bandar Lampung`,
                    Country: `Indonesia`,
                    Region: `Lampung`,
                    Population: 800348
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10557,
                    Name: `Narela`,
                    Country: `India`,
                    Region: `Delhi`,
                    Population: 800000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10556,
                    Name: `Bogor`,
                    Country: `Indonesia`,
                    Region: `West Java`,
                    Population: 800000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10558,
                    Name: `Mombasa`,
                    Country: `Kenya`,
                    Region: `Mombasa`,
                    Population: 799668
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10559,
                    Name: `Xingtai`,
                    Country: `China`,
                    Region: `Hebei`,
                    Population: 798770
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10560,
                    Name: `Cebu City`,
                    Country: `Philippines`,
                    Region: `Central Visayas`,
                    Population: 798634
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10561,
                    Name: `Niigata`,
                    Country: `Japan`,
                    Region: `Niigata`,
                    Population: 797591
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10562,
                    Name: `Muscat`,
                    Country: `Oman`,
                    Region: `Muscat`,
                    Population: 797000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10563,
                    Name: `Marseille`,
                    Country: `France`,
                    Region: `Provence-Alpes-Cote dAzur`,
                    Population: 794811
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10564,
                    Name: `Zarqa`,
                    Country: `Jordan`,
                    Region: `Zarqa`,
                    Population: 792665
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10565,
                    Name: `Naucalpan de Juarez`,
                    Country: `Mexico`,
                    Region: `Mexico`,
                    Population: 792211
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10566,
                    Name: `Cankaya`,
                    Country: `Turkey`,
                    Region: `Ankara`,
                    Population: 792189
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10567,
                    Name: `Hamamatsu`,
                    Country: `Japan`,
                    Region: `Shizuoka`,
                    Population: 791707
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10568,
                    Name: `Rahim Yar Khan`,
                    Country: `Pakistan`,
                    Region: `Punjab`,
                    Population: 788915
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10569,
                    Name: `Pasragad Branch`,
                    Country: `Iran`,
                    Region: `Hamadan`,
                    Population: 787878
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10570,
                    Name: `Zhaotong`,
                    Country: `China`,
                    Region: `Yunnan`,
                    Population: 787845
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10571,
                    Name: `Panzhihua`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 787177
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10572,
                    Name: `Boumerdas`,
                    Country: `Algeria`,
                    Region: `Boumerdes`,
                    Population: 786499
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10573,
                    Name: `Jalandhar`,
                    Country: `India`,
                    Region: `Punjab`,
                    Population: 785178
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10574,
                    Name: `Thiruvananthapuram`,
                    Country: `India`,
                    Region: `Kerala`,
                    Population: 784153
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10575,
                    Name: `Chuzhou`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 782671
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10576,
                    Name: `Sakai`,
                    Country: `Japan`,
                    Region: `Osaka`,
                    Population: 782339
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10577,
                    Name: `San Miguel de Tucuman`,
                    Country: `Argentina`,
                    Region: `Tucuman`,
                    Population: 781023
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10578,
                    Name: `Cotonou`,
                    Country: `Benin`,
                    Region: `Littoral`,
                    Population: 780000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10579,
                    Name: `Salem`,
                    Country: `India`,
                    Region: `Tamil Nadu`,
                    Population: 778396
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10580,
                    Name: `Merida`,
                    Country: `Mexico`,
                    Region: `Yucatan`,
                    Population: 777615
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10581,
                    Name: `Tiruchirappalli`,
                    Country: `India`,
                    Region: `Tamil Nadu`,
                    Population: 775484
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10582,
                    Name: `Homs`,
                    Country: `Syria`,
                    Region: `Homs`,
                    Population: 775404
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10583,
                    Name: `Hohhot`,
                    Country: `China`,
                    Region: `Inner Mongolia`,
                    Population: 774477
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10584,
                    Name: `Xuanzhou`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 774332
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10585,
                    Name: `Niamey`,
                    Country: `Niger`,
                    Region: `Niamey`,
                    Population: 774235
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10586,
                    Name: `Tainan`,
                    Country: `Taiwan`,
                    Region: `Taiwan`,
                    Population: 771235
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10587,
                    Name: `Shangyu`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 770000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10588,
                    Name: `Lodz`,
                    Country: `Poland`,
                    Region: `Lodz Voivodeship`,
                    Population: 768755
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10589,
                    Name: `Dammam`,
                    Country: `Saudi Arabia`,
                    Region: `Eastern Province`,
                    Population: 768602
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10590,
                    Name: `Xining`,
                    Country: `China`,
                    Region: `Qinghai`,
                    Population: 767531
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10591,
                    Name: `Kahriz`,
                    Country: `Iran`,
                    Region: `Kermanshah`,
                    Population: 766706
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10592,
                    Name: `Anshun`,
                    Country: `China`,
                    Region: `Guizhou`,
                    Population: 765313
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10593,
                    Name: `Kota`,
                    Country: `India`,
                    Region: `Rajasthan`,
                    Population: 763088
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10594,
                    Name: `Natal`,
                    Country: `Brazil`,
                    Region: `Rio Grande do Norte`,
                    Population: 763043
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10595,
                    Name: `Jiaxing`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 762643
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10596,
                    Name: `Zhangjiagang`,
                    Country: `China`,
                    Region: `Jiangsu`,
                    Population: 762625
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10597,
                    Name: `Bhubaneshwar`,
                    Country: `India`,
                    Region: `Odisha`,
                    Population: 762243
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10598,
                    Name: `Wuzhou`,
                    Country: `China`,
                    Region: `Guangxi`,
                    Population: 761948
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10599,
                    Name: `Qinhuangdao`,
                    Country: `China`,
                    Region: `Hebei`,
                    Population: 759718
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10600,
                    Name: `Antalya`,
                    Country: `Turkey`,
                    Region: `Antalya`,
                    Population: 758188
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10601,
                    Name: `Krakow`,
                    Country: `Poland`,
                    Region: `Lesser Poland`,
                    Population: 755050
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10602,
                    Name: `Aligarh`,
                    Country: `India`,
                    Region: `Uttar Pradesh`,
                    Population: 753207
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10603,
                    Name: `Shaoyang`,
                    Country: `China`,
                    Region: `Hunan`,
                    Population: 753194
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10604,
                    Name: `Da Nang`,
                    Country: `Vietnam`,
                    Region: `Da Nang`,
                    Population: 752493
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10605,
                    Name: `Pietermaritzburg`,
                    Country: `South Africa`,
                    Region: `KwaZulu-Natal`,
                    Population: 750845
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10606,
                    Name: `Lome`,
                    Country: `Togo`,
                    Region: `Maritime`,
                    Population: 749700
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10607,
                    Name: `Trujillo`,
                    Country: `Peru`,
                    Region: `La Libertad`,
                    Population: 747450
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10608,
                    Name: `Malang`,
                    Country: `Indonesia`,
                    Region: `East Java`,
                    Population: 746716
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10609,
                    Name: `Ciudad Guayana`,
                    Country: `Venezuela`,
                    Region: `Bolivar`,
                    Population: 746535
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10610,
                    Name: `Bareilly`,
                    Country: `India`,
                    Region: `Uttar Pradesh`,
                    Population: 745435
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10611,
                    Name: `Kigali`,
                    Country: `Rwanda`,
                    Region: `Kigali`,
                    Population: 745261
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10612,
                    Name: `Teresina`,
                    Country: `Brazil`,
                    Region: `Piaui`,
                    Population: 744512
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10613,
                    Name: `Xinxiang`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 743601
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10614,
                    Name: `Sao Bernardo do Campo`,
                    Country: `Brazil`,
                    Region: `Sao Paulo`,
                    Population: 743372
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10615,
                    Name: `Hegang`,
                    Country: `China`,
                    Region: `Heilongjiang`,
                    Population: 743307
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10616,
                    Name: `Riga`,
                    Country: `Latvia`,
                    Region: `Riga`,
                    Population: 742572
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10617,
                    Name: `Amsterdam`,
                    Country: `Netherlands`,
                    Region: `North Holland`,
                    Population: 741636
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10618,
                    Name: `Maanshan`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 741531
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10619,
                    Name: `Zaporizhzhya`,
                    Country: `Ukraine`,
                    Region: `Zaporizhzhya Oblast`,
                    Population: 738728
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10620,
                    Name: `Oyo`,
                    Country: `Nigeria`,
                    Region: `Oyo`,
                    Population: 736072
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10621,
                    Name: `Deyang`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 735070
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10622,
                    Name: `Quetta`,
                    Country: `Pakistan`,
                    Region: `Balochistan`,
                    Population: 733675
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10623,
                    Name: `Yangquan`,
                    Country: `China`,
                    Region: `Shanxi`,
                    Population: 731228
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10624,
                    Name: `Campo Grande`,
                    Country: `Brazil`,
                    Region: `Mato Grosso do Sul`,
                    Population: 729151
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10625,
                    Name: `Ashgabat`,
                    Country: `Turkmenistan`,
                    Region: `Ashgabat`,
                    Population: 727700
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10626,
                    Name: `Alvaro Obregon`,
                    Country: `Mexico`,
                    Region: `Mexico City`,
                    Population: 726664
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10627,
                    Name: `Muzaffarabad`,
                    Country: `Pakistan`,
                    Region: `Azad Kashmir`,
                    Population: 725000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10628,
                    Name: `Bagcilar`,
                    Country: `Turkey`,
                    Region: `Istanbul`,
                    Population: 724270
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10629,
                    Name: `Wanzhou`,
                    Country: `China`,
                    Region: `Chongqing`,
                    Population: 723215
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10630,
                    Name: `As Sulaymaniyah`,
                    Country: `Iraq`,
                    Region: `Sulaymaniyah`,
                    Population: 723170
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10631,
                    Name: `San Luis Potosi`,
                    Country: `Mexico`,
                    Region: `San Luis Potosi`,
                    Population: 722772
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10632,
                    Name: `Aguascalientes`,
                    Country: `Mexico`,
                    Region: `Aguascalientes`,
                    Population: 722250
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10633,
                    Name: `Zhumadian`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 721670
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10634,
                    Name: `Cucuta`,
                    Country: `Colombia`,
                    Region: `Norte de Santander`,
                    Population: 721398
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10635,
                    Name: `Moradabad`,
                    Country: `India`,
                    Region: `Uttar Pradesh`,
                    Population: 721139
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10636,
                    Name: `NDjamena`,
                    Country: `Chad`,
                    Region: `NDjamena`,
                    Population: 721081
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10637,
                    Name: `Lviv`,
                    Country: `Ukraine`,
                    Region: `Lviv Oblast`,
                    Population: 717803
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10638,
                    Name: `Hermosillo`,
                    Country: `Mexico`,
                    Region: `Sonora`,
                    Population: 715061
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10639,
                    Name: `Edmonton`,
                    Country: `Canada`,
                    Region: `Alberta`,
                    Population: 712391
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10640,
                    Name: `Jeonju`,
                    Country: `South Korea`,
                    Region: `Jeollabuk-do`,
                    Population: 711424
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10641,
                    Name: `Saltillo`,
                    Country: `Mexico`,
                    Region: `Coahuila`,
                    Population: 709671
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10642,
                    Name: `Subang Jaya`,
                    Country: `Malaysia`,
                    Region: `Selangor`,
                    Population: 708296
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10643,
                    Name: `Bhiwandi`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 707035
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10644,
                    Name: `Pekanbaru`,
                    Country: `Indonesia`,
                    Region: `Riau`,
                    Population: 703956
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10645,
                    Name: `Sevilla`,
                    Country: `Spain`,
                    Region: `Andalusia`,
                    Population: 703206
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10646,
                    Name: `Tolyatti`,
                    Country: `Russia`,
                    Region: `Samara Oblast`,
                    Population: 702879
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10647,
                    Name: `Jaboatao`,
                    Country: `Brazil`,
                    Region: `Pernambuco`,
                    Population: 702621
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10648,
                    Name: `Shizuoka`,
                    Country: `Japan`,
                    Region: `Shizuoka`,
                    Population: 701561
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10649,
                    Name: `Santo Domingo Oeste`,
                    Country: `Dominican Republic`,
                    Region: `Santo Domingo`,
                    Population: 701269
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10650,
                    Name: `Rajshahi`,
                    Country: `Bangladesh`,
                    Region: `Rajshahi Division`,
                    Population: 700133
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10653,
                    Name: `Battagram`,
                    Country: `Pakistan`,
                    Region: `Khyber Pakhtunkhwa`,
                    Population: 700000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10652,
                    Name: `City of Balikpapan`,
                    Country: `Indonesia`,
                    Region: `East Kalimantan`,
                    Population: 700000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10651,
                    Name: `Santo Domingo Este`,
                    Country: `Dominican Republic`,
                    Region: `Santo Domingo`,
                    Population: 700000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10654,
                    Name: `Changzhi`,
                    Country: `China`,
                    Region: `Shanxi`,
                    Population: 699514
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10655,
                    Name: `Bulawayo`,
                    Country: `Zimbabwe`,
                    Region: `Bulawayo`,
                    Population: 699385
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10656,
                    Name: `Zagreb`,
                    Country: `Croatia`,
                    Region: `City of Zagreb`,
                    Population: 698966
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10657,
                    Name: `Agadir`,
                    Country: `Morocco`,
                    Region: `Souss-Massa`,
                    Population: 698310
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10658,
                    Name: `Sarajevo`,
                    Country: `Bosnia and Herzegovina`,
                    Region: `Bosnia`,
                    Population: 696731
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10659,
                    Name: `La Plata`,
                    Country: `Argentina`,
                    Region: `Buenos Aires`,
                    Population: 694167
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10660,
                    Name: `Tunis`,
                    Country: `Tunisia`,
                    Region: `Tunis`,
                    Population: 693210
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10661,
                    Name: `Zhangjiakou`,
                    Country: `China`,
                    Region: `Hebei`,
                    Population: 692602
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10662,
                    Name: `Mexicali`,
                    Country: `Mexico`,
                    Region: `Baja California`,
                    Population: 689775
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10663,
                    Name: `Fuxin`,
                    Country: `China`,
                    Region: `Liaoning`,
                    Population: 689050
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10664,
                    Name: `Enugu`,
                    Country: `Nigeria`,
                    Region: `Enugu`,
                    Population: 688862
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10665,
                    Name: `Tangier`,
                    Country: `Morocco`,
                    Region: `Tanger-Tetouan-Al Hoceima`,
                    Population: 688356
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10666,
                    Name: `Huangshi`,
                    Country: `China`,
                    Region: `Hubei`,
                    Population: 688090
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10667,
                    Name: `Liaoyang`,
                    Country: `China`,
                    Region: `Liaoning`,
                    Population: 687890
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10668,
                    Name: `Baise`,
                    Country: `China`,
                    Region: `Guangxi`,
                    Population: 686078
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10669,
                    Name: `Sanya`,
                    Country: `China`,
                    Region: `Hainan`,
                    Population: 685408
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10670,
                    Name: `Sheffield`,
                    Country: `United Kingdom`,
                    Region: `England`,
                    Population: 685368
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10671,
                    Name: `Seattle`,
                    Country: `United States`,
                    Region: `Washington`,
                    Population: 684451
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10672,
                    Name: `Binzhou`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 682717
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10673,
                    Name: `Denver`,
                    Country: `United States`,
                    Region: `Colorado`,
                    Population: 682545
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10674,
                    Name: `El Paso`,
                    Country: `United States`,
                    Region: `Texas`,
                    Population: 681124
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10675,
                    Name: `Kumamoto`,
                    Country: `Japan`,
                    Region: `Kumamoto`,
                    Population: 680423
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10676,
                    Name: `Raipur`,
                    Country: `India`,
                    Region: `Chhattisgarh`,
                    Population: 679995
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10677,
                    Name: `General Santos`,
                    Country: `Philippines`,
                    Region: `Soccsksargen`,
                    Population: 679588
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10678,
                    Name: `Dezhou`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 679535
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10679,
                    Name: `Dushanbe`,
                    Country: `Tajikistan`,
                    Region: `Dushanbe`,
                    Population: 679400
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10680,
                    Name: `Osasco`,
                    Country: `Brazil`,
                    Region: `Sao Paulo`,
                    Population: 677856
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10681,
                    Name: `Detroit`,
                    Country: `United States`,
                    Region: `Michigan`,
                    Population: 677116
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10682,
                    Name: `Culiacan`,
                    Country: `Mexico`,
                    Region: `Sinaloa`,
                    Population: 675773
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10683,
                    Name: `Boston`,
                    Country: `United States`,
                    Region: `Massachusetts`,
                    Population: 675647
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10684,
                    Name: `Matola`,
                    Country: `Mozambique`,
                    Region: `Maputo Province`,
                    Population: 675422
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10685,
                    Name: `Zaragoza`,
                    Country: `Spain`,
                    Region: `Aragon`,
                    Population: 674317
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10686,
                    Name: `Gorakhpur`,
                    Country: `India`,
                    Region: `Uttar Pradesh`,
                    Population: 674246
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10687,
                    Name: `Guadalupe`,
                    Country: `Mexico`,
                    Region: `Nuevo Leon`,
                    Population: 673616
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10688,
                    Name: `Acapulco de Juarez`,
                    Country: `Mexico`,
                    Region: `Guerrero`,
                    Population: 673479
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10689,
                    Name: `Ipoh`,
                    Country: `Malaysia`,
                    Region: `Perak`,
                    Population: 673318
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10690,
                    Name: `Sanmenxia`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 669307
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10691,
                    Name: `Ezhou`,
                    Country: `China`,
                    Region: `Hubei`,
                    Population: 668727
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10692,
                    Name: `Mississauga`,
                    Country: `Canada`,
                    Region: `Ontario`,
                    Population: 668549
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10693,
                    Name: `Mudanjiang`,
                    Country: `China`,
                    Region: `Heilongjiang`,
                    Population: 665915
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10694,
                    Name: `Athens`,
                    Country: `Greece`,
                    Region: `Attica`,
                    Population: 664046
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10695,
                    Name: `Leshan`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 662814
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10696,
                    Name: `Santo Andre`,
                    Country: `Brazil`,
                    Region: `Sao Paulo`,
                    Population: 662373
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10697,
                    Name: `Rizhao`,
                    Country: `China`,
                    Region: `Shandong`,
                    Population: 661943
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10698,
                    Name: `Nouakchott`,
                    Country: `Mauritania`,
                    Region: ``,
                    Population: 661400
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10699,
                    Name: `Pointe-Noire`,
                    Country: `Republic of the Congo`,
                    Region: `Pointe-Noire`,
                    Population: 659084
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10700,
                    Name: `Suining`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 656760
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10701,
                    Name: `Memphis`,
                    Country: `United States`,
                    Region: `Tennessee`,
                    Population: 655770
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10702,
                    Name: `Puyang`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 655674
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10703,
                    Name: `Tlalnepantla`,
                    Country: `Mexico`,
                    Region: `Mexico`,
                    Population: 653410
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10704,
                    Name: `Joao Pessoa`,
                    Country: `Brazil`,
                    Region: `Paraiba`,
                    Population: 650883
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10705,
                    Name: `Ansan-si`,
                    Country: `South Korea`,
                    Region: `Gyeonggi-do`,
                    Population: 650728
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10706,
                    Name: `Benghazi`,
                    Country: `Libya`,
                    Region: `Banghazi`,
                    Population: 650629
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10707,
                    Name: `Frankfurt am Main`,
                    Country: `Germany`,
                    Region: `Hesse`,
                    Population: 650000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10708,
                    Name: `Krasnodar`,
                    Country: `Russia`,
                    Region: `Krasnodarskiy`,
                    Population: 649851
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10709,
                    Name: `Palermo`,
                    Country: `Italy`,
                    Region: `Sicily`,
                    Population: 648260
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10710,
                    Name: `Colombo`,
                    Country: `Sri Lanka`,
                    Region: `Western`,
                    Population: 648034
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10711,
                    Name: `Lilongwe`,
                    Country: `Malawi`,
                    Region: `Central Region`,
                    Population: 646750
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10712,
                    Name: `Oran`,
                    Country: `Algeria`,
                    Region: `Oran`,
                    Population: 645984
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10713,
                    Name: `Diyarbakir`,
                    Country: `Turkey`,
                    Region: `Diyarbakir`,
                    Population: 644763
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10714,
                    Name: `Taguig`,
                    Country: `Philippines`,
                    Region: `Metro Manila`,
                    Population: 644473
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10715,
                    Name: `New South Memphis`,
                    Country: `United States`,
                    Region: `Tennessee`,
                    Population: 641608
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10716,
                    Name: `Ulyanovsk`,
                    Country: `Russia`,
                    Region: `Ulyanovsk`,
                    Population: 640680
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10717,
                    Name: `Kotli`,
                    Country: `Pakistan`,
                    Region: `Azad Kashmir`,
                    Population: 640000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10718,
                    Name: `Okayama`,
                    Country: `Japan`,
                    Region: `Okayama`,
                    Population: 639652
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10719,
                    Name: `Al Ahmadi`,
                    Country: `Kuwait`,
                    Region: `Al Ahmadi`,
                    Population: 637411
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10720,
                    Name: `Yogyakarta`,
                    Country: `Indonesia`,
                    Region: `Yogyakarta`,
                    Population: 636660
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10721,
                    Name: `Chisinau`,
                    Country: `Moldova`,
                    Region: `Chisinau Municipality`,
                    Population: 635994
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10722,
                    Name: `Wroclaw`,
                    Country: `Poland`,
                    Region: `Lower Silesia`,
                    Population: 634893
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10723,
                    Name: `Hebi`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 634721
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10724,
                    Name: `Cheongju-si`,
                    Country: `South Korea`,
                    Region: `North Chungcheong`,
                    Population: 634596
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10725,
                    Name: `Anyang-si`,
                    Country: `South Korea`,
                    Region: `Gyeonggi-do`,
                    Population: 634367
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10726,
                    Name: `Tebessa`,
                    Country: `Algeria`,
                    Region: `Tebessa`,
                    Population: 634332
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10727,
                    Name: `Jingmen`,
                    Country: `China`,
                    Region: `Hubei`,
                    Population: 632954
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10728,
                    Name: `Portland`,
                    Country: `United States`,
                    Region: `Oregon`,
                    Population: 632309
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10729,
                    Name: `Winnipeg`,
                    Country: `Canada`,
                    Region: `Manitoba`,
                    Population: 632063
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10730,
                    Name: `Dandong`,
                    Country: `China`,
                    Region: `Liaoning`,
                    Population: 631973
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10731,
                    Name: `Oklahoma City`,
                    Country: `United States`,
                    Region: `Oklahoma`,
                    Population: 631346
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10732,
                    Name: `Izhevsk`,
                    Country: `Russia`,
                    Region: `Udmurtiya Republic`,
                    Population: 631038
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10733,
                    Name: `Jaboatao dos Guararapes`,
                    Country: `Brazil`,
                    Region: `Pernambuco`,
                    Population: 630008
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10734,
                    Name: `Cancun`,
                    Country: `Mexico`,
                    Region: `Quintana Roo`,
                    Population: 628306
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10735,
                    Name: `Contagem`,
                    Country: `Brazil`,
                    Region: `Minas Gerais`,
                    Population: 627123
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10736,
                    Name: `Santiago de Queretaro`,
                    Country: `Mexico`,
                    Region: `Queretaro`,
                    Population: 626495
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10737,
                    Name: `Bhilai`,
                    Country: `India`,
                    Region: `Chhattisgarh`,
                    Population: 625138
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10738,
                    Name: `Panshan`,
                    Country: `China`,
                    Region: `Liaoning`,
                    Population: 625040
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10739,
                    Name: `Kryvyy Rih`,
                    Country: `Ukraine`,
                    Region: `Dnipropetrovsk Oblast`,
                    Population: 624579
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10740,
                    Name: `Djibouti`,
                    Country: `Djibouti`,
                    Region: `Djibouti`,
                    Population: 623891
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10741,
                    Name: `Las Vegas`,
                    Country: `United States`,
                    Region: `Nevada`,
                    Population: 623747
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10742,
                    Name: `Baltimore`,
                    Country: `United States`,
                    Region: `Maryland`,
                    Population: 621849
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10743,
                    Name: `Kermanshah`,
                    Country: `Iran`,
                    Region: `Kermanshah`,
                    Population: 621100
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10744,
                    Name: `Coyoacan`,
                    Country: `Mexico`,
                    Region: `Mexico City`,
                    Population: 620416
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10745,
                    Name: `Ribeirao Preto`,
                    Country: `Brazil`,
                    Region: `Sao Paulo`,
                    Population: 619746
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10746,
                    Name: `Suizhou`,
                    Country: `China`,
                    Region: `Hubei`,
                    Population: 618582
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10747,
                    Name: `Al Hudaydah`,
                    Country: `Yemen`,
                    Region: `Al Hudaydah`,
                    Population: 617871
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10748,
                    Name: `Pasig City`,
                    Country: `Philippines`,
                    Region: `Metro Manila`,
                    Population: 617301
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10749,
                    Name: `Bristol`,
                    Country: `United Kingdom`,
                    Region: `England`,
                    Population: 617280
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10750,
                    Name: `Jamshedpur`,
                    Country: `India`,
                    Region: `Jharkhand`,
                    Population: 616338
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10751,
                    Name: `Chizhou`,
                    Country: `China`,
                    Region: `Anhui`,
                    Population: 615274
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10752,
                    Name: `Taiz`,
                    Country: `Yemen`,
                    Region: `Taizz`,
                    Population: 615222
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10753,
                    Name: `Sao Jose dos Campos`,
                    Country: `Brazil`,
                    Region: `Sao Paulo`,
                    Population: 613764
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10754,
                    Name: `Santa Maria Chimalhuacan`,
                    Country: `Mexico`,
                    Region: `Mexico`,
                    Population: 612383
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10755,
                    Name: `Yaan`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 612056
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10756,
                    Name: `Borivli`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 609617
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10757,
                    Name: `Torreon`,
                    Country: `Mexico`,
                    Region: `Coahuila`,
                    Population: 608836
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10758,
                    Name: `Yaroslavl`,
                    Country: `Russia`,
                    Region: `Yaroslavl Oblast`,
                    Population: 606730
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10759,
                    Name: `Bhavnagar`,
                    Country: `India`,
                    Region: `Gujarat`,
                    Population: 605882
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10760,
                    Name: `Benoni`,
                    Country: `South Africa`,
                    Region: `Gauteng`,
                    Population: 605344
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10761,
                    Name: `Cochin`,
                    Country: `India`,
                    Region: `Kerala`,
                    Population: 604696
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10762,
                    Name: `Jinzhou`,
                    Country: `China`,
                    Region: `Liaoning`,
                    Population: 604269
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10763,
                    Name: `Amravati`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 603837
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10764,
                    Name: `Abu Dhabi`,
                    Country: `United Arab Emirates`,
                    Region: `Abu Dhabi`,
                    Population: 603492
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10765,
                    Name: `Haiphong`,
                    Country: `Vietnam`,
                    Region: `Haiphong`,
                    Population: 602695
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10766,
                    Name: `Sanming`,
                    Country: `China`,
                    Region: `Fujian`,
                    Population: 602166
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10767,
                    Name: `Washington`,
                    Country: `United States`,
                    Region: `Washington, D.C.`,
                    Population: 601723
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10768,
                    Name: `Islamabad`,
                    Country: `Pakistan`,
                    Region: `Islamabad`,
                    Population: 601600
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10769,
                    Name: `Kirkuk`,
                    Country: `Iraq`,
                    Region: `Kirkuk`,
                    Population: 601433
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10770,
                    Name: `Sangli`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 601214
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10771,
                    Name: `Milwaukee`,
                    Country: `United States`,
                    Region: `Wisconsin`,
                    Population: 600155
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10774,
                    Name: `Situbondo`,
                    Country: `Indonesia`,
                    Region: `East Java`,
                    Population: 600000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10773,
                    Name: `Shuangyashan`,
                    Country: `China`,
                    Region: `Heilongjiang`,
                    Population: 600000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10772,
                    Name: `Vancouver`,
                    Country: `Canada`,
                    Region: `British Columbia`,
                    Population: 600000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10775,
                    Name: `Barnaul`,
                    Country: `Russia`,
                    Region: `Altai Krai`,
                    Population: 599579
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10776,
                    Name: `Rotterdam`,
                    Country: `Netherlands`,
                    Region: `South Holland`,
                    Population: 598199
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10777,
                    Name: `Morelia`,
                    Country: `Mexico`,
                    Region: `Michoacan`,
                    Population: 597511
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10778,
                    Name: `Luancheng`,
                    Country: `China`,
                    Region: `Hebei`,
                    Population: 597130
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10779,
                    Name: `Rasht`,
                    Country: `Iran`,
                    Region: `Gilan`,
                    Population: 594590
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10780,
                    Name: `Abeokuta`,
                    Country: `Nigeria`,
                    Region: `Ogun`,
                    Population: 593100
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10781,
                    Name: `Essen`,
                    Country: `Germany`,
                    Region: `North Rhine-Westphalia`,
                    Population: 593085
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10782,
                    Name: `Kayseri`,
                    Country: `Turkey`,
                    Region: `Kayseri`,
                    Population: 592840
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10783,
                    Name: `Glasgow`,
                    Country: `United Kingdom`,
                    Region: `Scotland`,
                    Population: 591620
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10784,
                    Name: `Gold Coast`,
                    Country: `Australia`,
                    Region: `Queensland`,
                    Population: 591473
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10785,
                    Name: `Yingkou`,
                    Country: `China`,
                    Region: `Liaoning`,
                    Population: 591159
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10786,
                    Name: `Abuja`,
                    Country: `Nigeria`,
                    Region: `FCT`,
                    Population: 590400
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10787,
                    Name: `Las Pinas`,
                    Country: `Philippines`,
                    Region: `Metro Manila`,
                    Population: 590000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10788,
                    Name: `Zhangzhou`,
                    Country: `China`,
                    Region: `Fujian`,
                    Population: 589831
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10789,
                    Name: `Stuttgart`,
                    Country: `Germany`,
                    Region: `Baden-Wuerttemberg`,
                    Population: 589793
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10790,
                    Name: `Reynosa`,
                    Country: `Mexico`,
                    Region: `Tamaulipas`,
                    Population: 589466
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10791,
                    Name: `Dortmund`,
                    Country: `Germany`,
                    Region: `North Rhine-Westphalia`,
                    Population: 588462
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10792,
                    Name: `Vladivostok`,
                    Country: `Russia`,
                    Region: `Primorskiy (Maritime) Kray`,
                    Population: 587022
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10793,
                    Name: `Irkutsk`,
                    Country: `Russia`,
                    Region: `Irkutsk Oblast`,
                    Population: 586695
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10794,
                    Name: `Blantyre`,
                    Country: `Malawi`,
                    Region: `Southern Region`,
                    Population: 584877
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10795,
                    Name: `New Kingston`,
                    Country: `Jamaica`,
                    Region: `St. Andrew`,
                    Population: 583958
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10796,
                    Name: `UEskuedar`,
                    Country: `Turkey`,
                    Region: `Istanbul`,
                    Population: 582666
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10797,
                    Name: `Genoa`,
                    Country: `Italy`,
                    Region: `Liguria`,
                    Population: 580223
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10799,
                    Name: `Oslo`,
                    Country: `Norway`,
                    Region: `Oslo`,
                    Population: 580000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10798,
                    Name: `Cuttack`,
                    Country: `India`,
                    Region: `Odisha`,
                    Population: 580000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10800,
                    Name: `Khabarovsk`,
                    Country: `Russia`,
                    Region: `Khabarovsk`,
                    Population: 579000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10801,
                    Name: `Khabarovsk Vtoroy`,
                    Country: `Russia`,
                    Region: `Khabarovsk`,
                    Population: 578303
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10802,
                    Name: `Libreville`,
                    Country: `Gabon`,
                    Region: `Estuaire`,
                    Population: 578156
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10803,
                    Name: `Kerman`,
                    Country: `Iran`,
                    Region: `Kerman`,
                    Population: 577514
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10804,
                    Name: `Chiclayo`,
                    Country: `Peru`,
                    Region: `Lambayeque`,
                    Population: 577375
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10805,
                    Name: `Orumiyeh`,
                    Country: `Iran`,
                    Region: `West Azerbaijan`,
                    Population: 577307
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10806,
                    Name: `Bahcelievler`,
                    Country: `Turkey`,
                    Region: `Istanbul`,
                    Population: 576799
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10807,
                    Name: `Bikaner`,
                    Country: `India`,
                    Region: `Rajasthan`,
                    Population: 576015
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10808,
                    Name: `Tlaquepaque`,
                    Country: `Mexico`,
                    Region: `Jalisco`,
                    Population: 575942
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10809,
                    Name: `Tlalpan`,
                    Country: `Mexico`,
                    Region: `Mexico City`,
                    Population: 574577
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10810,
                    Name: `Umraniye`,
                    Country: `Turkey`,
                    Region: `Istanbul`,
                    Population: 573265
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10811,
                    Name: `Duesseldorf`,
                    Country: `Germany`,
                    Region: `North Rhine-Westphalia`,
                    Population: 573057
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10812,
                    Name: `Banjarmasin`,
                    Country: `Indonesia`,
                    Region: `South Kalimantan`,
                    Population: 572837
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10813,
                    Name: `Goeteborg`,
                    Country: `Sweden`,
                    Region: `Vaestra Goetaland`,
                    Population: 572799
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10814,
                    Name: `Shihezi`,
                    Country: `China`,
                    Region: `Xinjiang`,
                    Population: 572772
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10815,
                    Name: `Bucaramanga`,
                    Country: `Colombia`,
                    Region: `Santander`,
                    Population: 571820
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10816,
                    Name: `South Boston`,
                    Country: `United States`,
                    Region: `Massachusetts`,
                    Population: 571281
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10817,
                    Name: `Kuching`,
                    Country: `Malaysia`,
                    Region: `Sarawak`,
                    Population: 570407
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10818,
                    Name: `Poznan`,
                    Country: `Poland`,
                    Region: `Greater Poland`,
                    Population: 570352
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10819,
                    Name: `Malaga`,
                    Country: `Spain`,
                    Region: `Andalusia`,
                    Population: 568305
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10820,
                    Name: `Bouake`,
                    Country: `Ivory Coast`,
                    Region: `Vallee du Bandama`,
                    Population: 567481
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10821,
                    Name: `Nyala`,
                    Country: `Sudan`,
                    Region: `Southern Darfur`,
                    Population: 565734
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10822,
                    Name: `Asmara`,
                    Country: `Eritrea`,
                    Region: `Maekel`,
                    Population: 563930
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10823,
                    Name: `Sokoto`,
                    Country: `Nigeria`,
                    Region: `Sokoto`,
                    Population: 563861
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10824,
                    Name: `Uberlandia`,
                    Country: `Brazil`,
                    Region: `Minas Gerais`,
                    Population: 563536
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10825,
                    Name: `Hachioji`,
                    Country: `Japan`,
                    Region: `Tokyo`,
                    Population: 561344
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10826,
                    Name: `Onitsha`,
                    Country: `Nigeria`,
                    Region: `Anambra`,
                    Population: 561066
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10827,
                    Name: `Wenchang`,
                    Country: `China`,
                    Region: `Hainan`,
                    Population: 560894
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10828,
                    Name: `Honcho`,
                    Country: `Japan`,
                    Region: `Chiba`,
                    Population: 560743
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10829,
                    Name: `Albuquerque`,
                    Country: `United States`,
                    Region: `New Mexico`,
                    Population: 559121
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10830,
                    Name: `Hamhung`,
                    Country: `North Korea`,
                    Region: `Hamgyong-namdo`,
                    Population: 559056
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10831,
                    Name: `Sorocaba`,
                    Country: `Brazil`,
                    Region: `Sao Paulo`,
                    Population: 558862
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10832,
                    Name: `Helsinki`,
                    Country: `Finland`,
                    Region: `Uusimaa`,
                    Population: 558457
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10833,
                    Name: `Warangal`,
                    Country: `India`,
                    Region: `Telangana`,
                    Population: 557802
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10834,
                    Name: `Santiago de Cuba`,
                    Country: `Cuba`,
                    Region: `Santiago de Cuba`,
                    Population: 555865
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10835,
                    Name: `Siping`,
                    Country: `China`,
                    Region: `Jilin`,
                    Population: 555609
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10836,
                    Name: `Kagoshima`,
                    Country: `Japan`,
                    Region: `Kagoshima`,
                    Population: 555352
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10837,
                    Name: `Surakarta`,
                    Country: `Indonesia`,
                    Region: `Central Java`,
                    Population: 555308
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10838,
                    Name: `Longnan`,
                    Country: `China`,
                    Region: `Gansu`,
                    Population: 555004
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10839,
                    Name: `Mar del Plata`,
                    Country: `Argentina`,
                    Region: `Buenos Aires`,
                    Population: 553935
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10840,
                    Name: `Huaihua`,
                    Country: `China`,
                    Region: `Hunan`,
                    Population: 552622
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10841,
                    Name: `Bahawalpur`,
                    Country: `Pakistan`,
                    Region: `Punjab`,
                    Population: 552607
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10842,
                    Name: `Zahedan`,
                    Country: `Iran`,
                    Region: `Sistan and Baluchestan`,
                    Population: 551980
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10843,
                    Name: `Aden`,
                    Country: `Yemen`,
                    Region: `Aden`,
                    Population: 550602
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10844,
                    Name: `Nanded`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 550564
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10845,
                    Name: `Orenburg`,
                    Country: `Russia`,
                    Region: `Orenburg Oblast`,
                    Population: 550204
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10847,
                    Name: `Pristina`,
                    Country: `Kosovo`,
                    Region: `Pristina`,
                    Population: 550000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10846,
                    Name: `Changwon`,
                    Country: `South Korea`,
                    Region: `Gyeongsangnam-do`,
                    Population: 550000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10848,
                    Name: `Jiamusi`,
                    Country: `China`,
                    Region: `Heilongjiang`,
                    Population: 549549
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10849,
                    Name: `Antipolo`,
                    Country: `Philippines`,
                    Region: `Calabarzon`,
                    Population: 549543
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10850,
                    Name: `Bremen`,
                    Country: `Germany`,
                    Region: `Bremen`,
                    Population: 546501
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10851,
                    Name: `Meknes`,
                    Country: `Morocco`,
                    Region: `Fes-Meknes`,
                    Population: 545705
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10852,
                    Name: `Wanning`,
                    Country: `China`,
                    Region: `Hainan`,
                    Population: 545597
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10853,
                    Name: `Xinzhou`,
                    Country: `China`,
                    Region: `Shanxi`,
                    Population: 544683
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10854,
                    Name: `Banqiao`,
                    Country: `Taiwan`,
                    Region: `Taipei`,
                    Population: 543342
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10855,
                    Name: `Sargodha`,
                    Country: `Pakistan`,
                    Region: `Punjab`,
                    Population: 542603
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10856,
                    Name: `Bangui`,
                    Country: `Central African Republic`,
                    Region: `Bangui`,
                    Population: 542393
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10857,
                    Name: `Vilnius`,
                    Country: `Lithuania`,
                    Region: `Vilnius`,
                    Population: 542366
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10858,
                    Name: `Novokuznetsk`,
                    Country: `Russia`,
                    Region: `Kemerovo Oblast`,
                    Population: 539616
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10859,
                    Name: `Kisangani`,
                    Country: `Democratic Republic of the Congo`,
                    Region: `Tshopo`,
                    Population: 539158
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10860,
                    Name: `Jian`,
                    Country: `China`,
                    Region: `Jiangxi`,
                    Population: 538699
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10861,
                    Name: `Port Said`,
                    Country: `Egypt`,
                    Region: `Port Said`,
                    Population: 538378
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10862,
                    Name: `Mersin`,
                    Country: `Turkey`,
                    Region: `Mersin`,
                    Population: 537842
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10863,
                    Name: `Tuxtla`,
                    Country: `Mexico`,
                    Region: `Chiapas`,
                    Population: 537102
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10864,
                    Name: `Raurkela`,
                    Country: `India`,
                    Region: `Odisha`,
                    Population: 536450
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10865,
                    Name: `Warri`,
                    Country: `Nigeria`,
                    Region: `Delta`,
                    Population: 536023
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10866,
                    Name: `Guli`,
                    Country: `China`,
                    Region: `Zhejiang`,
                    Population: 536000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10867,
                    Name: `Ebute Ikorodu`,
                    Country: `Nigeria`,
                    Region: `Lagos`,
                    Population: 535619
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10868,
                    Name: `Tanggu`,
                    Country: `China`,
                    Region: `Tianjin`,
                    Population: 535298
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10869,
                    Name: `Cuauhtemoc`,
                    Country: `Mexico`,
                    Region: `Mexico City`,
                    Population: 531831
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10870,
                    Name: `Shangluo`,
                    Country: `China`,
                    Region: `Shaanxi`,
                    Population: 531696
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10871,
                    Name: `Tucson`,
                    Country: `United States`,
                    Region: `Arizona`,
                    Population: 531641
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10872,
                    Name: `Nashville`,
                    Country: `United States`,
                    Region: `Tennessee`,
                    Population: 530852
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10873,
                    Name: `Taif`,
                    Country: `Saudi Arabia`,
                    Region: `Mecca Region`,
                    Population: 530848
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10874,
                    Name: `Beira`,
                    Country: `Mozambique`,
                    Region: `Sofala`,
                    Population: 530604
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10875,
                    Name: `Guntur`,
                    Country: `India`,
                    Region: `Andhra Pradesh`,
                    Population: 530577
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10876,
                    Name: `Touba`,
                    Country: `Senegal`,
                    Region: `Diourbel`,
                    Population: 529176
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10877,
                    Name: `Quebec`,
                    Country: `Canada`,
                    Region: `Quebec`,
                    Population: 528595
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10878,
                    Name: `Hamadan`,
                    Country: `Iran`,
                    Region: `Hamadan`,
                    Population: 528256
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10879,
                    Name: `Cangzhou`,
                    Country: `China`,
                    Region: `Hebei`,
                    Population: 527681
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10880,
                    Name: `San Salvador`,
                    Country: `El Salvador`,
                    Region: `San Salvador`,
                    Population: 525990
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10881,
                    Name: `Beihai`,
                    Country: `China`,
                    Region: `Guangxi`,
                    Population: 525329
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10882,
                    Name: `Hengshui`,
                    Country: `China`,
                    Region: `Hebei`,
                    Population: 522147
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10883,
                    Name: `Dehra Dun`,
                    Country: `India`,
                    Region: `Uttarakhand`,
                    Population: 522081
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10884,
                    Name: `Cuiaba`,
                    Country: `Brazil`,
                    Region: `Mato Grosso`,
                    Population: 521934
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10885,
                    Name: `Petaling Jaya`,
                    Country: `Malaysia`,
                    Region: `Selangor`,
                    Population: 520698
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10886,
                    Name: `Macau`,
                    Country: `Macao`,
                    Region: ``,
                    Population: 520400
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10887,
                    Name: `Bhayandar`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 520301
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10888,
                    Name: `Esenler`,
                    Country: `Turkey`,
                    Region: `Istanbul`,
                    Population: 520235
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10889,
                    Name: `Ryazan`,
                    Country: `Russia`,
                    Region: `Ryazan Oblast`,
                    Population: 520173
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10890,
                    Name: `Fresno`,
                    Country: `United States`,
                    Region: `California`,
                    Population: 520052
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10891,
                    Name: `Hamilton`,
                    Country: `Canada`,
                    Region: `Ontario`,
                    Population: 519949
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10892,
                    Name: `Tyumen`,
                    Country: `Russia`,
                    Region: `Tyumen Oblast`,
                    Population: 519119
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10893,
                    Name: `Durgapur`,
                    Country: `India`,
                    Region: `West Bengal`,
                    Population: 518872
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10894,
                    Name: `Victoria de Durango`,
                    Country: `Mexico`,
                    Region: `Durango`,
                    Population: 518709
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10895,
                    Name: `Ajmer`,
                    Country: `India`,
                    Region: `Rajasthan`,
                    Population: 517911
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10896,
                    Name: `Lisbon`,
                    Country: `Portugal`,
                    Region: `Lisbon`,
                    Population: 517802
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10897,
                    Name: `Ulhasnagar`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 516584
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10898,
                    Name: `Guangyuan`,
                    Country: `China`,
                    Region: `Sichuan`,
                    Population: 516424
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10899,
                    Name: `Kolhapur`,
                    Country: `India`,
                    Region: `Maharashtra`,
                    Population: 516142
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10900,
                    Name: `Lipetsk`,
                    Country: `Russia`,
                    Region: `Lipetsk Oblast`,
                    Population: 515655
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10901,
                    Name: `Siliguri`,
                    Country: `India`,
                    Region: `West Bengal`,
                    Population: 515574
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10902,
                    Name: `Hannover`,
                    Country: `Germany`,
                    Region: `Lower Saxony`,
                    Population: 515140
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10903,
                    Name: `Eskisehir`,
                    Country: `Turkey`,
                    Region: `Eskisehir`,
                    Population: 514869
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10904,
                    Name: `Azadshahr`,
                    Country: `Iran`,
                    Region: `Hamadan`,
                    Population: 514102
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10905,
                    Name: `Salta`,
                    Country: `Argentina`,
                    Region: `Salta`,
                    Population: 512686
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10906,
                    Name: `Penza`,
                    Country: `Russia`,
                    Region: `Penza`,
                    Population: 512602
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10907,
                    Name: `Xianning`,
                    Country: `China`,
                    Region: `Hubei`,
                    Population: 512517
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10908,
                    Name: `Tembisa`,
                    Country: `South Africa`,
                    Region: `Gauteng`,
                    Population: 511655
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10909,
                    Name: `Bilimora`,
                    Country: `India`,
                    Region: `Gujarat`,
                    Population: 510879
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10910,
                    Name: `Aparecida de Goiania`,
                    Country: `Brazil`,
                    Region: `Goias`,
                    Population: 510770
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10911,
                    Name: `Puente Alto`,
                    Country: `Chile`,
                    Region: `Santiago Metropolitan`,
                    Population: 510417
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10912,
                    Name: `Makati City`,
                    Country: `Philippines`,
                    Region: `Metro Manila`,
                    Population: 510383
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10913,
                    Name: `Tonghua`,
                    Country: `China`,
                    Region: `Jilin`,
                    Population: 510000
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10914,
                    Name: `Naberezhnyye Chelny`,
                    Country: `Russia`,
                    Region: `Tatarstan Republic`,
                    Population: 509870
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10915,
                    Name: `Leicester`,
                    Country: `United Kingdom`,
                    Region: `England`,
                    Population: 508916
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10916,
                    Name: `Karol Bagh`,
                    Country: `India`,
                    Region: `Delhi`,
                    Population: 505241
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10917,
                    Name: `Zhoukou`,
                    Country: `China`,
                    Region: `Henan`,
                    Population: 505171
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10918,
                    Name: `Leipzig`,
                    Country: `Germany`,
                    Region: `Saxony`,
                    Population: 504971
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10919,
                    Name: `Kalininskiy`,
                    Country: `Russia`,
                    Region: `St.-Petersburg`,
                    Population: 504641
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10920,
                    Name: `Duisburg`,
                    Country: `Germany`,
                    Region: `North Rhine-Westphalia`,
                    Population: 504358
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10921,
                    Name: `Asansol`,
                    Country: `India`,
                    Region: `West Bengal`,
                    Population: 504271
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10922,
                    Name: `Arak`,
                    Country: `Iran`,
                    Region: `Markazi`,
                    Population: 503647
                }),
                new WorldCitiesAbove500KItem(
                {
                    ID: 10923,
                    Name: `Astrakhan`,
                    Country: `Russia`,
                    Region: `Astrakhan`,
                    Population: 502533
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
