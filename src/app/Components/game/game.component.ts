import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Models/Hero';
import { HeroComponent } from '../hero/hero.component';
import { Villan } from '../../Models/Villan'
import { VillanComponent } from '../villan/villan.component';
import { Result } from '../../Models/Result';
import { ResultComponent } from '../result/result.component';
import { HeroService } from '../../Services/hero.service';
import { VillanService } from '../../Services/villan.service';
import { GameService } from '../../Services/game.service';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  heroList: Hero [] = [{HeroID: 5, HeroName: "Dion", MinDice: 1, MaxDice: 6, Uses: 3}, 
                       {HeroID: 5, HeroName: "Anh", MinDice: 1, MaxDice: 3, Uses: 3}];
  villanList: Villan [] = [{VillanID: 2, VillanName: "Shano", AttackPoints: 5},
                           {VillanID: 3, VillanName: "NotBad", AttackPoints: 5}];
  resultList: Result [] = [{ GameTime: new Date, Winner: 'Villan Wins'}]
  selectedVillan: Villan;
  selectedHero: Hero;
  villansLost: boolean = false;
  heroesLost: boolean = false;
  startBtnDisabled: boolean = false;
  rollBtnDisabled: boolean = true;
  resultWinner: string;
  constructor(private heroService: HeroService, 
              private villanService: VillanService, 
              private gameService: GameService) { }

  ngOnInit(): void{
    this.heroService.getAllHeroes().subscribe(hero => this.heroList = hero, error =>
      console.log("error getAllHeroes()" + error),() => { this.init() });
    this.villanService.getAllVillains().subscribe(villan => this.villanList = villan, error =>
      console.log("error getALlVillains()" + error),() => { this.init() });
    this.gameService.getAllGames().subscribe(game => this.resultList = game, error => 
      console.log("error in getAllGames()" + error), () => { this.init() });
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
    this.villansLost = this.chkVillansLost();
    this.heroesLost = this.chkHeroLost();
    if(this.villansLost === true || this.heroesLost === true){
      this.resultWinner = this.villansLost === false ? "Villans Won": "Heroes Won";
    }


  }

  chkVillansLost(): boolean{
    for(let v of this.villanList){
      if(v.AttackPoints > 0 ){
        return false;
      }
    }
    return true;
  }
  
  chkHeroLost(): boolean{
    for(let h of this.heroList){
      if(h.Uses > 0){
        return false;
      }
    }
    return true;
    
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

  init(): void {
   if(this.heroList != null){
     this.selectedHero = this.heroList[0];
    if (this.villanList != null) {
      this.selectedVillan = this.villanList[0];
    }
   }
  }
  
}



/*Hero section
disabled when users = 0
mouse over greys out 
selects highlights 
disables other selected (only select when uses is greater than 0)
when Uses zero disabled
*/