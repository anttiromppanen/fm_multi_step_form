import { FormikProps } from "formik";
import { Ref } from "react";

import useSubscription from "../store/useSubscription";
import ViewFactory from "./ViewFactory";
import { wordToUpperCase } from "../helpers/stringManipulation";
import getPrices from "../services/prices";
import useMultiStepFormStore from "../store/useMultiStepFormStore";

function FormChildren() {
  const { goTo } = useMultiStepFormStore((state) => state);
  const prices = getPrices;
  const { plan, billingInterval, addOns } = useSubscription(
    (state) => state.fields,
  );

  const createPriceEnding = billingInterval === "yearly" ? "yr" : "mo";
  const totalPriceCalculation = addOns.reduce(
    (acc, currentAddOn) => acc + prices.addOns[currentAddOn][billingInterval],
    prices.plans[plan][billingInterval],
  );

  return (
    <>
      <div className="rounded-lg bg-userInputRadioBG px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-start">
            <h2 className="text-sm font-bold text-userMarineBlue md:text-base">
              {`${wordToUpperCase(plan)} (${wordToUpperCase(billingInterval)})`}
            </h2>
            <button
              type="button"
              onClick={() => goTo(1)}
              className="
                w-max text-sm text-userCoolGrey underline 
                hover:font-medium hover:text-userPurplishBlue md:text-base"
            >
              Change
            </button>
          </div>
          <p className="text-sm font-bold text-userMarineBlue md:text-base">
            {`$${prices.plans[plan][billingInterval]}/${createPriceEnding}`}
          </p>
        </div>
        <div className="mt-3 flex flex-col gap-y-2 border-t border-userLightGrey pt-3">
          {addOns.map((addOn) => (
            <div key={addOn} className="flex justify-between">
              <p className="text-sm text-userCoolGrey md:text-base">
                {wordToUpperCase(addOn)}
              </p>
              <p className="text-sm text-userMarineBlue md:text-base">
                {`+$${prices.addOns[addOn][billingInterval]}/${createPriceEnding}`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-between px-4">
        <p className="text-sm text-userCoolGrey md:text-base">
          {`Total (per ${billingInterval === "yearly" ? "year" : "month"})`}
        </p>
        <p className="font-bold text-userPurplishBlue md:text-lg">
          {`$${totalPriceCalculation}/${createPriceEnding}`}
        </p>
      </div>
    </>
  );
}

interface SummaryViewProps {
  formRef: Ref<FormikProps<object>> | undefined;
}

function SummaryView({ formRef }: SummaryViewProps) {
  const allFields = useSubscription((state) => state.fields);

  return (
    <ViewFactory
      formRef={formRef}
      heading="Finishing up"
      text="Double-check everything looks OK before confirming."
      initialValues={{ allFields }}
    >
      <FormChildren />
    </ViewFactory>
  );
}

export default SummaryView;
