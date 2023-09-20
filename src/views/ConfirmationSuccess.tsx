import successIcon from "../assets/images/icon-thank-you.svg";

function ConfirmationSuccess() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center py-10 text-center">
      <img
        src={successIcon}
        alt="Success icon"
        className="h-[58px] w-[58px] md:h-[82px] md:w-[82px]"
      />
      <h1 className="mb-2 mt-5 text-2xl font-bold text-userMarineBlue md:mb-3 md:mt-7 md:text-3xl">
        Thank you!
      </h1>
      <p className="text-userCoolGrey">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ConfirmationSuccess;
