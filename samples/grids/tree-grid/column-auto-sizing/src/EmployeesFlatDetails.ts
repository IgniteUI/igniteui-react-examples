export class EmployeesFlatDetailsItem {
    public constructor(init: Partial<EmployeesFlatDetailsItem>) {
        Object.assign(this, init);
    }

    public Address: string;
    public Age: number;
    public City: string;
    public Country: string;
    public Fax: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Phone: string;
    public PostalCode: number;
    public Title: string;
    public LastName: string;
    public FullAddress: string;

}
export class EmployeesFlatDetails extends Array<EmployeesFlatDetailsItem> {
    public constructor(items: Array<EmployeesFlatDetailsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDetailsItem(
                {
                    Address: `Obere Str. 57`,
                    Age: 55,
                    City: `Berlin`,
                    Country: `Germany`,
                    Fax: `030-0076545`,
                    HireDate: `2008-03-20`,
                    ID: 1,
                    Name: `Johnathan Winchester`,
                    ParentID: -1,
                    Phone: `030-0074321`,
                    PostalCode: 12209,
                    Title: `Development Manager`,
                    LastName: `Winchester`,
                    FullAddress: `Obere Str. 57, Berlin, Germany`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `Avda. de la Constitución 2222`,
                    Age: 42,
                    City: `México D.F.`,
                    Country: `Mexico`,
                    Fax: `(51) 555-3745`,
                    HireDate: `2014-01-22`,
                    ID: 4,
                    Name: `Ana Sanders`,
                    ParentID: -1,
                    Phone: `(5) 555-4729`,
                    PostalCode: 5021,
                    Title: `CEO`,
                    LastName: `Sanders`,
                    FullAddress: `Avda. de la Constitución 2222, México D.F., Mexico`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `Mataderos 2312`,
                    Age: 49,
                    City: `México D.F.`,
                    Country: `Mexico`,
                    Fax: `(5) 555-3995`,
                    HireDate: `2014-01-22`,
                    ID: 18,
                    Name: `Victoria Lincoln`,
                    ParentID: -1,
                    Phone: `(5) 555-3932`,
                    PostalCode: 5023,
                    Title: `Accounting Manager`,
                    LastName: `Lincoln`,
                    FullAddress: `Mataderos 2312, México D.F., Mexico`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `120 Hanover Sq.`,
                    Age: 61,
                    City: `London`,
                    Country: `UK`,
                    Fax: `(171) 555-6750`,
                    HireDate: `2010-01-01`,
                    ID: 10,
                    Name: `Yang Wang`,
                    ParentID: -1,
                    Phone: `(171) 555-7788`,
                    PostalCode: 39000,
                    Title: `Localization Manager`,
                    LastName: `Wang`,
                    FullAddress: `120 Hanover Sq., London, UK`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `Berguvsvägen 8`,
                    Age: 43,
                    City: `Luleå`,
                    Country: `Sweden`,
                    Fax: `0921-12 34 67`,
                    HireDate: `2011-06-03`,
                    ID: 3,
                    Name: `Michael Burke`,
                    ParentID: 1,
                    Phone: `0921-12 34 65`,
                    PostalCode: 29000,
                    Title: `Senior Software Developer`,
                    LastName: `Burke`,
                    FullAddress: `Berguvsvägen 8, Luleå, Sweden`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `Forsterstr. 57`,
                    Age: 29,
                    City: `Mannheim`,
                    Country: `Germany`,
                    Fax: `0621-08924`,
                    HireDate: `2009-06-19`,
                    ID: 2,
                    Name: `Thomas Anderson`,
                    ParentID: 1,
                    Phone: `0621-08460`,
                    PostalCode: 68306,
                    Title: `Senior Software Developer`,
                    LastName: `Anderson`,
                    FullAddress: `Forsterstr. 57, Mannheim, Germany`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `24, place Kléber`,
                    Age: 31,
                    City: `Strasbourg`,
                    Country: `France`,
                    Fax: `88.60.15.32`,
                    HireDate: `2014-08-18`,
                    ID: 11,
                    Name: `Monica Reyes`,
                    ParentID: 1,
                    Phone: `88.60.15.31`,
                    PostalCode: 67000,
                    Title: `Software Development Team Lead`,
                    LastName: `Reyes`,
                    FullAddress: `24, place Kléber, Strasbourg, France`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `C/ Araquil, 67`,
                    Age: 35,
                    City: `Madrid`,
                    Country: `Spain`,
                    Fax: `(911) 555 91 99`,
                    HireDate: `2015-09-17`,
                    ID: 6,
                    Name: `Roland Mendel`,
                    ParentID: 11,
                    Phone: `(91) 555 22 82`,
                    PostalCode: 28023,
                    Title: `Senior Software Developer`,
                    LastName: `Mendel`,
                    FullAddress: `C/ Araquil, 67, Madrid, Spain`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `12, rue des Bouchers`,
                    Age: 44,
                    City: `Marseille`,
                    Country: `France`,
                    Fax: `91.24.45.41`,
                    HireDate: `2009-10-11`,
                    ID: 12,
                    Name: `Sven Cooper`,
                    ParentID: 11,
                    Phone: `91.24.45.40`,
                    PostalCode: 13008,
                    Title: `Senior Software Developer`,
                    LastName: `Cooper`,
                    FullAddress: `12, rue des Bouchers, Marseille, France`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `23 Tsawassen Blvd.`,
                    Age: 44,
                    City: `Tsawassen`,
                    Country: `Canada`,
                    Fax: `(604) 555-3745`,
                    HireDate: `2014-04-04`,
                    ID: 14,
                    Name: `Laurence Johnson`,
                    ParentID: 4,
                    Phone: `(604) 555-4729`,
                    PostalCode: 19000,
                    Title: `Director`,
                    LastName: `Johnson`,
                    FullAddress: `23 Tsawassen Blvd., Tsawassen, Canada`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `Fauntleroy Circus`,
                    Age: 25,
                    City: `London`,
                    Country: `UK`,
                    Fax: `(125) 555-3798`,
                    HireDate: `2017-11-9`,
                    ID: 5,
                    Name: `Elizabeth Richards`,
                    ParentID: 4,
                    Phone: `(171) 555-1212`,
                    PostalCode: 30000,
                    Title: `Vice President`,
                    LastName: `Richards`,
                    FullAddress: `Fauntleroy Circus, London, UK`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `Cerrito 333`,
                    Age: 39,
                    City: `Buenos Aires`,
                    Country: `Argentina`,
                    Fax: `(121) 135-4892`,
                    HireDate: `2010-03-22`,
                    ID: 13,
                    Name: `Trevor Ashworth`,
                    ParentID: 5,
                    Phone: `(1) 135-5555`,
                    PostalCode: 1010,
                    Title: `Director`,
                    LastName: `Ashworth`,
                    FullAddress: `Cerrito 333, Buenos Aires, Argentina`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `Sierras de Granada 9993`,
                    Age: 44,
                    City: `México D.F.`,
                    Country: `Mexico`,
                    Fax: `(153) 555-7293`,
                    HireDate: `2014-04-04`,
                    ID: 17,
                    Name: `Antonio Moreno`,
                    ParentID: 18,
                    Phone: `(5) 555-3392`,
                    PostalCode: 5022,
                    Title: `Senior Accountant`,
                    LastName: `Moreno`,
                    FullAddress: `Sierras de Granada 9993, México D.F., Mexico`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `Hauptstr. 29`,
                    Age: 50,
                    City: `Sao Paulo`,
                    Country: `Brazil`,
                    Fax: `(531) 555-6691`,
                    HireDate: `2007-11-18`,
                    ID: 7,
                    Name: `Pedro Rodriguez`,
                    ParentID: 10,
                    Phone: `0452-076545`,
                    PostalCode: 3012,
                    Title: `Senior Localization Developer`,
                    LastName: `Rodriguez`,
                    FullAddress: `Hauptstr. 29, Sao Paulo, Brazil`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `Av. dos Lusíadas, 23`,
                    Age: 27,
                    City: `Bern`,
                    Country: `Switzerland`,
                    Fax: `(271) 335-357`,
                    HireDate: `2016-02-19`,
                    ID: 8,
                    Name: `Casey Harper`,
                    ParentID: 10,
                    Phone: `(11) 555-7647`,
                    PostalCode: 40000,
                    Title: `Senior Localization`,
                    LastName: `Harper`,
                    FullAddress: `Av. dos Lusíadas, 23, Bern, Switzerland`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `Berkeley Gardens 12`,
                    Age: 25,
                    City: `London`,
                    Country: `UK`,
                    Fax: `(171) 555-9199`,
                    HireDate: `2017-11-09`,
                    ID: 15,
                    Name: `Patricia Simpson`,
                    ParentID: 7,
                    Phone: `(171) 555-2282`,
                    PostalCode: 26000,
                    Title: `Localization Intern`,
                    LastName: `Simpson`,
                    FullAddress: `Berkeley Gardens 12, London, UK`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `Walserweg 21`,
                    Age: 39,
                    City: `Aachen`,
                    Country: `Germany`,
                    Fax: `0241-059428`,
                    HireDate: `2010-03-22`,
                    ID: 9,
                    Name: `Francisco Chang`,
                    ParentID: 7,
                    Phone: `0241-039123`,
                    PostalCode: 52066,
                    Title: `Localization Intern`,
                    LastName: `Chang`,
                    FullAddress: `Walserweg 21, Aachen, Germany`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `35 King George`,
                    Age: 25,
                    City: `London`,
                    Country: `UK`,
                    Fax: `(171) 555-3373`,
                    HireDate: `2018-03-18`,
                    ID: 16,
                    Name: `Peter Lewis`,
                    ParentID: 7,
                    Phone: `(171) 555-0297`,
                    PostalCode: 48000,
                    Title: `Localization Intern`,
                    LastName: `Lewis`,
                    FullAddress: `35 King George, London, UK`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
