import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { BlockServicesComponent } from './block-services/block-services.component';

@NgModule({
  declarations: [ //используемые компоненты
    AppComponent, BlockServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Необходим для работы ngModel - связывание
  ],
  //Подключаемые сервисы, если у сервеса есть Injectable, то сюда не обязательно писать зависимость
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
