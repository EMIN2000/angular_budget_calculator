import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BugetItem } from 'src/shared/models/budget-item.model';
@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input()
  bugetItems: BugetItem[]=new Array<BugetItem>();
  @Output() delete: EventEmitter<BugetItem> =new EventEmitter<BugetItem>();
  constructor() { }

  ngOnInit(): void {
  }
  onDeleteButtonClicked(item: BugetItem){
    this.delete.emit();

  }

}
