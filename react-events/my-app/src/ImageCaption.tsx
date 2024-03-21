// import { useState } from 'react';

type Props = {
  imageCap: string;
};

export function ImageCaption({ imageCap }: Props) {
  // const [imageCapIndex, setImageCapIndex] = useState(0);

  // function handleClick() {
  //   if (imageCapIndex >= imageCap.length - 1) {
  //     setImageCapIndex(0);
  //   } else {
  //     setImageCapIndex(imageCapIndex + 1);
  //   }
  // }

  return (
    <div>
      <h3>{imageCap}</h3>
    </div>
  );
}
