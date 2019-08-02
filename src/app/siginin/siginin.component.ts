import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-siginin',
  templateUrl: './siginin.component.html',
  styleUrls: ['./siginin.component.css']
})
export class SigininComponent implements OnInit {

  constructor(private router:Router,private servic:TodoService) { 
  }

  ngOnInit() {
  }

  onSubmit(email: string){
    console.log(email)
    this.servic.updateUrl(email);
    this.router.navigateByUrl("/todos");
  }

}
