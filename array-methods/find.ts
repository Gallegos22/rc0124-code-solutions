interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const users: User[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];

const products: Product[] = [
  { id: 1, name: 'iPhone', price: 999 },
  { id: 2, name: 'Samsung Galaxy', price: 899 },
  { id: 3, name: 'Google Pixel', price: 799 },
];

function idUsers(users: User): any {
  return users.id === 2;
}

console.log('users:', users.find(idUsers));
console.log(idUsers);

function phones(products: Product): any {
  return products.price > 900;
}

console.log('expensiveProduct:', products.find(phones));
console.log(phones);
