import { SharedModule } from './../../shared/shared.module';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecomendationsRoutingModule } from './recomendations-routing.module';
import { RecomendationsComponent } from './recomendations.component';


@NgModule({
  declarations: [
    RecomendationsComponent
  ],
  imports: [
    CommonModule,
    RecomendationsRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class RecomendationsModule { }
