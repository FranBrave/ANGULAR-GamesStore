import { IGame } from './models/games.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }

  public getGames(): Observable<IGame[]> {
    return this.httpClient.get<IGame[]>(`${environment.apiUrl}games`);

  }

    public getGameById(id: number): Observable<IGame> {
      return this.httpClient.get<IGame>(`${environment.apiUrl}games/${id}`);
    }


   public deleteGame(idGame: string): Observable<IGame> {
    return this.httpClient.delete<IGame>( `${environment.apiUrl}games/${idGame}`);
  }
}