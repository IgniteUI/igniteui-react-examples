/* tslint:disable:prefer-const */

import { Style } from 'igniteui-react-core';

export abstract class ShapeStyling {
  public defaultStroke = 'white';
  public defaultFill = 'gray';
  public defaultThickness = 0.5;
  public defaultOpacity = 1.0;
  public defaultStyle = new Style();

  constructor() {
    this.defaultStyle = new Style();
    this.defaultStyle.stroke = this.defaultStroke;
    this.defaultStyle.fill = this.defaultFill;
    this.defaultStyle.opacity = this.defaultOpacity;
    this.defaultStyle.strokeThickness = this.defaultThickness;
  }

  public abstract generate(record: any): Style;

  public getValue(itemMemberPath: string, item: any): any {
    let itemValue = null;

    if (item === undefined) { // .hasOwnProperty("fieldValues")) {
        console.log('WARNING: Data item is missing');
    } else if (item.hasOwnProperty(itemMemberPath)) {
      itemValue = item[itemMemberPath];
    } else {
      console.log('WARNING: Data item does not have ' + itemMemberPath + ' property');
    }
    return itemValue;
  }
}

export class ShapeRange {

  public minimum: number;
  public maximum: number;

  public opacity?: number;
  public fill: string;
  public stroke?: string;
  public strokeThickness?: number;

}

export class ShapeComparisonStyling extends ShapeStyling {

  public itemMemberPath = '';
  public itemMappings: ShapeComparison[] = [];

  public generate(record: any): Style {

    let itemValue = this.getValue(this.itemMemberPath, record);
    // let itemStroke = this.getValue("KeyRace", record) > 0 ? "black" : "white";
    if (itemValue === null || itemValue === "") {
      return this.defaultStyle;
    }

    for (const mapping of this.itemMappings) {
      if (mapping.itemValue === itemValue) {
        const shapeStyle = new Style();
        shapeStyle.opacity = mapping.opacity || this.defaultOpacity;
        shapeStyle.fill    = mapping.fill || this.defaultFill;
        shapeStyle.stroke  = mapping.stroke || this.defaultStroke;
        shapeStyle.strokeThickness = mapping.strokeThickness || this.defaultThickness;
        return shapeStyle;
      }
    }

    return this.defaultStyle;
  }
}

export class ShapeComparison {
  public itemValue: string;

  public opacity?: number;
  public fill: string;
  public stroke?: string;
  public strokeThickness?: number;
}
