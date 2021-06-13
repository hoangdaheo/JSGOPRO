var firstName = 'Hoang', lastName = 'Pham';
// 2 biến này nằm trong object window

var person = {
  firstName:'hoangdaheo',
  lastName:'asdasd'
}
function showName()
{
  console.log(this.firstName + ' '+ this.lastName);
}

//window.showName(); // Hoang Pham. this trỏ tới object window
showName.bind(person)();