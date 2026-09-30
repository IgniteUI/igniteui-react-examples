import { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { IgrInput, IgrHighlight, IgrIconButton, IgrDivider, IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function HighlightHelperText() {
  const highlightRef = useRef<IgrHighlight>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);

  function updateStatus() {
    const highlight = highlightRef.current;
    const status = statusRef.current;
    if (!highlight || !status) { return; }

    status.textContent = highlight.size
      ? `${highlight.current + 1} of ${highlight.size} match${highlight.size === 1 ? '' : 'es'}`
      : '';
  }

  function onInput({ detail }: CustomEvent<string>) {
    if (!highlightRef.current) { return; }
    highlightRef.current.searchText = detail;
    updateStatus();
  }

  function prev() {
    highlightRef.current?.previous({preventScroll: true});
    updateStatus();
  }

  function next() {
    highlightRef.current?.next({preventScroll: true});
    updateStatus();
  }

  return (
    <div className="sample">
      <div className="search-bar">
        <IgrInput label="Search" onInput={onInput}>
          <IgrIconButton variant="flat" name="navigate_before" collection="internal" slot="suffix" onClick={prev}></IgrIconButton>
          <IgrIconButton variant="flat" name="navigate_next" collection="internal" slot="suffix" onClick={next}></IgrIconButton>
          <p ref={statusRef} slot="helper-text"></p>
        </IgrInput>
      </div>
      <IgrDivider></IgrDivider>
      <IgrHighlight ref={highlightRef}>
        <h1>Document Object Model</h1>
        <IgrExpansionPanel open>
          <h2 slot="title">Overview</h2>
          <section>
            <p>
              The Document Object Model (DOM) is a cross-platform and
              language-independent interface that treats an HTML or XML document
              as a tree structure wherein each node is an object representing a
              part of the document. The DOM represents a document with a logical
              tree. Each branch of the tree ends in a node, and each node
              contains objects. DOM methods allow programmatic access to the
              tree; with them one can change the structure, style or content of
              a document. Nodes can have event handlers (also known as event
              listeners) attached to them. Once an event is triggered, the event
              handlers get executed.
            </p>
            <p>
              The principal standardization of the DOM was handled by the World
              Wide Web Consortium (W3C), which last developed a recommendation
              in 2004. WHATWG took over the development of the standard,
              publishing it as a living document. The W3C now publishes stable
              snapshots of the WHATWG standard.
            </p>
            <p>In HTML DOM (Document Object Model), every element is a node:</p>
            <ul>
              <li>A document is a document node.</li>
              <li>All HTML elements are element nodes.</li>
              <li>All HTML attributes are attribute nodes.</li>
              <li>Text inserted into HTML elements are text nodes.</li>
              <li>Comments are comment nodes.</li>
            </ul>
          </section>
        </IgrExpansionPanel>
      </IgrHighlight>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<HighlightHelperText/>);
