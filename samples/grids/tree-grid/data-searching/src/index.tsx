import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrTreeGridModule } from "igniteui-react-grids";
import { IgrTreeGrid, IgrColumn } from "igniteui-react-grids";
import { EmployeesFlatData } from "./EmployeesFlatData";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import {
  IgrChip,
  IgrChipModule,
  IgrComponentBoolValueChangedEventArgs,
  IgrComponentValueChangedEventArgs,
  IgrIconButton,
  IgrIconButtonModule,
  IgrInput,
  IgrInputBase,
  IgrInputModule,
} from "igniteui-react";

const mods: any[] = [IgrTreeGridModule, IgrChipModule, IgrIconButtonModule, IgrInputModule];
mods.forEach((m) => m.register());

const searchIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' /></svg>";
const prevIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path></svg>";
const nextIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path></svg>";
const clearIconText =
  "<svg width='24' height='24' viewBox='0 0 24 24' title='Clear'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>";

const data = new EmployeesFlatData();

export default function Sample() {
  const gridRef = useRef<IgrTreeGrid>(null);
  const searchIconRef = useRef<IgrIconButton>(null);
  const clearIconRef = useRef<IgrIconButton>(null);
  const iconButtonNextRef = useRef<IgrIconButton>(null);
  const iconButtonPrevRef = useRef<IgrIconButton>(null);
  const caseSensitiveChipRef = useRef<IgrChip>(null);
  const exactMatchChipRef = useRef<IgrChip>(null);

  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (searchIconRef?.current) {
      searchIconRef.current.registerIconFromText("search", searchIconText, "material");
      searchIconRef.current.registerIconFromText("clear", clearIconText, "material");
    }
    if (iconButtonPrevRef?.current) {
      iconButtonPrevRef.current.registerIconFromText("prev", prevIconText,"material");
    }
    if (iconButtonNextRef?.current) {
      iconButtonNextRef.current.registerIconFromText("next", nextIconText, "material");
    }
  }, []);

  function handleOnSearchChange(input: IgrInputBase, event: IgrComponentValueChangedEventArgs) {
    setSearchText(event.detail);
    gridRef.current.findNext(event.detail, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
  }

  function handleCaseSensitiveChange(chip: IgrChip, event: IgrComponentBoolValueChangedEventArgs) {
    gridRef.current.findNext(searchText, event.detail, exactMatchChipRef.current.selected);
  }

  function handleExactMatchChange(chip: IgrChip, event: IgrComponentBoolValueChangedEventArgs) {
    gridRef.current.findNext(searchText, caseSensitiveChipRef.current.selected, event.detail);
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
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
        e.preventDefault();
        gridRef.current.findNext(searchText, caseSensitiveChipRef.current.selected, exactMatchChipRef.current.selected);
    } else if (e.key === 'ArrowUp') {
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
              {searchText.length === 0 ? (
                <IgrIconButton
                  key="searchIcon"
                  ref={searchIconRef} 
                  variant="flat"
                  name="search" 
                  collection="material"
                ></IgrIconButton>
              ) : (
                <IgrIconButton
                  key="clearIcon"
                  ref={clearIconRef}
                  variant="flat"
                  name="clear"
                  collection="material"
                  clicked={clearSearch}
                ></IgrIconButton>
              )}
            </div>
            
            <div slot="suffix" key="chipSuffix">
              <IgrChip ref={caseSensitiveChipRef} key="caseSensitiveChip" selectable="true" select={handleCaseSensitiveChange}>
                <span key="caseSensitive">Case Sensitive</span>
              </IgrChip>
              <IgrChip ref={exactMatchChipRef} key="exactMatchChip" selectable="true" select={handleExactMatchChange}>
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
        <IgrTreeGrid ref={gridRef} data={data} autoGenerate="false" 
          primaryKey="ID" foreignKey="ParentID" allowFiltering="true" height="100%" width="100%"
        >
          <IgrColumn field="Name" dataType="string" sortable="true"></IgrColumn>        
          <IgrColumn field="ID" dataType="number" sortable="true"></IgrColumn>        
          <IgrColumn field="Title" dataType="string" sortable="true"></IgrColumn>        
          <IgrColumn field="Age" dataType="number" sortable="true"></IgrColumn>        
          <IgrColumn field="HireDate" dataType="date" sortable="true"></IgrColumn>  
        </IgrTreeGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
