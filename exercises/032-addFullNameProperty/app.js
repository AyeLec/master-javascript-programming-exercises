function addFullNameProperty(obj) {
  // Add your code after this line
  let fullName = obj.firstName + " " + obj.lastName;
  obj.fullName = fullName;
  return obj;
}

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName);