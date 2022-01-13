import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {InfoComponent} from "./info/info.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ //используемые компоненты
    AppComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Необходим для работы ngModel - связывание
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
