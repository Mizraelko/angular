import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../block-components.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  //Исходящие свойство
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  //Декоратор для ref передаём строку с имененм ref-а, второй объект с полем static со значение, если нужно обратитьтся из ngOnInit ? true, если из другого метода, то false
  @ViewChild('refTitle') refTitle!: ElementRef
  @ViewChild('refText') refText!: ElementRef

  title: string = "";
  text: string = "";

  ngOnInit(): void {
  }

  focusTitle() {
    this.refText.nativeElement.focus()
    setTimeout(() => {
      this.refTitle.nativeElement.focus()
    }, 5000)


  }

  addPost() {
    if(this.text.trim() && this.title.trim()) {
      //Метод экземпляра класса EventEmitter - принемает данные, которые мы хотим отправить на ружу(короче калбэк от родителя)
      this.onAdd.emit({
        title: this.title,
        text: this.text,
        id: Math.floor(Math.random() * 100)
      })
    }
    this.title = this.text = ""
  }

}
