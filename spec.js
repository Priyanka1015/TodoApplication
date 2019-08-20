//import { element, browser, by } from "protractor";

var url;
var reusableMethods = require('./Reusablemethods.js');
describe('should open todo application ', function() {
  browser.ignoreSynchronization=true;

  it('should open signin page',function(){
    browser.get('http://localhost:4200/');
    expect(browser.getTitle()).toBe('Todo List');
    console.log("signin page opened successfully");
    browser.sleep(500); 
  });
  
  it('should enter mail', function() {
    expect(reusableMethods.enterData('email','priya')).not.toBeDefined();
    console.log("entered mail");
    browser.sleep(500);
  });

  it('should signin and show todolist page', function(){
    reusableMethods.buttonclick('btn');
    console.log("clicked submit button");
    console.log("Todolist page opened sucessfully");
    browser.sleep(500);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/todos');
  });

  it('should add todo',function(){
    reusableMethods.enterData('addtodo','check todo');
    browser.sleep(500);
    expect(reusableMethods.buttonclick('addbtn')).not.toBeDefined();
    console.log("added todo");
    browser.sleep(500);  
  });

  it('should update status of todo',function(){  
    expect(reusableMethods.searchData('update')).not.toBeDefined();
    console.log("todo updated successfully");
    browser.sleep(500);
  });

  it('should delete the todo',function(){
    expect(reusableMethods.searchdelData('del')).not.toBeDefined();
    console.log("todo deleted successfully");
    browser.sleep(500);
  });
  
});

