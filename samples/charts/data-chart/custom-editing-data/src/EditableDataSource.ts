export class EditableDataSource{
    public static getLineData(): any[]{
        const lineData: any[] = [
            { Category: "2010", DataValue: 20, EditingValue: null },
            { Category: "2011", DataValue: 40, EditingValue: null },
            { Category: "2012", DataValue: 30, EditingValue: null },
            { Category: "2013", DataValue: 50, EditingValue: null },
            { Category: "2014", DataValue: 40, EditingValue: null },
            { Category: "2015", DataValue: 60, EditingValue: null },
            { Category: "2016", DataValue: 30, EditingValue: null },
            { Category: "2017", DataValue: 50, EditingValue: null },
            { Category: "2018", DataValue: 40, EditingValue: null },
            { Category: "2019", DataValue: 70, EditingValue: null },
            { Category: "2020", DataValue: 40, EditingValue: null },
            { Category: "2021", DataValue: 60, EditingValue: null },
            { Category: "2022", DataValue: 50, EditingValue: null },
            { Category: "2023", DataValue: 70, EditingValue: null },
            { Category: "2024", DataValue: 60, EditingValue: null },
            { Category: "2025", DataValue: 80, EditingValue: null },
            { Category: "2026", DataValue: 70, EditingValue: null }
        ];

        return lineData;
    }

    public static getScatterData(): any[] {
        const scatterData: any[] = [
            { X: 10, Y: 20, EditingX: null, EditingY: null },
            { X: 11, Y: 40, EditingX: null, EditingY: null },
            { X: 12, Y: 30, EditingX: null, EditingY: null },
            { X: 13, Y: 50, EditingX: null, EditingY: null },
            { X: 14, Y: 40, EditingX: null, EditingY: null },
            { X: 15, Y: 60, EditingX: null, EditingY: null },
            { X: 16, Y: 30, EditingX: null, EditingY: null },
            { X: 17, Y: 50, EditingX: null, EditingY: null },
            { X: 18, Y: 40, EditingX: null, EditingY: null },
            { X: 19, Y: 70, EditingX: null, EditingY: null },
            { X: 20, Y: 40, EditingX: null, EditingY: null },
            { X: 21, Y: 60, EditingX: null, EditingY: null },
            { X: 22, Y: 50, EditingX: null, EditingY: null },
            { X: 23, Y: 70, EditingX: null, EditingY: null },
            { X: 24, Y: 60, EditingX: null, EditingY: null },
            { X: 25, Y: 80, EditingX: null, EditingY: null },
            { X: 26, Y: 70, EditingX: null, EditingY: null }
        ];
        return scatterData;
    }
}