import { FilterComponent } from './components/filter/filter.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginationPipe } from './pipes/paginate.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from 'w-ng5';


@NgModule({
  declarations: [
    FilterComponent,
    FilterPipe,
    PaginationPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
    PipesModule,
    FormsModule
  ],
  exports: [
    FilterComponent,
    FilterPipe
  ]
})
export class SharedModule { }
