import { useState } from 'react';
import './Button.css';

export function HotButton() {
  const [count, setCount] = useState(0);

  function getClassName() {
    if (count <= 3) {
      return 'darkPurple';
    } else if (count < 6) {
      return 'lightPurple';
    } else if (count < 9) {
      return 'lightRed';
    } else if (count < 12) {
      return 'lightOrange';
    } else if (count < 15) {
      return 'yellow';
    } else if (count <= 18) {
      return 'white';
    }
  }

  const color = getClassName();

  return (
    <button onClick={() => setCount(count + 1)} className={color}>
      Hot Button: {count}
    </button>
  );
}
