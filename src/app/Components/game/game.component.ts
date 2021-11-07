import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Models/Hero';
import { HeroComponent } from '../hero/hero.component';
import { Villan } from '../../Models/Villan'
import { VillanComponent } from '../villan/villan.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  heroList: Hero [] = [{HeroID: 5, HeroName: "Dion", MinDice: 4, MaxDice: 6, Uses: 3}, 
                       {HeroID: 5, HeroName: "Dion", MinDice: 4, MaxDice: 6, Uses: 3}];
  villanList: Villan [] = [{VillanID: 2, VillanName: "Shano", AttackPoints: 5},
                           {VillanID: 3, VillanName: "NotBad", AttackPoints: 5}];
  selectedVillan: Villan;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }
  StartBtn(): void{

  }
  RollBtn(): void{

  }

  onSelectHero(hero: Hero){
    this.selectedHero = hero;
  }

  onSelectVillan(villan: Villan){
    this.selectedVillan = villan
  }

}