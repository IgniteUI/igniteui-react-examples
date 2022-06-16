export class FootballPlayerStatsItem {
    public constructor(init: Partial<FootballPlayerStatsItem>) {
        Object.assign(this, init);
    }
    
    public attribute: string;
    public ronaldo: number;
    public messi: number;

}
export class FootballPlayerStats extends Array<FootballPlayerStatsItem> {
    public constructor() {
        super();
        this.push(new FootballPlayerStatsItem(
        {
            attribute: `Dribbling`,
            ronaldo: 8,
            messi: 10
        }));
        this.push(new FootballPlayerStatsItem(
        {
            attribute: `Passing`,
            ronaldo: 8,
            messi: 10
        }));
        this.push(new FootballPlayerStatsItem(
        {
            attribute: `Finishing`,
            ronaldo: 10,
            messi: 10
        }));
        this.push(new FootballPlayerStatsItem(
        {
            attribute: `Free Kicks`,
            ronaldo: 8,
            messi: 9
        }));
        this.push(new FootballPlayerStatsItem(
        {
            attribute: `Penalties`,
            ronaldo: 9,
            messi: 7
        }));
        this.push(new FootballPlayerStatsItem(
        {
            attribute: `Physical`,
            ronaldo: 10,
            messi: 7
        }));
        this.push(new FootballPlayerStatsItem(
        {
            attribute: `Team Play`,
            ronaldo: 7,
            messi: 9
        }));
        this.push(new FootballPlayerStatsItem(
        {
            attribute: `Heading`,
            ronaldo: 9,
            messi: 6
        }));
    }
}
