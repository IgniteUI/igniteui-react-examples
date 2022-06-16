export class StockGoogleItem {
    public constructor(init: Partial<StockGoogleItem>) {
        Object.assign(this, init);
    }
    
    public date: string;
    public open: number;
    public high: number;
    public low: number;
    public close: number;
    public volume: number;

}
export class StockGoogle extends Array<StockGoogleItem> {
    public constructor() {
        super();
        this.push(new StockGoogleItem(
        {
            date: `2014-03-01`,
            open: 559.6,
            high: 568.2,
            low: 558.4,
            close: 566.9,
            volume: 2182626
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-02`,
            open: 562.4,
            high: 571.8,
            low: 561.4,
            close: 567,
            volume: 2088804
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-03`,
            open: 569.9,
            high: 587.3,
            low: 564.1,
            close: 569.7,
            volume: 5087530
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-04`,
            open: 574.6,
            high: 577.8,
            low: 543,
            close: 543.1,
            volume: 6377658
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-07`,
            open: 540.7,
            high: 548.5,
            low: 527.1,
            close: 538.1,
            volume: 4389569
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-08`,
            open: 542.6,
            high: 555,
            low: 541.6,
            close: 554.9,
            volume: 3152406
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-09`,
            open: 559.6,
            high: 565.4,
            low: 553,
            close: 564.1,
            volume: 3324742
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-10`,
            open: 565,
            high: 565,
            low: 539.9,
            close: 541,
            volume: 4027743
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-11`,
            open: 532.5,
            high: 540,
            low: 526.5,
            close: 530.6,
            volume: 3916171
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-14`,
            open: 538.3,
            high: 544.1,
            low: 529.6,
            close: 532.5,
            volume: 2568020
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-15`,
            open: 536.8,
            high: 538.5,
            low: 518.5,
            close: 536.4,
            volume: 3847453
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-16`,
            open: 543,
            high: 557,
            low: 540,
            close: 556.5,
            volume: 4879889
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-17`,
            open: 548.8,
            high: 549.5,
            low: 531.1,
            close: 536.1,
            volume: 6795393
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-21`,
            open: 536.1,
            high: 536.7,
            low: 525.6,
            close: 528.6,
            volume: 2561214
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-22`,
            open: 528.6,
            high: 537.2,
            low: 527.5,
            close: 534.8,
            volume: 2359421
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-23`,
            open: 533.8,
            high: 533.9,
            low: 526.3,
            close: 526.9,
            volume: 2051066
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-24`,
            open: 530.1,
            high: 531.6,
            low: 522.1,
            close: 525.2,
            volume: 1881965
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-25`,
            open: 522.5,
            high: 524.7,
            low: 515.4,
            close: 516.2,
            volume: 2097264
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-28`,
            open: 517.2,
            high: 518.6,
            low: 502.8,
            close: 517.1,
            volume: 3326429
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-29`,
            open: 516.9,
            high: 529.5,
            low: 516.3,
            close: 527.7,
            volume: 2692489
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-03-30`,
            open: 527.6,
            high: 528,
            low: 522.5,
            close: 526.7,
            volume: 1746904
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-01`,
            open: 527.1,
            high: 532.9,
            low: 523.9,
            close: 531.4,
            volume: 1900432
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-02`,
            open: 533.8,
            high: 534,
            low: 525.6,
            close: 527.9,
            volume: 1685042
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-05`,
            open: 524.8,
            high: 528.9,
            low: 521.3,
            close: 527.8,
            volume: 1021408
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-06`,
            open: 525.2,
            high: 526.8,
            low: 515.1,
            close: 515.1,
            volume: 1684381
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-07`,
            open: 515.8,
            high: 516.7,
            low: 503.3,
            close: 510,
            volume: 3216077
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-08`,
            open: 508.5,
            high: 517.2,
            low: 506.4,
            close: 511,
            volume: 2016131
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-09`,
            open: 510.8,
            high: 519.9,
            low: 504.2,
            close: 518.7,
            volume: 2432783
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-12`,
            open: 523.5,
            high: 530.2,
            low: 519,
            close: 529.9,
            volume: 1908392
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-13`,
            open: 530.9,
            high: 536.1,
            low: 529.5,
            close: 533.1,
            volume: 1648907
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-14`,
            open: 533,
            high: 533,
            low: 525.3,
            close: 526.6,
            volume: 1191863
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-15`,
            open: 525.7,
            high: 525.9,
            low: 517.4,
            close: 520,
            volume: 1703758
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-16`,
            open: 521.4,
            high: 521.8,
            low: 515.4,
            close: 520.6,
            volume: 1481688
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-19`,
            open: 519.7,
            high: 529.8,
            low: 517.6,
            close: 528.9,
            volume: 1276362
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-20`,
            open: 529.7,
            high: 536.2,
            low: 526.3,
            close: 529.8,
            volume: 1780113
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-21`,
            open: 532.9,
            high: 539.2,
            low: 531.9,
            close: 538.9,
            volume: 1193389
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-22`,
            open: 541.1,
            high: 547.6,
            low: 540.8,
            close: 545.1,
            volume: 1611837
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-23`,
            open: 547.3,
            high: 553.6,
            low: 543.7,
            close: 552.7,
            volume: 1929632
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-27`,
            open: 556,
            high: 566,
            low: 554.4,
            close: 566,
            volume: 2100298
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-28`,
            open: 564.6,
            high: 567.8,
            low: 561,
            close: 561.7,
            volume: 1647717
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-29`,
            open: 563.4,
            high: 564,
            low: 558.7,
            close: 560.1,
            volume: 1350657
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-04-30`,
            open: 560.8,
            high: 561.4,
            low: 555.9,
            close: 559.9,
            volume: 1766794
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-02`,
            open: 560.7,
            high: 560.9,
            low: 545.7,
            close: 553.9,
            volume: 1434989
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-03`,
            open: 551,
            high: 552.3,
            low: 542.5,
            close: 544.9,
            volume: 1861921
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-04`,
            open: 541.5,
            high: 548.6,
            low: 538.8,
            close: 544.7,
            volume: 1812084
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-05`,
            open: 546.4,
            high: 555,
            low: 544.5,
            close: 553.9,
            volume: 1684886
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-06`,
            open: 558.1,
            high: 558.1,
            low: 548.9,
            close: 556.3,
            volume: 1732592
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-09`,
            open: 557.1,
            high: 562.9,
            low: 556,
            close: 562.1,
            volume: 1463676
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-10`,
            open: 560.5,
            high: 563.6,
            low: 557.9,
            close: 560.5,
            volume: 1349444
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-11`,
            open: 558,
            high: 559.9,
            low: 555,
            close: 558.8,
            volume: 1097380
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-12`,
            open: 557.3,
            high: 558,
            low: 548.5,
            close: 551.4,
            volume: 1457104
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-13`,
            open: 552.3,
            high: 552.3,
            low: 545.6,
            close: 551.8,
            volume: 1217176
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-16`,
            open: 549.3,
            high: 549.6,
            low: 541.5,
            close: 544.3,
            volume: 1704027
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-17`,
            open: 544.2,
            high: 545.3,
            low: 539.3,
            close: 543,
            volume: 1445878
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-18`,
            open: 544.9,
            high: 553.6,
            low: 544,
            close: 553.4,
            volume: 1737343
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-19`,
            open: 554.2,
            high: 555,
            low: 548.5,
            close: 554.9,
            volume: 2451341
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-20`,
            open: 556.9,
            high: 557.6,
            low: 550.4,
            close: 556.4,
            volume: 4496962
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-23`,
            open: 555.1,
            high: 565,
            low: 554.3,
            close: 565,
            volume: 1534659
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-24`,
            open: 565.2,
            high: 572.6,
            low: 561,
            close: 564.6,
            volume: 2201789
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-25`,
            open: 565.3,
            high: 580,
            low: 565.2,
            close: 578.6,
            volume: 1964447
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-26`,
            open: 581,
            high: 582.5,
            low: 571.9,
            close: 576,
            volume: 1737210
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-27`,
            open: 577.2,
            high: 579.9,
            low: 573.8,
            close: 577.2,
            volume: 2231174
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-05-30`,
            open: 578.7,
            high: 579.6,
            low: 574.8,
            close: 575.3,
            volume: 1310909
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-01`,
            open: 578.3,
            high: 584.4,
            low: 576.6,
            close: 582.7,
            volume: 1446309
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-02`,
            open: 583.4,
            high: 585.4,
            low: 580.4,
            close: 582.3,
            volume: 1054936
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-03`,
            open: 583.4,
            high: 585,
            low: 580.9,
            close: 584.7,
            volume: 712210
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-07`,
            open: 583.8,
            high: 586.4,
            low: 579.6,
            close: 582.3,
            volume: 1061833
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-08`,
            open: 577.7,
            high: 579.5,
            low: 566.1,
            close: 571.1,
            volume: 1908647
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-09`,
            open: 571.6,
            high: 576.7,
            low: 569.4,
            close: 576.1,
            volume: 1113907
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-10`,
            open: 565.9,
            high: 576.6,
            low: 565,
            close: 571.1,
            volume: 1353317
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-11`,
            open: 571.9,
            high: 580.9,
            low: 571.4,
            close: 579.2,
            volume: 1617569
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-14`,
            open: 582.6,
            high: 585.2,
            low: 578,
            close: 584.9,
            volume: 1852290
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-15`,
            open: 585.7,
            high: 585.8,
            low: 576.6,
            close: 584.8,
            volume: 1618815
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-16`,
            open: 588,
            high: 588.4,
            low: 582.2,
            close: 582.7,
            volume: 1394560
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-17`,
            open: 579.5,
            high: 581,
            low: 568.6,
            close: 573.7,
            volume: 3015475
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-18`,
            open: 593,
            high: 596.8,
            low: 582,
            close: 595.1,
            volume: 4006389
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-21`,
            open: 591.8,
            high: 594.4,
            low: 585.2,
            close: 589.5,
            volume: 2060334
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-22`,
            open: 590.7,
            high: 599.6,
            low: 590.6,
            close: 594.7,
            volume: 1694787
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-23`,
            open: 593.2,
            high: 597.9,
            low: 592.5,
            close: 596,
            volume: 1229846
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-24`,
            open: 596.5,
            high: 599.5,
            low: 591.8,
            close: 593.4,
            volume: 1033341
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-25`,
            open: 590.4,
            high: 591.9,
            low: 587,
            close: 589,
            volume: 932724
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-28`,
            open: 588.1,
            high: 592.5,
            low: 584.8,
            close: 590.6,
            volume: 984161
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-29`,
            open: 588.8,
            high: 589.7,
            low: 583.5,
            close: 585.6,
            volume: 1346647
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-30`,
            open: 586.5,
            high: 589.5,
            low: 584,
            close: 587.4,
            volume: 1013932
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-06-31`,
            open: 580.6,
            high: 583.6,
            low: 570,
            close: 571.6,
            volume: 2099516
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-01`,
            open: 570.4,
            high: 576,
            low: 562.9,
            close: 566.1,
            volume: 1950171
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-04`,
            open: 569,
            high: 575.4,
            low: 564.1,
            close: 573.1,
            volume: 1427169
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-05`,
            open: 570,
            high: 572,
            low: 562.6,
            close: 565.1,
            volume: 1556685
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-06`,
            open: 561.8,
            high: 570.7,
            low: 560,
            close: 566.4,
            volume: 1330877
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-07`,
            open: 568,
            high: 569.9,
            low: 561.1,
            close: 563.4,
            volume: 1108900
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-08`,
            open: 563.6,
            high: 570.3,
            low: 560.4,
            close: 568.8,
            volume: 1492491
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-11`,
            open: 570,
            high: 570.5,
            low: 566,
            close: 567.9,
            volume: 1215968
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-12`,
            open: 564.5,
            high: 565.9,
            low: 560.9,
            close: 562.7,
            volume: 1537758
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-13`,
            open: 567.3,
            high: 575,
            low: 565.8,
            close: 574.8,
            volume: 1437922
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-14`,
            open: 576.2,
            high: 577.9,
            low: 570.9,
            close: 574.6,
            volume: 982926
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-15`,
            open: 577.9,
            high: 579.4,
            low: 570.5,
            close: 573.5,
            volume: 1517056
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-18`,
            open: 576.1,
            high: 584.5,
            low: 576,
            close: 582.2,
            volume: 1282531
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-19`,
            open: 585,
            high: 587.3,
            low: 584,
            close: 586.9,
            volume: 979298
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-20`,
            open: 585.9,
            high: 586.7,
            low: 582.6,
            close: 584.5,
            volume: 1034779
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-21`,
            open: 583.8,
            high: 584.5,
            low: 581.1,
            close: 583.4,
            volume: 912854
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-22`,
            open: 583.6,
            high: 585.2,
            low: 580.6,
            close: 582.6,
            volume: 789484
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-25`,
            open: 584.7,
            high: 585,
            low: 579,
            close: 580.2,
            volume: 1358810
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-26`,
            open: 581.3,
            high: 581.8,
            low: 576.6,
            close: 577.9,
            volume: 1635465
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-27`,
            open: 577.3,
            high: 578.5,
            low: 570.1,
            close: 571,
            volume: 1700161
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-28`,
            open: 569.6,
            high: 573.3,
            low: 567.1,
            close: 569.2,
            volume: 1295963
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-07-29`,
            open: 571.3,
            high: 572,
            low: 567.1,
            close: 571.6,
            volume: 1081231
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-02`,
            open: 571.9,
            high: 577.8,
            low: 571.2,
            close: 577.3,
            volume: 1576830
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-03`,
            open: 580,
            high: 583,
            low: 575,
            close: 577.9,
            volume: 1214586
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-04`,
            open: 580,
            high: 586,
            low: 579.2,
            close: 582,
            volume: 1459956
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-05`,
            open: 584,
            high: 586.5,
            low: 582,
            close: 586.1,
            volume: 1629477
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-08`,
            open: 586.6,
            high: 591.8,
            low: 586.3,
            close: 589.7,
            volume: 1429101
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-09`,
            open: 588.9,
            high: 589,
            low: 580,
            close: 581,
            volume: 1286722
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-10`,
            open: 581.5,
            high: 583.5,
            low: 576.9,
            close: 583.1,
            volume: 975145
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-11`,
            open: 580.4,
            high: 581.8,
            low: 576.3,
            close: 581.4,
            volume: 1217721
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-12`,
            open: 581,
            high: 581.6,
            low: 574.5,
            close: 575.6,
            volume: 1597677
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-15`,
            open: 572.9,
            high: 575,
            low: 568.2,
            close: 573.1,
            volume: 1596224
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-16`,
            open: 572.8,
            high: 581.5,
            low: 572.7,
            close: 580,
            volume: 1478306
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-17`,
            open: 580,
            high: 587.5,
            low: 578.8,
            close: 584.8,
            volume: 1690994
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-18`,
            open: 587,
            high: 589.5,
            low: 585,
            close: 589.3,
            volume: 1442012
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-19`,
            open: 591.5,
            high: 596.5,
            low: 589.5,
            close: 596.1,
            volume: 3727045
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-22`,
            open: 593.8,
            high: 594,
            low: 583.5,
            close: 587.4,
            volume: 1687710
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-23`,
            open: 586.9,
            high: 586.9,
            low: 581,
            close: 581.1,
            volume: 1467703
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-24`,
            open: 581.5,
            high: 589.6,
            low: 580.5,
            close: 588,
            volume: 1724537
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-25`,
            open: 587.5,
            high: 588,
            low: 574.2,
            close: 575.1,
            volume: 1925350
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-26`,
            open: 576.1,
            high: 579.3,
            low: 574.7,
            close: 577.1,
            volume: 1439807
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-29`,
            open: 571.8,
            high: 578.2,
            low: 571.2,
            close: 576.4,
            volume: 1281204
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-08-30`,
            open: 576.9,
            high: 579.9,
            low: 572.9,
            close: 577.4,
            volume: 1618437
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-01`,
            open: 576,
            high: 577.6,
            low: 567,
            close: 568.3,
            volume: 1445027
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-02`,
            open: 567.3,
            high: 571.9,
            low: 563.3,
            close: 570.1,
            volume: 1175307
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-03`,
            open: 573,
            high: 577.2,
            low: 572.5,
            close: 575.3,
            volume: 1138636
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-06`,
            open: 578.8,
            high: 581,
            low: 574.4,
            close: 577.4,
            volume: 1211320
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-07`,
            open: 574.4,
            high: 575.3,
            low: 563.7,
            close: 563.7,
            volume: 1906427
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-08`,
            open: 565.6,
            high: 573.9,
            low: 557.5,
            close: 572.5,
            volume: 1987888
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-09`,
            open: 571.2,
            high: 571.5,
            low: 559.1,
            close: 560.9,
            volume: 2519693
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-10`,
            open: 557.7,
            high: 565.1,
            low: 544,
            close: 544.5,
            volume: 3078634
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-13`,
            open: 545,
            high: 549.5,
            low: 533.1,
            close: 533.2,
            volume: 2578676
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-14`,
            open: 538.9,
            high: 547.2,
            low: 533.2,
            close: 537.9,
            volume: 2217230
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-15`,
            open: 531,
            high: 532.8,
            low: 518.3,
            close: 530,
            volume: 3712536
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-16`,
            open: 519,
            high: 529.4,
            low: 515,
            close: 524.5,
            volume: 3698423
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-17`,
            open: 527.3,
            high: 531,
            low: 508.5,
            close: 511.2,
            volume: 5530674
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-20`,
            open: 509.4,
            high: 521.8,
            low: 508.1,
            close: 520.8,
            volume: 2605505
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-21`,
            open: 525.2,
            high: 526.8,
            low: 519.1,
            close: 526.5,
            volume: 2332531
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-22`,
            open: 529.9,
            high: 539.8,
            low: 528.8,
            close: 532.7,
            volume: 2917183
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-23`,
            open: 539.3,
            high: 547.2,
            low: 535.9,
            close: 544,
            volume: 2345296
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-24`,
            open: 544.4,
            high: 544.9,
            low: 535.8,
            close: 539.8,
            volume: 1972047
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-27`,
            open: 537,
            high: 544.4,
            low: 537,
            close: 540.8,
            volume: 1184973
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-28`,
            open: 543,
            high: 549,
            low: 541.6,
            close: 548.9,
            volume: 1273372
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-29`,
            open: 550,
            high: 554.2,
            low: 547,
            close: 549.3,
            volume: 1767107
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-30`,
            open: 549,
            high: 552.8,
            low: 543.5,
            close: 550.3,
            volume: 1451667
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-09-31`,
            open: 559.4,
            high: 559.6,
            low: 554.8,
            close: 559.1,
            volume: 2032887
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-03`,
            open: 555.5,
            high: 557.9,
            low: 553.2,
            close: 555.2,
            volume: 1378511
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-04`,
            open: 553,
            high: 555.5,
            low: 549.3,
            close: 554.1,
            volume: 1240761
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-05`,
            open: 556.8,
            high: 556.8,
            low: 544,
            close: 545.9,
            volume: 2026740
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-06`,
            open: 545.5,
            high: 546.9,
            low: 541,
            close: 542,
            volume: 1329604
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-07`,
            open: 546.2,
            high: 546.2,
            low: 538.7,
            close: 541,
            volume: 1629259
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-10`,
            open: 541.5,
            high: 549.6,
            low: 541,
            close: 547.5,
            volume: 1131546
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-11`,
            open: 548.5,
            high: 551.9,
            low: 546.3,
            close: 550.3,
            volume: 964866
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-12`,
            open: 550.4,
            high: 550.5,
            low: 545.2,
            close: 547.3,
            volume: 1126594
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-13`,
            open: 549.8,
            high: 549.8,
            low: 543.5,
            close: 545.4,
            volume: 1335719
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-14`,
            open: 546.7,
            high: 546.7,
            low: 542.1,
            close: 544.4,
            volume: 1285991
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-17`,
            open: 543.6,
            high: 543.8,
            low: 534.1,
            close: 536.5,
            volume: 1721282
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-18`,
            open: 537.5,
            high: 541.9,
            low: 534.2,
            close: 535,
            volume: 1957664
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-19`,
            open: 535,
            high: 538.2,
            low: 530.1,
            close: 537,
            volume: 1388440
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-20`,
            open: 531.3,
            high: 535.1,
            low: 531.1,
            close: 534.8,
            volume: 1559131
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-21`,
            open: 541.6,
            high: 542.1,
            low: 536.6,
            close: 537.5,
            volume: 2218249
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-24`,
            open: 537.6,
            high: 542.7,
            low: 535.6,
            close: 539.3,
            volume: 1701682
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-25`,
            open: 539,
            high: 544,
            low: 538.6,
            close: 541.1,
            volume: 1784967
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-26`,
            open: 540.9,
            high: 541.5,
            low: 537,
            close: 540.4,
            volume: 1519503
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-10-28`,
            open: 540.6,
            high: 542,
            low: 536.6,
            close: 541.8,
            volume: 1145231
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-01`,
            open: 538.9,
            high: 541.4,
            low: 531.9,
            close: 533.8,
            volume: 2109599
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-02`,
            open: 533.5,
            high: 535.5,
            low: 529.8,
            close: 533.8,
            volume: 1522481
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-03`,
            open: 531.4,
            high: 536,
            low: 529.3,
            close: 531.3,
            volume: 1279288
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-04`,
            open: 531.2,
            high: 537.3,
            low: 528.6,
            close: 537.3,
            volume: 1392208
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-05`,
            open: 531,
            high: 532.9,
            low: 524.3,
            close: 525.3,
            volume: 2558649
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-08`,
            open: 527.1,
            high: 531,
            low: 523.8,
            close: 527,
            volume: 2327127
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-09`,
            open: 522.1,
            high: 534.2,
            low: 520.5,
            close: 533.4,
            volume: 1871268
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-10`,
            open: 533.1,
            high: 536.3,
            low: 525.6,
            close: 526.1,
            volume: 1716835
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-11`,
            open: 527.8,
            high: 533.9,
            low: 527.1,
            close: 528.3,
            volume: 1610964
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-12`,
            open: 523.5,
            high: 528.5,
            low: 518.7,
            close: 518.7,
            volume: 1989117
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-15`,
            open: 522.7,
            high: 523.1,
            low: 513.3,
            close: 513.8,
            volume: 2812786
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-16`,
            open: 511.6,
            high: 513,
            low: 489,
            close: 495.4,
            volume: 3953371
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-17`,
            open: 497,
            high: 507,
            low: 496.8,
            close: 504.9,
            volume: 2875281
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-18`,
            open: 513,
            high: 513.9,
            low: 504.7,
            close: 511.1,
            volume: 2918730
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-19`,
            open: 511.5,
            high: 517.7,
            low: 506.9,
            close: 516.4,
            volume: 3680148
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-22`,
            open: 516.1,
            high: 526.5,
            low: 516.1,
            close: 524.9,
            volume: 2723599
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-23`,
            open: 527,
            high: 534.6,
            low: 526.3,
            close: 530.6,
            volume: 2191567
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-24`,
            open: 530.5,
            high: 531.8,
            low: 527,
            close: 528.8,
            volume: 704035
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-26`,
            open: 528.8,
            high: 534.3,
            low: 527.3,
            close: 534,
            volume: 1037727
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-29`,
            open: 532.2,
            high: 535.5,
            low: 530,
            close: 530.3,
            volume: 2276104
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-30`,
            open: 528.1,
            high: 531.1,
            low: 527.1,
            close: 530.4,
            volume: 873923
        }));
        this.push(new StockGoogleItem(
        {
            date: `2014-11-31`,
            open: 531.3,
            high: 532.6,
            low: 525.8,
            close: 526.4,
            volume: 1371819
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-02`,
            open: 529,
            high: 531.3,
            low: 524.1,
            close: 524.8,
            volume: 1446662
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-05`,
            open: 523.3,
            high: 524.3,
            low: 513.1,
            close: 513.9,
            volume: 2054238
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-06`,
            open: 515,
            high: 516.2,
            low: 501.1,
            close: 502,
            volume: 2891950
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-07`,
            open: 507,
            high: 507.2,
            low: 499.6,
            close: 501.1,
            volume: 2059366
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-08`,
            open: 498,
            high: 503.5,
            low: 491,
            close: 502.7,
            volume: 3344395
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-09`,
            open: 504.8,
            high: 504.9,
            low: 494.8,
            close: 496.2,
            volume: 2065715
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-12`,
            open: 494.9,
            high: 496,
            low: 487.6,
            close: 492.6,
            volume: 2320446
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-13`,
            open: 498.8,
            high: 503,
            low: 492.4,
            close: 496.2,
            volume: 2365687
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-14`,
            open: 494.6,
            high: 503.2,
            low: 493,
            close: 500.9,
            volume: 2229638
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-15`,
            open: 505.6,
            high: 505.7,
            low: 497.8,
            close: 501.8,
            volume: 2711355
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-16`,
            open: 500,
            high: 508.2,
            low: 500,
            close: 508.1,
            volume: 2292043
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-20`,
            open: 511,
            high: 512.5,
            low: 506,
            close: 506.9,
            volume: 2225922
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-21`,
            open: 507.3,
            high: 519.3,
            low: 506.2,
            close: 518,
            volume: 2262455
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-22`,
            open: 521.5,
            high: 536.3,
            low: 519.7,
            close: 534.4,
            volume: 2669558
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-23`,
            open: 535.6,
            high: 542.2,
            low: 533,
            close: 540,
            volume: 2275485
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-26`,
            open: 538.5,
            high: 539,
            low: 529.7,
            close: 535.2,
            volume: 1539524
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-27`,
            open: 530,
            high: 530.7,
            low: 518.2,
            close: 518.6,
            volume: 1898844
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-28`,
            open: 522.8,
            high: 523,
            low: 510,
            close: 510,
            volume: 1679230
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-29`,
            open: 511,
            high: 511.1,
            low: 501.2,
            close: 510.7,
            volume: 4174924
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-00-30`,
            open: 515.9,
            high: 539.9,
            low: 515.5,
            close: 534.5,
            volume: 5590977
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-02`,
            open: 531.7,
            high: 533,
            low: 518.5,
            close: 528.5,
            volume: 2841976
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-03`,
            open: 528,
            high: 533.4,
            low: 523.3,
            close: 529.2,
            volume: 2033085
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-04`,
            open: 529.2,
            high: 532.7,
            low: 521.3,
            close: 522.8,
            volume: 1659125
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-05`,
            open: 523.8,
            high: 528.5,
            low: 522.1,
            close: 527.6,
            volume: 1844687
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-06`,
            open: 527.6,
            high: 537.2,
            low: 526.4,
            close: 531,
            volume: 1758650
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-09`,
            open: 528,
            high: 532,
            low: 526,
            close: 527.8,
            volume: 1264276
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-10`,
            open: 529.3,
            high: 537.7,
            low: 526.9,
            close: 536.9,
            volume: 1745076
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-11`,
            open: 535.3,
            high: 538.5,
            low: 533.4,
            close: 536,
            volume: 1373970
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-12`,
            open: 537.3,
            high: 544.8,
            low: 534.7,
            close: 542.9,
            volume: 1615824
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-13`,
            open: 543.4,
            high: 549.9,
            low: 543.1,
            close: 549,
            volume: 1895126
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-17`,
            open: 546.8,
            high: 550,
            low: 541.1,
            close: 542.8,
            volume: 1612439
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-18`,
            open: 541.4,
            high: 545.5,
            low: 537.5,
            close: 539.7,
            volume: 1449089
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-19`,
            open: 538,
            high: 543.1,
            low: 538,
            close: 542.9,
            volume: 987478
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-20`,
            open: 543.1,
            high: 543.8,
            low: 535.8,
            close: 539,
            volume: 1441212
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-23`,
            open: 536,
            high: 536.4,
            low: 529.4,
            close: 531.9,
            volume: 1453907
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-24`,
            open: 530,
            high: 536.8,
            low: 528.3,
            close: 536.1,
            volume: 1002393
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-25`,
            open: 535.9,
            high: 546.2,
            low: 535.4,
            close: 543.9,
            volume: 1821041
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-26`,
            open: 543.2,
            high: 556.1,
            low: 541.5,
            close: 555.5,
            volume: 2305219
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-01-27`,
            open: 554.2,
            high: 564.7,
            low: 552.9,
            close: 558.4,
            volume: 2403553
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-02`,
            open: 560.5,
            high: 572.1,
            low: 558.8,
            close: 571.3,
            volume: 2123796
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-03`,
            open: 570.5,
            high: 575.4,
            low: 566.5,
            close: 573.6,
            volume: 1700084
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-04`,
            open: 571.9,
            high: 577.1,
            low: 568,
            close: 573.4,
            volume: 1871694
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-05`,
            open: 575,
            high: 577.9,
            low: 573.4,
            close: 575.3,
            volume: 1385818
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-06`,
            open: 574.9,
            high: 576.7,
            low: 566.8,
            close: 567.7,
            volume: 1654561
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-09`,
            open: 566.9,
            high: 570.3,
            low: 563.5,
            close: 568.9,
            volume: 1059336
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-10`,
            open: 564.3,
            high: 564.9,
            low: 554.7,
            close: 555,
            volume: 1787357
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-11`,
            open: 555.1,
            high: 558.1,
            low: 550.7,
            close: 551.2,
            volume: 1815763
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-12`,
            open: 553.5,
            high: 556.4,
            low: 550.5,
            close: 555.5,
            volume: 1385772
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-13`,
            open: 553.5,
            high: 558.4,
            low: 544.2,
            close: 547.3,
            volume: 1698872
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-16`,
            open: 551,
            high: 556.9,
            low: 546,
            close: 554.5,
            volume: 1636493
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-17`,
            open: 551.7,
            high: 553.8,
            low: 548,
            close: 550.8,
            volume: 1800570
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-18`,
            open: 552.5,
            high: 559.8,
            low: 547,
            close: 559.5,
            volume: 2128714
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-19`,
            open: 559.4,
            high: 560.8,
            low: 556.1,
            close: 558,
            volume: 1194049
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-20`,
            open: 561.6,
            high: 561.7,
            low: 559,
            close: 560.4,
            volume: 2609690
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-23`,
            open: 560.4,
            high: 562.4,
            low: 555.8,
            close: 558.8,
            volume: 1639306
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-24`,
            open: 562.6,
            high: 574.6,
            low: 561.2,
            close: 570.2,
            volume: 2576234
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-25`,
            open: 570.5,
            high: 572.3,
            low: 558.7,
            close: 558.8,
            volume: 2146384
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-26`,
            open: 557.6,
            high: 558.9,
            low: 550.6,
            close: 555.2,
            volume: 1568331
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-27`,
            open: 553,
            high: 555.3,
            low: 548.1,
            close: 548.3,
            volume: 1892323
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-30`,
            open: 551.6,
            high: 553.5,
            low: 548.2,
            close: 552,
            volume: 1283958
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-02-31`,
            open: 550,
            high: 554.7,
            low: 546.7,
            close: 548,
            volume: 1583677
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-01`,
            open: 548.6,
            high: 551.1,
            low: 539.5,
            close: 542.6,
            volume: 1957718
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-02`,
            open: 540.9,
            high: 540.9,
            low: 533.9,
            close: 535.5,
            volume: 1711737
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-06`,
            open: 532.2,
            high: 538.4,
            low: 529.6,
            close: 536.8,
            volume: 1320767
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-07`,
            open: 538.1,
            high: 542.7,
            low: 536,
            close: 537,
            volume: 1299298
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-08`,
            open: 538.4,
            high: 543.9,
            low: 538.4,
            close: 541.6,
            volume: 1175332
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-09`,
            open: 541,
            high: 542,
            low: 535.5,
            close: 540.8,
            volume: 1553586
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-10`,
            open: 542.3,
            high: 542.3,
            low: 537.3,
            close: 540,
            volume: 1405574
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-13`,
            open: 538.4,
            high: 544.1,
            low: 537.3,
            close: 539.2,
            volume: 1640809
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-14`,
            open: 536.3,
            high: 537.6,
            low: 528.1,
            close: 530.4,
            volume: 2597043
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-15`,
            open: 528.7,
            high: 534.7,
            low: 523.2,
            close: 532.5,
            volume: 2312512
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-16`,
            open: 529.9,
            high: 535.6,
            low: 529.6,
            close: 533.8,
            volume: 1296304
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-17`,
            open: 528.7,
            high: 529.8,
            low: 521,
            close: 524,
            volume: 2145955
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-20`,
            open: 525.6,
            high: 536.1,
            low: 524.5,
            close: 535.4,
            volume: 1675487
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-21`,
            open: 537.5,
            high: 539.4,
            low: 533.7,
            close: 534,
            volume: 1839668
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-22`,
            open: 534.4,
            high: 541.1,
            low: 531.8,
            close: 539.4,
            volume: 1589248
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-23`,
            open: 541,
            high: 551,
            low: 540.2,
            close: 547,
            volume: 4173376
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-24`,
            open: 566.1,
            high: 571.1,
            low: 557.3,
            close: 565.1,
            volume: 4919031
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-27`,
            open: 563.4,
            high: 566,
            low: 553.2,
            close: 555.4,
            volume: 2398039
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-28`,
            open: 554.6,
            high: 556,
            low: 550.4,
            close: 553.7,
            volume: 1490983
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-29`,
            open: 550.5,
            high: 553.7,
            low: 546.9,
            close: 549.1,
            volume: 1698761
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-03-30`,
            open: 547.9,
            high: 548.6,
            low: 535,
            close: 537.3,
            volume: 2082214
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-01`,
            open: 538.4,
            high: 539.5,
            low: 532.1,
            close: 537.9,
            volume: 1768181
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-04`,
            open: 538.5,
            high: 544.1,
            low: 535.1,
            close: 540.8,
            volume: 1307960
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-05`,
            open: 538.2,
            high: 539.7,
            low: 530.4,
            close: 530.8,
            volume: 1383068
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-06`,
            open: 531.2,
            high: 532.4,
            low: 521.1,
            close: 524.2,
            volume: 1566987
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-07`,
            open: 524,
            high: 533.5,
            low: 521.8,
            close: 530.7,
            volume: 1546278
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-08`,
            open: 536.6,
            high: 541.1,
            low: 536,
            close: 538.2,
            volume: 1527615
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-11`,
            open: 538.4,
            high: 542,
            low: 535.4,
            close: 535.7,
            volume: 905285
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-12`,
            open: 531.6,
            high: 533.2,
            low: 525.3,
            close: 529,
            volume: 1634174
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-13`,
            open: 530.6,
            high: 534.3,
            low: 528.7,
            close: 529.6,
            volume: 1253063
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-14`,
            open: 533.8,
            high: 539,
            low: 532.4,
            close: 538.4,
            volume: 1403935
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-15`,
            open: 539.2,
            high: 539.3,
            low: 530.4,
            close: 533.9,
            volume: 1971343
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-18`,
            open: 532,
            high: 534.8,
            low: 528.9,
            close: 532.3,
            volume: 2003421
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-19`,
            open: 534,
            high: 540.7,
            low: 533,
            close: 537.4,
            volume: 1966947
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-20`,
            open: 538.5,
            high: 542.9,
            low: 533,
            close: 539.3,
            volume: 1430826
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-21`,
            open: 538,
            high: 543.8,
            low: 536,
            close: 542.5,
            volume: 1462695
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-22`,
            open: 540.1,
            high: 544.2,
            low: 539.5,
            close: 540.1,
            volume: 1176214
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-26`,
            open: 538.1,
            high: 539,
            low: 529.9,
            close: 532.3,
            volume: 2406512
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-27`,
            open: 532.8,
            high: 540.5,
            low: 531.7,
            close: 539.8,
            volume: 1525019
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-28`,
            open: 538,
            high: 540.6,
            low: 536.3,
            close: 539.8,
            volume: 1029849
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-04-29`,
            open: 537.4,
            high: 538.6,
            low: 531.5,
            close: 532.1,
            volume: 2597407
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-01`,
            open: 536.8,
            high: 536.8,
            low: 529.8,
            close: 534,
            volume: 1904332
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-02`,
            open: 532.9,
            high: 543,
            low: 531.3,
            close: 539.2,
            volume: 1938989
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-03`,
            open: 539.9,
            high: 543.5,
            low: 537.1,
            close: 540.3,
            volume: 1717036
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-04`,
            open: 537.8,
            high: 540.6,
            low: 534.3,
            close: 536.7,
            volume: 1348337
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-05`,
            open: 536.4,
            high: 537.2,
            low: 532.5,
            close: 533.3,
            volume: 1388220
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-08`,
            open: 533.3,
            high: 534.1,
            low: 526.2,
            close: 526.8,
            volume: 1524139
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-09`,
            open: 527.6,
            high: 529.2,
            low: 523,
            close: 526.7,
            volume: 1455266
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-10`,
            open: 529.4,
            high: 538.4,
            low: 529.4,
            close: 536.7,
            volume: 1814958
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-11`,
            open: 538.4,
            high: 539,
            low: 533,
            close: 534.6,
            volume: 1217536
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-12`,
            open: 531.6,
            high: 533.1,
            low: 530.2,
            close: 532.3,
            volume: 955789
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-15`,
            open: 528,
            high: 528.3,
            low: 524,
            close: 527.2,
            volume: 1632702
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-16`,
            open: 528.4,
            high: 529.6,
            low: 525.6,
            close: 528.1,
            volume: 1071814
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-17`,
            open: 529.4,
            high: 531,
            low: 525.1,
            close: 529.3,
            volume: 1294216
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-18`,
            open: 531,
            high: 538.1,
            low: 530.8,
            close: 536.7,
            volume: 1833109
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-19`,
            open: 537.2,
            high: 538.3,
            low: 533,
            close: 536.7,
            volume: 1893497
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-22`,
            open: 539.6,
            high: 543.7,
            low: 537.5,
            close: 538.2,
            volume: 1250282
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-23`,
            open: 539.6,
            high: 541.5,
            low: 535.3,
            close: 540.5,
            volume: 1197450
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-24`,
            open: 540,
            high: 540,
            low: 535.7,
            close: 537.8,
            volume: 1286608
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-25`,
            open: 538.9,
            high: 540.9,
            low: 535.2,
            close: 535.2,
            volume: 1335697
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-26`,
            open: 537.3,
            high: 537.8,
            low: 531.4,
            close: 531.7,
            volume: 2109130
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-29`,
            open: 525,
            high: 528.6,
            low: 520.5,
            close: 521.5,
            volume: 1937821
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-05-30`,
            open: 526,
            high: 526.3,
            low: 520.5,
            close: 520.5,
            volume: 2235595
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-01`,
            open: 524.7,
            high: 525.7,
            low: 518.2,
            close: 521.8,
            volume: 1961354
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-02`,
            open: 521.1,
            high: 524.6,
            low: 521.1,
            close: 523.4,
            volume: 1235903
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-06`,
            open: 519.5,
            high: 525.3,
            low: 519,
            close: 522.9,
            volume: 1280525
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-07`,
            open: 523.1,
            high: 526.2,
            low: 515.2,
            close: 525,
            volume: 1597229
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-08`,
            open: 521,
            high: 522.7,
            low: 516.1,
            close: 516.8,
            volume: 1296699
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-09`,
            open: 523.1,
            high: 523.8,
            low: 520.4,
            close: 520.7,
            volume: 1842347
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-10`,
            open: 526.3,
            high: 532.6,
            low: 525.5,
            close: 530.1,
            volume: 1956682
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-13`,
            open: 532.9,
            high: 547.1,
            low: 532.4,
            close: 546.5,
            volume: 2206475
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-14`,
            open: 546.8,
            high: 565.9,
            low: 546.7,
            close: 561.1,
            volume: 3244066
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-15`,
            open: 560.1,
            high: 566.5,
            low: 556.8,
            close: 560.2,
            volume: 1784554
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-16`,
            open: 565.1,
            high: 580.7,
            low: 565,
            close: 579.9,
            volume: 4768318
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-17`,
            open: 649,
            high: 674.5,
            low: 645,
            close: 672.9,
            volume: 11164943
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-20`,
            open: 659.2,
            high: 668.9,
            low: 653,
            close: 663,
            volume: 5860872
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-21`,
            open: 655.2,
            high: 673,
            low: 654.3,
            close: 662.3,
            volume: 3377196
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-22`,
            open: 660.9,
            high: 678.6,
            low: 659,
            close: 662.1,
            volume: 3929309
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-23`,
            open: 661.3,
            high: 663.6,
            low: 641,
            close: 644.3,
            volume: 3029109
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-24`,
            open: 647,
            high: 648.2,
            low: 622.5,
            close: 623.6,
            volume: 3625747
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-27`,
            open: 621,
            high: 634.3,
            low: 620.5,
            close: 627.3,
            volume: 2675381
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-28`,
            open: 632.8,
            high: 632.8,
            low: 623.3,
            close: 628,
            volume: 1727327
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-29`,
            open: 628.8,
            high: 633.4,
            low: 622.6,
            close: 631.9,
            volume: 1575069
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-30`,
            open: 630,
            high: 635.2,
            low: 622,
            close: 632.6,
            volume: 1474203
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-06-31`,
            open: 631.4,
            high: 632.9,
            low: 625.5,
            close: 625.6,
            volume: 1706149
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-03`,
            open: 625.3,
            high: 633.1,
            low: 625.3,
            close: 631.2,
            volume: 1304511
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-04`,
            open: 628.4,
            high: 634.8,
            low: 627.2,
            close: 629.3,
            volume: 1490881
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-05`,
            open: 634.3,
            high: 647.9,
            low: 633.2,
            close: 643.8,
            volume: 2334266
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-06`,
            open: 645,
            high: 645.4,
            low: 632.3,
            close: 642.7,
            volume: 1572600
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-07`,
            open: 640.2,
            high: 642.7,
            low: 629.7,
            close: 635.3,
            volume: 1403865
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-10`,
            open: 639.5,
            high: 643.4,
            low: 631.3,
            close: 633.7,
            volume: 1809205
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-11`,
            open: 669.2,
            high: 674.9,
            low: 654.3,
            close: 660.8,
            volume: 5029203
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-12`,
            open: 663.1,
            high: 665,
            low: 652.3,
            close: 659.6,
            volume: 2940803
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-13`,
            open: 659.3,
            high: 664.5,
            low: 651.7,
            close: 656.5,
            volume: 1810749
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-14`,
            open: 655,
            high: 659.9,
            low: 652.7,
            close: 657.1,
            volume: 1072061
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-17`,
            open: 656.8,
            high: 661.4,
            low: 651.2,
            close: 660.9,
            volume: 1051699
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-18`,
            open: 661.9,
            high: 664,
            low: 653.5,
            close: 656.1,
            volume: 1456059
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-19`,
            open: 656.6,
            high: 667,
            low: 654.2,
            close: 660.9,
            volume: 2134098
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-20`,
            open: 655.5,
            high: 663,
            low: 642.9,
            close: 646.8,
            volume: 2855299
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-21`,
            open: 639.8,
            high: 640,
            low: 612.3,
            close: 612.5,
            volume: 4265183
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-24`,
            open: 573,
            high: 614,
            low: 565,
            close: 589.6,
            volume: 5770302
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-25`,
            open: 614.9,
            high: 617.5,
            low: 581.1,
            close: 582.1,
            volume: 3537966
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-26`,
            open: 610.4,
            high: 631.7,
            low: 599,
            close: 628.6,
            volume: 4235891
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-27`,
            open: 639.4,
            high: 643.6,
            low: 622,
            close: 637.6,
            volume: 3491336
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-28`,
            open: 632.8,
            high: 636.9,
            low: 624.6,
            close: 630.4,
            volume: 1978733
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-07-31`,
            open: 627.5,
            high: 635.8,
            low: 617.7,
            close: 618.3,
            volume: 2176737
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-01`,
            open: 602.4,
            high: 612.9,
            low: 594.1,
            close: 597.8,
            volume: 3702105
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-02`,
            open: 605.6,
            high: 614.3,
            low: 599.7,
            close: 614.3,
            volume: 2575620
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-03`,
            open: 617,
            high: 619.7,
            low: 602.8,
            close: 606.3,
            volume: 1759572
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-04`,
            open: 600,
            high: 603.5,
            low: 595.3,
            close: 600.7,
            volume: 2089453
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-08`,
            open: 612.5,
            high: 616.3,
            low: 604.1,
            close: 614.7,
            volume: 2279538
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-09`,
            open: 621.2,
            high: 626.5,
            low: 609.6,
            close: 612.7,
            volume: 1702094
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-10`,
            open: 613.1,
            high: 624.2,
            low: 611.4,
            close: 621.4,
            volume: 1900526
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-11`,
            open: 619.8,
            high: 625.8,
            low: 617.4,
            close: 625.8,
            volume: 1373545
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-14`,
            open: 625.7,
            high: 625.9,
            low: 619.4,
            close: 623.2,
            volume: 1702271
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-15`,
            open: 626.7,
            high: 638.7,
            low: 623.8,
            close: 635.1,
            volume: 2084397
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-16`,
            open: 635.5,
            high: 638,
            low: 632.3,
            close: 636,
            volume: 1286454
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-17`,
            open: 637.8,
            high: 650.9,
            low: 635,
            close: 642.9,
            volume: 2274690
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-18`,
            open: 636.8,
            high: 640,
            low: 627,
            close: 629.3,
            volume: 5133386
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-21`,
            open: 634.4,
            high: 636.5,
            low: 625.9,
            close: 635.4,
            volume: 1788506
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-22`,
            open: 627,
            high: 627.5,
            low: 615.4,
            close: 622.7,
            volume: 2562869
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-23`,
            open: 622,
            high: 628.9,
            low: 620,
            close: 622.4,
            volume: 1470949
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-24`,
            open: 616.6,
            high: 627.3,
            low: 612.4,
            close: 625.8,
            volume: 2240098
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-25`,
            open: 629.8,
            high: 629.8,
            low: 611,
            close: 612,
            volume: 2174009
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-28`,
            open: 610.3,
            high: 614.6,
            low: 589.4,
            close: 594.9,
            volume: 3127667
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-29`,
            open: 597.3,
            high: 605,
            low: 590.2,
            close: 595,
            volume: 2310284
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-08-30`,
            open: 603.3,
            high: 608.8,
            low: 600.7,
            close: 608.4,
            volume: 2413441
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-01`,
            open: 608.4,
            high: 612.1,
            low: 599.9,
            close: 611.3,
            volume: 1867601
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-02`,
            open: 607.2,
            high: 627.3,
            low: 603.1,
            close: 626.9,
            volume: 2684805
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-05`,
            open: 632,
            high: 643,
            low: 627,
            close: 641.5,
            volume: 1787880
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-06`,
            open: 638.8,
            high: 649.3,
            low: 636.5,
            close: 645.4,
            volume: 2166264
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-07`,
            open: 649.2,
            high: 650.6,
            low: 632.1,
            close: 642.4,
            volume: 2089776
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-08`,
            open: 641.4,
            high: 644.5,
            low: 625.6,
            close: 639.2,
            volume: 2180441
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-09`,
            open: 640,
            high: 646,
            low: 635.3,
            close: 643.6,
            volume: 1645844
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-12`,
            open: 642.1,
            high: 648.5,
            low: 639,
            close: 646.7,
            volume: 1275206
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-13`,
            open: 643.1,
            high: 657.8,
            low: 643.1,
            close: 652.3,
            volume: 1790704
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-14`,
            open: 653.2,
            high: 659.4,
            low: 648.9,
            close: 651.2,
            volume: 1412040
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-15`,
            open: 654.7,
            high: 663.1,
            low: 654.5,
            close: 661.7,
            volume: 1830524
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-16`,
            open: 664.1,
            high: 665,
            low: 657.2,
            close: 662.2,
            volume: 1606138
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-19`,
            open: 661.2,
            high: 666.8,
            low: 659.6,
            close: 666.1,
            volume: 1465339
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-20`,
            open: 664,
            high: 664.7,
            low: 644.2,
            close: 650.3,
            volume: 2490016
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-21`,
            open: 654.1,
            high: 655.9,
            low: 641.7,
            close: 642.6,
            volume: 1791099
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-22`,
            open: 646.7,
            high: 657.8,
            low: 644,
            close: 651.8,
            volume: 3782103
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-23`,
            open: 727.5,
            high: 730,
            low: 701.5,
            close: 702,
            volume: 6642504
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-26`,
            open: 701.5,
            high: 719.1,
            low: 701.3,
            close: 712.8,
            volume: 2701629
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-27`,
            open: 707.4,
            high: 713.6,
            low: 704.5,
            close: 708.5,
            volume: 2224309
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-28`,
            open: 707.3,
            high: 713,
            low: 703.1,
            close: 713,
            volume: 2176623
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-29`,
            open: 710.5,
            high: 718.3,
            low: 710,
            close: 716.9,
            volume: 1454128
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-09-30`,
            open: 715.7,
            high: 718,
            low: 710,
            close: 710.8,
            volume: 1903980
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-02`,
            open: 711.1,
            high: 721.6,
            low: 705.9,
            close: 721.1,
            volume: 1871073
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-03`,
            open: 718.9,
            high: 724.6,
            low: 714.7,
            close: 722.2,
            volume: 1560770
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-04`,
            open: 722,
            high: 733.1,
            low: 721.9,
            close: 728.1,
            volume: 1704575
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-05`,
            open: 729.5,
            high: 739.5,
            low: 729.5,
            close: 731.3,
            volume: 1860367
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-06`,
            open: 731.5,
            high: 735.4,
            low: 727,
            close: 733.8,
            volume: 1509656
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-09`,
            open: 730.2,
            high: 734.7,
            low: 719.4,
            close: 724.9,
            volume: 2065619
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-10`,
            open: 724.4,
            high: 730.6,
            low: 718.5,
            close: 728.3,
            volume: 1603937
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-11`,
            open: 732.5,
            high: 741,
            low: 730.2,
            close: 735.4,
            volume: 1366375
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-12`,
            open: 731,
            high: 737.8,
            low: 728.6,
            close: 731.2,
            volume: 1668048
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-13`,
            open: 729.2,
            high: 731.1,
            low: 716.7,
            close: 717,
            volume: 2062982
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-16`,
            open: 715.6,
            high: 729.5,
            low: 711.3,
            close: 729,
            volume: 1891074
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-17`,
            open: 729.3,
            high: 731.8,
            low: 723,
            close: 725.3,
            volume: 1491709
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-18`,
            open: 727.6,
            high: 741.4,
            low: 727,
            close: 740,
            volume: 1671588
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-19`,
            open: 738.7,
            high: 742,
            low: 737.4,
            close: 738.4,
            volume: 1327109
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-20`,
            open: 746.5,
            high: 757.9,
            low: 743,
            close: 756.6,
            volume: 2212302
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-23`,
            open: 757.5,
            high: 762.7,
            low: 751.8,
            close: 756,
            volume: 1414487
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-24`,
            open: 752,
            high: 755.3,
            low: 737.6,
            close: 748.3,
            volume: 2333130
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-25`,
            open: 748.1,
            high: 752,
            low: 746.1,
            close: 748.1,
            volume: 1122224
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-27`,
            open: 748.5,
            high: 753.4,
            low: 747.5,
            close: 750.3,
            volume: 838518
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-10-30`,
            open: 748.8,
            high: 754.9,
            low: 741.3,
            close: 742.6,
            volume: 2035261
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-01`,
            open: 747.1,
            high: 769,
            low: 746.7,
            close: 767,
            volume: 2129940
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-02`,
            open: 768.9,
            high: 776,
            low: 759,
            close: 762.4,
            volume: 2195686
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-03`,
            open: 766,
            high: 769,
            low: 745.6,
            close: 752.5,
            volume: 2590641
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-04`,
            open: 753.1,
            high: 768.5,
            low: 750,
            close: 766.8,
            volume: 2757283
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-07`,
            open: 767.8,
            high: 768.7,
            low: 755.1,
            close: 763.3,
            volume: 1812314
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-08`,
            open: 757.9,
            high: 764.8,
            low: 754.2,
            close: 762.4,
            volume: 1829475
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-09`,
            open: 759.2,
            high: 764.2,
            low: 737,
            close: 751.6,
            volume: 2699990
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-10`,
            open: 752.9,
            high: 755.9,
            low: 743.8,
            close: 749.5,
            volume: 1988380
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-11`,
            open: 741.2,
            high: 745.7,
            low: 736.8,
            close: 738.9,
            volume: 2224410
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-14`,
            open: 741.8,
            high: 748.7,
            low: 724.2,
            close: 747.8,
            volume: 2412497
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-15`,
            open: 753,
            high: 758.1,
            low: 743,
            close: 743.4,
            volume: 2666229
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-16`,
            open: 750,
            high: 760.6,
            low: 739.4,
            close: 758.1,
            volume: 1993251
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-17`,
            open: 762.4,
            high: 762.7,
            low: 749,
            close: 749.4,
            volume: 1553418
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-18`,
            open: 746.5,
            high: 754.1,
            low: 738.1,
            close: 739.3,
            volume: 3148743
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-21`,
            open: 746.1,
            high: 750,
            low: 740,
            close: 747.8,
            volume: 1525703
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-22`,
            open: 751.6,
            high: 754.9,
            low: 745.5,
            close: 750,
            volume: 1365520
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-23`,
            open: 753.5,
            high: 754.2,
            low: 744,
            close: 750.3,
            volume: 1566726
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-24`,
            open: 749.5,
            high: 751.4,
            low: 746.6,
            close: 748.4,
            volume: 527223
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-28`,
            open: 752.9,
            high: 763,
            low: 749.5,
            close: 762.5,
            volume: 1515716
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-29`,
            open: 766.7,
            high: 780,
            low: 766.4,
            close: 776.6,
            volume: 1765012
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-30`,
            open: 776.6,
            high: 777.6,
            low: 766.9,
            close: 771,
            volume: 1293521
        }));
        this.push(new StockGoogleItem(
        {
            date: `2015-11-31`,
            open: 769.5,
            high: 769.5,
            low: 758.3,
            close: 758.9,
            volume: 1500923
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-04`,
            open: 743,
            high: 744.1,
            low: 731.3,
            close: 741.8,
            volume: 3258199
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-05`,
            open: 746.5,
            high: 752,
            low: 738.6,
            close: 742.6,
            volume: 1950691
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-06`,
            open: 730,
            high: 747.2,
            low: 728.9,
            close: 743.6,
            volume: 1947034
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-07`,
            open: 730.3,
            high: 738.5,
            low: 719.1,
            close: 726.4,
            volume: 2963741
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-08`,
            open: 731.5,
            high: 733.2,
            low: 713,
            close: 714.5,
            volume: 2450857
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-11`,
            open: 716.6,
            high: 718.9,
            low: 703.5,
            close: 716,
            volume: 2090621
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-12`,
            open: 721.7,
            high: 728.8,
            low: 717.3,
            close: 726.1,
            volume: 2024509
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-13`,
            open: 730.9,
            high: 734.7,
            low: 698.6,
            close: 700.6,
            volume: 2468295
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-14`,
            open: 705.4,
            high: 721.9,
            low: 689.1,
            close: 714.7,
            volume: 2211853
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-15`,
            open: 692.3,
            high: 706.7,
            low: 685.4,
            close: 694.5,
            volume: 3592449
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-19`,
            open: 703.3,
            high: 710,
            low: 693.4,
            close: 701.8,
            volume: 2258479
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-20`,
            open: 688.6,
            high: 706.9,
            low: 673.3,
            close: 698.5,
            volume: 3439386
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-21`,
            open: 702.2,
            high: 719.2,
            low: 694.5,
            close: 706.6,
            volume: 2410263
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-22`,
            open: 723.6,
            high: 728.1,
            low: 720.1,
            close: 725.3,
            volume: 2006528
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-25`,
            open: 723.6,
            high: 729.7,
            low: 710,
            close: 711.7,
            volume: 1704641
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-26`,
            open: 713.9,
            high: 718.3,
            low: 706.5,
            close: 713,
            volume: 1324300
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-27`,
            open: 713.7,
            high: 718.2,
            low: 694.4,
            close: 700,
            volume: 2139970
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-28`,
            open: 722.2,
            high: 733.7,
            low: 712.4,
            close: 731,
            volume: 2658016
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-00-29`,
            open: 731.5,
            high: 745,
            low: 726.8,
            close: 743,
            volume: 3394935
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-01`,
            open: 750.5,
            high: 757.9,
            low: 743.3,
            close: 752,
            volume: 4801816
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-02`,
            open: 784.5,
            high: 789.9,
            low: 764.6,
            close: 764.6,
            volume: 6332431
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-03`,
            open: 770.2,
            high: 774.5,
            low: 720.5,
            close: 727,
            volume: 6162333
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-04`,
            open: 722.8,
            high: 727,
            low: 701.9,
            close: 708,
            volume: 5145855
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-05`,
            open: 703.9,
            high: 704,
            low: 680.1,
            close: 683.6,
            volume: 5069985
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-08`,
            open: 667.9,
            high: 684,
            low: 663.1,
            close: 682.7,
            volume: 4212541
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-09`,
            open: 672.3,
            high: 699.9,
            low: 668.8,
            close: 678.1,
            volume: 3604335
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-10`,
            open: 686.9,
            high: 701.3,
            low: 682.1,
            close: 684.1,
            volume: 2627379
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-11`,
            open: 675,
            high: 689.4,
            low: 668.9,
            close: 683.1,
            volume: 3007223
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-12`,
            open: 690.3,
            high: 693.8,
            low: 678.6,
            close: 682.4,
            volume: 2129831
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-16`,
            open: 693,
            high: 698,
            low: 685,
            close: 691,
            volume: 2497024
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-17`,
            open: 699,
            high: 709.8,
            low: 691.4,
            close: 708.4,
            volume: 2466808
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-18`,
            open: 710,
            high: 712.4,
            low: 696,
            close: 697.4,
            volume: 1859130
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-19`,
            open: 695,
            high: 703.1,
            low: 694,
            close: 700.9,
            volume: 1582260
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-22`,
            open: 707.5,
            high: 713.2,
            low: 702.5,
            close: 706.5,
            volume: 1946067
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-23`,
            open: 701.5,
            high: 708.4,
            low: 693.6,
            close: 695.9,
            volume: 1999699
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-24`,
            open: 688.9,
            high: 700,
            low: 680.8,
            close: 699.6,
            volume: 1958611
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-25`,
            open: 700,
            high: 706,
            low: 690.6,
            close: 705.8,
            volume: 1631855
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-26`,
            open: 708.6,
            high: 713.4,
            low: 700.9,
            close: 705.1,
            volume: 2239978
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-01-29`,
            open: 700.3,
            high: 710.9,
            low: 697.7,
            close: 697.8,
            volume: 2280280
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-01`,
            open: 703.6,
            high: 718.8,
            low: 699.8,
            close: 718.8,
            volume: 2147442
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-02`,
            open: 719,
            high: 720,
            low: 712,
            close: 718.9,
            volume: 1627753
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-03`,
            open: 718.7,
            high: 719.5,
            low: 706,
            close: 712.4,
            volume: 1956761
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-04`,
            open: 715,
            high: 716.5,
            low: 706,
            close: 710.9,
            volume: 1967873
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-07`,
            open: 706.9,
            high: 708.1,
            low: 686.9,
            close: 695.2,
            volume: 2985094
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-08`,
            open: 688.6,
            high: 703.8,
            low: 685.3,
            close: 694,
            volume: 2063357
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-09`,
            open: 698.5,
            high: 705.7,
            low: 694,
            close: 705.2,
            volume: 1418704
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-10`,
            open: 708.1,
            high: 716.4,
            low: 703.4,
            close: 712.8,
            volume: 2829412
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-11`,
            open: 720,
            high: 726.9,
            low: 717.1,
            close: 726.8,
            volume: 1963907
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-14`,
            open: 726.8,
            high: 735.5,
            low: 725.1,
            close: 730.5,
            volume: 1716910
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-15`,
            open: 726.9,
            high: 732.3,
            low: 724.8,
            close: 728.3,
            volume: 1720965
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-16`,
            open: 726.4,
            high: 737.5,
            low: 724.5,
            close: 736.1,
            volume: 1572329
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-17`,
            open: 736.5,
            high: 743.1,
            low: 736,
            close: 737.8,
            volume: 1856800
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-18`,
            open: 741.9,
            high: 742,
            low: 731.8,
            close: 737.6,
            volume: 2796376
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-21`,
            open: 736.5,
            high: 742.5,
            low: 733.5,
            close: 742.1,
            volume: 1831839
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-22`,
            open: 737.5,
            high: 745,
            low: 737.5,
            close: 740.8,
            volume: 1264396
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-23`,
            open: 742.4,
            high: 745.7,
            low: 736.1,
            close: 738.1,
            volume: 1421861
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-24`,
            open: 732,
            high: 737.8,
            low: 731,
            close: 735.3,
            volume: 1564782
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-28`,
            open: 736.8,
            high: 739,
            low: 732.5,
            close: 733.5,
            volume: 1299812
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-29`,
            open: 734.6,
            high: 747.3,
            low: 728.8,
            close: 744.8,
            volume: 1902128
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-30`,
            open: 750.1,
            high: 757.9,
            low: 748.7,
            close: 750.5,
            volume: 1780998
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-02-31`,
            open: 749.3,
            high: 750.9,
            low: 740.9,
            close: 745,
            volume: 1712375
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-01`,
            open: 738.6,
            high: 750.3,
            low: 737,
            close: 749.9,
            volume: 1574870
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-04`,
            open: 750.1,
            high: 752.8,
            low: 742.4,
            close: 745.3,
            volume: 1131843
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-05`,
            open: 738,
            high: 742.8,
            low: 735.4,
            close: 737.8,
            volume: 1129829
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-06`,
            open: 735.8,
            high: 746.2,
            low: 735.6,
            close: 745.7,
            volume: 1050193
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-07`,
            open: 745.4,
            high: 747,
            low: 736.3,
            close: 740.3,
            volume: 1429504
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-08`,
            open: 744,
            high: 745.5,
            low: 735.5,
            close: 739.1,
            volume: 1285755
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-11`,
            open: 743,
            high: 745,
            low: 736,
            close: 736.1,
            volume: 1211762
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-12`,
            open: 738,
            high: 743.8,
            low: 731,
            close: 743.1,
            volume: 1349734
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-13`,
            open: 749.2,
            high: 754.4,
            low: 744.3,
            close: 751.7,
            volume: 1707095
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-14`,
            open: 754,
            high: 757.3,
            low: 752.7,
            close: 753.2,
            volume: 1130971
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-15`,
            open: 754,
            high: 761,
            low: 752.7,
            close: 759,
            volume: 1800413
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-18`,
            open: 760.5,
            high: 768,
            low: 757.3,
            close: 766.6,
            volume: 1555953
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-19`,
            open: 769.5,
            high: 769.9,
            low: 749.3,
            close: 753.9,
            volume: 2027642
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-20`,
            open: 758,
            high: 758.1,
            low: 750,
            close: 752.7,
            volume: 1525591
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-21`,
            open: 755.4,
            high: 760.5,
            low: 749.5,
            close: 759.1,
            volume: 2743620
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-22`,
            open: 726.3,
            high: 736.1,
            low: 713.6,
            close: 718.8,
            volume: 5939199
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-25`,
            open: 716.1,
            high: 723.9,
            low: 715.6,
            close: 723.1,
            volume: 1955567
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-26`,
            open: 725.4,
            high: 725.8,
            low: 703,
            close: 708.1,
            volume: 2727185
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-27`,
            open: 707.3,
            high: 709,
            low: 692.4,
            close: 705.8,
            volume: 3086722
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-28`,
            open: 708.3,
            high: 714.2,
            low: 689.5,
            close: 691,
            volume: 2851108
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-03-29`,
            open: 690.7,
            high: 697.6,
            low: 689,
            close: 693,
            volume: 2484273
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-02`,
            open: 697.6,
            high: 700.6,
            low: 691,
            close: 698.2,
            volume: 1644126
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-03`,
            open: 696.9,
            high: 697.8,
            low: 692,
            close: 692.4,
            volume: 1530993
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-04`,
            open: 690.5,
            high: 699.8,
            low: 689,
            close: 695.7,
            volume: 1688569
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-05`,
            open: 697.7,
            high: 702.3,
            low: 695.7,
            close: 701.4,
            volume: 1677405
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-06`,
            open: 698.4,
            high: 711.9,
            low: 698.1,
            close: 711.1,
            volume: 1826146
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-09`,
            open: 712,
            high: 718.7,
            low: 710,
            close: 712.9,
            volume: 1508423
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-10`,
            open: 716.8,
            high: 723.5,
            low: 715.7,
            close: 723.2,
            volume: 1563105
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-11`,
            open: 723.4,
            high: 724.5,
            low: 712.8,
            close: 715.3,
            volume: 1686823
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-12`,
            open: 717.1,
            high: 719.3,
            low: 709,
            close: 713.3,
            volume: 1360732
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-13`,
            open: 711.9,
            high: 716.7,
            low: 709.3,
            close: 710.8,
            volume: 1307338
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-16`,
            open: 709.1,
            high: 718.5,
            low: 705.6,
            close: 716.5,
            volume: 1316177
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-17`,
            open: 716,
            high: 721.5,
            low: 704.1,
            close: 706.2,
            volume: 1999456
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-18`,
            open: 703.7,
            high: 711.6,
            low: 700.6,
            close: 706.6,
            volume: 1763394
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-19`,
            open: 702.4,
            high: 706,
            low: 696.8,
            close: 700.3,
            volume: 1656321
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-20`,
            open: 701.6,
            high: 714.6,
            low: 700.5,
            close: 709.7,
            volume: 1816027
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-23`,
            open: 706.5,
            high: 711.5,
            low: 704.2,
            close: 704.2,
            volume: 1320927
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-24`,
            open: 706.9,
            high: 721,
            low: 706.9,
            close: 720.1,
            volume: 1920411
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-25`,
            open: 720.8,
            high: 727.5,
            low: 719.7,
            close: 725.3,
            volume: 1629198
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-26`,
            open: 722.9,
            high: 728.3,
            low: 720.3,
            close: 724.1,
            volume: 1542866
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-27`,
            open: 724,
            high: 733.9,
            low: 724,
            close: 732.7,
            volume: 1974026
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-04-31`,
            open: 731.7,
            high: 739.7,
            low: 731.3,
            close: 735.7,
            volume: 2129545
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-01`,
            open: 734.5,
            high: 737.2,
            low: 730.7,
            close: 734.1,
            volume: 1253593
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-02`,
            open: 732.5,
            high: 733,
            low: 724.2,
            close: 730.4,
            volume: 1341807
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-03`,
            open: 729.3,
            high: 729.5,
            low: 720.6,
            close: 722.3,
            volume: 1226253
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-06`,
            open: 724.9,
            high: 724.9,
            low: 714.6,
            close: 716.5,
            volume: 1566059
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-07`,
            open: 719.8,
            high: 722,
            low: 716.5,
            close: 716.6,
            volume: 1336754
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-08`,
            open: 724,
            high: 728.6,
            low: 720.6,
            close: 728.3,
            volume: 1583701
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-09`,
            open: 722.9,
            high: 729.5,
            low: 722.3,
            close: 728.6,
            volume: 988914
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-10`,
            open: 719.5,
            high: 725.9,
            low: 716.4,
            close: 719.4,
            volume: 1216443
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-13`,
            open: 716.5,
            high: 725.4,
            low: 716.5,
            close: 718.4,
            volume: 1258930
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-14`,
            open: 716.5,
            high: 722.5,
            low: 713.1,
            close: 718.3,
            volume: 1306065
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-15`,
            open: 719,
            high: 723,
            low: 717.3,
            close: 718.9,
            volume: 1214517
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-16`,
            open: 714.9,
            high: 716.6,
            low: 703.3,
            close: 710.4,
            volume: 1982471
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-17`,
            open: 708.6,
            high: 708.8,
            low: 688.5,
            close: 691.7,
            volume: 3402357
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-20`,
            open: 698.8,
            high: 702.5,
            low: 693.4,
            close: 693.7,
            volume: 2082538
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-21`,
            open: 698.4,
            high: 702.8,
            low: 692,
            close: 695.9,
            volume: 1465634
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-22`,
            open: 699.1,
            high: 700.9,
            low: 693.1,
            close: 697.5,
            volume: 1184318
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-23`,
            open: 697.5,
            high: 702,
            low: 687,
            close: 701.9,
            volume: 2171415
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-24`,
            open: 675.2,
            high: 689.4,
            low: 673.5,
            close: 675.2,
            volume: 4449022
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-27`,
            open: 671,
            high: 672.3,
            low: 663.3,
            close: 668.3,
            volume: 2641085
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-28`,
            open: 679,
            high: 680.3,
            low: 673,
            close: 680,
            volume: 2173762
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-29`,
            open: 683,
            high: 687.4,
            low: 681.4,
            close: 684.1,
            volume: 1932561
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-05-30`,
            open: 685.5,
            high: 692.3,
            low: 683.6,
            close: 692.1,
            volume: 1597714
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-01`,
            open: 692.2,
            high: 700.6,
            low: 692.1,
            close: 699.2,
            volume: 1344710
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-05`,
            open: 696.1,
            high: 696.9,
            low: 688.9,
            close: 694.5,
            volume: 1462616
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-06`,
            open: 690,
            high: 701.7,
            low: 689.1,
            close: 697.8,
            volume: 1411925
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-07`,
            open: 698.1,
            high: 698.2,
            low: 688.2,
            close: 695.4,
            volume: 1304200
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-08`,
            open: 699.5,
            high: 705.7,
            low: 696.4,
            close: 705.6,
            volume: 1575166
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-11`,
            open: 708,
            high: 716.5,
            low: 707.2,
            close: 715.1,
            volume: 1111762
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-12`,
            open: 719.1,
            high: 722.9,
            low: 715.9,
            close: 720.6,
            volume: 1336921
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-13`,
            open: 723.6,
            high: 724,
            low: 716.9,
            close: 717,
            volume: 935876
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-14`,
            open: 721.6,
            high: 722.2,
            low: 718,
            close: 721,
            volume: 950193
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-15`,
            open: 725.7,
            high: 725.7,
            low: 719.1,
            close: 719.9,
            volume: 1279339
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-18`,
            open: 722.7,
            high: 736.1,
            low: 721.2,
            close: 733.8,
            volume: 1295476
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-19`,
            open: 729.9,
            high: 737,
            low: 729,
            close: 737,
            volume: 1227486
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-20`,
            open: 737.3,
            high: 742.1,
            low: 737.1,
            close: 741.2,
            volume: 1289671
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-21`,
            open: 740.4,
            high: 741.7,
            low: 735.8,
            close: 738.6,
            volume: 1026306
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-22`,
            open: 741.9,
            high: 743.2,
            low: 736.6,
            close: 742.7,
            volume: 1259823
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-25`,
            open: 740.7,
            high: 742.6,
            low: 737.5,
            close: 739.8,
            volume: 1032432
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-26`,
            open: 739,
            high: 741.7,
            low: 734.3,
            close: 738.4,
            volume: 1186738
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-27`,
            open: 738.3,
            high: 744.5,
            low: 737,
            close: 741.8,
            volume: 1512517
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-28`,
            open: 747,
            high: 748.6,
            low: 739.3,
            close: 745.9,
            volume: 3530169
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-06-29`,
            open: 772.7,
            high: 778.5,
            low: 766.8,
            close: 768.8,
            volume: 3841482
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-01`,
            open: 761.1,
            high: 780.4,
            low: 761.1,
            close: 772.9,
            volume: 2700470
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-02`,
            open: 768.7,
            high: 775.8,
            low: 767.9,
            close: 771.1,
            volume: 1784525
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-03`,
            open: 767.2,
            high: 773.2,
            low: 766.8,
            close: 773.2,
            volume: 1287421
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-04`,
            open: 772.2,
            high: 774.1,
            low: 768.8,
            close: 771.6,
            volume: 1140254
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-05`,
            open: 773.8,
            high: 783,
            low: 772.3,
            close: 782.2,
            volume: 1801205
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-08`,
            open: 782,
            high: 782.6,
            low: 778.1,
            close: 781.8,
            volume: 1107857
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-09`,
            open: 781.1,
            high: 788.9,
            low: 780.6,
            close: 784.3,
            volume: 1318894
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-10`,
            open: 783.8,
            high: 786.8,
            low: 782.8,
            close: 784.7,
            volume: 786363
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-11`,
            open: 785,
            high: 789.8,
            low: 783,
            close: 784.9,
            volume: 975113
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-12`,
            open: 781.5,
            high: 783.4,
            low: 780.4,
            close: 783.2,
            volume: 740498
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-15`,
            open: 783.8,
            high: 787.5,
            low: 780.1,
            close: 782.4,
            volume: 938186
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-16`,
            open: 780.3,
            high: 781,
            low: 773.4,
            close: 777.1,
            volume: 1028047
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-17`,
            open: 777.3,
            high: 780.8,
            low: 773.5,
            close: 779.9,
            volume: 924226
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-18`,
            open: 780,
            high: 782.9,
            low: 777,
            close: 777.5,
            volume: 719429
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-19`,
            open: 775,
            high: 777.1,
            low: 773.1,
            close: 775.4,
            volume: 861546
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-22`,
            open: 773.3,
            high: 774.5,
            low: 770,
            close: 772.1,
            volume: 951362
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-23`,
            open: 775.5,
            high: 776.4,
            low: 771.8,
            close: 772.1,
            volume: 928232
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-24`,
            open: 770.6,
            high: 774.5,
            low: 767.1,
            close: 769.6,
            volume: 1071999
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-25`,
            open: 767,
            high: 771.9,
            low: 763.2,
            close: 769.4,
            volume: 926883
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-26`,
            open: 769,
            high: 776.1,
            low: 765.9,
            close: 769.5,
            volume: 1166681
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-29`,
            open: 768.7,
            high: 775,
            low: 766.6,
            close: 772.1,
            volume: 847565
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-30`,
            open: 769.3,
            high: 774.5,
            low: 766.8,
            close: 769.1,
            volume: 1130029
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-07-31`,
            open: 767,
            high: 769.1,
            low: 765.4,
            close: 767,
            volume: 1248556
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-01`,
            open: 769.3,
            high: 771,
            low: 764.3,
            close: 768.8,
            volume: 925131
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-02`,
            open: 773,
            high: 773.9,
            low: 768.4,
            close: 771.5,
            volume: 1072658
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-06`,
            open: 773.5,
            high: 782,
            low: 771,
            close: 780.1,
            volume: 1442822
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-07`,
            open: 780,
            high: 782.7,
            low: 776.2,
            close: 780.4,
            volume: 894021
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-08`,
            open: 778.6,
            high: 780.4,
            low: 773.6,
            close: 775.3,
            volume: 1270264
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-09`,
            open: 770.1,
            high: 773.2,
            low: 759.7,
            close: 759.7,
            volume: 1885496
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-12`,
            open: 755.1,
            high: 770.3,
            low: 754,
            close: 769,
            volume: 1310986
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-13`,
            open: 764.5,
            high: 766.2,
            low: 755.8,
            close: 759.7,
            volume: 1395046
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-14`,
            open: 759.6,
            high: 767.7,
            low: 759.1,
            close: 762.5,
            volume: 1094490
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-15`,
            open: 762.9,
            high: 773.8,
            low: 760,
            close: 771.8,
            volume: 1346751
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-16`,
            open: 769.8,
            high: 769.8,
            low: 764.7,
            close: 768.9,
            volume: 2049338
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-19`,
            open: 772.4,
            high: 774,
            low: 764.4,
            close: 765.7,
            volume: 1172824
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-20`,
            open: 769,
            high: 773.3,
            low: 768.5,
            close: 771.4,
            volume: 978631
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-21`,
            open: 772.7,
            high: 777.2,
            low: 768.3,
            close: 776.2,
            volume: 1167810
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-22`,
            open: 780,
            high: 789.9,
            low: 778.4,
            close: 787.2,
            volume: 1486223
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-23`,
            open: 786.6,
            high: 788.9,
            low: 784.1,
            close: 786.9,
            volume: 1411937
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-26`,
            open: 782.7,
            high: 782.7,
            low: 773.1,
            close: 774.2,
            volume: 1533206
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-27`,
            open: 775.5,
            high: 786,
            low: 774.3,
            close: 783,
            volume: 1153247
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-28`,
            open: 777.9,
            high: 781.8,
            low: 775,
            close: 781.6,
            volume: 1109834
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-29`,
            open: 781.4,
            high: 785.8,
            low: 774.2,
            close: 775,
            volume: 1314746
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-08-30`,
            open: 776.3,
            high: 780.9,
            low: 774.1,
            close: 777.3,
            volume: 1585333
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-03`,
            open: 774.3,
            high: 776.1,
            low: 769.5,
            close: 772.6,
            volume: 1278821
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-04`,
            open: 776,
            high: 778.7,
            low: 772.9,
            close: 776.4,
            volume: 1201350
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-05`,
            open: 779.3,
            high: 782.1,
            low: 775.6,
            close: 776.5,
            volume: 1461151
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-06`,
            open: 779,
            high: 780.5,
            low: 775.5,
            close: 776.9,
            volume: 1070692
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-07`,
            open: 779.7,
            high: 779.7,
            low: 770.8,
            close: 775.1,
            volume: 933158
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-10`,
            open: 777.7,
            high: 789.4,
            low: 775.9,
            close: 785.9,
            volume: 1174923
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-11`,
            open: 786.7,
            high: 792.3,
            low: 780.6,
            close: 783.1,
            volume: 1372461
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-12`,
            open: 783.8,
            high: 788.1,
            low: 782.1,
            close: 786.1,
            volume: 937435
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-13`,
            open: 781.2,
            high: 781.2,
            low: 773,
            close: 778.2,
            volume: 1365277
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-14`,
            open: 781.6,
            high: 784,
            low: 776,
            close: 778.5,
            volume: 852487
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-17`,
            open: 779.8,
            high: 785.9,
            low: 777.5,
            close: 780,
            volume: 1092973
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-18`,
            open: 787.9,
            high: 801.6,
            low: 785.6,
            close: 795.3,
            volume: 2056903
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-19`,
            open: 798.9,
            high: 804.6,
            low: 797.6,
            close: 801.6,
            volume: 1766798
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-20`,
            open: 803.3,
            high: 804,
            low: 796,
            close: 797,
            volume: 1757528
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-21`,
            open: 795,
            high: 799.5,
            low: 794,
            close: 799.4,
            volume: 1266181
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-24`,
            open: 804.9,
            high: 815.2,
            low: 804.8,
            close: 813.1,
            volume: 1697514
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-25`,
            open: 816.7,
            high: 816.7,
            low: 805.1,
            close: 807.7,
            volume: 1576404
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-26`,
            open: 806.3,
            high: 807,
            low: 796.3,
            close: 799.1,
            volume: 1647733
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-27`,
            open: 801,
            high: 803.5,
            low: 791.5,
            close: 795.4,
            volume: 2749221
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-28`,
            open: 808.4,
            high: 815.5,
            low: 793.6,
            close: 795.4,
            volume: 4269902
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-09-31`,
            open: 795.5,
            high: 796.9,
            low: 784,
            close: 784.5,
            volume: 2427284
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-01`,
            open: 782.9,
            high: 789.5,
            low: 775.5,
            close: 783.6,
            volume: 2406356
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-02`,
            open: 778.2,
            high: 781.6,
            low: 763.5,
            close: 768.7,
            volume: 1918414
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-03`,
            open: 767.3,
            high: 770,
            low: 759,
            close: 762.1,
            volume: 1943175
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-04`,
            open: 750.7,
            high: 770.4,
            low: 750.6,
            close: 762,
            volume: 2134812
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-07`,
            open: 774.5,
            high: 785.2,
            low: 772.5,
            close: 782.5,
            volume: 1585070
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-08`,
            open: 783.4,
            high: 795.6,
            low: 780.2,
            close: 790.5,
            volume: 1366873
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-09`,
            open: 779.9,
            high: 791.2,
            low: 771.7,
            close: 785.3,
            volume: 2607121
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-10`,
            open: 791.2,
            high: 791.2,
            low: 752.2,
            close: 762.6,
            volume: 4745183
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-11`,
            open: 756.5,
            high: 760.8,
            low: 750.4,
            close: 754,
            volume: 2431815
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-14`,
            open: 755.6,
            high: 757.9,
            low: 727.5,
            close: 736.1,
            volume: 3654385
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-15`,
            open: 747,
            high: 764.4,
            low: 747,
            close: 758.5,
            volume: 2384001
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-16`,
            open: 755.2,
            high: 766.4,
            low: 750.5,
            close: 764.5,
            volume: 1472594
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-17`,
            open: 766.9,
            high: 772.7,
            low: 764.2,
            close: 771.2,
            volume: 1286961
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-18`,
            open: 771.4,
            high: 775,
            low: 760,
            close: 760.5,
            volume: 1547145
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-21`,
            open: 762.6,
            high: 769.7,
            low: 760.6,
            close: 769.2,
            volume: 1330639
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-22`,
            open: 772.6,
            high: 777,
            low: 767,
            close: 768.3,
            volume: 1593108
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-23`,
            open: 767.7,
            high: 768.3,
            low: 755.3,
            close: 761,
            volume: 1478417
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-25`,
            open: 764.3,
            high: 765,
            low: 760.5,
            close: 761.7,
            volume: 587421
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-28`,
            open: 760,
            high: 779.5,
            low: 759.8,
            close: 768.2,
            volume: 2188151
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-29`,
            open: 771.5,
            high: 778.5,
            low: 768.2,
            close: 770.8,
            volume: 1616618
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-10-30`,
            open: 770.1,
            high: 773,
            low: 754.8,
            close: 758,
            volume: 2392890
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-01`,
            open: 757.4,
            high: 759.9,
            low: 737,
            close: 747.9,
            volume: 3017947
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-02`,
            open: 744.6,
            high: 754,
            low: 743.1,
            close: 750.5,
            volume: 1452484
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-05`,
            open: 757.7,
            high: 763.9,
            low: 752.9,
            close: 762.5,
            volume: 1394223
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-06`,
            open: 764.7,
            high: 768.8,
            low: 757.3,
            close: 759.1,
            volume: 1690689
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-07`,
            open: 761,
            high: 771.4,
            low: 755.8,
            close: 771.2,
            volume: 1760966
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-08`,
            open: 772.5,
            high: 778.2,
            low: 767.2,
            close: 776.4,
            volume: 1488059
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-09`,
            open: 780,
            high: 789.4,
            low: 779,
            close: 789.3,
            volume: 1821914
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-12`,
            open: 785,
            high: 791.3,
            low: 784.4,
            close: 789.3,
            volume: 2104117
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-13`,
            open: 793.9,
            high: 804.4,
            low: 793.3,
            close: 796.1,
            volume: 2145209
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-14`,
            open: 797.4,
            high: 804,
            low: 794,
            close: 797.1,
            volume: 1704150
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-15`,
            open: 797.3,
            high: 803,
            low: 792.9,
            close: 797.9,
            volume: 1626499
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-16`,
            open: 800.4,
            high: 800.9,
            low: 790.3,
            close: 790.8,
            volume: 2443796
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-19`,
            open: 790.2,
            high: 797.7,
            low: 786.3,
            close: 794.2,
            volume: 1232087
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-20`,
            open: 796.8,
            high: 798.6,
            low: 793.3,
            close: 796.4,
            volume: 951014
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-21`,
            open: 795.8,
            high: 796.7,
            low: 787.1,
            close: 794.6,
            volume: 1211346
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-22`,
            open: 792.4,
            high: 793.3,
            low: 788.6,
            close: 791.3,
            volume: 972169
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-23`,
            open: 790.9,
            high: 792.7,
            low: 787.3,
            close: 789.9,
            volume: 623944
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-27`,
            open: 790.7,
            high: 797.9,
            low: 787.7,
            close: 791.5,
            volume: 789321
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-28`,
            open: 793.7,
            high: 794.2,
            low: 783.2,
            close: 785,
            volume: 1153824
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-29`,
            open: 783.3,
            high: 785.9,
            low: 778.9,
            close: 782.8,
            volume: 744272
        }));
        this.push(new StockGoogleItem(
        {
            date: `2016-11-30`,
            open: 782.8,
            high: 782.8,
            low: 770.4,
            close: 771.8,
            volume: 1769950
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-03`,
            open: 778.8,
            high: 789.6,
            low: 775.8,
            close: 786.1,
            volume: 1657268
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-04`,
            open: 788.4,
            high: 791.3,
            low: 783.2,
            close: 786.9,
            volume: 1072958
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-05`,
            open: 786.1,
            high: 794.5,
            low: 785,
            close: 794,
            volume: 1335167
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-06`,
            open: 795.3,
            high: 807.9,
            low: 792.2,
            close: 806.1,
            volume: 1640170
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-09`,
            open: 806.4,
            high: 810,
            low: 802.8,
            close: 806.6,
            volume: 1274645
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-10`,
            open: 807.9,
            high: 809.1,
            low: 803.5,
            close: 804.8,
            volume: 1176780
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-11`,
            open: 805,
            high: 808.1,
            low: 801.4,
            close: 807.9,
            volume: 1065936
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-12`,
            open: 807.1,
            high: 807.4,
            low: 799.2,
            close: 806.4,
            volume: 1353057
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-13`,
            open: 807.5,
            high: 811.2,
            low: 806.7,
            close: 807.9,
            volume: 1099215
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-17`,
            open: 807.1,
            high: 807.1,
            low: 800.4,
            close: 804.6,
            volume: 1362115
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-18`,
            open: 805.8,
            high: 806.2,
            low: 801,
            close: 806.1,
            volume: 1294407
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-19`,
            open: 805.1,
            high: 809.5,
            low: 801.8,
            close: 802.2,
            volume: 919325
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-20`,
            open: 806.9,
            high: 806.9,
            low: 801.7,
            close: 805,
            volume: 1670045
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-23`,
            open: 807.3,
            high: 820.9,
            low: 803.7,
            close: 819.3,
            volume: 1963628
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-24`,
            open: 822.3,
            high: 825.9,
            low: 817.8,
            close: 823.9,
            volume: 1474010
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-25`,
            open: 829.6,
            high: 835.8,
            low: 825.1,
            close: 835.7,
            volume: 1627304
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-26`,
            open: 837.8,
            high: 838,
            low: 827,
            close: 832.1,
            volume: 2973891
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-27`,
            open: 834.7,
            high: 842,
            low: 820.4,
            close: 823.3,
            volume: 2965771
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-30`,
            open: 814.7,
            high: 815.8,
            low: 799.8,
            close: 802.3,
            volume: 3246573
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-00-31`,
            open: 796.9,
            high: 801.3,
            low: 790.5,
            close: 796.8,
            volume: 2160556
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-01`,
            open: 799.7,
            high: 801.2,
            low: 791.2,
            close: 795.7,
            volume: 2029744
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-02`,
            open: 793.8,
            high: 802.7,
            low: 792,
            close: 798.5,
            volume: 1532138
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-03`,
            open: 803,
            high: 806,
            low: 800.4,
            close: 801.5,
            volume: 1463448
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-06`,
            open: 799.7,
            high: 801.7,
            low: 795.3,
            close: 801.3,
            volume: 1184483
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-07`,
            open: 804,
            high: 810.5,
            low: 801.8,
            close: 807,
            volume: 1241221
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-08`,
            open: 807,
            high: 811.8,
            low: 803.2,
            close: 808.4,
            volume: 1155990
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-09`,
            open: 809.5,
            high: 810.7,
            low: 804.5,
            close: 809.6,
            volume: 990391
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-10`,
            open: 811.7,
            high: 815.3,
            low: 809.8,
            close: 813.7,
            volume: 1134976
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-13`,
            open: 816,
            high: 821,
            low: 815.5,
            close: 819.2,
            volume: 1213324
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-14`,
            open: 819,
            high: 823,
            low: 816,
            close: 820.5,
            volume: 1054732
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-15`,
            open: 819.4,
            high: 823,
            low: 818.5,
            close: 819,
            volume: 1313617
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-16`,
            open: 819.9,
            high: 824.4,
            low: 819,
            close: 824.2,
            volume: 1287626
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-17`,
            open: 823,
            high: 828.1,
            low: 821.7,
            close: 828.1,
            volume: 1611039
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-21`,
            open: 828.7,
            high: 833.5,
            low: 828.4,
            close: 831.7,
            volume: 1262337
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-22`,
            open: 828.7,
            high: 833.3,
            low: 828.6,
            close: 830.8,
            volume: 987248
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-23`,
            open: 830.1,
            high: 832.5,
            low: 822.9,
            close: 831.3,
            volume: 1472771
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-24`,
            open: 827.7,
            high: 829,
            low: 824.2,
            close: 828.6,
            volume: 1392202
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-27`,
            open: 824.5,
            high: 830.5,
            low: 824,
            close: 829.3,
            volume: 1101466
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-01-28`,
            open: 825.6,
            high: 828.5,
            low: 820.2,
            close: 823.2,
            volume: 2260769
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-01`,
            open: 828.9,
            high: 836.3,
            low: 827.3,
            close: 835.2,
            volume: 1496540
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-02`,
            open: 833.9,
            high: 834.5,
            low: 829.6,
            close: 830.6,
            volume: 942476
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-03`,
            open: 830.6,
            high: 831.4,
            low: 825.8,
            close: 829.1,
            volume: 896378
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-06`,
            open: 827,
            high: 828.9,
            low: 822.4,
            close: 827.8,
            volume: 1109037
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-07`,
            open: 827.4,
            high: 833.4,
            low: 826.5,
            close: 831.9,
            volume: 1037630
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-08`,
            open: 833.5,
            high: 838.1,
            low: 831.8,
            close: 835.4,
            volume: 989773
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-09`,
            open: 836,
            high: 842,
            low: 834.2,
            close: 838.7,
            volume: 1261517
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-10`,
            open: 843.3,
            high: 844.9,
            low: 839.5,
            close: 843.3,
            volume: 1704024
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-13`,
            open: 844,
            high: 848.7,
            low: 843.3,
            close: 845.5,
            volume: 1223647
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-14`,
            open: 843.6,
            high: 847.2,
            low: 840.8,
            close: 845.6,
            volume: 780198
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-15`,
            open: 847.6,
            high: 848.6,
            low: 840.8,
            close: 847.2,
            volume: 1381474
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-16`,
            open: 849,
            high: 850.9,
            low: 846.1,
            close: 848.8,
            volume: 977560
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-17`,
            open: 851.6,
            high: 853.4,
            low: 847.1,
            close: 852.1,
            volume: 1716471
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-20`,
            open: 850,
            high: 850.2,
            low: 845.1,
            close: 848.4,
            volume: 1231521
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-21`,
            open: 851.4,
            high: 853.5,
            low: 829,
            close: 830.5,
            volume: 2463484
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-22`,
            open: 831.9,
            high: 835.5,
            low: 827.2,
            close: 829.6,
            volume: 1401465
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-23`,
            open: 821,
            high: 822.6,
            low: 812.3,
            close: 817.6,
            volume: 3487056
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-24`,
            open: 820.1,
            high: 821.9,
            low: 808.9,
            close: 814.4,
            volume: 1981006
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-27`,
            open: 807,
            high: 821.6,
            low: 803.4,
            close: 819.5,
            volume: 1894990
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-28`,
            open: 820.4,
            high: 826,
            low: 814,
            close: 820.9,
            volume: 1620542
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-29`,
            open: 825,
            high: 832.8,
            low: 822.4,
            close: 831.4,
            volume: 1786321
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-30`,
            open: 833.5,
            high: 833.7,
            low: 829,
            close: 831.5,
            volume: 1055339
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-02-31`,
            open: 829,
            high: 831.6,
            low: 827.4,
            close: 829.6,
            volume: 1401893
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-03`,
            open: 829.2,
            high: 840.9,
            low: 829.2,
            close: 838.5,
            volume: 1671503
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-04`,
            open: 831.4,
            high: 835.2,
            low: 829,
            close: 834.6,
            volume: 1045363
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-05`,
            open: 835.5,
            high: 842.5,
            low: 830.7,
            close: 831.4,
            volume: 1555328
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-06`,
            open: 832.4,
            high: 836.4,
            low: 826.5,
            close: 827.9,
            volume: 1254433
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-07`,
            open: 828,
            high: 828.5,
            low: 820.5,
            close: 824.7,
            volume: 1057253
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-10`,
            open: 825.4,
            high: 829.4,
            low: 823.8,
            close: 824.7,
            volume: 978905
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-11`,
            open: 824.7,
            high: 827.4,
            low: 817,
            close: 823.4,
            volume: 1079732
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-12`,
            open: 821.9,
            high: 826.7,
            low: 821,
            close: 824.3,
            volume: 900480
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-13`,
            open: 822.1,
            high: 826.4,
            low: 821.4,
            close: 823.6,
            volume: 1122362
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-17`,
            open: 825,
            high: 837.8,
            low: 824.5,
            close: 837.2,
            volume: 895015
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-18`,
            open: 834.2,
            high: 838.9,
            low: 832.7,
            close: 836.8,
            volume: 836722
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-19`,
            open: 839.8,
            high: 842.2,
            low: 836.3,
            close: 838.2,
            volume: 954330
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-20`,
            open: 841.4,
            high: 845.2,
            low: 839.3,
            close: 841.6,
            volume: 959031
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-21`,
            open: 842.9,
            high: 843.9,
            low: 840.6,
            close: 843.2,
            volume: 1323583
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-24`,
            open: 851.2,
            high: 863.5,
            low: 849.9,
            close: 862.8,
            volume: 1372541
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-25`,
            open: 865,
            high: 875,
            low: 862.8,
            close: 872.3,
            volume: 1671972
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-26`,
            open: 874.2,
            high: 876,
            low: 867.8,
            close: 871.7,
            volume: 1237167
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-27`,
            open: 873.6,
            high: 875.4,
            low: 870.4,
            close: 874.3,
            volume: 2026816
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-03-28`,
            open: 910.7,
            high: 916.9,
            low: 905.8,
            close: 906,
            volume: 3276255
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-01`,
            open: 901.9,
            high: 915.7,
            low: 901.5,
            close: 912.6,
            volume: 2115993
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-02`,
            open: 909.6,
            high: 920.8,
            low: 909.5,
            close: 916.4,
            volume: 1587219
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-03`,
            open: 914.9,
            high: 928.1,
            low: 912.5,
            close: 927,
            volume: 1499532
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-04`,
            open: 926.1,
            high: 935.9,
            low: 924.6,
            close: 931.7,
            volume: 1422144
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-05`,
            open: 933.5,
            high: 934.9,
            low: 925.2,
            close: 927.1,
            volume: 1911275
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-08`,
            open: 926.1,
            high: 936.9,
            low: 925.3,
            close: 934.3,
            volume: 1329825
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-09`,
            open: 937,
            high: 937.5,
            low: 929.5,
            close: 932.2,
            volume: 1581809
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-10`,
            open: 932,
            high: 932,
            low: 925.2,
            close: 928.8,
            volume: 1173925
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-11`,
            open: 925.3,
            high: 932.5,
            low: 923,
            close: 930.6,
            volume: 835386
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-12`,
            open: 931.5,
            high: 933.4,
            low: 927.9,
            close: 932.2,
            volume: 1050601
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-15`,
            open: 933,
            high: 938.3,
            low: 929.3,
            close: 937.1,
            volume: 1108496
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-16`,
            open: 940,
            high: 943.1,
            low: 937.6,
            close: 943,
            volume: 969479
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-17`,
            open: 935.7,
            high: 939.3,
            low: 918.1,
            close: 919.6,
            volume: 2362072
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-18`,
            open: 921,
            high: 933.2,
            low: 918.8,
            close: 930.2,
            volume: 1596897
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-19`,
            open: 931.5,
            high: 937.8,
            low: 931,
            close: 934,
            volume: 1393024
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-22`,
            open: 935,
            high: 941.9,
            low: 935,
            close: 941.9,
            volume: 1120385
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-23`,
            open: 947.9,
            high: 951.5,
            low: 942.6,
            close: 948.8,
            volume: 1270817
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-24`,
            open: 953,
            high: 955.1,
            low: 949.5,
            close: 955,
            volume: 1034199
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-25`,
            open: 957.3,
            high: 972.6,
            low: 955.5,
            close: 969.5,
            volume: 1660474
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-26`,
            open: 969.7,
            high: 975,
            low: 965,
            close: 971.5,
            volume: 1252010
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-30`,
            open: 970.3,
            high: 976.2,
            low: 969.5,
            close: 975.9,
            volume: 1466654
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-04-31`,
            open: 975,
            high: 979.3,
            low: 960.2,
            close: 964.9,
            volume: 2448067
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-01`,
            open: 969,
            high: 971.5,
            low: 960,
            close: 967,
            volume: 1410458
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-02`,
            open: 969.5,
            high: 975.9,
            low: 966,
            close: 975.6,
            volume: 1750955
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-05`,
            open: 976.5,
            high: 986.9,
            low: 975.1,
            close: 983.7,
            volume: 1252106
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-06`,
            open: 983.2,
            high: 988.3,
            low: 975.1,
            close: 976.6,
            volume: 1814624
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-07`,
            open: 979.6,
            high: 984.1,
            low: 975.8,
            close: 981.1,
            volume: 1453874
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-08`,
            open: 982.4,
            high: 984.6,
            low: 977.2,
            close: 983.4,
            volume: 1481916
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-09`,
            open: 984.5,
            high: 984.5,
            low: 935.6,
            close: 949.8,
            volume: 3309389
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-12`,
            open: 939.6,
            high: 949.4,
            low: 915.2,
            close: 942.9,
            volume: 3763529
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-13`,
            open: 951.9,
            high: 960,
            low: 944.1,
            close: 953.4,
            volume: 2013337
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-14`,
            open: 959.9,
            high: 961.1,
            low: 942.3,
            close: 950.8,
            volume: 1489715
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-15`,
            open: 934,
            high: 943.3,
            low: 924.4,
            close: 942.3,
            volume: 2133050
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-16`,
            open: 940,
            high: 942,
            low: 931.6,
            close: 939.8,
            volume: 3094711
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-19`,
            open: 950,
            high: 960,
            low: 949,
            close: 957.4,
            volume: 1533336
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-20`,
            open: 957.5,
            high: 961.6,
            low: 950,
            close: 950.6,
            volume: 1125990
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-21`,
            open: 953.6,
            high: 960.1,
            low: 950.8,
            close: 959.5,
            volume: 1202233
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-22`,
            open: 958.7,
            high: 960.7,
            low: 954.5,
            close: 957.1,
            volume: 941958
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-23`,
            open: 956.8,
            high: 966,
            low: 954.2,
            close: 965.6,
            volume: 1527856
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-26`,
            open: 969.9,
            high: 973.3,
            low: 950.8,
            close: 952.3,
            volume: 1598355
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-27`,
            open: 942.5,
            high: 948.3,
            low: 926.9,
            close: 927.3,
            volume: 2579930
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-28`,
            open: 929,
            high: 942.8,
            low: 916,
            close: 940.5,
            volume: 2721406
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-29`,
            open: 929.9,
            high: 931.3,
            low: 910.6,
            close: 917.8,
            volume: 3299176
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-05-30`,
            open: 926,
            high: 926,
            low: 908.3,
            close: 908.7,
            volume: 2090226
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-03`,
            open: 912.2,
            high: 913.9,
            low: 894.8,
            close: 898.7,
            volume: 1710373
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-05`,
            open: 901.8,
            high: 914.5,
            low: 898.5,
            close: 911.7,
            volume: 1813884
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-06`,
            open: 904.1,
            high: 914.9,
            low: 899.7,
            close: 906.7,
            volume: 1424503
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-07`,
            open: 908.9,
            high: 921.5,
            low: 908.9,
            close: 918.6,
            volume: 1637785
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-10`,
            open: 921.8,
            high: 930.4,
            low: 919.6,
            close: 928.8,
            volume: 1192825
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-11`,
            open: 929.5,
            high: 931.4,
            low: 922,
            close: 930.1,
            volume: 1113235
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-12`,
            open: 938.7,
            high: 946.3,
            low: 934.5,
            close: 943.8,
            volume: 1532144
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-13`,
            open: 946.3,
            high: 954.5,
            low: 943,
            close: 947.2,
            volume: 1294687
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-14`,
            open: 952,
            high: 956.9,
            low: 948,
            close: 956,
            volume: 1053774
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-17`,
            open: 957,
            high: 960.7,
            low: 949.2,
            close: 953.4,
            volume: 1165537
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-18`,
            open: 953,
            high: 968,
            low: 950.6,
            close: 965.4,
            volume: 1153964
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-19`,
            open: 967.8,
            high: 973,
            low: 964,
            close: 970.9,
            volume: 1224540
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-20`,
            open: 975,
            high: 975.9,
            low: 961.5,
            close: 968.1,
            volume: 1624463
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-21`,
            open: 962.3,
            high: 973.2,
            low: 960.1,
            close: 972.9,
            volume: 1711000
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-24`,
            open: 972.2,
            high: 986.2,
            low: 970.8,
            close: 980.3,
            volume: 3248347
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-25`,
            open: 953.8,
            high: 959.7,
            low: 945.4,
            close: 950.7,
            volume: 4660979
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-26`,
            open: 954.7,
            high: 955,
            low: 942.3,
            close: 947.8,
            volume: 2088256
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-27`,
            open: 951.8,
            high: 951.8,
            low: 920,
            close: 934.1,
            volume: 3212996
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-28`,
            open: 929.4,
            high: 943.8,
            low: 927.5,
            close: 941.5,
            volume: 1846351
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-06-31`,
            open: 941.9,
            high: 943.6,
            low: 926,
            close: 930.5,
            volume: 1970095
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-01`,
            open: 932.4,
            high: 937.5,
            low: 929.3,
            close: 930.8,
            volume: 1277734
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-02`,
            open: 928.6,
            high: 932.6,
            low: 916.7,
            close: 930.4,
            volume: 1824448
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-03`,
            open: 930.3,
            high: 932.2,
            low: 922.2,
            close: 923.6,
            volume: 1202512
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-04`,
            open: 926.8,
            high: 930.3,
            low: 923,
            close: 928,
            volume: 1082267
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-07`,
            open: 929.1,
            high: 931.7,
            low: 926.5,
            close: 929.4,
            volume: 1032239
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-08`,
            open: 927.1,
            high: 935.8,
            low: 925.6,
            close: 926.8,
            volume: 1061579
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-09`,
            open: 920.6,
            high: 926,
            low: 917.3,
            close: 922.9,
            volume: 1192081
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-10`,
            open: 917.5,
            high: 919.3,
            low: 906.1,
            close: 907.2,
            volume: 1823967
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-11`,
            open: 908,
            high: 917.8,
            low: 905.6,
            close: 914.4,
            volume: 1206782
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-14`,
            open: 922.5,
            high: 924.7,
            low: 918.2,
            close: 922.7,
            volume: 1064530
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-15`,
            open: 924.2,
            high: 926.5,
            low: 919.8,
            close: 922.2,
            volume: 883369
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-16`,
            open: 925.3,
            high: 932.7,
            low: 923.4,
            close: 927,
            volume: 1006711
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-17`,
            open: 925.8,
            high: 926.9,
            low: 911,
            close: 911,
            volume: 1277238
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-18`,
            open: 910.3,
            high: 915.3,
            low: 907.1,
            close: 910.7,
            volume: 1342689
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-21`,
            open: 910,
            high: 913,
            low: 903.4,
            close: 906.7,
            volume: 943441
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-22`,
            open: 912.7,
            high: 925.9,
            low: 911.5,
            close: 924.7,
            volume: 1166737
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-23`,
            open: 921.9,
            high: 929.9,
            low: 919.4,
            close: 927,
            volume: 1090248
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-24`,
            open: 928.7,
            high: 930.8,
            low: 915.5,
            close: 921.3,
            volume: 1270306
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-25`,
            open: 923.5,
            high: 925.6,
            low: 915.5,
            close: 915.9,
            volume: 1053376
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-28`,
            open: 916,
            high: 919.2,
            low: 911.9,
            close: 913.8,
            volume: 1086484
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-29`,
            open: 905.1,
            high: 923.3,
            low: 905,
            close: 921.3,
            volume: 1185564
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-30`,
            open: 920,
            high: 930.8,
            low: 919.6,
            close: 929.6,
            volume: 1301225
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-07-31`,
            open: 931.8,
            high: 942,
            low: 931.8,
            close: 939.3,
            volume: 1582579
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-01`,
            open: 941.1,
            high: 942.5,
            low: 935.1,
            close: 937.3,
            volume: 947374
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-05`,
            open: 933.1,
            high: 937,
            low: 922,
            close: 928.5,
            volume: 1348292
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-06`,
            open: 930.1,
            high: 930.9,
            low: 919.3,
            close: 927.8,
            volume: 1527650
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-07`,
            open: 931.7,
            high: 936.4,
            low: 923.6,
            close: 936,
            volume: 1212743
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-08`,
            open: 936.5,
            high: 937,
            low: 924.9,
            close: 926.5,
            volume: 1011538
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-11`,
            open: 934.3,
            high: 938.4,
            low: 926.9,
            close: 929.1,
            volume: 1266991
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-12`,
            open: 932.6,
            high: 933.5,
            low: 923.9,
            close: 932.1,
            volume: 1134397
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-13`,
            open: 930.7,
            high: 937.3,
            low: 929.9,
            close: 935.1,
            volume: 1102631
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-14`,
            open: 931.3,
            high: 932.8,
            low: 924,
            close: 925.1,
            volume: 1397644
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-15`,
            open: 924.7,
            high: 926.5,
            low: 916.4,
            close: 920.3,
            volume: 2505430
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-18`,
            open: 920,
            high: 922.1,
            low: 910.6,
            close: 915,
            volume: 1306922
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-19`,
            open: 917.4,
            high: 922.4,
            low: 912.5,
            close: 921.8,
            volume: 936654
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-20`,
            open: 923,
            high: 933.9,
            low: 922,
            close: 931.6,
            volume: 1669763
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-21`,
            open: 933,
            high: 936.5,
            low: 923.8,
            close: 932.5,
            volume: 1290607
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-22`,
            open: 927.8,
            high: 934.7,
            low: 926.5,
            close: 928.5,
            volume: 1052704
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-25`,
            open: 925.5,
            high: 926.4,
            low: 909.7,
            close: 921,
            volume: 1856822
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-26`,
            open: 923.7,
            high: 930.8,
            low: 921.1,
            close: 924.9,
            volume: 1666861
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-27`,
            open: 927.7,
            high: 949.9,
            low: 927.7,
            close: 944.5,
            volume: 2212600
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-28`,
            open: 941.4,
            high: 950.7,
            low: 940.5,
            close: 949.5,
            volume: 1020312
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-08-29`,
            open: 952,
            high: 959.8,
            low: 951.5,
            close: 959.1,
            volume: 1580994
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-02`,
            open: 960,
            high: 962.5,
            low: 947.8,
            close: 953.3,
            volume: 1283444
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-03`,
            open: 954,
            high: 958,
            low: 949.1,
            close: 957.8,
            volume: 888346
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-04`,
            open: 957,
            high: 960.4,
            low: 950.7,
            close: 951.7,
            volume: 952391
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-05`,
            open: 955.5,
            high: 970.9,
            low: 955.2,
            close: 970,
            volume: 1213816
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-06`,
            open: 966.7,
            high: 979.5,
            low: 963.4,
            close: 978.9,
            volume: 1173882
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-09`,
            open: 980,
            high: 985.4,
            low: 976.1,
            close: 977,
            volume: 891355
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-10`,
            open: 980,
            high: 981.6,
            low: 966.1,
            close: 972.6,
            volume: 968362
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-11`,
            open: 973.7,
            high: 990.7,
            low: 972.3,
            close: 989.3,
            volume: 1693274
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-12`,
            open: 987.5,
            high: 994.1,
            low: 985,
            close: 987.8,
            volume: 1262793
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-13`,
            open: 992,
            high: 997.2,
            low: 989,
            close: 989.7,
            volume: 1169777
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-16`,
            open: 992.1,
            high: 993.9,
            low: 984,
            close: 992,
            volume: 910543
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-17`,
            open: 990.3,
            high: 996.4,
            low: 988.6,
            close: 992.2,
            volume: 1290186
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-18`,
            open: 991.8,
            high: 996.7,
            low: 987,
            close: 992.8,
            volume: 1057581
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-19`,
            open: 986,
            high: 988.9,
            low: 978.4,
            close: 984.5,
            volume: 1313575
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-20`,
            open: 989.4,
            high: 991,
            low: 984.6,
            close: 988.2,
            volume: 1183186
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-23`,
            open: 989.5,
            high: 989.5,
            low: 966.1,
            close: 968.5,
            volume: 1478448
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-24`,
            open: 970,
            high: 972.2,
            low: 961,
            close: 970.5,
            volume: 1212153
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-25`,
            open: 968.4,
            high: 976.1,
            low: 960.5,
            close: 973.3,
            volume: 1211262
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-26`,
            open: 980,
            high: 987.6,
            low: 972.2,
            close: 972.6,
            volume: 2042149
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-27`,
            open: 1009.2,
            high: 1048.4,
            low: 1008.2,
            close: 1019.3,
            volume: 5167689
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-30`,
            open: 1014,
            high: 1025,
            low: 1007.5,
            close: 1017.1,
            volume: 2085062
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-09-31`,
            open: 1015.2,
            high: 1024,
            low: 1010.4,
            close: 1016.6,
            volume: 1331391
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-01`,
            open: 1017.2,
            high: 1029.7,
            low: 1017,
            close: 1025.5,
            volume: 1373444
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-02`,
            open: 1021.8,
            high: 1028.1,
            low: 1013,
            close: 1025.6,
            volume: 1048970
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-03`,
            open: 1022.1,
            high: 1032.7,
            low: 1020.3,
            close: 1032.5,
            volume: 1076350
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-06`,
            open: 1029,
            high: 1034.9,
            low: 1025,
            close: 1025.9,
            volume: 1125185
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-07`,
            open: 1027.3,
            high: 1034,
            low: 1025.1,
            close: 1033.3,
            volume: 1112331
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-08`,
            open: 1030.5,
            high: 1043.5,
            low: 1028.5,
            close: 1039.8,
            volume: 1088716
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-09`,
            open: 1034,
            high: 1034,
            low: 1019.7,
            close: 1031.3,
            volume: 1245246
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-10`,
            open: 1026.5,
            high: 1030.8,
            low: 1025.3,
            close: 1028.1,
            volume: 720676
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-13`,
            open: 1023.4,
            high: 1031.6,
            low: 1022.6,
            close: 1025.8,
            volume: 885779
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-14`,
            open: 1022.6,
            high: 1026.8,
            low: 1014.1,
            close: 1026,
            volume: 959222
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-15`,
            open: 1019.2,
            high: 1024.1,
            low: 1015.4,
            close: 1020.9,
            volume: 853992
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-16`,
            open: 1022.5,
            high: 1035.9,
            low: 1022.5,
            close: 1032.5,
            volume: 1129688
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-17`,
            open: 1034,
            high: 1034.4,
            low: 1017.8,
            close: 1019.1,
            volume: 1397064
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-20`,
            open: 1020.3,
            high: 1022.6,
            low: 1017.5,
            close: 1018.4,
            volume: 953470
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-21`,
            open: 1023.3,
            high: 1035.1,
            low: 1022.7,
            close: 1034.5,
            volume: 1096999
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-22`,
            open: 1035,
            high: 1039.7,
            low: 1031.4,
            close: 1036,
            volume: 746878
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-24`,
            open: 1035.9,
            high: 1043.2,
            low: 1035,
            close: 1040.6,
            volume: 536996
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-27`,
            open: 1040,
            high: 1055.5,
            low: 1038.4,
            close: 1054.2,
            volume: 1307881
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-28`,
            open: 1055.1,
            high: 1062.4,
            low: 1040,
            close: 1047.4,
            volume: 1424394
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-29`,
            open: 1042.7,
            high: 1044.1,
            low: 1015.6,
            close: 1021.7,
            volume: 2459426
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-10-30`,
            open: 1022.4,
            high: 1028.5,
            low: 1015,
            close: 1021.4,
            volume: 1724031
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-01`,
            open: 1015.8,
            high: 1022.5,
            low: 1002,
            close: 1010.2,
            volume: 1909566
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-04`,
            open: 1012.7,
            high: 1016.1,
            low: 995.6,
            close: 998.7,
            volume: 1906439
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-05`,
            open: 995.9,
            high: 1020.6,
            low: 988.3,
            close: 1005.1,
            volume: 2067318
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-06`,
            open: 1001.5,
            high: 1025,
            low: 1001.1,
            close: 1018.4,
            volume: 1271964
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-07`,
            open: 1020.4,
            high: 1034.2,
            low: 1018.1,
            close: 1030.9,
            volume: 1458242
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-08`,
            open: 1037.5,
            high: 1042,
            low: 1032.5,
            close: 1037,
            volume: 1290774
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-11`,
            open: 1035.5,
            high: 1043.8,
            low: 1032,
            close: 1041.1,
            volume: 1192838
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-12`,
            open: 1039.6,
            high: 1050.3,
            low: 1033.7,
            close: 1040.5,
            volume: 1279659
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-13`,
            open: 1046.1,
            high: 1046.7,
            low: 1038.4,
            close: 1040.6,
            volume: 1282677
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-14`,
            open: 1045,
            high: 1058.5,
            low: 1043.1,
            close: 1049.2,
            volume: 1558835
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-15`,
            open: 1054.6,
            high: 1067.6,
            low: 1049.5,
            close: 1064.2,
            volume: 3275931
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-18`,
            open: 1066.1,
            high: 1078.5,
            low: 1062,
            close: 1077.1,
            volume: 1554552
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-19`,
            open: 1075.2,
            high: 1076.8,
            low: 1063.5,
            close: 1070.7,
            volume: 1338725
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-20`,
            open: 1071.8,
            high: 1073.4,
            low: 1061.5,
            close: 1065,
            volume: 1268582
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-21`,
            open: 1065,
            high: 1069.3,
            low: 1061.8,
            close: 1063.6,
            volume: 995703
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-22`,
            open: 1061.1,
            high: 1064.2,
            low: 1059.4,
            close: 1060.1,
            volume: 755095
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-26`,
            open: 1058.1,
            high: 1060.1,
            low: 1050.2,
            close: 1056.7,
            volume: 761237
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-27`,
            open: 1057.4,
            high: 1058.4,
            low: 1048,
            close: 1049.4,
            volume: 1271911
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-28`,
            open: 1051.6,
            high: 1054.8,
            low: 1044.8,
            close: 1048.1,
            volume: 837121
        }));
        this.push(new StockGoogleItem(
        {
            date: `2017-11-29`,
            open: 1046.7,
            high: 1049.7,
            low: 1044.9,
            close: 1046.4,
            volume: 887511
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-02`,
            open: 1048.3,
            high: 1066.9,
            low: 1045.2,
            close: 1065,
            volume: 1237564
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-03`,
            open: 1064.3,
            high: 1086.3,
            low: 1063.2,
            close: 1082.5,
            volume: 1430170
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-04`,
            open: 1088,
            high: 1093.6,
            low: 1084,
            close: 1086.4,
            volume: 1004605
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-05`,
            open: 1094,
            high: 1104.3,
            low: 1092,
            close: 1102.2,
            volume: 1279123
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-08`,
            open: 1102.2,
            high: 1111.3,
            low: 1101.6,
            close: 1106.9,
            volume: 1047603
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-09`,
            open: 1109.4,
            high: 1110.6,
            low: 1101.2,
            close: 1106.3,
            volume: 902541
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-10`,
            open: 1097.1,
            high: 1104.6,
            low: 1096.1,
            close: 1102.6,
            volume: 1042793
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-11`,
            open: 1106.3,
            high: 1106.5,
            low: 1099.6,
            close: 1105.5,
            volume: 978292
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-12`,
            open: 1102.4,
            high: 1124.3,
            low: 1101.2,
            close: 1122.3,
            volume: 1720533
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-16`,
            open: 1132.5,
            high: 1139.9,
            low: 1117.8,
            close: 1121.8,
            volume: 1575261
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-17`,
            open: 1126.2,
            high: 1132.6,
            low: 1117,
            close: 1132,
            volume: 1202639
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-18`,
            open: 1131.4,
            high: 1132.5,
            low: 1117.5,
            close: 1129.8,
            volume: 1198234
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-19`,
            open: 1131.8,
            high: 1137.9,
            low: 1128.3,
            close: 1137.5,
            volume: 1778229
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-22`,
            open: 1137.5,
            high: 1159.9,
            low: 1135.1,
            close: 1155.8,
            volume: 1617975
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-23`,
            open: 1159.8,
            high: 1171.6,
            low: 1158.8,
            close: 1170,
            volume: 1333056
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-24`,
            open: 1177.3,
            high: 1179.9,
            low: 1161,
            close: 1164.2,
            volume: 1416625
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-25`,
            open: 1172.5,
            high: 1175.9,
            low: 1162.8,
            close: 1170.4,
            volume: 1480540
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-26`,
            open: 1175.1,
            high: 1175.8,
            low: 1158.1,
            close: 1175.8,
            volume: 2018755
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-29`,
            open: 1176.5,
            high: 1186.9,
            low: 1172,
            close: 1175.6,
            volume: 1378913
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-30`,
            open: 1167.8,
            high: 1176.5,
            low: 1163.5,
            close: 1163.7,
            volume: 1556346
        }));
        this.push(new StockGoogleItem(
        {
            date: `2018-00-31`,
            open: 1170.6,
            high: 1173,
            low: 1159.1,
            close: 1169.9,
            volume: 1538688
        }));
    }
}
