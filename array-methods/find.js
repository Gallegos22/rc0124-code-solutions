'use strict';
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];
const products = [
  { id: 1, name: 'iPhone', price: 999 },
  { id: 2, name: 'Samsung Galaxy', price: 899 },
  { id: 3, name: 'Google Pixel', price: 799 },
];
function idUsers(users) {
  return users.id === 2;
}
console.log('users:', users.find(idUsers));
console.log(idUsers);
function phones(products) {
  return products.price > 900;
}
console.log('expensiveProduct:', products.find(phones));
console.log(phones);
