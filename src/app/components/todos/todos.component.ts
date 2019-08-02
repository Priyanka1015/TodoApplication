import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  len : number;
   
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.len  = this.todos.length;
    });
  }

  deleteTodo(todo:Todo) {
    // Remove From UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    console.log("deleted");
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todot:any) {
    this.todoService.addTodo(todot).subscribe(todo => {
     
      this.todos.push({
        tname: todot.name,
        status:false,
        id:this.todos.length
      });
    });
  }

}
