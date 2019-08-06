import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://todo-opentext.herokuapp.com/todo/';
  _todosLimit:string = '';
  
  constructor(private http:HttpClient) { }

  updateUrl(email){
    this._todosLimit = email;
  }

  getUrl(){
    return this._todosLimit;
  }
  // Get Todos
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this._todosLimit}`);
  }

  // Delete Todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}${this._todosLimit}/${todo.tname}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo:Todo):Observable<any> {
    return this.http.post<Todo>(this.todosUrl, todo);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}${this._todosLimit}/${todo.tname}/${todo.status}`;
    console.log(todo);
    return this.http.put(url, todo, httpOptions);
  }
}
