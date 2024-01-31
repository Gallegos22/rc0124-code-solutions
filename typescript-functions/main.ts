interface Person {
  firstName: string;
  lastName: string;
}

function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

console.log('convertMinutesToSeconds(2) Result:', convertMinutesToSeconds(2));

function greet(name: string): string {
  return `Hey ${name}!`;
}

console.log("greet('Eduardo') Result:", greet('Eduardo'));

const getArea: any = (width: number, height: number): number => {
  return width * height;
};

console.log('getArea(3,4) Result:', getArea(3, 4));

const getFirstName: any = (person: Person): string => {
  const firstName: string = person.firstName;
  return firstName;
};

console.log(
  "getFirstName({ firstName: 'Eduardo', lastName: 'Gallegos' }) Result:",
  getFirstName({ firstName: 'Eduardo', lastName: 'Gallegos' })
);

const getLastElement: any = (array: []): [] => {
  return array[array.length - 1];
};

console.log(
  'getLastElement([5, 10, 15, 20]) Result:',
  getLastElement([5, 10, 15, 20])
);

function callOtherFunction(otherFunction: any, params: unknown): any {
  return otherFunction(params);
}

console.log(
  "callOtherFunction(getLastElement,['hello','goodbye','Aloha'] Result:",
  callOtherFunction(getLastElement, ['hello', 'goodbye', 'Aloha'])
);
