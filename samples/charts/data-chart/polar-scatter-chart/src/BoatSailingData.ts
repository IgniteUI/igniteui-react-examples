export class BoatSailingDataItem {
    public constructor(init: Partial<BoatSailingDataItem>) {
        Object.assign(this, init);
    }

    public direction: number;
    public boatSpeed: number;
    public windSpeed: number;

}
export class BoatSailingData extends Array<BoatSailingDataItem> {
    public constructor(items: Array<BoatSailingDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new BoatSailingDataItem(
                {
                    direction: 0,
                    boatSpeed: 70,
                    windSpeed: 90
                }),
                new BoatSailingDataItem(
                {
                    direction: 45,
                    boatSpeed: 35,
                    windSpeed: 65
                }),
                new BoatSailingDataItem(
                {
                    direction: 90,
                    boatSpeed: 25,
                    windSpeed: 45
                }),
                new BoatSailingDataItem(
                {
                    direction: 135,
                    boatSpeed: 15,
                    windSpeed: 25
                }),
                new BoatSailingDataItem(
                {
                    direction: 180,
                    boatSpeed: 0,
                    windSpeed: 0
                }),
                new BoatSailingDataItem(
                {
                    direction: 225,
                    boatSpeed: 15,
                    windSpeed: 25
                }),
                new BoatSailingDataItem(
                {
                    direction: 270,
                    boatSpeed: 25,
                    windSpeed: 45
                }),
                new BoatSailingDataItem(
                {
                    direction: 315,
                    boatSpeed: 35,
                    windSpeed: 65
                }),
                new BoatSailingDataItem(
                {
                    direction: 360,
                    boatSpeed: 70,
                    windSpeed: 90
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
