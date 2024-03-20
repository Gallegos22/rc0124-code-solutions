import { Header } from './Header'; // importing from Header file so we can access our data
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/galaxy.jpg', '/paradise.jpg'];
const imageCap = [
  'A Beautiful Image of Space',
  'Another Image Of Space Because Why Not?',
  'Paradise, Right Where We Wanna Be',
];

const imageDescrip = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas rerum quos asperiores quis in ! Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero. Modi nisi eos autem ? Iusto hic impedit aspernatur labore quos nesciunt ? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum, dicta sunt laborum similique repellat ?  NUMBER 1',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas rerum quos asperiores quis in ! Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero. Modi nisi eos autem ? Iusto hic impedit aspernatur labore quos nesciunt ? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum, dicta sunt laborum similique repellat ? NUMBER 2',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas rerum quos asperiores quis in ! Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero. Modi nisi eos autem ? Iusto hic impedit aspernatur labore quos nesciunt ? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum, dicta sunt laborum similique repellat ? NUMBER 3',
];

const buttonText = 'Click for Next Image';

function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageDescrip={imageDescrip} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}

export default App;
