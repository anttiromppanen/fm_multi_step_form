import { FormikProps } from "formik";
import { Ref } from "react";

import advacedIcon from "../assets/images/icon-advanced.svg";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import proIcon from "../assets/images/icon-pro.svg";
import StyledRadioInput from "../components/StyledRadioInput";
import ToggleButton from "../components/ToggleButton";
import useSubscription, { subscriptionHelpers } from "../store/useSubscription";
import ViewFactory from "./ViewFactory";
import getPrices from "../services/prices";

const toggleTextStyles = {
  active: "text-sm text-userMarineBlue font-bold",
  nonActive: "text-sm text-userCoolGrey font-normal",
};

function FormChildren() {
  const isYearlySubscipttionActive =
    subscriptionHelpers.isYearlySubscriptionActive();
  const { plans } = getPrices;

  return (
    <div
      role="group"
      aria-labelledby="billing-plans"
      className="flex flex-col gap-y-4 md:gap-y-8"
    >
      <div className="flex flex-col gap-x-5 gap-y-4 md:flex-row">
        <StyledRadioInput
          icon={arcadeIcon}
          name="plan"
          value="arcade"
          price={plans.arcade}
        />
        <StyledRadioInput
          icon={advacedIcon}
          name="plan"
          value="advanced"
          price={plans.advanced}
        />
        <StyledRadioInput
          icon={proIcon}
          name="plan"
          value="pro"
          price={plans.pro}
        />
      </div>
      <div className="flex justify-center rounded-md bg-userInputRadioBG py-3">
        <p
          className={`mr-5 ${
            !isYearlySubscipttionActive
              ? toggleTextStyles.active
              : toggleTextStyles.nonActive
          }`}
        >
          Monthly
        </p>
        <ToggleButton />
        <p
          className={
            isYearlySubscipttionActive
              ? toggleTextStyles.active
              : toggleTextStyles.nonActive
          }
        >
          Yearly
        </p>
      </div>
    </div>
  );
}

interface PlanViewProps {
  formRef: Ref<FormikProps<object>> | undefined;
}

function PlanView({ formRef }: PlanViewProps) {
  const { plan } = useSubscription((state) => state.fields);

  return (
    <ViewFactory
      formRef={formRef}
      heading="Select your plan"
      text="You have the option of monthly or yearly billing."
      initialValues={{ plan }}
    >
      <FormChildren />
    </ViewFactory>
  );
}

export default PlanView;
