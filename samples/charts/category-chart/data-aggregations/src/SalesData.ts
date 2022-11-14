export class SalesDataItem {
    public constructor(init: Partial<SalesDataItem>) {
        Object.assign(this, init);
    }
    
    public country: string;
    public product: string;
    public unitsSold: string;
    public manufacturingPrice: number;
    public salePrice: number;
    public grossSales: number;
    public discounts: number;
    public sales: number;
    public cOGS: number;
    public profit: number;
    public date: string;
    public monthName: string;
    public year: string;

}
export class SalesData extends Array<SalesDataItem> {
    public constructor() {
        super();
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `501`,
            manufacturingPrice: 15,
            salePrice: 23,
            grossSales: 26440,
            discounts: 0,
            sales: 26440,
            cOGS: 16185,
            profit: 11255,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1372`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 27440,
            discounts: 0,
            sales: 27440,
            cOGS: 16185,
            profit: 11255,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `2762`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 55240,
            discounts: 0,
            sales: 55240,
            cOGS: 13210,
            profit: 42030,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `1464`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 21960,
            discounts: 0,
            sales: 21960,
            cOGS: 21780,
            profit: 180,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `719`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 10785,
            discounts: 0,
            sales: 10785,
            cOGS: 8880,
            profit: 1905,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `3576`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 53640,
            discounts: 0,
            sales: 53640,
            cOGS: 24700,
            profit: 28940,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `4422`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 1547700,
            discounts: 0,
            sales: 1547700,
            cOGS: 393380,
            profit: 1154320,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `3649`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 54735,
            discounts: 0,
            sales: 54735,
            cOGS: 9210,
            profit: 45525,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `4172`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 50064,
            discounts: 0,
            sales: 50064,
            cOGS: 7554,
            profit: 42510,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3841`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 76820,
            discounts: 0,
            sales: 76820,
            cOGS: 18990,
            profit: 57830,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `3726`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 44712,
            discounts: 0,
            sales: 44712,
            cOGS: 4635,
            profit: 40077,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `2625`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 39375,
            discounts: 0,
            sales: 39375,
            cOGS: 24700,
            profit: 14675,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `1958`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 244750,
            discounts: 0,
            sales: 244750,
            cOGS: 319860,
            profit: 75110,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `3271`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 981300,
            discounts: 0,
            sales: 981300,
            cOGS: 239500,
            profit: 741800,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `2091`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 14637,
            discounts: 0,
            sales: 14637,
            cOGS: 10730,
            profit: 3907,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `2825`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 42375,
            discounts: 0,
            sales: 42375,
            cOGS: 6150,
            profit: 36225,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2513`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 50260,
            discounts: 0,
            sales: 50260,
            cOGS: 2920,
            profit: 47340,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `883`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 13245,
            discounts: 0,
            sales: 13245,
            cOGS: 9740,
            profit: 3505,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2087`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 25044,
            discounts: 0,
            sales: 25044,
            cOGS: 7554,
            profit: 17490,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2563`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 897050,
            discounts: 0,
            sales: 897050,
            cOGS: 261560,
            profit: 635490,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2846`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 34152,
            discounts: 0,
            sales: 34152,
            cOGS: 1101,
            profit: 33051,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `997`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 6979,
            discounts: 0,
            sales: 6979,
            cOGS: 4415,
            profit: 2564,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2290`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 34350,
            discounts: 0,
            sales: 34350,
            cOGS: 24720,
            profit: 9630,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `2133`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 14931,
            discounts: 0,
            sales: 14931,
            cOGS: 5715,
            profit: 9216,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3617`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 72340,
            discounts: 0,
            sales: 72340,
            cOGS: 18170,
            profit: 54170,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `1266`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 443100,
            discounts: 0,
            sales: 443100,
            cOGS: 393380,
            profit: 49720,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `894`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 6258,
            discounts: 0,
            sales: 6258,
            cOGS: 7465,
            profit: 1207,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `2725`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 340625,
            discounts: 0,
            sales: 340625,
            cOGS: 216480,
            profit: 124145,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `3061`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 36732,
            discounts: 0,
            sales: 36732,
            cOGS: 6483,
            profit: 30249,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `3958`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 1385300,
            discounts: 0,
            sales: 1385300,
            cOGS: 261560,
            profit: 1123740,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `3920`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 47040,
            discounts: 0,
            sales: 47040,
            cOGS: 4635,
            profit: 42405,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `3381`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 422625,
            discounts: 0,
            sales: 422625,
            cOGS: 338520,
            profit: 84105,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `4307`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 1292100,
            discounts: 0,
            sales: 1292100,
            cOGS: 500250,
            profit: 791850,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `878`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 10536,
            discounts: 0,
            sales: 10536,
            cOGS: 8514,
            profit: 2022,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `496`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 7440,
            discounts: 0,
            sales: 7440,
            cOGS: 21780,
            profit: 14340,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `3367`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 50505,
            discounts: 0,
            sales: 50505,
            cOGS: 8880,
            profit: 41625,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `2055`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 616500,
            discounts: 0,
            sales: 616500,
            cOGS: 537750,
            profit: 78750,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `4041`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 80820,
            discounts: 0,
            sales: 80820,
            cOGS: 18170,
            profit: 62650,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `3237`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 1132950,
            discounts: 0,
            sales: 1132950,
            cOGS: 715000,
            profit: 417950,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `630`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 7560,
            discounts: 0,
            sales: 7560,
            cOGS: 5859,
            profit: 1701,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `4210`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 526250,
            discounts: 0,
            sales: 526250,
            cOGS: 506340,
            profit: 19910,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `1127`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 22540,
            discounts: 0,
            sales: 22540,
            cOGS: 18990,
            profit: 3550,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `3438`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 24066,
            discounts: 0,
            sales: 24066,
            cOGS: 8430,
            profit: 15636,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `2015`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 24180,
            discounts: 0,
            sales: 24180,
            cOGS: 6423,
            profit: 17757,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `2534`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 17738,
            discounts: 0,
            sales: 17738,
            cOGS: 5715,
            profit: 12023,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `1384`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 20760,
            discounts: 0,
            sales: 20760,
            cOGS: 6150,
            profit: 14610,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3561`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 24927,
            discounts: 276.15,
            sales: 24650.85,
            cOGS: 19725,
            profit: 4925.85,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1823`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 27345,
            discounts: 344.4,
            sales: 27000.6,
            cOGS: 22960,
            profit: 4040.6,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2795`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 19565,
            discounts: 72.1,
            sales: 19492.9,
            cOGS: 5150,
            profit: 14342.9,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `457`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 3199,
            discounts: 44.73,
            sales: 3154.27,
            cOGS: 3195,
            profit: 40.73,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `3785`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 26495,
            discounts: 92.82,
            sales: 26402.18,
            cOGS: 6630,
            profit: 19772.18,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `748`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 8976,
            discounts: 222.96,
            sales: 8753.04,
            cOGS: 5574,
            profit: 3179.04,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `1021`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 357350,
            discounts: 4235,
            sales: 353115,
            cOGS: 314600,
            profit: 38515,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `2076`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 14532,
            discounts: 177.03,
            sales: 14354.97,
            cOGS: 12645,
            profit: 1709.97,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `4316`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 51792,
            discounts: 173.4,
            sales: 51618.6,
            cOGS: 4335,
            profit: 47283.6,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `4174`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 50088,
            discounts: 320.52,
            sales: 49767.48,
            cOGS: 8013,
            profit: 41754.48,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `3736`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 1307600,
            discounts: 4889.5,
            sales: 1302710.5,
            cOGS: 363220,
            profit: 939490.5,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `1914`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 669900,
            discounts: 7542.5,
            sales: 662357.5,
            cOGS: 560300,
            profit: 102057.5,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `2742`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 41130,
            discounts: 332.1,
            sales: 40797.9,
            cOGS: 22140,
            profit: 18657.9,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `1499`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 449700,
            discounts: 6903,
            sales: 442797,
            cOGS: 575250,
            profit: 132453,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3772`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 75440,
            discounts: 275.1,
            sales: 75164.9,
            cOGS: 13755,
            profit: 61409.9,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `1112`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 7784,
            discounts: 128.1,
            sales: 7655.9,
            cOGS: 9150,
            profit: 1494.1,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `2368`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 35520,
            discounts: 227.1,
            sales: 35292.9,
            cOGS: 15140,
            profit: 20152.9,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1586`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 11102,
            discounts: 314.48,
            sales: 10787.52,
            cOGS: 22462.5,
            profit: 11674.98,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3386`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 423250,
            discounts: 908.75,
            sales: 422341.25,
            cOGS: 87240,
            profit: 335101.25,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `852`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 106500,
            discounts: 983.75,
            sales: 105516.25,
            cOGS: 94440,
            profit: 11076.25,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2783`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 347875,
            discounts: 2278.75,
            sales: 345596.25,
            cOGS: 218760,
            profit: 126836.25,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2684`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 40260,
            discounts: 112.05,
            sales: 40147.95,
            cOGS: 7470,
            profit: 32677.95,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `4083`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1224900,
            discounts: 8715,
            sales: 1216185,
            cOGS: 726250,
            profit: 489935,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2816`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 985600,
            discounts: 7542.5,
            sales: 978057.5,
            cOGS: 560300,
            profit: 417757.5,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `4294`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 85880,
            discounts: 772.8,
            sales: 85107.2,
            cOGS: 38640,
            profit: 46467.2,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `2856`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 19992,
            discounts: 25.34,
            sales: 19966.66,
            cOGS: 1810,
            profit: 18156.66,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `1407`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 175875,
            discounts: 1153.75,
            sales: 174721.25,
            cOGS: 110760,
            profit: 63961.25,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `1265`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 8855,
            discounts: 18.41,
            sales: 8836.59,
            cOGS: 1315,
            profit: 7521.59,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `3892`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 1362200,
            discounts: 3302.25,
            sales: 1358897.75,
            cOGS: 245310,
            profit: 1113587.75,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `3068`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 383500,
            discounts: 908.75,
            sales: 382591.25,
            cOGS: 87240,
            profit: 295351.25,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `2181`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 272625,
            discounts: 983.75,
            sales: 271641.25,
            cOGS: 94440,
            profit: 177201.25,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `1356`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 406800,
            discounts: 2958,
            sales: 403842,
            cOGS: 246500,
            profit: 177201.25,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `1814`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 634900,
            discounts: 4889.5,
            sales: 630010.5,
            cOGS: 363220,
            profit: 266790.5,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `1495`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 186875,
            discounts: 2180,
            sales: 184695,
            cOGS: 209280,
            profit: 24585,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1463`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 182875,
            discounts: 1856.25,
            sales: 181018.75,
            cOGS: 89100,
            profit: 91918.75,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `215`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 2580,
            discounts: 310.8,
            sales: 2269.2,
            cOGS: 3885,
            profit: 1615.8,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `566`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 198100,
            discounts: 19964,
            sales: 178136,
            cOGS: 741520,
            profit: 563384,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `3255`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 39060,
            discounts: 274.08,
            sales: 38785.92,
            cOGS: 3426,
            profit: 35359.92,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `772`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 15440,
            discounts: 626.4,
            sales: 14813.6,
            cOGS: 15660,
            profit: 846.4,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `1135`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 13620,
            discounts: 165.6,
            sales: 13454.4,
            cOGS: 2070,
            profit: 11384.4,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `1193`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 17895,
            discounts: 708.9,
            sales: 17186.1,
            cOGS: 23630,
            profit: 6443.9,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2530`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 759000,
            discounts: 5508,
            sales: 753492,
            cOGS: 229500,
            profit: 523992,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3451`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1035300,
            discounts: 10368,
            sales: 1024932,
            cOGS: 432000,
            profit: 592932,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3059`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 36708,
            discounts: 274.08,
            sales: 36433.92,
            cOGS: 3426,
            profit: 33007.92,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `3957`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 494625,
            discounts: 1655,
            sales: 492970,
            cOGS: 79440,
            profit: 413530,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3444`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 41328,
            discounts: 310.8,
            sales: 41017.2,
            cOGS: 3885,
            profit: 37132.2,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3154`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 946200,
            discounts: 11496,
            sales: 934704,
            cOGS: 479000,
            profit: 455704,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `4108`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 1437800,
            discounts: 19964,
            sales: 1417836,
            cOGS: 741520,
            profit: 676316,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3760`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 470000,
            discounts: 6822.5,
            sales: 463177.5,
            cOGS: 327480,
            profit: 135697.5,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2334`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 28008,
            discounts: 253.2,
            sales: 27754.8,
            cOGS: 3165,
            profit: 24589.8,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `580`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 6960,
            discounts: 260.16,
            sales: 6699.84,
            cOGS: 3252,
            profit: 3447.84,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `2610`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 52200,
            discounts: 626.4,
            sales: 51573.6,
            cOGS: 15660,
            profit: 35913.6,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `1459`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 510650,
            discounts: 20139,
            sales: 490511,
            cOGS: 748020,
            profit: 257509,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `3774`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 45288,
            discounts: 253.2,
            sales: 45034.8,
            cOGS: 3165,
            profit: 41869.8,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `2572`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 30864,
            discounts: 260.16,
            sales: 30603.84,
            cOGS: 3252,
            profit: 27351.84,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `320`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 40000,
            discounts: 1655,
            sales: 38345,
            cOGS: 79440,
            profit: 41095,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `3275`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 1146250,
            discounts: 20139,
            sales: 1126111,
            cOGS: 748020,
            profit: 378091,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `3582`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 447750,
            discounts: 6822.5,
            sales: 440927.5,
            cOGS: 327480,
            profit: 113447.5,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `4056`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 1216800,
            discounts: 1554,
            sales: 1215246,
            cOGS: 64750,
            profit: 1150496,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `2144`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 643200,
            discounts: 6606,
            sales: 636594,
            cOGS: 275250,
            profit: 361344,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `3502`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 437750,
            discounts: 5690,
            sales: 432060,
            cOGS: 273120,
            profit: 158940,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `679`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 13580,
            discounts: 494.4,
            sales: 13085.6,
            cOGS: 12360,
            profit: 725.6,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `2351`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 47020,
            discounts: 376.4,
            sales: 46643.6,
            cOGS: 9410,
            profit: 37233.6,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `2043`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 612900,
            discounts: 11496,
            sales: 601404,
            cOGS: 479000,
            profit: 122404,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `3565`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 445625,
            discounts: 15913.13,
            sales: 429711.88,
            cOGS: 509220,
            profit: 79508.13,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `1401`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 28020,
            discounts: 1548,
            sales: 26472,
            cOGS: 25800,
            profit: 672,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `2077`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 623100,
            discounts: 6201,
            sales: 616899,
            cOGS: 172250,
            profit: 444649,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `3643`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 43716,
            discounts: 700.92,
            sales: 43015.08,
            cOGS: 5841,
            profit: 37174.08,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `2960`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 20720,
            discounts: 411.18,
            sales: 20308.82,
            cOGS: 9790,
            profit: 10518.82,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `1201`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 14412,
            discounts: 684.36,
            sales: 13727.64,
            cOGS: 5703,
            profit: 8024.64,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `2321`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 16247,
            discounts: 114.24,
            sales: 16132.76,
            cOGS: 2720,
            profit: 13412.76,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3972`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 496500,
            discounts: 4826.25,
            sales: 491673.75,
            cOGS: 154440,
            profit: 337233.75,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `3878`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 484750,
            discounts: 6397.5,
            sales: 478352.5,
            cOGS: 204720,
            profit: 273632.5,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2278`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 683400,
            discounts: 21910.5,
            sales: 661489.5,
            cOGS: 608625,
            profit: 52864.5,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `1075`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 134375,
            discounts: 6652.5,
            sales: 127722.5,
            cOGS: 212880,
            profit: 85157.5,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `4050`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 48600,
            discounts: 684.36,
            sales: 47915.64,
            cOGS: 5703,
            profit: 42212.64,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3035`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 910500,
            discounts: 6201,
            sales: 904299,
            cOGS: 172250,
            profit: 732049,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3636`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 454500,
            discounts: 5887.5,
            sales: 448612.5,
            cOGS: 188400,
            profit: 260212.5,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1379`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 16548,
            discounts: 493.02,
            sales: 16054.98,
            cOGS: 4108.5,
            profit: 11946.48,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `4492`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 561500,
            discounts: 7533.75,
            sales: 553966.25,
            cOGS: 241080,
            profit: 312886.25,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1744`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 218000,
            discounts: 4826.25,
            sales: 213173.75,
            cOGS: 154440,
            profit: 58733.75,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2341`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 292625,
            discounts: 6397.5,
            sales: 286227.5,
            cOGS: 204720,
            profit: 81507.5,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `3835`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 479375,
            discounts: 7533.75,
            sales: 471841.25,
            cOGS: 241080,
            profit: 230761.25,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `1161`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 348300,
            discounts: 25596,
            sales: 322704,
            cOGS: 711000,
            profit: 388296,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `876`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 10512,
            discounts: 689.76,
            sales: 9822.24,
            cOGS: 5748,
            profit: 4074.24,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `1705`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 213125,
            discounts: 5887.5,
            sales: 207237.5,
            cOGS: 188400,
            profit: 18837.5,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `1805`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 541500,
            discounts: 16866,
            sales: 524634,
            cOGS: 468500,
            profit: 56134,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `389`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 136150,
            discounts: 17241,
            sales: 118909,
            cOGS: 426920,
            profit: 308011,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1459`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 29180,
            discounts: 498.6,
            sales: 28681.4,
            cOGS: 8310,
            profit: 20371.4,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `4236`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 84720,
            discounts: 2310.3,
            sales: 82409.7,
            cOGS: 38505,
            profit: 43904.7,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `3627`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 43524,
            discounts: 892.44,
            sales: 42631.56,
            cOGS: 7437,
            profit: 35194.56,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `1756`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 26340,
            discounts: 1218.6,
            sales: 25121.4,
            cOGS: 20310,
            profit: 4811.4,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `307`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 4605,
            discounts: 1218.6,
            sales: 3386.4,
            cOGS: 20310,
            profit: 16923.6,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `1222`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 366600,
            discounts: 24252,
            sales: 342348,
            cOGS: 505250,
            profit: 162902,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `489`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 171150,
            discounts: 3836,
            sales: 167314,
            cOGS: 71240,
            profit: 96074,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `4133`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 61995,
            discounts: 1180.2,
            sales: 60814.8,
            cOGS: 19670,
            profit: 41144.8,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `2743`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 822900,
            discounts: 22308,
            sales: 800592,
            cOGS: 464750,
            profit: 335842,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `4460`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 1338000,
            discounts: 24252,
            sales: 1313748,
            cOGS: 505250,
            profit: 808498,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `1232`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 154000,
            discounts: 5690,
            sales: 148310,
            cOGS: 136560,
            profit: 11750,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2586`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 18102,
            discounts: 1190.28,
            sales: 16911.72,
            cOGS: 21255,
            profit: 4343.28,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `1332`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 166500,
            discounts: 3975,
            sales: 162525,
            cOGS: 95400,
            profit: 67125,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `4487`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1346100,
            discounts: 16974,
            sales: 1329126,
            cOGS: 353625,
            profit: 975501,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3862`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1158600,
            discounts: 35016,
            sales: 1123584,
            cOGS: 729500,
            profit: 394084,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1765`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 617750,
            discounts: 48300,
            sales: 569450,
            cOGS: 897000,
            profit: 327550,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3533`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 441625,
            discounts: 14940,
            sales: 426685,
            cOGS: 358560,
            profit: 68125,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2016`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 30240,
            discounts: 130.8,
            sales: 30109.2,
            cOGS: 2180,
            profit: 27929.2,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2938`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 58760,
            discounts: 1659.2,
            sales: 57100.8,
            cOGS: 20740,
            profit: 36360.8,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3352`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 67040,
            discounts: 844.8,
            sales: 66195.2,
            cOGS: 10560,
            profit: 55635.2,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `2430`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 850500,
            discounts: 3836,
            sales: 846664,
            cOGS: 71240,
            profit: 775424,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `535`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 66875,
            discounts: 5690,
            sales: 61185,
            cOGS: 136560,
            profit: 75375,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `1523`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 18276,
            discounts: 703.2,
            sales: 17572.8,
            cOGS: 4395,
            profit: 13177.8,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `1782`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 623700,
            discounts: 30478,
            sales: 593222,
            cOGS: 566020,
            profit: 27202,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `347`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 4164,
            discounts: 415.68,
            sales: 3748.32,
            cOGS: 2598,
            profit: 1150.32,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `3509`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 1228150,
            discounts: 30478,
            sales: 1197672,
            cOGS: 566020,
            profit: 631652,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `2943`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 1030050,
            discounts: 26110,
            sales: 1003940,
            cOGS: 484900,
            profit: 519040,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `4037`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 504625,
            discounts: 5370,
            sales: 499255,
            cOGS: 128880,
            profit: 370375,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `4146`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 1451100,
            discounts: 26698,
            sales: 1424402,
            cOGS: 495820,
            profit: 928582,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `725`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 5075,
            discounts: 480.2,
            sales: 4594.8,
            cOGS: 6860,
            profit: 2265.2,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2325`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 16275,
            discounts: 941.15,
            sales: 15333.85,
            cOGS: 13445,
            profit: 1888.85,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `675`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 8100,
            discounts: 1458.6,
            sales: 6641.4,
            cOGS: 7293,
            profit: 651.6,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `2990`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 35880,
            discounts: 1458.6,
            sales: 34421.4,
            cOGS: 7293,
            profit: 27128.4,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `1072`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 7504,
            discounts: 941.15,
            sales: 6562.85,
            cOGS: 13445,
            profit: 6882.15,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `1048`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 7336,
            discounts: 589.05,
            sales: 6746.95,
            cOGS: 8415,
            profit: 1668.05,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `469`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 5628,
            discounts: 673.8,
            sales: 4954.2,
            cOGS: 3369,
            profit: 1585.2,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `4240`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 50880,
            discounts: 1119,
            sales: 49761,
            cOGS: 5595,
            profit: 44166,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `1976`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 23712,
            discounts: 669.6,
            sales: 23042.4,
            cOGS: 3348,
            profit: 19694.4,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `1984`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 39680,
            discounts: 1563,
            sales: 38117,
            cOGS: 15630,
            profit: 22487,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `480`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 144000,
            discounts: 14865,
            sales: 129135,
            cOGS: 247750,
            profit: 118615,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `1205`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 18075,
            discounts: 2093.25,
            sales: 15981.75,
            cOGS: 27910,
            profit: 11928.25,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `2480`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 17360,
            discounts: 199.5,
            sales: 17160.5,
            cOGS: 2850,
            profit: 14310.5,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `2926`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 20482,
            discounts: 870.45,
            sales: 19611.55,
            cOGS: 12435,
            profit: 7176.55,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3210`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 1123500,
            discounts: 24228.75,
            sales: 1099271.25,
            cOGS: 359970,
            profit: 739301.25,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `3221`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 402625,
            discounts: 22668.75,
            sales: 379956.25,
            cOGS: 435240,
            profit: 55283.75,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `1127`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 13524,
            discounts: 1405.2,
            sales: 12118.8,
            cOGS: 7026,
            profit: 5092.8,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1610`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 32200,
            discounts: 1303,
            sales: 30897,
            cOGS: 13030,
            profit: 17867,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `4100`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 512500,
            discounts: 18700,
            sales: 493800,
            cOGS: 359040,
            profit: 134760,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1012`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 126500,
            discounts: 14906.25,
            sales: 111593.75,
            cOGS: 286200,
            profit: 174606.25,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `3337`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1001100,
            discounts: 24105,
            sales: 976995,
            cOGS: 401750,
            profit: 575245,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3955`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 27685,
            discounts: 814.45,
            sales: 26870.55,
            cOGS: 11635,
            profit: 15235.55,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `4347`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1304100,
            discounts: 14865,
            sales: 1289235,
            cOGS: 247750,
            profit: 1041485,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1548`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 541800,
            discounts: 10535,
            sales: 531265,
            cOGS: 156520,
            profit: 374745,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2153`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 32295,
            discounts: 1965,
            sales: 30330,
            cOGS: 26200,
            profit: 4130,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `4126`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 515750,
            discounts: 5381.25,
            sales: 510368.75,
            cOGS: 103320,
            profit: 407048.75,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3376`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 67520,
            discounts: 2663,
            sales: 64857,
            cOGS: 26630,
            profit: 38227,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `2244`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 33660,
            discounts: 416.25,
            sales: 33243.75,
            cOGS: 5550,
            profit: 27693.75,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `1360`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 20400,
            discounts: 2145.75,
            sales: 18254.25,
            cOGS: 28610,
            profit: 10355.75,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `279`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 34875,
            discounts: 5043.75,
            sales: 29831.25,
            cOGS: 96840,
            profit: 67008.75,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `2521`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 882350,
            discounts: 10535,
            sales: 871815,
            cOGS: 156520,
            profit: 715295,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `2433`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 48660,
            discounts: 2832,
            sales: 45828,
            cOGS: 28320,
            profit: 17508,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `1738`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 34760,
            discounts: 1579,
            sales: 33181,
            cOGS: 15790,
            profit: 17391,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `1106`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 138250,
            discounts: 5381.25,
            sales: 132868.75,
            cOGS: 103320,
            profit: 29548.75,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `213`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 63900,
            discounts: 18750,
            sales: 45150,
            cOGS: 312500,
            profit: 267350,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `2929`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 58580,
            discounts: 2663,
            sales: 55917,
            cOGS: 26630,
            profit: 29287,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `2389`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 16723,
            discounts: 199.5,
            sales: 16523.5,
            cOGS: 2850,
            profit: 13673.5,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `3086`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 21602,
            discounts: 870.45,
            sales: 20731.55,
            cOGS: 12435,
            profit: 8296.55,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `745`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 260750,
            discounts: 23625,
            sales: 237125,
            cOGS: 351000,
            profit: 113875,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `1266`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 443100,
            discounts: 9660,
            sales: 433440,
            cOGS: 143520,
            profit: 289920,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `4287`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 1286100,
            discounts: 18750,
            sales: 1267350,
            cOGS: 312500,
            profit: 954850,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3193`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 47895,
            discounts: 3420.9,
            sales: 44474.1,
            cOGS: 38010,
            profit: 6464.1,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `1967`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 39340,
            discounts: 1341,
            sales: 37999,
            cOGS: 11175,
            profit: 26824,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `631`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 9465,
            discounts: 2559.6,
            sales: 6905.4,
            cOGS: 28440,
            profit: 21534.6,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `3469`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 41628,
            discounts: 404.64,
            sales: 41223.36,
            cOGS: 1686,
            profit: 39537.36,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `3215`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 48225,
            discounts: 1827,
            sales: 46398,
            cOGS: 20300,
            profit: 26098,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `1959`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 685650,
            discounts: 20580,
            sales: 665070,
            cOGS: 254800,
            profit: 410270,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `2181`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 763350,
            discounts: 30660,
            sales: 732690,
            cOGS: 379600,
            profit: 353090,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `2205`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 26460,
            discounts: 1960.56,
            sales: 24499.44,
            cOGS: 8169,
            profit: 16330.44,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1890`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 661500,
            discounts: 31416,
            sales: 630084,
            cOGS: 388960,
            profit: 241124,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `2417`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 302125,
            discounts: 7140,
            sales: 294985,
            cOGS: 114240,
            profit: 180745,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `1158`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 144750,
            discounts: 20662.5,
            sales: 124087.5,
            cOGS: 330600,
            profit: 206512.5,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `803`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 12045,
            discounts: 1377,
            sales: 10668,
            cOGS: 15300,
            profit: 4632,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `3705`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 1296750,
            discounts: 31416,
            sales: 1265334,
            cOGS: 388960,
            profit: 876374,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `589`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 4123,
            discounts: 629.16,
            sales: 3493.84,
            cOGS: 7490,
            profit: 3996.16,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `3999`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 59985,
            discounts: 2559.6,
            sales: 57425.4,
            cOGS: 28440,
            profit: 28985.4,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `4256`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 29792,
            discounts: 629.16,
            sales: 29162.84,
            cOGS: 7490,
            profit: 21672.84,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `2160`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 270000,
            discounts: 14906.25,
            sales: 255093.75,
            cOGS: 238500,
            profit: 16593.75,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `466`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 163100,
            discounts: 35259,
            sales: 127841,
            cOGS: 436540,
            profit: 308699,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1478`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 22170,
            discounts: 1978.2,
            sales: 20191.8,
            cOGS: 21980,
            profit: 1788.2,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3798`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 56970,
            discounts: 1568.7,
            sales: 55401.3,
            cOGS: 17430,
            profit: 37971.3,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `447`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 6705,
            discounts: 1037.7,
            sales: 5667.3,
            cOGS: 11530,
            profit: 5862.7,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `745`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 14900,
            discounts: 1201.2,
            sales: 13698.8,
            cOGS: 10010,
            profit: 3688.8,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `1732`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 12124,
            discounts: 559.86,
            sales: 11564.14,
            cOGS: 6665,
            profit: 4899.14,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `1759`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 26385,
            discounts: 1037.7,
            sales: 25347.3,
            cOGS: 11530,
            profit: 13817.3,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `338`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 4056,
            discounts: 610.68,
            sales: 3445.32,
            cOGS: 2181,
            profit: 1264.32,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `3911`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 46932,
            discounts: 1582.56,
            sales: 45349.44,
            cOGS: 5652,
            profit: 39697.44,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `4473`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 53676,
            discounts: 1965.6,
            sales: 51710.4,
            cOGS: 7020,
            profit: 44690.4,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `383`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 4596,
            discounts: 1967.28,
            sales: 2628.72,
            cOGS: 7026,
            profit: 4397.28,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `1062`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 15930,
            discounts: 1325.1,
            sales: 14604.9,
            cOGS: 12620,
            profit: 1984.9,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `4083`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 28581,
            discounts: 556.15,
            sales: 28024.85,
            cOGS: 5675,
            profit: 22349.85,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `3974`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 27818,
            discounts: 268.03,
            sales: 27549.97,
            cOGS: 2735,
            profit: 24814.97,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `3723`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 26061,
            discounts: 775.18,
            sales: 25285.82,
            cOGS: 7910,
            profit: 17375.82,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `2435`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 29220,
            discounts: 1460.34,
            sales: 27759.66,
            cOGS: 5215.5,
            profit: 22544.16,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `1763`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 12341,
            discounts: 775.18,
            sales: 11565.82,
            cOGS: 7910,
            profit: 3655.82,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `4473`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 31311,
            discounts: 556.15,
            sales: 30754.85,
            cOGS: 5675,
            profit: 25079.85,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `1246`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 436100,
            discounts: 43144.5,
            sales: 392955.5,
            cOGS: 457860,
            profit: 64904.5,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `1615`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 484500,
            discounts: 9408,
            sales: 475092,
            cOGS: 112000,
            profit: 363092,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `749`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 224700,
            discounts: 45801,
            sales: 178899,
            cOGS: 545250,
            profit: 366351,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `1318`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 26360,
            discounts: 2766.4,
            sales: 23593.6,
            cOGS: 19760,
            profit: 3833.6,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `2882`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 864600,
            discounts: 45801,
            sales: 818799,
            cOGS: 545250,
            profit: 273549,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2484`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 745200,
            discounts: 35742,
            sales: 709458,
            cOGS: 425500,
            profit: 283958,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3169`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 950700,
            discounts: 9408,
            sales: 941292,
            cOGS: 112000,
            profit: 829292,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `4080`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 510000,
            discounts: 30738.75,
            sales: 479261.25,
            cOGS: 421560,
            profit: 57701.25,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3943`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 59145,
            discounts: 2206.05,
            sales: 56938.95,
            cOGS: 21010,
            profit: 35928.95,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `253`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 5060,
            discounts: 2149,
            sales: 2911,
            cOGS: 15350,
            profit: 12439,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `799`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 239700,
            discounts: 34839,
            sales: 204861,
            cOGS: 414750,
            profit: 209889,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `3942`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 78840,
            discounts: 852.6,
            sales: 77987.4,
            cOGS: 6090,
            profit: 71897.4,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `2498`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 312250,
            discounts: 18261.25,
            sales: 293988.75,
            cOGS: 250440,
            profit: 43548.75,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `2517`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 50340,
            discounts: 2766.4,
            sales: 47573.6,
            cOGS: 19760,
            profit: 27813.6,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `1145`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 343500,
            discounts: 28812,
            sales: 314688,
            cOGS: 343000,
            profit: 28312,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `3814`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 45768,
            discounts: 2725.38,
            sales: 43042.62,
            cOGS: 9733.5,
            profit: 33309.12,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `1188`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 356400,
            discounts: 20139,
            sales: 336261,
            cOGS: 239750,
            profit: 96511,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `2233`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 669900,
            discounts: 57687,
            sales: 612213,
            cOGS: 686750,
            profit: 74537,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `421`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 52625,
            discounts: 14393.75,
            sales: 38231.25,
            cOGS: 197400,
            profit: 159168.75,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `269`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 94150,
            discounts: 70462,
            sales: 23688,
            cOGS: 747760,
            profit: 724072,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `952`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 19040,
            discounts: 1565.2,
            sales: 17474.8,
            cOGS: 11180,
            profit: 6294.8,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `2964`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 889200,
            discounts: 28812,
            sales: 860388,
            cOGS: 343000,
            profit: 517388,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `1505`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 10535,
            discounts: 273.28,
            sales: 10261.72,
            cOGS: 2440,
            profit: 7821.72,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `1678`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 33560,
            discounts: 2051.2,
            sales: 31508.8,
            cOGS: 12820,
            profit: 18688.8,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `4249`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 29743,
            discounts: 143.92,
            sales: 29599.08,
            cOGS: 1285,
            profit: 28314.08,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `1677`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 33540,
            discounts: 2051.2,
            sales: 31488.8,
            cOGS: 12820,
            profit: 18668.8,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `3051`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 381375,
            discounts: 15400,
            sales: 365975,
            cOGS: 184800,
            profit: 181175,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `3372`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 50580,
            discounts: 588,
            sales: 49992,
            cOGS: 4900,
            profit: 45092,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `1686`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 590100,
            discounts: 38136,
            sales: 551964,
            cOGS: 354120,
            profit: 197844,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3086`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 46290,
            discounts: 3001.2,
            sales: 43288.8,
            cOGS: 25010,
            profit: 18278.8,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `4150`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 83000,
            discounts: 1132.8,
            sales: 81867.2,
            cOGS: 7080,
            profit: 74787.2,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `3027`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 60540,
            discounts: 1032,
            sales: 59508,
            cOGS: 6450,
            profit: 53058,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `4359`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 1307700,
            discounts: 37488,
            sales: 1270212,
            cOGS: 390500,
            profit: 879712,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `1589`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 23835,
            discounts: 853.2,
            sales: 22981.8,
            cOGS: 7110,
            profit: 15871.8,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2679`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 334875,
            discounts: 11140,
            sales: 323735,
            cOGS: 133680,
            profit: 190055,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3401`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 23807,
            discounts: 705.04,
            sales: 23101.96,
            cOGS: 6295,
            profit: 16806.96,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2815`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 19705,
            discounts: 613.2,
            sales: 19091.8,
            cOGS: 5475,
            profit: 13616.8,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2964`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 59280,
            discounts: 2185.6,
            sales: 57094.4,
            cOGS: 13660,
            profit: 43434.4,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `4173`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1251900,
            discounts: 59040,
            sales: 1192860,
            cOGS: 615000,
            profit: 577860,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1157`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 8099,
            discounts: 379.68,
            sales: 7719.32,
            cOGS: 3390,
            profit: 4329.32,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3065`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 21455,
            discounts: 894.88,
            sales: 20560.12,
            cOGS: 7990,
            profit: 12570.12,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `4080`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 81600,
            discounts: 3094.4,
            sales: 78505.6,
            cOGS: 19340,
            profit: 59165.6,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `1713`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 34260,
            discounts: 4788.8,
            sales: 29471.2,
            cOGS: 29930,
            profit: 458.8,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `1691`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 591850,
            discounts: 38136,
            sales: 553714,
            cOGS: 354120,
            profit: 199594,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `2305`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 27660,
            discounts: 574.08,
            sales: 27085.92,
            cOGS: 1794,
            profit: 25291.92,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `3401`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 23807,
            discounts: 1627.92,
            sales: 22179.08,
            cOGS: 14535,
            profit: 7644.08,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `2288`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 16016,
            discounts: 1309.28,
            sales: 14706.72,
            cOGS: 11690,
            profit: 3016.72,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `4086`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 1225800,
            discounts: 15240,
            sales: 1210560,
            cOGS: 158750,
            profit: 1051810,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `2651`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 927850,
            discounts: 16086,
            sales: 911764,
            cOGS: 149370,
            profit: 762394,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `3971`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 27797,
            discounts: 1309.28,
            sales: 26487.72,
            cOGS: 11690,
            profit: 14797.72,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `2512`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 879200,
            discounts: 10668,
            sales: 868532,
            cOGS: 99060,
            profit: 769472,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `2745`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 960750,
            discounts: 11816,
            sales: 948934,
            cOGS: 109720,
            profit: 839214,
            date: `8/1/20`,
            monthName: `August`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `1903`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 570900,
            discounts: 51216,
            sales: 519684,
            cOGS: 533500,
            profit: 13816,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `2914`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 58280,
            discounts: 1132.8,
            sales: 57147.2,
            cOGS: 7080,
            profit: 50067.2,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `1889`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 13223,
            discounts: 1627.92,
            sales: 11595.08,
            cOGS: 14535,
            profit: 2939.92,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `1466`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 29320,
            discounts: 2185.6,
            sales: 27134.4,
            cOGS: 13660,
            profit: 13474.4,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `887`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 266100,
            discounts: 59040,
            sales: 207060,
            cOGS: 615000,
            profit: 407940,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `395`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 7900,
            discounts: 2432,
            sales: 5468,
            cOGS: 15200,
            profit: 9732,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `1693`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 25395,
            discounts: 853.2,
            sales: 24541.8,
            cOGS: 7110,
            profit: 17431.8,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `2649`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 794700,
            discounts: 15240,
            sales: 779460,
            cOGS: 158750,
            profit: 620710,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `3608`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 72160,
            discounts: 698.4,
            sales: 71461.6,
            cOGS: 4365,
            profit: 67096.6,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1073`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 321900,
            discounts: 29538,
            sales: 292362,
            cOGS: 273500,
            profit: 18862,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `2167`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 650100,
            discounts: 102667.5,
            sales: 547432.5,
            cOGS: 950625,
            profit: 403192.5,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `1319`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 461650,
            discounts: 52479,
            sales: 409171,
            cOGS: 433160,
            profit: 23989,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `1252`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 15024,
            discounts: 2506.68,
            sales: 12517.32,
            cOGS: 6963,
            profit: 5554.32,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `1156`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 144500,
            discounts: 31466.25,
            sales: 113033.75,
            cOGS: 335640,
            profit: 222606.25,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `1153`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 345900,
            discounts: 69255,
            sales: 276645,
            cOGS: 641250,
            profit: 364605,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2720`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 952000,
            discounts: 76135.5,
            sales: 875864.5,
            cOGS: 628420,
            profit: 247444.5,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3658`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 54870,
            discounts: 4961.25,
            sales: 49908.75,
            cOGS: 36750,
            profit: 13158.75,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2950`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 885000,
            discounts: 29538,
            sales: 855462,
            cOGS: 273500,
            profit: 581962,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1821`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 27315,
            discounts: 1656.45,
            sales: 25658.55,
            cOGS: 12270,
            profit: 13388.55,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1127`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 338100,
            discounts: 35748,
            sales: 302352,
            cOGS: 331000,
            profit: 28648,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `862`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 107750,
            discounts: 31466.25,
            sales: 76283.75,
            cOGS: 335640,
            profit: 259356.25,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `3805`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 57075,
            discounts: 330.75,
            sales: 56744.25,
            cOGS: 2450,
            profit: 54294.25,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `1415`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 424500,
            discounts: 102424.5,
            sales: 322075.5,
            cOGS: 948375,
            profit: 626299.5,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `2231`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 780850,
            discounts: 41170.5,
            sales: 739679.5,
            cOGS: 339820,
            profit: 399859.5,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `3649`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 456125,
            discounts: 6378.75,
            sales: 449746.25,
            cOGS: 68040,
            profit: 381706.25,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `2948`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 368500,
            discounts: 23737.5,
            sales: 344762.5,
            cOGS: 253200,
            profit: 91562.5,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `3395`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 1188250,
            discounts: 39973.5,
            sales: 1148276.5,
            cOGS: 329940,
            profit: 818336.5,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `2650`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 31800,
            discounts: 2112.48,
            sales: 29687.52,
            cOGS: 5868,
            profit: 23819.52,
            date: `1/1/20`,
            monthName: `January`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `585`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 175500,
            discounts: 71793,
            sales: 103707,
            cOGS: 664750,
            profit: 561043,
            date: `2/1/20`,
            monthName: `February`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `1316`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 460600,
            discounts: 42572.25,
            sales: 418027.75,
            cOGS: 351390,
            profit: 66637.75,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `4459`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 53508,
            discounts: 950.4,
            sales: 52557.6,
            cOGS: 2640,
            profit: 49917.6,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `2711`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 813300,
            discounts: 50409,
            sales: 762891,
            cOGS: 466750,
            profit: 296141,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `3613`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 54195,
            discounts: 1656.45,
            sales: 52538.55,
            cOGS: 12270,
            profit: 40268.55,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `1847`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 230875,
            discounts: 9866.25,
            sales: 221008.75,
            cOGS: 105240,
            profit: 115768.75,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `2996`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 1048600,
            discounts: 65236.5,
            sales: 983363.5,
            cOGS: 538460,
            profit: 444903.5,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `2838`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 993300,
            discounts: 39973.5,
            sales: 953326.5,
            cOGS: 329940,
            profit: 623386.5,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `1536`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 30720,
            discounts: 3049.2,
            sales: 27670.8,
            cOGS: 16940,
            profit: 10730.8,
            date: `11/1/20`,
            monthName: `November`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `1291`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 25820,
            discounts: 1193.4,
            sales: 24626.6,
            cOGS: 6630,
            profit: 17996.6,
            date: `5/1/20`,
            monthName: `May`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1213`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 8491,
            discounts: 515.97,
            sales: 7975.03,
            cOGS: 4095,
            profit: 3880.03,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `2370`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 28440,
            discounts: 1706.4,
            sales: 26733.6,
            cOGS: 4740,
            profit: 21993.6,
            date: `9/1/20`,
            monthName: `September`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `1979`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 13853,
            discounts: 328.23,
            sales: 13524.77,
            cOGS: 2605,
            profit: 10919.77,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `2879`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 57580,
            discounts: 1751.4,
            sales: 55828.6,
            cOGS: 9730,
            profit: 46098.6,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `1707`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 34140,
            discounts: 1868.4,
            sales: 32271.6,
            cOGS: 10380,
            profit: 21891.6,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2933`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 20531,
            discounts: 226.8,
            sales: 20304.2,
            cOGS: 1800,
            profit: 18504.2,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `1014`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 12168,
            discounts: 2124.36,
            sales: 10043.64,
            cOGS: 5901,
            profit: 4142.64,
            date: `3/1/20`,
            monthName: `March`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `693`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 10395,
            discounts: 3547.8,
            sales: 6847.2,
            cOGS: 26280,
            profit: 19432.8,
            date: `4/1/20`,
            monthName: `April`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `3741`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 26187,
            discounts: 226.8,
            sales: 25960.2,
            cOGS: 1800,
            profit: 24160.2,
            date: `10/1/20`,
            monthName: `October`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `3995`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 27965,
            discounts: 328.23,
            sales: 27636.77,
            cOGS: 2605,
            profit: 25031.77,
            date: `12/1/20`,
            monthName: `December`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `953`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 19060,
            discounts: 1868.4,
            sales: 17191.6,
            cOGS: 10380,
            profit: 6811.6,
            date: `6/1/20`,
            monthName: `June`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `2530`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 37950,
            discounts: 2201.18,
            sales: 35748.82,
            cOGS: 16305,
            profit: 19443.82,
            date: `7/1/20`,
            monthName: `July`,
            year: `2020`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1372`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 27440,
            discounts: 0,
            sales: 27440,
            cOGS: 16185,
            profit: 11255,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `2762`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 55240,
            discounts: 0,
            sales: 55240,
            cOGS: 13210,
            profit: 42030,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `1464`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 21960,
            discounts: 0,
            sales: 21960,
            cOGS: 21780,
            profit: 180,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `719`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 10785,
            discounts: 0,
            sales: 10785,
            cOGS: 8880,
            profit: 1905,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `3576`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 53640,
            discounts: 0,
            sales: 53640,
            cOGS: 24700,
            profit: 28940,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `4422`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 1547700,
            discounts: 0,
            sales: 1547700,
            cOGS: 393380,
            profit: 1154320,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `3649`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 54735,
            discounts: 0,
            sales: 54735,
            cOGS: 9210,
            profit: 45525,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `4172`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 50064,
            discounts: 0,
            sales: 50064,
            cOGS: 7554,
            profit: 42510,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3841`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 76820,
            discounts: 0,
            sales: 76820,
            cOGS: 18990,
            profit: 57830,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `3726`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 44712,
            discounts: 0,
            sales: 44712,
            cOGS: 4635,
            profit: 40077,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `2625`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 39375,
            discounts: 0,
            sales: 39375,
            cOGS: 24700,
            profit: 14675,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `1958`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 244750,
            discounts: 0,
            sales: 244750,
            cOGS: 319860,
            profit: 75110,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `3271`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 981300,
            discounts: 0,
            sales: 981300,
            cOGS: 239500,
            profit: 741800,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `2091`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 14637,
            discounts: 0,
            sales: 14637,
            cOGS: 10730,
            profit: 3907,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `2530`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 316250,
            discounts: 0,
            sales: 316250,
            cOGS: 41400,
            profit: 274850,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `2825`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 42375,
            discounts: 0,
            sales: 42375,
            cOGS: 6150,
            profit: 36225,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2513`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 50260,
            discounts: 0,
            sales: 50260,
            cOGS: 2920,
            profit: 47340,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `883`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 13245,
            discounts: 0,
            sales: 13245,
            cOGS: 9740,
            profit: 3505,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2087`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 25044,
            discounts: 0,
            sales: 25044,
            cOGS: 7554,
            profit: 17490,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2563`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 897050,
            discounts: 0,
            sales: 897050,
            cOGS: 261560,
            profit: 635490,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2846`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 34152,
            discounts: 0,
            sales: 34152,
            cOGS: 1101,
            profit: 33051,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `997`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 6979,
            discounts: 0,
            sales: 6979,
            cOGS: 4415,
            profit: 2564,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3421`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 51315,
            discounts: 0,
            sales: 51315,
            cOGS: 5490,
            profit: 45825,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Marchesa`,
            unitsSold: `70000`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 1050000,
            discounts: 0,
            sales: 1050000,
            cOGS: 5490,
            profit: 1044510,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2291`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 687300,
            discounts: 0,
            sales: 687300,
            cOGS: 197000,
            profit: 490300,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2290`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 34350,
            discounts: 0,
            sales: 34350,
            cOGS: 24720,
            profit: 9630,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `2133`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 14931,
            discounts: 0,
            sales: 14931,
            cOGS: 5715,
            profit: 9216,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3475`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 1216250,
            discounts: 0,
            sales: 1216250,
            cOGS: 448500,
            profit: 767750,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3686`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 44232,
            discounts: 0,
            sales: 44232,
            cOGS: 2736,
            profit: 41496,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3319`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 49785,
            discounts: 0,
            sales: 49785,
            cOGS: 21520,
            profit: 28265,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3617`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 72340,
            discounts: 0,
            sales: 72340,
            cOGS: 18170,
            profit: 54170,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `1266`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 443100,
            discounts: 0,
            sales: 443100,
            cOGS: 393380,
            profit: 49720,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `894`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 6258,
            discounts: 0,
            sales: 6258,
            cOGS: 7465,
            profit: 1207,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `2725`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 340625,
            discounts: 0,
            sales: 340625,
            cOGS: 216480,
            profit: 124145,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `3061`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 36732,
            discounts: 0,
            sales: 36732,
            cOGS: 6483,
            profit: 30249,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `3958`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 1385300,
            discounts: 0,
            sales: 1385300,
            cOGS: 261560,
            profit: 1123740,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `3920`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 47040,
            discounts: 0,
            sales: 47040,
            cOGS: 4635,
            profit: 42405,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `3381`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 422625,
            discounts: 0,
            sales: 422625,
            cOGS: 338520,
            profit: 84105,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `1094`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 136750,
            discounts: 0,
            sales: 136750,
            cOGS: 41400,
            profit: 95350,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `4307`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 1292100,
            discounts: 0,
            sales: 1292100,
            cOGS: 500250,
            profit: 791850,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `878`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 10536,
            discounts: 0,
            sales: 10536,
            cOGS: 8514,
            profit: 2022,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `496`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 7440,
            discounts: 0,
            sales: 7440,
            cOGS: 21780,
            profit: 14340,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `3367`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 50505,
            discounts: 0,
            sales: 50505,
            cOGS: 8880,
            profit: 41625,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `3880`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 1358000,
            discounts: 0,
            sales: 1358000,
            cOGS: 397020,
            profit: 960980,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `2055`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 616500,
            discounts: 0,
            sales: 616500,
            cOGS: 537750,
            profit: 78750,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `4041`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 80820,
            discounts: 0,
            sales: 80820,
            cOGS: 18170,
            profit: 62650,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `3237`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 1132950,
            discounts: 0,
            sales: 1132950,
            cOGS: 715000,
            profit: 417950,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `630`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 7560,
            discounts: 0,
            sales: 7560,
            cOGS: 5859,
            profit: 1701,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `4210`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 526250,
            discounts: 0,
            sales: 526250,
            cOGS: 506340,
            profit: 19910,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `1127`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 22540,
            discounts: 0,
            sales: 22540,
            cOGS: 18990,
            profit: 3550,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `3438`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 24066,
            discounts: 0,
            sales: 24066,
            cOGS: 8430,
            profit: 15636,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `2015`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 24180,
            discounts: 0,
            sales: 24180,
            cOGS: 6423,
            profit: 17757,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `2534`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 17738,
            discounts: 0,
            sales: 17738,
            cOGS: 5715,
            profit: 12023,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `1384`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 20760,
            discounts: 0,
            sales: 20760,
            cOGS: 6150,
            profit: 14610,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3561`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 24927,
            discounts: 276.15,
            sales: 24650.85,
            cOGS: 19725,
            profit: 4925.85,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1823`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 27345,
            discounts: 344.4,
            sales: 27000.6,
            cOGS: 22960,
            profit: 4040.6,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2795`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 19565,
            discounts: 72.1,
            sales: 19492.9,
            cOGS: 5150,
            profit: 14342.9,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `457`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 3199,
            discounts: 44.73,
            sales: 3154.27,
            cOGS: 3195,
            profit: 40.73,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `3785`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 26495,
            discounts: 92.82,
            sales: 26402.18,
            cOGS: 6630,
            profit: 19772.18,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `748`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 8976,
            discounts: 222.96,
            sales: 8753.04,
            cOGS: 5574,
            profit: 3179.04,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `1021`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 357350,
            discounts: 4235,
            sales: 353115,
            cOGS: 314600,
            profit: 38515,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `2076`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 14532,
            discounts: 177.03,
            sales: 14354.97,
            cOGS: 12645,
            profit: 1709.97,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `4316`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 51792,
            discounts: 173.4,
            sales: 51618.6,
            cOGS: 4335,
            profit: 47283.6,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `2654`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 331750,
            discounts: 412.5,
            sales: 331337.5,
            cOGS: 39600,
            profit: 291737.5,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `4174`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 50088,
            discounts: 320.52,
            sales: 49767.48,
            cOGS: 8013,
            profit: 41754.48,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `1675`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 20100,
            discounts: 91.92,
            sales: 20008.08,
            cOGS: 2298,
            profit: 17710.08,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `1572`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 471600,
            discounts: 1482,
            sales: 470118,
            cOGS: 123500,
            profit: 346618,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `3736`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 1307600,
            discounts: 4889.5,
            sales: 1302710.5,
            cOGS: 363220,
            profit: 939490.5,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `1914`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 669900,
            discounts: 7542.5,
            sales: 662357.5,
            cOGS: 560300,
            profit: 102057.5,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `2742`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 41130,
            discounts: 332.1,
            sales: 40797.9,
            cOGS: 22140,
            profit: 18657.9,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `1499`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 449700,
            discounts: 6903,
            sales: 442797,
            cOGS: 575250,
            profit: 132453,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3772`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 75440,
            discounts: 275.1,
            sales: 75164.9,
            cOGS: 13755,
            profit: 61409.9,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `1112`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 7784,
            discounts: 128.1,
            sales: 7655.9,
            cOGS: 9150,
            profit: 1494.1,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `1723`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 516900,
            discounts: 7494,
            sales: 509406,
            cOGS: 624500,
            profit: 115094,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `423`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 52875,
            discounts: 828.75,
            sales: 52046.25,
            cOGS: 79560,
            profit: 27513.75,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `2368`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 35520,
            discounts: 227.1,
            sales: 35292.9,
            cOGS: 15140,
            profit: 20152.9,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1586`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 11102,
            discounts: 314.48,
            sales: 10787.52,
            cOGS: 22462.5,
            profit: 11674.98,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3386`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 423250,
            discounts: 908.75,
            sales: 422341.25,
            cOGS: 87240,
            profit: 335101.25,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `852`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 106500,
            discounts: 983.75,
            sales: 105516.25,
            cOGS: 94440,
            profit: 11076.25,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2783`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 347875,
            discounts: 2278.75,
            sales: 345596.25,
            cOGS: 218760,
            profit: 126836.25,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2684`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 40260,
            discounts: 112.05,
            sales: 40147.95,
            cOGS: 7470,
            profit: 32677.95,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `4393`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 52716,
            discounts: 91.92,
            sales: 52624.08,
            cOGS: 2298,
            profit: 50326.08,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `4083`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1224900,
            discounts: 8715,
            sales: 1216185,
            cOGS: 726250,
            profit: 489935,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2816`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 985600,
            discounts: 7542.5,
            sales: 978057.5,
            cOGS: 560300,
            profit: 417757.5,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `4294`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 85880,
            discounts: 772.8,
            sales: 85107.2,
            cOGS: 38640,
            profit: 46467.2,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `2856`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 19992,
            discounts: 25.34,
            sales: 19966.66,
            cOGS: 1810,
            profit: 18156.66,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `1407`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 175875,
            discounts: 1153.75,
            sales: 174721.25,
            cOGS: 110760,
            profit: 63961.25,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `3850`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 481250,
            discounts: 828.75,
            sales: 480421.25,
            cOGS: 79560,
            profit: 400861.25,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `2856`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 19992,
            discounts: 146.44,
            sales: 19845.56,
            cOGS: 10460,
            profit: 9385.56,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `1265`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 8855,
            discounts: 18.41,
            sales: 8836.59,
            cOGS: 1315,
            profit: 7521.59,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `3892`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 1362200,
            discounts: 3302.25,
            sales: 1358897.75,
            cOGS: 245310,
            profit: 1113587.75,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `3068`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 383500,
            discounts: 908.75,
            sales: 382591.25,
            cOGS: 87240,
            profit: 295351.25,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `2181`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 272625,
            discounts: 983.75,
            sales: 271641.25,
            cOGS: 94440,
            profit: 177201.25,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `1356`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 406800,
            discounts: 2958,
            sales: 403842,
            cOGS: 246500,
            profit: 157342,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `2545`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 763500,
            discounts: 1482,
            sales: 762018,
            cOGS: 123500,
            profit: 638518,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `1814`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 634900,
            discounts: 4889.5,
            sales: 630010.5,
            cOGS: 363220,
            profit: 266790.5,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `1495`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 186875,
            discounts: 2180,
            sales: 184695,
            cOGS: 209280,
            profit: 24585,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `1154`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 13848,
            discounts: 238.68,
            sales: 13609.32,
            cOGS: 5967,
            profit: 7642.32,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `4180`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 62700,
            discounts: 48.15,
            sales: 62651.85,
            cOGS: 3210,
            profit: 59441.85,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1463`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 182875,
            discounts: 1856.25,
            sales: 181018.75,
            cOGS: 89100,
            profit: 91918.75,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `215`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 2580,
            discounts: 310.8,
            sales: 2269.2,
            cOGS: 3885,
            profit: 1615.8,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `4099`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 1229700,
            discounts: 1284,
            sales: 1228416,
            cOGS: 53500,
            profit: 1174916,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `2660`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 18620,
            discounts: 300.3,
            sales: 18319.7,
            cOGS: 10725,
            profit: 7594.7,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `566`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 198100,
            discounts: 19964,
            sales: 178136,
            cOGS: 741520,
            profit: 563384,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `3255`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 39060,
            discounts: 274.08,
            sales: 38785.92,
            cOGS: 3426,
            profit: 35359.92,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `772`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 15440,
            discounts: 626.4,
            sales: 14813.6,
            cOGS: 15660,
            profit: 846.4,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `1135`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 13620,
            discounts: 165.6,
            sales: 13454.4,
            cOGS: 2070,
            profit: 11384.4,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `3826`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 478250,
            discounts: 4150,
            sales: 474100,
            cOGS: 199200,
            profit: 274900,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `1193`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 17895,
            discounts: 708.9,
            sales: 17186.1,
            cOGS: 23630,
            profit: 6443.9,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2530`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 759000,
            discounts: 5508,
            sales: 753492,
            cOGS: 229500,
            profit: 523992,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3451`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1035300,
            discounts: 10368,
            sales: 1024932,
            cOGS: 432000,
            profit: 592932,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3059`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 36708,
            discounts: 274.08,
            sales: 36433.92,
            cOGS: 3426,
            profit: 33007.92,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `3957`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 494625,
            discounts: 1655,
            sales: 492970,
            cOGS: 79440,
            profit: 413530,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3444`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 41328,
            discounts: 310.8,
            sales: 41017.2,
            cOGS: 3885,
            profit: 37132.2,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `4388`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 548500,
            discounts: 2022.5,
            sales: 546477.5,
            cOGS: 97080,
            profit: 449397.5,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2106`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 263250,
            discounts: 5362.5,
            sales: 257887.5,
            cOGS: 257400,
            profit: 487.5,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `799`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 9588,
            discounts: 428.4,
            sales: 9159.6,
            cOGS: 5355,
            profit: 3804.6,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3154`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 946200,
            discounts: 11496,
            sales: 934704,
            cOGS: 479000,
            profit: 455704,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `4108`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 1437800,
            discounts: 19964,
            sales: 1417836,
            cOGS: 741520,
            profit: 676316,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3760`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 470000,
            discounts: 6822.5,
            sales: 463177.5,
            cOGS: 327480,
            profit: 135697.5,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `377`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 5655,
            discounts: 577.5,
            sales: 5077.5,
            cOGS: 19250,
            profit: 14172.5,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `2110`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 14770,
            discounts: 281.82,
            sales: 14488.18,
            cOGS: 10065,
            profit: 4423.18,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2334`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 28008,
            discounts: 253.2,
            sales: 27754.8,
            cOGS: 3165,
            profit: 24589.8,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `580`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 6960,
            discounts: 260.16,
            sales: 6699.84,
            cOGS: 3252,
            profit: 3447.84,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `2610`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 52200,
            discounts: 626.4,
            sales: 51573.6,
            cOGS: 15660,
            profit: 35913.6,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `1598`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 559300,
            discounts: 20762,
            sales: 538538,
            cOGS: 771160,
            profit: 232622,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `1459`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 510650,
            discounts: 20139,
            sales: 490511,
            cOGS: 748020,
            profit: 257509,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `3284`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 410500,
            discounts: 2022.5,
            sales: 408477.5,
            cOGS: 97080,
            profit: 311397.5,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `1197`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 149625,
            discounts: 5362.5,
            sales: 144262.5,
            cOGS: 257400,
            profit: 113137.5,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `3774`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 45288,
            discounts: 253.2,
            sales: 45034.8,
            cOGS: 3165,
            profit: 41869.8,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `2303`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 46060,
            discounts: 217.6,
            sales: 45842.4,
            cOGS: 5440,
            profit: 40402.4,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `2572`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 30864,
            discounts: 260.16,
            sales: 30603.84,
            cOGS: 3252,
            profit: 27351.84,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `320`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 40000,
            discounts: 1655,
            sales: 38345,
            cOGS: 79440,
            profit: 41095,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `2126`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 637800,
            discounts: 1284,
            sales: 636516,
            cOGS: 53500,
            profit: 583016,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `3275`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 1146250,
            discounts: 20139,
            sales: 1126111,
            cOGS: 748020,
            profit: 378091,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `3582`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 447750,
            discounts: 6822.5,
            sales: 440927.5,
            cOGS: 327480,
            profit: 113447.5,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `783`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 274050,
            discounts: 1862,
            sales: 272188,
            cOGS: 69160,
            profit: 203028,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `1202`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 420700,
            discounts: 13580,
            sales: 407120,
            cOGS: 504400,
            profit: 97280,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `4056`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 1216800,
            discounts: 1554,
            sales: 1215246,
            cOGS: 64750,
            profit: 1150496,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `2144`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 643200,
            discounts: 6606,
            sales: 636594,
            cOGS: 275250,
            profit: 361344,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `3502`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 437750,
            discounts: 5690,
            sales: 432060,
            cOGS: 273120,
            profit: 158940,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `1397`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 488950,
            discounts: 20762,
            sales: 468188,
            cOGS: 771160,
            profit: 302972,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `679`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 13580,
            discounts: 494.4,
            sales: 13085.6,
            cOGS: 12360,
            profit: 725.6,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `2351`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 47020,
            discounts: 376.4,
            sales: 46643.6,
            cOGS: 9410,
            profit: 37233.6,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `2043`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 612900,
            discounts: 11496,
            sales: 601404,
            cOGS: 479000,
            profit: 122404,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `3565`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 445625,
            discounts: 15913.13,
            sales: 429711.88,
            cOGS: 509220,
            profit: 79508.13,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `1401`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 28020,
            discounts: 1548,
            sales: 26472,
            cOGS: 25800,
            profit: 672,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `2077`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 623100,
            discounts: 6201,
            sales: 616899,
            cOGS: 172250,
            profit: 444649,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `3643`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 43716,
            discounts: 700.92,
            sales: 43015.08,
            cOGS: 5841,
            profit: 37174.08,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1105`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 13260,
            discounts: 326.88,
            sales: 12933.12,
            cOGS: 2724,
            profit: 10209.12,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `2960`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 20720,
            discounts: 411.18,
            sales: 20308.82,
            cOGS: 9790,
            profit: 10518.82,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `1201`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 14412,
            discounts: 684.36,
            sales: 13727.64,
            cOGS: 5703,
            profit: 8024.64,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `2321`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 16247,
            discounts: 114.24,
            sales: 16132.76,
            cOGS: 2720,
            profit: 13412.76,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `3640`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 1274000,
            discounts: 18868.5,
            sales: 1255131.5,
            cOGS: 467220,
            profit: 787911.5,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3972`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 496500,
            discounts: 4826.25,
            sales: 491673.75,
            cOGS: 154440,
            profit: 337233.75,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `3878`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 484750,
            discounts: 6397.5,
            sales: 478352.5,
            cOGS: 204720,
            profit: 273632.5,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2278`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 683400,
            discounts: 21910.5,
            sales: 661489.5,
            cOGS: 608625,
            profit: 52864.5,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `1075`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 134375,
            discounts: 6652.5,
            sales: 127722.5,
            cOGS: 212880,
            profit: 85157.5,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `4050`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 48600,
            discounts: 684.36,
            sales: 47915.64,
            cOGS: 5703,
            profit: 42212.64,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3035`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 910500,
            discounts: 6201,
            sales: 904299,
            cOGS: 172250,
            profit: 732049,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3636`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 454500,
            discounts: 5887.5,
            sales: 448612.5,
            cOGS: 188400,
            profit: 260212.5,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1379`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 16548,
            discounts: 493.02,
            sales: 16054.98,
            cOGS: 4108.5,
            profit: 11946.48,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `4492`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 561500,
            discounts: 7533.75,
            sales: 553966.25,
            cOGS: 241080,
            profit: 312886.25,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `764`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 11460,
            discounts: 875.25,
            sales: 10584.75,
            cOGS: 19450,
            profit: 8865.25,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1744`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 218000,
            discounts: 4826.25,
            sales: 213173.75,
            cOGS: 154440,
            profit: 58733.75,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2341`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 292625,
            discounts: 6397.5,
            sales: 286227.5,
            cOGS: 204720,
            profit: 81507.5,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `3835`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 479375,
            discounts: 7533.75,
            sales: 471841.25,
            cOGS: 241080,
            profit: 230761.25,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `1161`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 348300,
            discounts: 25596,
            sales: 322704,
            cOGS: 711000,
            profit: 388296,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `876`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 10512,
            discounts: 689.76,
            sales: 9822.24,
            cOGS: 5748,
            profit: 4074.24,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `1705`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 213125,
            discounts: 5887.5,
            sales: 207237.5,
            cOGS: 188400,
            profit: 18837.5,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `1805`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 541500,
            discounts: 16866,
            sales: 524634,
            cOGS: 468500,
            profit: 56134,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `389`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 136150,
            discounts: 17241,
            sales: 118909,
            cOGS: 426920,
            profit: 308011,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `2745`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 41175,
            discounts: 875.25,
            sales: 40299.75,
            cOGS: 19450,
            profit: 20849.75,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1459`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 29180,
            discounts: 498.6,
            sales: 28681.4,
            cOGS: 8310,
            profit: 20371.4,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `3938`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 27566,
            discounts: 369.6,
            sales: 27196.4,
            cOGS: 8800,
            profit: 18396.4,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `4236`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 84720,
            discounts: 2310.3,
            sales: 82409.7,
            cOGS: 38505,
            profit: 43904.7,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `3627`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 43524,
            discounts: 892.44,
            sales: 42631.56,
            cOGS: 7437,
            profit: 35194.56,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `1756`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 26340,
            discounts: 1218.6,
            sales: 25121.4,
            cOGS: 20310,
            profit: 4811.4,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `307`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 4605,
            discounts: 1218.6,
            sales: 3386.4,
            cOGS: 20310,
            profit: 16923.6,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `4489`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 67335,
            discounts: 1356.6,
            sales: 65978.4,
            cOGS: 22610,
            profit: 43368.4,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `2167`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 43340,
            discounts: 588.8,
            sales: 42751.2,
            cOGS: 7360,
            profit: 35391.2,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1137`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 7959,
            discounts: 798.28,
            sales: 7160.72,
            cOGS: 14255,
            profit: 7094.28,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `1222`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 366600,
            discounts: 24252,
            sales: 342348,
            cOGS: 505250,
            profit: 162902,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `489`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 171150,
            discounts: 3836,
            sales: 167314,
            cOGS: 71240,
            profit: 96074,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `4133`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 61995,
            discounts: 1180.2,
            sales: 60814.8,
            cOGS: 19670,
            profit: 41144.8,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `2743`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 822900,
            discounts: 22308,
            sales: 800592,
            cOGS: 464750,
            profit: 335842,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `3699`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 25893,
            discounts: 798.28,
            sales: 25094.72,
            cOGS: 14255,
            profit: 10839.72,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `4460`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 1338000,
            discounts: 24252,
            sales: 1313748,
            cOGS: 505250,
            profit: 808498,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `1232`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 154000,
            discounts: 5690,
            sales: 148310,
            cOGS: 136560,
            profit: 11750,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2586`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 18102,
            discounts: 1190.28,
            sales: 16911.72,
            cOGS: 21255,
            profit: 4343.28,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `1332`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 166500,
            discounts: 3975,
            sales: 162525,
            cOGS: 95400,
            profit: 67125,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `4487`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1346100,
            discounts: 16974,
            sales: 1329126,
            cOGS: 353625,
            profit: 975501,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3862`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1158600,
            discounts: 35016,
            sales: 1123584,
            cOGS: 729500,
            profit: 394084,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1765`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 617750,
            discounts: 48300,
            sales: 569450,
            cOGS: 897000,
            profit: 327550,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3533`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 441625,
            discounts: 14940,
            sales: 426685,
            cOGS: 358560,
            profit: 68125,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2016`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 30240,
            discounts: 130.8,
            sales: 30109.2,
            cOGS: 2180,
            profit: 27929.2,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2938`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 58760,
            discounts: 1659.2,
            sales: 57100.8,
            cOGS: 20740,
            profit: 36360.8,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3352`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 67040,
            discounts: 844.8,
            sales: 66195.2,
            cOGS: 10560,
            profit: 55635.2,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `4409`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 66135,
            discounts: 402.6,
            sales: 65732.4,
            cOGS: 6710,
            profit: 59022.4,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `3323`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 49845,
            discounts: 908.4,
            sales: 48936.6,
            cOGS: 15140,
            profit: 33796.6,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `2430`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 850500,
            discounts: 3836,
            sales: 846664,
            cOGS: 71240,
            profit: 775424,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `535`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 66875,
            discounts: 5690,
            sales: 61185,
            cOGS: 136560,
            profit: 75375,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `1523`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 18276,
            discounts: 703.2,
            sales: 17572.8,
            cOGS: 4395,
            profit: 13177.8,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `3631`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 72620,
            discounts: 2116.8,
            sales: 70503.2,
            cOGS: 26460,
            profit: 44043.2,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `1782`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 623700,
            discounts: 30478,
            sales: 593222,
            cOGS: 566020,
            profit: 27202,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `347`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 4164,
            discounts: 415.68,
            sales: 3748.32,
            cOGS: 2598,
            profit: 1150.32,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `4147`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 1451450,
            discounts: 4886,
            sales: 1446564,
            cOGS: 90740,
            profit: 1355824,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `3509`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 1228150,
            discounts: 30478,
            sales: 1197672,
            cOGS: 566020,
            profit: 631652,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `2774`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 41610,
            discounts: 908.4,
            sales: 40701.6,
            cOGS: 15140,
            profit: 25561.6,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `2943`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 1030050,
            discounts: 26110,
            sales: 1003940,
            cOGS: 484900,
            profit: 519040,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `4037`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 504625,
            discounts: 5370,
            sales: 499255,
            cOGS: 128880,
            profit: 370375,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `4146`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 1451100,
            discounts: 26698,
            sales: 1424402,
            cOGS: 495820,
            profit: 928582,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `4123`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 61845,
            discounts: 402.6,
            sales: 61442.4,
            cOGS: 6710,
            profit: 54732.4,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `1337`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 467950,
            discounts: 24892,
            sales: 443058,
            cOGS: 462280,
            profit: 19222,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `599`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 4193,
            discounts: 405.65,
            sales: 3787.35,
            cOGS: 5795,
            profit: 2007.65,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `725`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 5075,
            discounts: 480.2,
            sales: 4594.8,
            cOGS: 6860,
            profit: 2265.2,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `477`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 3339,
            discounts: 822.15,
            sales: 2516.85,
            cOGS: 11745,
            profit: 9228.15,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2325`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 16275,
            discounts: 941.15,
            sales: 15333.85,
            cOGS: 13445,
            profit: 1888.85,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `675`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 8100,
            discounts: 1458.6,
            sales: 6641.4,
            cOGS: 7293,
            profit: 651.6,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `2990`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 35880,
            discounts: 1458.6,
            sales: 34421.4,
            cOGS: 7293,
            profit: 27128.4,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `1072`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 7504,
            discounts: 941.15,
            sales: 6562.85,
            cOGS: 13445,
            profit: 6882.15,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `1048`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 7336,
            discounts: 589.05,
            sales: 6746.95,
            cOGS: 8415,
            profit: 1668.05,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `469`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 5628,
            discounts: 673.8,
            sales: 4954.2,
            cOGS: 3369,
            profit: 1585.2,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `804`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 5628,
            discounts: 405.65,
            sales: 5222.35,
            cOGS: 5795,
            profit: 572.65,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `4240`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 50880,
            discounts: 1119,
            sales: 49761,
            cOGS: 5595,
            profit: 44166,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `1976`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 23712,
            discounts: 669.6,
            sales: 23042.4,
            cOGS: 3348,
            profit: 19694.4,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `1984`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 39680,
            discounts: 1563,
            sales: 38117,
            cOGS: 15630,
            profit: 22487,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `480`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 144000,
            discounts: 14865,
            sales: 129135,
            cOGS: 247750,
            profit: 118615,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `3551`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 24857,
            discounts: 355.6,
            sales: 24501.4,
            cOGS: 5080,
            profit: 19421.4,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `1205`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 18075,
            discounts: 2093.25,
            sales: 15981.75,
            cOGS: 27910,
            profit: 11928.25,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `2480`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 17360,
            discounts: 199.5,
            sales: 17160.5,
            cOGS: 2850,
            profit: 14310.5,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `2926`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 20482,
            discounts: 870.45,
            sales: 19611.55,
            cOGS: 12435,
            profit: 7176.55,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3210`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 1123500,
            discounts: 24228.75,
            sales: 1099271.25,
            cOGS: 359970,
            profit: 739301.25,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `3221`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 402625,
            discounts: 22668.75,
            sales: 379956.25,
            cOGS: 435240,
            profit: 55283.75,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `2389`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 836150,
            discounts: 12600,
            sales: 823550,
            cOGS: 187200,
            profit: 636350,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `1127`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 13524,
            discounts: 1405.2,
            sales: 12118.8,
            cOGS: 7026,
            profit: 5092.8,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `319`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 95700,
            discounts: 16500,
            sales: 79200,
            cOGS: 275000,
            profit: 195800,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1610`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 32200,
            discounts: 1303,
            sales: 30897,
            cOGS: 13030,
            profit: 17867,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `4100`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 512500,
            discounts: 18700,
            sales: 493800,
            cOGS: 359040,
            profit: 134760,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1012`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 126500,
            discounts: 14906.25,
            sales: 111593.75,
            cOGS: 286200,
            profit: 174606.25,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `3337`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1001100,
            discounts: 24105,
            sales: 976995,
            cOGS: 401750,
            profit: 575245,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3955`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 27685,
            discounts: 814.45,
            sales: 26870.55,
            cOGS: 11635,
            profit: 15235.55,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `4347`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1304100,
            discounts: 14865,
            sales: 1289235,
            cOGS: 247750,
            profit: 1041485,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1548`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 541800,
            discounts: 10535,
            sales: 531265,
            cOGS: 156520,
            profit: 374745,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2153`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 32295,
            discounts: 1965,
            sales: 30330,
            cOGS: 26200,
            profit: 4130,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3789`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 1326150,
            discounts: 21490,
            sales: 1304660,
            cOGS: 319280,
            profit: 985380,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `4364`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 87280,
            discounts: 1389,
            sales: 85891,
            cOGS: 13890,
            profit: 72001,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `4126`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 515750,
            discounts: 5381.25,
            sales: 510368.75,
            cOGS: 103320,
            profit: 407048.75,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1343`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 167875,
            discounts: 4400,
            sales: 163475,
            cOGS: 84480,
            profit: 78995,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `245`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 4900,
            discounts: 1802,
            sales: 3098,
            cOGS: 18020,
            profit: 14922,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3376`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 67520,
            discounts: 2663,
            sales: 64857,
            cOGS: 26630,
            profit: 38227,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1401`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 9807,
            discounts: 747.6,
            sales: 9059.4,
            cOGS: 10680,
            profit: 1620.6,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3483`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 52245,
            discounts: 1587,
            sales: 50658,
            cOGS: 21160,
            profit: 29498,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `2244`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 33660,
            discounts: 416.25,
            sales: 33243.75,
            cOGS: 5550,
            profit: 27693.75,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `1360`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 20400,
            discounts: 2145.75,
            sales: 18254.25,
            cOGS: 28610,
            profit: 10355.75,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `279`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 34875,
            discounts: 5043.75,
            sales: 29831.25,
            cOGS: 96840,
            profit: 67008.75,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `2521`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 882350,
            discounts: 10535,
            sales: 871815,
            cOGS: 156520,
            profit: 715295,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `2433`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 48660,
            discounts: 2832,
            sales: 45828,
            cOGS: 28320,
            profit: 17508,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `1738`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 34760,
            discounts: 1579,
            sales: 33181,
            cOGS: 15790,
            profit: 17391,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `1106`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 138250,
            discounts: 5381.25,
            sales: 132868.75,
            cOGS: 103320,
            profit: 29548.75,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `3379`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 422375,
            discounts: 4400,
            sales: 417975,
            cOGS: 84480,
            profit: 333495,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `1221`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 24420,
            discounts: 1033,
            sales: 23387,
            cOGS: 10330,
            profit: 13057,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `213`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 63900,
            discounts: 18750,
            sales: 45150,
            cOGS: 312500,
            profit: 267350,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `3335`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 66700,
            discounts: 1389,
            sales: 65311,
            cOGS: 13890,
            profit: 51421,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `1260`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 25200,
            discounts: 1265,
            sales: 23935,
            cOGS: 12650,
            profit: 11285,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `3034`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 60680,
            discounts: 2297,
            sales: 58383,
            cOGS: 22970,
            profit: 35413,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `2929`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 58580,
            discounts: 2663,
            sales: 55917,
            cOGS: 26630,
            profit: 29287,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `2389`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 16723,
            discounts: 199.5,
            sales: 16523.5,
            cOGS: 2850,
            profit: 13673.5,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `3086`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 21602,
            discounts: 870.45,
            sales: 20731.55,
            cOGS: 12435,
            profit: 8296.55,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `745`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 260750,
            discounts: 23625,
            sales: 237125,
            cOGS: 351000,
            profit: 113875,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `1266`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 443100,
            discounts: 9660,
            sales: 433440,
            cOGS: 143520,
            profit: 289920,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `3790`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 1326500,
            discounts: 21490,
            sales: 1305010,
            cOGS: 319280,
            profit: 985730,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `4287`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 1286100,
            discounts: 18750,
            sales: 1267350,
            cOGS: 312500,
            profit: 954850,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3193`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 47895,
            discounts: 3420.9,
            sales: 44474.1,
            cOGS: 38010,
            profit: 6464.1,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `1967`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 39340,
            discounts: 1341,
            sales: 37999,
            cOGS: 11175,
            profit: 26824,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `631`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 9465,
            discounts: 2559.6,
            sales: 6905.4,
            cOGS: 28440,
            profit: 21534.6,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `3469`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 41628,
            discounts: 404.64,
            sales: 41223.36,
            cOGS: 1686,
            profit: 39537.36,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `570`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 6840,
            discounts: 1655.28,
            sales: 5184.72,
            cOGS: 6897,
            profit: 1712.28,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `3215`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 48225,
            discounts: 1827,
            sales: 46398,
            cOGS: 20300,
            profit: 26098,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `3754`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 26278,
            discounts: 110.46,
            sales: 26167.54,
            cOGS: 1315,
            profit: 24852.54,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `2187`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 273375,
            discounts: 6652.5,
            sales: 266722.5,
            cOGS: 106440,
            profit: 160282.5,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `1959`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 685650,
            discounts: 20580,
            sales: 665070,
            cOGS: 254800,
            profit: 410270,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `2181`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 763350,
            discounts: 30660,
            sales: 732690,
            cOGS: 379600,
            profit: 353090,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3559`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 24913,
            discounts: 589.26,
            sales: 24323.74,
            cOGS: 7015,
            profit: 17308.74,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `2205`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 26460,
            discounts: 1960.56,
            sales: 24499.44,
            cOGS: 8169,
            profit: 16330.44,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1890`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 661500,
            discounts: 31416,
            sales: 630084,
            cOGS: 388960,
            profit: 241124,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `1296`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 15552,
            discounts: 1655.28,
            sales: 13896.72,
            cOGS: 6897,
            profit: 6999.72,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `775`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 271250,
            discounts: 15267,
            sales: 255983,
            cOGS: 189020,
            profit: 66963,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `2417`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 302125,
            discounts: 7140,
            sales: 294985,
            cOGS: 114240,
            profit: 180745,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `1158`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 144750,
            discounts: 20662.5,
            sales: 124087.5,
            cOGS: 330600,
            profit: 206512.5,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `803`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 12045,
            discounts: 1377,
            sales: 10668,
            cOGS: 15300,
            profit: 4632,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `3705`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 1296750,
            discounts: 31416,
            sales: 1265334,
            cOGS: 388960,
            profit: 876374,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `589`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 4123,
            discounts: 629.16,
            sales: 3493.84,
            cOGS: 7490,
            profit: 3996.16,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `3797`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 1139100,
            discounts: 21978,
            sales: 1117122,
            cOGS: 305250,
            profit: 811872,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `1321`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 462350,
            discounts: 43596,
            sales: 418754,
            cOGS: 539760,
            profit: 121006,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `3999`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 59985,
            discounts: 2559.6,
            sales: 57425.4,
            cOGS: 28440,
            profit: 28985.4,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `4256`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 29792,
            discounts: 629.16,
            sales: 29162.84,
            cOGS: 7490,
            profit: 21672.84,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `1643`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 492900,
            discounts: 21978,
            sales: 470922,
            cOGS: 305250,
            profit: 165672,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `1912`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 38240,
            discounts: 1347.6,
            sales: 36892.4,
            cOGS: 11230,
            profit: 25662.4,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `1610`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 483000,
            discounts: 43848,
            sales: 439152,
            cOGS: 609000,
            profit: 169848,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `2160`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 270000,
            discounts: 14906.25,
            sales: 255093.75,
            cOGS: 238500,
            profit: 16593.75,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `466`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 163100,
            discounts: 35259,
            sales: 127841,
            cOGS: 436540,
            profit: 308699,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `328`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 114800,
            discounts: 15267,
            sales: 99533,
            cOGS: 189020,
            profit: 89487,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `4099`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 28693,
            discounts: 589.26,
            sales: 28103.74,
            cOGS: 7015,
            profit: 21088.74,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `990`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 346500,
            discounts: 43596,
            sales: 302904,
            cOGS: 539760,
            profit: 236856,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `1433`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 28660,
            discounts: 2108.4,
            sales: 26551.6,
            cOGS: 17570,
            profit: 8981.6,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1478`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 22170,
            discounts: 1978.2,
            sales: 20191.8,
            cOGS: 21980,
            profit: 1788.2,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3798`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 56970,
            discounts: 1568.7,
            sales: 55401.3,
            cOGS: 17430,
            profit: 37971.3,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `447`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 6705,
            discounts: 1037.7,
            sales: 5667.3,
            cOGS: 11530,
            profit: 5862.7,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1711`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 34220,
            discounts: 2108.4,
            sales: 32111.6,
            cOGS: 17570,
            profit: 14541.6,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `745`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 14900,
            discounts: 1201.2,
            sales: 13698.8,
            cOGS: 10010,
            profit: 3688.8,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `1732`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 12124,
            discounts: 559.86,
            sales: 11564.14,
            cOGS: 6665,
            profit: 4899.14,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `1759`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 26385,
            discounts: 1037.7,
            sales: 25347.3,
            cOGS: 11530,
            profit: 13817.3,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `338`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 4056,
            discounts: 610.68,
            sales: 3445.32,
            cOGS: 2181,
            profit: 1264.32,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `3911`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 46932,
            discounts: 1582.56,
            sales: 45349.44,
            cOGS: 5652,
            profit: 39697.44,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `3691`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 73820,
            discounts: 2567.6,
            sales: 71252.4,
            cOGS: 18340,
            profit: 52912.4,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `4473`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 53676,
            discounts: 1965.6,
            sales: 51710.4,
            cOGS: 7020,
            profit: 44690.4,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `383`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 4596,
            discounts: 1967.28,
            sales: 2628.72,
            cOGS: 7026,
            profit: 4397.28,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3105`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 21735,
            discounts: 505.19,
            sales: 21229.81,
            cOGS: 5155,
            profit: 16074.81,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `1062`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 15930,
            discounts: 1325.1,
            sales: 14604.9,
            cOGS: 12620,
            profit: 1984.9,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `4083`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 28581,
            discounts: 556.15,
            sales: 28024.85,
            cOGS: 5675,
            profit: 22349.85,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `3974`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 27818,
            discounts: 268.03,
            sales: 27549.97,
            cOGS: 2735,
            profit: 24814.97,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `3723`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 26061,
            discounts: 775.18,
            sales: 25285.82,
            cOGS: 7910,
            profit: 17375.82,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `2435`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 29220,
            discounts: 1460.34,
            sales: 27759.66,
            cOGS: 5215.5,
            profit: 22544.16,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `1678`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 20136,
            discounts: 1860.6,
            sales: 18275.4,
            cOGS: 6645,
            profit: 11630.4,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `1763`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 12341,
            discounts: 775.18,
            sales: 11565.82,
            cOGS: 7910,
            profit: 3655.82,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `4473`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 31311,
            discounts: 556.15,
            sales: 30754.85,
            cOGS: 5675,
            profit: 25079.85,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `1246`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 436100,
            discounts: 43144.5,
            sales: 392955.5,
            cOGS: 457860,
            profit: 64904.5,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `1615`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 484500,
            discounts: 9408,
            sales: 475092,
            cOGS: 112000,
            profit: 363092,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `749`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 224700,
            discounts: 45801,
            sales: 178899,
            cOGS: 545250,
            profit: 366351,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `1318`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 26360,
            discounts: 2766.4,
            sales: 23593.6,
            cOGS: 19760,
            profit: 3833.6,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `2882`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 864600,
            discounts: 45801,
            sales: 818799,
            cOGS: 545250,
            profit: 273549,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `3039`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 379875,
            discounts: 21875,
            sales: 358000,
            cOGS: 300000,
            profit: 58000,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2484`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 745200,
            discounts: 35742,
            sales: 709458,
            cOGS: 425500,
            profit: 283958,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3169`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 950700,
            discounts: 9408,
            sales: 941292,
            cOGS: 112000,
            profit: 829292,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `4080`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 510000,
            discounts: 30738.75,
            sales: 479261.25,
            cOGS: 421560,
            profit: 57701.25,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3943`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 59145,
            discounts: 2206.05,
            sales: 56938.95,
            cOGS: 21010,
            profit: 35928.95,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `784`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 11760,
            discounts: 3077.55,
            sales: 8682.45,
            cOGS: 29310,
            profit: 20627.55,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `253`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 5060,
            discounts: 2149,
            sales: 2911,
            cOGS: 15350,
            profit: 12439,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `1316`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 394800,
            discounts: 23583,
            sales: 371217,
            cOGS: 280750,
            profit: 90467,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `808`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 242400,
            discounts: 29484,
            sales: 212916,
            cOGS: 351000,
            profit: 138084,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `3295`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 39540,
            discounts: 2320.92,
            sales: 37219.08,
            cOGS: 8289,
            profit: 28930.08,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `520`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 3640,
            discounts: 1041.25,
            sales: 2598.75,
            cOGS: 10625,
            profit: 8026.25,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `799`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 239700,
            discounts: 34839,
            sales: 204861,
            cOGS: 414750,
            profit: 209889,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `3942`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 78840,
            discounts: 852.6,
            sales: 77987.4,
            cOGS: 6090,
            profit: 71897.4,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `2498`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 312250,
            discounts: 18261.25,
            sales: 293988.75,
            cOGS: 250440,
            profit: 43548.75,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `2517`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 50340,
            discounts: 2766.4,
            sales: 47573.6,
            cOGS: 19760,
            profit: 27813.6,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `3182`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 63640,
            discounts: 1989.4,
            sales: 61650.6,
            cOGS: 14210,
            profit: 47440.6,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `1145`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 343500,
            discounts: 28812,
            sales: 314688,
            cOGS: 343000,
            profit: 28312,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `895`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 17900,
            discounts: 823.2,
            sales: 17076.8,
            cOGS: 5880,
            profit: 11196.8,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `3814`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 45768,
            discounts: 2725.38,
            sales: 43042.62,
            cOGS: 9733.5,
            profit: 33309.12,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `1188`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 356400,
            discounts: 20139,
            sales: 336261,
            cOGS: 239750,
            profit: 96511,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `2233`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 669900,
            discounts: 57687,
            sales: 612213,
            cOGS: 686750,
            profit: 74537,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `421`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 52625,
            discounts: 14393.75,
            sales: 38231.25,
            cOGS: 197400,
            profit: 159168.75,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `269`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 94150,
            discounts: 70462,
            sales: 23688,
            cOGS: 747760,
            profit: 724072,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `3766`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 470750,
            discounts: 8697.5,
            sales: 462052.5,
            cOGS: 119280,
            profit: 342772.5,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `952`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 19040,
            discounts: 1565.2,
            sales: 17474.8,
            cOGS: 11180,
            profit: 6294.8,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `2964`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 889200,
            discounts: 28812,
            sales: 860388,
            cOGS: 343000,
            profit: 517388,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `1505`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 10535,
            discounts: 273.28,
            sales: 10261.72,
            cOGS: 2440,
            profit: 7821.72,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `1678`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 33560,
            discounts: 2051.2,
            sales: 31508.8,
            cOGS: 12820,
            profit: 18688.8,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `4249`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 29743,
            discounts: 143.92,
            sales: 29599.08,
            cOGS: 1285,
            profit: 28314.08,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `1677`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 33540,
            discounts: 2051.2,
            sales: 31488.8,
            cOGS: 12820,
            profit: 18668.8,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `3051`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 381375,
            discounts: 15400,
            sales: 365975,
            cOGS: 184800,
            profit: 181175,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `3372`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 50580,
            discounts: 588,
            sales: 49992,
            cOGS: 4900,
            profit: 45092,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `1686`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 590100,
            discounts: 38136,
            sales: 551964,
            cOGS: 354120,
            profit: 197844,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3086`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 46290,
            discounts: 3001.2,
            sales: 43288.8,
            cOGS: 25010,
            profit: 18278.8,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `4150`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 83000,
            discounts: 1132.8,
            sales: 81867.2,
            cOGS: 7080,
            profit: 74787.2,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `3027`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 60540,
            discounts: 1032,
            sales: 59508,
            cOGS: 6450,
            profit: 53058,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `4359`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 1307700,
            discounts: 37488,
            sales: 1270212,
            cOGS: 390500,
            profit: 879712,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `3628`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 1088400,
            discounts: 30792,
            sales: 1057608,
            cOGS: 320750,
            profit: 736858,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `1589`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 23835,
            discounts: 853.2,
            sales: 22981.8,
            cOGS: 7110,
            profit: 15871.8,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2679`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 334875,
            discounts: 11140,
            sales: 323735,
            cOGS: 133680,
            profit: 190055,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3401`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 23807,
            discounts: 705.04,
            sales: 23101.96,
            cOGS: 6295,
            profit: 16806.96,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2815`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 19705,
            discounts: 613.2,
            sales: 19091.8,
            cOGS: 5475,
            profit: 13616.8,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2964`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 59280,
            discounts: 2185.6,
            sales: 57094.4,
            cOGS: 13660,
            profit: 43434.4,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `4173`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1251900,
            discounts: 59040,
            sales: 1192860,
            cOGS: 615000,
            profit: 577860,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1157`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 8099,
            discounts: 379.68,
            sales: 7719.32,
            cOGS: 3390,
            profit: 4329.32,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3065`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 21455,
            discounts: 894.88,
            sales: 20560.12,
            cOGS: 7990,
            profit: 12570.12,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `1962`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 13734,
            discounts: 1349.04,
            sales: 12384.96,
            cOGS: 12045,
            profit: 339.96,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `4080`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 81600,
            discounts: 3094.4,
            sales: 78505.6,
            cOGS: 19340,
            profit: 59165.6,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `1713`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 34260,
            discounts: 4788.8,
            sales: 29471.2,
            cOGS: 29930,
            profit: 458.8,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2795`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 978250,
            discounts: 60088,
            sales: 918162,
            cOGS: 557960,
            profit: 360202,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `4082`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 28574,
            discounts: 1089.76,
            sales: 27484.24,
            cOGS: 9730,
            profit: 17754.24,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `1691`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 591850,
            discounts: 38136,
            sales: 553714,
            cOGS: 354120,
            profit: 199594,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `2305`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 27660,
            discounts: 574.08,
            sales: 27085.92,
            cOGS: 1794,
            profit: 25291.92,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `3401`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 23807,
            discounts: 1627.92,
            sales: 22179.08,
            cOGS: 14535,
            profit: 7644.08,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `2288`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 16016,
            discounts: 1309.28,
            sales: 14706.72,
            cOGS: 11690,
            profit: 3016.72,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `2399`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 719700,
            discounts: 9264,
            sales: 710436,
            cOGS: 96500,
            profit: 613936,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `4086`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 1225800,
            discounts: 15240,
            sales: 1210560,
            cOGS: 158750,
            profit: 1051810,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `2651`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 927850,
            discounts: 16086,
            sales: 911764,
            cOGS: 149370,
            profit: 762394,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `3971`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 27797,
            discounts: 1309.28,
            sales: 26487.72,
            cOGS: 11690,
            profit: 14797.72,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `2512`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 879200,
            discounts: 10668,
            sales: 868532,
            cOGS: 99060,
            profit: 769472,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `2745`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 960750,
            discounts: 11816,
            sales: 948934,
            cOGS: 109720,
            profit: 839214,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `1903`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 570900,
            discounts: 51216,
            sales: 519684,
            cOGS: 533500,
            profit: 13816,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `647`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 194100,
            discounts: 19392,
            sales: 174708,
            cOGS: 202000,
            profit: 27292,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `2914`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 58280,
            discounts: 1132.8,
            sales: 57147.2,
            cOGS: 7080,
            profit: 50067.2,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `1889`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 13223,
            discounts: 1627.92,
            sales: 11595.08,
            cOGS: 14535,
            profit: 2939.92,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `1466`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 29320,
            discounts: 2185.6,
            sales: 27134.4,
            cOGS: 13660,
            profit: 13474.4,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `887`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 266100,
            discounts: 59040,
            sales: 207060,
            cOGS: 615000,
            profit: 407940,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `395`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 7900,
            discounts: 2432,
            sales: 5468,
            cOGS: 15200,
            profit: 9732,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `1693`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 25395,
            discounts: 853.2,
            sales: 24541.8,
            cOGS: 7110,
            profit: 17431.8,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `2459`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 29508,
            discounts: 1320,
            sales: 28188,
            cOGS: 4125,
            profit: 24063,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `2649`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 794700,
            discounts: 15240,
            sales: 779460,
            cOGS: 158750,
            profit: 620710,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `3608`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 72160,
            discounts: 698.4,
            sales: 71461.6,
            cOGS: 4365,
            profit: 67096.6,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1073`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 321900,
            discounts: 29538,
            sales: 292362,
            cOGS: 273500,
            profit: 18862,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `1754`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 21048,
            discounts: 396.36,
            sales: 20651.64,
            cOGS: 1101,
            profit: 19550.64,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `2167`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 650100,
            discounts: 102667.5,
            sales: 547432.5,
            cOGS: 950625,
            profit: 403192.5,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `1319`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 461650,
            discounts: 52479,
            sales: 409171,
            cOGS: 433160,
            profit: 23989,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `1679`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 503700,
            discounts: 8694,
            sales: 495006,
            cOGS: 80500,
            profit: 414506,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `1252`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 15024,
            discounts: 2506.68,
            sales: 12517.32,
            cOGS: 6963,
            profit: 5554.32,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3493`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 436625,
            discounts: 20891.25,
            sales: 415733.75,
            cOGS: 222840,
            profit: 192893.75,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `1697`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 11879,
            discounts: 1014.93,
            sales: 10864.07,
            cOGS: 8055,
            profit: 2809.07,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `1156`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 144500,
            discounts: 31466.25,
            sales: 113033.75,
            cOGS: 335640,
            profit: 222606.25,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `726`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 217800,
            discounts: 9018,
            sales: 208782,
            cOGS: 83500,
            profit: 125282,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `1153`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 345900,
            discounts: 69255,
            sales: 276645,
            cOGS: 641250,
            profit: 364605,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2720`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 952000,
            discounts: 76135.5,
            sales: 875864.5,
            cOGS: 628420,
            profit: 247444.5,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3658`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 54870,
            discounts: 4961.25,
            sales: 49908.75,
            cOGS: 36750,
            profit: 13158.75,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2950`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 885000,
            discounts: 29538,
            sales: 855462,
            cOGS: 273500,
            profit: 581962,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1821`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 27315,
            discounts: 1656.45,
            sales: 25658.55,
            cOGS: 12270,
            profit: 13388.55,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `4174`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 50088,
            discounts: 396.36,
            sales: 49691.64,
            cOGS: 1101,
            profit: 48590.64,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1127`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 338100,
            discounts: 35748,
            sales: 302352,
            cOGS: 331000,
            profit: 28648,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2209`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 26508,
            discounts: 1917,
            sales: 24591,
            cOGS: 5325,
            profit: 19266,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `862`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 107750,
            discounts: 31466.25,
            sales: 76283.75,
            cOGS: 335640,
            profit: 259356.25,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `3805`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 57075,
            discounts: 330.75,
            sales: 56744.25,
            cOGS: 2450,
            profit: 54294.25,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `1415`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 424500,
            discounts: 102424.5,
            sales: 322075.5,
            cOGS: 948375,
            profit: 626299.5,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `2231`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 780850,
            discounts: 41170.5,
            sales: 739679.5,
            cOGS: 339820,
            profit: 399859.5,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `3649`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 456125,
            discounts: 6378.75,
            sales: 449746.25,
            cOGS: 68040,
            profit: 381706.25,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `2948`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 368500,
            discounts: 23737.5,
            sales: 344762.5,
            cOGS: 253200,
            profit: 91562.5,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `3395`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 1188250,
            discounts: 39973.5,
            sales: 1148276.5,
            cOGS: 329940,
            profit: 818336.5,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `2650`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 31800,
            discounts: 2112.48,
            sales: 29687.52,
            cOGS: 5868,
            profit: 23819.52,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `585`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 175500,
            discounts: 71793,
            sales: 103707,
            cOGS: 664750,
            profit: 561043,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `1316`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 460600,
            discounts: 42572.25,
            sales: 418027.75,
            cOGS: 351390,
            profit: 66637.75,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `4459`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 53508,
            discounts: 950.4,
            sales: 52557.6,
            cOGS: 2640,
            profit: 49917.6,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `2711`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 813300,
            discounts: 50409,
            sales: 762891,
            cOGS: 466750,
            profit: 296141,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `2621`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 31452,
            discounts: 2412.72,
            sales: 29039.28,
            cOGS: 6702,
            profit: 22337.28,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `3613`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 54195,
            discounts: 1656.45,
            sales: 52538.55,
            cOGS: 12270,
            profit: 40268.55,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `1847`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 230875,
            discounts: 9866.25,
            sales: 221008.75,
            cOGS: 105240,
            profit: 115768.75,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `2996`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 1048600,
            discounts: 65236.5,
            sales: 983363.5,
            cOGS: 538460,
            profit: 444903.5,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `2838`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 993300,
            discounts: 39973.5,
            sales: 953326.5,
            cOGS: 329940,
            profit: 623386.5,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `1302`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 19530,
            discounts: 1309.5,
            sales: 18220.5,
            cOGS: 9700,
            profit: 8520.5,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `1536`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 30720,
            discounts: 3049.2,
            sales: 27670.8,
            cOGS: 16940,
            profit: 10730.8,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `1291`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 25820,
            discounts: 1193.4,
            sales: 24626.6,
            cOGS: 6630,
            profit: 17996.6,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1213`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 8491,
            discounts: 515.97,
            sales: 7975.03,
            cOGS: 4095,
            profit: 3880.03,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `2370`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 28440,
            discounts: 1706.4,
            sales: 26733.6,
            cOGS: 4740,
            profit: 21993.6,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `1979`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 13853,
            discounts: 328.23,
            sales: 13524.77,
            cOGS: 2605,
            profit: 10919.77,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `2879`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 57580,
            discounts: 1751.4,
            sales: 55828.6,
            cOGS: 9730,
            profit: 46098.6,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `1707`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 34140,
            discounts: 1868.4,
            sales: 32271.6,
            cOGS: 10380,
            profit: 21891.6,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2933`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 20531,
            discounts: 226.8,
            sales: 20304.2,
            cOGS: 1800,
            profit: 18504.2,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `1014`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 12168,
            discounts: 2124.36,
            sales: 10043.64,
            cOGS: 5901,
            profit: 4142.64,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `693`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 10395,
            discounts: 3547.8,
            sales: 6847.2,
            cOGS: 26280,
            profit: 19432.8,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `3741`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 26187,
            discounts: 226.8,
            sales: 25960.2,
            cOGS: 1800,
            profit: 24160.2,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `3116`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 62320,
            discounts: 4827.6,
            sales: 57492.4,
            cOGS: 26820,
            profit: 30672.4,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `3995`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 27965,
            discounts: 328.23,
            sales: 27636.77,
            cOGS: 2605,
            profit: 25031.77,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `953`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 19060,
            discounts: 1868.4,
            sales: 17191.6,
            cOGS: 10380,
            profit: 6811.6,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `2530`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 37950,
            discounts: 2201.18,
            sales: 35748.82,
            cOGS: 16305,
            profit: 19443.82,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `2565`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 30780,
            discounts: 330.48,
            sales: 30449.52,
            cOGS: 918,
            profit: 29531.52,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `4297`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 51564,
            discounts: 463.2,
            sales: 51100.8,
            cOGS: 1158,
            profit: 49942.8,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `2871`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 20097,
            discounts: 1629.6,
            sales: 18467.4,
            cOGS: 11640,
            profit: 6827.4,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3537`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 42444,
            discounts: 463.2,
            sales: 41980.8,
            cOGS: 1158,
            profit: 40822.8,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `1598`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 199750,
            discounts: 43068.75,
            sales: 156681.25,
            cOGS: 413460,
            profit: 256778.75,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `2616`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 327000,
            discounts: 18525,
            sales: 308475,
            cOGS: 177840,
            profit: 130635,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `2836`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 992600,
            discounts: 80955,
            sales: 911645,
            cOGS: 601380,
            profit: 310265,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `4023`,
            manufacturingPrice: 5,
            salePrice: 125,
            grossSales: 502875,
            discounts: 22550,
            sales: 480325,
            cOGS: 216480,
            profit: 263845,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3994`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 59910,
            discounts: 3108,
            sales: 56802,
            cOGS: 20720,
            profit: 36082,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2928`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 58560,
            discounts: 3908,
            sales: 54652,
            cOGS: 19540,
            profit: 35112,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2912`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 873600,
            discounts: 17730,
            sales: 855870,
            cOGS: 147750,
            profit: 708120,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3671`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 55065,
            discounts: 3250.5,
            sales: 51814.5,
            cOGS: 21670,
            profit: 30144.5,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2778`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 55560,
            discounts: 482,
            sales: 55078,
            cOGS: 2410,
            profit: 52668,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `405`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 6075,
            discounts: 1021.5,
            sales: 5053.5,
            cOGS: 6810,
            profit: 1756.5,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `2013`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 30195,
            discounts: 765,
            sales: 29430,
            cOGS: 5100,
            profit: 24330,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `2634`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 39510,
            discounts: 1185,
            sales: 38325,
            cOGS: 7900,
            profit: 30425,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `4166`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 1458100,
            discounts: 22365,
            sales: 1435735,
            cOGS: 166140,
            profit: 1269595,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `355`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 44375,
            discounts: 19950,
            sales: 24425,
            cOGS: 191520,
            profit: 167095,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `2382`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 714600,
            discounts: 68820,
            sales: 645780,
            cOGS: 573500,
            profit: 72280,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `4170`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 83400,
            discounts: 482,
            sales: 82918,
            cOGS: 2410,
            profit: 80508,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `892`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 6244,
            discounts: 1865.5,
            sales: 4378.5,
            cOGS: 13325,
            profit: 8946.5,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `2200`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 275000,
            discounts: 23950,
            sales: 251050,
            cOGS: 229920,
            profit: 21130,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `3389`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 1016700,
            discounts: 25590,
            sales: 991110,
            cOGS: 213250,
            profit: 777860,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `2990`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 373750,
            discounts: 4262.5,
            sales: 369487.5,
            cOGS: 40920,
            profit: 328567.5,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `4013`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 60195,
            discounts: 961.5,
            sales: 59233.5,
            cOGS: 6410,
            profit: 52823.5,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `739`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 258650,
            discounts: 98245,
            sales: 160405,
            cOGS: 729820,
            profit: 569415,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `1989`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 596700,
            discounts: 12960,
            sales: 583740,
            cOGS: 108000,
            profit: 475740,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `2991`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 897300,
            discounts: 68820,
            sales: 828480,
            cOGS: 573500,
            profit: 254980,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `4237`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 63555,
            discounts: 3250.5,
            sales: 60304.5,
            cOGS: 21670,
            profit: 38634.5,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `1442`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 180250,
            discounts: 31612.5,
            sales: 148637.5,
            cOGS: 303480,
            profit: 154842.5,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `2712`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 949200,
            discounts: 65450,
            sales: 883750,
            cOGS: 486200,
            profit: 397550,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `1508`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 188500,
            discounts: 7237.5,
            sales: 181262.5,
            cOGS: 69480,
            profit: 111782.5,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `4245`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 1485750,
            discounts: 78400,
            sales: 1407350,
            cOGS: 582400,
            profit: 824950,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `2630`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 789000,
            discounts: 89790,
            sales: 699210,
            cOGS: 748250,
            profit: 49040,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `1182`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 14184,
            discounts: 4224.6,
            sales: 9959.4,
            cOGS: 10561.5,
            profit: 602.1,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `1221`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 24420,
            discounts: 4078,
            sales: 20342,
            cOGS: 20390,
            profit: 48,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `963`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 11556,
            discounts: 3088.8,
            sales: 8467.2,
            cOGS: 7722,
            profit: 745.2,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `3243`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 1135050,
            discounts: 24745,
            sales: 1110305,
            cOGS: 183820,
            profit: 926485,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `1120`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 16800,
            discounts: 3108,
            sales: 13692,
            cOGS: 20720,
            profit: 7028,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `1174`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 352200,
            discounts: 25590,
            sales: 326610,
            cOGS: 213250,
            profit: 113360,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `2541`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 30492,
            discounts: 1581.36,
            sales: 28910.64,
            cOGS: 3594,
            profit: 25316.64,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3246`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 22722,
            discounts: 1949.64,
            sales: 20772.36,
            cOGS: 12660,
            profit: 8112.36,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1531`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 18372,
            discounts: 1581.36,
            sales: 16790.64,
            cOGS: 3594,
            profit: 13196.64,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `2526`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 37890,
            discounts: 633.6,
            sales: 37256.4,
            cOGS: 3840,
            profit: 33416.4,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `1136`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 13632,
            discounts: 623.04,
            sales: 13008.96,
            cOGS: 1416,
            profit: 11592.96,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `1983`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 13881,
            discounts: 1215.83,
            sales: 12665.17,
            cOGS: 7895,
            profit: 4770.17,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `3259`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 39108,
            discounts: 1326.6,
            sales: 37781.4,
            cOGS: 3015,
            profit: 34766.4,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `3267`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 49005,
            discounts: 5279.17,
            sales: 43725.82,
            cOGS: 31995,
            profit: 11730.82,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `2454`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 29448,
            discounts: 623.04,
            sales: 28824.96,
            cOGS: 1416,
            profit: 27408.96,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `2643`,
            manufacturingPrice: 3,
            salePrice: 12,
            grossSales: 31716,
            discounts: 2556.84,
            sales: 29159.16,
            cOGS: 5811,
            profit: 23348.16,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `383`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 134050,
            discounts: 30492,
            sales: 103558,
            cOGS: 205920,
            profit: 102362,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `2801`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 840300,
            discounts: 92763,
            sales: 747537,
            cOGS: 702750,
            profit: 44787,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `1667`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 208375,
            discounts: 33563.75,
            sales: 174811.25,
            cOGS: 292920,
            profit: 118108.75,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `3539`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 53085,
            discounts: 2574,
            sales: 50511,
            cOGS: 15600,
            profit: 34911,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `4226`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 29582,
            discounts: 2083.62,
            sales: 27498.38,
            cOGS: 13530,
            profit: 13968.38,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `2220`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 777000,
            discounts: 29491,
            sales: 747509,
            cOGS: 199160,
            profit: 548349,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `776`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 15520,
            discounts: 6582.4,
            sales: 8937.6,
            cOGS: 29920,
            profit: 20982.4,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `553`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 8295,
            discounts: 3559.05,
            sales: 4735.95,
            cOGS: 21570,
            profit: 16834.05,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2107`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 632100,
            discounts: 28809,
            sales: 603291,
            cOGS: 218250,
            profit: 385041,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2468`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 49360,
            discounts: 2468.4,
            sales: 46891.6,
            cOGS: 11220,
            profit: 35671.6,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `1905`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 666750,
            discounts: 81023.25,
            sales: 585726.75,
            cOGS: 547170,
            profit: 38556.75,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3658`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 43896,
            discounts: 5314.32,
            sales: 38581.68,
            cOGS: 12078,
            profit: 26503.68,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `4301`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 51612,
            discounts: 3201.66,
            sales: 48410.34,
            cOGS: 7276.5,
            profit: 41133.84,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2446`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 48920,
            discounts: 5266.8,
            sales: 43653.2,
            cOGS: 23940,
            profit: 19713.2,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `4209`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 63135,
            discounts: 3273.6,
            sales: 59861.4,
            cOGS: 19840,
            profit: 40021.4,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3353`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 419125,
            discounts: 33563.75,
            sales: 385561.25,
            cOGS: 292920,
            profit: 92641.25,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `1401`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 28020,
            discounts: 6582.4,
            sales: 21437.6,
            cOGS: 29920,
            profit: 8482.4,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `1865`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 559500,
            discounts: 45078,
            sales: 514422,
            cOGS: 341500,
            profit: 172922,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `463`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 9260,
            discounts: 6171,
            sales: 3089,
            cOGS: 28050,
            profit: 24961,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `4177`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 62655,
            discounts: 1080.75,
            sales: 61574.25,
            cOGS: 6550,
            profit: 55024.25,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `2523`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 883050,
            discounts: 13244,
            sales: 869806,
            cOGS: 89440,
            profit: 780366,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `1930`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 13510,
            discounts: 1392.16,
            sales: 12117.84,
            cOGS: 9040,
            profit: 3077.84,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `1301`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 15612,
            discounts: 2288.88,
            sales: 13323.12,
            cOGS: 5202,
            profit: 8121.12,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `4125`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 515625,
            discounts: 7617.5,
            sales: 508007.5,
            cOGS: 66480,
            profit: 441527.5,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `607`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 12140,
            discounts: 6457,
            sales: 5683,
            cOGS: 29350,
            profit: 23667,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `478`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 59750,
            discounts: 43518.75,
            sales: 16231.25,
            cOGS: 379800,
            profit: 363568.75,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `4489`,
            manufacturingPrice: 260,
            salePrice: 20,
            grossSales: 89780,
            discounts: 5783.8,
            sales: 83996.2,
            cOGS: 26290,
            profit: 57706.2,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `1504`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 188000,
            discounts: 19703.75,
            sales: 168296.25,
            cOGS: 171960,
            profit: 3663.75,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `3763`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 470375,
            discounts: 13021.25,
            sales: 457353.75,
            cOGS: 113640,
            profit: 343713.75,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `2412`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 844200,
            discounts: 13244,
            sales: 830956,
            cOGS: 89440,
            profit: 741516,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `2342`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 35130,
            discounts: 3559.05,
            sales: 31570.95,
            cOGS: 21570,
            profit: 10000.95,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `4451`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 31157,
            discounts: 292.6,
            sales: 30864.4,
            cOGS: 1900,
            profit: 28964.4,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `3796`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 1328600,
            discounts: 37212,
            sales: 1291388,
            cOGS: 230360,
            profit: 1061028,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `2286`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 285750,
            discounts: 36240,
            sales: 249510,
            cOGS: 289920,
            profit: 40410,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `3614`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 451750,
            discounts: 32340,
            sales: 419410,
            cOGS: 258720,
            profit: 160690,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1716`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 25740,
            discounts: 4840.2,
            sales: 20899.8,
            cOGS: 26890,
            profit: 5990.2,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `1301`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 19515,
            discounts: 1218.6,
            sales: 18296.4,
            cOGS: 6770,
            profit: 11526.4,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `4175`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 1252500,
            discounts: 63828,
            sales: 1188672,
            cOGS: 443250,
            profit: 745422,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `975`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 6825,
            discounts: 2032.8,
            sales: 4792.2,
            cOGS: 12100,
            profit: 7307.8,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `1154`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 8078,
            discounts: 2296.56,
            sales: 5781.44,
            cOGS: 13670,
            profit: 7888.56,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `1873`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 37460,
            discounts: 4116,
            sales: 33344,
            cOGS: 17150,
            profit: 16194,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `3766`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 1129800,
            discounts: 42696,
            sales: 1087104,
            cOGS: 296500,
            profit: 790604,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3558`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1067400,
            discounts: 125820,
            sales: 941580,
            cOGS: 873750,
            profit: 67830,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `3156`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 1104600,
            discounts: 37212,
            sales: 1067388,
            cOGS: 230360,
            profit: 837028,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2994`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 374250,
            discounts: 32340,
            sales: 341910,
            cOGS: 258720,
            profit: 83190,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2087`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 41740,
            discounts: 2172,
            sales: 39568,
            cOGS: 9050,
            profit: 30518,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `1056`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 21120,
            discounts: 4116,
            sales: 17004,
            cOGS: 17150,
            profit: 146,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1353`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 473550,
            discounts: 66948,
            sales: 406602,
            cOGS: 414440,
            profit: 7838,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `416`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 124800,
            discounts: 48924,
            sales: 75876,
            cOGS: 339750,
            profit: 263874,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `3880`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1164000,
            discounts: 77400,
            sales: 1086600,
            cOGS: 537500,
            profit: 549100,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `809`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 283150,
            discounts: 50274,
            sales: 232876,
            cOGS: 311220,
            profit: 78344,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `1892`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 28380,
            discounts: 684,
            sales: 27696,
            cOGS: 3800,
            profit: 23896,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2072`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 41440,
            discounts: 2959.2,
            sales: 38480.8,
            cOGS: 12330,
            profit: 26150.8,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `3052`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 1068200,
            discounts: 58590,
            sales: 1009610,
            cOGS: 362700,
            profit: 646910,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `3121`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 1092350,
            discounts: 41412,
            sales: 1050938,
            cOGS: 256360,
            profit: 794578,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `2059`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 41180,
            discounts: 2172,
            sales: 39008,
            cOGS: 9050,
            profit: 29958,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `4254`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 51048,
            discounts: 3036.96,
            sales: 48011.04,
            cOGS: 6327,
            profit: 41684.04,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `1293`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 19395,
            discounts: 6974.1,
            sales: 12420.9,
            cOGS: 38745,
            profit: 26324.1,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `1293`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 452550,
            discounts: 26166,
            sales: 426384,
            cOGS: 161980,
            profit: 264404,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `230`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 80500,
            discounts: 41412,
            sales: 39088,
            cOGS: 256360,
            profit: 217272,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `1723`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 215375,
            discounts: 35805,
            sales: 179570,
            cOGS: 286440,
            profit: 106870,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `240`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 4800,
            discounts: 2959.2,
            sales: 1840.8,
            cOGS: 12330,
            profit: 10489.2,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `2571`,
            manufacturingPrice: 260,
            salePrice: 350,
            grossSales: 899850,
            discounts: 11340,
            sales: 888510,
            cOGS: 70200,
            profit: 818310,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `1661`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 11627,
            discounts: 2874.06,
            sales: 8752.94,
            cOGS: 17107.5,
            profit: 8354.56,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `4474`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 31318,
            discounts: 2296.56,
            sales: 29021.44,
            cOGS: 13670,
            profit: 15351.44,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `833`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 12495,
            discounts: 4586.4,
            sales: 7908.6,
            cOGS: 25480,
            profit: 17571.4,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `674`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 13480,
            discounts: 6051.6,
            sales: 7428.4,
            cOGS: 25215,
            profit: 17786.6,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `778`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 9336,
            discounts: 3831.84,
            sales: 5504.16,
            cOGS: 7983,
            profit: 2478.84,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `1457`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 29140,
            discounts: 3674.4,
            sales: 25465.6,
            cOGS: 15310,
            profit: 10155.6,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `3158`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 22106,
            discounts: 1252.44,
            sales: 20853.56,
            cOGS: 7455,
            profit: 13398.56,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `4095`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 81900,
            discounts: 3674.4,
            sales: 78225.6,
            cOGS: 15310,
            profit: 62915.6,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `3170`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 38040,
            discounts: 3975.84,
            sales: 34064.16,
            cOGS: 8283,
            profit: 25781.16,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `493`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 7395,
            discounts: 5005.65,
            sales: 2389.35,
            cOGS: 25670,
            profit: 23280.65,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `3286`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 49290,
            discounts: 5005.65,
            sales: 44284.35,
            cOGS: 25670,
            profit: 18614.35,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `3563`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 1247050,
            discounts: 41996.5,
            sales: 1205053.5,
            cOGS: 239980,
            profit: 965073.5,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `4109`,
            manufacturingPrice: 3,
            salePrice: 350,
            grossSales: 1438150,
            discounts: 81445,
            sales: 1356705,
            cOGS: 465400,
            profit: 891305,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `3653`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 73060,
            discounts: 1149.2,
            sales: 71910.8,
            cOGS: 4420,
            profit: 67490.8,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `2203`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 771050,
            discounts: 44703.75,
            sales: 726346.25,
            cOGS: 255450,
            profit: 470896.25,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `2924`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 20468,
            discounts: 1181.18,
            sales: 19286.82,
            cOGS: 6490,
            profit: 12796.82,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `2650`,
            manufacturingPrice: 5,
            salePrice: 12,
            grossSales: 31800,
            discounts: 942.24,
            sales: 30857.76,
            cOGS: 1812,
            profit: 29045.76,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `1194`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 23880,
            discounts: 5863,
            sales: 18017,
            cOGS: 22550,
            profit: 4533,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `3366`,
            manufacturingPrice: 5,
            salePrice: 20,
            grossSales: 67320,
            discounts: 3247.4,
            sales: 64072.6,
            cOGS: 12490,
            profit: 51582.6,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1325`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 9275,
            discounts: 1309.04,
            sales: 7965.97,
            cOGS: 7192.5,
            profit: 773.47,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `4243`,
            manufacturingPrice: 10,
            salePrice: 300,
            grossSales: 1272900,
            discounts: 31473,
            sales: 1241427,
            cOGS: 201750,
            profit: 1039677,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `2887`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 57740,
            discounts: 6866.6,
            sales: 50873.4,
            cOGS: 26410,
            profit: 24463.4,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3839`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 76780,
            discounts: 7040.8,
            sales: 69739.2,
            cOGS: 27080,
            profit: 42659.2,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `1863`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 652050,
            discounts: 119756,
            sales: 532294,
            cOGS: 684320,
            profit: 152026,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2858`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 357250,
            discounts: 25723.75,
            sales: 331526.25,
            cOGS: 189960,
            profit: 141566.25,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2868`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 34416,
            discounts: 890.76,
            sales: 33525.24,
            cOGS: 1713,
            profit: 31812.24,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `3805`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 26635,
            discounts: 2453.36,
            sales: 24181.64,
            cOGS: 13480,
            profit: 10701.64,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3914`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 58710,
            discounts: 3051.75,
            sales: 55658.25,
            cOGS: 15650,
            profit: 40008.25,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `524`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 10480,
            discounts: 3247.4,
            sales: 7232.6,
            cOGS: 12490,
            profit: 5257.4,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `3095`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 1083250,
            discounts: 16243.5,
            sales: 1067006.5,
            cOGS: 92820,
            profit: 974186.5,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2410`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 28920,
            discounts: 1580.28,
            sales: 27339.72,
            cOGS: 3039,
            profit: 24300.72,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `4263`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 63945,
            discounts: 7795.13,
            sales: 56149.88,
            cOGS: 39975,
            profit: 16174.88,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `2239`,
            manufacturingPrice: 120,
            salePrice: 350,
            grossSales: 783650,
            discounts: 119756,
            sales: 663894,
            cOGS: 684320,
            profit: 20426,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `569`,
            manufacturingPrice: 120,
            salePrice: 7,
            grossSales: 3983,
            discounts: 1082.9,
            sales: 2900.1,
            cOGS: 5950,
            profit: 3049.9,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `3889`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 46668,
            discounts: 942.24,
            sales: 45725.76,
            cOGS: 1812,
            profit: 43913.76,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `1378`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 20670,
            discounts: 1287,
            sales: 19383,
            cOGS: 6600,
            profit: 12783,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `2253`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 27036,
            discounts: 639.6,
            sales: 26396.4,
            cOGS: 1230,
            profit: 25166.4,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `3202`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 960600,
            discounts: 101595,
            sales: 859005,
            cOGS: 651250,
            profit: 207755,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `3835`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 46020,
            discounts: 1580.28,
            sales: 44439.72,
            cOGS: 3039,
            profit: 41400.72,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `2487`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 310875,
            discounts: 25723.75,
            sales: 285151.25,
            cOGS: 189960,
            profit: 95191.25,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `4428`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 66420,
            discounts: 3051.75,
            sales: 63368.25,
            cOGS: 15650,
            profit: 47718.25,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `1200`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 150000,
            discounts: 26958.75,
            sales: 123041.25,
            cOGS: 199080,
            profit: 76038.75,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `2953`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 20671,
            discounts: 1082.9,
            sales: 19588.1,
            cOGS: 5950,
            profit: 13638.1,
            date: `6/1/19`,
            monthName: `June`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `1453`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 17436,
            discounts: 639.6,
            sales: 16796.4,
            cOGS: 1230,
            profit: 15566.4,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Luxe`,
            unitsSold: `865`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 10380,
            discounts: 2761.2,
            sales: 7618.8,
            cOGS: 5310,
            profit: 2308.8,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `1072`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 21440,
            discounts: 7221.2,
            sales: 14218.8,
            cOGS: 25790,
            profit: 11571.2,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `1737`,
            manufacturingPrice: 3,
            salePrice: 20,
            grossSales: 34740,
            discounts: 4880.4,
            sales: 29859.6,
            cOGS: 17430,
            profit: 12429.6,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `1535`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 10745,
            discounts: 2936.08,
            sales: 7808.92,
            cOGS: 14980,
            profit: 7171.08,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `2532`,
            manufacturingPrice: 3,
            salePrice: 7,
            grossSales: 17724,
            discounts: 274.4,
            sales: 17449.6,
            cOGS: 1400,
            profit: 16049.6,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Royal Oak`,
            unitsSold: `1765`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 12355,
            discounts: 287.14,
            sales: 12067.86,
            cOGS: 1465,
            profit: 10602.86,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Royal Oak`,
            unitsSold: `1567`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 10969,
            discounts: 2936.08,
            sales: 8032.92,
            cOGS: 14980,
            profit: 6947.08,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2640`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 39600,
            discounts: 583.8,
            sales: 39016.2,
            cOGS: 2780,
            profit: 36236.2,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3079`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 61580,
            discounts: 6798.4,
            sales: 54781.6,
            cOGS: 24280,
            profit: 30501.6,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `4130`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 61950,
            discounts: 3710.7,
            sales: 58239.3,
            cOGS: 17670,
            profit: 40569.3,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2938`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 35256,
            discounts: 2340.24,
            sales: 32915.76,
            cOGS: 4179,
            profit: 28736.76,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `3080`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 21560,
            discounts: 274.4,
            sales: 21285.6,
            cOGS: 1400,
            profit: 19885.6,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `1530`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 18360,
            discounts: 2340.24,
            sales: 16019.76,
            cOGS: 4179,
            profit: 11840.76,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `3537`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 42444,
            discounts: 3385.2,
            sales: 39058.8,
            cOGS: 6045,
            profit: 33013.8,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `2021`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 606300,
            discounts: 33642,
            sales: 572658,
            cOGS: 200250,
            profit: 372408,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `1804`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 225500,
            discounts: 17902.5,
            sales: 207597.5,
            cOGS: 122760,
            profit: 84837.5,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1014`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 304200,
            discounts: 62832,
            sales: 241368,
            cOGS: 374000,
            profit: 132632,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Kensington`,
            unitsSold: `2913`,
            manufacturingPrice: 3,
            salePrice: 300,
            grossSales: 873900,
            discounts: 42420,
            sales: 831480,
            cOGS: 252500,
            profit: 578980,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `763`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 11445,
            discounts: 3177.3,
            sales: 8267.7,
            cOGS: 15130,
            profit: 6862.3,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Kensington`,
            unitsSold: `1425`,
            manufacturingPrice: 3,
            salePrice: 15,
            grossSales: 21375,
            discounts: 4830,
            sales: 16545,
            cOGS: 23000,
            profit: 6455,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Kensington`,
            unitsSold: `4357`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 544625,
            discounts: 49367.5,
            sales: 495257.5,
            cOGS: 338520,
            profit: 156737.5,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `2138`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 748300,
            discounts: 109147.5,
            sales: 639152.5,
            cOGS: 579150,
            profit: 60002.5,
            date: `1/1/19`,
            monthName: `January`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Royal Oak`,
            unitsSold: `3825`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 1338750,
            discounts: 58751,
            sales: 1279999,
            cOGS: 311740,
            profit: 968259,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `3393`,
            manufacturingPrice: 5,
            salePrice: 350,
            grossSales: 1187550,
            discounts: 9800,
            sales: 1177750,
            cOGS: 52000,
            profit: 1125750,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `2215`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 15505,
            discounts: 380.24,
            sales: 15124.76,
            cOGS: 1940,
            profit: 13184.76,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `2278`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 15946,
            discounts: 1692.46,
            sales: 14253.54,
            cOGS: 8635,
            profit: 5618.54,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Royal Oak`,
            unitsSold: `403`,
            manufacturingPrice: 5,
            salePrice: 15,
            grossSales: 6045,
            discounts: 4830,
            sales: 1215,
            cOGS: 23000,
            profit: 21785,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `289`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 5780,
            discounts: 728,
            sales: 5052,
            cOGS: 2600,
            profit: 2452,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `749`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 11235,
            discounts: 5187,
            sales: 6048,
            cOGS: 24700,
            profit: 18652,
            date: `9/1/18`,
            monthName: `September`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `372`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 5580,
            discounts: 3660.3,
            sales: 1919.7,
            cOGS: 17430,
            profit: 15510.3,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3781`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 45372,
            discounts: 4895.52,
            sales: 40476.48,
            cOGS: 8742,
            profit: 31734.48,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1785`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 12495,
            discounts: 1696.38,
            sales: 10798.62,
            cOGS: 8655,
            profit: 2143.62,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `4029`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 1410150,
            discounts: 34300,
            sales: 1375850,
            cOGS: 182000,
            profit: 1193850,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2813`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 33756,
            discounts: 3732.96,
            sales: 30023.04,
            cOGS: 6666,
            profit: 23357.04,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `2150`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 752500,
            discounts: 57673,
            sales: 694827,
            cOGS: 306020,
            profit: 388807,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `2093`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 732550,
            discounts: 94178,
            sales: 638372,
            cOGS: 499720,
            profit: 138652,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `4391`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 548875,
            discounts: 27562.5,
            sales: 521312.5,
            cOGS: 189000,
            profit: 332312.5,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `2695`,
            manufacturingPrice: 120,
            salePrice: 20,
            grossSales: 53900,
            discounts: 1696.8,
            sales: 52203.2,
            cOGS: 6060,
            profit: 46143.2,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `1337`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 401100,
            discounts: 103320,
            sales: 297780,
            cOGS: 615000,
            profit: 317220,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Burlington`,
            unitsSold: `2621`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 786300,
            discounts: 11298,
            sales: 775002,
            cOGS: 67250,
            profit: 707752,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Burlington`,
            unitsSold: `3735`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 1120500,
            discounts: 106512,
            sales: 1013988,
            cOGS: 634000,
            profit: 379988,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Mandarin`,
            unitsSold: `4320`,
            manufacturingPrice: 250,
            salePrice: 7,
            grossSales: 30240,
            discounts: 2844.94,
            sales: 27395.06,
            cOGS: 14515,
            profit: 12880.06,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `2828`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 848400,
            discounts: 106722,
            sales: 741678,
            cOGS: 635250,
            profit: 106428,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `2586`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 775800,
            discounts: 11298,
            sales: 764502,
            cOGS: 67250,
            profit: 697252,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `1248`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 374400,
            discounts: 62832,
            sales: 311568,
            cOGS: 374000,
            profit: 62432,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `4035`,
            manufacturingPrice: 250,
            salePrice: 300,
            grossSales: 1210500,
            discounts: 42420,
            sales: 1168080,
            cOGS: 252500,
            profit: 915580,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `359`,
            manufacturingPrice: 250,
            salePrice: 350,
            grossSales: 125650,
            discounts: 62769,
            sales: 62881,
            cOGS: 333060,
            profit: 270179,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `3926`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 1177800,
            discounts: 37296,
            sales: 1140504,
            cOGS: 222000,
            profit: 918504,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `4247`,
            manufacturingPrice: 260,
            salePrice: 125,
            grossSales: 530875,
            discounts: 49770,
            sales: 481105,
            cOGS: 341280,
            profit: 139825,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `2695`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 32340,
            discounts: 4158,
            sales: 28182,
            cOGS: 7425,
            profit: 20757,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Luxe`,
            unitsSold: `1104`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 16560,
            discounts: 3660.3,
            sales: 12899.7,
            cOGS: 17430,
            profit: 4530.3,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Luxe`,
            unitsSold: `1449`,
            manufacturingPrice: 260,
            salePrice: 12,
            grossSales: 17388,
            discounts: 4895.52,
            sales: 12492.48,
            cOGS: 8742,
            profit: 3750.48,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `1131`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 7917,
            discounts: 1696.38,
            sales: 6220.62,
            cOGS: 8655,
            profit: 2434.38,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `1468`,
            manufacturingPrice: 260,
            salePrice: 7,
            grossSales: 10276,
            discounts: 1692.46,
            sales: 8583.54,
            cOGS: 8635,
            profit: 51.46,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `1272`,
            manufacturingPrice: 260,
            salePrice: 15,
            grossSales: 19080,
            discounts: 3927,
            sales: 15153,
            cOGS: 18700,
            profit: 3547,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Kensington`,
            unitsSold: `1403`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 175375,
            discounts: 22012.5,
            sales: 153362.5,
            cOGS: 140880,
            profit: 12482.5,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `2161`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 270125,
            discounts: 51881.25,
            sales: 218243.75,
            cOGS: 332040,
            profit: 113796.25,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Kensington`,
            unitsSold: `1937`,
            manufacturingPrice: 3,
            salePrice: 125,
            grossSales: 242125,
            discounts: 20343.75,
            sales: 221781.25,
            cOGS: 130200,
            profit: 91581.25,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `2879`,
            manufacturingPrice: 5,
            salePrice: 300,
            grossSales: 863700,
            discounts: 24570,
            sales: 839130,
            cOGS: 136500,
            profit: 702630,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `1330`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 26600,
            discounts: 3474,
            sales: 23126,
            cOGS: 11580,
            profit: 11546,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `2426`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 36390,
            discounts: 3631.5,
            sales: 32758.5,
            cOGS: 16140,
            profit: 16618.5,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2033`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 14231,
            discounts: 2661.75,
            sales: 11569.25,
            cOGS: 12675,
            profit: 1105.75,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `2029`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 710150,
            discounts: 149677.5,
            sales: 560472.5,
            cOGS: 741260,
            profit: 180787.5,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `1049`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 15735,
            discounts: 5757.75,
            sales: 9977.25,
            cOGS: 25590,
            profit: 15612.75,
            date: `8/1/19`,
            monthName: `August`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `1062`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 21240,
            discounts: 801,
            sales: 20439,
            cOGS: 2670,
            profit: 17769,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `2509`,
            manufacturingPrice: 10,
            salePrice: 125,
            grossSales: 313625,
            discounts: 20343.75,
            sales: 293281.25,
            cOGS: 130200,
            profit: 163081.25,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Vermont`,
            unitsSold: `1743`,
            manufacturingPrice: 10,
            salePrice: 15,
            grossSales: 26145,
            discounts: 2643.75,
            sales: 23501.25,
            cOGS: 11750,
            profit: 11751.25,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3418`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 1196300,
            discounts: 105367.5,
            sales: 1090932.5,
            cOGS: 521820,
            profit: 569112.5,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Vermont`,
            unitsSold: `1751`,
            manufacturingPrice: 10,
            salePrice: 350,
            grossSales: 612850,
            discounts: 112927.5,
            sales: 499922.5,
            cOGS: 559260,
            profit: 59337.5,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Vermont`,
            unitsSold: `3228`,
            manufacturingPrice: 10,
            salePrice: 12,
            grossSales: 38736,
            discounts: 1645.2,
            sales: 37090.8,
            cOGS: 2742,
            profit: 34348.8,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Vermont`,
            unitsSold: `1105`,
            manufacturingPrice: 10,
            salePrice: 20,
            grossSales: 22100,
            discounts: 879,
            sales: 21221,
            cOGS: 2930,
            profit: 18291,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Burlington`,
            unitsSold: `2778`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 33336,
            discounts: 900,
            sales: 32436,
            cOGS: 1500,
            profit: 30936,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `1173`,
            manufacturingPrice: 120,
            salePrice: 15,
            grossSales: 17595,
            discounts: 6358.5,
            sales: 11236.5,
            cOGS: 28260,
            profit: 17023.5,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Burlington`,
            unitsSold: `3160`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 395000,
            discounts: 12431.25,
            sales: 382568.75,
            cOGS: 79560,
            profit: 303008.75,
            date: `9/1/19`,
            monthName: `September`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `4322`,
            manufacturingPrice: 120,
            salePrice: 300,
            grossSales: 1296600,
            discounts: 115830,
            sales: 1180770,
            cOGS: 643500,
            profit: 537270,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `1901`,
            manufacturingPrice: 120,
            salePrice: 125,
            grossSales: 237625,
            discounts: 45712.5,
            sales: 191912.5,
            cOGS: 292560,
            profit: 100647.5,
            date: `12/1/18`,
            monthName: `December`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Burlington`,
            unitsSold: `2980`,
            manufacturingPrice: 120,
            salePrice: 12,
            grossSales: 35760,
            discounts: 1645.2,
            sales: 34114.8,
            cOGS: 2742,
            profit: 31372.8,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `4068`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 81360,
            discounts: 2596.5,
            sales: 78763.5,
            cOGS: 8655,
            profit: 70108.5,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `2105`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 31575,
            discounts: 1107,
            sales: 30468,
            cOGS: 4920,
            profit: 25548,
            date: `7/1/19`,
            monthName: `July`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `1647`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 32940,
            discounts: 801,
            sales: 32139,
            cOGS: 2670,
            profit: 29469,
            date: `10/1/18`,
            monthName: `October`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `235`,
            manufacturingPrice: 250,
            salePrice: 15,
            grossSales: 3525,
            discounts: 2643.75,
            sales: 881.25,
            cOGS: 11750,
            profit: 10868.75,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Mandarin`,
            unitsSold: `3617`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 452125,
            discounts: 55387.5,
            sales: 396737.5,
            cOGS: 354480,
            profit: 42257.5,
            date: `11/1/18`,
            monthName: `November`,
            year: `2018`
        }));
        this.push(new SalesDataItem(
        {
            country: `India`,
            product: `Mandarin`,
            unitsSold: `2106`,
            manufacturingPrice: 250,
            salePrice: 125,
            grossSales: 263250,
            discounts: 10350,
            sales: 252900,
            cOGS: 66240,
            profit: 186660,
            date: `11/1/19`,
            monthName: `November`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Mandarin`,
            unitsSold: `2351`,
            manufacturingPrice: 250,
            salePrice: 20,
            grossSales: 47020,
            discounts: 879,
            sales: 46141,
            cOGS: 2930,
            profit: 43211,
            date: `12/1/19`,
            monthName: `December`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `UK`,
            product: `Luxe`,
            unitsSold: `1897`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 569100,
            discounts: 111375,
            sales: 457725,
            cOGS: 618750,
            profit: 161025,
            date: `3/1/19`,
            monthName: `March`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Luxe`,
            unitsSold: `647`,
            manufacturingPrice: 260,
            salePrice: 300,
            grossSales: 194100,
            discounts: 24570,
            sales: 169530,
            cOGS: 136500,
            profit: 33030,
            date: `10/1/19`,
            monthName: `October`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Brazil`,
            product: `Royal Oak`,
            unitsSold: `3621`,
            manufacturingPrice: 5,
            salePrice: 7,
            grossSales: 25347,
            discounts: 1436.4,
            sales: 23910.6,
            cOGS: 6840,
            profit: 17070.6,
            date: `2/1/19`,
            monthName: `February`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `Japan`,
            product: `Vermont`,
            unitsSold: `3221`,
            manufacturingPrice: 10,
            salePrice: 7,
            grossSales: 22547,
            discounts: 759.15,
            sales: 21787.85,
            cOGS: 3615,
            profit: 18172.85,
            date: `4/1/19`,
            monthName: `April`,
            year: `2019`
        }));
        this.push(new SalesDataItem(
        {
            country: `USA`,
            product: `Mandarin`,
            unitsSold: `493`,
            manufacturingPrice: 250,
            salePrice: 12,
            grossSales: 5916,
            discounts: 3250.8,
            sales: 2665.2,
            cOGS: 5418,
            profit: 2752.8,
            date: `5/1/19`,
            monthName: `May`,
            year: `2019`
        }));
    }
}
