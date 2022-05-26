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
      let headers = new HttpHeaders({
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '98cabe703fmsh5fa934d2d218867p1a426fjsn7a571311f556'
      });
      return this.httpClient
        .get<IGame[]>('${https://free-to-play-games-database.p.rapidapi.com/api/games', {
          headers: headers
        })

  }

//     public getGameById(id: Number): Observable<IGame> {
//       return this.httpClient.get<IGame>(`${environment.apiUrl}games/${id}`);
//     }


   public deleteGame(idGame: string): Observable<IGame> {
    return this.httpClient.delete<IGame>( `${environment.apiUrl}games/${idGame}`);
  }
}