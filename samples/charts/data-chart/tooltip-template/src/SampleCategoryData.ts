

export class SampleCategoryData {

    public static create(): any[] {
        const data: any[] = [];
        data.push({ "Country": "Canada", "Coal": 400000000, "Oil": 100000000, "Gas": 175000000, "Nuclear": 225000000, "Hydro": 350000000 });
        data.push({ "Country": "China", "Coal": 925000000, "Oil": 200000000, "Gas": 350000000, "Nuclear": 400000000, "Hydro": 625000000 });
        data.push({ "Country": "Russia", "Coal": 550000000, "Oil": 200000000, "Gas": 250000000, "Nuclear": 475000000, "Hydro": 425000000 });
        data.push({ "Country": "Australia", "Coal": 450000000, "Oil": 100000000, "Gas": 150000000, "Nuclear": 175000000, "Hydro": 350000000 });
        data.push({ "Country": "United States", "Coal": 800000000, "Oil": 250000000, "Gas": 475000000, "Nuclear": 575000000, "Hydro": 750000000 });
        data.push({ "Country": "France", "Coal": 375000000, "Oil": 150000000, "Gas": 350000000, "Nuclear": 275000000, "Hydro": 325000000 });
        return data;
    }
}
