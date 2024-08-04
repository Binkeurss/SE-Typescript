/**
 * * define namespace for package of modules
 */

export namespace MyLibs {
  export const PI : number = 3.14;
  export const triple = (value : number) : number => value * 3;

  export class Fraction {
    private _num: number = 1;
    private _dec : number = 1;

    public constructor(num? : number, dec? : number) {
      if(num !== undefined) {
        this._num = num;
      }
      if(dec !== undefined) {
        this._dec = dec;
      }
    }

    public get num() { return this._num }
    public get dec() { return this._dec }

    public set num(value : number) {
      if(value !== undefined) { 
        this._num = value;
      }
    }
    public set dec(value : number) {
      if(value !== undefined) {
        this._dec = value;
      }
    }

    public toString() : string {
      return `(${this._num}/${this._dec})`;
    }
  }
}