import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id: number;
}

@Component({
  selector: 'app-block-components',
  templateUrl: './block-components.component.html',
  styleUrls: ['./block-components.component.scss'],
  //Реагировать только на входные свойства @Input(по сути мемоизация из коробки)
  changeDetection: ChangeDetectionStrategy.OnPush,
  //Убирает локальную инкапсуляцию стилей
  encapsulation: ViewEncapsulation.None
})
export class BlockComponentsComponent implements OnInit {
  posts: Post[] = []
  constructor() { }

  ngOnInit(): void {

  }
  updatePost(post: Post) {
    this.posts = [post, ...this.posts]
  }
  removePost(id: number) {
   this.posts =  this.posts.filter(el => el.id !== id);
  }
}
