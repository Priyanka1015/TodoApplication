import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title='';

  constructor(private servic:TodoService) { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      email: this.servic.getUrl(),
      name: this.title
    }

    this.addTodo.emit(todo);
  }

}
