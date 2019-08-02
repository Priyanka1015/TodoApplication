import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        HttpClientModule
      ],
      declarations: [ TodosComponent,AddTodoComponent,TodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should display', () => {
    expect( component.todos.length  ).toBe(component.len+1);
  });
*/
  it ('should delete', function () {
    component.ngOnInit;
    spyOn(component, 'deleteTodo');
    fixture.whenStable().then(() => {
      expect(component.deleteTodo).toHaveBeenCalled();
    });
});

/*
  it('should delete', async(() => {
    expect(window.console.log).toMatch("deleted");
  }));
*/
});
