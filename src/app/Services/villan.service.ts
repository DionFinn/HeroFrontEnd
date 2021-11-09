import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Villan, VillanImport } from '.././Models/Villan';
import { BaseService } from './base.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VillainService extends BaseService {

  constructor(private _http: HttpClient) {
    super();
  }

  getAllVillains(): Observable<Villan[]> {
    return this._http.get<VillanImport[]>(this.baseUrl + "Villain").pipe(map(villainData => villainData.map(villainData => new Villan(villainData))));
  }
}
