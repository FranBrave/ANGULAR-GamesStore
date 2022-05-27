import { IGame } from './../../core/services/models/games.models';
import { PaginationService } from '../../core/services/pagination.service';
import { GamesService } from './../../core/services/games.service';
import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public games?: IGame[];
  public canModify: boolean = false;
  public filterValue: string = "";
  public message: string = '';
  public sortCriteria: boolean = true;
  public page: number = 0;
  public maxPage: number = 0;

  constructor(

    private gamesService: GamesService,
    private paginationService: PaginationService,
    private activatedRoute: ActivatedRoute
    
  ) {}

  ngOnInit(): void {

    this.getGames()


    this.games = this.activatedRoute.snapshot.data[0];
    this.paginationService.maxPage$.subscribe(page => {
      this.maxPage = page;
    });
  }

  public onModify() {
    this.canModify = !this.canModify;
  }

  public changeSortCriteria() {
    this.sortCriteria = !this.sortCriteria;
  }


  public onDelete(id: string) {
    this.gamesService.deleteGame(id).subscribe((game) => {
      console.log('Eliminado!', game);
      this.getGames();
    });
  }


  private getGames() {
    this.gamesService.getGames().subscribe((games) => {
      this.games = games;
    });
  }
}
