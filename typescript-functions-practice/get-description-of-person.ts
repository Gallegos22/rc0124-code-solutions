/* exported getDescriptionOfPerson */
interface person {
  name: string;
  occupation: string;
  birthPlace: string;
}

function getDescriptionOfPerson(person: person): string {
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}
