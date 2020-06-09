export class DockManagerSharedData {

    public static getEmployees(count?: number): any[] {
        if (count === undefined) {
            count = 250;
        }

        const contacts: any[] = [];
        let maleCount: number = 0;
        let femaleCount: number = 0;
        const emails: string[] = [ "gmail.com", "yahoo.com", "facebook.com", "twitter.com"];

        for (let i = 0; i < count; i++) {
            const age: number = Math.round(this.getRandomNumber(20, 40));
            const gender: string = this.getRandomGender();
            const firstName: string = this.getRandomNameFirst(gender);
            const lastName: string = this.getRandomNameLast();
            const street: string = this.getRandomStreet();
            const location: any = this.getRandomItem(this.locations);
            // const country: string = this.getRandomItem(this.countries);
            // const city: string = this.getRandomCity(country);

            const generation = Math.floor(age / 10) * 10 + "s";
            const email: string = firstName.toLowerCase() + "@" + this.getRandomItem(emails);
            let photoPath: any;

            if (gender === "male") {
                maleCount++;
                if (maleCount > 26) {
                    maleCount = 1;
                }
                photoPath = "http://static.infragistics.com/xplatform/images/people/GUY" + this.pad(maleCount, 2) + ".png";
            }
            else {
                femaleCount++;
                if (femaleCount > 24) {
                    femaleCount = 1;
                }
                photoPath = "http://static.infragistics.com/xplatform/images/people/GIRL" + this.pad(femaleCount, 2) + ".png";
            }

            let person: any = {};
            person.Address = street + "," + location.city;
            person.Age = age;
            person.Birthday = this.getBirthday(age);
            person.City = location.city;
            person.Country = location.country;
            person.Location = location.city + ", " + location.country;
            person.Latitude = location.lat;
            person.Longitude = location.lon;
            person.CountryFlag = "http://static.infragistics.com/xplatform/images/flags/" + location.country + ".png";
            person.Email = email;
            person.FirstName = firstName;
            person.Gender = "http://static.infragistics.com/xplatform/images/genders/" + gender + ".png",
            person.Generation = generation;
            person.ID = this.pad(i + 1, 5);
            person.LastName = lastName;
            person.Name = firstName + " " + lastName;
            person.Phone = this.getRandomPhone();
            person.Productivity = this.getProductivity(26);
            person.Photo = photoPath;
            person.Street = street;

            person.Salary = this.getRandomNumber(40, 200) * 1000;
            person.Sales = this.getRandomNumber(200, 990) * 1000;
            if (person.Salary < 50000) {
                person.Income = "Low";
            } else if (person.Salary < 100000) {
                person.Income = "Average";
            } else {
                person.Income = "High";
            }

            contacts.push(person);
        }
        return contacts;
    }

    public static getProductivity(weekCount?: number): any[] {
        if (weekCount === undefined) {
            weekCount = 52;
        }
        const months = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];

        const sales: any[] = [];
        let value = 50;
        for (const month of months) {
            sales.push({Value: value, Month: month});
            value += this.getRandomNumber(-5, 10);
            value = Math.max(20, value);
        }
        // const today: Date = new Date();
        // const year: number = today.getFullYear();

        // for (let day = 0; day < 365; day++) {
        //     const value = this.getRandomNumber(-100, 100);

        //     const month: number = this.getRandomNumber(0, 8);
        //     // const day: number = this.getRandomNumber(10, 27);
        //     //     const date = new Date(year, month, day);

        //     sales.push({Value: value, Month: month});
        // }
        // for (let w = 0; w < weekCount; w++) {
        //     const value = this.getRandomNumber(-100, 100);
        //     sales.push({Value: value, Week: w.toString()});
        // }
        return sales;
    }

    public static getSales(count?: number): any[] {
        if (count === undefined) {
            count = 250;
        }

        const names: string[] = [
            "Intel CPU", "AMD CPU",
            "Intel Motherboard", "AMD Motherboard", "NVIDIA Motherboard",
            "NVIDIA GPU", "GIGABYTE GPU", "Asus GPU", "AMD GPU", "MSI GPU",
            "Corsair Memory", "Patriot Memory", "Skill Memory",
            "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD",
            "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD",
            "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor" ];
        const countries: string[] = ["USA", "UK", "France", "Canada", "Poland", "Japan", "Germany"];

        const sales: any[] = [];

        for (let i = 0; i < count; i++) {
            const price = this.getRandomNumber(100, 900);
            const items = this.getRandomNumber(10, 80);
            const value = price * items;
            const margin = this.getRandomNumber(3, 10);
            const profit = Math.round((price * margin / 100) * items);
            sales.push({
                BundlePrice: price,
                Margin: margin,
                OrderDate: this.getRandomDate(new Date(2012, 0, 1), new Date()),
                OrderItems: items,
                OrderValue: value, //  Math.round(value / 1000) + "," + Math.round(value % 1000),
                ProductID: 1001 + i,
                ProductName: this.getRandomItem(names),
                Profit: profit,
                Countries: this.getRandomItem(countries),
            });
        }
        return sales;
    }

    private static genders: string[] = ["male", "female"];
    private static maleNames: string[] = ["Kyle", "Oscar", "Ralph", "Mike", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce"];
    private static femaleNames: string[] = ["Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally"];
    private static lastNames: string[] = ["Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "Betts", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Newberry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adama", "Power", "Tesla"];
    // private static countries: string[] = ["USA", "UK", "France", "Canada", "Poland"];
    // private static citiesUS: string[] = ["New York", "Los Angeles", "Miami", "San Francisco", "San Diego", "Las Vegas"];
    // private static citiesUK: string[] = ["London", "Liverpool", "Manchester"];
    // private static citiesFR: string[] = ["Paris", "Marseille", "Lyon"];
    // private static citiesCA: string[] = ["Toronto", "Vancouver", "Montreal"];
    // private static citiesPL: string[] = ["Krakow", "Warsaw", "Wroclaw", "Gdansk"];
    // private static citiesJP: string[] = ["Tokyo", "Osaka", "Kyoto", "Yokohama"];
    // private static citiesGR: string[] = ["Berlin", "Bonn", "Cologne", "Munich", "Hamburg"];
    private static roadSuffixes: string[] = ["Road", "Street", "Way"];
    private static roadNames: string[] = ["Main", "Garden", "Broad", "Oak", "Cedar", "Park", "Pine", "Elm", "Market", "Hill"];

    private static locations: any[] = [
        { lat: 54.689, lon: 25.276, country: "Lithuania", city: "Vilnius" },
        { lat: 53.900, lon: 27.576, country: "Belarus", city: "Minsk" },
        { lat: 53.342, lon: -6.257, country: "Ireland", city: "Dublin" },
        { lat: 52.516, lon: 13.328, country: "Germany", city: "Berlin" },
        { lat: 52.373, lon: 4.895, country: "Netherlands", city: "Amsterdam" },
        { lat: 52.245, lon: 21.012, country: "Poland", city: "Warsaw" },
        { lat: 51.488, lon: -0.178, country: "UK", city: "London" },
        // { lat: 50.837, lon: 4.368, country: "Belgium", city: "Bruxelles" },
        { lat: 50.448, lon: 30.502, country: "Ukraine", city: "Kiev" },
        { lat: 50.106, lon: 14.457, country: "Czech-Republic", city: "Prague" },
        { lat: 48.882, lon: 2.433, country: "France", city: "Paris" },
        // { lat: 48.202, lon: 16.321, country: "Austria", city: "Vienna" },
        // { lat: 47.929, lon: 106.912, country: "Mongolia", city: "Ulaanbaatar" },
        { lat: 47.515, lon: 19.094, country: "Hungary", city: "Budapest" },
        { lat: 46.948, lon: 7.446, country: "Switzerland", city: "Bern" },
        { lat: 45.374, lon: -75.651, country: "Canada", city: "Ottawa" },
        // { lat: 44.800, lon: 20.413, country: "Serbia", city: "Beograd" },
        // { lat: 44.430, lon: 26.123, country: "Romania", city: "Bucuresti" },
        { lat: 43.255, lon: 76.913, country: "Kazakhstan", city: "Almaty" },
        { lat: 42.707, lon: 23.332, country: "Bulgaria", city: "Sofia" },
        { lat: 41.722, lon: 44.783, country: "Georgia", city: "Tbilisi" },
        // { lat: 41.332, lon: 19.832, country: "Albania", city: "Tirane" },
        { lat: 40.442, lon: -3.691, country: "Spain", city: "Madrid" },
        // { lat: 40.324, lon: 49.816, country: "Azerbaijan", city: "Baku" },
        // { lat: 40.208, lon: 44.533, country: "Armenia", city: "Yerevan" },
        { lat: 39.929, lon: 32.853, country: "Turkey", city: "Ankara" },
        { lat: 39.906, lon: 116.388, country: "China", city: "Beijing" },
        { lat: 39.029, lon: 125.758, country: "Korea-North", city: "Pyongyang" },
        { lat: 38.891, lon: -76.954, country: "USA", city: "Washington" },
        { lat: 37.950, lon: 58.390, country: "Turkmenistan", city: "Ashkhabad" },
        { lat: 37.542, lon: 126.935, country: "Korea-South", city: "Seoul" },
        { lat: 36.819, lon: 10.166, country: "Tunisia", city: "Tunis" },
        { lat: 35.774, lon: 51.448, country: "Iran", city: "Tehran" },
        { lat: 35.683, lon: 139.809, country: "Japan", city: "Tokyo" },
        { lat: 34.531, lon: 69.137, country: "Afghanistan", city: "Kabul" },
        { lat: 33.718, lon: 73.061, country: "Pakistan", city: "Islamabad" },
        { lat: 33.519, lon: 36.313, country: "Syria", city: "Damascus" },
        { lat: 33.334, lon: 44.398, country: "Iraq", city: "Baghdad" },
        { lat: 31.949, lon: 35.933, country: "Jordan", city: "Amman" },
        { lat: 30.078, lon: 31.251, country: "Egypt", city: "Cairo" },
        { lat: 28.569, lon: 77.217, country: "India", city: "New Delhi" },
        { lat: 27.712, lon: 85.313, country: "Nepal", city: "Kathmandu" },
        // { lat: 27.443, lon: 89.667, country: "Bhutan", city: "Thimbu" },
        { lat: 25.204, lon: 51.497, country: "Qatar", city: "Doha" },
        { lat: 25.035, lon: 121.507, country: "Taiwan", city: "Taipei" },
        { lat: 23.710, lon: 90.407, country: "Bangladesh", city: "Dhaka" },
        { lat: 21.032, lon: 105.820, country: "Vietnam", city: "Hanoi" },
        { lat: 19.427, lon: -99.128, country: "Mexico", city: "Mexico City" },
        { lat: 18.527, lon: -72.343, country: "Haiti", city: "Port-au-Prince" },
        // { lat: 18.401, lon: -66.082, country: "USA", city: "San Juan" },
        { lat: 18.016, lon: -76.797, country: "Jamaica", city: "Kingston" },
        { lat: 16.872, lon: 96.125, country: "Myanmar", city: "Rangoon" },
        { lat: 15.361, lon: 44.210, country: "Yemen", city: "Sanaa" },
        { lat: 14.618, lon: -90.525, country: "Guatemala", city: "Guatemala" },
        { lat: 14.099, lon: -87.203, country: "Honduras", city: "Tegucigalpa" },
        { lat: 13.746, lon: 100.553, country: "Thailand", city: "Bangkok" },
        // { lat: 13.701, lon: -89.200, country: "El-Salvador", city: "San Salvador" },
        { lat: 13.605, lon: 2.083, country: "Niger", city: "Niamey" },
        { lat: 12.653, lon: -7.986, country: "Mali", city: "Bamako" },
        { lat: 12.151, lon: -86.273, country: "Nicaragua", city: "Managua" },
        // { lat: 11.565, lon: 104.913, country: "Cambodia", city: "Phnom Penh" },
        { lat: 10.496, lon: -66.898, country: "Venezuela", city: "Caracas" },
        { lat: 9.930, lon: -84.079, country: "Costa-Rica", city: "San Jose" },
        { lat: 5.559, lon: -0.201, country: "Ghana", city: "Accra" },
        { lat: 5.325, lon: -4.022, country: "Ivory-Coast", city: "Abidjan" },
        { lat: 4.630, lon: -74.081, country: "Colombia", city: "Bogota" },
        // { lat: 4.366, lon: 18.562, country: "Central-African-Republic", city: "Bangui" },
        { lat: 3.865, lon: 11.514, country: "Cameroon", city: "Yaounde" },
        // { lat: 3.150, lon: 101.708, country: "Malaysia", city: "Kuala Lumpur" },
        // { lat: 2.041, lon: 45.344, country: "Somalia", city: "Muqdisho" }
    ]

    private static getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    private static getRandomItem(array: any[]): any {
        const index = Math.round(this.getRandomNumber(0, array.length - 1));
        return array[index];
    }

    private static getRandomDate(start: Date, end: Date) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    private static getRandomPhone(): string {
        const phoneCode = this.getRandomNumber(100, 900);
        const phoneNum1 = this.getRandomNumber(100, 900);
        const phoneNum2 = this.getRandomNumber(1000, 9000);
        const phone = phoneCode + "-" + phoneNum1 + "-" + phoneNum2;
        return phone;
    }

    private static getRandomGender(): string {
        return this.getRandomItem(this.genders);
    }

    private static getRandomNameLast(): string {
        return this.getRandomItem(this.lastNames);
    }

    private static getRandomNameFirst(gender: string): string {
        if (gender === "male") {
            return this.getRandomItem(this.maleNames);
        }
        else {
            return this.getRandomItem(this.femaleNames);
        }
    }

    // private static getRandomCity(country: string): string {
    //     if (country === "Canada") {
    //         return this.getRandomItem(this.citiesCA);
    //     } else if (country === "France") {
    //         return this.getRandomItem(this.citiesFR);
    //     } else if (country === "Poland") {
    //         return this.getRandomItem(this.citiesPL);
    //     } else if (country === "USA") {
    //         return this.getRandomItem(this.citiesUS);
    //     } else if (country === "Japan") {
    //         return this.getRandomItem(this.citiesJP);
    //     } else if (country === "Germany") {
    //         return this.getRandomItem(this.citiesGR);
    //     } else { // if (country === "United Kingdom") {
    //         return this.getRandomItem(this.citiesUK);
    //     }
    // }

    private static getRandomStreet(): string {
        const num = Math.round(this.getRandomNumber(100, 300)).toString();
        const road = this.getRandomItem(this.roadNames);
        const suffix = this.getRandomItem(this.roadSuffixes);
        return num + " " + road + " " + suffix;
    }

    private static getBirthday(age: number): Date {
        const today: Date = new Date();
        const year: number = today.getFullYear() - age;
        const month: number = this.getRandomNumber(0, 8);
        const day: number = this.getRandomNumber(10, 27);
        return new Date(year, month, day);
    }

    // private static getPhotoMale(id: number): string {
    //     return require('./assets/GUY' + this.pad(id, 2) + '.png');
    // }

    // private static getPhotoFemale(id: number): string {
    //     return require('./assets/GIRL' + this.pad(id, 2) + '.png');
    // }

    // private static getGenderPhoto(gender: string): string {
    //     return require('./genders/' + gender + '.png');
    // }

    // private static getCountryFlag(country: string): string {
    //     return require('./flags/' + country + '.png');
    // }

    private static pad(num: number, size: number) {
        let s = num + "";
        while (s.length < size) {
            s = "0" + s;
        }
        return s;
    }

}