// import { useState } from 'react';

type Props = {
  imageDescrip: string;
};

export function ImageDescription({ imageDescrip }: Props) {
  // const [descIndex, setdescIndex] = useState(0);

  // function handleClick() {
  //   if (descIndex >= imageDescrip.length - 1) {
  //     setdescIndex(0);
  //   } else {
  //     setdescIndex(descIndex + 1);
  //   }
  // }

  return (
    <div>
      <p>{imageDescrip}</p>
    </div>
  );
}
