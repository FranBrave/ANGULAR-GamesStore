import { SharedModule } from './../../shared/shared.module';
import { GamesDetaiRoutingModule } from './games-detail-routing.module';
import { RouterModule } from '@angular/router';
import { GamesDetailComponent } from './games-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    GamesDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    GamesDetaiRoutingModule,
    SharedModule
  ]
})
export class GamesDetailModule { }
