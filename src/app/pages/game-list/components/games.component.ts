import { IGame } from '../../../core/services/interfaces/games.interface';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})


export class GamesComponent implements OnInit {

  @Input() public games?: IGame;
  @Input() public canDelete: boolean = false;
  @Output() public delete: EventEmitter<void> = new EventEmitter();

  constructor(private http: HttpClient) { }

  public isSelected: boolean = false;

  ngOnInit(): void {
  }

  public onDelete() {
    this.delete.emit();
  }

  public onClick() {
    this.isSelected = !this.isSelected;
  }

}
