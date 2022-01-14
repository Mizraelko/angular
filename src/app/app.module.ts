import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { BlockComponentsComponent } from './block-components/block-components.component';
import { PostFormComponent } from './block-components/post-form/post-form.component';
import { PostComponent } from './block-components/post/post.component';

@NgModule({
  declarations: [ //используемые компоненты
    AppComponent,
    BlockComponentsComponent,
    PostFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Необходим для работы ngModel - связывание
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
