import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";

export interface Todo {
  userId?: number;
  id?: number;
  title: string;
  completed: boolean;
}

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  addTodo(newTodo: Todo): Observable<Todo> {
  return this.http.post<Todo>("https://jsonplaceholder.typicode.com/todos", newTodo)
 }
 fetchTodo(): Observable<Todo[]>{
    return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos?_limit=2").pipe(delay(1000))
 }
 deleteTodo(id: number): Observable<void> {
   return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
 }
  completeTodo(id?: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      competed: true
    })
  }
}
