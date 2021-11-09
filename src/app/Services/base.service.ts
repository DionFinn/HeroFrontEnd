import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  readonly baseUrl: string = "http://DionFinnerty.somee.com/HeroGame/";

  constructor() { }
}
