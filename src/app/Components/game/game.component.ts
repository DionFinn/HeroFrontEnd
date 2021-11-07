import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Models/Hero';
import { HeroComponent } from '../hero/hero.component';
import { Villan } from '../../Models/Villan'
import { VillanComponent } from '../villan/villan.component';
import { Result } from '../../Models/Result';
import { ResultComponent } from '../result/result.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  heroList: Hero [] = [{HeroID: 5, HeroName: "Dion", MinDice: 1, MaxDice: 6, Uses: 3}, 
                       {HeroID: 5, HeroName: "Dion", MinDice: 1, MaxDice: 6, Uses: 3}];
  villanList: Villan [] = [{VillanID: 2, VillanName: "Shano", AttackPoints: 5},
                           {VillanID: 3, VillanName: "NotBad", AttackPoints: 5}];
  resultList: Result [] = [{ GameTime: new Date, Winner: 'Villan Wins'}]
  selectedVillan: Villan;
  selectedHero: Hero;
  
  startBtnDisabled: boolean = false;
  rollBtnDisabled: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  StartBtn(): void{
    //disables startBtn
    this.startBtnDisabled = true;
    //loads heroes
    //loads villians
  }

  RollBtn(): void{
    let attack = this.randomAttack();
    if(attack > this.selectedVillan.AttackPoints){
      this.selectedVillan.AttackPoints = 0;
    }
    else {
      this.selectedVillan.AttackPoints -= attack;
    }
   
    this.selectedHero.Uses -= 1;
    this.selectedHero = null;
    this.selectedVillan = null;
  }




  onSelectHero(hero: Hero){
    if(this.selectedHero === hero){
     this.selectedHero = null;
    }
    else {
      if(hero.Uses > 0){
      this.selectedHero = hero;
      }
    }
  }



  onSelectVillan(villan: Villan){
    
    if(this.selectedVillan === villan){
      this.selectedVillan = null;
     }
     else {
       if(villan.AttackPoints > 0){
      this.selectedVillan = villan;
      }
    }
  }

  randomAttack(): number {
    const roll = Math.floor(Math.random() * (this.selectedHero.MaxDice - this.selectedHero.MinDice + 1)) + this.selectedHero.MinDice;
    console.log(roll);
    return roll;
  }
}


/*Hero section
disabled when users = 0
mouse over greys out 
selects highlights 
disables other selected (only select when uses is greater than 0)
when Uses zero disabled
*/