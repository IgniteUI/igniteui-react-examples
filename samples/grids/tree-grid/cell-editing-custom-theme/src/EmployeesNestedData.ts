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
                new EmployeesNestedDataItem({ ID: 1, Age: 55, Salary: 80000, Productivity: 90, City: `Berlin`, Country: `Germany`, Phone: `609-202-505`, HireDate: `2008-03-20`, Name: `John Winchester`, Title: `Development Manager`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 43, Salary: 70000, Productivity: 80, City: `Hamburg`, Country: `Germany`, Phone: `609-444-555`, HireDate: `2011-06-03`, ID: 3, Name: `Michael Burke`, Title: `Senior Software Developer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 29, Salary: 60000, Productivity: 80, City: `Munich`, Country: `Germany`, Phone: `609-333-444`, HireDate: `2009-06-19`, ID: 2, Name: `Thomas Anderson`, Title: `Senior Software Developer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 31, Salary: 90000, Productivity: 80, City: `Warasw`, Country: `Poland`, Phone: `609-222-205`, HireDate: `2014-08-18`, ID: 11, Name: `Monica Reyes`, Title: `Software Development Team Lead` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 35, Salary: 70000, Productivity: 70, City: `Koln`, Country: `Germany`, Phone: `609-502-525`, HireDate: `2015-09-17`, ID: 6, Name: `Roland Mendel`, Title: `Senior Software Developer` })]
                 }),
                new EmployeesNestedDataItem({ ID: 4, Age: 42, Salary: 90000, Productivity: 80, City: `Kielce`, Country: `Poland`, Phone: `609-202-505`, HireDate: `2014-01-22`, Name: `Ana Sanders`, Title: `CEO`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 44, Salary: 80000, Productivity: 80, City: `Warasw`, Country: `Poland`, Phone: `609-202-505`, HireDate: `2014-04-04`, ID: 14, Name: `Laurence Johnson`, Title: `Director` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 25, Salary: 85000, Productivity: 55, City: `Paris`, Country: `France`, Phone: `609-202-505`, HireDate: `2017-11-09`, ID: 5, Name: `Elizabeth Richards`, Title: `Vice President` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 39, Salary: 88000, Productivity: 88, City: `London`, Country: `UK`, Phone: `609-202-505`, HireDate: `2010-03-22`, ID: 13, Name: `Trevor Ashworth`, Title: `Director` })]
                 }),
                new EmployeesNestedDataItem({ ID: 18, Age: 49, Salary: 77000, Productivity: 70, City: `Manchester`, Country: `UK`, Phone: `222-555-577`, HireDate: `2014-01-22`, Name: `Victoria Lincoln`, Title: `Senior Accountant`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 43, Salary: 70000, Productivity: 80, City: `Hamburg`, Country: `Germany`, Phone: `609-444-555`, HireDate: `2011-06-03`, ID: 23, Name: `Thomas Burke`, Title: `Senior Accountant` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 29, Salary: 60000, Productivity: 80, City: `Munich`, Country: `Germany`, Phone: `609-333-444`, HireDate: `2009-06-19`, ID: 22, Name: `Michael Anderson`, Title: `Junior Accountant` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 31, Salary: 90000, Productivity: 80, City: `Warasw`, Country: `Poland`, Phone: `609-222-205`, HireDate: `2014-08-18`, ID: 21, Name: `Roland Reyes`, Title: `Accountant Team Lead` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 35, Salary: 70000, Productivity: 70, City: `Koln`, Country: `Germany`, Phone: `609-502-525`, HireDate: `2015-09-17`, ID: 24, Name: `Monica Mendel`, Title: `Senior Software Developer` })]
                 }),
                new EmployeesNestedDataItem({ ID: 10, Age: 61, Salary: 85000, Productivity: 890, City: `Lyon`, Country: `France`, Phone: `259-266-887`, HireDate: `2010-01-01`, Name: `Yang Wang`, Title: `Localization Developer`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 31, Salary: 90000, Productivity: 80, City: `Warasw`, Country: `Poland`, Phone: `609-222-205`, HireDate: `2014-08-18`, ID: 11, Name: `Monica Reyes`, Title: `Software Development Team Lead` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 35, Salary: 70000, Productivity: 70, City: `Koln`, Country: `Germany`, Phone: `609-502-525`, HireDate: `2015-09-17`, ID: 6, Name: `Roland Mendel`, Title: `Senior Software Developer` })]
                 }),
                new EmployeesNestedDataItem({ ID: 35, Age: 35, Salary: 75000, Productivity: 75, City: `Warasw`, Country: `Poland`, Phone: `688-244-844`, HireDate: `2014-01-22`, Name: `Janine Munoz`, Title: `HR`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 43, Salary: 70000, Productivity: 80, City: `Hamburg`, Country: `Germany`, Phone: `609-444-555`, HireDate: `2011-06-03`, ID: 3, Name: `Michael Burke`, Title: `Senior Software Developer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 31, Salary: 90000, Productivity: 80, City: `Warasw`, Country: `Poland`, Phone: `609-222-205`, HireDate: `2014-08-18`, ID: 11, Name: `Monica Reyes`, Title: `Software Development Team Lead` })]
                 }),
                new EmployeesNestedDataItem({ ID: 10, Age: 49, Salary: 95000, Productivity: 80, City: `Krakow`, Country: `Poland`, Phone: `677-266-555`, HireDate: `2010-01-01`, Name: `Yang Wang`, Title: `Sales Manager`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 29, Salary: 60000, Productivity: 80, City: `Munich`, Country: `Germany`, Phone: `609-333-444`, HireDate: `2009-06-19`, ID: 2, Name: `Thomas Anderson`, Title: `Senior Software Developer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 35, Salary: 70000, Productivity: 70, City: `Koln`, Country: `Germany`, Phone: `609-502-525`, HireDate: `2015-09-17`, ID: 6, Name: `Roland Mendel`, Title: `Senior Software Developer` })]
                 }),
                new EmployeesNestedDataItem({ ID: 25, Age: 38, Salary: 92000, Productivity: 85, City: `Tokyo`, Country: `Japan`, Phone: `81-3-555-1234`, HireDate: `2012-05-15`, Name: `Akira Tanaka`, Title: `Marketing Director`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 32, Salary: 65000, Productivity: 78, City: `Osaka`, Country: `Japan`, Phone: `81-6-555-9876`, HireDate: `2016-08-20`, ID: 26, Name: `Yuki Sato`, Title: `Marketing Specialist` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 28, Salary: 58000, Productivity: 82, City: `Kyoto`, Country: `Japan`, Phone: `81-75-555-4567`, HireDate: `2018-03-10`, ID: 27, Name: `Hiroshi Yamamoto`, Title: `Digital Marketing Analyst` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 34, Salary: 72000, Productivity: 90, City: `Tokyo`, Country: `Japan`, Phone: `81-3-555-7890`, HireDate: `2015-11-05`, ID: 28, Name: `Kenji Watanabe`, Title: `Senior Marketing Manager` })]
                 }),
                new EmployeesNestedDataItem({ ID: 30, Age: 45, Salary: 88000, Productivity: 87, City: `Sydney`, Country: `Australia`, Phone: `61-2-555-1111`, HireDate: `2011-09-12`, Name: `Sarah Mitchell`, Title: `Product Manager`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 30, Salary: 68000, Productivity: 85, City: `Melbourne`, Country: `Australia`, Phone: `61-3-555-2222`, HireDate: `2017-01-18`, ID: 31, Name: `James Wilson`, Title: `Product Designer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 27, Salary: 62000, Productivity: 79, City: `Brisbane`, Country: `Australia`, Phone: `61-7-555-3333`, HireDate: `2019-06-25`, ID: 32, Name: `Emma Thompson`, Title: `UX Designer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 33, Salary: 74000, Productivity: 88, City: `Sydney`, Country: `Australia`, Phone: `61-2-555-4444`, HireDate: `2016-04-30`, ID: 33, Name: `David Brown`, Title: `Senior Product Analyst` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 29, Salary: 65000, Productivity: 83, City: `Perth`, Country: `Australia`, Phone: `61-8-555-5555`, HireDate: `2018-10-14`, ID: 34, Name: `Lisa Davis`, Title: `Product Coordinator` })]
                 }),
                new EmployeesNestedDataItem({ ID: 40, Age: 52, Salary: 105000, Productivity: 92, City: `Toronto`, Country: `Canada`, Phone: `1-416-555-6666`, HireDate: `2009-02-28`, Name: `Robert Chen`, Title: `Engineering Director`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 36, Salary: 82000, Productivity: 89, City: `Vancouver`, Country: `Canada`, Phone: `1-604-555-7777`, HireDate: `2013-07-16`, ID: 41, Name: `Jennifer Lee`, Title: `Senior DevOps Engineer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 31, Salary: 75000, Productivity: 86, City: `Montreal`, Country: `Canada`, Phone: `1-514-555-8888`, HireDate: `2017-12-03`, ID: 42, Name: `Alexandre Dubois`, Title: `Full Stack Developer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 28, Salary: 68000, Productivity: 84, City: `Calgary`, Country: `Canada`, Phone: `1-403-555-9999`, HireDate: `2019-09-20`, ID: 43, Name: `Maria Rodriguez`, Title: `Frontend Developer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 34, Salary: 78000, Productivity: 91, City: `Toronto`, Country: `Canada`, Phone: `1-416-555-0000`, HireDate: `2015-05-11`, ID: 44, Name: `Kevin O'Connor`, Title: `Backend Developer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 37, Salary: 85000, Productivity: 93, City: `Ottawa`, Country: `Canada`, Phone: `1-613-555-1010`, HireDate: `2012-11-08`, ID: 45, Name: `Stephanie Kim`, Title: `Senior Software Architect` })]
                 }),
                new EmployeesNestedDataItem({ ID: 50, Age: 41, Salary: 96000, Productivity: 88, City: `Stockholm`, Country: `Sweden`, Phone: `46-8-555-2020`, HireDate: `2013-03-14`, Name: `Lars Andersson`, Title: `Quality Assurance Manager`, Employees: [
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 33, Salary: 71000, Productivity: 87, City: `Gothenburg`, Country: `Sweden`, Phone: `46-31-555-3030`, HireDate: `2016-09-22`, ID: 51, Name: `Anna Johansson`, Title: `Senior QA Engineer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 29, Salary: 64000, Productivity: 81, City: `Malmo`, Country: `Sweden`, Phone: `46-40-555-4040`, HireDate: `2018-12-17`, ID: 52, Name: `Erik Nilsson`, Title: `QA Automation Engineer` }),
                    new EmployeesNestedDataItem_EmployeesItem({ Age: 26, Salary: 58000, Productivity: 78, City: `Uppsala`, Country: `Sweden`, Phone: `46-18-555-5050`, HireDate: `2020-04-06`, ID: 53, Name: `Sofia Lindberg`, Title: `Junior QA Tester` })]
                 }),
            ];
            super(...newItems.slice(0));
        }
    }
}
