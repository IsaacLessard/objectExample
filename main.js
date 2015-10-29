function Dog(name, bark, legs){
  this.legs = 4;
  this.name = name;
  Dog.type = type;
  this.bark = function(){
    console.log(bark);
  }
  this.getLegs = function () {
    return this.legs;
  }
  this.setLegs = function (numLegs) {
    if(typeof numLegs == 'number'){
      this.legs = numLegs;
    } else {
      console.log('legs must be a number');
    }
  }
}
