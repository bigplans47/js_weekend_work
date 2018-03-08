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
console.log(myCat['speak']())
