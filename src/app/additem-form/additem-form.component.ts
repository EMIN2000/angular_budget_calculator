import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BugetItem } from 'src/shared/models/budget-item.model';
@Component({
  selector: 'app-additem-form',
  templateUrl: './additem-form.component.html',
  styleUrls: ['./additem-form.component.scss']
})
export class AdditemFormComponent implements OnInit {
@Input() item: BugetItem = new BugetItem('', 0);
@Output() formSubmit: EventEmitter<BugetItem> = new EventEmitter<BugetItem>();
  constructor() { }

  ngOnInit(): void {
  }
 onSubmit(form: NgForm){
this.formSubmit.emit(form.value);
form.reset();
 }
}
