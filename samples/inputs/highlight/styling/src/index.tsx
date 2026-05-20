import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrInput, IgrHighlight, IgrDivider, IgrIconButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

export default class HighlightStyling extends React.Component<any, any> {
  private highlightRef = React.createRef<IgrHighlight>();

  constructor(props: any) {
    super(props); 
  }

  private onInput = ({ detail }: CustomEvent<string>) => {
    if (!this.highlightRef) return;
    this.highlightRef.current.searchText = detail;
  };

  private prev = () => {
    this.highlightRef?.current.previous({preventScroll: true});
  };

  private next = () => {
    this.highlightRef?.current.next({preventScroll: true});
  };

  public render(): JSX.Element {
    return (
      <div className="sample">
      <div>
        <IgrInput label="Search" onigcInput={this.onInput as any}>
          <IgrIconButton onClick={this.prev} id="prev-btn" variant="flat" name="navigate_before" collection="internal" slot="suffix"></IgrIconButton>
          <IgrIconButton onClick={this.next} id="next-btn" variant="flat" name="navigate_next" collection="internal" slot="suffix"></IgrIconButton>
        </IgrInput>
      </div>
      <IgrDivider></IgrDivider>
      <IgrHighlight search-text="ipsum" ref={this.highlightRef}>
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
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HighlightStyling/>);
