interface Props {
  handleSubmit: () => void;
}

function SubmitButton({ handleSubmit }: Props) {
  return (
    <div className="flex w-full justify-between bg-userWhite p-4">
      <button type="button" className="text-sm font-bold text-userCoolGrey">
        Go Back
      </button>
      <button
        type="submit"
        onClick={handleSubmit}
        className="rounded-md bg-userMarineBlue px-4 py-3 text-userWhite md:px-5 md:py-3"
      >
        Next Step
      </button>
    </div>
  );
}

export default SubmitButton;
