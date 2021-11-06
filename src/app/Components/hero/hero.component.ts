import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Models/Hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}