import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-block-pipes',
  templateUrl: './block-pipes.component.html',
  styleUrls: ['./block-pipes.component.scss']
})
export class BlockPipesComponent implements OnInit {
  //Числовые пайпы
  e: number = Math.E;
  //Строковый пайп
  str: string = 'hello world';

  float: number = 0.42;

  search: string = "";
  searchField = "title";

  posts: Post [] = [
    {title: "bbbbbbbbbbb", text: "sssssss"},
    {title: "aaaaaaa", text: "jjjjj"},
    {title: "zzzzzzzzzz", text: "kkkkkkk"},
    {title: "vvvvvvvv", text: "llllllll"},

  ];

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => { resolve("resolve")}, 4000)
  });

  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {obs.next(new Date())}, 1000)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
