import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

//Декоратор для привращения класса в директиву, selector - обязательное поле
@Directive({
  selector: "[appStyle]"
})
export class StyleDirective {
  //Из какого параметра брать значение
  @Input('appStyle') color!:string;
  @Input('dStyle') dStyle!: { fontSize: number, fontStyle: string };
  //Тут депенденси инжектион ссылкой ref, и объект типа Renderer2 - он возвращает методы для изменения переданной ref
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }
  //Декоратор для изменения свойств или классов, параметр [style.param | class.param], байндим переменную и меняем её значение
  @HostBinding('style.color') elColor = "";
  //Декоратор для интреактивности дерективы - и добовляем его на событие
  // первый параметр строка по которой будем слушать событие, второй массив ['$event']
  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }



  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
     // this.renderer.setStyle(this.elRef.nativeElement, "color", this.color );
    // this.renderer.setStyle(this.elRef.nativeElement, "fontSize", this.dStyle.fontSize );
    // this.renderer.setStyle(this.elRef.nativeElement, "fontStyle", this.dStyle.fontStyle );
  }
  @HostListener('mouseleave') onMove() {
    this.elColor = "";
    // this.renderer.setStyle(this.elRef.nativeElement, "color", null );
    // this.renderer.setStyle(this.elRef.nativeElement, "fontWeight", null );
    // this.renderer.setStyle(this.elRef.nativeElement, "fontStyle", null );
  }
}
