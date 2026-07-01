import { SingersWithPageResponseModel } from './SingersWithPageResponseModel';

// Simulated remote data - in a real app, this would come from an API
const ALL_SINGERS = [
    {
        ID: 0,
        Artist: 'Naomí Yepes',
        Debut: 2011,
        GrammyNominations: 6,
        GrammyAwards: 0,
        HasGrammyAward: false,
        Tours: [
            { Tour: 'Faithful Tour', StartedOn: 'Sep 12', Location: 'Worldwide', Headliner: 'NO' },
            { Tour: 'City Jam Sessions', StartedOn: 'Aug 13', Location: 'North America', Headliner: 'YES' }
        ],
        Albums: [
            {
                Album: 'Initiation',
                LaunchDate: '2013-09-03',
                BillboardReview: 86,
                USBillboard200: 1,
                Songs: [
                    { Number: 1, Title: 'Lonely Falling', Released: '2019-05-01', Genre: 'Pop' },
                    { Number: 2, Title: 'Bright Breaking', Released: '2019-07-25', Genre: 'Electropop' }
                ]
            }
        ]
    },
    {
        ID: 1,
        Artist: 'Babila Ebwélé',
        Debut: 2009,
        GrammyNominations: 0,
        GrammyAwards: 11,
        HasGrammyAward: true,
        Tours: [
            { Tour: 'The BIG Tour', StartedOn: 'May 10', Location: 'Worldwide', Headliner: 'YES' }
        ],
        Albums: [
            {
                Album: 'Fahrenheit',
                LaunchDate: '2010-05-15',
                BillboardReview: 92,
                USBillboard200: 3,
                Songs: [
                    { Number: 1, Title: 'Heat Wave', Released: '2010-05-01', Genre: 'R&B' }
                ]
            }
        ]
    },
    {
        ID: 2,
        Artist: 'Chetana Kadarapu',
        Debut: 2003,
        GrammyNominations: 3,
        GrammyAwards: 2,
        HasGrammyAward: true,
        Tours: [
            { Tour: 'Eastern Winds', StartedOn: 'Mar 04', Location: 'Asia', Headliner: 'YES' }
        ],
        Albums: []
    },
    {
        ID: 3,
        Artist: 'Xin Zhuang',
        Debut: 2015,
        GrammyNominations: 2,
        GrammyAwards: 1,
        HasGrammyAward: true,
        Tours: [],
        Albums: [
            {
                Album: 'New Horizons',
                LaunchDate: '2016-02-20',
                BillboardReview: 88,
                USBillboard200: 5,
                Songs: [
                    { Number: 1, Title: 'Dawn', Released: '2016-02-01', Genre: 'Electronic' }
                ]
            }
        ]
    },
    {
        ID: 4,
        Artist: 'Elena Volkova',
        Debut: 2012,
        GrammyNominations: 4,
        GrammyAwards: 0,
        HasGrammyAward: false,
        Tours: [
            { Tour: 'Winter Sessions', StartedOn: 'Dec 13', Location: 'Europe', Headliner: 'NO' }
        ],
        Albums: []
    },
    {
        ID: 5,
        Artist: 'Marcus Chen',
        Debut: 2008,
        GrammyNominations: 8,
        GrammyAwards: 3,
        HasGrammyAward: true,
        Tours: [
            { Tour: 'Global Sounds', StartedOn: 'Jun 09', Location: 'Worldwide', Headliner: 'YES' }
        ],
        Albums: [
            {
                Album: 'Fusion',
                LaunchDate: '2009-03-10',
                BillboardReview: 90,
                USBillboard200: 2,
                Songs: [
                    { Number: 1, Title: 'Blend', Released: '2009-03-01', Genre: 'Jazz Fusion' }
                ]
            }
        ]
    },
    {
        ID: 6,
        Artist: 'Sofia Martinez',
        Debut: 2014,
        GrammyNominations: 5,
        GrammyAwards: 2,
        HasGrammyAward: true,
        Tours: [],
        Albums: []
    },
    {
        ID: 7,
        Artist: 'James Wilson',
        Debut: 2010,
        GrammyNominations: 1,
        GrammyAwards: 0,
        HasGrammyAward: false,
        Tours: [
            { Tour: 'Acoustic Sessions', StartedOn: 'Apr 11', Location: 'North America', Headliner: 'NO' }
        ],
        Albums: []
    },
    {
        ID: 8,
        Artist: 'Aisha Patel',
        Debut: 2016,
        GrammyNominations: 7,
        GrammyAwards: 4,
        HasGrammyAward: true,
        Tours: [
            { Tour: 'Rhythm of Life', StartedOn: 'Jan 17', Location: 'Worldwide', Headliner: 'YES' }
        ],
        Albums: [
            {
                Album: 'Essence',
                LaunchDate: '2017-06-15',
                BillboardReview: 95,
                USBillboard200: 1,
                Songs: [
                    { Number: 1, Title: 'Soul', Released: '2017-06-01', Genre: 'Soul' },
                    { Number: 2, Title: 'Spirit', Released: '2017-07-15', Genre: 'R&B' }
                ]
            }
        ]
    },
    {
        ID: 9,
        Artist: 'Oliver Brown',
        Debut: 2007,
        GrammyNominations: 2,
        GrammyAwards: 1,
        HasGrammyAward: true,
        Tours: [],
        Albums: []
    }
];

export class RemotePagingService {
    private static delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public static async getDataWithPaging(pageIndex: number = 0, pageSize: number = 10): Promise<SingersWithPageResponseModel> {
        // Simulate network delay
        await this.delay(300);

        const totalRecords = ALL_SINGERS.length;
        const totalPages = Math.ceil(totalRecords / pageSize);
        const startIndex = pageIndex * pageSize;
        const endIndex = Math.min(startIndex + pageSize, totalRecords);
        const items = ALL_SINGERS.slice(startIndex, endIndex);

        return {
            items,
            totalRecordsCount: totalRecords,
            pageSize,
            pageNumber: pageIndex,
            totalPages
        };
    }

    public static getTotalRecords(): number {
        return ALL_SINGERS.length;
    }
}
