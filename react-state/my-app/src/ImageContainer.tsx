import './ImageContainer.css';
import { useState } from 'react';

type Props = {
  imageSrc: string[];
};

export function ImageContainer({ imageSrc }: Props) {
  const [textIndex, setTextIndex] = useState(0); // index is a state variable and setIndex is a setter function

  function handleClick() {
    if (textIndex >= imageSrc.length - 1) {
      // if 0 is greater than or equal to 3
      setTextIndex(0); // we are setting index to zero
    } else {
      setTextIndex(textIndex + 1);
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
