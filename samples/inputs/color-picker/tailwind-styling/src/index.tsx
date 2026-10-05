import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrButton,
  IgrCard,
  IgrCardContent,
  IgrChip,
  IgrColorPicker,
  IgrIconButton,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

const refreshIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08a5.99 5.99 0 0 1-5.65 4c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>';

const defaults = {
  background: "#1a314a",
  text: "#e5ebf3",
  accent: "#f9592a",
  border: "#00142b",
};

const pickerClassName =
  "!light-color-picker [--ig-color-picker-picker-background:#FFF0EB] [--ig-color-picker-picker-border-color:#F95924] [--ig-color-picker-picker-border-radius:0.5rem]";

export default function ColorPickerTailwindStyling() {
  const cardRef = useRef<HTMLElement>(null);
  const [background, setBackground] = useState(defaults.background);
  const [text, setText] = useState(defaults.text);
  const [accent, setAccent] = useState(defaults.accent);
  const [border, setBorder] = useState(defaults.border);

  useEffect(() => {
    registerIconFromText("refresh", refreshIcon, "material");
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    card?.style.setProperty("--preview-bg", background);
    card?.style.setProperty("--preview-text", text);
    card?.style.setProperty("--preview-accent", accent);
    card?.style.setProperty("--preview-border", border);
  }, [background, text, accent, border]);

  const resetTheme = () => {
    setBackground(defaults.background);
    setText(defaults.text);
    setAccent(defaults.accent);
    setBorder(defaults.border);
  };

  return (
    <div className="sample">
      <div className="theme-editor">
        <div className="theme-editor-header">
          <div>
            <h2>Theme Editor</h2>
            <p>Use the pickers to style the card.</p>
          </div>
          <IgrIconButton
            id="resetTheme"
            name="refresh"
            collection="material"
            variant="flat"
            onClick={resetTheme}
          />
        </div>
        <div className="swatches">
          <div className="swatch-item">
            <IgrColorPicker
              className={pickerClassName}
              id="bgPicker"
              value={background}
              label="Background"
              onInput={(e: CustomEvent<string>) => setBackground(e.detail)}
            >
              <span slot="helper-text">Card surface color</span>
            </IgrColorPicker>
          </div>
          <div className="swatch-item">
            <IgrColorPicker
              className={pickerClassName}
              id="textPicker"
              value={text}
              size="small"
              label="Text"
              onInput={(e: CustomEvent<string>) => setText(e.detail)}
            >
              <span slot="helper-text" className="swatch-hint">
                Body &amp; heading color
              </span>
            </IgrColorPicker>
          </div>
          <div className="swatch-item">
            <IgrColorPicker
              className={pickerClassName}
              id="accentPicker"
              value={accent}
              size="small"
              label="Accent"
              onInput={(e: CustomEvent<string>) => setAccent(e.detail)}
            >
              <span slot="helper-text" className="swatch-hint">
                Button &amp; tag color
              </span>
            </IgrColorPicker>
          </div>
          <div className="swatch-item">
            <IgrColorPicker
              className={pickerClassName}
              id="borderPicker"
              value={border}
              size="small"
              label="Border"
              onInput={(e: CustomEvent<string>) => setBorder(e.detail)}
            >
              <span slot="helper-text" className="swatch-hint">
                Card edge color
              </span>
            </IgrColorPicker>
          </div>
          <div className="swatch-item disabled">
            <IgrColorPicker
              className={pickerClassName}
              disabled={true}
              value="#7d91ab"
              size="small"
              label="Shadow (Pro)"
            >
              <span slot="helper-text" className="swatch-hint">
                Upgrade to unlock
              </span>
            </IgrColorPicker>
          </div>
        </div>
        <IgrCard ref={cardRef as any}>
          <IgrCardContent>
            <IgrChip>Design</IgrChip>
            <h3 id="previewTitle">Color Picker in Practice</h3>
            <p id="previewText">
              Pick colors above to see them applied live across every element of this
              card.
            </p>
            <div className="preview-actions">
              <IgrButton id="readMoreBtn" variant="contained">Read more</IgrButton>
              <IgrButton id="saveBtn" variant="outlined">Save</IgrButton>
            </div>
          </IgrCardContent>
        </IgrCard>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerTailwindStyling />);
