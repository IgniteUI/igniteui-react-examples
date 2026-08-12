import React from "react";
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
  IgrComponentDateValueChangedEventArgs,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

type Category = { checked: boolean; type: string };

const ratingOptions = [2, 3, 4, 5];

const clearIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /></svg>";
const clockIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /></svg>";

export default class AccordionCustomization extends React.Component<any, any> {
  private categories = [
    { checked: false, type: "Bike" },
    { checked: false, type: "Motorcycle" },
    { checked: false, type: "Car" },
    { checked: false, type: "Taxi" },
    { checked: false, type: "Public Transport" },
  ];

  private dateTimeInput: IgrDateTimeInput;

  constructor(props: any) {
    super(props);
    this.state = {
      categories: this.categories,
      cost: { lower: 200, upper: 800 },
      rating: "",
      time: "Any time",
    };

    this.categoriesChange = this.categoriesChange.bind(this);
    this.costRangeChange = this.costRangeChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.clearTime = this.clearTime.bind(this);
    this.dateTimeInputRef = this.dateTimeInputRef.bind(this);

    registerIconFromText("clear", clearIcon, "material");
    registerIconFromText("clock", clockIcon, "material");
  }

  public render(): JSX.Element {
    const selectedCategories = this.state.categories
      .filter((c: Category) => c.checked)
      .map((c: Category) => c.type)
      .join(", ");

    return (
      <div className="accordion-sample">
        <IgrAccordion>
          <IgrExpansionPanel open>
            <span slot="title">
              Transportation{selectedCategories && `: ${selectedCategories}`}
            </span>
            <span slot="subtitle">Choose how you want to travel</span>
            <span>
              <p className="panel-description">
                Select one or more transportation options for your trip.
              </p>
              <div className="categories-container">
                {this.state.categories.map((c: Category) => {
                  return (
                    <IgrCheckbox
                      className="category-option"
                      key={"checkbox-" + c.type}
                      onChange={(e: IgrCheckboxChangeEventArgs) =>
                        this.categoriesChange(e, c.type)
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
              Budget: ${this.state.cost.lower} - ${this.state.cost.upper}
            </span>
            <span slot="subtitle">Set the price range</span>
            <span>
              <p className="panel-description">
                Adjust the minimum and maximum cost for available options.
              </p>
              <div className="range-summary">
                <span>${this.state.cost.lower}</span>
                <span>${this.state.cost.upper}</span>
              </div>
              <IgrRangeSlider
                className="cost-slider"
                min={0}
                max={1000}
                lower={this.state.cost.lower}
                upper={this.state.cost.upper}
                onChange={this.costRangeChange}
              ></IgrRangeSlider>
            </span>
          </IgrExpansionPanel>
          <IgrExpansionPanel>
            <span slot="title">
              Minimum Rating{this.state.rating && ": "}
              {this.state.rating}
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
                      onChange={this.ratingChange}
                    >
                      <IgrRating
                        label={`${rating} star${rating > 1 ? "s" : ""} or more`}
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
            <span slot="title">Arrival Time{this.state.time !== "Any time" && `: ${this.state.time}`}</span>
            <span slot="subtitle">Set the latest arrival time</span>
            <span>
              <p className="panel-description">
                Pick the latest acceptable arrival time for your trip.
              </p>
              <IgrDateTimeInput
                className="time-input size-small"
                inputFormat="hh:mm tt"
                label="Arrive before"
                ref={this.dateTimeInputRef}
                onChange={this.timeChange}
              >
                <span slot="prefix">
                  <IgrIcon name="clock" collection="material" />
                </span>
                <span slot="suffix" onClick={this.clearTime}>
                  <IgrIcon name="clear" collection="material" />
                </span>
              </IgrDateTimeInput>
            </span>
          </IgrExpansionPanel>
        </IgrAccordion>
      </div>
    );
  }

  public categoriesChange(e: IgrCheckboxChangeEventArgs, type: string) {
    const categoryIndex = this.categories.findIndex((c) => c.type === type);
    if (categoryIndex === -1) {
      return;
    }
    let categoriesCopy = this.state.categories;
    categoriesCopy[categoryIndex].checked = e.detail.checked;
    this.setState({
      categories: categoriesCopy,
    });
  }

  public costRangeChange(e: IgrRangeSliderValueEventArgs) {
    this.setState({
      cost: { lower: e.detail.lower, upper: e.detail.upper },
    });
  }

  public ratingChange(e: IgrRadioChangeEventArgs) {
    if (!e.detail.value) {
      return;
    }
    this.setState({
      rating: `${+e.detail.value} star${
        +e.detail.value > 1 ? "s" : ""
      } or more`,
    });
  }

  public timeChange(e: IgrComponentDateValueChangedEventArgs) {
    const s = e.target as IgrDateTimeInput;
    const result =
      s.value !== null
        ? e.detail.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "Any time";
    this.setState({
      time: result,
    });
  }

  public clearTime() {
    this.dateTimeInput.clear();
    this.setState({
      time: "Any time",
    });
  }

  public dateTimeInputRef(input: IgrDateTimeInput) {
    if (!input) {
      return;
    }
    this.dateTimeInput = input;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AccordionCustomization />);
