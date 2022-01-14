import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-block-components',
  templateUrl: './block-components.component.html',
  styleUrls: ['./block-components.component.scss']
})
export class BlockComponentsComponent implements OnInit {
  posts: Post[] = []
  constructor() { }

  ngOnInit(): void {
  }
  updatePost(post: Post) {
    this.posts = [post, ...this.posts]
  }
}
