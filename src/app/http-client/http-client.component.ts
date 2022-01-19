import { Component, OnInit } from '@angular/core';
import {Todo, TodoService} from "./services/todo.service";

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  todos: Todo[] = [];

  todoTitle = "";

  loading: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo() {
    if(!this.todoTitle.trim()){
      return
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };
    this.todoService.addTodo(newTodo).subscribe(todo => {
      this.todos = [...this.todos, todo]
      this.todoTitle = "";
    });
  }

  fetchTodos() {
    this.loading = true;
    this.todoService.fetchTodo().subscribe(todos => {
      this.todos = todos;
      this.loading = false;
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(_ => {
      this.todos = this.todos.filter(el => el.id !==id);
    })
  }

  completedTodo(id?: number) {
    this.todoService.completeTodo(id).subscribe(todo => {
      this.todos.find(el => el.id === todo.id)!.completed = true
    })
  }
}
