import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTreeGrid, IgrColumn } from "igniteui-react-grids";
import { EmployeesFlatData } from "./EmployeesFlatData";
import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import {
  IgrChip,
  IgrComponentBoolValueChangedEventArgs,
  IgrComponentValueChangedEventArgs,
  IgrIconButton,
  IgrInput,
  registerIconFromText,
} from "igniteui-react";

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
  const [caseSensitiveSelected, setCaseSensitiveSelected] = useState<boolean>(false);
  const [exactMatchSelected, setExactMatchSelected] = useState<boolean>(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    registerIconFromText("search", searchIconText, "material");
    registerIconFromText("clear", clearIconText, "material");
    registerIconFromText("prev", prevIconText, "material");
    registerIconFromText("next", nextIconText, "material");
  }, []);

  const handleOnSearchChange = (event: IgrComponentValueChangedEventArgs) => {
    setSearchText(event.detail);
    gridRef.current.findNext(event.detail, caseSensitiveSelected, exactMatchSelected);
  }

  const clearSearch = () => {
    setSearchText('');
    gridRef.current.clearSearch();
  }

  const prevSearch = () => {
    gridRef.current.findPrev(searchText, caseSensitiveSelected, exactMatchSelected);
  }

  const nextSearch = () => {
    gridRef.current.findNext(searchText, caseSensitiveSelected, exactMatchSelected);
  }

  const searchKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
      e.preventDefault();
      gridRef.current.findNext(searchText, caseSensitiveSelected, exactMatchSelected);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      gridRef.current.findPrev(searchText, caseSensitiveSelected, exactMatchSelected);
    }
  }

  const handleCaseSensitiveChange = (event: IgrComponentBoolValueChangedEventArgs) => {
    setCaseSensitiveSelected(!caseSensitiveSelected);
    gridRef.current.findNext(searchText, event.detail, exactMatchSelected);
  }

  const handleExactMatchChange = (event: IgrComponentBoolValueChangedEventArgs) => {
    setExactMatchSelected(!exactMatchSelected);
    gridRef.current.findNext(searchText, caseSensitiveSelected, event.detail);
  }

  return (
    <div className="container sample">
      <div className="container vertical">
        <div style={{ marginBottom: "1rem" }} onKeyDown={searchKeyDown}>
          <IgrInput name="searchBox" value={searchText} onInput={handleOnSearchChange}>

            <div slot="prefix" key="prefix">
              {searchText.length === 0 ? (
                <IgrIconButton
                  key="searchIcon"
                  variant="flat"
                  name="search"
                  collection="material"
                ></IgrIconButton>
              ) : (
                <IgrIconButton
                  key="clearIcon"
                  variant="flat"
                  name="clear"
                  collection="material"
                  onClick={clearSearch}
                ></IgrIconButton>
              )}
            </div>

            <div slot="suffix" key="chipSuffix">
              <IgrChip key="caseSensitiveChip" selectable={true} onSelect={handleCaseSensitiveChange}>
                <span key="caseSensitive">Case Sensitive</span>
              </IgrChip>
              <IgrChip key="exactMatchChip" selectable={true} onSelect={handleExactMatchChange}>
                <span key="exactMatch">Exact Match</span>
              </IgrChip>
            </div>
            <div slot="suffix" key="buttonsSuffix">
              <IgrIconButton
                key="prevIconButton"
                variant="flat"
                name="prev"
                collection="material"
                onClick={prevSearch}
              ></IgrIconButton>
              <IgrIconButton
                key="nextIconButton"
                variant="flat"
                name="next"
                collection="material"
                onClick={nextSearch}
              ></IgrIconButton>
            </div>
          </IgrInput>
        </div>
        <IgrTreeGrid ref={gridRef} data={data} autoGenerate={false}
          primaryKey="ID" foreignKey="ParentID" allowFiltering={true} height="100%" width="100%"
        >
          <IgrColumn field="Name" dataType="string" sortable={true}></IgrColumn>
          <IgrColumn field="ID" dataType="number" sortable={true}></IgrColumn>
          <IgrColumn field="Title" dataType="string" sortable={true}></IgrColumn>
          <IgrColumn field="Age" dataType="number" sortable={true}></IgrColumn>
          <IgrColumn field="HireDate" dataType="date" sortable={true}></IgrColumn>
        </IgrTreeGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
