import { useState } from 'react';

type Props = {
  imageDescrip: string[];
};

export function ImageDescription({ imageDescrip }: Props) {
  const [textIndex, setTextIndex] = useState(0);

  function handleClick() {
    if (textIndex >= imageDescrip.length - 1) {
      setTextIndex(0);
    } else {
      setTextIndex(textIndex + 1);
    }
  }

  return (
    <div>
      <p onClick={handleClick}>{imageDescrip[textIndex]}</p>
    </div>
  );
}
