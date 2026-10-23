import { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { IgrInput, IgrHighlight, IgrDivider, IgrIconButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

export default function HighlightStyling() {
  const highlightRef = useRef<IgrHighlight>(null);

  function onInput({ detail }: CustomEvent<string>) {
    highlightRef.current!.searchText = detail;
  }

  function prev() {
    highlightRef.current!.previous({preventScroll: true});
  }

  function next() {
    highlightRef.current!.next({preventScroll: true});
  }

  return (
    <div className="sample">
    <div>
      <IgrInput label="Search" onInput={onInput}>
        <IgrIconButton onClick={prev} id="prev-btn" variant="flat" name="navigate_before" collection="internal" slot="suffix"></IgrIconButton>
        <IgrIconButton onClick={next} id="next-btn" variant="flat" name="navigate_next" collection="internal" slot="suffix"></IgrIconButton>
      </IgrInput>
    </div>
    <IgrDivider></IgrDivider>
    <IgrHighlight search-text="ipsum" ref={highlightRef}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae doloribus
        odit id excepturi ipsum provident eaque dignissimos beatae! Rerum vero
        distinctio libero, quasi magni quod natus nesciunt doloremque temporibus
        voluptate?
      </p>
    </IgrHighlight>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<HighlightStyling/>);
