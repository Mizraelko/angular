import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { BlockDirectiveComponent } from './block-directive/block-directive.component';
import {StyleDirective} from "./block-directive/directives/style.directive";

@NgModule({
  declarations: [ //используемые компоненты
    AppComponent,
    BlockDirectiveComponent,
    StyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule //Необходим для работы ngModel - связывание
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
