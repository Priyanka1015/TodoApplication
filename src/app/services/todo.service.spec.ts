import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      RouterTestingModule,
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });
});
