import { useState } from 'react';

type Props = {
  imageCap: string[];
};

export function ImageCaption({ imageCap }: Props) {
  const [textIndex, setTextIndex] = useState(0);

  function handleClick() {
    if (textIndex >= imageCap.length - 1) {
      setTextIndex(0);
    } else {
      setTextIndex(textIndex + 1);
    }
  }

  return (
    <div>
      <h3 onClick={handleClick}>{imageCap[textIndex]}</h3>
    </div>
  );
}
