/* exported getInitialsOfPerson */
interface PersonIn {
  firstName: string;
  lastName: string;
}

function getInitialsOfPerson(person: PersonIn): any {
  return `${person.firstName.charAt(0)}${person.lastName.charAt(0)}`;
}
