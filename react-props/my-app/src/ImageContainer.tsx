import './ImageContainer.css';

type Props = {
  imageContainer: string;
};

export function ImageContainer({ imageContainer }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={imageContainer} alt="space-image " />
      </div>
    </div>
  );
}
