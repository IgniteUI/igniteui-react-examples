

export class SampleFinancialData {

    public static create(items?: number): any[] {
        // initial values
        let v = 10000;
        let o = 500;
        let h = Math.round(o + (Math.random() * 5));
        let l = Math.round(o - (Math.random() * 5));
        let c = Math.round(l + (Math.random() * (h - l)));

        if (items === undefined) {
            items = 200;
        }

        const today = new Date();
        const end = new Date(today.getFullYear(), 11, 1);
        let time = this.addDays(end, -items);

        const data: any[] = [];
        for (let i = 0; i < items; i++) {
            const date = time.toDateString();
            const label = this.getShortDate(time, false);
            // adding new data item
            data.push({"Time": time, "Date": date, "Label": label, "Close": c, "Open": o, "High": h, "Low": l, "Volume": v});
            // generating new values
            const mod = Math.random() - 0.45;
            o = Math.round(o + (mod * 5 * 2));
            v = Math.round(v + (mod * 5 * 100));
            h = Math.round(o + (Math.random() * 5));
            l = Math.round(o - (Math.random() * 5));
            c = Math.round(l + (Math.random() * (h - l)));
            time = this.addDays(time, 1);
        }
        return data;
    }

    public static addDays(dt: Date, days: number): Date {
        return new Date(dt.getTime() + days * 24 * 60 * 60 * 1000);
    }

    public static getShortDate(dt: Date, showYear: boolean): string {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const ind = dt.getMonth();
        const day = dt.getDay() + 1;
        let label = months[ind] + " " + day;
        if (showYear) {
            label += " " +  dt.getFullYear();
        }
        return label;
    }
}
