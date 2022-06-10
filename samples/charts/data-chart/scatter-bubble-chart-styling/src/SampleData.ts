export class SizeScaleItem {
    public constructor(init: Partial<SizeScaleItem>) {
        Object.assign(this, init);
    }
    
    public type: string;
    public minimumValue: number;
    public maximumValue: number;

}
