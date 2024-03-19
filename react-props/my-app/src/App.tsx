import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const h1Text = 'React Image Bankkk';
const imageSrc = '/starry-sky.jpeg';
const imageText = 'A Beautiful Image Of Space';
const imageDescr = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        incidunt sit dolorum accusantium sapiente reiciendis maxime dolores
        ullam delectus, commodi placeat eveniet, quam voluptates facere et
        magnam architecto quaerat velit voluptas rerum quos asperiores quis in!
        Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero.
        Modi nisi eos autem? Iusto hic impedit aspernatur labore quos nesciunt?
        Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi
        ipsum, dicta sunt laborum similique repellat?`;
const BtnContainer = 'Click For Next Image';

function App() {
  return (
    <>
      <Header headerText={h1Text} />
      <ImageContainer imageContainer={imageSrc} />
      <ImageCaption imageCaption={imageText} />
      <ImageDescription imageDescription={imageDescr} />
      <ButtonContainer buttonContainer={BtnContainer} />
    </>
  );
}

export default App;
