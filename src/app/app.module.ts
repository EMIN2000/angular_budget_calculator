import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdditemFormComponent } from './additem-form/additem-form.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { BugetItemCardComponent } from './budget-item-list/buget-item-card/buget-item-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AdditemFormComponent,
    BudgetItemListComponent,
    BugetItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
