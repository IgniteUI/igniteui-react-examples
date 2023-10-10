import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrGridModule } from "igniteui-react-grids";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import { MarketData } from "./MarketData";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import {
  IgrChip,
  IgrChipModule,
  IgrComponentValueChangedEventArgs,
  IgrIcon,
  IgrIconButton,
  IgrInput,
} from "igniteui-react";

const mods: any[] = [IgrGridModule, IgrChipModule];
mods.forEach((m) => m.register());

const prevIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path></svg>";
const nextIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path></svg>";
const clearIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24' title='Clear'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>";

const data = new MarketData();

export default function Sample() {
  const gridRef = useRef<IgrGrid>(null);
  const clearIconRef = useRef<IgrIconButton>(null);
  const iconButtonPrevRef = useRef<IgrIconButton>(null);
  const caseSensitiveChipRef = useRef<IgrChip>(null);
  const exactMatchChipRef = useRef<IgrChip>(null);
  const iconButtonNextRef = useRef<IgrIconButton>(null);

  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (clearIconRef?.current) {
      clearIconRef.current.registerIconFromText(
        "clear",
        clearIconText,
        "material"
      );
    }
    if (iconButtonPrevRef?.current) {
      iconButtonPrevRef.current.registerIconFromText(
        "prev",
        prevIconText,
        "material"
      );
    }
    if (iconButtonNextRef?.current) {
      iconButtonNextRef.current.registerIconFromText(
        "next",
        nextIconText,
        "material"
      );
    }
  }, []);

  function handleOnSearchChange(input: IgrInput, event: IgrComponentValueChangedEventArgs) {
    setSearchText(event.detail);
  }

  function clearSearch() {
    setSearchText('');
    gridRef.current.clearSearch();
  }

  function prevSearch() {
    gridRef.current.findPrev(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
  }

  function nextSearch() {
    gridRef.current.findNext(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
  }

  function searchKeyDown(e: KeyboardEvent<HTMLElement>) {
    if (e.key === 'Enter') {
        e.preventDefault();
        gridRef.current.findNext(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        gridRef.current.findPrev(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
    }
  }

  return (
    <div className="container sample">
      <div className="container vertical">
        <div style={{ marginBottom: "1rem" }} onKeyDown={searchKeyDown}>
                <IgrInput name="searchBox" value={searchText} inputOcurred={handleOnSearchChange}>

            <div slot="prefix" key="prefix">
              <IgrIconButton
                key="clearIcon"
                ref={clearIconRef}
                variant="flat"
                name="clear"
                collection="material"
                clicked={clearSearch}
              ></IgrIconButton>
            </div>
            <div slot="suffix" key="chipSuffix">
              <IgrChip ref={caseSensitiveChipRef} key="caseSensitiveChip" selectable="true">
                <span key="caseSensitive">Case Sensitive</span>
              </IgrChip>
              <IgrChip ref={exactMatchChipRef} key="exactMatchChip" selectable="true">
                <span key="exactMatch">Exact Match</span>
              </IgrChip>
            </div>
            <div slot="suffix" key="buttonsSuffix">
              <IgrIconButton
                key="prevIconButton"
                ref={iconButtonPrevRef}
                variant="flat"
                name="prev"
                collection="material"
                clicked={prevSearch}
              ></IgrIconButton>
              <IgrIconButton
                key="nextIconButton"
                ref={iconButtonNextRef}
                variant="flat"
                name="next"
                collection="material"
                clicked={nextSearch}
              ></IgrIconButton>
            </div>
          </IgrInput>
        </div>
        <IgrGrid ref={gridRef} autoGenerate="false" allowFiltering="true" displayDensity="compact" data={data}>
            <IgrColumn field="IndustrySector" dataType="string" sortable="true"></IgrColumn>        
            <IgrColumn field="IndustryGroup" dataType="string" sortable="true"></IgrColumn>        
            <IgrColumn field="SectorType" dataType="string" sortable="true"></IgrColumn>        
            <IgrColumn field="KRD" dataType="number" sortable="true"></IgrColumn>        
            <IgrColumn field="MarketNotion" dataType="number" sortable="true"></IgrColumn>  
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
