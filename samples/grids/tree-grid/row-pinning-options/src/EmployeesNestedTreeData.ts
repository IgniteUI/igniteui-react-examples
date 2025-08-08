export class EmployeesNestedTreeDataItem {
    public constructor(init: Partial<EmployeesNestedTreeDataItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public Phone: string;
    public OnPTO: boolean;
    public ParentID: number;
    public Title: string;

}
export class EmployeesNestedTreeData extends Array<EmployeesNestedTreeDataItem> {
    public constructor(items: Array<EmployeesNestedTreeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesNestedTreeDataItem({ Age: 55, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, Phone: `0251-031259`, OnPTO: false, ParentID: -1, Title: `Development Manager` }),
                new EmployeesNestedTreeDataItem({ Age: 42, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, Phone: `(21) 555-0091`, OnPTO: true, ParentID: -1, Title: `CEO` }),
                new EmployeesNestedTreeDataItem({ Age: 49, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, Phone: `(071) 23 67 22 20`, OnPTO: true, ParentID: -1, Title: `Accounting Manager` }),
                new EmployeesNestedTreeDataItem({ Age: 61, HireDate: `2010-01-01`, ID: 10, Name: `Yang Wang`, Phone: `(21) 555-0091`, OnPTO: false, ParentID: -1, Title: `Localization Manager` }),
                new EmployeesNestedTreeDataItem({ Age: 43, HireDate: `2011-06-03`, ID: 3, Name: `Michael Burke`, Phone: `0452-076545`, OnPTO: true, ParentID: 1, Title: `Senior Software Developer` }),
                new EmployeesNestedTreeDataItem({ Age: 29, HireDate: `2009-06-19`, ID: 2, Name: `Thomas Anderson`, Phone: `(14) 555-8122`, OnPTO: false, ParentID: 1, Title: `Senior Software Developer` }),
                new EmployeesNestedTreeDataItem({ Age: 31, HireDate: `2014-08-18`, ID: 11, Name: `Monica Reyes`, Phone: `7675-3425`, OnPTO: false, ParentID: 1, Title: `Software Development Team Lead` }),
                new EmployeesNestedTreeDataItem({ Age: 35, HireDate: `2015-09-17`, ID: 6, Name: `Roland Mendel`, Phone: `(505) 555-5939`, OnPTO: false, ParentID: 11, Title: `Senior Software Developer` }),
                new EmployeesNestedTreeDataItem({ Age: 44, HireDate: `2009-10-11`, ID: 12, Name: `Sven Cooper`, Phone: `0695-34 67 21`, OnPTO: true, ParentID: 11, Title: `Senior Software Developer` }),
                new EmployeesNestedTreeDataItem({ Age: 44, HireDate: `2014-04-04`, ID: 14, Name: `Laurence Johnson`, Phone: `981-443655`, OnPTO: false, ParentID: 4, Title: `Director` }),
                new EmployeesNestedTreeDataItem({ Age: 25, HireDate: `2017-11-09`, ID: 5, Name: `Elizabeth Richards`, Phone: `(2) 283-2951`, OnPTO: true, ParentID: 4, Title: `Vice President` }),
                new EmployeesNestedTreeDataItem({ Age: 39, HireDate: `2010-03-22`, ID: 13, Name: `Trevor Ashworth`, Phone: `981-443655`, OnPTO: true, ParentID: 5, Title: `Director` }),
                new EmployeesNestedTreeDataItem({ Age: 44, HireDate: `2014-04-04`, ID: 17, Name: `Antonio Moreno`, Phone: `(505) 555-5939`, OnPTO: false, ParentID: 18, Title: `Senior Accountant` }),
                new EmployeesNestedTreeDataItem({ Age: 50, HireDate: `2007-11-18`, ID: 7, Name: `Pedro Rodriguez`, Phone: `035-640230`, OnPTO: false, ParentID: 10, Title: `Senior Localization Developer` }),
                new EmployeesNestedTreeDataItem({ Age: 27, HireDate: `2016-02-19`, ID: 8, Name: `Casey Harper`, Phone: `0342-023176`, OnPTO: true, ParentID: 10, Title: `Senior Localization` }),
                new EmployeesNestedTreeDataItem({ Age: 25, HireDate: `2017-11-09`, ID: 15, Name: `Patricia Simpson`, Phone: `069-0245984`, OnPTO: false, ParentID: 7, Title: `Localization Intern` }),
                new EmployeesNestedTreeDataItem({ Age: 39, HireDate: `2010-03-22`, ID: 9, Name: `Francisco Chang`, Phone: `(91) 745 6200`, OnPTO: false, ParentID: 7, Title: `Localization Intern` }),
                new EmployeesNestedTreeDataItem({ Age: 25, HireDate: `2018-03-18`, ID: 16, Name: `Peter Lewis`, Phone: `069-0245984`, OnPTO: true, ParentID: 7, Title: `Localization Intern` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
