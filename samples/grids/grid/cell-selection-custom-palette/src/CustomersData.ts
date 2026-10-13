export class CustomersDataItem {
    public constructor(init: Partial<CustomersDataItem>) {
        Object.assign(this, init);
    }

    public ID: string;
    public Company: string;
    public ContactName: string;
    public ContactTitle: string;
    public Address: string;
    public City: string;
    public Region: string;
    public PostalCode: number;
    public Country: string;
    public Phone: string;
    public Fax: string;

}
export class CustomersData extends Array<CustomersDataItem> {
    public constructor(items: Array<CustomersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CustomersDataItem({ ID: `ALFKI`, Company: `Alfreds Futterkiste`, ContactName: `Maria Anders`, ContactTitle: `Sales Representative`, Address: `Obere Str. 57`, City: `Berlin`, Region: `East`, PostalCode: 12209, Country: `Germany`, Phone: `030-0074321`, Fax: `030-0076545` }),
                new CustomersDataItem({ ID: `ANATR`, Company: `Ana Trujillo Emparedados y helados`, ContactName: `Ana Trujillo`, ContactTitle: `Owner`, Address: `Avda. de la Constitución 2222`, City: `México D.F.`, Region: `South`, PostalCode: 5021, Country: `Mexico`, Phone: `(5) 555-4729`, Fax: `(5) 555-3745` }),
                new CustomersDataItem({ ID: `ANTON`, Company: `Antonio Moreno Taquería`, ContactName: `Antonio Moreno`, ContactTitle: `Owner`, Address: `Mataderos 2312`, City: `México D.F.`, Region: `South`, PostalCode: 5023, Country: `Mexico`, Phone: `(5) 555-3932`, Fax: `(5) 555-3745` }),
                new CustomersDataItem({ ID: `AROUT`, Company: `Around the Horn`, ContactName: `Thomas Hardy`, ContactTitle: `Sales Representative`, Address: `120 Hanover Sq.`, City: `London`, Region: `East`, PostalCode: 22000, Country: `UK`, Phone: `(171) 555-7788`, Fax: `(171) 555-6750` }),
                new CustomersDataItem({ ID: `BERGS`, Company: `Berglunds snabbköp`, ContactName: `Christina Berglund`, ContactTitle: `Order Administrator`, Address: `Berguvsvägen 8`, City: `Luleå`, Region: `South`, PostalCode: 17000, Country: `Sweden`, Phone: `0921-12 34 65`, Fax: `0921-12 34 67` }),
                new CustomersDataItem({ ID: `BLAUS`, Company: `Blauer See Delikatessen`, ContactName: `Hanna Moos`, ContactTitle: `Sales Representative`, Address: `Forsterstr. 57`, City: `Mannheim`, Region: `East`, PostalCode: 68306, Country: `Germany`, Phone: `0621-08460`, Fax: `0621-08924` }),
                new CustomersDataItem({ ID: `BLONP`, Company: `Blondesddsl père et fils`, ContactName: `Frédérique Citeaux`, ContactTitle: `Marketing Manager`, Address: `24, place Kléber`, City: `Strasbourg`, Region: `East`, PostalCode: 67000, Country: `France`, Phone: `88.60.15.31`, Fax: `88.60.15.32` }),
                new CustomersDataItem({ ID: `BOLID`, Company: `Bólido Comidas preparadas`, ContactName: `Martín Sommer`, ContactTitle: `Owner`, Address: `C/ Araquil, 67`, City: `Madrid`, Region: `East`, PostalCode: 28023, Country: `Spain`, Phone: `(91) 555 22 82`, Fax: `(91) 555 91 99` }),
                new CustomersDataItem({ ID: `BONAP`, Company: `Bon app'`, ContactName: `Laurence Lebihan`, ContactTitle: `Owner`, Address: `12, rue des Bouchers`, City: `Marseille`, Region: `West`, PostalCode: 13008, Country: `France`, Phone: `91.24.45.40`, Fax: `91.24.45.41` }),
                new CustomersDataItem({ ID: `BOTTM`, Company: `Bottom-Dollar Markets`, ContactName: `Elizabeth Lincoln`, ContactTitle: `Accounting Manager`, Address: `23 Tsawassen Blvd.`, City: `Tsawassen`, Region: `BC`, PostalCode: 28000, Country: `Canada`, Phone: `(604) 555-4729`, Fax: `(604) 555-3745` }),
                new CustomersDataItem({ ID: `BSBEV`, Company: `B's Beverages`, ContactName: `Victoria Ashworth`, ContactTitle: `Sales Representative`, Address: `Fauntleroy Circus`, City: `London`, Region: `South`, PostalCode: 10000, Country: `UK`, Phone: `(171) 555-1212`, Fax: `(5) 555-3745` }),
                new CustomersDataItem({ ID: `CACTU`, Company: `Cactus Comidas para llevar`, ContactName: `Patricio Simpson`, ContactTitle: `Sales Agent`, Address: `Cerrito 333`, City: `Buenos Aires`, Region: `East`, PostalCode: 1010, Country: `Argentina`, Phone: `(1) 135-5555`, Fax: `(1) 135-4892` }),
                new CustomersDataItem({ ID: `CENTC`, Company: `Centro comercial Moctezuma`, ContactName: `Francisco Chang`, ContactTitle: `Marketing Manager`, Address: `Sierras de Granada 9993`, City: `México D.F.`, Region: `South`, PostalCode: 5022, Country: `Mexico`, Phone: `(5) 555-3392`, Fax: `(5) 555-7293` }),
                new CustomersDataItem({ ID: `CHOPS`, Company: `Chop-suey Chinese`, ContactName: `Yang Wang`, ContactTitle: `Owner`, Address: `Hauptstr. 29`, City: `Bern`, Region: `East`, PostalCode: 3012, Country: `Switzerland`, Phone: `0452-076545`, Fax: `(5) 555-3745` }),
                new CustomersDataItem({ ID: `COMMI`, Company: `Comércio Mineiro`, ContactName: `Pedro Afonso`, ContactTitle: `Sales Associate`, Address: `Av. dos Lusíadas, 23`, City: `Sao Paulo`, Region: `SP`, PostalCode: 34000, Country: `Brazil`, Phone: `(11) 555-7647`, Fax: `(5) 555-3745` }),
                new CustomersDataItem({ ID: `CONSH`, Company: `Consolidated Holdings`, ContactName: `Elizabeth Brown`, ContactTitle: `Sales Representative`, Address: `Berkeley Gardens 12 Brewery`, City: `London`, Region: `South`, PostalCode: 27000, Country: `UK`, Phone: `(171) 555-2282`, Fax: `(171) 555-9199` }),
                new CustomersDataItem({ ID: `DRACD`, Company: `Drachenblut Delikatessen`, ContactName: `Sven Ottlieb`, ContactTitle: `Order Administrator`, Address: `Walserweg 21`, City: `Aachen`, Region: `South`, PostalCode: 52066, Country: `Germany`, Phone: `0241-039123`, Fax: `0241-059428` }),
                new CustomersDataItem({ ID: `DUMON`, Company: `Du monde entier`, ContactName: `Janine Labrune`, ContactTitle: `Owner`, Address: `67, rue des Cinquante Otages`, City: `Nantes`, Region: `East`, PostalCode: 44000, Country: `France`, Phone: `40.67.88.88`, Fax: `40.67.89.89` }),
                new CustomersDataItem({ ID: `EASTC`, Company: `Eastern Connection`, ContactName: `Ann Devon`, ContactTitle: `Sales Agent`, Address: `35 King George`, City: `London`, Region: `East`, PostalCode: 41000, Country: `UK`, Phone: `(171) 555-0297`, Fax: `(171) 555-3373` }),
                new CustomersDataItem({ ID: `ERNSH`, Company: `Ernst Handel`, ContactName: `Roland Mendel`, ContactTitle: `Sales Manager`, Address: `Kirchgasse 6`, City: `Graz`, Region: `South`, PostalCode: 8010, Country: `Austria`, Phone: `7675-3425`, Fax: `7675-3426` }),
                new CustomersDataItem({ ID: `FAMIA`, Company: `Familia Arquibaldo`, ContactName: `Aria Cruz`, ContactTitle: `Marketing Assistant`, Address: `Rua Orós, 92`, City: `Sao Paulo`, Region: `SP`, PostalCode: 27000, Country: `Brazil`, Phone: `(11) 555-9857`, Fax: `(5) 555-3745` }),
                new CustomersDataItem({ ID: `FISSA`, Company: `FISSA Fabrica Inter. Salchichas S.A.`, ContactName: `Diego Roel`, ContactTitle: `Accounting Manager`, Address: `C/ Moralzarzal, 86`, City: `Madrid`, Region: `East`, PostalCode: 28034, Country: `Spain`, Phone: `(91) 555 94 44`, Fax: `(91) 555 55 93` }),
                new CustomersDataItem({ ID: `FOLIG`, Company: `Folies gourmandes`, ContactName: `Martine Rancé`, ContactTitle: `Assistant Sales Agent`, Address: `184, chaussée de Tournai`, City: `Lille`, Region: `South`, PostalCode: 59000, Country: `France`, Phone: `20.16.10.16`, Fax: `20.16.10.17` }),
                new CustomersDataItem({ ID: `FOLKO`, Company: `Folk och fä HB`, ContactName: `Maria Larsson`, ContactTitle: `Owner`, Address: `Åkergatan 24`, City: `Bräcke`, Region: `East`, PostalCode: 36000, Country: `Sweden`, Phone: `0695-34 67 21`, Fax: `0695 33-4455` }),
                new CustomersDataItem({ ID: `FRANK`, Company: `Frankenversand`, ContactName: `Peter Franken`, ContactTitle: `Marketing Manager`, Address: `Berliner Platz 43`, City: `München`, Region: `East`, PostalCode: 80805, Country: `Germany`, Phone: `089-0877310`, Fax: `089-0877451` }),
                new CustomersDataItem({ ID: `FRANR`, Company: `France restauration`, ContactName: `Carine Schmitt`, ContactTitle: `Marketing Manager`, Address: `54, rue Royale`, City: `Nantes`, Region: `South`, PostalCode: 44000, Country: `France`, Phone: `40.32.21.21`, Fax: `40.32.21.20` }),
                new CustomersDataItem({ ID: `FRANS`, Company: `Franchi S.p.A.`, ContactName: `Paolo Accorti`, ContactTitle: `Sales Representative`, Address: `Via Monte Bianco 34`, City: `Torino`, Region: `East`, PostalCode: 10100, Country: `Italy`, Phone: `011-4988260`, Fax: `011-4988261` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
