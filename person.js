
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFirst = function () {
    return this.firstName;
  }
  this.setFirst = function(firstName){
    if(typeof firstName == 'string'){
      this.firstName = firstName;
    } else {
      console.log("Invalid name!");
    }
  }
  this.getLast = function () {
    return this.lastName;
  }
  this.setLast = function(lastName){
    if(typeof lastName == 'string'){
      this.lastName = lastName;
    } else {
      console.log("Invalid name!");
    }
  }
  this.fullName = function(){
    console.log(this.lastName+", "+this.firstName);
  }
}

var per1 = new Person('Mike',"Mikers");
per1.fullName();
var per2 = new Person();
per2.setFirst('John');
per2.setLast('Johners');
per2.fullName();
