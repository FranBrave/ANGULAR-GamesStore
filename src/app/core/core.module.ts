import { GamesService } from './services/games.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';;
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaginationService } from './services/pagination.service';


@NgModule({
  declarations: [

  ],
  providers: [
    PaginationService,
    GamesService
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
  ]
})
export class CoreModule { }
