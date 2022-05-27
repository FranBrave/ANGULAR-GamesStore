import { RouterModule } from '@angular/router';
import { GamesComponent } from './../game-list/components/games.component';
import { GameListComponent } from './game-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GameListRoutingModule } from './game-list-routing.module';


@NgModule({
  declarations: [
    GameListComponent,
    GamesComponent
  ],
  imports: [
    CommonModule,
    GameListRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class GameListModule { }
