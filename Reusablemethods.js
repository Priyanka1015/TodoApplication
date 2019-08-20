var Reusablemethodspage = function() {  
        
    this.enterData= function(iddata,data){
        var email=element(by.id(iddata));
        email.sendKeys(data);
    },
    this.buttonclick=function(iddata){
        var submitlink=element(by.id(iddata));
        submitlink.click();
    },
    this.searchData=function(data){
        var searchtodo=element(by.name(data));
        searchtodo.click();
    }
    this.searchdelData=function(data){
        var searchtodo=element(by.className(data));
        searchtodo.click();
    }
    };
    module.exports = new Reusablemethodspage();
  
    
  
  