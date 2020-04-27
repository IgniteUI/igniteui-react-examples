export default class ColorPicker {

    public min: number;
    public max: number;
    public colors: string[];
    public interval: number;

    constructor(min: number, max: number, colors: string[]) {
        if (colors == undefined || colors.length == 0) {
            colors = ["#d9c616", "#d96f17", "#d1150c"];
        }
        this.colors = colors;
        this.max = max;
        this.min = min;
        this.interval = (max - min) / (this.colors.length - 1);
    }

    getColor(value: number): string {
        let index = Math.round(value / this.interval);
        if (index < 0) {
            index = 0;
        } else if (index > (this.colors.length - 1)) {
            index = this.colors.length - 1;
        }
        return this.colors[index];
    }

}