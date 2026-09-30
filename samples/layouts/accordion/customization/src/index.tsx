import { useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrAccordion,
  IgrCheckbox,
  IgrCheckboxChangeEventArgs,
  IgrDateTimeInput,
  IgrExpansionPanel,
  IgrIcon,
  IgrRadio,
  IgrRadioGroup,
  IgrRating,
  IgrRangeSlider,
  IgrRadioChangeEventArgs,
  IgrRangeSliderValueEventArgs,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

type Category = { checked: boolean; type: string };

const ratingOptions = [2, 3, 4, 5];

const initialCategories: Category[] = [
  { checked: false, type: "Bike" },
  { checked: false, type: "Motorcycle" },
  { checked: false, type: "Car" },
  { checked: false, type: "Taxi" },
  { checked: false, type: "Public Transport" },
];

const clearIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /></svg>";
const clockIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /></svg>";

registerIconFromText("clear", clearIcon, "material");
registerIconFromText("clock", clockIcon, "material");

export default function AccordionCustomization() {
  const dateTimeInputRef = useRef<IgrDateTimeInput>(null);
  const transportationPanelRef = useRef<IgrExpansionPanel>(null);

  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [cost, setCost] = useState({ lower: 200, upper: 800 });
  const [rating, setRating] = useState("");
  const [time, setTime] = useState("Any time");

  // Before paint, like componentDidMount: the panel must not flash closed.
  useLayoutEffect(() => {
    if (transportationPanelRef.current) {
      transportationPanelRef.current.open = true;
    }
  }, []);

  function categoriesChange(e: IgrCheckboxChangeEventArgs, type: string) {
    // New array so React re-renders the title
    setCategories((prev) =>
      prev.map((c) => (c.type === type ? { ...c, checked: e.detail.checked } : c))
    );
  }

  function costRangeChange(e: IgrRangeSliderValueEventArgs) {
    setCost({ lower: e.detail.lower, upper: e.detail.upper });
  }

  function ratingChange(e: IgrRadioChangeEventArgs) {
    if (!e.detail.value) {
      return;
    }
    setRating(`${+e.detail.value} star${
      +e.detail.value > 1 ? "s" : ""
    } or more`);
  }

  function timeChange(e: CustomEvent<Date | null>) {
    const s = e.target as IgrDateTimeInput;
    const result =
      s.value !== null
        ? e.detail!.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "Any time";
    setTime(result);
  }

  function clearTime() {
    dateTimeInputRef.current!.clear();
    setTime("Any time");
  }

  const selectedCategories = categories
    .filter((c: Category) => c.checked)
    .map((c: Category) => c.type)
    .join(", ");

  return (
    <div className="accordion-sample">
      <div className="accordion-content">
        <IgrAccordion>
          <IgrExpansionPanel ref={transportationPanelRef}>
            <span slot="title">
              Transportation{selectedCategories && `: ${selectedCategories}`}
            </span>
            <span slot="subtitle">Choose how you want to travel</span>
            <span>
              <p className="panel-description">
                Select one or more transportation options for your trip.
              </p>
              <div className="categories-container">
                {categories.map((c: Category) => {
                  return (
                    <IgrCheckbox
                      className="category-option"
                      key={"checkbox-" + c.type}
                      onChange={(e: IgrCheckboxChangeEventArgs) =>
                        categoriesChange(e, c.type)
                      }
                    >
                      <span>{c.type}</span>
                    </IgrCheckbox>
                  );
                })}
              </div>
            </span>
          </IgrExpansionPanel>
          <IgrExpansionPanel>
            <span slot="title">
              Budget: ${cost.lower} - ${cost.upper}
            </span>
            <span slot="subtitle">Set the price range</span>
            <span>
              <p className="panel-description">
                Adjust the minimum and maximum cost for available options.
              </p>
              <div className="range-summary">
                <span>${cost.lower}</span>
                <span>${cost.upper}</span>
              </div>
              <IgrRangeSlider
                className="cost-slider"
                min={0}
                max={1000}
                lower={cost.lower}
                upper={cost.upper}
                onChange={costRangeChange}
              ></IgrRangeSlider>
            </span>
          </IgrExpansionPanel>
          <IgrExpansionPanel>
            <span slot="title">
              Minimum Rating{rating && ": "}
              {rating}
            </span>
            <span slot="subtitle">Filter by review score</span>
            <span>
              <p className="panel-description">
                Choose the lowest rating you want to include in the results.
              </p>
              <IgrRadioGroup className="rating-options">
                {ratingOptions.map((rating) => {
                  return (
                    <IgrRadio
                      className="rating-option"
                      key={`${rating}star`}
                      name="rating"
                      value={rating.toString()}
                      onChange={ratingChange}
                    >
                      <IgrRating
                        label={`${rating} star${
                          rating > 1 ? "s" : ""
                        } or more`}
                        max={5}
                        value={rating}
                        className="rating-control size-small"
                        readOnly={true}
                      ></IgrRating>
                    </IgrRadio>
                  );
                })}
              </IgrRadioGroup>
            </span>
          </IgrExpansionPanel>
          <IgrExpansionPanel>
            <span slot="title">
              Arrival Time
              {time !== "Any time" && `: ${time}`}
            </span>
            <span slot="subtitle">Set the latest arrival time</span>
            <span>
              <p className="panel-description">
                Pick the latest acceptable arrival time for your trip.
              </p>
              <IgrDateTimeInput
                className="time-input size-small"
                inputFormat="hh:mm tt"
                label="Arrive before"
                ref={dateTimeInputRef}
                onChange={timeChange}
              >
                <span slot="prefix">
                  <IgrIcon name="clock" collection="material" />
                </span>
                <span slot="suffix" onClick={clearTime}>
                  <IgrIcon name="clear" collection="material" />
                </span>
              </IgrDateTimeInput>
            </span>
          </IgrExpansionPanel>
        </IgrAccordion>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<AccordionCustomization />);
