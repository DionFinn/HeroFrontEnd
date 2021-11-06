import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  // gameResultList: GameResult[] = [];
  // heroList: Hero[] = [] 
  //  constructor() { }
   
  //  ngOnInit() {
  //   this.gameResultList.push({GameTime: new Date(), Winner: "Hero Win"})
  //}
}
