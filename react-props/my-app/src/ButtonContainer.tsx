type Props = {
  buttonContainer: string;
};

export function ButtonContainer({ buttonContainer }: Props) {
  return (
    <div>
      <button>{buttonContainer}</button>
    </div>
  );
}
