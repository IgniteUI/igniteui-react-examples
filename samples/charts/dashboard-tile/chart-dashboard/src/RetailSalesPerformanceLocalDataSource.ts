//begin data
export class RetailSalesPerformanceLocalDataSource extends LocalDataSource
{

    public constructor() {
        super();
		this.dataSource  = CodeGenHelper.findByName<any[]>("retailSalesPerformanceData");

    }

}

//end data