/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string: string): boolean {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

interface Person {
  name: string;
  age: number;
}

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

interface PersonI {
  name: string;
  age: number;
}

function isOldEnoughToDrive(person: PersonI): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

interface PersonS {
  name: string;
  age: number;
}

function isOldEnoughToDrinkAndDrive(person: PersonS): boolean {
  if (person) {
    return false;
  } else {
    return false;
  }
}

function categorizeAcidity(ph: number): string {
  if (ph === 7) {
    return 'neutral';
  } else if (ph < 7 && ph >= 0) {
    return 'acid';
  } else if (ph <= 14 && ph >= 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Taken';
    case 'comedy':
      return 'Surfs Up';
    case 'horror':
      return 'The Conjuring';
    case 'drama':
      return 'Jersey Shore';
    case 'musical':
      return 'The Greatest Showman';
    case 'sci-fi':
      return 'Star Wars';
    default:
      return 'Genre not recognized, Choose between action, comedy, horror, drama, musical, sci-fi.';
  }
}
