import { ApirestService } from './../../core/services/apirest.service';
import { GamesService } from './../../core/services/games.service';
import { IGame } from './../../core/services/models/games.models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.scss']
})
export class GamesDetailComponent implements OnInit {
  public currentGame$?: Observable<IGame>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameService: GamesService,
    private apiService: ApirestService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const gameId = params['gameId'];
      this.currentGame$ = this.apiService.getGames();
    });
  }

}
