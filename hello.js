var epicodusStudent = {
  firstName: 'Charlie',
  lastName: 'Bucket',
  level: 1,
  track: ['php', 'javascript', 'drupal'],
  enrollmentStatus: true
};
console.log(epicodusStudent);

var myCat = {
  name: 'Kitty',
  speak: function() {
    console.log('meow');
  }
};
console.log(myCat.name);
console.log(myCat['name']);
console.log(myCat.speak());
console.log(myCat['speak']());

var dog = {};
console.log(dog);
dog.name = 'bark twain';
dog.age = 5;
dog.colors = ['brown','black','white'];
console.log(dog.colors[3]);
dog.colors.push('gray');
console.log(dog.colors[3]);
// dog.age = dog.age + 10;
dog.name = 'Rex';
dog.howl = function() {
  console.log('hoooooooowl');
}
dog.humanYears = function() {
  return this.age * 7;
};
console.log(dog.howl());
console.log(dog.humanYears())

var rabbit = {
  name: 'Harry',
  favFood: 'Carrots',
  age: null,
  ageHuman: null,
  humanYearsFunction: function() {
    return this.age*20;
  }
};
console.log(rabbit);
rabbit.age = 2;
rabbit.ageHuman = rabbit.humanYearsFunction();
console.log(rabbit);
console.log('The rabbit is '+rabbit.age+' years old with with human age of '+rabbit.ageHuman+ ' years');

function Lizard(name, colors, age) {
  this.name = name;
  this.colors = colors;
  this.age = age;
  this.humanAge = null;
}

Lizard.prototype.humanAgeCalc = function() {
  return this.age *10;
}

var myLizard1 = new Lizard('mic', ['red', 'white'], 5);
console.log(myLizard1);
console.log(myLizard1.name);

var myLizard2 = new Lizard('lizzy', 'red', 2);
console.log(myLizard2);
