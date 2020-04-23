export class SampleDensityData {

    public static create(): any[] {
        const amount = 200000;
        let data: any[] = [];
        this.generate(data, amount / 2, -5000, -5000, 10000, 10000);
        this.generate(data, amount / 2,  5000,  5000, 10000, 10000);
        
        return data;
    }

    public static generate(data: any[], count: number,
        centerX: number, centerY: number,
        spreadX: number, spreadY: number): any[] {

        // const data: any[] = [];
        for (let i = 0; i <= count; i++)
        {
            let rangeX = Math.random() * spreadX;
            let rangeY = Math.random() * spreadY;
            const flip = 1;
            const prop = Math.random();
            if (prop < .25) {
                rangeX *= flip;
                rangeY *= flip;
            }
            else if (prop >= .25 && prop < .5) {
                rangeX *= -flip;
                rangeY *= flip;
            }
            else if (prop >= .5 && prop < .75) {
                rangeX *= flip;
                rangeY *= -flip;
            }
            else {
                rangeX *= -flip;
                rangeY *= -flip;
            }
            const dispersionX = Math.random() + 0.12;
            const dispersionY = Math.random() + 0.12;
            const x = Math.round(centerX + (rangeX * dispersionX));
            const y = Math.round(centerY + (rangeY * dispersionY));
            data.push({ "X": x, "Y": y });
        }
        return data;
    }
}
