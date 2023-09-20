interface Props {
  currentStepIndex: number;
  isLastStep: boolean;
  handleSubmit: () => void;
  handleGoBack: () => void;
}

function SubmitButton({
  currentStepIndex,
  isLastStep,
  handleSubmit,
  handleGoBack,
}: Props) {
  return (
    <div
      className={`flex w-full bg-userWhite p-4 md:px-24 ${
        currentStepIndex > 0 ? "justify-between" : "justify-end"
      }`}
    >
      {currentStepIndex > 0 && (
        <button
          type="button"
          onClick={handleGoBack}
          className="text-sm font-bold text-userCoolGrey hover:brightness-50 md:text-base"
        >
          Go Back
        </button>
      )}
      <button
        type="submit"
        onClick={handleSubmit}
        className={`min-w-[112px] rounded-md bg-userMarineBlue px-5 py-3 
        text-userWhite hover:brightness-125 md:px-5 md:py-3 ${
          isLastStep && " bg-userPurplishBlue"
        }`}
      >
        {isLastStep ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}

export default SubmitButton;
