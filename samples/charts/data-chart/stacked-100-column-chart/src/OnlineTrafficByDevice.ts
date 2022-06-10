export class OnlineTrafficByDeviceItem {
    public constructor(init: Partial<OnlineTrafficByDeviceItem>) {
        Object.assign(this, init);
    }
    
    public category: string;
    public desktop: number;
    public mobile: number;
    public tablet: number;

}
export class OnlineTrafficByDevice extends Array<OnlineTrafficByDeviceItem> {
    public constructor() {
        super();
        this.push(new OnlineTrafficByDeviceItem(
        {
            category: `Apparel`,
            desktop: 27,
            mobile: 66,
            tablet: 7
        }));
        this.push(new OnlineTrafficByDeviceItem(
        {
            category: `Beauty`,
            desktop: 29,
            mobile: 66,
            tablet: 5
        }));
        this.push(new OnlineTrafficByDeviceItem(
        {
            category: `Travel`,
            desktop: 41,
            mobile: 51,
            tablet: 8
        }));
        this.push(new OnlineTrafficByDeviceItem(
        {
            category: `Grocery`,
            desktop: 37,
            mobile: 57,
            tablet: 6
        }));
        this.push(new OnlineTrafficByDeviceItem(
        {
            category: `Energy`,
            desktop: 58,
            mobile: 39,
            tablet: 3
        }));
        this.push(new OnlineTrafficByDeviceItem(
        {
            category: `Home Supply`,
            desktop: 35,
            mobile: 56,
            tablet: 8
        }));
        this.push(new OnlineTrafficByDeviceItem(
        {
            category: `Financial`,
            desktop: 58,
            mobile: 39,
            tablet: 3
        }));
    }
}
