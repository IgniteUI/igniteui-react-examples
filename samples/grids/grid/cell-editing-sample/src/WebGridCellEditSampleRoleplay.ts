export class WebGridCellEditSampleRoleplayItem {
    public constructor(init: Partial<WebGridCellEditSampleRoleplayItem>) {
        Object.assign(this, init);
    }

    public Name: string;
    public Age: string;
    public Alignment: string;
    public Race: string;
    public Class: string;

}
export class WebGridCellEditSampleRoleplay extends Array<WebGridCellEditSampleRoleplayItem> {
    public constructor(items: Array<WebGridCellEditSampleRoleplayItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Stredo`,
                    Age: `244`,
                    Alignment: `💜 Lawful evil`,
                    Race: `👩 Human`,
                    Class: `🎻 Bard`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Haluun`,
                    Age: `40`,
                    Alignment: `🤍 Unaligned`,
                    Race: `🧒🏻 Hafling`,
                    Class: `🙏🏻 Monk`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Ivellios`,
                    Age: `244`,
                    Alignment: `🧡 Chaotic good`,
                    Race: `👩 Human`,
                    Class: `⚔️ Paladin`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Tes`,
                    Age: `35`,
                    Alignment: `💜 Lawful evil`,
                    Race: `🎭 Changeling`,
                    Class: `🧙‍♂️ Wizard`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Kalla`,
                    Age: `47`,
                    Alignment: `🤎 Neutral evil`,
                    Race: `🤖 Warforged`,
                    Class: `🦹‍♂️ Sorcerer`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Halimath Dundragon`,
                    Age: `149`,
                    Alignment: `🤍 Unaligned`,
                    Race: `🐲 Dragonborn`,
                    Class: `⚔️ Paladin`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Iriphawa`,
                    Age: `39`,
                    Alignment: `💛 Lawful neutral`,
                    Race: `🧝🏻‍♂️ Half-Elf`,
                    Class: `🏹 Ranger`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Quaf`,
                    Age: `25`,
                    Alignment: `💚 Neutral`,
                    Race: `👩 Human`,
                    Class: `🥊 Fighter`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Rat Scratch`,
                    Age: `15`,
                    Alignment: `🤎 Neutral evil`,
                    Race: `🐡 Locathah`,
                    Class: `🍁 Druid`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Slicer`,
                    Age: `57`,
                    Alignment: `💜 Lawful evil`,
                    Race: `🐡 Locathah`,
                    Class: `💪 Barbarian`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Nereones Ahlorsath`,
                    Age: `95`,
                    Alignment: `💛 Lawful neutral`,
                    Race: `👩 Human`,
                    Class: `🥊 Fighter`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Nalvarti Stonecutter`,
                    Age: `118`,
                    Alignment: `❤️ Neutral good`,
                    Race: `🧝‍♀️ Elf`,
                    Class: `❤️‍ Cleric`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Errk`,
                    Age: `22`,
                    Alignment: `🤎 Neutral evil`,
                    Race: `🧝🏻‍♂️ Half-Elf`,
                    Class: `🎻 Bard`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Seven Thundercloud`,
                    Age: `43`,
                    Alignment: `💖 Lawful good`,
                    Race: `🐡 Locathah`,
                    Class: `⚔️ Paladin`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Navarra Chergoba`,
                    Age: `16`,
                    Alignment: `💜 Lawful evil`,
                    Race: `🐯 Tabaxi`,
                    Class: `❤️‍ Cleric`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Sail Snap`,
                    Age: `56`,
                    Alignment: `💖 Lawful good`,
                    Race: `🌳 Arboren`,
                    Class: `💪 Barbarian`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Urreek`,
                    Age: `17`,
                    Alignment: `💜 Lawful evil`,
                    Race: `🧝🏻‍♂️ Half-Elf`,
                    Class: `🐉 Warlock`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Morkral Firetamer`,
                    Age: `24`,
                    Alignment: `🤎 Neutral evil`,
                    Race: `🐲 Dragonborn`,
                    Class: `🙏🏻 Monk`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Vithka`,
                    Age: `53`,
                    Alignment: `💜 Lawful evil`,
                    Race: `🐡 Locathah`,
                    Class: `⚔️ Paladin`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Sandrue Avhoste`,
                    Age: `19`,
                    Alignment: `💙 Chaotic Neutral`,
                    Race: `🐲 Dragonborn`,
                    Class: `🗡️ Rogue`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Hapah Moq`,
                    Age: `34`,
                    Alignment: `💜 Lawful evil`,
                    Race: `🎅🏽 Dwarf`,
                    Class: `🎻 Bard`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Kothar `,
                    Age: `55`,
                    Alignment: `🤍 Unaligned`,
                    Race: `🧝🏻‍♂️ Half-Elf`,
                    Class: `🐉 Warlock`
                }),
                new WebGridCellEditSampleRoleplayItem(
                {
                    Name: `Senen`,
                    Age: `40`,
                    Alignment: `💜 Lawful evil`,
                    Race: `🧒🏻 Hafling`,
                    Class: `🥊 Fighter`
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
