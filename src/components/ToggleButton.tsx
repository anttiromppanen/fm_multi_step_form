import useSubscription from "../store/useSubscription";

function ToggleButton() {
  const { billingInterval } = useSubscription((state) => state.fields);
  const updateSubscriptionState = useSubscription(
    (state) => state.updateFields,
  );

  return (
    <div className="relative flex w-max flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label
          className="relative mr-5 inline-flex cursor-pointer items-center"
          htmlFor="plan-toggle"
        >
          <input
            id="plan-toggle"
            type="checkbox"
            className="peer sr-only"
            checked={billingInterval === "yearly"}
            readOnly
          />
          <button
            type="button"
            aria-label="Yearly or monthly plan toggle"
            onClick={() => {
              updateSubscriptionState(
                billingInterval === "monthly"
                  ? { billingInterval: "yearly" }
                  : { billingInterval: "monthly" },
              );
            }}
            className="
              peer h-6 w-11 rounded-full bg-gray-200  
              after:absolute  after:left-[2px] after:top-0.5 after:h-5 after:w-5 
              after:rounded-full after:border after:border-gray-300 
              after:bg-white after:transition-all after:content-[''] 
              peer-checked:bg-userMarineBlue peer-checked:after:translate-x-full 
              peer-checked:after:border-white peer-focus:ring-userMarineBlue"
          />
        </label>
      </div>
    </div>
  );
}

export default ToggleButton;
