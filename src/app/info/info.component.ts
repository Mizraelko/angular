import {Component} from "@angular/core"

@Component({ //Декоратор
  selector: 'app-info',// обязательное поле для определения, как выглядит компонент в шаблоне
  templateUrl: 'info.component.html', // путь к щаблону компонента
  styleUrls: ['info.component.scss'] //Стили
})
export class InfoComponent {
  title = 'Dynamic title';
  /**
   * ОДНОСТОРОНИЕ СВЯЗЫВАНИЕ HTML-TS
   */
  //Работа binding из HTML-TS
  // img = "https://w7.pngwing.com/pngs/791/922/png-transparent-react-javascript-library-redux-user-interface-tesseract-logo-symmetry-nodejs.png";
  // alt = "React";
  // значение инпута
  //inputValue = "";
  //значение инпута отжатия клавиши и клика мсыши за пределы
  //keyAndBlurValue = ""
  // constructor() {
  //
  //  setTimeout(() => {
  //   Работа binding из TS в HTML
  //    this.img = "https://avatars.mds.yandex.net/i?id=827221d21904094716f3bb56fe828bf8-4866016-images-thumbs&n=13"
  //    this.alt = "Angular"
  //  }, 3000)
  // }
// //Обработчик инпута
//   onInput(event: Event) {
//     event?.preventDefault();
//     //Присвоение типа event
//     this.inputValue = (<HTMLInputElement>event?.target).value;
//   }
  // //Обработчик отжатия клавиши и клика мсыши за пределы
  // onBlur(value: string) {
  //   this.keyAndBlurValue = value;
  // }
  // //Обработчик отжатия клавиши и клика мсыши за пределы
  // onKeyApp(event: Event) {
  //   event.preventDefault();
  //   //Присвоение типа event
  //   this.keyAndBlurValue = (<HTMLInputElement>event.target).value;
  // }
  /**
   * КОНЕЦ ОДНОСТОРОНИЕ СВЯЗЫВАНИЕ HTML-TS
   */

  /**
   * 2-НИЕ СВЯЗЫВАНИЕ
   */
  // inputValue = "Изначальное значение";
  // Обычное без модуля form
  // onInput(event: Event) {
  //   this.title = (<HTMLInputElement>event.target).value
  // }
  // onInput(event: Event) {
  //   this.inputValue = (<HTMLInputElement>event.target).value
  // }
  /**
   * КОНЕЦ 2-НИЕ СВЯЗЫВАНИЕ
   */
  /**
   * Дерективы
   */
  toggle = false;
  /**
   * КОНЕЦ Дерективы
   */

}
