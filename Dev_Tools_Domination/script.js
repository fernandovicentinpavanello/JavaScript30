const dogs = [
  {
    name: 'Snikers',
    age: 2,
  },
  {
    name: 'Fred',
    age: 8,
  },
];

document.getElementById('content').style.backgroundColor = '#282a34';
document.getElementById('button').style.backgroundColor = '#20698a';
document.getElementById('button').style.color = '#E6E3E3';
document.getElementById('button').style.border = '3px solid #E2B715';
document.getElementById('button').style.borderRadius = '8px';
document.getElementById('button').style.width = '150px';
document.getElementById('button').style.padding = '10px';

function makeGreen() {
  const btn = document.querySelector('button');
  btn.style.color = '#55d835';
  btn.style.fontSize = '36px';
  btn.style.width = '350px';
  btn.style.padding = '10px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');

//Styled
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

// warning!
console.warn('OH NOOO');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
// const btnTest = querySelector('button');

// console.assert(btnTest.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(button);
console.dir(button);

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
