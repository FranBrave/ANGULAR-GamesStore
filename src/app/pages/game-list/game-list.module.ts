import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GamesComponent } from './../game-list/components/games.component';
import { GameListComponent } from './game-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GameListRoutingModule } from './game-list-routing.module';
import { PipesModule } from 'w-ng5';


@NgModule({
  declarations: [
    GameListComponent,
    GamesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GameListRoutingModule,
    RouterModule,
    PipesModule,
    NgxPaginationModule
  ]
})
export class GameListModule { }
