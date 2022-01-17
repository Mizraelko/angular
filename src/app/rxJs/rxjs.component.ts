import { Component, OnInit } from '@angular/core';
import {Subscription, Subject} from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  sub: Subscription;

  stream$: Subject<number> = new Subject<number>();

  constructor() {
    this.sub = this.stream$.subscribe(value => {
      console.log(value)
    })
  }
  ngOnInit(): void {
  }

  stop() {
    this.sub.unsubscribe();
  }
  next() {
    this.stream$.next(1);
  }
}
