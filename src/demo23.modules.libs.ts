/**
 * * define module with name Libs
 */

export default function sayHello() : void {
  console.log('Hello World');
}

export const PI = 3.14;
export const double = (value : number) : number => value * 2;

export class Shape {
  private _color : string = 'no-color';
  constructor(color? : string) {
    if(color !== undefined) {
      this._color = color;
    }
  }

  get color() { return this._color }
  set color(value : string) {
    if(value !== undefined) {
      this._color = value;
    }
  }
}
