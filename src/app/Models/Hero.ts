export interface HeroImport {
  HeroID: number;
  HeroName: string;
  MinDice: number;
  MaxDice: number
  Uses: number;
}


export class Hero {
  HeroID: number;
  HeroName: string;
  MinDice: number;
  MaxDice: number
  Uses: number;
  constructor( HeroImport : HeroImport ){
    this.HeroID = this.HeroID;
    this.HeroName = this.HeroName;
    this.MinDice = this.MinDice
    this.MaxDice = this.MaxDice
    this.Uses = this.Uses;
  }


}