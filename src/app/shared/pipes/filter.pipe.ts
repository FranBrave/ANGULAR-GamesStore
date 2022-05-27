import { GameListModule } from './../../pages/game-list/game-list.module';

import { Pipe, PipeTransform } from '@angular/core';
import { IGame } from 'src/app/core/services/models/games.models';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  constructor() {}

  transform(value: IGame[], criteria: string): IGame[] {
    return value.filter(game => {
      return game.title.toLowerCase().includes(criteria.toLowerCase());
    });
  }

}
