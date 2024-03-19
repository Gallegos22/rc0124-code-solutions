import { takeAChance } from './take-a-chance.js';

const name = 'Luke';

takeAChance(name)
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.error(error.message);
  });
