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
