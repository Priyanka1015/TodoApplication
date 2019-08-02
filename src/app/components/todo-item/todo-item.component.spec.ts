import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TodoItemComponent } from './todo-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { By } from '@angular/platform-browser';
describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let debugElement : DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        HttpClientModule
      ],
      declarations: [ TodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  


/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
*/

/*
it('should toggle', async(() => {
  spyOn(component, 'onToggle');

  let button = fixture.debugElement.nativeElement.querySelector('input.toggc');
  button.click();

  fixture.whenStable().then(() => {
    expect(component.onToggle).toHaveBeenCalled();
  });
}));


  it('should delete', async(() => {
    component.ngOnInit;
    spyOn(component, 'onDelete');
    
    let button = fixture.debugElement.nativeElement.querySelector('button.del');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.onDelete).toHaveBeenCalled();
    });
  }));
*/


/*
it('should call onDelete method', () => {
  const onClickMock = spyOn(component, 'onDelete');
  fixture.debugElement.query(By.css('.del')).triggerEventHandler('click', null);
  expect(onClickMock).toHaveBeenCalled();
});
*/

});
