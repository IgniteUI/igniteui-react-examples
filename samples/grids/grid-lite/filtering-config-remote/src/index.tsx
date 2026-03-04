import React from "react";
import ReactDOM from "react-dom/client";
import { GridLiteDataService, User } from "./GridLiteDataService";
import { IgrCheckbox, IgrCircularProgress } from "igniteui-react";
import {
  IgrGridLite,
  IgrGridLiteColumn,
  type IgrCellContext,
} from "igniteui-react/grid-lite";

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

function groupBy<T extends object>(arr: T[], key: keyof T) {
  const out: Record<string, T[]> = {};
  for (const each of arr) {
    const slot = each[key] as string;
    if (!out[slot]) {
      out[slot] = [];
    }
    out[slot].push(each);
  }
  return out;
}

const mapExpressions = (arr: any[]) => {
  return arr
    .map(({ searchTerm, criteria, condition }: any, idx: number) => {
      const normalizedSearchTerm = !searchTerm ? condition.name : searchTerm;
      return idx < 1
        ? `${condition.name}("${normalizedSearchTerm}")`
        : `${criteria?.toUpperCase()} ${condition.name}("${normalizedSearchTerm}")`;
    })
    .join(' ');
};

const buildUri = (state: any[], setQueryString: (qs: string) => void) => {
  const out: string[] = [];
  const qs = groupBy(state, 'key');
  for (const [key, exprs] of Object.entries(qs)) {
    out.push(`${key}(${mapExpressions(exprs)})`);
  }
  setQueryString(`GET: /data?filter=${out.join('&')}`);
};

const activeCellTemplate = (ctx: IgrCellContext) => (
  <IgrCheckbox checked={ctx.value}></IgrCheckbox>
);

export default function Sample() {
  const [data, setData] = React.useState<User[]>([]);
  const [queryString, setQueryString] = React.useState("");
  const [inOperation, setInOperation] = React.useState(false);

  const dataPipelineConfiguration = React.useMemo(
    () => ({
      filter: async ({ data, grid }: any) => {
        setInOperation(true);
        buildUri(grid.filterExpressions, setQueryString);
        await new Promise((resolve) => setTimeout(resolve, 250));
        setInOperation(false);
        return data;
      },
    }),
    [],
  );

  React.useEffect(() => {
    const dataService = new GridLiteDataService();
    const allData: User[] = dataService.generateUsers(500);
    setData(allData);
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <div>
          <h5>Generated request</h5>
          <p>
            <code>{queryString}</code>
          </p>
        </div>
        <section className="grid-section">
          <IgrGridLite
            id="grid-lite"
            data={data}
            dataPipelineConfiguration={dataPipelineConfiguration}
          >
            <IgrGridLiteColumn
              field="firstName"
              header="First Name"
              filterable
            ></IgrGridLiteColumn>
            <IgrGridLiteColumn
              field="lastName"
              header="Last Name"
              filterable
            ></IgrGridLiteColumn>
            <IgrGridLiteColumn
              field="age"
              header="Age"
              filterable
              dataType="number"
            ></IgrGridLiteColumn>
            <IgrGridLiteColumn
              field="active"
              header="Active"
              dataType="boolean"
              filterable
              cellTemplate={activeCellTemplate}
            ></IgrGridLiteColumn>
          </IgrGridLite>
        </section>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sample />);
