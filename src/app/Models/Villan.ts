export interface VillanImport {
  VillanID: number;
  VillanName: string;
  AttackPoints: number;
}


export class Villan {
  VillanID: number;
  VillanName: string;
  AttackPoints: number;
  constructor(VillanImport: VillanImport){
    this.VillanID = this.VillanID;
    this.VillanName = this.VillanName;
    this.AttackPoints = this.AttackPoints;

  }
}