// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';
// import { AddTodoComponent } from './add-todo.component';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// describe('AddTodoComponent', () => {
//   let component: AddTodoComponent;
//   let fixture: ComponentFixture<AddTodoComponent>;
//   let debugElement: DebugElement;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports:[
//         FormsModule,
//         HttpClientModule
//       ],
//       declarations: [ AddTodoComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AddTodoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should add', async(() => {
//     spyOn(component, 'onSubmit');
  
//     let button = fixture.debugElement.nativeElement.querySelector('input.btn');
//     button.click();
  
//     fixture.whenStable().then(() => {
//       expect(component.onSubmit).toHaveBeenCalled();
//     });
//   }));
  
// });
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AddTodoComponent } from './add-todo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AddTodoComponent', () => {
let component: AddTodoComponent;
let fixture: ComponentFixture<AddTodoComponent>;
let debugElement: DebugElement;
beforeEach(async(() => {
TestBed.configureTestingModule({
imports:[
FormsModule,
HttpClientModule
],
declarations: [ AddTodoComponent ]
})
.compileComponents();
}));

beforeEach(() => {
fixture = TestBed.createComponent(AddTodoComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});

it('should add the tasks', async(() => {
spyOn(component, 'onSubmit');
let button = fixture.debugElement.nativeElement.querySelector('input.btn');
button.click();
fixture.whenStable().then(() => {
expect(component.onSubmit).toHaveBeenCalled();
});
}));


it('clears when task is added', ( ) => {
const inputEmail = fixture.debugElement.query(By.css("input.val")).nativeElement;
inputEmail.value = "value";
const addButton = fixture.debugElement.query(By.css("input.btn")).nativeElement;
addButton.click();
fixture.detectChanges();
expect(inputEmail.value).toBe("value");
});

}); 
