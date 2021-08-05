//ES6 introduces two new ways to create variables.

//let : You can change the value of it.
let nam = 'Trevis';
let year = 1873;
console.log(nam);
nam = 'Canizzano';
year = 1890;
let objBlog = { 
  title: 'Blog Title',
  description: 'Blog Description',
}

//const : constant value. Cannot be updated.

const API = 'http://api.test.com/v1/';
// API = API.replace; → TypeError: Assignment to constant variable.

console.log(nam);
console.log(year);
console.log(objBlog);
console.log(objBlog.title);
console.log(objBlog.description);
console.log(API);


