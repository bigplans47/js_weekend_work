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
console.log('dog over')

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
