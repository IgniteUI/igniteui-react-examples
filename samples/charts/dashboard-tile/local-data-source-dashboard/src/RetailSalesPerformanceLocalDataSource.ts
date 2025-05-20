//begin data

import { LocalDataSource } from "igniteui-react-core";

export class RetailSalesPerformanceLocalDataSource extends LocalDataSource {

  public constructor() {
    super();

    var data = [
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 694,
        "Revenue": 528828,
        "Profit": 105765.6
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Mop B",
        "UnitSales": 675,
        "Revenue": 382050,
        "Profit": 76410.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop C",
        "UnitSales": 671,
        "Revenue": 504592,
        "Profit": 100918.40000000001
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Wardrobe B",
        "UnitSales": 212,
        "Revenue": 54060,
        "Profit": 10812.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Blender A",
        "UnitSales": 181,
        "Revenue": 79821,
        "Profit": 15964.2
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Dresser C",
        "UnitSales": 434,
        "Revenue": 148428,
        "Profit": 29685.600000000002
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Desk A",
        "UnitSales": 441,
        "Revenue": 244314,
        "Profit": 48862.8
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Dresser C",
        "UnitSales": 429,
        "Revenue": 167739,
        "Profit": 33547.8
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Desk A",
        "UnitSales": 537,
        "Revenue": 516594,
        "Profit": 103318.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Broom C",
        "UnitSales": 439,
        "Revenue": 340225,
        "Profit": 68045.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Dryer B",
        "UnitSales": 338,
        "Revenue": 176774,
        "Profit": 35354.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Iron C",
        "UnitSales": 510,
        "Revenue": 380460,
        "Profit": 76092.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone A",
        "UnitSales": 882,
        "Revenue": 480690,
        "Profit": 96138.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Microwave B",
        "UnitSales": 504,
        "Revenue": 195048,
        "Profit": 39009.6
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Desk A",
        "UnitSales": 633,
        "Revenue": 243072,
        "Profit": 48614.4
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Broom C",
        "UnitSales": 772,
        "Revenue": 470148,
        "Profit": 94029.6
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet B",
        "UnitSales": 910,
        "Revenue": 413140,
        "Profit": 82628.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Dresser C",
        "UnitSales": 53,
        "Revenue": 48813,
        "Profit": 9762.6
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone C",
        "UnitSales": 741,
        "Revenue": 259350,
        "Profit": 51870.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 944,
        "Revenue": 607936,
        "Profit": 121587.20000000001
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Toaster C",
        "UnitSales": 644,
        "Revenue": 293020,
        "Profit": 58604.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet B",
        "UnitSales": 692,
        "Revenue": 405512,
        "Profit": 81102.40000000001
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Coffee Table B",
        "UnitSales": 378,
        "Revenue": 300888,
        "Profit": 60177.600000000006
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Bed A",
        "UnitSales": 717,
        "Revenue": 205779,
        "Profit": 41155.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Washing Machine",
        "UnitSales": 399,
        "Revenue": 83391,
        "Profit": 16678.2
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Dryer B",
        "UnitSales": 107,
        "Revenue": 55533,
        "Profit": 11106.6
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone A",
        "UnitSales": 853,
        "Revenue": 512653,
        "Profit": 102530.6
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Toaster C",
        "UnitSales": 830,
        "Revenue": 392590,
        "Profit": 78518.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone C",
        "UnitSales": 527,
        "Revenue": 463760,
        "Profit": 92752.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Toaster C",
        "UnitSales": 847,
        "Revenue": 579348,
        "Profit": 115869.6
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "TV Stand C",
        "UnitSales": 692,
        "Revenue": 382676,
        "Profit": 76535.2
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop A",
        "UnitSales": 799,
        "Revenue": 288439,
        "Profit": 57687.8
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Coffee Table B",
        "UnitSales": 764,
        "Revenue": 374360,
        "Profit": 74872.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "TV Stand C",
        "UnitSales": 263,
        "Revenue": 88894,
        "Profit": 17778.8
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Bed A",
        "UnitSales": 784,
        "Revenue": 254800,
        "Profit": 50960.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Dryer B",
        "UnitSales": 958,
        "Revenue": 695508,
        "Profit": 139101.6
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop B",
        "UnitSales": 528,
        "Revenue": 209616,
        "Profit": 41923.200000000004
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop B",
        "UnitSales": 499,
        "Revenue": 257983,
        "Profit": 51596.600000000006
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Bookshelf C",
        "UnitSales": 385,
        "Revenue": 346500,
        "Profit": 69300.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone A",
        "UnitSales": 388,
        "Revenue": 84972,
        "Profit": 16994.4
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Dryer B",
        "UnitSales": 347,
        "Revenue": 99936,
        "Profit": 19987.2
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Bookshelf C",
        "UnitSales": 337,
        "Revenue": 252413,
        "Profit": 50482.600000000006
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop B",
        "UnitSales": 985,
        "Revenue": 246250,
        "Profit": 49250.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "TV Stand C",
        "UnitSales": 881,
        "Revenue": 870428,
        "Profit": 174085.6
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Wardrobe B",
        "UnitSales": 508,
        "Revenue": 325628,
        "Profit": 65125.600000000006
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Chair B",
        "UnitSales": 87,
        "Revenue": 85347,
        "Profit": 17069.4
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Dresser C",
        "UnitSales": 86,
        "Revenue": 50740,
        "Profit": 10148.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop B",
        "UnitSales": 699,
        "Revenue": 320142,
        "Profit": 64028.4
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 57,
        "Revenue": 12483,
        "Profit": 2496.6000000000004
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet C",
        "UnitSales": 65,
        "Revenue": 15860,
        "Profit": 3172.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Sofa A",
        "UnitSales": 67,
        "Revenue": 39396,
        "Profit": 7879.200000000001
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Sofa A",
        "UnitSales": 835,
        "Revenue": 617065,
        "Profit": 123413.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Wardrobe B",
        "UnitSales": 333,
        "Revenue": 115884,
        "Profit": 23176.800000000003
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop A",
        "UnitSales": 802,
        "Revenue": 737840,
        "Profit": 147568.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Sofa A",
        "UnitSales": 483,
        "Revenue": 318780,
        "Profit": 63756.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 586,
        "Revenue": 395550,
        "Profit": 79110.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "TV Stand C",
        "UnitSales": 971,
        "Revenue": 208765,
        "Profit": 41753.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Wardrobe B",
        "UnitSales": 464,
        "Revenue": 409248,
        "Profit": 81849.6
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet A",
        "UnitSales": 933,
        "Revenue": 880752,
        "Profit": 176150.40000000002
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Washing Machine",
        "UnitSales": 812,
        "Revenue": 614684,
        "Profit": 122936.8
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Coffee Table B",
        "UnitSales": 499,
        "Revenue": 398202,
        "Profit": 79640.40000000001
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Dryer B",
        "UnitSales": 376,
        "Revenue": 344040,
        "Profit": 68808.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet A",
        "UnitSales": 368,
        "Revenue": 354384,
        "Profit": 70876.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Broom C",
        "UnitSales": 539,
        "Revenue": 446831,
        "Profit": 89366.20000000001
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Sofa A",
        "UnitSales": 954,
        "Revenue": 221328,
        "Profit": 44265.600000000006
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet A",
        "UnitSales": 118,
        "Revenue": 69856,
        "Profit": 13971.2
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Washing Machine",
        "UnitSales": 839,
        "Revenue": 315464,
        "Profit": 63092.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Broom C",
        "UnitSales": 207,
        "Revenue": 42435,
        "Profit": 8487.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Chair B",
        "UnitSales": 604,
        "Revenue": 197508,
        "Profit": 39501.600000000006
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Bookshelf C",
        "UnitSales": 187,
        "Revenue": 171479,
        "Profit": 34295.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 709,
        "Revenue": 627465,
        "Profit": 125493.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone B",
        "UnitSales": 197,
        "Revenue": 51811,
        "Profit": 10362.2
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 374,
        "Revenue": 147356,
        "Profit": 29471.2
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Mop B",
        "UnitSales": 340,
        "Revenue": 82280,
        "Profit": 16456.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone C",
        "UnitSales": 538,
        "Revenue": 432014,
        "Profit": 86402.8
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Bed A",
        "UnitSales": 270,
        "Revenue": 126900,
        "Profit": 25380.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 161,
        "Revenue": 106743,
        "Profit": 21348.600000000002
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Washing Machine",
        "UnitSales": 571,
        "Revenue": 367724,
        "Profit": 73544.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Toaster C",
        "UnitSales": 425,
        "Revenue": 308975,
        "Profit": 61795.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Bookshelf C",
        "UnitSales": 100,
        "Revenue": 37200,
        "Profit": 7440.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Sofa A",
        "UnitSales": 1000,
        "Revenue": 886000,
        "Profit": 177200.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone A",
        "UnitSales": 202,
        "Revenue": 107464,
        "Profit": 21492.800000000003
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Microwave B",
        "UnitSales": 877,
        "Revenue": 182416,
        "Profit": 36483.200000000004
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet A",
        "UnitSales": 401,
        "Revenue": 247818,
        "Profit": 49563.600000000006
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Wardrobe B",
        "UnitSales": 830,
        "Revenue": 528710,
        "Profit": 105742.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet C",
        "UnitSales": 547,
        "Revenue": 136203,
        "Profit": 27240.600000000002
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop B",
        "UnitSales": 539,
        "Revenue": 343882,
        "Profit": 68776.40000000001
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Microwave B",
        "UnitSales": 334,
        "Revenue": 164996,
        "Profit": 32999.200000000004
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "TV Stand C",
        "UnitSales": 232,
        "Revenue": 180960,
        "Profit": 36192.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet C",
        "UnitSales": 448,
        "Revenue": 351680,
        "Profit": 70336.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone B",
        "UnitSales": 387,
        "Revenue": 279801,
        "Profit": 55960.200000000004
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Mop B",
        "UnitSales": 69,
        "Revenue": 49473,
        "Profit": 9894.6
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Toaster C",
        "UnitSales": 859,
        "Revenue": 359921,
        "Profit": 71984.2
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Chair B",
        "UnitSales": 322,
        "Revenue": 112056,
        "Profit": 22411.2
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet A",
        "UnitSales": 143,
        "Revenue": 54912,
        "Profit": 10982.400000000001
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop B",
        "UnitSales": 844,
        "Revenue": 642284,
        "Profit": 128456.8
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop A",
        "UnitSales": 735,
        "Revenue": 386610,
        "Profit": 77322.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone A",
        "UnitSales": 431,
        "Revenue": 125852,
        "Profit": 25170.4
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Sofa A",
        "UnitSales": 926,
        "Revenue": 623198,
        "Profit": 124639.6
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Broom C",
        "UnitSales": 117,
        "Revenue": 50193,
        "Profit": 10038.6
      }
    ];

    this.dataSource = data;
  }

}

//end data