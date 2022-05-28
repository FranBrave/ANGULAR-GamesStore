
import { Pipe, PipeTransform } from '@angular/core';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { IGame } from 'src/app/core/services/models/games.models';


@Pipe({
  name: 'paginate',
  pure: false
})
export class PaginationPipe implements PipeTransform {

  constructor(private paginateService: PaginationService) {}

  transform(value: IGame[], page: number): IGame[] {
    this.paginateService.setMaxPage(Math.ceil(value.length / 6));
    const start = page*6;
    const end = (page + 1)*6;
    return value.slice(start, end);
  }

}