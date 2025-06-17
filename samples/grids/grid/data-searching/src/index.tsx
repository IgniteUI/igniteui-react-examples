import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import { MarketData } from "./MarketData";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import {
  IgrChip,
  IgrComponentBoolValueChangedEventArgs,
  IgrComponentValueChangedEventArgs,
  IgrIconButton,
  IgrInput,
  IgrRipple,
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

const data = new MarketData();

export default function Sample() {
  const gridRef = useRef<IgrGrid>(null);
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
    nextSearch(event.detail, caseSensitiveSelected, exactMatchSelected);
  }

  const clearSearch = () => {
    setSearchText('');
    gridRef.current.clearSearch();
  }

  const searchKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextSearch(searchText, caseSensitiveSelected, exactMatchSelected);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSearch(searchText, caseSensitiveSelected, exactMatchSelected);
    }
  }

  const handleCaseSensitiveChange = (event: IgrComponentBoolValueChangedEventArgs) => {
    setCaseSensitiveSelected(event.detail);
    nextSearch(searchText, event.detail, exactMatchSelected);
  }

  const handleExactMatchChange = (event: IgrComponentBoolValueChangedEventArgs) => {
    setExactMatchSelected(event.detail);
    nextSearch(searchText, caseSensitiveSelected, event.detail);
  }

  const prevSearch = (text: string, caseSensitive: boolean, exactMatch: boolean) => {
    gridRef.current.findPrev(text, caseSensitive, exactMatch);
  }

  const nextSearch = (text: string, caseSensitive: boolean, exactMatch: boolean) => {
    gridRef.current.findNext(text, caseSensitive, exactMatch);
  }

  return (
    <div className="container sample">
      <div className="container vertical">
        <div style={{ marginBottom: "1rem" }} onKeyDown={searchKeyDown}>
          <IgrInput name="searchBox" value={searchText} onInput={handleOnSearchChange}>

            <div slot="prefix">
              {searchText.length === 0 ? (
                <IgrIconButton
                  variant="flat"
                  name="search"
                  collection="material"
                ></IgrIconButton>
              ) : (
                <IgrIconButton
                  variant="flat"
                  name="clear"
                  collection="material"
                  onClick={clearSearch}
                ></IgrIconButton>
              )}
            </div>

            <div slot="suffix">
              <IgrChip selectable={true} onSelect={handleCaseSensitiveChange}>
                <span>Case Sensitive</span>
              </IgrChip>
              <IgrChip selectable={true} onSelect={handleExactMatchChange}>
                <span>Exact Match</span>
              </IgrChip>
            </div>
            <div slot="suffix">
              <IgrIconButton
                variant="flat"
                name="prev"
                collection="material"
                onClick={() => prevSearch(searchText, caseSensitiveSelected, exactMatchSelected)}
              >
                <IgrRipple></IgrRipple>
              </IgrIconButton>
              <IgrIconButton
                variant="flat"
                name="next"
                collection="material"
                onClick={() => nextSearch(searchText, caseSensitiveSelected, exactMatchSelected)}
              >
                <IgrRipple></IgrRipple>
              </IgrIconButton>
            </div>
          </IgrInput>
        </div>
        <IgrGrid className="gridSize" ref={gridRef} autoGenerate={false} allowFiltering={true} data={data} height="100%" width="100%">
          <IgrColumn field="IndustrySector" dataType="string" sortable={true}></IgrColumn>
          <IgrColumn field="IndustryGroup" dataType="string" sortable={true}></IgrColumn>
          <IgrColumn field="SectorType" dataType="string" sortable={true}></IgrColumn>
          <IgrColumn field="KRD" dataType="number" sortable={true}></IgrColumn>
          <IgrColumn field="MarketNotion" dataType="number" sortable={true}></IgrColumn>
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
