import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero, HeroImport } from '.././Models/hero';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService extends BaseService {

  constructor(private _http: HttpClient) {
    super();
  }

  getAllHeroes(): Observable<Hero[]> {
    return this._http.get<HeroImport[]>(this.baseUrl + "Hero").pipe(map(heroDataArray => heroDataArray.map(HeroImport => new Hero(HeroImport))));
  }
}
