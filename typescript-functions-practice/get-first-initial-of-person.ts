/* exported getFirstInitialOfPerson */
interface PersonIni {
  firstName: string;
  lastName: string;
}

function getFirstInitialOfPerson(person: PersonIni): any {
  return person.firstName.charAt(0);
}
