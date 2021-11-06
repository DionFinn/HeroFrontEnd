import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Models/Hero';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  heroList: Hero [] = []

  constructor() { }

  ngOnInit() {
  }
  StartBtn(): void{

  }
  RollBtn(): void{

  }

}