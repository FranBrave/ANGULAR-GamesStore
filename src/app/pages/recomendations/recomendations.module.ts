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
    RouterModule
  ]
})
export class RecomendationsModule { }
