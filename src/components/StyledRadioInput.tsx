/* eslint-disable react/jsx-props-no-spreading */
import { Field, FieldHookConfig } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";
import useSubscription, { subscriptionHelpers } from "../store/useSubscription";

type StyledRadioInputProps = InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string> & {
    icon: string;
    price: { monthly: number; yearly: number };
  };

function StyledRadioInput({ icon, price, ...props }: StyledRadioInputProps) {
  const subscriptionState = useSubscription((state) => state.fields);
  const setFields = useSubscription((state) => state.updateFields);
  const activePlan = subscriptionState.plan;
  const isYearlySubsciptionActive =
    subscriptionHelpers.isYearlySubscriptionActive();

  const priceOutput = isYearlySubsciptionActive ? price.yearly : price.monthly;
  const priceEndingOutput = isYearlySubsciptionActive ? "yr" : "mo";

  return (
    <label htmlFor={props.value} className="flex-1">
      <Field
        id={props.value}
        type="radio"
        className="hidden"
        onClick={() => setFields({ plan: props.value })}
        {...props}
      />
      <div
        className={`
          flex items-center gap-x-4 gap-y-8 rounded-lg border border-userLightGrey bg-userWhite p-4 
          hover:outline hover:outline-1 hover:outline-userPurplishBlue 
          md:flex-col md:items-start
            ${
              activePlan === props.value &&
              " !bg-userInputRadioBG outline outline-1 outline-userPurplishBlue"
            }`}
      >
        <div className={isYearlySubsciptionActive ? "-mt-6 md:-mt-0" : "mt-0"}>
          <img src={icon} alt="Plan icon" />
        </div>
        <div>
          <h2 className="font-bold text-userMarineBlue">
            {props.value.charAt(0).toUpperCase() + props.value.slice(1)}
          </h2>
          <p className="text-userCoolGrey">
            {`$${priceOutput}/${priceEndingOutput}`}
          </p>
          {isYearlySubsciptionActive && (
            <p className="text-sm text-userMarineBlue">2 months free</p>
          )}
        </div>
      </div>
    </label>
  );
}

export default StyledRadioInput;
