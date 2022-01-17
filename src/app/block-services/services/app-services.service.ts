import {Injectable} from "@angular/core";
//Декоратор указывающий, что в данный сервис можно делать DI, параметр providedIn - говорит в каком модуле зарегестрировать сервис
@Injectable({
  providedIn: "root"
})
export class AppServices {

  counter = 0;

  constructor() {
  }

  increase() {
    this.counter++;
  }
  decrease() {
    this.counter--;
  }
}
