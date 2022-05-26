import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  public maxPage$: Subject<number> = new Subject();

  public setMaxPage(page: number) {
    this.maxPage$.next(page);
  }

}
