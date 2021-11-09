
   
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from './../Models/Result';
import { BaseService } from './base.service';



@Injectable({
  providedIn: 'root'
})
export class GameService extends BaseService {

  constructor(private _http: HttpClient) {
    super();
  }
  getAllGames(): Observable<Result[]> {
    return this._http.get<Result[]>(this.baseUrl + "Game");
  }
  addNewGame(newGame: Result): Observable<Result> {
    return this._http.post<Result>(this.baseUrl + "Game", newGame);
  }
}