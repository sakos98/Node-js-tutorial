// const os = require('os');

// console.log('Platform: ', os.platform());
// console.log('Arch: ', os.arch());
// console.log('User: ', os.userInfo());

const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Michał', 'Patryk', 'Dominik', 'Piotr', 'Grzegorz'];
const femaleNames = ['Justyna', 'Iwona', 'Daria', 'Magda', 'Marta'];
const lastNames = ['Sak', 'Bednarek', 'Kowalski', 'Myszka', 'Król'];

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);

  const firstName = gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);

  const lastName = randChoice(lastNames);

  const age = Math.floor(Math.random() * 79) + 18;

  const person = {
    gender,
    firstName,
    lastName,
    age,
  };
  people.push(person);
}

const jsonData = JSON.stringify(people, null,2);

fs.writeFile('people.json', jsonData, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Data saved to people.json successfully!');
    }
});