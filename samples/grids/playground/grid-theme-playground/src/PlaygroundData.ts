// Flat grid: invoices

export class InvoicesDataItem {
    public constructor(init: Partial<InvoicesDataItem>) {
        Object.assign(this, init);
    }

    public ShipCountry: string;
    public ShipCity: string;
    public ShipName: string;
    public Salesperson: string;
    public UnitPrice: number;
    public Quantity: number;

}
export class InvoicesData extends Array<InvoicesDataItem> {
    public constructor(items: Array<InvoicesDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfred's Futterkiste`, Salesperson: `Margaret Peacock`, UnitPrice: 43.9, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfred's Futterkiste`, Salesperson: `Margaret Peacock`, UnitPrice: 10, Quantity: 6 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfred's Futterkiste`, Salesperson: `Margaret Peacock`, UnitPrice: 18, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfred's Futterkiste`, Salesperson: `Nancy Davolio`, UnitPrice: 55, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfred's Futterkiste`, Salesperson: `Nancy Davolio`, UnitPrice: 45.6, Quantity: 2 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfred's Futterkiste`, Salesperson: `Janet Leverling`, UnitPrice: 21.5, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfred's Futterkiste`, Salesperson: `Nancy Davolio`, UnitPrice: 25, Quantity: 16 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfred's Futterkiste`, Salesperson: `Janet Leverling`, UnitPrice: 13.25, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfred's Futterkiste`, Salesperson: `Nancy Davolio`, UnitPrice: 13, Quantity: 2 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfreds Futterkiste`, Salesperson: `Michael Suyama`, UnitPrice: 45.6, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfreds Futterkiste`, Salesperson: `Michael Suyama`, UnitPrice: 18, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Berlin`, ShipName: `Alfreds Futterkiste`, Salesperson: `Michael Suyama`, UnitPrice: 12, Quantity: 2 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Ana Trujillo Emparedados y helados`, Salesperson: `Robert King`, UnitPrice: 28.8, Quantity: 1 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Ana Trujillo Emparedados y helados`, Salesperson: `Robert King`, UnitPrice: 12, Quantity: 5 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Ana Trujillo Emparedados y helados`, Salesperson: `Janet Leverling`, UnitPrice: 23.25, Quantity: 3 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Ana Trujillo Emparedados y helados`, Salesperson: `Janet Leverling`, UnitPrice: 14, Quantity: 5 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Ana Trujillo Emparedados y helados`, Salesperson: `Janet Leverling`, UnitPrice: 34, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Ana Trujillo Emparedados y helados`, Salesperson: `Janet Leverling`, UnitPrice: 32, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Ana Trujillo Emparedados y helados`, Salesperson: `Margaret Peacock`, UnitPrice: 21, Quantity: 2 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Ana Trujillo Emparedados y helados`, Salesperson: `Margaret Peacock`, UnitPrice: 6, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Ana Trujillo Emparedados y helados`, Salesperson: `Margaret Peacock`, UnitPrice: 9.2, Quantity: 7 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Ana Trujillo Emparedados y helados`, Salesperson: `Margaret Peacock`, UnitPrice: 34.8, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Janet Leverling`, UnitPrice: 16.8, Quantity: 24 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Robert King`, UnitPrice: 39, Quantity: 18 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Robert King`, UnitPrice: 14, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Robert King`, UnitPrice: 32.8, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Janet Leverling`, UnitPrice: 2.5, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Janet Leverling`, UnitPrice: 17, Quantity: 4 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Janet Leverling`, UnitPrice: 7.75, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Janet Leverling`, UnitPrice: 19, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Janet Leverling`, UnitPrice: 14, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Margaret Peacock`, UnitPrice: 21, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Margaret Peacock`, UnitPrice: 18.4, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Margaret Peacock`, UnitPrice: 19.5, Quantity: 5 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Margaret Peacock`, UnitPrice: 55, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Robert King`, UnitPrice: 46, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Robert King`, UnitPrice: 12.75, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Nancy Davolio`, UnitPrice: 31.23, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Antonio Moreno Taquería`, Salesperson: `Nancy Davolio`, UnitPrice: 2.5, Quantity: 8 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Michael Suyama`, UnitPrice: 3.6, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Michael Suyama`, UnitPrice: 15.6, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Laura Callahan`, UnitPrice: 4.8, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Laura Callahan`, UnitPrice: 13, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Laura Callahan`, UnitPrice: 30.4, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Nancy Davolio`, UnitPrice: 9.5, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Nancy Davolio`, UnitPrice: 53, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Nancy Davolio`, UnitPrice: 7, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Nancy Davolio`, UnitPrice: 32.8, Quantity: 18 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Nancy Davolio`, UnitPrice: 15, Quantity: 3 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Margaret Peacock`, UnitPrice: 24, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Margaret Peacock`, UnitPrice: 19.5, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Janet Leverling`, UnitPrice: 21, Quantity: 4 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Janet Leverling`, UnitPrice: 12.5, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Janet Leverling`, UnitPrice: 34, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Janet Leverling`, UnitPrice: 21.5, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Janet Leverling`, UnitPrice: 9.65, Quantity: 14 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Janet Leverling`, UnitPrice: 7, Quantity: 8 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Margaret Peacock`, UnitPrice: 18, Quantity: 4 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Margaret Peacock`, UnitPrice: 14, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Margaret Peacock`, UnitPrice: 16.25, Quantity: 24 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Anne Dodsworth`, UnitPrice: 12.5, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Anne Dodsworth`, UnitPrice: 19, Quantity: 16 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Nancy Davolio`, UnitPrice: 12, Quantity: 28 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Anne Dodsworth`, UnitPrice: 81, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Anne Dodsworth`, UnitPrice: 12.5, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Nancy Davolio`, UnitPrice: 10.2, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Nancy Davolio`, UnitPrice: 12, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Margaret Peacock`, UnitPrice: 15, Quantity: 28 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `Colchester`, ShipName: `Around the Horn`, Salesperson: `Margaret Peacock`, UnitPrice: 19, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Laura Callahan`, UnitPrice: 15.5, Quantity: 16 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Laura Callahan`, UnitPrice: 44, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Laura Callahan`, UnitPrice: 35.1, Quantity: 8 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Laura Callahan`, UnitPrice: 12, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Andrew Fuller`, UnitPrice: 3.6, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Andrew Fuller`, UnitPrice: 19.2, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Andrew Fuller`, UnitPrice: 6.2, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 64.8, Quantity: 28 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 27.2, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 31.2, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 24.9, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 14.4, Quantity: 8 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 7.7, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Nancy Davolio`, UnitPrice: 7.45, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 18.4, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Nancy Davolio`, UnitPrice: 32.8, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Nancy Davolio`, UnitPrice: 34, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Nancy Davolio`, UnitPrice: 21.5, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Anne Dodsworth`, UnitPrice: 21.5, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Nancy Davolio`, UnitPrice: 23.25, Quantity: 16 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Nancy Davolio`, UnitPrice: 45.6, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Nancy Davolio`, UnitPrice: 7, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 9.65, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Anne Dodsworth`, UnitPrice: 6, Quantity: 6 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Anne Dodsworth`, UnitPrice: 18.4, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Laura Callahan`, UnitPrice: 10, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Margaret Peacock`, UnitPrice: 9.2, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Margaret Peacock`, UnitPrice: 20, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 7.75, Quantity: 6 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 17.45, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 32, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 7.75, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Steven Buchanan`, UnitPrice: 22, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Steven Buchanan`, UnitPrice: 18, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Steven Buchanan`, UnitPrice: 7.45, Quantity: 6 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Anne Dodsworth`, UnitPrice: 263.5, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Margaret Peacock`, UnitPrice: 9.5, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 31, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Janet Leverling`, UnitPrice: 45.6, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Nancy Davolio`, UnitPrice: 18, Quantity: 35 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Anne Dodsworth`, UnitPrice: 9.5, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Anne Dodsworth`, UnitPrice: 18, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Laura Callahan`, UnitPrice: 31.23, Quantity: 35 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Laura Callahan`, UnitPrice: 123.79, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Steven Buchanan`, UnitPrice: 19, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Steven Buchanan`, UnitPrice: 4.5, Quantity: 6 }),
                new InvoicesDataItem({ ShipCountry: `Sweden`, ShipCity: `Luleå`, ShipName: `Berglunds snabbköp`, Salesperson: `Steven Buchanan`, UnitPrice: 25.89, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Mannheim`, ShipName: `Blauer See Delikatessen`, Salesperson: `Anne Dodsworth`, UnitPrice: 7.45, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Mannheim`, ShipName: `Blauer See Delikatessen`, Salesperson: `Margaret Peacock`, UnitPrice: 45.6, Quantity: 3 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Mannheim`, ShipName: `Blauer See Delikatessen`, Salesperson: `Janet Leverling`, UnitPrice: 19.5, Quantity: 4 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Mannheim`, ShipName: `Blauer See Delikatessen`, Salesperson: `Janet Leverling`, UnitPrice: 18, Quantity: 14 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Mannheim`, ShipName: `Blauer See Delikatessen`, Salesperson: `Laura Callahan`, UnitPrice: 21, Quantity: 14 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Mannheim`, ShipName: `Blauer See Delikatessen`, Salesperson: `Laura Callahan`, UnitPrice: 10, Quantity: 8 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Mannheim`, ShipName: `Blauer See Delikatessen`, Salesperson: `Laura Callahan`, UnitPrice: 18, Quantity: 5 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Mannheim`, ShipName: `Blauer See Delikatessen`, Salesperson: `Anne Dodsworth`, UnitPrice: 62.5, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Mannheim`, ShipName: `Blauer See Delikatessen`, Salesperson: `Michael Suyama`, UnitPrice: 10, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Mannheim`, ShipName: `Blauer See Delikatessen`, Salesperson: `Michael Suyama`, UnitPrice: 9.5, Quantity: 14 }),
                new InvoicesDataItem({ ShipCountry: `Spain`, ShipCity: `Madrid`, ShipName: `Bólido Comidas preparadas`, Salesperson: `Margaret Peacock`, UnitPrice: 6.2, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `Spain`, ShipCity: `Madrid`, ShipName: `Bólido Comidas preparadas`, Salesperson: `Anne Dodsworth`, UnitPrice: 7, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `Spain`, ShipCity: `Madrid`, ShipName: `Bólido Comidas preparadas`, Salesperson: `Margaret Peacock`, UnitPrice: 39, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `Spain`, ShipCity: `Madrid`, ShipName: `Bólido Comidas preparadas`, Salesperson: `Margaret Peacock`, UnitPrice: 123.79, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Anne Dodsworth`, UnitPrice: 5.9, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Janet Leverling`, UnitPrice: 11.2, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Janet Leverling`, UnitPrice: 42.4, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Janet Leverling`, UnitPrice: 5.9, Quantity: 24 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Margaret Peacock`, UnitPrice: 50, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Margaret Peacock`, UnitPrice: 7.2, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Margaret Peacock`, UnitPrice: 26.6, Quantity: 8 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Nancy Davolio`, UnitPrice: 19, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Janet Leverling`, UnitPrice: 31, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Janet Leverling`, UnitPrice: 21.5, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Janet Leverling`, UnitPrice: 18, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Nancy Davolio`, UnitPrice: 31, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Nancy Davolio`, UnitPrice: 18, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Robert King`, UnitPrice: 12, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Robert King`, UnitPrice: 33.25, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Laura Callahan`, UnitPrice: 34.8, Quantity: 16 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Laura Callahan`, UnitPrice: 6, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Nancy Davolio`, UnitPrice: 50, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Nancy Davolio`, UnitPrice: 7.7, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Nancy Davolio`, UnitPrice: 36.8, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Andrew Fuller`, UnitPrice: 18.4, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Andrew Fuller`, UnitPrice: 14, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Andrew Fuller`, UnitPrice: 53, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Steven Buchanan`, UnitPrice: 17.45, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Steven Buchanan`, UnitPrice: 12.5, Quantity: 3 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Steven Buchanan`, UnitPrice: 21.05, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Anne Dodsworth`, UnitPrice: 25, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Anne Dodsworth`, UnitPrice: 17.45, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Anne Dodsworth`, UnitPrice: 39, Quantity: 16 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Nancy Davolio`, UnitPrice: 18.4, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Laura Callahan`, UnitPrice: 17.45, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Laura Callahan`, UnitPrice: 49.3, Quantity: 14 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Laura Callahan`, UnitPrice: 7.75, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Margaret Peacock`, UnitPrice: 22, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Margaret Peacock`, UnitPrice: 30, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Margaret Peacock`, UnitPrice: 40, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Margaret Peacock`, UnitPrice: 9.5, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Margaret Peacock`, UnitPrice: 38, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Margaret Peacock`, UnitPrice: 19.5, Quantity: 14 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Margaret Peacock`, UnitPrice: 36, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Margaret Peacock`, UnitPrice: 25, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Margaret Peacock`, UnitPrice: 23.25, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Marseille`, ShipName: `Bon app'`, Salesperson: `Margaret Peacock`, UnitPrice: 9.2, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Toronto`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Margaret Peacock`, UnitPrice: 24.8, Quantity: 16 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Toronto`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Margaret Peacock`, UnitPrice: 19.2, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Margaret Peacock`, UnitPrice: 39.4, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Margaret Peacock`, UnitPrice: 12, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Janet Leverling`, UnitPrice: 2, Quantity: 49 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Toronto`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Janet Leverling`, UnitPrice: 44, Quantity: 16 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Janet Leverling`, UnitPrice: 10, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Janet Leverling`, UnitPrice: 34, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Janet Leverling`, UnitPrice: 34.8, Quantity: 35 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Toronto`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Michael Suyama`, UnitPrice: 38, Quantity: 18 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Toronto`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Andrew Fuller`, UnitPrice: 25, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Andrew Fuller`, UnitPrice: 31, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Andrew Fuller`, UnitPrice: 39, Quantity: 6 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Andrew Fuller`, UnitPrice: 49.3, Quantity: 60 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Nancy Davolio`, UnitPrice: 40, Quantity: 16 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Nancy Davolio`, UnitPrice: 7.75, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Toronto`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Anne Dodsworth`, UnitPrice: 7.7, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Anne Dodsworth`, UnitPrice: 15.5, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Anne Dodsworth`, UnitPrice: 44, Quantity: 9 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Margaret Peacock`, UnitPrice: 31.2, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Margaret Peacock`, UnitPrice: 14.7, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Margaret Peacock`, UnitPrice: 7.6, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Janet Leverling`, UnitPrice: 18, Quantity: 60 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Janet Leverling`, UnitPrice: 34, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Michael Suyama`, UnitPrice: 21, Quantity: 5 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Michael Suyama`, UnitPrice: 19.45, Quantity: 18 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Nancy Davolio`, UnitPrice: 4.5, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Canada`, ShipCity: `Tsawassen`, ShipName: `Bottom-Dollar Markets`, Salesperson: `Nancy Davolio`, UnitPrice: 49.3, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Robert King`, UnitPrice: 8, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Robert King`, UnitPrice: 26.6, Quantity: 9 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Andrew Fuller`, UnitPrice: 24, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Andrew Fuller`, UnitPrice: 30.4, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Janet Leverling`, UnitPrice: 8, Quantity: 14 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Janet Leverling`, UnitPrice: 14.7, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Janet Leverling`, UnitPrice: 42.4, Quantity: 3 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Anne Dodsworth`, UnitPrice: 15, Quantity: 7 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Anne Dodsworth`, UnitPrice: 34.8, Quantity: 1 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Michael Suyama`, UnitPrice: 6, Quantity: 8 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Michael Suyama`, UnitPrice: 10, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Michael Suyama`, UnitPrice: 2.5, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Michael Suyama`, UnitPrice: 20, Quantity: 6 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Janet Leverling`, UnitPrice: 55, Quantity: 4 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Nancy Davolio`, UnitPrice: 30, Quantity: 4 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `B's Beverages`, Salesperson: `Nancy Davolio`, UnitPrice: 46, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Argentina`, ShipCity: `Buenos Aires`, ShipName: `Cactus Comidas para llevar`, Salesperson: `Laura Callahan`, UnitPrice: 12.5, Quantity: 6 }),
                new InvoicesDataItem({ ShipCountry: `Argentina`, ShipCity: `Buenos Aires`, ShipName: `Cactus Comidas para llevar`, Salesperson: `Laura Callahan`, UnitPrice: 2.5, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Argentina`, ShipCity: `Buenos Aires`, ShipName: `Cactus Comidas para llevar`, Salesperson: `Laura Callahan`, UnitPrice: 14, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Centro comercial Moctezuma`, Salesperson: `Margaret Peacock`, UnitPrice: 8, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Mexico`, ShipCity: `México D.F.`, ShipName: `Centro comercial Moctezuma`, Salesperson: `Margaret Peacock`, UnitPrice: 20.8, Quantity: 1 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Steven Buchanan`, UnitPrice: 8, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Michael Suyama`, UnitPrice: 26.6, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Michael Suyama`, UnitPrice: 38, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Nancy Davolio`, UnitPrice: 6, Quantity: 6 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Nancy Davolio`, UnitPrice: 14, Quantity: 28 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Nancy Davolio`, UnitPrice: 49.3, Quantity: 9 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Nancy Davolio`, UnitPrice: 36, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Margaret Peacock`, UnitPrice: 26, Quantity: 8 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Margaret Peacock`, UnitPrice: 38, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Margaret Peacock`, UnitPrice: 43.9, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Janet Leverling`, UnitPrice: 43.9, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Michael Suyama`, UnitPrice: 31, Quantity: 16 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Michael Suyama`, UnitPrice: 34, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Robert King`, UnitPrice: 10, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Robert King`, UnitPrice: 53, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Steven Buchanan`, UnitPrice: 3.6, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Steven Buchanan`, UnitPrice: 19.2, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Michael Suyama`, UnitPrice: 14.4, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Michael Suyama`, UnitPrice: 8, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Margaret Peacock`, UnitPrice: 38, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Margaret Peacock`, UnitPrice: 49.3, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Switzerland`, ShipCity: `Bern`, ShipName: `Chop-suey Chinese`, Salesperson: `Janet Leverling`, UnitPrice: 19, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Brazil`, ShipCity: `Rio de Janeiro`, ShipName: `Comércio Mineiro`, Salesperson: `Laura Callahan`, UnitPrice: 17, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Brazil`, ShipCity: `Sao Paulo`, ShipName: `Comércio Mineiro`, Salesperson: `Laura Callahan`, UnitPrice: 99, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Brazil`, ShipCity: `Rio de Janeiro`, ShipName: `Comércio Mineiro`, Salesperson: `Laura Callahan`, UnitPrice: 16, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Brazil`, ShipCity: `Sao Paulo`, ShipName: `Comércio Mineiro`, Salesperson: `Laura Callahan`, UnitPrice: 10.4, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Brazil`, ShipCity: `Sao Paulo`, ShipName: `Comércio Mineiro`, Salesperson: `Margaret Peacock`, UnitPrice: 16.8, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Brazil`, ShipCity: `Sao Paulo`, ShipName: `Comércio Mineiro`, Salesperson: `Margaret Peacock`, UnitPrice: 9.6, Quantity: 5 }),
                new InvoicesDataItem({ ShipCountry: `Brazil`, ShipCity: `Rio de Janeiro`, ShipName: `Comércio Mineiro`, Salesperson: `Margaret Peacock`, UnitPrice: 30.4, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Brazil`, ShipCity: `Rio de Janeiro`, ShipName: `Comércio Mineiro`, Salesperson: `Nancy Davolio`, UnitPrice: 12, Quantity: 9 }),
                new InvoicesDataItem({ ShipCountry: `Brazil`, ShipCity: `Sao Paulo`, ShipName: `Comércio Mineiro`, Salesperson: `Andrew Fuller`, UnitPrice: 19.45, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Brazil`, ShipCity: `Sao Paulo`, ShipName: `Comércio Mineiro`, Salesperson: `Andrew Fuller`, UnitPrice: 28.5, Quantity: 4 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Consolidated Holdings`, Salesperson: `Laura Callahan`, UnitPrice: 15.2, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Consolidated Holdings`, Salesperson: `Laura Callahan`, UnitPrice: 16.8, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Consolidated Holdings`, Salesperson: `Laura Callahan`, UnitPrice: 27.8, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Consolidated Holdings`, Salesperson: `Andrew Fuller`, UnitPrice: 4.8, Quantity: 1 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Consolidated Holdings`, Salesperson: `Andrew Fuller`, UnitPrice: 7.2, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Consolidated Holdings`, Salesperson: `Robert King`, UnitPrice: 21.35, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Consolidated Holdings`, Salesperson: `Robert King`, UnitPrice: 97, Quantity: 3 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Laura Callahan`, UnitPrice: 14.7, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Laura Callahan`, UnitPrice: 30.4, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Andrew Fuller`, UnitPrice: 36.4, Quantity: 4 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Andrew Fuller`, UnitPrice: 36.8, Quantity: 24 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Andrew Fuller`, UnitPrice: 26.2, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Andrew Fuller`, UnitPrice: 6.2, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Margaret Peacock`, UnitPrice: 7.2, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Michael Suyama`, UnitPrice: 10, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Michael Suyama`, UnitPrice: 19.2, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Michael Suyama`, UnitPrice: 28.8, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Laura Callahan`, UnitPrice: 19, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Laura Callahan`, UnitPrice: 2.5, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Laura Callahan`, UnitPrice: 38, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Laura Callahan`, UnitPrice: 32, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Laura Callahan`, UnitPrice: 18, Quantity: 18 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Nancy Davolio`, UnitPrice: 12.5, Quantity: 8 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Nancy Davolio`, UnitPrice: 24, Quantity: 4 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Nancy Davolio`, UnitPrice: 33.25, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Margaret Peacock`, UnitPrice: 14.4, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Robert King`, UnitPrice: 10, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Robert King`, UnitPrice: 32, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Robert King`, UnitPrice: 28.5, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Margaret Peacock`, UnitPrice: 36, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Margaret Peacock`, UnitPrice: 15, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Laura Callahan`, UnitPrice: 9.2, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Stuttgart`, ShipName: `Die Wandernde Kuh`, Salesperson: `Laura Callahan`, UnitPrice: 21, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Aachen`, ShipName: `Drachenblut Delikatessen`, Salesperson: `Margaret Peacock`, UnitPrice: 10, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Aachen`, ShipName: `Drachenblut Delikatessen`, Salesperson: `Margaret Peacock`, UnitPrice: 6.2, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Aachen`, ShipName: `Drachenblut Delikatessen`, Salesperson: `Margaret Peacock`, UnitPrice: 14.4, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Aachen`, ShipName: `Drachenblut Delikatessen`, Salesperson: `Janet Leverling`, UnitPrice: 4.8, Quantity: 18 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Aachen`, ShipName: `Drachenblut Delikatessen`, Salesperson: `Robert King`, UnitPrice: 21, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `Germany`, ShipCity: `Aachen`, ShipName: `Drachenblut Delikatessen`, Salesperson: `Nancy Davolio`, UnitPrice: 9.65, Quantity: 9 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Nantes`, ShipName: `Du monde entier`, Salesperson: `Nancy Davolio`, UnitPrice: 11.2, Quantity: 6 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Nantes`, ShipName: `Du monde entier`, Salesperson: `Nancy Davolio`, UnitPrice: 28.8, Quantity: 7 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Nantes`, ShipName: `Du monde entier`, Salesperson: `Robert King`, UnitPrice: 18, Quantity: 3 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Nantes`, ShipName: `Du monde entier`, Salesperson: `Robert King`, UnitPrice: 31, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Nantes`, ShipName: `Du monde entier`, Salesperson: `Robert King`, UnitPrice: 10, Quantity: 6 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Nantes`, ShipName: `Du monde entier`, Salesperson: `Andrew Fuller`, UnitPrice: 7, Quantity: 9 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Nantes`, ShipName: `Du monde entier`, Salesperson: `Robert King`, UnitPrice: 39, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Nantes`, ShipName: `Du monde entier`, Salesperson: `Robert King`, UnitPrice: 14, Quantity: 10 }),
                new InvoicesDataItem({ ShipCountry: `France`, ShipCity: `Nantes`, ShipName: `Du monde entier`, Salesperson: `Robert King`, UnitPrice: 9.65, Quantity: 14 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Nancy Davolio`, UnitPrice: 28.8, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Nancy Davolio`, UnitPrice: 17.2, Quantity: 5 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Nancy Davolio`, UnitPrice: 99, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Nancy Davolio`, UnitPrice: 14.4, Quantity: 35 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Nancy Davolio`, UnitPrice: 16, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Robert King`, UnitPrice: 25.89, Quantity: 15 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Robert King`, UnitPrice: 17, Quantity: 24 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Margaret Peacock`, UnitPrice: 22, Quantity: 25 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Margaret Peacock`, UnitPrice: 21, Quantity: 5 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Laura Callahan`, UnitPrice: 30, Quantity: 60 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Laura Callahan`, UnitPrice: 46, Quantity: 6 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Laura Callahan`, UnitPrice: 34.8, Quantity: 20 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Margaret Peacock`, UnitPrice: 31.23, Quantity: 12 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Margaret Peacock`, UnitPrice: 2.5, Quantity: 30 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Margaret Peacock`, UnitPrice: 21.05, Quantity: 21 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Margaret Peacock`, UnitPrice: 21.5, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Laura Callahan`, UnitPrice: 30, Quantity: 40 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Laura Callahan`, UnitPrice: 24, Quantity: 35 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Laura Callahan`, UnitPrice: 34, Quantity: 50 }),
                new InvoicesDataItem({ ShipCountry: `UK`, ShipCity: `London`, ShipName: `Eastern Connection`, Salesperson: `Robert King`, UnitPrice: 18, Quantity: 25 }),
            ];
            super(...newItems.slice(0));
        }
    }
}

// Tree grid: employees

export class EmployeesFlatAvatarsItem {
    public constructor(init: Partial<EmployeesFlatAvatarsItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public Avatar: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Title: string;

}
export class EmployeesFlatAvatars extends Array<EmployeesFlatAvatarsItem> {
    public constructor(items: Array<EmployeesFlatAvatarsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatAvatarsItem({ Age: 55, Avatar: `https://dl.infragistics.com/x/img/people/men/25.png`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Title: `Development Manager` }),
                new EmployeesFlatAvatarsItem({ Age: 42, Avatar: `https://dl.infragistics.com/x/img/people/women/14.png`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Title: `CEO` }),
                new EmployeesFlatAvatarsItem({ Age: 49, Avatar: `https://dl.infragistics.com/x/img/people/women/12.png`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Title: `Accounting Manager` }),
                new EmployeesFlatAvatarsItem({ Age: 61, Avatar: `https://dl.infragistics.com/x/img/people/men/24.png`, HireDate: `2010-01-01`, ID: 10, Name: `Yang Wang`, ParentID: -1, Title: `Localization Manager` }),
                new EmployeesFlatAvatarsItem({ Age: 43, Avatar: `https://dl.infragistics.com/x/img/people/men/21.png`, HireDate: `2011-06-03`, ID: 3, Name: `Michael Burke`, ParentID: 1, Title: `Senior Software Developer` }),
                new EmployeesFlatAvatarsItem({ Age: 29, Avatar: `https://dl.infragistics.com/x/img/people/men/22.png`, HireDate: `2009-06-19`, ID: 2, Name: `Thomas Anderson`, ParentID: 1, Title: `Senior Software Developer` }),
                new EmployeesFlatAvatarsItem({ Age: 31, Avatar: `https://dl.infragistics.com/x/img/people/women/13.png`, HireDate: `2014-08-18`, ID: 11, Name: `Monica Reyes`, ParentID: 1, Title: `Software Development Team Lead` }),
                new EmployeesFlatAvatarsItem({ Age: 35, Avatar: `https://dl.infragistics.com/x/img/people/men/23.png`, HireDate: `2015-09-17`, ID: 6, Name: `Roland Mendel`, ParentID: 11, Title: `Senior Software Developer` }),
                new EmployeesFlatAvatarsItem({ Age: 44, Avatar: `https://dl.infragistics.com/x/img/people/men/26.png`, HireDate: `2009-10-11`, ID: 12, Name: `Sven Cooper`, ParentID: 11, Title: `Senior Software Developer` }),
                new EmployeesFlatAvatarsItem({ Age: 44, Avatar: `https://dl.infragistics.com/x/img/people/men/27.png`, HireDate: `2014-04-04`, ID: 14, Name: `Laurence Johnson`, ParentID: 4, Title: `Director` }),
                new EmployeesFlatAvatarsItem({ Age: 25, Avatar: `https://dl.infragistics.com/x/img/people/women/11.png`, HireDate: `2017-11-09`, ID: 5, Name: `Elizabeth Richards`, ParentID: 4, Title: `Vice President` }),
                new EmployeesFlatAvatarsItem({ Age: 39, Avatar: `https://dl.infragistics.com/x/img/people/men/28.png`, HireDate: `2010-03-22`, ID: 13, Name: `Trevor Ashworth`, ParentID: 5, Title: `Director` }),
                new EmployeesFlatAvatarsItem({ Age: 44, Avatar: `https://dl.infragistics.com/x/img/people/men/29.png`, HireDate: `2014-04-04`, ID: 17, Name: `Antonio Moreno`, ParentID: 18, Title: `Senior Accountant` }),
                new EmployeesFlatAvatarsItem({ Age: 50, Avatar: `https://dl.infragistics.com/x/img/people/men/20.png`, HireDate: `2007-11-18`, ID: 7, Name: `Pedro Rodriguez`, ParentID: 10, Title: `Senior Localization Developer` }),
                new EmployeesFlatAvatarsItem({ Age: 27, Avatar: `https://dl.infragistics.com/x/img/people/women/15.png`, HireDate: `2016-02-19`, ID: 8, Name: `Casey Harper`, ParentID: 10, Title: `Senior Localization Developer` }),
                new EmployeesFlatAvatarsItem({ Age: 25, Avatar: `https://dl.infragistics.com/x/img/people/women/16.png`, HireDate: `2017-11-09`, ID: 15, Name: `Patricia Simpson`, ParentID: 7, Title: `Localization Intern` }),
                new EmployeesFlatAvatarsItem({ Age: 39, Avatar: `https://dl.infragistics.com/x/img/people/men/26.png`, HireDate: `2010-03-22`, ID: 9, Name: `Francisco Chang`, ParentID: 7, Title: `Localization Intern` }),
                new EmployeesFlatAvatarsItem({ Age: 25, Avatar: `https://dl.infragistics.com/x/img/people/men/27.png`, HireDate: `2018-03-18`, ID: 16, Name: `Peter Lewis`, ParentID: 7, Title: `Localization Intern` }),
            ];
            super(...newItems.slice(0));
        }
    }
}

// Hierarchical grid: singers, albums and tours

export class SingersDataItem {
    public constructor(init: Partial<SingersDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public Artist: string;
    public Photo: string;
    public Debut: number;
    public GrammyNominations: number;
    public GrammyAwards: number;
    public HasGrammyAward: boolean;
    public Tours: SingersDataItem_ToursItem[];
    public Albums: SingersDataItem_AlbumsItem[];

}
export class SingersDataItem_ToursItem {
    public constructor(init: Partial<SingersDataItem_ToursItem>) {
        Object.assign(this, init);
    }

    public Tour: string;
    public StartedOn: string;
    public Location: string;
    public Headliner: string;
    public TouredBy: string;

}
export class SingersDataItem_AlbumsItem {
    public constructor(init: Partial<SingersDataItem_AlbumsItem>) {
        Object.assign(this, init);
    }

    public Album: string;
    public LaunchDate: string;
    public BillboardReview: number;
    public USBillboard200: number;
    public Artist: string;
    public Songs: SingersDataItem_AlbumsItem_SongsItem[];

}
export class SingersDataItem_AlbumsItem_SongsItem {
    public constructor(init: Partial<SingersDataItem_AlbumsItem_SongsItem>) {
        Object.assign(this, init);
    }

    public Number: number;
    public Title: string;
    public Released: string;
    public Genre: string;
    public Album: string;

}
export class SingersData extends Array<SingersDataItem> {
    public constructor(items: Array<SingersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SingersDataItem(
                {
                    ID: 0,
                    Artist: `Naomí Yepes`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/naomi.png`,
                    Debut: 2011,
                    GrammyNominations: 6,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Faithful Tour`,
                            StartedOn: `Sep 12`,
                            Location: `Worldwide`,
                            Headliner: `NO`,
                            TouredBy: `Naomí Yepes`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `City Jam Sessions`,
                            StartedOn: `Aug 13`,
                            Location: `North America`,
                            Headliner: `YES`,
                            TouredBy: `Naomí Yepes`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Christmas NYC 2013`,
                            StartedOn: `Dec 13`,
                            Location: `United States`,
                            Headliner: `NO`,
                            TouredBy: `Naomí Yepes`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Christmas NYC 2014`,
                            StartedOn: `Dec 14`,
                            Location: `North America`,
                            Headliner: `NO`,
                            TouredBy: `Naomí Yepes`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Watermelon Tour`,
                            StartedOn: `Feb 15`,
                            Location: `Worldwide`,
                            Headliner: `YES`,
                            TouredBy: `Naomí Yepes`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Christmas NYC 2016`,
                            StartedOn: `Dec 16`,
                            Location: `United States`,
                            Headliner: `NO`,
                            TouredBy: `Naomí Yepes`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `The Dragon Tour`,
                            StartedOn: `Feb 17`,
                            Location: `Worldwide`,
                            Headliner: `NO`,
                            TouredBy: `Naomí Yepes`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Organic Sessions`,
                            StartedOn: `Aug 18`,
                            Location: `United States, England`,
                            Headliner: `YES`,
                            TouredBy: `Naomí Yepes`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Hope World Tour`,
                            StartedOn: `Mar 19`,
                            Location: `Worldwide`,
                            Headliner: `NO`,
                            TouredBy: `Naomí Yepes`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Initiation`,
                            LaunchDate: `September 3, 2013`,
                            BillboardReview: 86,
                            USBillboard200: 1,
                            Artist: `Naomí Yepes`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Dream Driven`,
                            LaunchDate: `August 25, 2014`,
                            BillboardReview: 81,
                            USBillboard200: 1,
                            Artist: `Naomí Yepes`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Intro`,
                                    Released: `29 Apr 2021`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Ferocious`,
                                    Released: `28 Apr 2014`,
                                    Genre: `Dance-pop R&B`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Going crazy`,
                                    Released: `10 Feb 2015`,
                                    Genre: `Dance-pop EDM`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Future past`,
                                    Released: `14 Jul 2021`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Roaming like them`,
                                    Released: `2 Jul 2014`,
                                    Genre: `Electro house Electropop`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Last Wishes`,
                                    Released: `12 Aug 2014`,
                                    Genre: `R&B`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Stay where you are`,
                                    Released: `14 Aug 1998`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Imaginarium`,
                                    Released: `15 Sep 2013`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Tell me`,
                                    Released: `30 Sep 2014`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Shredded into pieces`,
                                    Released: `2 Sep 2011`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Capture this moment`,
                                    Released: `5 Jan 2011`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 12,
                                    Title: `Dream Driven`,
                                    Released: `12 Dec 1999`,
                                    Genre: `*`,
                                    Album: `Dream Driven`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `The dragon journey`,
                            LaunchDate: `May 20, 2016`,
                            BillboardReview: 60,
                            USBillboard200: 2,
                            Artist: `Naomí Yepes`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Organic me`,
                            LaunchDate: `August 17, 2018`,
                            BillboardReview: 82,
                            USBillboard200: 1,
                            Artist: `Naomí Yepes`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `I Love`,
                                    Released: `11 May 2019`,
                                    Genre: `Crunk reggaeton`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Early Morning Compass`,
                                    Released: `15 Jan 2020`,
                                    Genre: `mystical parody-bap `,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Key Fields Forever`,
                                    Released: `2 Jan 2020`,
                                    Genre: `Dance-pop EDM`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Stand by Your Goblins`,
                                    Released: `20 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Mad to Walk`,
                                    Released: `12 May 2019`,
                                    Genre: `Electro house Electropop`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Alice's Waiting`,
                                    Released: `28 Jan 2020`,
                                    Genre: `R&B`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `We Shall Kiss`,
                                    Released: `30 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Behind Single Ants`,
                                    Released: `2 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Soap Autopsy`,
                                    Released: `8 Aug 2019`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Have You Met Rich?`,
                                    Released: `1 Jul 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Organic me`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Livin' on a Banana`,
                                    Released: `22 Nov 2019`,
                                    Genre: `Crunk reggaeton`,
                                    Album: `Organic me`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Curiosity`,
                            LaunchDate: `December 7, 2019`,
                            BillboardReview: 75,
                            USBillboard200: 12,
                            Artist: `Naomí Yepes`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 1,
                    Artist: `Babila Ebwélé`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/babila.png`,
                    Debut: 2009,
                    GrammyNominations: 0,
                    GrammyAwards: 11,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `The last straw`,
                            StartedOn: `May 09`,
                            Location: `Europe, Asia`,
                            Headliner: `NO`,
                            TouredBy: `Babila Ebwélé`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `No foundations`,
                            StartedOn: `Jun 04`,
                            Location: `United States, Europe`,
                            Headliner: `YES`,
                            TouredBy: `Babila Ebwélé`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Crazy eyes`,
                            StartedOn: `Jun 08`,
                            Location: `North America`,
                            Headliner: `NO`,
                            TouredBy: `Babila Ebwélé`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Zero gravity`,
                            StartedOn: `Apr 19`,
                            Location: `United States`,
                            Headliner: `NO`,
                            TouredBy: `Babila Ebwélé`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Battle with myself`,
                            StartedOn: `Mar 08`,
                            Location: `North America`,
                            Headliner: `YES`,
                            TouredBy: `Babila Ebwélé`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Pushing up daisies`,
                            LaunchDate: `May 31, 2000`,
                            BillboardReview: 86,
                            USBillboard200: 42,
                            Artist: `Babila Ebwélé`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Wood Shavings Forever`,
                                    Released: `9 Jun 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Early Morning Drive`,
                                    Released: `20 May 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Don't Natter`,
                                    Released: `10 Jun 2019`,
                                    Genre: `adult calypso-industrial`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Stairway to Balloons`,
                                    Released: `18 Jun 2019`,
                                    Genre: `calypso and mariachi`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `The Number of your Apple`,
                                    Released: `29 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Your Delightful Heart`,
                                    Released: `24 Feb 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Nice Weather For Balloons`,
                                    Released: `1 Aug 2019`,
                                    Genre: `rap-hop`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `The Girl From Cornwall`,
                                    Released: `4 May 2019`,
                                    Genre: `enigmatic rock-and-roll`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Here Without Jack`,
                                    Released: `24 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Born Rancid`,
                                    Released: `19 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Pushing up daisies`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Death's dead`,
                            LaunchDate: `June 8, 2016`,
                            BillboardReview: 85,
                            USBillboard200: 95,
                            Artist: `Babila Ebwélé`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Men Sound Better With You`,
                                    Released: `20 Oct 2019`,
                                    Genre: `rap-hop`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Ghost in My Rod`,
                                    Released: `5 Oct 2019`,
                                    Genre: `enigmatic rock-and-roll`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Bed of Men`,
                                    Released: `14 Nov 2019`,
                                    Genre: `whimsical comedy-grass `,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Don't Push`,
                                    Released: `2 Jan 2020`,
                                    Genre: `unblack electronic-trip-hop`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Nice Weather For Men`,
                                    Released: `18 Dec 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Rancid Rhapsody`,
                                    Released: `10 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Push, Push, Push!`,
                                    Released: `21 Feb 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `My Name is Sarah`,
                                    Released: `15 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `The Girl From My Hotel`,
                                    Released: `6 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Free Box`,
                                    Released: `18 Apr 2019`,
                                    Genre: `splitter-funk`,
                                    Album: `Death's dead`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Hotel Cardiff`,
                                    Released: `30 Dec 2019`,
                                    Genre: `guilty pleasure ebm`,
                                    Album: `Death's dead`
                                })]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 2,
                    Artist: `Ahmad Nazeri`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/ahmad.png`,
                    Debut: 2004,
                    GrammyNominations: 3,
                    GrammyAwards: 1,
                    HasGrammyAward: true,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Emergency`,
                            LaunchDate: `March 6, 2004`,
                            BillboardReview: 98,
                            USBillboard200: 69,
                            Artist: `Ahmad Nazeri`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Bursting bubbles`,
                            LaunchDate: `April 17, 2006`,
                            BillboardReview: 69,
                            USBillboard200: 39,
                            Artist: `Ahmad Nazeri`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 3,
                    Artist: `Kimmy McIlmorie`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/kimmy.png`,
                    Debut: 2007,
                    GrammyNominations: 21,
                    GrammyAwards: 3,
                    HasGrammyAward: true,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Here we go again`,
                            LaunchDate: `November 18, 2017`,
                            BillboardReview: 68,
                            USBillboard200: 1,
                            Artist: `Kimmy McIlmorie`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 4,
                    Artist: `Mar Rueda`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/mar.png`,
                    Debut: 1996,
                    GrammyNominations: 14,
                    GrammyAwards: 2,
                    HasGrammyAward: true,
                    Tours: [
                    ]
                    ,
                    Albums: [
                    ]

                }),
                new SingersDataItem(
                {
                    ID: 5,
                    Artist: `Izabella Tabakova`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/izabella.png`,
                    Debut: 2017,
                    GrammyNominations: 7,
                    GrammyAwards: 11,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Final breath`,
                            StartedOn: `Jun 13`,
                            Location: `Europe`,
                            Headliner: `YES`,
                            TouredBy: `Izabella Tabakova`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Once bitten`,
                            StartedOn: `Dec 18`,
                            Location: `Australia, United States`,
                            Headliner: `NO`,
                            TouredBy: `Izabella Tabakova`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Code word`,
                            StartedOn: `Sep 19`,
                            Location: `United States, Europe`,
                            Headliner: `NO`,
                            TouredBy: `Izabella Tabakova`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Final draft`,
                            StartedOn: `Sep 17`,
                            Location: `United States, Europe`,
                            Headliner: `YES`,
                            TouredBy: `Izabella Tabakova`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Once bitten`,
                            LaunchDate: `July 16, 2007`,
                            BillboardReview: 79,
                            USBillboard200: 53,
                            Artist: `Izabella Tabakova`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Whole Lotta Super Cats`,
                                    Released: `21 May 2019`,
                                    Genre: `*`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Enter Becky`,
                                    Released: `16 Jan 2020`,
                                    Genre: `*`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Your Cheatin' Flamingo`,
                                    Released: `14 Jan 2020`,
                                    Genre: `*`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Mad to Kiss`,
                                    Released: `6 Nov 2019`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Hotel Prague`,
                                    Released: `20 Oct 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Jail on My Mind`,
                                    Released: `31 May 2019`,
                                    Genre: `Crunk reggaeton`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Amazing Blues`,
                                    Released: `29 May 2019`,
                                    Genre: `mystical parody-bap `,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Goody Two Iron Filings`,
                                    Released: `4 Jul 2019`,
                                    Genre: `Electro house Electropop`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `I Love in Your Arms`,
                                    Released: `7 Jun 2019`,
                                    Genre: `R&B`,
                                    Album: `Once bitten`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Truly Madly Amazing`,
                                    Released: `12 Sep 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Once bitten`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Your graciousness`,
                            LaunchDate: `November 17, 2004`,
                            BillboardReview: 69,
                            USBillboard200: 30,
                            Artist: `Izabella Tabakova`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `We Shall Tickle`,
                                    Released: `31 Aug 2019`,
                                    Genre: `old emo-garage `,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Snail Boogie`,
                                    Released: `14 Jun 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Amazing Liz`,
                                    Released: `15 Oct 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `When Sexy Aardvarks Cry`,
                                    Released: `1 Oct 2019`,
                                    Genre: `whimsical comedy-grass `,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Stand By Dave`,
                                    Released: `18 Aug 2019`,
                                    Genre: `unblack electronic-trip-hop`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `The Golf Course is Your Land`,
                                    Released: `2 Apr 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Where Have All the Men Gone?`,
                                    Released: `29 Apr 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Rhythm of the Leg`,
                                    Released: `5 Aug 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Baby, I Need Your Hats`,
                                    Released: `5 Dec 2019`,
                                    Genre: `neuro-tunes`,
                                    Album: `Your graciousness`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Stand by Your Cat`,
                                    Released: `25 Jul 2019`,
                                    Genre: `*`,
                                    Album: `Your graciousness`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Dark matters`,
                            LaunchDate: `November 3, 2002`,
                            BillboardReview: 79,
                            USBillboard200: 85,
                            Artist: `Izabella Tabakova`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 6,
                    Artist: `Nguyễn Diệp Chi`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/nguyen.png`,
                    Debut: 1992,
                    GrammyNominations: 4,
                    GrammyAwards: 2,
                    HasGrammyAward: true,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Library of liberty`,
                            LaunchDate: `December 22, 2003`,
                            BillboardReview: 93,
                            USBillboard200: 5,
                            Artist: `Nguyễn Diệp Chi`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 7,
                    Artist: `Eva Lee`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/eva.png`,
                    Debut: 2008,
                    GrammyNominations: 2,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Just a tease`,
                            LaunchDate: `May 3, 2001`,
                            BillboardReview: 91,
                            USBillboard200: 29,
                            Artist: `Eva Lee`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 8,
                    Artist: `Siri Jakobsson`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/siri.png`,
                    Debut: 1990,
                    GrammyNominations: 2,
                    GrammyAwards: 8,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Basket case`,
                            StartedOn: `Jan 07`,
                            Location: `Europe, Asia`,
                            Headliner: `NO`,
                            TouredBy: `Siri Jakobsson`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `The bigger fish`,
                            StartedOn: `Dec 07`,
                            Location: `United States, Europe`,
                            Headliner: `YES`,
                            TouredBy: `Siri Jakobsson`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Missed the boat`,
                            StartedOn: `Jun 09`,
                            Location: `Europe, Asia`,
                            Headliner: `NO`,
                            TouredBy: `Siri Jakobsson`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Equivalent exchange`,
                            StartedOn: `Feb 06`,
                            Location: `United States, Europe`,
                            Headliner: `YES`,
                            TouredBy: `Siri Jakobsson`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Damage control`,
                            StartedOn: `Oct 11`,
                            Location: `Australia, United States`,
                            Headliner: `NO`,
                            TouredBy: `Siri Jakobsson`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Under the bus`,
                            LaunchDate: `May 14, 2000`,
                            BillboardReview: 67,
                            USBillboard200: 67,
                            Artist: `Siri Jakobsson`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `Jack Broke My Heart At Tesco's`,
                                    Released: `19 Jan 2020`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Cat Deep, Hats High`,
                                    Released: `5 Dec 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `In Snail We Trust`,
                                    Released: `31 May 2019`,
                                    Genre: `hardcore opera`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Liz's Waiting`,
                                    Released: `22 Jul 2019`,
                                    Genre: `emotional C-jam `,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Lifeless Blues`,
                                    Released: `14 Jun 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `I Spin`,
                                    Released: `26 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Ring of Rock`,
                                    Released: `12 Dec 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Livin' on a Rock`,
                                    Released: `17 Apr 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Your Lifeless Heart`,
                                    Released: `15 Sep 2019`,
                                    Genre: `adult calypso-industrial`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `The High Street on My Mind`,
                                    Released: `11 Nov 2019`,
                                    Genre: `calypso and mariachi`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Behind Ugly Curtains`,
                                    Released: `8 May 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 12,
                                    Title: `Where Have All the Curtains Gone?`,
                                    Released: `28 Jun 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 13,
                                    Title: `Ghost in My Apple`,
                                    Released: `14 Dec 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 14,
                                    Title: `I Chatter`,
                                    Released: `30 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Under the bus`
                                })]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 9,
                    Artist: `Pablo Cambeiro`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/pablo.png`,
                    Debut: 2011,
                    GrammyNominations: 5,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Beads`,
                            StartedOn: `May 11`,
                            Location: `Worldwide`,
                            Headliner: `NO`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Concept art`,
                            StartedOn: `Dec 18`,
                            Location: `United States`,
                            Headliner: `YES`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Glass shoe`,
                            StartedOn: `Jan 20`,
                            Location: `Worldwide`,
                            Headliner: `YES`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Pushing buttons`,
                            StartedOn: `Feb 15`,
                            Location: `Europe, Asia`,
                            Headliner: `NO`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Dark matters`,
                            StartedOn: `Jan 04`,
                            Location: `Australia, United States`,
                            Headliner: `YES`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Greener grass`,
                            StartedOn: `Sep 09`,
                            Location: `United States, Europe`,
                            Headliner: `NO`,
                            TouredBy: `Pablo Cambeiro`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Apparatus`,
                            StartedOn: `Nov 16`,
                            Location: `Europe`,
                            Headliner: `NO`,
                            TouredBy: `Pablo Cambeiro`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Fluke`,
                            LaunchDate: `August 4, 2017`,
                            BillboardReview: 93,
                            USBillboard200: 98,
                            Artist: `Pablo Cambeiro`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Crowd control`,
                            LaunchDate: `August 26, 2003`,
                            BillboardReview: 68,
                            USBillboard200: 84,
                            Artist: `Pablo Cambeiro`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `My Bed on My Mind`,
                                    Released: `25 Mar 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Bright Blues`,
                                    Released: `28 Sep 2019`,
                                    Genre: `neuro-tunes`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `Sail, Sail, Sail!`,
                                    Released: `5 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `Hotel My Bed`,
                                    Released: `22 Mar 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Gonna Make You Mash`,
                                    Released: `18 May 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Straight Outta America`,
                                    Released: `16 Jan 2020`,
                                    Genre: `hardcore opera`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `I Drive`,
                                    Released: `23 Feb 2019`,
                                    Genre: `emotional C-jam `,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Like a Teddy`,
                                    Released: `31 Aug 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Teddy Boogie`,
                                    Released: `30 Nov 2019`,
                                    Genre: `*`,
                                    Album: `Crowd control`
                                })]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 10,
                    Artist: `Athar Malakooti`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/athar.png`,
                    Debut: 2017,
                    GrammyNominations: 0,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Pushing up daisies`,
                            LaunchDate: `February 24, 2016`,
                            BillboardReview: 74,
                            USBillboard200: 77,
                            Artist: `Athar Malakooti`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 11,
                    Artist: `Marti Valencia`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/marti.png`,
                    Debut: 2004,
                    GrammyNominations: 1,
                    GrammyAwards: 1,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Cat eat cat world`,
                            StartedOn: `Sep 00`,
                            Location: `Worldwide`,
                            Headliner: `YES`,
                            TouredBy: `Marti Valencia`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Final straw`,
                            StartedOn: `Sep 06`,
                            Location: `United States, Europe`,
                            Headliner: `NO`,
                            TouredBy: `Marti Valencia`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Nemesis`,
                            LaunchDate: `June 30, 2004`,
                            BillboardReview: 94,
                            USBillboard200: 9,
                            Artist: `Marti Valencia`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `First chance`,
                            LaunchDate: `January 7, 2019`,
                            BillboardReview: 96,
                            USBillboard200: 19,
                            Artist: `Marti Valencia`,
                            Songs: [
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 1,
                                    Title: `My Name is Jason`,
                                    Released: `12 Jul 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 2,
                                    Title: `Amazing Andy`,
                                    Released: `5 Mar 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 3,
                                    Title: `The Number of your Knight`,
                                    Released: `4 Dec 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 4,
                                    Title: `I Sail`,
                                    Released: `3 Mar 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 5,
                                    Title: `Goody Two Hands`,
                                    Released: `11 Oct 2019`,
                                    Genre: `Electro house Electropop`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 6,
                                    Title: `Careful With That Knife`,
                                    Released: `18 Dec 2019`,
                                    Genre: `R&B`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 7,
                                    Title: `Four Single Ants`,
                                    Released: `18 Jan 2020`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 8,
                                    Title: `Kiss Forever`,
                                    Released: `10 Aug 2019`,
                                    Genre: `*`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 9,
                                    Title: `Rich's Waiting`,
                                    Released: `15 Mar 2019`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 10,
                                    Title: `Japan is Your Land`,
                                    Released: `7 Mar 2019`,
                                    Genre: `ethno-tunes`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 11,
                                    Title: `Pencils in My Banana`,
                                    Released: `21 Jun 2019`,
                                    Genre: `Crunk reggaeton`,
                                    Album: `First chance`
                                }),
                                new SingersDataItem_AlbumsItem_SongsItem(
                                {
                                    Number: 12,
                                    Title: `I Sail in Your Arms`,
                                    Released: `30 Apr 2019`,
                                    Genre: `Synth-pop R&B`,
                                    Album: `First chance`
                                })]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `God's advocate`,
                            LaunchDate: `April 29, 2007`,
                            BillboardReview: 66,
                            USBillboard200: 37,
                            Artist: `Marti Valencia`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 12,
                    Artist: `Alicia Stanger`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/alicia.png`,
                    Debut: 2010,
                    GrammyNominations: 1,
                    GrammyAwards: 0,
                    HasGrammyAward: false,
                    Tours: [
                    ]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Forever alone`,
                            LaunchDate: `November 3, 2005`,
                            BillboardReview: 82,
                            USBillboard200: 7,
                            Artist: `Alicia Stanger`,
                            Songs: [
                            ]

                        })]

                }),
                new SingersDataItem(
                {
                    ID: 13,
                    Artist: `Peter Taylor`,
                    Photo: `https://dl.infragistics.com/x/img/people/names/peter.png`,
                    Debut: 2005,
                    GrammyNominations: 0,
                    GrammyAwards: 2,
                    HasGrammyAward: true,
                    Tours: [
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Love`,
                            StartedOn: `Jun 04`,
                            Location: `Europe, Asia`,
                            Headliner: `YES`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Fault of treasures`,
                            StartedOn: `Oct 13`,
                            Location: `North America`,
                            Headliner: `NO`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `For eternity`,
                            StartedOn: `Mar 05`,
                            Location: `United States`,
                            Headliner: `YES`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Time flies`,
                            StartedOn: `Jun 03`,
                            Location: `North America`,
                            Headliner: `NO`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Highest difficulty`,
                            StartedOn: `Nov 01`,
                            Location: `Worldwide`,
                            Headliner: `YES`,
                            TouredBy: `Peter Taylor`
                        }),
                        new SingersDataItem_ToursItem(
                        {
                            Tour: `Sleeping dogs`,
                            StartedOn: `May 04`,
                            Location: `United States, Europe`,
                            Headliner: `NO`,
                            TouredBy: `Peter Taylor`
                        })]
                    ,
                    Albums: [
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Decisions decisions`,
                            LaunchDate: `April 10, 2008`,
                            BillboardReview: 85,
                            USBillboard200: 35,
                            Artist: `Peter Taylor`,
                            Songs: [
                            ]

                        }),
                        new SingersDataItem_AlbumsItem(
                        {
                            Album: `Climate changed`,
                            LaunchDate: `June 20, 2015`,
                            BillboardReview: 66,
                            USBillboard200: 89,
                            Artist: `Peter Taylor`,
                            Songs: [
                            ]

                        })]

                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}

// Pivot grid: product sales

export class PivotDataFlatItem {
    public constructor(init: Partial<PivotDataFlatItem>) {
        Object.assign(this, init);
    }

    public ProductName: string;
    public ProductUnitPrice: number;
    public SellerName: string;
    public SellerCity: string;
    public Date: string;
    public Value: number;
    public NumberOfUnits: number;

}
export class PivotDataFlat extends Array<PivotDataFlatItem> {
    public constructor(items: Array<PivotDataFlatItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 12.8, SellerName: `Stanley Brooker`, SellerCity: `Seattle`, Date: `01/01/2007`, Value: 94.4, NumberOfUnits: 282 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 49.6, SellerName: `Elisa Longbottom`, SellerCity: `Sofia`, Date: `01/05/2007`, Value: 70.8, NumberOfUnits: 296 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 3.6, SellerName: `Lydia Burson`, SellerCity: `Tokyo`, Date: `01/06/2007`, Value: 35.8, NumberOfUnits: 68 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 85.6, SellerName: `David Haley`, SellerCity: `London`, Date: `01/07/2007`, Value: 41.4, NumberOfUnits: 293 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 18.2, SellerName: `John Smith`, SellerCity: `Seattle`, Date: `01/08/2007`, Value: 60.6, NumberOfUnits: 240 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 68.4, SellerName: `Larry Lieb`, SellerCity: `Tokyo`, Date: `01/12/2007`, Value: 38, NumberOfUnits: 456 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 16.2, SellerName: `Walter Pang`, SellerCity: `Sofia`, Date: `02/09/2007`, Value: 89.2, NumberOfUnits: 492 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 35.2, SellerName: `Benjamin Dupree`, SellerCity: `Tokyo`, Date: `02/16/2007`, Value: 2, NumberOfUnits: 78 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 73.2, SellerName: `Nicholas Carmona`, SellerCity: `Mellvile`, Date: `02/17/2007`, Value: 4.6, NumberOfUnits: 150 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 73.6, SellerName: `Nicholas Carmona`, SellerCity: `London`, Date: `02/19/2007`, Value: 36.2, NumberOfUnits: 262 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 47.2, SellerName: `Monica Freitag`, SellerCity: `Sofia`, Date: `02/21/2007`, Value: 18.8, NumberOfUnits: 125 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 51.4, SellerName: `Kathe Pettel`, SellerCity: `Sofia`, Date: `03/04/2007`, Value: 11.6, NumberOfUnits: 42 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 27.6, SellerName: `David Haley`, SellerCity: `Tokyo`, Date: `03/04/2007`, Value: 41.4, NumberOfUnits: 282 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 22.4, SellerName: `Antonio Charbonneau`, SellerCity: `Berlin`, Date: `03/17/2007`, Value: 59.8, NumberOfUnits: 305 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 85.4, SellerName: `Glenn Landeros`, SellerCity: `Tokyo`, Date: `03/23/2007`, Value: 31.4, NumberOfUnits: 265 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 80.8, SellerName: `Elisa Longbottom`, SellerCity: `Mellvile`, Date: `03/25/2007`, Value: 90.4, NumberOfUnits: 350 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 64.6, SellerName: `Glenn Landeros`, SellerCity: `Mellvile`, Date: `03/27/2007`, Value: 95.4, NumberOfUnits: 82 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 50, SellerName: `Harry Tyler`, SellerCity: `New York`, Date: `04/02/2007`, Value: 1.4, NumberOfUnits: 67 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 16.4, SellerName: `Brandon Mckim`, SellerCity: `Mellvile`, Date: `04/04/2007`, Value: 25.4, NumberOfUnits: 370 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 50, SellerName: `Monica Freitag`, SellerCity: `Berlin`, Date: `04/12/2007`, Value: 46.4, NumberOfUnits: 228 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 44.8, SellerName: `Bryan Culver`, SellerCity: `Tokyo`, Date: `04/15/2007`, Value: 82.2, NumberOfUnits: 272 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 44.4, SellerName: `Russell Shorter`, SellerCity: `Berlin`, Date: `04/18/2007`, Value: 84, NumberOfUnits: 227 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 39.4, SellerName: `Stanley Brooker`, SellerCity: `Mellvile`, Date: `04/18/2007`, Value: 94.4, NumberOfUnits: 248 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 36.6, SellerName: `Benjamin Meekins`, SellerCity: `Tokyo`, Date: `04/21/2007`, Value: 45.8, NumberOfUnits: 414 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 75.8, SellerName: `Walter Pang`, SellerCity: `London`, Date: `04/25/2007`, Value: 97.6, NumberOfUnits: 43 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 57.8, SellerName: `Antonio Charbonneau`, SellerCity: `Mellvile`, Date: `04/26/2007`, Value: 21, NumberOfUnits: 71 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 40.2, SellerName: `Stanley Brooker`, SellerCity: `New York`, Date: `05/14/2007`, Value: 72, NumberOfUnits: 321 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 49.6, SellerName: `Elisa Longbottom`, SellerCity: `London`, Date: `05/17/2007`, Value: 49.6, NumberOfUnits: 329 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 56.6, SellerName: `Benjamin Dupree`, SellerCity: `London`, Date: `05/17/2007`, Value: 72.8, NumberOfUnits: 88 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 67.2, SellerName: `Glenn Landeros`, SellerCity: `New York`, Date: `05/26/2007`, Value: 56.2, NumberOfUnits: 366 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 14.6, SellerName: `Walter Pang`, SellerCity: `Sofia`, Date: `06/02/2007`, Value: 81.4, NumberOfUnits: 450 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 89.4, SellerName: `Howard Sprouse`, SellerCity: `Seattle`, Date: `06/06/2007`, Value: 19, NumberOfUnits: 475 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 33.8, SellerName: `Nicholas Carmona`, SellerCity: `Seattle`, Date: `06/11/2007`, Value: 55, NumberOfUnits: 195 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 54.2, SellerName: `Harold Garvin`, SellerCity: `Sofia`, Date: `06/17/2007`, Value: 71.6, NumberOfUnits: 458 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 18.4, SellerName: `Benjamin Dupree`, SellerCity: `Sofia`, Date: `07/04/2007`, Value: 24.2, NumberOfUnits: 7 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 96.2, SellerName: `Elisa Longbottom`, SellerCity: `New York`, Date: `07/08/2007`, Value: 57.6, NumberOfUnits: 158 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 23, SellerName: `Benjamin Meekins`, SellerCity: `Tokyo`, Date: `07/09/2007`, Value: 58.8, NumberOfUnits: 34 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 52.8, SellerName: `Larry Lieb`, SellerCity: `Seattle`, Date: `07/10/2007`, Value: 32.4, NumberOfUnits: 412 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 62.2, SellerName: `John Smith`, SellerCity: `Sofia`, Date: `07/15/2007`, Value: 85, NumberOfUnits: 10 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 10.8, SellerName: `Antonio Charbonneau`, SellerCity: `New York`, Date: `07/16/2007`, Value: 52.2, NumberOfUnits: 466 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 4.8, SellerName: `Stanley Brooker`, SellerCity: `London`, Date: `07/20/2007`, Value: 34.2, NumberOfUnits: 248 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 43.8, SellerName: `Brandon Mckim`, SellerCity: `Mellvile`, Date: `07/24/2007`, Value: 45.6, NumberOfUnits: 307 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 76.4, SellerName: `Glenn Landeros`, SellerCity: `London`, Date: `07/26/2007`, Value: 26.2, NumberOfUnits: 445 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 34.4, SellerName: `Bryan Culver`, SellerCity: `New York`, Date: `08/01/2007`, Value: 89.2, NumberOfUnits: 480 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 68.6, SellerName: `Howard Sprouse`, SellerCity: `Berlin`, Date: `08/02/2007`, Value: 38.2, NumberOfUnits: 390 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 65.2, SellerName: `Larry Lieb`, SellerCity: `Mellvile`, Date: `08/05/2007`, Value: 23.2, NumberOfUnits: 388 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 45, SellerName: `Russell Shorter`, SellerCity: `Seattle`, Date: `08/19/2007`, Value: 23.4, NumberOfUnits: 37 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 93.6, SellerName: `John Smith`, SellerCity: `New York`, Date: `08/24/2007`, Value: 17.4, NumberOfUnits: 237 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 94.4, SellerName: `Harry Tyler`, SellerCity: `Seattle`, Date: `08/26/2007`, Value: 54.6, NumberOfUnits: 396 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 72.4, SellerName: `David Haley`, SellerCity: `Tokyo`, Date: `08/26/2007`, Value: 61, NumberOfUnits: 3 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 80.6, SellerName: `Russell Shorter`, SellerCity: `New York`, Date: `09/02/2007`, Value: 85.2, NumberOfUnits: 330 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 65.4, SellerName: `Benjamin Dupree`, SellerCity: `London`, Date: `09/04/2007`, Value: 51.2, NumberOfUnits: 143 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 30.6, SellerName: `Bryan Culver`, SellerCity: `Seattle`, Date: `09/05/2007`, Value: 55.2, NumberOfUnits: 318 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 7.6, SellerName: `Alfredo Fetuchini`, SellerCity: `Seattle`, Date: `09/06/2007`, Value: 41.8, NumberOfUnits: 393 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 47, SellerName: `Harold Garvin`, SellerCity: `Seattle`, Date: `09/10/2007`, Value: 9.2, NumberOfUnits: 129 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 38, SellerName: `Glenn Landeros`, SellerCity: `London`, Date: `09/17/2007`, Value: 25.6, NumberOfUnits: 426 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 2.6, SellerName: `Harry Tyler`, SellerCity: `London`, Date: `09/18/2007`, Value: 36.4, NumberOfUnits: 217 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 77.6, SellerName: `John Smith`, SellerCity: `New York`, Date: `09/20/2007`, Value: 28, NumberOfUnits: 152 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 97.2, SellerName: `Benjamin Meekins`, SellerCity: `Seattle`, Date: `09/25/2007`, Value: 21.8, NumberOfUnits: 452 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 19.8, SellerName: `Carl Costello`, SellerCity: `Seattle`, Date: `10/02/2007`, Value: 98.4, NumberOfUnits: 499 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 32.8, SellerName: `Mark Slater`, SellerCity: `Seattle`, Date: `10/06/2007`, Value: 79.6, NumberOfUnits: 169 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 22, SellerName: `Nicholas Carmona`, SellerCity: `Berlin`, Date: `10/14/2007`, Value: 69.6, NumberOfUnits: 386 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 35.6, SellerName: `Russell Shorter`, SellerCity: `Sofia`, Date: `10/14/2007`, Value: 27.8, NumberOfUnits: 454 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 47, SellerName: `Elisa Longbottom`, SellerCity: `New York`, Date: `10/25/2007`, Value: 82.2, NumberOfUnits: 334 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 41.2, SellerName: `Lydia Burson`, SellerCity: `Tokyo`, Date: `10/26/2007`, Value: 54.4, NumberOfUnits: 107 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 13.8, SellerName: `Mark Slater`, SellerCity: `Sofia`, Date: `11/07/2007`, Value: 86.2, NumberOfUnits: 275 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 64.2, SellerName: `Monica Freitag`, SellerCity: `London`, Date: `11/09/2007`, Value: 37.8, NumberOfUnits: 241 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 1.2, SellerName: `Larry Lieb`, SellerCity: `London`, Date: `11/11/2007`, Value: 75.2, NumberOfUnits: 177 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 57.8, SellerName: `Monica Freitag`, SellerCity: `Sofia`, Date: `11/13/2007`, Value: 58.6, NumberOfUnits: 494 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 39.6, SellerName: `Lydia Burson`, SellerCity: `Mellvile`, Date: `11/19/2007`, Value: 40.8, NumberOfUnits: 451 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 5.2, SellerName: `Stanley Brooker`, SellerCity: `Tokyo`, Date: `01/01/2008`, Value: 91.8, NumberOfUnits: 125 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 53.4, SellerName: `Kathe Pettel`, SellerCity: `London`, Date: `01/02/2008`, Value: 31, NumberOfUnits: 103 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 52.2, SellerName: `Larry Lieb`, SellerCity: `New York`, Date: `01/03/2008`, Value: 43, NumberOfUnits: 224 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 17.8, SellerName: `Nicholas Carmona`, SellerCity: `Mellvile`, Date: `01/07/2008`, Value: 47.6, NumberOfUnits: 498 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 80.8, SellerName: `Benjamin Dupree`, SellerCity: `London`, Date: `01/08/2008`, Value: 15.6, NumberOfUnits: 142 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 95.4, SellerName: `Larry Lieb`, SellerCity: `Berlin`, Date: `01/21/2008`, Value: 87.2, NumberOfUnits: 487 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 21.8, SellerName: `David Haley`, SellerCity: `Mellvile`, Date: `01/27/2008`, Value: 14.6, NumberOfUnits: 331 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 30, SellerName: `Glenn Landeros`, SellerCity: `London`, Date: `02/03/2008`, Value: 99.2, NumberOfUnits: 418 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 39.8, SellerName: `Benjamin Meekins`, SellerCity: `New York`, Date: `02/04/2008`, Value: 61, NumberOfUnits: 214 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 40.4, SellerName: `Elisa Longbottom`, SellerCity: `Mellvile`, Date: `02/05/2008`, Value: 81.8, NumberOfUnits: 229 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 35.2, SellerName: `Alfredo Fetuchini`, SellerCity: `London`, Date: `02/05/2008`, Value: 54.4, NumberOfUnits: 16 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 41.8, SellerName: `Harry Tyler`, SellerCity: `Sofia`, Date: `02/08/2008`, Value: 18, NumberOfUnits: 216 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 0.8, SellerName: `Harry Tyler`, SellerCity: `Sofia`, Date: `02/09/2008`, Value: 85, NumberOfUnits: 486 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 37.6, SellerName: `Elisa Longbottom`, SellerCity: `Tokyo`, Date: `02/13/2008`, Value: 45.2, NumberOfUnits: 172 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 20.8, SellerName: `Antonio Charbonneau`, SellerCity: `New York`, Date: `02/21/2008`, Value: 60.6, NumberOfUnits: 102 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 70.8, SellerName: `Kathe Pettel`, SellerCity: `Seattle`, Date: `02/24/2008`, Value: 43, NumberOfUnits: 36 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 53.4, SellerName: `Alfredo Fetuchini`, SellerCity: `Mellvile`, Date: `02/25/2008`, Value: 11, NumberOfUnits: 71 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 25, SellerName: `Alfredo Fetuchini`, SellerCity: `Mellvile`, Date: `02/25/2008`, Value: 17, NumberOfUnits: 53 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 64.6, SellerName: `Antonio Charbonneau`, SellerCity: `Tokyo`, Date: `02/25/2008`, Value: 99, NumberOfUnits: 104 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 9.6, SellerName: `Brandon Mckim`, SellerCity: `Tokyo`, Date: `02/26/2008`, Value: 96.2, NumberOfUnits: 294 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 41.2, SellerName: `Antonio Charbonneau`, SellerCity: `Sofia`, Date: `03/03/2008`, Value: 93.8, NumberOfUnits: 454 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 37, SellerName: `Stanley Brooker`, SellerCity: `Berlin`, Date: `03/05/2008`, Value: 82.8, NumberOfUnits: 492 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 16.8, SellerName: `Harry Tyler`, SellerCity: `New York`, Date: `03/08/2008`, Value: 0.8, NumberOfUnits: 132 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 24.8, SellerName: `Alfredo Fetuchini`, SellerCity: `New York`, Date: `03/09/2008`, Value: 88.6, NumberOfUnits: 225 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 65.6, SellerName: `David Haley`, SellerCity: `Tokyo`, Date: `03/10/2008`, Value: 69.2, NumberOfUnits: 422 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 70.6, SellerName: `Glenn Landeros`, SellerCity: `London`, Date: `03/12/2008`, Value: 97.2, NumberOfUnits: 303 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 65.2, SellerName: `Carl Costello`, SellerCity: `London`, Date: `03/13/2008`, Value: 46.4, NumberOfUnits: 319 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 39.6, SellerName: `Harold Garvin`, SellerCity: `London`, Date: `03/14/2008`, Value: 48.6, NumberOfUnits: 262 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 50.8, SellerName: `Harold Garvin`, SellerCity: `Berlin`, Date: `03/23/2008`, Value: 91.8, NumberOfUnits: 345 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 88.4, SellerName: `David Haley`, SellerCity: `Tokyo`, Date: `04/03/2008`, Value: 87.4, NumberOfUnits: 407 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 47.4, SellerName: `Walter Pang`, SellerCity: `Berlin`, Date: `04/04/2008`, Value: 15.2, NumberOfUnits: 121 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 30.4, SellerName: `Larry Lieb`, SellerCity: `Seattle`, Date: `04/06/2008`, Value: 44.4, NumberOfUnits: 30 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 88.2, SellerName: `Harold Garvin`, SellerCity: `Berlin`, Date: `04/11/2008`, Value: 25.4, NumberOfUnits: 293 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 16.6, SellerName: `David Haley`, SellerCity: `Sofia`, Date: `04/12/2008`, Value: 55.2, NumberOfUnits: 271 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 95.2, SellerName: `Howard Sprouse`, SellerCity: `Sofia`, Date: `04/18/2008`, Value: 25.8, NumberOfUnits: 107 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 7.8, SellerName: `Bryan Culver`, SellerCity: `Mellvile`, Date: `04/18/2008`, Value: 54.6, NumberOfUnits: 87 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 94.8, SellerName: `David Haley`, SellerCity: `Tokyo`, Date: `04/23/2008`, Value: 79, NumberOfUnits: 319 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 37.2, SellerName: `Lydia Burson`, SellerCity: `New York`, Date: `04/24/2008`, Value: 21.6, NumberOfUnits: 346 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 99.4, SellerName: `Benjamin Dupree`, SellerCity: `London`, Date: `05/07/2008`, Value: 77.8, NumberOfUnits: 382 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 96.2, SellerName: `Larry Lieb`, SellerCity: `New York`, Date: `05/11/2008`, Value: 35.4, NumberOfUnits: 334 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 26.2, SellerName: `Harold Garvin`, SellerCity: `Tokyo`, Date: `05/13/2008`, Value: 28.8, NumberOfUnits: 176 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 80.8, SellerName: `Mark Slater`, SellerCity: `Berlin`, Date: `05/19/2008`, Value: 8.4, NumberOfUnits: 125 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 78.4, SellerName: `Russell Shorter`, SellerCity: `Mellvile`, Date: `05/19/2008`, Value: 15, NumberOfUnits: 458 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 94, SellerName: `Benjamin Meekins`, SellerCity: `Berlin`, Date: `05/25/2008`, Value: 68.6, NumberOfUnits: 331 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 96.6, SellerName: `Stanley Brooker`, SellerCity: `Mellvile`, Date: `05/27/2008`, Value: 71, NumberOfUnits: 39 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 37.6, SellerName: `Claudia Kobayashi`, SellerCity: `London`, Date: `06/06/2008`, Value: 97.2, NumberOfUnits: 238 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 47, SellerName: `Walter Pang`, SellerCity: `London`, Date: `06/07/2008`, Value: 5.8, NumberOfUnits: 84 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 80.2, SellerName: `Mark Slater`, SellerCity: `Tokyo`, Date: `06/08/2008`, Value: 24.8, NumberOfUnits: 363 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 43.6, SellerName: `Harry Tyler`, SellerCity: `New York`, Date: `06/08/2008`, Value: 59, NumberOfUnits: 479 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 56.4, SellerName: `Kathe Pettel`, SellerCity: `Sofia`, Date: `06/11/2008`, Value: 87.6, NumberOfUnits: 404 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 81.8, SellerName: `Glenn Landeros`, SellerCity: `London`, Date: `06/18/2008`, Value: 80.4, NumberOfUnits: 478 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 90.2, SellerName: `Benjamin Meekins`, SellerCity: `Sofia`, Date: `06/19/2008`, Value: 2.4, NumberOfUnits: 285 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 99.4, SellerName: `Kathe Pettel`, SellerCity: `Sofia`, Date: `06/22/2008`, Value: 82.6, NumberOfUnits: 15 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 30.8, SellerName: `Brandon Mckim`, SellerCity: `Berlin`, Date: `06/26/2008`, Value: 77.8, NumberOfUnits: 245 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 99.4, SellerName: `Nicholas Carmona`, SellerCity: `Mellvile`, Date: `07/01/2008`, Value: 8.2, NumberOfUnits: 376 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 73.4, SellerName: `Claudia Kobayashi`, SellerCity: `New York`, Date: `07/02/2008`, Value: 48.6, NumberOfUnits: 40 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 43.6, SellerName: `Larry Lieb`, SellerCity: `London`, Date: `07/10/2008`, Value: 38, NumberOfUnits: 112 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 16.4, SellerName: `Antonio Charbonneau`, SellerCity: `New York`, Date: `07/15/2008`, Value: 9.8, NumberOfUnits: 224 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 71.4, SellerName: `Stanley Brooker`, SellerCity: `Tokyo`, Date: `07/16/2008`, Value: 66.4, NumberOfUnits: 145 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 94.6, SellerName: `Stanley Brooker`, SellerCity: `Mellvile`, Date: `07/21/2008`, Value: 46.6, NumberOfUnits: 272 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 50.8, SellerName: `Claudia Kobayashi`, SellerCity: `London`, Date: `07/27/2008`, Value: 90.2, NumberOfUnits: 278 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 12.8, SellerName: `Harry Tyler`, SellerCity: `Seattle`, Date: `07/27/2008`, Value: 89.2, NumberOfUnits: 253 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 35.8, SellerName: `Nicholas Carmona`, SellerCity: `New York`, Date: `08/01/2008`, Value: 28.4, NumberOfUnits: 255 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 17.2, SellerName: `David Haley`, SellerCity: `Seattle`, Date: `08/02/2008`, Value: 0.6, NumberOfUnits: 46 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 22.2, SellerName: `Benjamin Dupree`, SellerCity: `Tokyo`, Date: `08/08/2008`, Value: 58.6, NumberOfUnits: 279 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 63, SellerName: `Russell Shorter`, SellerCity: `Sofia`, Date: `08/08/2008`, Value: 91.8, NumberOfUnits: 89 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 83.8, SellerName: `Larry Lieb`, SellerCity: `Sofia`, Date: `08/14/2008`, Value: 52.6, NumberOfUnits: 17 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 14.2, SellerName: `Lydia Burson`, SellerCity: `Sofia`, Date: `08/21/2008`, Value: 54, NumberOfUnits: 470 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 34.6, SellerName: `Elisa Longbottom`, SellerCity: `Mellvile`, Date: `08/25/2008`, Value: 1.8, NumberOfUnits: 195 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 86.8, SellerName: `Lydia Burson`, SellerCity: `New York`, Date: `08/27/2008`, Value: 23.8, NumberOfUnits: 173 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 42.2, SellerName: `Benjamin Dupree`, SellerCity: `New York`, Date: `09/01/2008`, Value: 51.2, NumberOfUnits: 472 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 25.8, SellerName: `Larry Lieb`, SellerCity: `Seattle`, Date: `09/06/2008`, Value: 88.4, NumberOfUnits: 148 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 23.2, SellerName: `Walter Pang`, SellerCity: `Mellvile`, Date: `09/06/2008`, Value: 94.6, NumberOfUnits: 314 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 83.8, SellerName: `Nicholas Carmona`, SellerCity: `Seattle`, Date: `09/07/2008`, Value: 66.8, NumberOfUnits: 431 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 84.4, SellerName: `Walter Pang`, SellerCity: `Mellvile`, Date: `09/07/2008`, Value: 27.6, NumberOfUnits: 347 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 7.4, SellerName: `Harry Tyler`, SellerCity: `Berlin`, Date: `09/11/2008`, Value: 2.8, NumberOfUnits: 27 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 9.6, SellerName: `Elisa Longbottom`, SellerCity: `Berlin`, Date: `09/12/2008`, Value: 12, NumberOfUnits: 5 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 50.8, SellerName: `Larry Lieb`, SellerCity: `Mellvile`, Date: `09/19/2008`, Value: 16.6, NumberOfUnits: 191 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 80, SellerName: `Bryan Culver`, SellerCity: `New York`, Date: `09/25/2008`, Value: 84.4, NumberOfUnits: 421 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 62.2, SellerName: `Carl Costello`, SellerCity: `Seattle`, Date: `10/03/2008`, Value: 29, NumberOfUnits: 297 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 96.2, SellerName: `Glenn Landeros`, SellerCity: `New York`, Date: `10/04/2008`, Value: 15.8, NumberOfUnits: 128 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 47, SellerName: `Howard Sprouse`, SellerCity: `Mellvile`, Date: `10/13/2008`, Value: 37.4, NumberOfUnits: 210 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 35.8, SellerName: `Russell Shorter`, SellerCity: `London`, Date: `10/14/2008`, Value: 27, NumberOfUnits: 315 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 79, SellerName: `Benjamin Meekins`, SellerCity: `New York`, Date: `10/19/2008`, Value: 69.8, NumberOfUnits: 489 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 84.4, SellerName: `Walter Pang`, SellerCity: `Mellvile`, Date: `10/21/2008`, Value: 61.4, NumberOfUnits: 47 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 25.6, SellerName: `John Smith`, SellerCity: `Mellvile`, Date: `10/22/2008`, Value: 69.4, NumberOfUnits: 92 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 24, SellerName: `Alfredo Fetuchini`, SellerCity: `Mellvile`, Date: `11/01/2008`, Value: 81.2, NumberOfUnits: 30 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 53.6, SellerName: `Stanley Brooker`, SellerCity: `Berlin`, Date: `11/01/2008`, Value: 15, NumberOfUnits: 132 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 68.2, SellerName: `Bryan Culver`, SellerCity: `London`, Date: `11/10/2008`, Value: 6.2, NumberOfUnits: 368 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 60, SellerName: `Kathe Pettel`, SellerCity: `New York`, Date: `11/11/2008`, Value: 39.2, NumberOfUnits: 482 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 5.8, SellerName: `Antonio Charbonneau`, SellerCity: `Mellvile`, Date: `11/11/2008`, Value: 48.8, NumberOfUnits: 22 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 96, SellerName: `Claudia Kobayashi`, SellerCity: `London`, Date: `11/20/2008`, Value: 87.2, NumberOfUnits: 159 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 59.2, SellerName: `Alfredo Fetuchini`, SellerCity: `Berlin`, Date: `11/25/2008`, Value: 88.6, NumberOfUnits: 52 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 94, SellerName: `Harry Tyler`, SellerCity: `Tokyo`, Date: `01/05/2009`, Value: 79.8, NumberOfUnits: 194 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 12.8, SellerName: `David Haley`, SellerCity: `Berlin`, Date: `01/08/2009`, Value: 43, NumberOfUnits: 100 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 38, SellerName: `Benjamin Meekins`, SellerCity: `Berlin`, Date: `01/10/2009`, Value: 48.4, NumberOfUnits: 252 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 79.4, SellerName: `Kathe Pettel`, SellerCity: `Tokyo`, Date: `01/13/2009`, Value: 68.6, NumberOfUnits: 116 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 91, SellerName: `Elisa Longbottom`, SellerCity: `London`, Date: `01/14/2009`, Value: 27.6, NumberOfUnits: 259 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 100, SellerName: `Glenn Landeros`, SellerCity: `London`, Date: `01/19/2009`, Value: 56.8, NumberOfUnits: 217 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 43.4, SellerName: `Bryan Culver`, SellerCity: `Seattle`, Date: `01/22/2009`, Value: 36.6, NumberOfUnits: 48 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 0.8, SellerName: `Stanley Brooker`, SellerCity: `New York`, Date: `02/02/2009`, Value: 71.4, NumberOfUnits: 445 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 60.6, SellerName: `Kathe Pettel`, SellerCity: `Mellvile`, Date: `02/03/2009`, Value: 44.6, NumberOfUnits: 90 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 13.8, SellerName: `Harry Tyler`, SellerCity: `Sofia`, Date: `02/07/2009`, Value: 36.2, NumberOfUnits: 453 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 44.2, SellerName: `Harry Tyler`, SellerCity: `Mellvile`, Date: `02/07/2009`, Value: 85.6, NumberOfUnits: 450 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 94.4, SellerName: `Lydia Burson`, SellerCity: `Sofia`, Date: `02/07/2009`, Value: 48.2, NumberOfUnits: 152 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 8.8, SellerName: `Harry Tyler`, SellerCity: `Berlin`, Date: `02/16/2009`, Value: 46.6, NumberOfUnits: 119 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 79.2, SellerName: `Kathe Pettel`, SellerCity: `Tokyo`, Date: `02/16/2009`, Value: 29.2, NumberOfUnits: 463 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 18.6, SellerName: `Howard Sprouse`, SellerCity: `Tokyo`, Date: `02/17/2009`, Value: 19.8, NumberOfUnits: 150 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 28, SellerName: `Walter Pang`, SellerCity: `Berlin`, Date: `02/19/2009`, Value: 17.6, NumberOfUnits: 210 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 67.2, SellerName: `Kathe Pettel`, SellerCity: `Tokyo`, Date: `02/20/2009`, Value: 36.4, NumberOfUnits: 150 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 36, SellerName: `Benjamin Meekins`, SellerCity: `London`, Date: `02/21/2009`, Value: 74, NumberOfUnits: 97 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 34.2, SellerName: `Stanley Brooker`, SellerCity: `Berlin`, Date: `02/22/2009`, Value: 86.4, NumberOfUnits: 256 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 66.4, SellerName: `Russell Shorter`, SellerCity: `London`, Date: `02/24/2009`, Value: 53, NumberOfUnits: 172 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 15, SellerName: `Monica Freitag`, SellerCity: `Mellvile`, Date: `02/24/2009`, Value: 5.2, NumberOfUnits: 489 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 52, SellerName: `Claudia Kobayashi`, SellerCity: `Sofia`, Date: `02/27/2009`, Value: 9.2, NumberOfUnits: 222 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 98.4, SellerName: `Nicholas Carmona`, SellerCity: `Berlin`, Date: `03/03/2009`, Value: 81.4, NumberOfUnits: 300 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 72.8, SellerName: `Harry Tyler`, SellerCity: `London`, Date: `03/03/2009`, Value: 1.4, NumberOfUnits: 270 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 16.4, SellerName: `Claudia Kobayashi`, SellerCity: `London`, Date: `03/07/2009`, Value: 81.4, NumberOfUnits: 263 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 93.6, SellerName: `Elisa Longbottom`, SellerCity: `Mellvile`, Date: `03/10/2009`, Value: 22.8, NumberOfUnits: 28 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 42.2, SellerName: `Howard Sprouse`, SellerCity: `London`, Date: `03/15/2009`, Value: 20.4, NumberOfUnits: 237 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 55, SellerName: `Claudia Kobayashi`, SellerCity: `Tokyo`, Date: `03/16/2009`, Value: 64, NumberOfUnits: 171 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 97.4, SellerName: `Kathe Pettel`, SellerCity: `New York`, Date: `03/27/2009`, Value: 24, NumberOfUnits: 251 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 51, SellerName: `Antonio Charbonneau`, SellerCity: `London`, Date: `04/01/2009`, Value: 32.4, NumberOfUnits: 275 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 4.8, SellerName: `Brandon Mckim`, SellerCity: `London`, Date: `04/06/2009`, Value: 42, NumberOfUnits: 311 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 71, SellerName: `Monica Freitag`, SellerCity: `New York`, Date: `04/07/2009`, Value: 82.8, NumberOfUnits: 217 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 96.8, SellerName: `Claudia Kobayashi`, SellerCity: `London`, Date: `04/09/2009`, Value: 62.2, NumberOfUnits: 360 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 83.6, SellerName: `Howard Sprouse`, SellerCity: `Berlin`, Date: `04/12/2009`, Value: 51.6, NumberOfUnits: 35 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 96.4, SellerName: `Nicholas Carmona`, SellerCity: `New York`, Date: `04/15/2009`, Value: 81, NumberOfUnits: 294 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 70.8, SellerName: `Howard Sprouse`, SellerCity: `Seattle`, Date: `04/16/2009`, Value: 36, NumberOfUnits: 436 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 94.6, SellerName: `Kathe Pettel`, SellerCity: `London`, Date: `04/20/2009`, Value: 82.6, NumberOfUnits: 78 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 29.6, SellerName: `David Haley`, SellerCity: `Tokyo`, Date: `04/22/2009`, Value: 94, NumberOfUnits: 301 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 70.6, SellerName: `Mark Slater`, SellerCity: `New York`, Date: `05/02/2009`, Value: 92.6, NumberOfUnits: 24 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 71.8, SellerName: `Howard Sprouse`, SellerCity: `Seattle`, Date: `05/04/2009`, Value: 19.4, NumberOfUnits: 332 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 14.6, SellerName: `Mark Slater`, SellerCity: `Berlin`, Date: `05/11/2009`, Value: 56.4, NumberOfUnits: 307 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 36.8, SellerName: `Harold Garvin`, SellerCity: `Seattle`, Date: `05/11/2009`, Value: 34.4, NumberOfUnits: 375 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 62.8, SellerName: `Benjamin Dupree`, SellerCity: `Mellvile`, Date: `05/12/2009`, Value: 2, NumberOfUnits: 499 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 13.8, SellerName: `Russell Shorter`, SellerCity: `London`, Date: `05/21/2009`, Value: 42.6, NumberOfUnits: 337 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 46.2, SellerName: `Larry Lieb`, SellerCity: `London`, Date: `05/24/2009`, Value: 55.4, NumberOfUnits: 284 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 95.4, SellerName: `Howard Sprouse`, SellerCity: `Berlin`, Date: `05/26/2009`, Value: 94.8, NumberOfUnits: 292 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 78.2, SellerName: `Howard Sprouse`, SellerCity: `Sofia`, Date: `05/26/2009`, Value: 60.2, NumberOfUnits: 424 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 99.4, SellerName: `Mark Slater`, SellerCity: `Mellvile`, Date: `06/05/2009`, Value: 29, NumberOfUnits: 271 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 87, SellerName: `Howard Sprouse`, SellerCity: `Mellvile`, Date: `06/10/2009`, Value: 94, NumberOfUnits: 6 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 13.6, SellerName: `Elisa Longbottom`, SellerCity: `Sofia`, Date: `06/12/2009`, Value: 95, NumberOfUnits: 44 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 99.8, SellerName: `Nicholas Carmona`, SellerCity: `Seattle`, Date: `06/12/2009`, Value: 74.2, NumberOfUnits: 277 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 17, SellerName: `Brandon Mckim`, SellerCity: `Seattle`, Date: `06/13/2009`, Value: 65.2, NumberOfUnits: 98 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 42.4, SellerName: `Elisa Longbottom`, SellerCity: `Mellvile`, Date: `06/22/2009`, Value: 68.6, NumberOfUnits: 443 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 79.6, SellerName: `Benjamin Dupree`, SellerCity: `Seattle`, Date: `06/26/2009`, Value: 81.4, NumberOfUnits: 409 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 26.4, SellerName: `Walter Pang`, SellerCity: `New York`, Date: `07/02/2009`, Value: 68.2, NumberOfUnits: 240 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 34.2, SellerName: `Kathe Pettel`, SellerCity: `Seattle`, Date: `07/10/2009`, Value: 95.6, NumberOfUnits: 23 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 29.4, SellerName: `Larry Lieb`, SellerCity: `Mellvile`, Date: `07/12/2009`, Value: 36, NumberOfUnits: 109 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 86.8, SellerName: `Nicholas Carmona`, SellerCity: `Berlin`, Date: `07/13/2009`, Value: 30, NumberOfUnits: 117 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 58.4, SellerName: `Mark Slater`, SellerCity: `New York`, Date: `07/15/2009`, Value: 34.4, NumberOfUnits: 336 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 39.8, SellerName: `Antonio Charbonneau`, SellerCity: `Seattle`, Date: `07/18/2009`, Value: 92.4, NumberOfUnits: 372 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 10.2, SellerName: `Larry Lieb`, SellerCity: `Berlin`, Date: `07/19/2009`, Value: 90.4, NumberOfUnits: 403 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 17.8, SellerName: `Harry Tyler`, SellerCity: `Seattle`, Date: `07/19/2009`, Value: 66.2, NumberOfUnits: 144 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 21.6, SellerName: `Lydia Burson`, SellerCity: `Seattle`, Date: `07/19/2009`, Value: 41.8, NumberOfUnits: 395 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 33.6, SellerName: `Nicholas Carmona`, SellerCity: `New York`, Date: `07/20/2009`, Value: 16.6, NumberOfUnits: 236 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 48.8, SellerName: `Larry Lieb`, SellerCity: `Seattle`, Date: `07/20/2009`, Value: 86.8, NumberOfUnits: 160 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 81.8, SellerName: `David Haley`, SellerCity: `Sofia`, Date: `07/20/2009`, Value: 65.8, NumberOfUnits: 157 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 9.8, SellerName: `Glenn Landeros`, SellerCity: `Sofia`, Date: `07/25/2009`, Value: 0.2, NumberOfUnits: 255 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 88.6, SellerName: `Mark Slater`, SellerCity: `London`, Date: `08/16/2009`, Value: 43, NumberOfUnits: 284 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 89.4, SellerName: `Walter Pang`, SellerCity: `Tokyo`, Date: `08/17/2009`, Value: 15.8, NumberOfUnits: 333 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 24, SellerName: `Monica Freitag`, SellerCity: `Seattle`, Date: `08/17/2009`, Value: 51.6, NumberOfUnits: 48 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 19.4, SellerName: `Kathe Pettel`, SellerCity: `New York`, Date: `08/18/2009`, Value: 82.6, NumberOfUnits: 399 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 9.4, SellerName: `Mark Slater`, SellerCity: `Berlin`, Date: `08/24/2009`, Value: 68.6, NumberOfUnits: 413 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 1.2, SellerName: `Monica Freitag`, SellerCity: `Sofia`, Date: `09/06/2009`, Value: 72, NumberOfUnits: 182 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 77, SellerName: `Russell Shorter`, SellerCity: `Mellvile`, Date: `09/06/2009`, Value: 45, NumberOfUnits: 156 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 80.8, SellerName: `Antonio Charbonneau`, SellerCity: `Mellvile`, Date: `09/09/2009`, Value: 92.4, NumberOfUnits: 293 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 22.8, SellerName: `Benjamin Dupree`, SellerCity: `Berlin`, Date: `10/01/2009`, Value: 100, NumberOfUnits: 16 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 78.2, SellerName: `Benjamin Meekins`, SellerCity: `Seattle`, Date: `10/01/2009`, Value: 16, NumberOfUnits: 106 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 73, SellerName: `Glenn Landeros`, SellerCity: `Tokyo`, Date: `10/06/2009`, Value: 91.6, NumberOfUnits: 16 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 22.2, SellerName: `John Smith`, SellerCity: `Tokyo`, Date: `10/07/2009`, Value: 1.8, NumberOfUnits: 187 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 42.8, SellerName: `Harry Tyler`, SellerCity: `Seattle`, Date: `10/10/2009`, Value: 21.8, NumberOfUnits: 137 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 46.2, SellerName: `Mark Slater`, SellerCity: `Seattle`, Date: `10/14/2009`, Value: 15, NumberOfUnits: 138 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 14.4, SellerName: `Mark Slater`, SellerCity: `Seattle`, Date: `10/24/2009`, Value: 65, NumberOfUnits: 256 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 40.2, SellerName: `Antonio Charbonneau`, SellerCity: `London`, Date: `10/24/2009`, Value: 11.2, NumberOfUnits: 353 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 17.2, SellerName: `Lydia Burson`, SellerCity: `Tokyo`, Date: `11/01/2009`, Value: 95, NumberOfUnits: 359 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 52, SellerName: `Walter Pang`, SellerCity: `Tokyo`, Date: `11/04/2009`, Value: 43.2, NumberOfUnits: 134 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 91, SellerName: `Larry Lieb`, SellerCity: `Seattle`, Date: `11/09/2009`, Value: 25.2, NumberOfUnits: 263 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 88.6, SellerName: `Monica Freitag`, SellerCity: `Seattle`, Date: `11/11/2009`, Value: 41, NumberOfUnits: 313 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 46.6, SellerName: `Stanley Brooker`, SellerCity: `Mellvile`, Date: `11/16/2009`, Value: 20.4, NumberOfUnits: 115 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 20.4, SellerName: `Claudia Kobayashi`, SellerCity: `Berlin`, Date: `11/17/2009`, Value: 33, NumberOfUnits: 414 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 70.8, SellerName: `Kathe Pettel`, SellerCity: `New York`, Date: `11/21/2009`, Value: 3, NumberOfUnits: 53 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 81.6, SellerName: `John Smith`, SellerCity: `New York`, Date: `11/22/2009`, Value: 86.8, NumberOfUnits: 472 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 9.8, SellerName: `Harry Tyler`, SellerCity: `Mellvile`, Date: `11/23/2009`, Value: 53.6, NumberOfUnits: 199 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 29.8, SellerName: `Harold Garvin`, SellerCity: `Sofia`, Date: `11/24/2009`, Value: 27.4, NumberOfUnits: 241 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 33.2, SellerName: `Glenn Landeros`, SellerCity: `New York`, Date: `11/24/2009`, Value: 1.2, NumberOfUnits: 320 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 65.6, SellerName: `David Haley`, SellerCity: `London`, Date: `01/02/2010`, Value: 20.6, NumberOfUnits: 299 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 62.2, SellerName: `Benjamin Dupree`, SellerCity: `London`, Date: `01/08/2010`, Value: 35.4, NumberOfUnits: 366 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 78.6, SellerName: `John Smith`, SellerCity: `New York`, Date: `01/10/2010`, Value: 27.8, NumberOfUnits: 290 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 11.6, SellerName: `Lydia Burson`, SellerCity: `Sofia`, Date: `01/11/2010`, Value: 61.8, NumberOfUnits: 350 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 33.4, SellerName: `Russell Shorter`, SellerCity: `Sofia`, Date: `01/14/2010`, Value: 33.8, NumberOfUnits: 469 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 96.2, SellerName: `Nicholas Carmona`, SellerCity: `Sofia`, Date: `01/21/2010`, Value: 75.6, NumberOfUnits: 352 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 92.2, SellerName: `Larry Lieb`, SellerCity: `Seattle`, Date: `01/25/2010`, Value: 38.8, NumberOfUnits: 47 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 93.2, SellerName: `Russell Shorter`, SellerCity: `Tokyo`, Date: `02/02/2010`, Value: 66.4, NumberOfUnits: 153 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 39, SellerName: `Antonio Charbonneau`, SellerCity: `Berlin`, Date: `02/02/2010`, Value: 28.6, NumberOfUnits: 211 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 99.4, SellerName: `Russell Shorter`, SellerCity: `Sofia`, Date: `02/04/2010`, Value: 67, NumberOfUnits: 267 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 94.4, SellerName: `Antonio Charbonneau`, SellerCity: `New York`, Date: `02/04/2010`, Value: 71.4, NumberOfUnits: 91 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 19.8, SellerName: `Claudia Kobayashi`, SellerCity: `Tokyo`, Date: `02/05/2010`, Value: 46, NumberOfUnits: 84 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 87.2, SellerName: `Howard Sprouse`, SellerCity: `Mellvile`, Date: `02/11/2010`, Value: 66.8, NumberOfUnits: 270 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 76.2, SellerName: `Alfredo Fetuchini`, SellerCity: `Berlin`, Date: `02/12/2010`, Value: 87, NumberOfUnits: 496 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 52, SellerName: `John Smith`, SellerCity: `Seattle`, Date: `02/16/2010`, Value: 47.4, NumberOfUnits: 24 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 21.8, SellerName: `Walter Pang`, SellerCity: `Mellvile`, Date: `02/17/2010`, Value: 72.8, NumberOfUnits: 41 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 15.8, SellerName: `John Smith`, SellerCity: `Mellvile`, Date: `02/22/2010`, Value: 65.6, NumberOfUnits: 365 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 2.8, SellerName: `Brandon Mckim`, SellerCity: `Sofia`, Date: `03/01/2010`, Value: 68.6, NumberOfUnits: 202 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 52.4, SellerName: `Howard Sprouse`, SellerCity: `Seattle`, Date: `03/01/2010`, Value: 79.4, NumberOfUnits: 225 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 0.4, SellerName: `Stanley Brooker`, SellerCity: `Mellvile`, Date: `03/03/2010`, Value: 70.2, NumberOfUnits: 206 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 22.4, SellerName: `Larry Lieb`, SellerCity: `Sofia`, Date: `03/11/2010`, Value: 54.8, NumberOfUnits: 158 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 94.8, SellerName: `Benjamin Meekins`, SellerCity: `London`, Date: `03/14/2010`, Value: 70.4, NumberOfUnits: 169 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 1.2, SellerName: `John Smith`, SellerCity: `New York`, Date: `03/15/2010`, Value: 19, NumberOfUnits: 4 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 12.2, SellerName: `Monica Freitag`, SellerCity: `New York`, Date: `03/15/2010`, Value: 12.8, NumberOfUnits: 232 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 58.8, SellerName: `Mark Slater`, SellerCity: `Berlin`, Date: `03/16/2010`, Value: 78.8, NumberOfUnits: 421 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 44, SellerName: `David Haley`, SellerCity: `Seattle`, Date: `03/25/2010`, Value: 89.6, NumberOfUnits: 260 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 54.6, SellerName: `Brandon Mckim`, SellerCity: `Seattle`, Date: `04/02/2010`, Value: 92, NumberOfUnits: 194 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 94.6, SellerName: `Walter Pang`, SellerCity: `Tokyo`, Date: `04/05/2010`, Value: 35.4, NumberOfUnits: 491 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 11.2, SellerName: `Harold Garvin`, SellerCity: `London`, Date: `04/14/2010`, Value: 30, NumberOfUnits: 256 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 18.2, SellerName: `Alfredo Fetuchini`, SellerCity: `Mellvile`, Date: `04/15/2010`, Value: 84.6, NumberOfUnits: 279 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 8.4, SellerName: `Carl Costello`, SellerCity: `Berlin`, Date: `04/15/2010`, Value: 99.6, NumberOfUnits: 287 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 78, SellerName: `Carl Costello`, SellerCity: `New York`, Date: `04/22/2010`, Value: 59, NumberOfUnits: 363 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 55.6, SellerName: `Mark Slater`, SellerCity: `Berlin`, Date: `04/22/2010`, Value: 16.4, NumberOfUnits: 499 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 39.4, SellerName: `Lydia Burson`, SellerCity: `Berlin`, Date: `04/24/2010`, Value: 0.2, NumberOfUnits: 109 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 7.8, SellerName: `Benjamin Dupree`, SellerCity: `Berlin`, Date: `05/04/2010`, Value: 99.6, NumberOfUnits: 25 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 62.4, SellerName: `Alfredo Fetuchini`, SellerCity: `Mellvile`, Date: `05/05/2010`, Value: 48, NumberOfUnits: 64 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 38.8, SellerName: `Howard Sprouse`, SellerCity: `London`, Date: `05/06/2010`, Value: 57.8, NumberOfUnits: 256 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 17.8, SellerName: `Benjamin Meekins`, SellerCity: `Mellvile`, Date: `05/07/2010`, Value: 15.4, NumberOfUnits: 50 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 57.8, SellerName: `Bryan Culver`, SellerCity: `Berlin`, Date: `05/07/2010`, Value: 58.6, NumberOfUnits: 437 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 21.4, SellerName: `Bryan Culver`, SellerCity: `Sofia`, Date: `05/19/2010`, Value: 41, NumberOfUnits: 253 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 10.2, SellerName: `Monica Freitag`, SellerCity: `London`, Date: `05/22/2010`, Value: 24, NumberOfUnits: 312 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 87.8, SellerName: `Claudia Kobayashi`, SellerCity: `London`, Date: `05/24/2010`, Value: 12.6, NumberOfUnits: 82 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 42.6, SellerName: `Harold Garvin`, SellerCity: `New York`, Date: `06/01/2010`, Value: 32.2, NumberOfUnits: 467 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 79.8, SellerName: `Alfredo Fetuchini`, SellerCity: `Sofia`, Date: `06/05/2010`, Value: 69.6, NumberOfUnits: 74 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 1.8, SellerName: `Nicholas Carmona`, SellerCity: `Seattle`, Date: `06/10/2010`, Value: 14.8, NumberOfUnits: 81 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 15, SellerName: `Kathe Pettel`, SellerCity: `Berlin`, Date: `06/25/2010`, Value: 18.8, NumberOfUnits: 88 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 43.4, SellerName: `Antonio Charbonneau`, SellerCity: `Mellvile`, Date: `06/26/2010`, Value: 44.4, NumberOfUnits: 126 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 16.2, SellerName: `Elisa Longbottom`, SellerCity: `Sofia`, Date: `06/27/2010`, Value: 77.8, NumberOfUnits: 112 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 59.2, SellerName: `Antonio Charbonneau`, SellerCity: `Sofia`, Date: `06/27/2010`, Value: 15.4, NumberOfUnits: 47 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 40, SellerName: `Claudia Kobayashi`, SellerCity: `Sofia`, Date: `07/05/2010`, Value: 29.4, NumberOfUnits: 218 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 27, SellerName: `Nicholas Carmona`, SellerCity: `New York`, Date: `07/05/2010`, Value: 30, NumberOfUnits: 34 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 14.4, SellerName: `Bryan Culver`, SellerCity: `Sofia`, Date: `07/13/2010`, Value: 83.4, NumberOfUnits: 492 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 53.4, SellerName: `Harry Tyler`, SellerCity: `Sofia`, Date: `07/16/2010`, Value: 41.6, NumberOfUnits: 464 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 21.4, SellerName: `Harry Tyler`, SellerCity: `Seattle`, Date: `07/17/2010`, Value: 83.4, NumberOfUnits: 118 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 24, SellerName: `Nicholas Carmona`, SellerCity: `Seattle`, Date: `07/18/2010`, Value: 94.2, NumberOfUnits: 442 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 37.6, SellerName: `Benjamin Meekins`, SellerCity: `London`, Date: `07/23/2010`, Value: 59.6, NumberOfUnits: 248 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 60.8, SellerName: `Lydia Burson`, SellerCity: `London`, Date: `07/23/2010`, Value: 83.6, NumberOfUnits: 472 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 78, SellerName: `Alfredo Fetuchini`, SellerCity: `New York`, Date: `07/24/2010`, Value: 84, NumberOfUnits: 140 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 47.6, SellerName: `Lydia Burson`, SellerCity: `Tokyo`, Date: `07/26/2010`, Value: 86.6, NumberOfUnits: 118 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 58.2, SellerName: `Harry Tyler`, SellerCity: `Sofia`, Date: `07/27/2010`, Value: 64, NumberOfUnits: 176 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 98.4, SellerName: `Russell Shorter`, SellerCity: `Mellvile`, Date: `08/01/2010`, Value: 23.4, NumberOfUnits: 77 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 3, SellerName: `Glenn Landeros`, SellerCity: `Sofia`, Date: `08/08/2010`, Value: 74.4, NumberOfUnits: 105 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 98.2, SellerName: `Alfredo Fetuchini`, SellerCity: `Tokyo`, Date: `08/21/2010`, Value: 60.8, NumberOfUnits: 160 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 79, SellerName: `Stanley Brooker`, SellerCity: `Seattle`, Date: `08/26/2010`, Value: 67, NumberOfUnits: 186 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 17.8, SellerName: `Harold Garvin`, SellerCity: `Seattle`, Date: `09/04/2010`, Value: 29, NumberOfUnits: 380 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 38.8, SellerName: `John Smith`, SellerCity: `Tokyo`, Date: `09/11/2010`, Value: 41.6, NumberOfUnits: 470 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 75.2, SellerName: `Benjamin Dupree`, SellerCity: `Mellvile`, Date: `09/13/2010`, Value: 42.8, NumberOfUnits: 348 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 55.4, SellerName: `Carl Costello`, SellerCity: `London`, Date: `09/14/2010`, Value: 29.4, NumberOfUnits: 151 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 51.4, SellerName: `Kathe Pettel`, SellerCity: `New York`, Date: `09/24/2010`, Value: 86.6, NumberOfUnits: 7 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 31.4, SellerName: `Monica Freitag`, SellerCity: `New York`, Date: `10/07/2010`, Value: 39, NumberOfUnits: 123 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 80, SellerName: `Mark Slater`, SellerCity: `Seattle`, Date: `10/08/2010`, Value: 8.8, NumberOfUnits: 374 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 94.8, SellerName: `Kathe Pettel`, SellerCity: `Mellvile`, Date: `10/11/2010`, Value: 96.8, NumberOfUnits: 178 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 42, SellerName: `Bryan Culver`, SellerCity: `Sofia`, Date: `10/22/2010`, Value: 31.4, NumberOfUnits: 354 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 46.6, SellerName: `Elisa Longbottom`, SellerCity: `New York`, Date: `10/25/2010`, Value: 85.6, NumberOfUnits: 459 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 27.2, SellerName: `Mark Slater`, SellerCity: `London`, Date: `11/02/2010`, Value: 46.4, NumberOfUnits: 78 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 30.2, SellerName: `Walter Pang`, SellerCity: `Berlin`, Date: `11/03/2010`, Value: 52.2, NumberOfUnits: 417 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 82.2, SellerName: `Walter Pang`, SellerCity: `Seattle`, Date: `11/12/2010`, Value: 15.4, NumberOfUnits: 208 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 13.2, SellerName: `Harold Garvin`, SellerCity: `Seattle`, Date: `11/19/2010`, Value: 48.6, NumberOfUnits: 359 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 8.8, SellerName: `Russell Shorter`, SellerCity: `New York`, Date: `11/25/2010`, Value: 24.6, NumberOfUnits: 392 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 78.4, SellerName: `John Smith`, SellerCity: `London`, Date: `01/01/2011`, Value: 37.6, NumberOfUnits: 241 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 50.6, SellerName: `Claudia Kobayashi`, SellerCity: `Seattle`, Date: `01/04/2011`, Value: 27.2, NumberOfUnits: 62 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 6.4, SellerName: `Elisa Longbottom`, SellerCity: `Tokyo`, Date: `01/06/2011`, Value: 89.6, NumberOfUnits: 485 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 47.4, SellerName: `Bryan Culver`, SellerCity: `Sofia`, Date: `01/14/2011`, Value: 5, NumberOfUnits: 470 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 6.2, SellerName: `Harry Tyler`, SellerCity: `Seattle`, Date: `01/23/2011`, Value: 78.6, NumberOfUnits: 197 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 57.6, SellerName: `Larry Lieb`, SellerCity: `Berlin`, Date: `01/26/2011`, Value: 59.8, NumberOfUnits: 353 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 37.6, SellerName: `Benjamin Meekins`, SellerCity: `Mellvile`, Date: `02/01/2011`, Value: 39.6, NumberOfUnits: 338 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 21, SellerName: `Claudia Kobayashi`, SellerCity: `New York`, Date: `02/08/2011`, Value: 93, NumberOfUnits: 17 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 11.8, SellerName: `Antonio Charbonneau`, SellerCity: `Berlin`, Date: `02/12/2011`, Value: 61.4, NumberOfUnits: 429 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 65, SellerName: `Alfredo Fetuchini`, SellerCity: `Tokyo`, Date: `02/14/2011`, Value: 24.4, NumberOfUnits: 385 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 20, SellerName: `Claudia Kobayashi`, SellerCity: `New York`, Date: `02/20/2011`, Value: 35.4, NumberOfUnits: 166 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 3.2, SellerName: `Lydia Burson`, SellerCity: `Seattle`, Date: `02/20/2011`, Value: 52.6, NumberOfUnits: 137 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 18.2, SellerName: `Russell Shorter`, SellerCity: `New York`, Date: `02/24/2011`, Value: 8.2, NumberOfUnits: 443 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 20.4, SellerName: `Carl Costello`, SellerCity: `Seattle`, Date: `02/26/2011`, Value: 87.4, NumberOfUnits: 40 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 20.6, SellerName: `Glenn Landeros`, SellerCity: `London`, Date: `03/05/2011`, Value: 7.4, NumberOfUnits: 138 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 23.8, SellerName: `Lydia Burson`, SellerCity: `Tokyo`, Date: `03/09/2011`, Value: 18.2, NumberOfUnits: 15 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 76.4, SellerName: `Antonio Charbonneau`, SellerCity: `Mellvile`, Date: `03/09/2011`, Value: 74.6, NumberOfUnits: 469 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 93.4, SellerName: `Russell Shorter`, SellerCity: `London`, Date: `03/11/2011`, Value: 89, NumberOfUnits: 426 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 63, SellerName: `Benjamin Dupree`, SellerCity: `Seattle`, Date: `03/16/2011`, Value: 32.6, NumberOfUnits: 208 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 58.6, SellerName: `Brandon Mckim`, SellerCity: `Seattle`, Date: `03/21/2011`, Value: 51, NumberOfUnits: 155 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 82.4, SellerName: `Stanley Brooker`, SellerCity: `Seattle`, Date: `03/23/2011`, Value: 33.4, NumberOfUnits: 381 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 19.2, SellerName: `Nicholas Carmona`, SellerCity: `Tokyo`, Date: `04/12/2011`, Value: 75.2, NumberOfUnits: 5 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 53.6, SellerName: `Walter Pang`, SellerCity: `London`, Date: `04/12/2011`, Value: 14.6, NumberOfUnits: 221 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 97.4, SellerName: `Howard Sprouse`, SellerCity: `Sofia`, Date: `04/14/2011`, Value: 84.8, NumberOfUnits: 39 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 74.2, SellerName: `Mark Slater`, SellerCity: `New York`, Date: `04/16/2011`, Value: 51.4, NumberOfUnits: 468 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 8.2, SellerName: `Claudia Kobayashi`, SellerCity: `Seattle`, Date: `04/17/2011`, Value: 0.8, NumberOfUnits: 44 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 59.2, SellerName: `John Smith`, SellerCity: `Mellvile`, Date: `04/22/2011`, Value: 47.6, NumberOfUnits: 287 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 96.8, SellerName: `Russell Shorter`, SellerCity: `Sofia`, Date: `04/24/2011`, Value: 78.6, NumberOfUnits: 463 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 76.8, SellerName: `Walter Pang`, SellerCity: `Seattle`, Date: `04/24/2011`, Value: 63, NumberOfUnits: 335 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 73.4, SellerName: `Walter Pang`, SellerCity: `Berlin`, Date: `04/24/2011`, Value: 30.6, NumberOfUnits: 211 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 66.4, SellerName: `Benjamin Dupree`, SellerCity: `Seattle`, Date: `05/03/2011`, Value: 87.4, NumberOfUnits: 291 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 37, SellerName: `John Smith`, SellerCity: `Sofia`, Date: `05/05/2011`, Value: 40.2, NumberOfUnits: 1 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 21.4, SellerName: `Alfredo Fetuchini`, SellerCity: `Seattle`, Date: `05/06/2011`, Value: 46, NumberOfUnits: 120 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 20, SellerName: `Benjamin Dupree`, SellerCity: `Berlin`, Date: `05/06/2011`, Value: 72.6, NumberOfUnits: 382 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 16.6, SellerName: `Harry Tyler`, SellerCity: `Seattle`, Date: `05/07/2011`, Value: 7.8, NumberOfUnits: 63 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 41.8, SellerName: `Stanley Brooker`, SellerCity: `Seattle`, Date: `05/12/2011`, Value: 94.4, NumberOfUnits: 230 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 5, SellerName: `Larry Lieb`, SellerCity: `Tokyo`, Date: `05/13/2011`, Value: 31, NumberOfUnits: 362 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 10.8, SellerName: `Monica Freitag`, SellerCity: `New York`, Date: `05/17/2011`, Value: 59.8, NumberOfUnits: 430 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 66.2, SellerName: `Nicholas Carmona`, SellerCity: `Seattle`, Date: `05/23/2011`, Value: 91.2, NumberOfUnits: 204 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 61, SellerName: `Antonio Charbonneau`, SellerCity: `Berlin`, Date: `05/24/2011`, Value: 86.2, NumberOfUnits: 118 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 68.8, SellerName: `Walter Pang`, SellerCity: `Sofia`, Date: `06/01/2011`, Value: 14.6, NumberOfUnits: 17 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 40.8, SellerName: `Walter Pang`, SellerCity: `New York`, Date: `06/03/2011`, Value: 9, NumberOfUnits: 312 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 97, SellerName: `Lydia Burson`, SellerCity: `Seattle`, Date: `06/12/2011`, Value: 95, NumberOfUnits: 283 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 67, SellerName: `Benjamin Dupree`, SellerCity: `Seattle`, Date: `06/13/2011`, Value: 27.6, NumberOfUnits: 460 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 67.2, SellerName: `Howard Sprouse`, SellerCity: `New York`, Date: `06/14/2011`, Value: 66.2, NumberOfUnits: 295 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 28.2, SellerName: `Alfredo Fetuchini`, SellerCity: `Mellvile`, Date: `06/15/2011`, Value: 50.6, NumberOfUnits: 49 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 7.4, SellerName: `Russell Shorter`, SellerCity: `Tokyo`, Date: `06/24/2011`, Value: 8, NumberOfUnits: 127 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 39.2, SellerName: `Mark Slater`, SellerCity: `Seattle`, Date: `06/27/2011`, Value: 98.8, NumberOfUnits: 244 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 53.4, SellerName: `Harold Garvin`, SellerCity: `Tokyo`, Date: `07/01/2011`, Value: 11.2, NumberOfUnits: 188 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 25.6, SellerName: `Benjamin Dupree`, SellerCity: `Seattle`, Date: `07/06/2011`, Value: 56.2, NumberOfUnits: 458 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 70.4, SellerName: `Nicholas Carmona`, SellerCity: `Mellvile`, Date: `07/08/2011`, Value: 82.4, NumberOfUnits: 448 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 7.6, SellerName: `Harold Garvin`, SellerCity: `Berlin`, Date: `07/27/2011`, Value: 30.6, NumberOfUnits: 226 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 21.6, SellerName: `Benjamin Dupree`, SellerCity: `London`, Date: `08/01/2011`, Value: 69.6, NumberOfUnits: 474 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 37.6, SellerName: `David Haley`, SellerCity: `Sofia`, Date: `08/02/2011`, Value: 62.8, NumberOfUnits: 338 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 99.4, SellerName: `Benjamin Meekins`, SellerCity: `London`, Date: `08/02/2011`, Value: 75.2, NumberOfUnits: 88 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 72.2, SellerName: `Carl Costello`, SellerCity: `Berlin`, Date: `08/04/2011`, Value: 86.4, NumberOfUnits: 436 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 34.4, SellerName: `Nicholas Carmona`, SellerCity: `Mellvile`, Date: `08/06/2011`, Value: 9.2, NumberOfUnits: 297 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 47, SellerName: `Russell Shorter`, SellerCity: `London`, Date: `08/07/2011`, Value: 5.2, NumberOfUnits: 240 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 26.4, SellerName: `Stanley Brooker`, SellerCity: `Sofia`, Date: `08/07/2011`, Value: 80.2, NumberOfUnits: 415 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 49.2, SellerName: `David Haley`, SellerCity: `Mellvile`, Date: `08/08/2011`, Value: 61.2, NumberOfUnits: 435 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 95.2, SellerName: `Monica Freitag`, SellerCity: `Berlin`, Date: `08/16/2011`, Value: 73.8, NumberOfUnits: 64 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 74.2, SellerName: `John Smith`, SellerCity: `Seattle`, Date: `08/23/2011`, Value: 40.8, NumberOfUnits: 21 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 82.6, SellerName: `Benjamin Dupree`, SellerCity: `London`, Date: `08/25/2011`, Value: 55, NumberOfUnits: 467 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 42.8, SellerName: `Lydia Burson`, SellerCity: `Sofia`, Date: `09/02/2011`, Value: 28.2, NumberOfUnits: 98 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 83.6, SellerName: `Russell Shorter`, SellerCity: `Mellvile`, Date: `09/04/2011`, Value: 72.6, NumberOfUnits: 370 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 41.6, SellerName: `Walter Pang`, SellerCity: `Berlin`, Date: `09/05/2011`, Value: 81, NumberOfUnits: 94 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 74.2, SellerName: `Benjamin Dupree`, SellerCity: `London`, Date: `09/09/2011`, Value: 95, NumberOfUnits: 106 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 75.4, SellerName: `Claudia Kobayashi`, SellerCity: `Sofia`, Date: `09/11/2011`, Value: 10, NumberOfUnits: 261 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 10.2, SellerName: `Howard Sprouse`, SellerCity: `Seattle`, Date: `09/17/2011`, Value: 29.4, NumberOfUnits: 307 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 73, SellerName: `Harry Tyler`, SellerCity: `New York`, Date: `09/17/2011`, Value: 57, NumberOfUnits: 362 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 85.2, SellerName: `Benjamin Meekins`, SellerCity: `Tokyo`, Date: `09/24/2011`, Value: 24, NumberOfUnits: 330 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 77.6, SellerName: `Walter Pang`, SellerCity: `New York`, Date: `09/26/2011`, Value: 91.8, NumberOfUnits: 23 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 50.4, SellerName: `David Haley`, SellerCity: `Berlin`, Date: `09/27/2011`, Value: 66.8, NumberOfUnits: 392 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 32.4, SellerName: `Larry Lieb`, SellerCity: `Seattle`, Date: `10/13/2011`, Value: 81.6, NumberOfUnits: 16 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 63, SellerName: `Lydia Burson`, SellerCity: `New York`, Date: `10/13/2011`, Value: 31, NumberOfUnits: 100 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 13.4, SellerName: `Carl Costello`, SellerCity: `Berlin`, Date: `10/22/2011`, Value: 85.6, NumberOfUnits: 132 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 0.4, SellerName: `Nicholas Carmona`, SellerCity: `Seattle`, Date: `10/22/2011`, Value: 74.4, NumberOfUnits: 22 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 66.2, SellerName: `Walter Pang`, SellerCity: `New York`, Date: `11/02/2011`, Value: 88.2, NumberOfUnits: 96 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 50.2, SellerName: `Elisa Longbottom`, SellerCity: `Berlin`, Date: `11/03/2011`, Value: 31.4, NumberOfUnits: 76 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 68, SellerName: `Stanley Brooker`, SellerCity: `Mellvile`, Date: `11/04/2011`, Value: 91.2, NumberOfUnits: 492 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 6.6, SellerName: `Harry Tyler`, SellerCity: `Berlin`, Date: `11/08/2011`, Value: 51.6, NumberOfUnits: 49 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 35.6, SellerName: `Russell Shorter`, SellerCity: `Mellvile`, Date: `11/12/2011`, Value: 21, NumberOfUnits: 197 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 60, SellerName: `Howard Sprouse`, SellerCity: `Tokyo`, Date: `11/12/2011`, Value: 70.4, NumberOfUnits: 484 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 67.4, SellerName: `Russell Shorter`, SellerCity: `Tokyo`, Date: `11/13/2011`, Value: 14.4, NumberOfUnits: 182 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 52, SellerName: `Alfredo Fetuchini`, SellerCity: `London`, Date: `11/15/2011`, Value: 18.4, NumberOfUnits: 42 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 66.8, SellerName: `Brandon Mckim`, SellerCity: `New York`, Date: `11/19/2011`, Value: 52.8, NumberOfUnits: 109 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 56.2, SellerName: `Harold Garvin`, SellerCity: `Mellvile`, Date: `11/23/2011`, Value: 40.2, NumberOfUnits: 310 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 93.6, SellerName: `Monica Freitag`, SellerCity: `Sofia`, Date: `01/03/2012`, Value: 53.4, NumberOfUnits: 306 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 9.6, SellerName: `Harold Garvin`, SellerCity: `Seattle`, Date: `01/06/2012`, Value: 83, NumberOfUnits: 290 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 41.2, SellerName: `Monica Freitag`, SellerCity: `Tokyo`, Date: `01/10/2012`, Value: 29.8, NumberOfUnits: 499 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 9.8, SellerName: `Kathe Pettel`, SellerCity: `Berlin`, Date: `01/11/2012`, Value: 10.8, NumberOfUnits: 7 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 64.6, SellerName: `Nicholas Carmona`, SellerCity: `Sofia`, Date: `01/14/2012`, Value: 35, NumberOfUnits: 220 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 47.4, SellerName: `Elisa Longbottom`, SellerCity: `New York`, Date: `01/15/2012`, Value: 50.2, NumberOfUnits: 395 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 14.6, SellerName: `Lydia Burson`, SellerCity: `Sofia`, Date: `01/18/2012`, Value: 100, NumberOfUnits: 219 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 10.8, SellerName: `Larry Lieb`, SellerCity: `Mellvile`, Date: `01/18/2012`, Value: 92, NumberOfUnits: 229 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 65, SellerName: `Nicholas Carmona`, SellerCity: `Mellvile`, Date: `01/22/2012`, Value: 55.8, NumberOfUnits: 111 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 48, SellerName: `Alfredo Fetuchini`, SellerCity: `London`, Date: `02/01/2012`, Value: 20.6, NumberOfUnits: 237 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 87.8, SellerName: `Claudia Kobayashi`, SellerCity: `Berlin`, Date: `02/13/2012`, Value: 17.2, NumberOfUnits: 114 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 55.4, SellerName: `Bryan Culver`, SellerCity: `London`, Date: `02/23/2012`, Value: 76.8, NumberOfUnits: 329 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 40.8, SellerName: `Howard Sprouse`, SellerCity: `Seattle`, Date: `02/24/2012`, Value: 1.2, NumberOfUnits: 135 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 57.8, SellerName: `Harold Garvin`, SellerCity: `New York`, Date: `03/02/2012`, Value: 46.8, NumberOfUnits: 187 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 14.8, SellerName: `David Haley`, SellerCity: `Tokyo`, Date: `03/10/2012`, Value: 17.6, NumberOfUnits: 286 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 13, SellerName: `Antonio Charbonneau`, SellerCity: `Mellvile`, Date: `03/11/2012`, Value: 18.2, NumberOfUnits: 468 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 26, SellerName: `Monica Freitag`, SellerCity: `Tokyo`, Date: `03/18/2012`, Value: 93.2, NumberOfUnits: 71 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 72.6, SellerName: `Bryan Culver`, SellerCity: `Mellvile`, Date: `03/21/2012`, Value: 62, NumberOfUnits: 251 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 44.4, SellerName: `Monica Freitag`, SellerCity: `Berlin`, Date: `03/25/2012`, Value: 57.2, NumberOfUnits: 297 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 68.2, SellerName: `Alfredo Fetuchini`, SellerCity: `Berlin`, Date: `03/25/2012`, Value: 4.2, NumberOfUnits: 248 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 35.4, SellerName: `Elisa Longbottom`, SellerCity: `Sofia`, Date: `03/26/2012`, Value: 45.2, NumberOfUnits: 488 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 41.2, SellerName: `Alfredo Fetuchini`, SellerCity: `Sofia`, Date: `04/06/2012`, Value: 59.6, NumberOfUnits: 211 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 29.4, SellerName: `Stanley Brooker`, SellerCity: `Seattle`, Date: `04/14/2012`, Value: 3.2, NumberOfUnits: 149 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 52, SellerName: `Lydia Burson`, SellerCity: `Berlin`, Date: `04/14/2012`, Value: 9.8, NumberOfUnits: 99 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 57.8, SellerName: `Benjamin Meekins`, SellerCity: `Seattle`, Date: `04/16/2012`, Value: 14, NumberOfUnits: 225 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 26, SellerName: `Nicholas Carmona`, SellerCity: `Seattle`, Date: `04/27/2012`, Value: 95.4, NumberOfUnits: 408 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 5, SellerName: `Benjamin Meekins`, SellerCity: `Sofia`, Date: `05/09/2012`, Value: 40.2, NumberOfUnits: 417 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 3, SellerName: `Alfredo Fetuchini`, SellerCity: `London`, Date: `05/24/2012`, Value: 67.8, NumberOfUnits: 221 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 57.6, SellerName: `Mark Slater`, SellerCity: `New York`, Date: `06/02/2012`, Value: 45.4, NumberOfUnits: 288 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 72.4, SellerName: `Bryan Culver`, SellerCity: `Berlin`, Date: `06/03/2012`, Value: 92.8, NumberOfUnits: 372 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 82.6, SellerName: `Kathe Pettel`, SellerCity: `Seattle`, Date: `06/03/2012`, Value: 51.4, NumberOfUnits: 408 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 91.6, SellerName: `Benjamin Dupree`, SellerCity: `Mellvile`, Date: `06/04/2012`, Value: 28.6, NumberOfUnits: 13 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 94.8, SellerName: `Benjamin Dupree`, SellerCity: `Mellvile`, Date: `06/05/2012`, Value: 31.6, NumberOfUnits: 487 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 46.4, SellerName: `Benjamin Dupree`, SellerCity: `Sofia`, Date: `06/11/2012`, Value: 86, NumberOfUnits: 276 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 18.2, SellerName: `Howard Sprouse`, SellerCity: `New York`, Date: `06/16/2012`, Value: 40.2, NumberOfUnits: 490 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 48.8, SellerName: `Harold Garvin`, SellerCity: `London`, Date: `06/18/2012`, Value: 55.6, NumberOfUnits: 238 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 94.4, SellerName: `David Haley`, SellerCity: `Tokyo`, Date: `06/23/2012`, Value: 92, NumberOfUnits: 170 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 48.8, SellerName: `Brandon Mckim`, SellerCity: `Mellvile`, Date: `07/04/2012`, Value: 72.8, NumberOfUnits: 132 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 82.8, SellerName: `Mark Slater`, SellerCity: `Mellvile`, Date: `07/05/2012`, Value: 56.8, NumberOfUnits: 443 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 38.2, SellerName: `Benjamin Dupree`, SellerCity: `New York`, Date: `07/05/2012`, Value: 27.6, NumberOfUnits: 368 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 24.2, SellerName: `Harold Garvin`, SellerCity: `New York`, Date: `07/11/2012`, Value: 38.6, NumberOfUnits: 39 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 4, SellerName: `Alfredo Fetuchini`, SellerCity: `Tokyo`, Date: `07/13/2012`, Value: 43.2, NumberOfUnits: 95 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 81.8, SellerName: `Benjamin Meekins`, SellerCity: `Berlin`, Date: `07/14/2012`, Value: 42.6, NumberOfUnits: 42 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 75, SellerName: `Brandon Mckim`, SellerCity: `Seattle`, Date: `07/16/2012`, Value: 61.4, NumberOfUnits: 200 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 85.6, SellerName: `Monica Freitag`, SellerCity: `Seattle`, Date: `07/16/2012`, Value: 10.6, NumberOfUnits: 221 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 96.4, SellerName: `Larry Lieb`, SellerCity: `New York`, Date: `07/21/2012`, Value: 99.6, NumberOfUnits: 54 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 46.2, SellerName: `Lydia Burson`, SellerCity: `Tokyo`, Date: `07/21/2012`, Value: 56, NumberOfUnits: 173 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 99.8, SellerName: `Lydia Burson`, SellerCity: `London`, Date: `07/23/2012`, Value: 10.8, NumberOfUnits: 47 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 42.4, SellerName: `Kathe Pettel`, SellerCity: `Mellvile`, Date: `07/26/2012`, Value: 91.6, NumberOfUnits: 173 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 52.2, SellerName: `Claudia Kobayashi`, SellerCity: `Mellvile`, Date: `08/05/2012`, Value: 98.8, NumberOfUnits: 323 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 45.6, SellerName: `Russell Shorter`, SellerCity: `Sofia`, Date: `08/07/2012`, Value: 26, NumberOfUnits: 264 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 56.8, SellerName: `Mark Slater`, SellerCity: `Sofia`, Date: `08/09/2012`, Value: 11.6, NumberOfUnits: 385 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 3.6, SellerName: `Harry Tyler`, SellerCity: `London`, Date: `08/10/2012`, Value: 26, NumberOfUnits: 56 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 34.6, SellerName: `Benjamin Dupree`, SellerCity: `Berlin`, Date: `08/12/2012`, Value: 96.2, NumberOfUnits: 267 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 92.4, SellerName: `Monica Freitag`, SellerCity: `Seattle`, Date: `08/14/2012`, Value: 95, NumberOfUnits: 109 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 34.8, SellerName: `Mark Slater`, SellerCity: `Berlin`, Date: `08/17/2012`, Value: 62.4, NumberOfUnits: 478 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 23.4, SellerName: `Claudia Kobayashi`, SellerCity: `Berlin`, Date: `08/21/2012`, Value: 57.8, NumberOfUnits: 184 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 79.6, SellerName: `Brandon Mckim`, SellerCity: `Seattle`, Date: `08/21/2012`, Value: 35.4, NumberOfUnits: 132 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 30.8, SellerName: `Nicholas Carmona`, SellerCity: `Sofia`, Date: `08/22/2012`, Value: 96, NumberOfUnits: 142 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 90, SellerName: `Carl Costello`, SellerCity: `Seattle`, Date: `08/27/2012`, Value: 27.6, NumberOfUnits: 46 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 83.2, SellerName: `Walter Pang`, SellerCity: `Seattle`, Date: `09/03/2012`, Value: 68.6, NumberOfUnits: 102 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 0.2, SellerName: `Russell Shorter`, SellerCity: `Berlin`, Date: `09/09/2012`, Value: 96.6, NumberOfUnits: 21 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 36.6, SellerName: `Monica Freitag`, SellerCity: `Sofia`, Date: `09/10/2012`, Value: 5, NumberOfUnits: 442 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 92.4, SellerName: `Harry Tyler`, SellerCity: `New York`, Date: `09/13/2012`, Value: 99.2, NumberOfUnits: 254 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 28, SellerName: `Nicholas Carmona`, SellerCity: `Sofia`, Date: `09/13/2012`, Value: 50, NumberOfUnits: 251 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 60.4, SellerName: `Antonio Charbonneau`, SellerCity: `New York`, Date: `09/15/2012`, Value: 44, NumberOfUnits: 119 }),
                new PivotDataFlatItem({ ProductName: `Bikes`, ProductUnitPrice: 33, SellerName: `Claudia Kobayashi`, SellerCity: `New York`, Date: `09/19/2012`, Value: 32.4, NumberOfUnits: 256 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 99, SellerName: `John Smith`, SellerCity: `New York`, Date: `09/23/2012`, Value: 35.8, NumberOfUnits: 456 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 16.2, SellerName: `Kathe Pettel`, SellerCity: `London`, Date: `10/01/2012`, Value: 16.4, NumberOfUnits: 430 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 73, SellerName: `David Haley`, SellerCity: `Berlin`, Date: `10/02/2012`, Value: 57, NumberOfUnits: 248 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 21.8, SellerName: `Harold Garvin`, SellerCity: `Berlin`, Date: `10/18/2012`, Value: 28.2, NumberOfUnits: 440 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 28.4, SellerName: `Howard Sprouse`, SellerCity: `New York`, Date: `10/19/2012`, Value: 66.6, NumberOfUnits: 234 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 80.6, SellerName: `Benjamin Meekins`, SellerCity: `New York`, Date: `10/25/2012`, Value: 5.4, NumberOfUnits: 36 }),
                new PivotDataFlatItem({ ProductName: `Accessories`, ProductUnitPrice: 97.8, SellerName: `Harry Tyler`, SellerCity: `London`, Date: `10/26/2012`, Value: 41.2, NumberOfUnits: 46 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 88.8, SellerName: `Elisa Longbottom`, SellerCity: `London`, Date: `11/02/2012`, Value: 64.6, NumberOfUnits: 211 }),
                new PivotDataFlatItem({ ProductName: `Clothing`, ProductUnitPrice: 67.4, SellerName: `Walter Pang`, SellerCity: `New York`, Date: `11/17/2012`, Value: 14.2, NumberOfUnits: 408 }),
                new PivotDataFlatItem({ ProductName: `Components`, ProductUnitPrice: 7.2, SellerName: `Walter Pang`, SellerCity: `New York`, Date: `11/20/2012`, Value: 72.8, NumberOfUnits: 376 }),
            ];
            super(...newItems.slice(0));
        }
    }
}
