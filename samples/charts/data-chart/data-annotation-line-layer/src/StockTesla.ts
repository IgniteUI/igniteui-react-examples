export class StockTeslaItem {
    public constructor(init: Partial<StockTeslaItem>) {
        Object.assign(this, init);
    }

    public date: string;
    public open: number;
    public high: number;
    public low: number;
    public close: number;
    public volume: number;
    public change: number;
    public index: number;

}
export class StockTesla extends Array<StockTeslaItem> {
    public constructor(items: Array<StockTeslaItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new StockTeslaItem(
                {
                    date: `2019-01-10`,
                    open: 20.4,
                    high: 23,
                    low: 19.8,
                    close: 23,
                    volume: 779333701,
                    change: 12.7,
                    index: 0
                }),
                new StockTeslaItem(
                {
                    date: `2019-01-22`,
                    open: 22.8,
                    high: 23.5,
                    low: 19.7,
                    close: 19.9,
                    volume: 911781100,
                    change: -12.6,
                    index: 1
                }),
                new StockTeslaItem(
                {
                    date: `2019-01-31`,
                    open: 19.5,
                    high: 20.8,
                    low: 18.6,
                    close: 20.5,
                    volume: 926375717,
                    change: 5,
                    index: 2
                }),
                new StockTeslaItem(
                {
                    date: `2019-02-11`,
                    open: 20.4,
                    high: 21.6,
                    low: 19.9,
                    close: 20.9,
                    volume: 687520471,
                    change: 2.4,
                    index: 3
                }),
                new StockTeslaItem(
                {
                    date: `2019-02-21`,
                    open: 21.1,
                    high: 21.2,
                    low: 19.4,
                    close: 19.4,
                    volume: 597552272,
                    change: -7.9,
                    index: 4
                }),
                new StockTeslaItem(
                {
                    date: `2019-03-04`,
                    open: 19.6,
                    high: 21.3,
                    low: 18.9,
                    close: 19,
                    volume: 1218669201,
                    change: -3.1,
                    index: 5
                }),
                new StockTeslaItem(
                {
                    date: `2019-03-13`,
                    open: 18.8,
                    high: 19.5,
                    low: 18,
                    close: 19.3,
                    volume: 1034156904,
                    change: 2.5,
                    index: 6
                }),
                new StockTeslaItem(
                {
                    date: `2019-03-22`,
                    open: 19.5,
                    high: 19.7,
                    low: 17.6,
                    close: 17.6,
                    volume: 980694095,
                    change: -9.5,
                    index: 7
                }),
                new StockTeslaItem(
                {
                    date: `2019-04-02`,
                    open: 17.3,
                    high: 19.3,
                    low: 17,
                    close: 19.1,
                    volume: 788473494,
                    change: 10.1,
                    index: 8
                }),
                new StockTeslaItem(
                {
                    date: `2019-04-11`,
                    open: 19.2,
                    high: 19.7,
                    low: 17.4,
                    close: 17.9,
                    volume: 1165555442,
                    change: -6.6,
                    index: 9
                }),
                new StockTeslaItem(
                {
                    date: `2019-04-23`,
                    open: 18,
                    high: 18.3,
                    low: 17,
                    close: 17.6,
                    volume: 870373200,
                    change: -2.3,
                    index: 10
                }),
                new StockTeslaItem(
                {
                    date: `2019-05-02`,
                    open: 17.6,
                    high: 17.7,
                    low: 15.4,
                    close: 16.3,
                    volume: 1629432326,
                    change: -7.5,
                    index: 11
                }),
                new StockTeslaItem(
                {
                    date: `2019-05-13`,
                    open: 16.3,
                    high: 17.2,
                    low: 15,
                    close: 15.1,
                    volume: 1131045605,
                    change: -6.9,
                    index: 12
                }),
                new StockTeslaItem(
                {
                    date: `2019-05-22`,
                    open: 15.3,
                    high: 15.6,
                    low: 12.8,
                    close: 12.8,
                    volume: 1455503588,
                    change: -15.9,
                    index: 13
                }),
                new StockTeslaItem(
                {
                    date: `2019-06-03`,
                    open: 13,
                    high: 13.3,
                    low: 11.8,
                    close: 11.9,
                    volume: 1415442268,
                    change: -7.9,
                    index: 14
                }),
                new StockTeslaItem(
                {
                    date: `2019-06-12`,
                    open: 12.1,
                    high: 14.9,
                    low: 12,
                    close: 14,
                    volume: 1515000443,
                    change: 15.6,
                    index: 15
                }),
                new StockTeslaItem(
                {
                    date: `2019-06-21`,
                    open: 14,
                    high: 15.6,
                    low: 13.8,
                    close: 14.8,
                    volume: 1009123371,
                    change: 5.5,
                    index: 16
                }),
                new StockTeslaItem(
                {
                    date: `2019-07-02`,
                    open: 14.9,
                    high: 15.5,
                    low: 14.5,
                    close: 15,
                    volume: 766921642,
                    change: 0.6,
                    index: 17
                }),
                new StockTeslaItem(
                {
                    date: `2019-07-12`,
                    open: 16,
                    high: 16.4,
                    low: 15.2,
                    close: 16.3,
                    volume: 887983836,
                    change: 2.4,
                    index: 18
                }),
                new StockTeslaItem(
                {
                    date: `2019-07-23`,
                    open: 16.5,
                    high: 17.5,
                    low: 16.3,
                    close: 17.3,
                    volume: 788941000,
                    change: 4.9,
                    index: 19
                }),
                new StockTeslaItem(
                {
                    date: `2019-08-01`,
                    open: 17.3,
                    high: 17.7,
                    low: 14.8,
                    close: 15.6,
                    volume: 1175082297,
                    change: -9.8,
                    index: 20
                }),
                new StockTeslaItem(
                {
                    date: `2019-08-12`,
                    open: 15.4,
                    high: 16,
                    low: 15,
                    close: 15.3,
                    volume: 560129569,
                    change: -1,
                    index: 21
                }),
                new StockTeslaItem(
                {
                    date: `2019-08-21`,
                    open: 15.3,
                    high: 15.7,
                    low: 14.1,
                    close: 14.7,
                    volume: 677293701,
                    change: -3.5,
                    index: 22
                }),
                new StockTeslaItem(
                {
                    date: `2019-08-30`,
                    open: 14.9,
                    high: 15.5,
                    low: 14.1,
                    close: 15,
                    volume: 650239370,
                    change: 1.3,
                    index: 23
                }),
                new StockTeslaItem(
                {
                    date: `2019-09-11`,
                    open: 14.9,
                    high: 16.5,
                    low: 14.6,
                    close: 16.5,
                    volume: 636766167,
                    change: 10.3,
                    index: 24
                }),
                new StockTeslaItem(
                {
                    date: `2019-09-20`,
                    open: 16.5,
                    high: 16.9,
                    low: 15.9,
                    close: 16,
                    volume: 572802643,
                    change: -2.9,
                    index: 25
                }),
                new StockTeslaItem(
                {
                    date: `2019-10-01`,
                    open: 16,
                    high: 16.6,
                    low: 14.6,
                    close: 16.3,
                    volume: 931821239,
                    change: 2,
                    index: 26
                }),
                new StockTeslaItem(
                {
                    date: `2019-10-10`,
                    open: 16.2,
                    high: 16.6,
                    low: 15,
                    close: 16.3,
                    volume: 891798049,
                    change: 0.6,
                    index: 27
                }),
                new StockTeslaItem(
                {
                    date: `2019-10-21`,
                    open: 16.5,
                    high: 17.7,
                    low: 16.5,
                    close: 16.9,
                    volume: 713093463,
                    change: 2.6,
                    index: 28
                }),
                new StockTeslaItem(
                {
                    date: `2019-10-30`,
                    open: 17,
                    high: 22.7,
                    low: 16.7,
                    close: 21,
                    volume: 1752943598,
                    change: 23.9,
                    index: 29
                }),
                new StockTeslaItem(
                {
                    date: `2019-11-08`,
                    open: 20.9,
                    high: 22.8,
                    low: 20.6,
                    close: 22.5,
                    volume: 834957256,
                    change: 7.7,
                    index: 30
                }),
                new StockTeslaItem(
                {
                    date: `2019-11-19`,
                    open: 22.9,
                    high: 24,
                    low: 22.8,
                    close: 24,
                    volume: 738746390,
                    change: 4.5,
                    index: 31
                }),
                new StockTeslaItem(
                {
                    date: `2019-11-29`,
                    open: 24,
                    high: 24.1,
                    low: 21.8,
                    close: 22,
                    volume: 870685288,
                    change: -8.4,
                    index: 32
                }),
                new StockTeslaItem(
                {
                    date: `2019-12-10`,
                    open: 22,
                    high: 23.4,
                    low: 21.8,
                    close: 23.3,
                    volume: 712016613,
                    change: 5.9,
                    index: 33
                }),
                new StockTeslaItem(
                {
                    date: `2019-12-19`,
                    open: 23.5,
                    high: 27.1,
                    low: 23.4,
                    close: 26.9,
                    volume: 1203765433,
                    change: 14.8,
                    index: 34
                }),
                new StockTeslaItem(
                {
                    date: `2019-12-31`,
                    open: 27.4,
                    high: 29,
                    low: 26.7,
                    close: 27.9,
                    volume: 1195073357,
                    change: 2,
                    index: 35
                }),
                new StockTeslaItem(
                {
                    date: `2020-01-10`,
                    open: 28.3,
                    high: 33.3,
                    low: 28.1,
                    close: 31.9,
                    volume: 1925386078,
                    change: 12.6,
                    index: 36
                }),
                new StockTeslaItem(
                {
                    date: `2020-01-22`,
                    open: 32.9,
                    high: 39.6,
                    low: 32.8,
                    close: 38,
                    volume: 2364043518,
                    change: 15.4,
                    index: 37
                }),
                new StockTeslaItem(
                {
                    date: `2020-01-31`,
                    open: 37.6,
                    high: 43.5,
                    low: 36,
                    close: 43.4,
                    volume: 1835141382,
                    change: 15.3,
                    index: 38
                }),
                new StockTeslaItem(
                {
                    date: `2020-02-11`,
                    open: 44.9,
                    high: 64.6,
                    low: 44.9,
                    close: 51.6,
                    volume: 3748903126,
                    change: 14.9,
                    index: 39
                }),
                new StockTeslaItem(
                {
                    date: `2020-02-21`,
                    open: 51.9,
                    high: 63,
                    low: 49,
                    close: 60.1,
                    volume: 1921517039,
                    change: 15.8,
                    index: 40
                }),
                new StockTeslaItem(
                {
                    date: `2020-03-03`,
                    open: 55.9,
                    high: 57.6,
                    low: 40.8,
                    close: 49.7,
                    volume: 2121850940,
                    change: -11.1,
                    index: 41
                }),
                new StockTeslaItem(
                {
                    date: `2020-03-12`,
                    open: 50.9,
                    high: 51.1,
                    low: 36.4,
                    close: 37.4,
                    volume: 1553329923,
                    change: -26.6,
                    index: 42
                }),
                new StockTeslaItem(
                {
                    date: `2020-03-23`,
                    open: 39.7,
                    high: 40.5,
                    low: 23.4,
                    close: 29,
                    volume: 2487688157,
                    change: -27,
                    index: 43
                }),
                new StockTeslaItem(
                {
                    date: `2020-04-01`,
                    open: 31.8,
                    high: 37.3,
                    low: 31.6,
                    close: 32.1,
                    volume: 1785601357,
                    change: 0.9,
                    index: 44
                }),
                new StockTeslaItem(
                {
                    date: `2020-04-13`,
                    open: 32.1,
                    high: 43.5,
                    low: 29.8,
                    close: 43.4,
                    volume: 1860352620,
                    change: 35.3,
                    index: 45
                }),
                new StockTeslaItem(
                {
                    date: `2020-04-22`,
                    open: 46.6,
                    high: 51.7,
                    low: 44.9,
                    close: 48.8,
                    volume: 2056797321,
                    change: 4.7,
                    index: 46
                }),
                new StockTeslaItem(
                {
                    date: `2020-05-01`,
                    open: 48.5,
                    high: 58,
                    low: 45.5,
                    close: 46.8,
                    volume: 2093959203,
                    change: -3.6,
                    index: 47
                }),
                new StockTeslaItem(
                {
                    date: `2020-05-12`,
                    open: 46.7,
                    high: 56.2,
                    low: 46.5,
                    close: 54,
                    volume: 1611543246,
                    change: 15.5,
                    index: 48
                }),
                new StockTeslaItem(
                {
                    date: `2020-05-21`,
                    open: 54.7,
                    high: 55.6,
                    low: 50.9,
                    close: 55.2,
                    volume: 1262468113,
                    change: 0.8,
                    index: 49
                }),
                new StockTeslaItem(
                {
                    date: `2020-06-02`,
                    open: 54.8,
                    high: 60.6,
                    low: 52.3,
                    close: 58.8,
                    volume: 1160487993,
                    change: 7.2,
                    index: 50
                }),
                new StockTeslaItem(
                {
                    date: `2020-06-11`,
                    open: 59.2,
                    high: 68.5,
                    low: 57.2,
                    close: 64.9,
                    volume: 1270377400,
                    change: 9.5,
                    index: 51
                }),
                new StockTeslaItem(
                {
                    date: `2020-06-22`,
                    open: 65.3,
                    high: 67.9,
                    low: 60.6,
                    close: 66.3,
                    volume: 1217946366,
                    change: 1.5,
                    index: 52
                }),
                new StockTeslaItem(
                {
                    date: `2020-07-01`,
                    open: 66.6,
                    high: 75.7,
                    low: 62.5,
                    close: 74.6,
                    volume: 1120591270,
                    change: 12.1,
                    index: 53
                }),
                new StockTeslaItem(
                {
                    date: `2020-07-13`,
                    open: 81.4,
                    high: 119.7,
                    low: 79,
                    close: 99.8,
                    volume: 2244920779,
                    change: 22.6,
                    index: 54
                }),
                new StockTeslaItem(
                {
                    date: `2020-07-22`,
                    open: 103.7,
                    high: 111.7,
                    low: 95.4,
                    close: 106.2,
                    volume: 1662846099,
                    change: 2.3,
                    index: 55
                }),
                new StockTeslaItem(
                {
                    date: `2020-07-31`,
                    open: 111.9,
                    high: 112.6,
                    low: 91.1,
                    close: 95.4,
                    volume: 1573159944,
                    change: -14.8,
                    index: 56
                }),
                new StockTeslaItem(
                {
                    date: `2020-08-11`,
                    open: 96.6,
                    high: 101.8,
                    low: 91,
                    close: 91.6,
                    volume: 798587331,
                    change: -5.2,
                    index: 57
                }),
                new StockTeslaItem(
                {
                    date: `2020-08-20`,
                    open: 98,
                    high: 134.8,
                    low: 95.7,
                    close: 133.5,
                    volume: 1866534416,
                    change: 36.2,
                    index: 58
                }),
                new StockTeslaItem(
                {
                    date: `2020-08-31`,
                    open: 136.3,
                    high: 166.7,
                    low: 128.5,
                    close: 166.1,
                    volume: 2008507459,
                    change: 21.9,
                    index: 59
                }),
                new StockTeslaItem(
                {
                    date: `2020-09-10`,
                    open: 167.4,
                    high: 167.5,
                    low: 110,
                    close: 123.8,
                    volume: 1992227059,
                    change: -26,
                    index: 60
                }),
                new StockTeslaItem(
                {
                    date: `2020-09-21`,
                    open: 127.3,
                    high: 154,
                    low: 120.2,
                    close: 149.8,
                    volume: 1758737696,
                    change: 17.7,
                    index: 61
                }),
                new StockTeslaItem(
                {
                    date: `2020-09-30`,
                    open: 143.2,
                    high: 145.9,
                    low: 117.1,
                    close: 143,
                    volume: 1459893236,
                    change: -0.1,
                    index: 62
                }),
                new StockTeslaItem(
                {
                    date: `2020-10-09`,
                    open: 146.9,
                    high: 149.6,
                    low: 135.4,
                    close: 144.7,
                    volume: 985545158,
                    change: -1.5,
                    index: 63
                }),
                new StockTeslaItem(
                {
                    date: `2020-10-20`,
                    open: 147.3,
                    high: 155.3,
                    low: 139.7,
                    close: 140.6,
                    volume: 773077727,
                    change: -4.5,
                    index: 64
                }),
                new StockTeslaItem(
                {
                    date: `2020-10-29`,
                    open: 140.9,
                    high: 148.4,
                    low: 135.3,
                    close: 136.9,
                    volume: 615339122,
                    change: -2.8,
                    index: 65
                }),
                new StockTeslaItem(
                {
                    date: `2020-11-09`,
                    open: 135.6,
                    high: 150.8,
                    low: 126.4,
                    close: 140.4,
                    volume: 669171368,
                    change: 3.5,
                    index: 66
                }),
                new StockTeslaItem(
                {
                    date: `2020-11-18`,
                    open: 140,
                    high: 165.3,
                    low: 132,
                    close: 162.2,
                    volume: 760451265,
                    change: 15.8,
                    index: 67
                }),
                new StockTeslaItem(
                {
                    date: `2020-11-30`,
                    open: 164,
                    high: 202.6,
                    low: 162.5,
                    close: 189.2,
                    volume: 1046371155,
                    change: 15.4,
                    index: 68
                }),
                new StockTeslaItem(
                {
                    date: `2020-12-09`,
                    open: 199.2,
                    high: 218.1,
                    low: 180.4,
                    close: 201.5,
                    volume: 1055933265,
                    change: 1.2,
                    index: 69
                }),
                new StockTeslaItem(
                {
                    date: `2020-12-18`,
                    open: 191.5,
                    high: 231.7,
                    low: 188.8,
                    close: 231.7,
                    volume: 1593943601,
                    change: 21,
                    index: 70
                }),
                new StockTeslaItem(
                {
                    date: `2020-12-30`,
                    open: 222.1,
                    high: 232.2,
                    low: 204.7,
                    close: 231.6,
                    volume: 791942570,
                    change: 4.3,
                    index: 71
                }),
                new StockTeslaItem(
                {
                    date: `2021-01-11`,
                    open: 233.3,
                    high: 294.8,
                    low: 230.4,
                    close: 270.4,
                    volume: 1084025779,
                    change: 15.9,
                    index: 72
                }),
                new StockTeslaItem(
                {
                    date: `2021-01-21`,
                    open: 277,
                    high: 289.3,
                    low: 273,
                    close: 281.7,
                    volume: 663774487,
                    change: 1.7,
                    index: 73
                }),
                new StockTeslaItem(
                {
                    date: `2021-02-01`,
                    open: 278.1,
                    high: 300.1,
                    low: 260,
                    close: 279.9,
                    volume: 595397009,
                    change: 0.7,
                    index: 74
                }),
                new StockTeslaItem(
                {
                    date: `2021-02-10`,
                    open: 281.6,
                    high: 293.5,
                    low: 266.7,
                    close: 268.3,
                    volume: 445813486,
                    change: -4.7,
                    index: 75
                }),
                new StockTeslaItem(
                {
                    date: `2021-02-22`,
                    open: 270.8,
                    high: 276.6,
                    low: 236.7,
                    close: 238.2,
                    volume: 496372009,
                    change: -12.1,
                    index: 76
                }),
                new StockTeslaItem(
                {
                    date: `2021-03-03`,
                    open: 220.7,
                    high: 290.7,
                    low: 206.3,
                    close: 217.7,
                    volume: 793689739,
                    change: -1.3,
                    index: 77
                }),
                new StockTeslaItem(
                {
                    date: `2021-03-12`,
                    open: 218.6,
                    high: 291.3,
                    low: 179.8,
                    close: 231.2,
                    volume: 1215209162,
                    change: 5.8,
                    index: 78
                }),
                new StockTeslaItem(
                {
                    date: `2021-03-23`,
                    open: 231.4,
                    high: 237.7,
                    low: 208.2,
                    close: 220.7,
                    volume: 744776145,
                    change: -4.6,
                    index: 79
                }),
                new StockTeslaItem(
                {
                    date: `2021-04-01`,
                    open: 222.6,
                    high: 230.8,
                    low: 197,
                    close: 220.6,
                    volume: 730733684,
                    change: -0.9,
                    index: 80
                }),
                new StockTeslaItem(
                {
                    date: `2021-04-13`,
                    open: 235.9,
                    high: 254.3,
                    low: 222.6,
                    close: 254.1,
                    volume: 646721884,
                    change: 7.7,
                    index: 81
                }),
                new StockTeslaItem(
                {
                    date: `2021-04-22`,
                    open: 256.9,
                    high: 260.3,
                    low: 230.6,
                    close: 239.9,
                    volume: 740840774,
                    change: -6.6,
                    index: 82
                }),
                new StockTeslaItem(
                {
                    date: `2021-05-03`,
                    open: 239.9,
                    high: 249.8,
                    low: 222,
                    close: 228.3,
                    volume: 623423313,
                    change: -4.8,
                    index: 83
                }),
                new StockTeslaItem(
                {
                    date: `2021-05-12`,
                    open: 226.3,
                    high: 230,
                    low: 195.6,
                    close: 196.6,
                    volume: 643844974,
                    change: -13.1,
                    index: 84
                }),
                new StockTeslaItem(
                {
                    date: `2021-05-21`,
                    open: 200.5,
                    high: 202.2,
                    low: 182.3,
                    close: 193.6,
                    volume: 729192883,
                    change: -3.4,
                    index: 85
                }),
                new StockTeslaItem(
                {
                    date: `2021-06-02`,
                    open: 193.9,
                    high: 211.9,
                    low: 191.2,
                    close: 201.7,
                    volume: 545095944,
                    change: 4,
                    index: 86
                }),
                new StockTeslaItem(
                {
                    date: `2021-06-11`,
                    open: 200.6,
                    high: 207.7,
                    low: 190.4,
                    close: 203.3,
                    volume: 478366128,
                    change: 1.3,
                    index: 87
                }),
                new StockTeslaItem(
                {
                    date: `2021-06-22`,
                    open: 204.1,
                    high: 210.5,
                    low: 197.8,
                    close: 207.9,
                    volume: 454698495,
                    change: 1.9,
                    index: 88
                }),
                new StockTeslaItem(
                {
                    date: `2021-07-01`,
                    open: 210.7,
                    high: 232.5,
                    low: 210,
                    close: 226,
                    volume: 558441596,
                    change: 7.3,
                    index: 89
                }),
                new StockTeslaItem(
                {
                    date: `2021-07-13`,
                    open: 226.3,
                    high: 233.3,
                    low: 206.8,
                    close: 222.8,
                    volume: 470942387,
                    change: -1.5,
                    index: 90
                }),
                new StockTeslaItem(
                {
                    date: `2021-07-22`,
                    open: 223.6,
                    high: 226.2,
                    low: 207.1,
                    close: 216.4,
                    volume: 372195097,
                    change: -3.2,
                    index: 91
                }),
                new StockTeslaItem(
                {
                    date: `2021-08-02`,
                    open: 215.5,
                    high: 242.3,
                    low: 209.1,
                    close: 236.6,
                    volume: 547284685,
                    change: 9.8,
                    index: 92
                }),
                new StockTeslaItem(
                {
                    date: `2021-08-11`,
                    open: 239.7,
                    high: 241.6,
                    low: 232.5,
                    close: 235.9,
                    volume: 315341455,
                    change: -1.6,
                    index: 93
                }),
                new StockTeslaItem(
                {
                    date: `2021-08-20`,
                    open: 235.4,
                    high: 243.3,
                    low: 216.3,
                    close: 226.8,
                    volume: 392227478,
                    change: -3.7,
                    index: 94
                }),
                new StockTeslaItem(
                {
                    date: `2021-08-31`,
                    open: 228.5,
                    high: 246.8,
                    low: 226.9,
                    close: 245.2,
                    volume: 337503634,
                    change: 7.3,
                    index: 95
                }),
                new StockTeslaItem(
                {
                    date: `2021-09-10`,
                    open: 244.7,
                    high: 254.8,
                    low: 241.4,
                    close: 245.4,
                    volume: 328100734,
                    change: 0.3,
                    index: 96
                }),
                new StockTeslaItem(
                {
                    date: `2021-09-21`,
                    open: 246.7,
                    high: 253.7,
                    low: 236.3,
                    close: 246.5,
                    volume: 420153012,
                    change: -0.1,
                    index: 97
                }),
                new StockTeslaItem(
                {
                    date: `2021-09-30`,
                    open: 247.8,
                    high: 266.3,
                    low: 246.4,
                    close: 258.5,
                    volume: 422393262,
                    change: 4.3,
                    index: 98
                }),
                new StockTeslaItem(
                {
                    date: `2021-10-11`,
                    open: 259.5,
                    high: 269,
                    low: 254.5,
                    close: 264,
                    volume: 392144589,
                    change: 1.7,
                    index: 99
                }),
                new StockTeslaItem(
                {
                    date: `2021-10-20`,
                    open: 267,
                    high: 292.6,
                    low: 265.5,
                    close: 288.6,
                    volume: 368796877,
                    change: 8.1,
                    index: 100
                }),
                new StockTeslaItem(
                {
                    date: `2021-10-29`,
                    open: 285.3,
                    high: 371.7,
                    low: 285.2,
                    close: 371.3,
                    volume: 825862313,
                    change: 30.1,
                    index: 101
                }),
                new StockTeslaItem(
                {
                    date: `2021-11-09`,
                    open: 381.7,
                    high: 414.5,
                    low: 337.2,
                    close: 341.2,
                    volume: 818978542,
                    change: -10.6,
                    index: 102
                }),
                new StockTeslaItem(
                {
                    date: `2021-11-18`,
                    open: 336.8,
                    high: 373.2,
                    low: 326.2,
                    close: 365.5,
                    volume: 613304311,
                    change: 8.5,
                    index: 103
                }),
                new StockTeslaItem(
                {
                    date: `2021-11-30`,
                    open: 366.3,
                    high: 400.6,
                    low: 354,
                    close: 381.6,
                    volume: 515052382,
                    change: 4.2,
                    index: 104
                }),
                new StockTeslaItem(
                {
                    date: `2021-12-09`,
                    open: 386.9,
                    high: 390.9,
                    low: 316.8,
                    close: 334.6,
                    volume: 473333567,
                    change: -13.5,
                    index: 105
                }),
                new StockTeslaItem(
                {
                    date: `2021-12-20`,
                    open: 336.2,
                    high: 340.3,
                    low: 297.8,
                    close: 300,
                    volume: 524367113,
                    change: -10.8,
                    index: 106
                }),
                new StockTeslaItem(
                {
                    date: `2021-12-30`,
                    open: 305.6,
                    high: 373,
                    low: 295.4,
                    close: 356.8,
                    volume: 492530059,
                    change: 16.7,
                    index: 107
                }),
                new StockTeslaItem(
                {
                    date: `2022-01-10`,
                    open: 357.8,
                    high: 402.7,
                    low: 326.7,
                    close: 352.7,
                    volume: 592103938,
                    change: -1.4,
                    index: 108
                }),
                new StockTeslaItem(
                {
                    date: `2022-01-20`,
                    open: 351.2,
                    high: 371.9,
                    low: 331.3,
                    close: 332.1,
                    volume: 532857144,
                    change: -5.4,
                    index: 109
                }),
                new StockTeslaItem(
                {
                    date: `2022-01-31`,
                    open: 332.1,
                    high: 334.8,
                    low: 264,
                    close: 312.2,
                    volume: 833589022,
                    change: -6,
                    index: 110
                }),
                new StockTeslaItem(
                {
                    date: `2022-02-09`,
                    open: 311.7,
                    high: 315.9,
                    low: 293.5,
                    close: 310.7,
                    volume: 456395505,
                    change: -0.3,
                    index: 111
                }),
                new StockTeslaItem(
                {
                    date: `2022-02-18`,
                    open: 302.8,
                    high: 314.6,
                    low: 279.2,
                    close: 285.7,
                    volume: 446153356,
                    change: -5.7,
                    index: 112
                }),
                new StockTeslaItem(
                {
                    date: `2022-03-02`,
                    open: 278,
                    high: 296.6,
                    low: 233.3,
                    close: 293.3,
                    volume: 638352514,
                    change: 5.5,
                    index: 113
                }),
                new StockTeslaItem(
                {
                    date: `2022-03-11`,
                    open: 292.9,
                    high: 295.5,
                    low: 260.7,
                    close: 265.1,
                    volume: 466566467,
                    change: -9.5,
                    index: 114
                }),
                new StockTeslaItem(
                {
                    date: `2022-03-22`,
                    open: 260.2,
                    high: 332.6,
                    low: 252,
                    close: 331.3,
                    volume: 576869668,
                    change: 27.3,
                    index: 115
                }),
                new StockTeslaItem(
                {
                    date: `2022-03-31`,
                    open: 326.6,
                    high: 371.6,
                    low: 325.5,
                    close: 359.2,
                    volume: 536607263,
                    change: 10,
                    index: 116
                }),
                new StockTeslaItem(
                {
                    date: `2022-04-11`,
                    open: 360.4,
                    high: 384.3,
                    low: 324.9,
                    close: 325.3,
                    volume: 499682510,
                    change: -9.7,
                    index: 117
                }),
                new StockTeslaItem(
                {
                    date: `2022-04-21`,
                    open: 332.5,
                    high: 364.1,
                    low: 324.4,
                    close: 336.3,
                    volume: 457210487,
                    change: 1.1,
                    index: 118
                }),
                new StockTeslaItem(
                {
                    date: `2022-05-02`,
                    open: 338.3,
                    high: 345,
                    low: 273.9,
                    close: 301,
                    volume: 639990965,
                    change: -11,
                    index: 119
                }),
                new StockTeslaItem(
                {
                    date: `2022-05-11`,
                    open: 301.1,
                    high: 318.5,
                    low: 242.4,
                    close: 244.7,
                    volume: 583211967,
                    change: -18.7,
                    index: 120
                }),
                new StockTeslaItem(
                {
                    date: `2022-05-20`,
                    open: 233.7,
                    high: 262.4,
                    low: 211,
                    close: 221.3,
                    volume: 721880082,
                    change: -5.3,
                    index: 121
                }),
                new StockTeslaItem(
                {
                    date: `2022-06-01`,
                    open: 218.3,
                    high: 259.6,
                    low: 206.9,
                    close: 246.8,
                    volume: 644596235,
                    change: 13,
                    index: 122
                }),
                new StockTeslaItem(
                {
                    date: `2022-06-10`,
                    open: 244.2,
                    high: 264.2,
                    low: 227.9,
                    close: 232.2,
                    volume: 633672873,
                    change: -4.9,
                    index: 123
                }),
                new StockTeslaItem(
                {
                    date: `2022-06-22`,
                    open: 223.2,
                    high: 246.8,
                    low: 208.7,
                    close: 236.1,
                    volume: 744240764,
                    change: 5.8,
                    index: 124
                }),
                new StockTeslaItem(
                {
                    date: `2022-07-01`,
                    open: 237.9,
                    high: 252.1,
                    low: 218.9,
                    close: 227.3,
                    volume: 631776422,
                    change: -4.5,
                    index: 125
                }),
                new StockTeslaItem(
                {
                    date: `2022-07-13`,
                    open: 223,
                    high: 255,
                    low: 216.2,
                    close: 237,
                    volume: 625812242,
                    change: 6.3,
                    index: 126
                }),
                new StockTeslaItem(
                {
                    date: `2022-07-22`,
                    open: 234.9,
                    high: 280.8,
                    low: 229.3,
                    close: 272.2,
                    volume: 646037224,
                    change: 15.9,
                    index: 127
                }),
                new StockTeslaItem(
                {
                    date: `2022-08-02`,
                    open: 272.2,
                    high: 311.9,
                    low: 256.3,
                    close: 300.6,
                    volume: 611660612,
                    change: 10.4,
                    index: 128
                }),
                new StockTeslaItem(
                {
                    date: `2022-08-11`,
                    open: 305,
                    high: 313.6,
                    low: 279.4,
                    close: 286.6,
                    volume: 616204291,
                    change: -6,
                    index: 129
                }),
                new StockTeslaItem(
                {
                    date: `2022-08-22`,
                    open: 289.4,
                    high: 314.7,
                    low: 285,
                    close: 289.9,
                    volume: 490658060,
                    change: 0.2,
                    index: 130
                }),
                new StockTeslaItem(
                {
                    date: `2022-08-31`,
                    open: 291.5,
                    high: 303.6,
                    low: 271.8,
                    close: 275.6,
                    volume: 376152572,
                    change: -5.4,
                    index: 131
                }),
                new StockTeslaItem(
                {
                    date: `2022-09-12`,
                    open: 272.6,
                    high: 305.5,
                    low: 265.7,
                    close: 304.4,
                    volume: 367924580,
                    change: 11.7,
                    index: 132
                }),
                new StockTeslaItem(
                {
                    date: `2022-09-21`,
                    open: 292.9,
                    high: 313.8,
                    low: 290.4,
                    close: 300.8,
                    volume: 477171180,
                    change: 2.7,
                    index: 133
                }),
                new StockTeslaItem(
                {
                    date: `2022-09-30`,
                    open: 299.9,
                    high: 301.3,
                    low: 262.5,
                    close: 265.2,
                    volume: 454307920,
                    change: -11.5,
                    index: 134
                }),
                new StockTeslaItem(
                {
                    date: `2022-10-11`,
                    open: 254.5,
                    high: 257.5,
                    low: 215,
                    close: 216.5,
                    volume: 593078170,
                    change: -14.9,
                    index: 135
                }),
                new StockTeslaItem(
                {
                    date: `2022-10-20`,
                    open: 215.3,
                    high: 229.8,
                    low: 202,
                    close: 207.3,
                    volume: 592158560,
                    change: -3.7,
                    index: 136
                }),
                new StockTeslaItem(
                {
                    date: `2022-10-31`,
                    open: 206.4,
                    high: 233.8,
                    low: 198.6,
                    close: 227.5,
                    volume: 550341050,
                    change: 10.2,
                    index: 137
                }),
                new StockTeslaItem(
                {
                    date: `2022-11-09`,
                    open: 234,
                    high: 237.4,
                    low: 177.1,
                    close: 177.6,
                    volume: 630702790,
                    change: -24.1,
                    index: 138
                }),
                new StockTeslaItem(
                {
                    date: `2022-11-18`,
                    open: 189.9,
                    high: 200.8,
                    low: 176.6,
                    close: 180.2,
                    volume: 637579480,
                    change: -5.1,
                    index: 139
                }),
                new StockTeslaItem(
                {
                    date: `2022-11-30`,
                    open: 175.8,
                    high: 194.8,
                    low: 166.2,
                    close: 194.7,
                    volume: 617126140,
                    change: 10.7,
                    index: 140
                }),
                new StockTeslaItem(
                {
                    date: `2022-12-09`,
                    open: 197.1,
                    high: 198.9,
                    low: 169.1,
                    close: 179,
                    volume: 625675690,
                    change: -9.1,
                    index: 141
                }),
                new StockTeslaItem(
                {
                    date: `2022-12-20`,
                    open: 176.1,
                    high: 177.4,
                    low: 137.7,
                    close: 137.8,
                    volume: 986660100,
                    change: -21.7,
                    index: 142
                }),
                new StockTeslaItem(
                {
                    date: `2022-12-30`,
                    open: 139.3,
                    high: 141.3,
                    low: 108.2,
                    close: 123.2,
                    volume: 1331911900,
                    change: -11.6,
                    index: 143
                }),
                new StockTeslaItem(
                {
                    date: `2023-01-11`,
                    open: 118.5,
                    high: 126,
                    low: 101.8,
                    close: 123.2,
                    volume: 1332426500,
                    change: 4,
                    index: 144
                }),
                new StockTeslaItem(
                {
                    date: `2023-01-23`,
                    open: 122.6,
                    high: 145.4,
                    low: 115.6,
                    close: 143.8,
                    volume: 1244541500,
                    change: 17.3,
                    index: 145
                }),
                new StockTeslaItem(
                {
                    date: `2023-02-01`,
                    open: 143,
                    high: 183.8,
                    low: 138.1,
                    close: 181.4,
                    volume: 1534337700,
                    change: 26.9,
                    index: 146
                }),
                new StockTeslaItem(
                {
                    date: `2023-02-10`,
                    open: 187.3,
                    high: 214,
                    low: 182.6,
                    close: 196.9,
                    volume: 1423167800,
                    change: 5.1,
                    index: 147
                }),
                new StockTeslaItem(
                {
                    date: `2023-02-22`,
                    open: 194.4,
                    high: 217.6,
                    low: 187.6,
                    close: 200.9,
                    volume: 1386211900,
                    change: 3.3,
                    index: 148
                }),
                new StockTeslaItem(
                {
                    date: `2023-03-03`,
                    open: 203.9,
                    high: 211.2,
                    low: 186,
                    close: 197.8,
                    volume: 1095786600,
                    change: -3,
                    index: 149
                }),
                new StockTeslaItem(
                {
                    date: `2023-03-14`,
                    open: 198.5,
                    high: 198.6,
                    low: 163.9,
                    close: 183.3,
                    volume: 1101144600,
                    change: -7.7,
                    index: 150
                }),
                new StockTeslaItem(
                {
                    date: `2023-03-23`,
                    open: 180.8,
                    high: 200.7,
                    low: 176,
                    close: 192.2,
                    volume: 978213300,
                    change: 6.3,
                    index: 151
                }),
                new StockTeslaItem(
                {
                    date: `2023-04-03`,
                    open: 191.6,
                    high: 207.8,
                    low: 185.4,
                    close: 194.8,
                    volume: 909718040,
                    change: 1.6,
                    index: 152
                }),
                new StockTeslaItem(
                {
                    date: `2023-04-13`,
                    open: 197.3,
                    high: 198.7,
                    low: 176.1,
                    close: 185.9,
                    volume: 905319000,
                    change: -5.8,
                    index: 153
                }),
                new StockTeslaItem(
                {
                    date: `2023-04-24`,
                    open: 184,
                    high: 189.7,
                    low: 158.6,
                    close: 162.6,
                    volume: 905416980,
                    change: -11.6,
                    index: 154
                }),
                new StockTeslaItem(
                {
                    date: `2023-05-03`,
                    open: 159.8,
                    high: 165.5,
                    low: 152.4,
                    close: 160.6,
                    volume: 881897100,
                    change: 0.5,
                    index: 155
                }),
                new StockTeslaItem(
                {
                    date: `2023-05-12`,
                    open: 162.7,
                    high: 177.4,
                    low: 159.6,
                    close: 168,
                    volume: 785510430,
                    change: 3.2,
                    index: 156
                }),
                new StockTeslaItem(
                {
                    date: `2023-05-23`,
                    open: 167.7,
                    high: 193,
                    low: 164.4,
                    close: 185.8,
                    volume: 864025390,
                    change: 10.8,
                    index: 157
                }),
                new StockTeslaItem(
                {
                    date: `2023-06-02`,
                    open: 182.2,
                    high: 217.2,
                    low: 178.2,
                    close: 214,
                    volume: 988496020,
                    change: 17.4,
                    index: 158
                }),
                new StockTeslaItem(
                {
                    date: `2023-06-13`,
                    open: 217.8,
                    high: 259.7,
                    low: 212.5,
                    close: 258.7,
                    volume: 1161622400,
                    change: 18.8,
                    index: 159
                }),
                new StockTeslaItem(
                {
                    date: `2023-06-23`,
                    open: 260.2,
                    high: 277,
                    low: 247.3,
                    close: 256.6,
                    volume: 1220407300,
                    change: -1.4,
                    index: 160
                }),
                new StockTeslaItem(
                {
                    date: `2023-07-05`,
                    open: 250.1,
                    high: 284.2,
                    low: 240.7,
                    close: 282.5,
                    volume: 999163700,
                    change: 13,
                    index: 161
                }),
                new StockTeslaItem(
                {
                    date: `2023-07-14`,
                    open: 278.1,
                    high: 285.3,
                    low: 265.1,
                    close: 281.4,
                    volume: 774400400,
                    change: 1.2,
                    index: 162
                }),
                new StockTeslaItem(
                {
                    date: `2023-07-25`,
                    open: 286.6,
                    high: 299.3,
                    low: 254.1,
                    close: 265.3,
                    volume: 973076400,
                    change: -7.4,
                    index: 163
                }),
                new StockTeslaItem(
                {
                    date: `2023-08-03`,
                    open: 263.2,
                    high: 269.1,
                    low: 250.5,
                    close: 259.3,
                    volume: 678809820,
                    change: -1.5,
                    index: 164
                }),
                new StockTeslaItem(
                {
                    date: `2023-08-14`,
                    open: 261,
                    high: 264.8,
                    low: 233.8,
                    close: 239.8,
                    volume: 716008860,
                    change: -8.1,
                    index: 165
                }),
                new StockTeslaItem(
                {
                    date: `2023-08-23`,
                    open: 238.7,
                    high: 240.8,
                    low: 212.4,
                    close: 236.9,
                    volume: 825055300,
                    change: -0.8,
                    index: 166
                }),
                new StockTeslaItem(
                {
                    date: `2023-09-01`,
                    open: 238.7,
                    high: 261.2,
                    low: 228.2,
                    close: 245,
                    volume: 811502630,
                    change: 2.7,
                    index: 167
                }),
                new StockTeslaItem(
                {
                    date: `2023-09-13`,
                    open: 245,
                    high: 278.4,
                    low: 243.3,
                    close: 271.3,
                    volume: 902643400,
                    change: 10.7,
                    index: 168
                }),
                new StockTeslaItem(
                {
                    date: `2023-09-22`,
                    open: 271.3,
                    high: 279,
                    low: 244.5,
                    close: 244.9,
                    volume: 816639600,
                    change: -9.7,
                    index: 169
                }),
                new StockTeslaItem(
                {
                    date: `2023-10-03`,
                    open: 243.4,
                    high: 254.8,
                    low: 234.6,
                    close: 246.5,
                    volume: 814604700,
                    change: 1.3,
                    index: 170
                }),
                new StockTeslaItem(
                {
                    date: `2023-10-12`,
                    open: 248.1,
                    high: 268.9,
                    low: 247.6,
                    close: 258.9,
                    volume: 806250900,
                    change: 4.3,
                    index: 171
                }),
                new StockTeslaItem(
                {
                    date: `2023-10-23`,
                    open: 258.9,
                    high: 259.6,
                    low: 202.5,
                    close: 212.1,
                    volume: 869390890,
                    change: -18.1,
                    index: 172
                }),
                new StockTeslaItem(
                {
                    date: `2023-11-01`,
                    open: 216.5,
                    high: 222,
                    low: 194.1,
                    close: 205.7,
                    volume: 811468170,
                    change: -5,
                    index: 173
                }),
                new StockTeslaItem(
                {
                    date: `2023-11-10`,
                    open: 213,
                    high: 226.4,
                    low: 205.7,
                    close: 214.6,
                    volume: 859763700,
                    change: 0.8,
                    index: 174
                }),
                new StockTeslaItem(
                {
                    date: `2023-11-21`,
                    open: 215.6,
                    high: 246.7,
                    low: 211.6,
                    close: 241.2,
                    volume: 959006600,
                    change: 11.9,
                    index: 175
                }),
                new StockTeslaItem(
                {
                    date: `2023-12-01`,
                    open: 242,
                    high: 252.8,
                    low: 231.4,
                    close: 238.8,
                    volume: 832910200,
                    change: -1.3,
                    index: 176
                }),
                new StockTeslaItem(
                {
                    date: `2023-12-12`,
                    open: 235.8,
                    high: 246.7,
                    low: 233.3,
                    close: 237,
                    volume: 772018400,
                    change: 0.5,
                    index: 177
                }),
                new StockTeslaItem(
                {
                    date: `2023-12-21`,
                    open: 234.2,
                    high: 259.8,
                    low: 228.2,
                    close: 254.5,
                    volume: 900893400,
                    change: 8.7,
                    index: 178
                }),
                new StockTeslaItem(
                {
                    date: `2024-01-03`,
                    open: 256.8,
                    high: 265.1,
                    low: 236.3,
                    close: 238.4,
                    volume: 727005170,
                    change: -7.1,
                    index: 179
                }),
                new StockTeslaItem(
                {
                    date: `2024-01-12`,
                    open: 239.2,
                    high: 242.7,
                    low: 217.2,
                    close: 218.9,
                    volume: 697536380,
                    change: -8.5,
                    index: 180
                }),
                new StockTeslaItem(
                {
                    date: `2024-01-24`,
                    open: 215.1,
                    high: 223.5,
                    low: 206.3,
                    close: 207.8,
                    volume: 777303400,
                    change: -3.4,
                    index: 181
                }),
                new StockTeslaItem(
                {
                    date: `2024-02-02`,
                    open: 189.7,
                    high: 196.4,
                    low: 180.1,
                    close: 187.9,
                    volume: 846092780,
                    change: -0.9,
                    index: 182
                }),
                new StockTeslaItem(
                {
                    date: `2024-02-13`,
                    open: 184.3,
                    high: 194.7,
                    low: 175,
                    close: 184,
                    volume: 718274070,
                    change: -0.1,
                    index: 183
                }),
                new StockTeslaItem(
                {
                    date: `2024-02-23`,
                    open: 185.3,
                    high: 203.2,
                    low: 183.4,
                    close: 192,
                    volume: 693352670,
                    change: 3.6,
                    index: 184
                }),
                new StockTeslaItem(
                {
                    date: `2024-03-05`,
                    open: 192.3,
                    high: 205.6,
                    low: 177.6,
                    close: 180.7,
                    volume: 742344460,
                    change: -6,
                    index: 185
                }),
                new StockTeslaItem(
                {
                    date: `2024-03-14`,
                    open: 180,
                    high: 182.9,
                    low: 160.5,
                    close: 162.5,
                    volume: 701227950,
                    change: -9.7,
                    index: 186
                }),
                new StockTeslaItem(
                {
                    date: `2024-03-25`,
                    open: 163.2,
                    high: 178.2,
                    low: 160.8,
                    close: 172.6,
                    volume: 589466660,
                    change: 5.8,
                    index: 187
                }),
                new StockTeslaItem(
                {
                    date: `2024-04-04`,
                    open: 178.6,
                    high: 184.2,
                    low: 163.3,
                    close: 171.1,
                    volume: 676969950,
                    change: -4.2,
                    index: 188
                }),
                new StockTeslaItem(
                {
                    date: `2024-04-15`,
                    open: 169.1,
                    high: 179.2,
                    low: 160.5,
                    close: 161.5,
                    volume: 694829970,
                    change: -4.5,
                    index: 189
                }),
                new StockTeslaItem(
                {
                    date: `2024-04-24`,
                    open: 156.7,
                    high: 168,
                    low: 138.8,
                    close: 162.1,
                    volume: 775433710,
                    change: 3.4,
                    index: 190
                }),
                new StockTeslaItem(
                {
                    date: `2024-05-03`,
                    open: 159,
                    high: 198.9,
                    low: 158.4,
                    close: 181.2,
                    volume: 864614000,
                    change: 14,
                    index: 191
                }),
                new StockTeslaItem(
                {
                    date: `2024-05-14`,
                    open: 183.8,
                    high: 187.6,
                    low: 167.8,
                    close: 177.6,
                    volume: 531409380,
                    change: -3.4,
                    index: 192
                }),
                new StockTeslaItem(
                {
                    date: `2024-05-23`,
                    open: 179.9,
                    high: 186.9,
                    low: 171.4,
                    close: 173.7,
                    volume: 554203970,
                    change: -3.4,
                    index: 193
                }),
                new StockTeslaItem(
                {
                    date: `2024-06-04`,
                    open: 174.8,
                    high: 182.7,
                    low: 173.2,
                    close: 174.8,
                    volume: 453828370,
                    change: 0,
                    index: 194
                }),
                new StockTeslaItem(
                {
                    date: `2024-06-13`,
                    open: 175.4,
                    high: 191.1,
                    low: 167.4,
                    close: 182.5,
                    volume: 509090870,
                    change: 4.1,
                    index: 195
                }),
                new StockTeslaItem(
                {
                    date: `2024-06-25`,
                    open: 185.8,
                    high: 188.8,
                    low: 176.9,
                    close: 187.4,
                    volume: 505399520,
                    change: 0.8,
                    index: 196
                }),
                new StockTeslaItem(
                {
                    date: `2024-07-05`,
                    open: 186.5,
                    high: 252.4,
                    low: 186.4,
                    close: 251.5,
                    volume: 925723660,
                    change: 34.8,
                    index: 197
                }),
                new StockTeslaItem(
                {
                    date: `2024-07-16`,
                    open: 247.7,
                    high: 271,
                    low: 233.1,
                    close: 256.6,
                    volume: 1097390000,
                    change: 3.6,
                    index: 198
                }),
                new StockTeslaItem(
                {
                    date: `2024-07-25`,
                    open: 252.7,
                    high: 258.5,
                    low: 214.7,
                    close: 220.2,
                    volume: 795590700,
                    change: -12.9,
                    index: 199
                }),
                new StockTeslaItem(
                {
                    date: `2024-08-05`,
                    open: 221.2,
                    high: 234.7,
                    low: 182,
                    close: 198.9,
                    volume: 658914080,
                    change: -10.1,
                    index: 200
                }),
                new StockTeslaItem(
                {
                    date: `2024-08-14`,
                    open: 200.8,
                    high: 208.5,
                    low: 191.5,
                    close: 201.4,
                    volume: 479168160,
                    change: 0.3,
                    index: 201
                }),
                new StockTeslaItem(
                {
                    date: `2024-08-23`,
                    open: 205,
                    high: 228.2,
                    low: 204.8,
                    close: 220.3,
                    volume: 560235700,
                    change: 7.5,
                    index: 202
                }),
                new StockTeslaItem(
                {
                    date: `2024-09-04`,
                    open: 218.8,
                    high: 222.2,
                    low: 202.6,
                    close: 219.4,
                    volume: 469284350,
                    change: 0.3,
                    index: 203
                }),
                new StockTeslaItem(
                {
                    date: `2024-09-13`,
                    open: 223.5,
                    high: 235,
                    low: 210.5,
                    close: 230.3,
                    volume: 592950440,
                    change: 3,
                    index: 204
                }),
                new StockTeslaItem(
                {
                    date: `2024-09-24`,
                    open: 229.3,
                    high: 257.2,
                    low: 223.5,
                    close: 254.3,
                    volume: 577086700,
                    change: 10.9,
                    index: 205
                }),
                new StockTeslaItem(
                {
                    date: `2024-10-03`,
                    open: 252.5,
                    high: 264.9,
                    low: 237.8,
                    close: 240.7,
                    volume: 546148740,
                    change: -4.7,
                    index: 206
                }),
                new StockTeslaItem(
                {
                    date: `2024-10-14`,
                    open: 246.7,
                    high: 251,
                    low: 213.7,
                    close: 219.2,
                    volume: 589440130,
                    change: -11.2,
                    index: 207
                }),
                new StockTeslaItem(
                {
                    date: `2024-10-23`,
                    open: 220,
                    high: 224.3,
                    low: 212.1,
                    close: 213.6,
                    volume: 384561880,
                    change: -2.9,
                    index: 208
                }),
                new StockTeslaItem(
                {
                    date: `2024-11-01`,
                    open: 244.7,
                    high: 273.5,
                    low: 242.6,
                    close: 249,
                    volume: 732392780,
                    change: 1.8,
                    index: 209
                }),
                new StockTeslaItem(
                {
                    date: `2024-11-12`,
                    open: 244.6,
                    high: 358.6,
                    low: 238.9,
                    close: 328.5,
                    volume: 991653160,
                    change: 34.3,
                    index: 210
                }),
                new StockTeslaItem(
                {
                    date: `2024-11-21`,
                    open: 335.8,
                    high: 348.5,
                    low: 309.2,
                    close: 339.6,
                    volume: 700324320,
                    change: 1.1,
                    index: 211
                }),
                new StockTeslaItem(
                {
                    date: `2024-12-03`,
                    open: 341.1,
                    high: 361.9,
                    low: 326.6,
                    close: 351.4,
                    volume: 478645220,
                    change: 3,
                    index: 212
                }),
                new StockTeslaItem(
                {
                    date: `2024-12-12`,
                    open: 353,
                    high: 429.3,
                    low: 348.6,
                    close: 418.1,
                    volume: 599082110,
                    change: 18.4,
                    index: 213
                }),
                new StockTeslaItem(
                {
                    date: `2024-12-23`,
                    open: 420,
                    high: 481.5,
                    low: 415.4,
                    close: 430.6,
                    volume: 807128120,
                    change: 2.5,
                    index: 214
                }),
                new StockTeslaItem(
                {
                    date: `2025-01-03`,
                    open: 435.9,
                    high: 465.3,
                    low: 373,
                    close: 410.4,
                    volume: 565769940,
                    change: -5.8,
                    index: 215
                }),
                new StockTeslaItem(
                {
                    date: `2025-01-15`,
                    open: 423.2,
                    high: 429.8,
                    low: 377.3,
                    close: 428.2,
                    volume: 530063170,
                    change: 1.2,
                    index: 216
                }),
                new StockTeslaItem(
                {
                    date: `2025-01-27`,
                    open: 423.5,
                    high: 439.7,
                    low: 389,
                    close: 397.2,
                    volume: 476854060,
                    change: -6.2,
                    index: 217
                }),
                new StockTeslaItem(
                {
                    date: `2025-02-05`,
                    open: 396.9,
                    high: 420,
                    low: 374.4,
                    close: 378.2,
                    volume: 507024510,
                    change: -4.7,
                    index: 218
                }),
                new StockTeslaItem(
                {
                    date: `2025-02-14`,
                    open: 373,
                    high: 380.6,
                    low: 325.1,
                    close: 355.8,
                    volume: 607376290,
                    change: -4.6,
                    index: 219
                }),
                new StockTeslaItem(
                {
                    date: `2025-02-26`,
                    open: 355,
                    high: 367.3,
                    low: 288,
                    close: 290.8,
                    volume: 549149490,
                    change: -18.1,
                    index: 220
                }),
                new StockTeslaItem(
                {
                    date: `2025-03-07`,
                    open: 291.2,
                    high: 303.9,
                    low: 250.7,
                    close: 262.7,
                    volume: 754567280,
                    change: -9.8,
                    index: 221
                }),
                new StockTeslaItem(
                {
                    date: `2025-03-18`,
                    open: 252.5,
                    high: 253.4,
                    low: 217,
                    close: 225.3,
                    volume: 944623000,
                    change: -10.8,
                    index: 222
                }),
                new StockTeslaItem(
                {
                    date: `2025-03-27`,
                    open: 231.6,
                    high: 291.8,
                    low: 229.2,
                    close: 273.1,
                    volume: 982018670,
                    change: 17.9,
                    index: 223
                }),
                new StockTeslaItem(
                {
                    date: `2025-04-07`,
                    open: 275.6,
                    high: 285,
                    low: 214.2,
                    close: 233.3,
                    volume: 1117950500,
                    change: -15.3,
                    index: 224
                }),
                new StockTeslaItem(
                {
                    date: `2025-04-16`,
                    open: 245,
                    high: 274.7,
                    low: 217.8,
                    close: 241.6,
                    volume: 993815820,
                    change: -1.4,
                    index: 225
                }),
                new StockTeslaItem(
                {
                    date: `2025-04-28`,
                    open: 243.5,
                    high: 294.9,
                    low: 222.8,
                    close: 285.9,
                    volume: 866169890,
                    change: 17.4,
                    index: 226
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
