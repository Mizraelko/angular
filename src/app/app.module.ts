import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientComponent } from './http-client/http-client.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  //компонентов
  declarations: [
    AppComponent,
    HttpClientComponent,
  ],
  //Модули подключаемые
  imports: [
    //Что работаем в браузере
    BrowserModule,
    //Формы
    FormsModule,
    //реактивные формы
    ReactiveFormsModule,
    //Для ajax запросов
    HttpClientModule
  ],
  //Сервисы
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
