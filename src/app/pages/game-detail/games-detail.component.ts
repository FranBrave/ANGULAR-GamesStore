import { GamesService } from './../../core/services/games.service';
import { IGame } from '../../core/services/interfaces/games.interface';
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
  ) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const gameId = params['gameId'];
      this.currentGame$ = this.gameService.getGameById(gameId);
    });
  }

}

