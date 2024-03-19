import './ImageContainer.css';
import { useState } from 'react';

type Props = {
  imageSrc: string[];
};

export function ImageContainer({ imageSrc }: Props) {
  const [textIndex, setTextIndex] = useState(0);

  function handleClick() {
    if (textIndex >= imageSrc.length - 1) {
      console.log(' if textIndex', textIndex);
      setTextIndex(0);
      console.log(' after if textIndex', textIndex);
    } else {
      console.log(' else textIndex', textIndex);
      setTextIndex(textIndex + 1);
      console.log(' after else textIndex', textIndex);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          onClick={handleClick}
          alt="space-image"
          src={imageSrc[textIndex]}
        />
      </div>
    </div>
  );
}
