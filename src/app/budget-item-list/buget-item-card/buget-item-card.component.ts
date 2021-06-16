import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BugetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-buget-item-card',
  templateUrl: './buget-item-card.component.html',
  styleUrls: ['./buget-item-card.component.scss']
})
export class BugetItemCardComponent implements OnInit {
  @Input()
  
  item =new BugetItem('te',3)  ;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
 
  constructor() { }

  ngOnInit(): void {
  }
 onXButtonClick()
 {
   this.xButtonClick.emit();
 }
}
