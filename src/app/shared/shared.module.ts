import { FilterPipe } from './pipes/filter/filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from 'w-ng5';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationPipe } from './pipes/paginate/paginate.pipe';


@NgModule({
  declarations: [
    FilterPipe,
    PaginationPipe,
    HeaderComponent,
    FooterComponent
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
    FilterPipe,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
