import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import NwindData from "./NwindData.json";
import {
  IgrColumn,
  IgrGrid,
  IgrGridToolbar,
  IgrGridToolbarTitle,
  registerI18n,
  setCurrentI18n,
} from "igniteui-react-grids/grids";
import { IgrSelect, IgrSelectItem } from "igniteui-react";

import {
  ResourceStringsBG,
  ResourceStringsCS,
  ResourceStringsDA,
  ResourceStringsDE,
  ResourceStringsES,
  ResourceStringsFR,
  ResourceStringsHU,
  ResourceStringsIT,
  ResourceStringsJA,
  ResourceStringsKO,
  ResourceStringsNB,
  ResourceStringsNL,
  ResourceStringsPL,
  ResourceStringsPT,
  ResourceStringsRO,
  ResourceStringsSV,
  ResourceStringsTR,
  ResourceStringsZHHANS,
  ResourceStringsZHHANT,
} from "igniteui-i18n-resources";

const GridLocalizationSample: React.FC = () => {
  const [locale, setLocale] = useState<string>("en");

  useEffect(() => {
    const partialCustomHindi = {
      grid_summary_count: "गणना",
      grid_summary_min: "न्यून",
      grid_summary_max: "अधिक",
      grid_summary_sum: "योग",
      grid_summary_average: "औसत",
    };

    registerI18n(ResourceStringsBG, "bg");
    registerI18n(ResourceStringsCS, "cs");
    registerI18n(ResourceStringsDA, "da");
    registerI18n(ResourceStringsDE, "de");
    registerI18n(ResourceStringsES, "es");
    registerI18n(ResourceStringsFR, "fr");
    registerI18n(ResourceStringsHU, "hu");
    registerI18n(ResourceStringsIT, "it");
    registerI18n(ResourceStringsJA, "ja");
    registerI18n(ResourceStringsKO, "ko");
    registerI18n(ResourceStringsNB, "nb");
    registerI18n(ResourceStringsNL, "nl");
    registerI18n(ResourceStringsPL, "pl");
    registerI18n(ResourceStringsPT, "pt");
    registerI18n(ResourceStringsRO, "ro");
    registerI18n(ResourceStringsSV, "sv");
    registerI18n(ResourceStringsTR, "tr");
    registerI18n(ResourceStringsZHHANS, "zh-Hans");
    registerI18n(ResourceStringsZHHANT, "zh-Hant");
    registerI18n(partialCustomHindi, "hi");

    setCurrentI18n(locale);
  }, [locale]);

  return (
    <div style={{ height: "700px", padding: "1rem" }}>
      <IgrGrid
        data={NwindData}
        autoGenerate={false}
        allowFiltering={true}
        rowEditable={true}
        primaryKey="ProductID"
        height="700px"
        width="100%"
        locale={locale}
      >
        <IgrGridToolbar>
        <IgrGridToolbarTitle>Grid with Localization</IgrGridToolbarTitle>
            <IgrSelect
                value={locale}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLocale(e.target.value)}
            >
                <IgrSelectItem value="hi"><span>HI</span></IgrSelectItem>
                <IgrSelectItem value="bg"><span>BG</span></IgrSelectItem>
                <IgrSelectItem value="cs"><span>CS</span></IgrSelectItem>
                <IgrSelectItem value="da"><span>DA</span></IgrSelectItem>
                <IgrSelectItem value="de"><span>DE</span></IgrSelectItem>
                <IgrSelectItem value="en"><span>EN</span></IgrSelectItem>
                <IgrSelectItem value="es"><span>ES</span></IgrSelectItem>
                <IgrSelectItem value="fr"><span>FR</span></IgrSelectItem>
                <IgrSelectItem value="hu"><span>HU</span></IgrSelectItem>
                <IgrSelectItem value="it"><span>IT</span></IgrSelectItem>
                <IgrSelectItem value="ja"><span>JA</span></IgrSelectItem>
                <IgrSelectItem value="ko"><span>KO</span></IgrSelectItem>
                <IgrSelectItem value="nb"><span>NB</span></IgrSelectItem>
                <IgrSelectItem value="nl"><span>NL</span></IgrSelectItem>
                <IgrSelectItem value="pl"><span>PL</span></IgrSelectItem>
                <IgrSelectItem value="pt"><span>PT</span></IgrSelectItem>
                <IgrSelectItem value="ro"><span>RO</span></IgrSelectItem>
                <IgrSelectItem value="sv"><span>SV</span></IgrSelectItem>
                <IgrSelectItem value="tr"><span>TR</span></IgrSelectItem>
                <IgrSelectItem value="zh-Hans">zh-Hans</IgrSelectItem>
                <IgrSelectItem value="zh-Hant">zh-Hant</IgrSelectItem>
            </IgrSelect>
        </IgrGridToolbar>

        <IgrColumn field="ProductName" header="Product Name" groupable />
        <IgrColumn
          field="QuantityPerUnit"
          header="Quantity Per Unit"
          groupable
        />
        <IgrColumn
          field="UnitPrice"
          header="Unit Price"
          dataType="currency"
          sortable={true}
          hasSummary={true}
          groupable={true}
        />
        <IgrColumn
          field="OrderDate"
          header="Order Date"
          dataType="date"
          groupable={true}
        />
        <IgrColumn
          field="Discontinued"
          header="Discontinued"
          dataType="boolean"
          groupable={true}
        />
      </IgrGrid>
    </div>
  );
};

export default GridLocalizationSample;

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GridLocalizationSample />);
