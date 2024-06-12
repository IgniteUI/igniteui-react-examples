export class EmployeesNestedDataItem {
    public constructor(init: Partial<EmployeesNestedDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public Age: number;
    public Salary: number;
    public Productivity: number;
    public City: string;
    public Country: string;
    public Phone: string;
    public HireDate: string;
    public Name: string;
    public Title: string;
    public Employees: EmployeesNestedDataItem_EmployeesItem[];

}
export class EmployeesNestedDataItem_EmployeesItem {
    public constructor(init: Partial<EmployeesNestedDataItem_EmployeesItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public Salary: number;
    public Productivity: number;
    public City: string;
    public Country: string;
    public Phone: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public Title: string;

}
export class EmployeesNestedData extends Array<EmployeesNestedDataItem> {
    public constructor(items: Array<EmployeesNestedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesNestedDataItem(
                {
                    ID: 1,
                    Age: 55,
                    Salary: 80000,
                    Productivity: 90,
                    City: `Berlin`,
                    Country: `Germany`,
                    Phone: `609-202-505`,
                    HireDate: `2008-03-20`,
                    Name: `John Winchester`,
                    Title: `Development Manager`,
                    Employees: [
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 43,
                            Salary: 70000,
                            Productivity: 80,
                            City: `Hamburg`,
                            Country: `Germany`,
                            Phone: `609-444-555`,
                            HireDate: `2011-06-03`,
                            ID: 3,
                            Name: `Michael Burke`,
                            Title: `Senior Software Developer`
                        }),
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 29,
                            Salary: 60000,
                            Productivity: 80,
                            City: `Munich`,
                            Country: `Germany`,
                            Phone: `609-333-444`,
                            HireDate: `2009-06-19`,
                            ID: 2,
                            Name: `Thomas Anderson`,
                            Title: `Senior Software Developer`
                        }),
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 31,
                            Salary: 90000,
                            Productivity: 80,
                            City: `Warasw`,
                            Country: `Poland`,
                            Phone: `609-222-205`,
                            HireDate: `2014-08-18`,
                            ID: 11,
                            Name: `Monica Reyes`,
                            Title: `Software Development Team Lead`
                        }),
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 35,
                            Salary: 70000,
                            Productivity: 70,
                            City: `Koln`,
                            Country: `Germany`,
                            Phone: `609-502-525`,
                            HireDate: `2015-09-17`,
                            ID: 6,
                            Name: `Roland Mendel`,
                            Title: `Senior Software Developer`
                        })]

                }),
                new EmployeesNestedDataItem(
                {
                    ID: 4,
                    Age: 42,
                    Salary: 90000,
                    Productivity: 80,
                    City: `Kielce`,
                    Country: `Poland`,
                    Phone: `609-202-505`,
                    HireDate: `2014-01-22`,
                    Name: `Ana Sanders`,
                    Title: `CEO`,
                    Employees: [
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 44,
                            Salary: 80000,
                            Productivity: 80,
                            City: `Warasw`,
                            Country: `Poland`,
                            Phone: `609-202-505`,
                            HireDate: `2014-04-04`,
                            ID: 14,
                            Name: `Laurence Johnson`,
                            Title: `Director`
                        }),
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 25,
                            Salary: 85000,
                            Productivity: 55,
                            City: `Paris`,
                            Country: `France`,
                            Phone: `609-202-505`,
                            HireDate: `2017-11-09`,
                            ID: 5,
                            Name: `Elizabeth Richards`,
                            Title: `Vice President`
                        }),
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 39,
                            Salary: 88000,
                            Productivity: 88,
                            City: `London`,
                            Country: `UK`,
                            Phone: `609-202-505`,
                            HireDate: `2010-03-22`,
                            ID: 13,
                            Name: `Trevor Ashworth`,
                            Title: `Director`
                        })]

                }),
                new EmployeesNestedDataItem(
                {
                    ID: 18,
                    Age: 49,
                    Salary: 77000,
                    Productivity: 70,
                    City: `Manchester`,
                    Country: `UK`,
                    Phone: `222-555-577`,
                    HireDate: `2014-01-22`,
                    Name: `Victoria Lincoln`,
                    Title: `Senior Accountant`,
                    Employees: [
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 43,
                            Salary: 70000,
                            Productivity: 80,
                            City: `Hamburg`,
                            Country: `Germany`,
                            Phone: `609-444-555`,
                            HireDate: `2011-06-03`,
                            ID: 23,
                            Name: `Thomas Burke`,
                            Title: `Senior Accountant`
                        }),
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 29,
                            Salary: 60000,
                            Productivity: 80,
                            City: `Munich`,
                            Country: `Germany`,
                            Phone: `609-333-444`,
                            HireDate: `2009-06-19`,
                            ID: 22,
                            Name: `Michael Anderson`,
                            Title: `Junior Accountant`
                        }),
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 31,
                            Salary: 90000,
                            Productivity: 80,
                            City: `Warasw`,
                            Country: `Poland`,
                            Phone: `609-222-205`,
                            HireDate: `2014-08-18`,
                            ID: 21,
                            Name: `Roland Reyes`,
                            Title: `Accountant Team Lead`
                        }),
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 35,
                            Salary: 70000,
                            Productivity: 70,
                            City: `Koln`,
                            Country: `Germany`,
                            Phone: `609-502-525`,
                            HireDate: `2015-09-17`,
                            ID: 24,
                            Name: `Monica Mendel`,
                            Title: `Senior Software Developer`
                        })]

                }),
                new EmployeesNestedDataItem(
                {
                    ID: 10,
                    Age: 61,
                    Salary: 85000,
                    Productivity: 890,
                    City: `Lyon`,
                    Country: `France`,
                    Phone: `259-266-887`,
                    HireDate: `2010-01-01`,
                    Name: `Yang Wang`,
                    Title: `Localization Developer`,
                    Employees: [
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 31,
                            Salary: 90000,
                            Productivity: 80,
                            City: `Warasw`,
                            Country: `Poland`,
                            Phone: `609-222-205`,
                            HireDate: `2014-08-18`,
                            ID: 11,
                            Name: `Monica Reyes`,
                            Title: `Software Development Team Lead`
                        }),
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 35,
                            Salary: 70000,
                            Productivity: 70,
                            City: `Koln`,
                            Country: `Germany`,
                            Phone: `609-502-525`,
                            HireDate: `2015-09-17`,
                            ID: 6,
                            Name: `Roland Mendel`,
                            Title: `Senior Software Developer`
                        })]

                }),
                new EmployeesNestedDataItem(
                {
                    ID: 35,
                    Age: 35,
                    Salary: 75000,
                    Productivity: 75,
                    City: `Warasw`,
                    Country: `Poland`,
                    Phone: `688-244-844`,
                    HireDate: `2014-01-22`,
                    Name: `Janine Munoz`,
                    Title: `HR`,
                    Employees: [
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 43,
                            Salary: 70000,
                            Productivity: 80,
                            City: `Hamburg`,
                            Country: `Germany`,
                            Phone: `609-444-555`,
                            HireDate: `2011-06-03`,
                            ID: 3,
                            Name: `Michael Burke`,
                            Title: `Senior Software Developer`
                        }),
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 31,
                            Salary: 90000,
                            Productivity: 80,
                            City: `Warasw`,
                            Country: `Poland`,
                            Phone: `609-222-205`,
                            HireDate: `2014-08-18`,
                            ID: 11,
                            Name: `Monica Reyes`,
                            Title: `Software Development Team Lead`
                        })]

                }),
                new EmployeesNestedDataItem(
                {
                    ID: 10,
                    Age: 49,
                    Salary: 95000,
                    Productivity: 80,
                    City: `Krakow`,
                    Country: `Poland`,
                    Phone: `677-266-555`,
                    HireDate: `2010-01-01`,
                    Name: `Yang Wang`,
                    Title: `Sales Manager`,
                    Employees: [
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 29,
                            Salary: 60000,
                            Productivity: 80,
                            City: `Munich`,
                            Country: `Germany`,
                            Phone: `609-333-444`,
                            HireDate: `2009-06-19`,
                            ID: 2,
                            Name: `Thomas Anderson`,
                            Title: `Senior Software Developer`
                        }),
                        new EmployeesNestedDataItem_EmployeesItem(
                        {
                            Age: 35,
                            Salary: 70000,
                            Productivity: 70,
                            City: `Koln`,
                            Country: `Germany`,
                            Phone: `609-502-525`,
                            HireDate: `2015-09-17`,
                            ID: 6,
                            Name: `Roland Mendel`,
                            Title: `Senior Software Developer`
                        })]

                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
