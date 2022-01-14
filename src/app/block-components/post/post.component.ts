import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Post} from "../block-components.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  //ВХОДЯЩИЕ СВОЙСТВО что данные будут полученны из вне - декоратор @Input, если в декоратор передать строку с название(переименовываем пропсы)
  @Input() post!: Post
  //Декоратор для доступа к children компонента
  @ContentChild("child", {static: true}) ref!: ElementRef
  constructor() {
  }

  ngOnInit(): void {
  }

}
