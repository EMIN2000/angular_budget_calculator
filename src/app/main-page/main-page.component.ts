import { Component, OnInit } from '@angular/core';
import { BugetItem } from 'src/shared/models/budget-item.model';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
bugetItems: BugetItem[] =new Array<BugetItem>();
  constructor() { }

  ngOnInit(): void {
  }
addItem(newItem: BugetItem){
this.bugetItems.push(newItem);
}
deleteItem(item: BugetItem){
  let index =this.bugetItems.indexOf(item);
  this.bugetItems.splice(index,1);
}
}
