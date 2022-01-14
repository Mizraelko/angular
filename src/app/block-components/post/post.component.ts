import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Post} from "../block-components.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges {
  //ВХОДЯЩИЕ СВОЙСТВО что данные будут полученны из вне - декоратор @Input, если в декоратор передать строку с название(переименовываем пропсы)
  @Input() post!: Post
  @Output() onRemove = new EventEmitter<number>()
  //Декоратор для доступа к children компонента
  @ContentChild("child", {static: true}) ref!: ElementRef
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  removePost() {
   this.onRemove.emit(this.post.id)
  }

}
