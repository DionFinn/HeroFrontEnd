import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroComponent } from './Components/hero/hero.component';
import { GameComponent } from './Components/game/game.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  HelloComponent,
                  HeroComponent,
                  GameComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
