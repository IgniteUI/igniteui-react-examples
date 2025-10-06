export class FootballPlayerStatsItem {
    public constructor(init: Partial<FootballPlayerStatsItem>) {
        Object.assign(this, init);
    }

    public attribute: string;
    public ronaldo: number;
    public messi: number;

}
export class FootballPlayerStats extends Array<FootballPlayerStatsItem> {
    public constructor(items: Array<FootballPlayerStatsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new FootballPlayerStatsItem({ attribute: `Dribbling`, ronaldo: 8, messi: 10 }),
                new FootballPlayerStatsItem({ attribute: `Passing`, ronaldo: 8, messi: 10 }),
                new FootballPlayerStatsItem({ attribute: `Finishing`, ronaldo: 10, messi: 10 }),
                new FootballPlayerStatsItem({ attribute: `Free Kicks`, ronaldo: 8, messi: 9 }),
                new FootballPlayerStatsItem({ attribute: `Penalties`, ronaldo: 9, messi: 7 }),
                new FootballPlayerStatsItem({ attribute: `Physical`, ronaldo: 10, messi: 7 }),
                new FootballPlayerStatsItem({ attribute: `Team Play`, ronaldo: 7, messi: 9 }),
                new FootballPlayerStatsItem({ attribute: `Heading`, ronaldo: 9, messi: 6 }),
            ];
            super(...newItems.slice(0));
        }
    }
}
