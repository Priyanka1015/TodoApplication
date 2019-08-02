//import { element, browser, by } from "protractor";

var url;
describe('should open todo application ', function() {
  browser.ignoreSynchronization=true;

  it('should open signin page',function(){
    browser.get('http://localhost:4200/');
    console.log("signin opened successfully");
   browser.sleep(1000);
  })
  
  it('should signin', function() {
  
    var email=element(by.tagName('input')).sendKeys('madhupriyanka1015@gmail.com');
    console.log("entered mail");
    browser.sleep(1000);
    var submitlink=element(by.id('btn'));
    submitlink.click();
    console.log("clicked submit button");
    browser.sleep(1000);
 
});
it('should show todolist page',function(){
    browser.getCurrentUrl();
    console.log("Todolist page opened sucessfully");
    browser.sleep(1000);

});

it('should add todo',function(){
    var newtodo=element(by.id('addtodo')).sendKeys('check outlook');
    browser.sleep(1000);
    var addlink=element(by.id('addbtn'));
    addlink.click();
    console.log("added todo");
    browser.sleep(1000);  

});
});

