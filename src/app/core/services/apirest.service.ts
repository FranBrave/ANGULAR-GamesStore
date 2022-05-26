import { IGame } from './models/games.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  constructor(private http: HttpClient) { }
  
  
 public getGames(): Observable<any> {
    return this.http.get<IGame>('/games')
  }
  

}
