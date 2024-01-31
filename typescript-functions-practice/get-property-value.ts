/* exported getPropertyValue */
interface Person {
  name: string;
  occupation: string;
  birthPlace: string;
}

function getPropertyValue(object: Person, key: string): string {
  return object[key as keyof Person];
}
