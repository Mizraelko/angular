import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {
  @Input("appIfNot") set IfNot(condition: boolean) {
    if(!condition) {
      //Создаём контейнер и передаём туда ref на содержимое контейнера
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      //Скрытие контейнера - вызываем метод у viewContainer
      this.viewContainer.clear();
    }
  }
  //templateRef содержит в себе содержимое ng-template из шаблона, а viewContainer указывает на этот контейнер
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

}
