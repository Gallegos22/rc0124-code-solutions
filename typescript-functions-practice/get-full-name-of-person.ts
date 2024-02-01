/* exported getFullNameOfPerson */
interface person {
  firstName: string;
  lastName: string;
}

function getFullNameOfPerson(person: person): string {
  return `${person.firstName} ${person.lastName}`;
}
