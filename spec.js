//import { element, browser, by } from "protractor";

var url;
describe('should open todo application ', function() {
  browser.ignoreSynchronization=true;

  it('should open signin page',function(){
    browser.get('http://localhost:4200/');
    console.log("signin page opened successfully");
    browser.sleep(500);
    expect(browser.getTitle()).toBe('Todo List');
  });
  
  it('should enter mail', function() {
  
    var email=element(by.tagName('input')).sendKeys('priya');
    console.log("entered mail");
    browser.sleep(500);
    expect(email).toBe(null);
  });

  it('should signin and show todolist page', function(){
    var submitlink=element(by.id('btn'));
    submitlink.click();
    console.log("clicked submit button");
    console.log("Todolist page opened sucessfully");
    browser.sleep(500);
    expect(browser.getCurrentUrl()).toBe('http://localhost:4200/todos');
  });

  it('should add todo',function(){
    var newtodo=element(by.id('addtodo')).sendKeys('check todo');
    var temp=newtodo;
    browser.sleep(500);
    var addlink=element(by.id('addbtn'));
    addlink.click();
    expect(addlink.isSelected()).toBeFalsy();
    console.log("added todo");
    browser.sleep(500);  
    
  });

  it('should update status of todo',function(){ 
    //check todolist  
    var todoelement=element(by.xpath('//*[@id="listtodos"]/div'));
    var updatetodo=todoelement.element(by.xpath('//*[@id="644"]'));
    updatetodo.click();
    console.log("todo updated successfully");
    browser.sleep(500);
    expect(updatetodo.isSelected()).toBe(true);
  });

  it('should delete the todo',function(){
    //check outlook
    var todoelement=element(by.xpath('//*[@id="listtodos"]/div'));
    var deletetodo=element(by.id('deltodo'));
    deletetodo.click();
    expect(deletetodo.isSelected()).toBeFalsy();
    console.log("todo deleted successfully");
    browser.sleep(500);
  });
  
});

