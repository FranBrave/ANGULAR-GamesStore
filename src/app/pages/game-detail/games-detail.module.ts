import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
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
    SharedModule,
    RouterModule
  ]
})
export class GamesDetailModule { }
