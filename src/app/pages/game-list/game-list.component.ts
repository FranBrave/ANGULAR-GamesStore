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
  public maxPage: number = 0;

  title='pagination'
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [5, 10, 15, 20];

  

  constructor(

    private gamesService: GamesService,
    private paginationService: PaginationService,
    private activatedRoute: ActivatedRoute
    
  ) {}


  postList(): void {
    this.gamesService.getGames().subscribe(response => {
      this.POSTS = response;
      console.log(this.POSTS);
      
    } )
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getGames();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getGames();
  }

  ngOnInit(): void {
    this.postList();
    this.getGames();

    
this.gamesService.getGames().subscribe((games) => {
this.games = games;
});

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
