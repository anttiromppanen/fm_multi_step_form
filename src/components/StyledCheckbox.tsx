/* eslint-disable react/jsx-props-no-spreading */
import { Field } from "formik";
import { ChangeEvent } from "react";

import checkmarkIcon from "../assets/images/icon-checkmark.svg";
import useSubscription, {
  AddOns,
  subscriptionHelpers,
} from "../store/useSubscription";

interface Props {
  id: Partial<AddOns>;
  heading: string;
  text: string;
  price: { monthly: number; yearly: number };
  value: Partial<AddOns>;
}

function StyledCheckbox({ ...props }: Props) {
  const updateAddOns = useSubscription((state) => state.updateAddOns);
  const isIncludedInAddons = subscriptionHelpers.isIncludedInAddons(
    props.value,
  );
  const isYearlySubscriptionActive =
    subscriptionHelpers.isYearlySubscriptionActive();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedValue: Partial<AddOns> = e.target.value as Partial<AddOns>;
    updateAddOns(selectedValue);
  };

  const priceEndingOutput = isYearlySubscriptionActive ? "yr" : "mo";
  const priceOutput = isYearlySubscriptionActive
    ? props.price.yearly
    : props.price.monthly;

  return (
    <label htmlFor={props.id}>
      <Field
        type="checkbox"
        name="addOns"
        className="hidden"
        onClick={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        {...props}
      />
      <div
        className={`flex items-center gap-x-4 rounded-lg border border-userLightGrey px-4 py-3 hover:border-userPurplishBlue md:p-6 ${
          isIncludedInAddons && "border-userPurplishBlue bg-userAlabaster"
        }`}
      >
        <div className="h-[22px] w-[26px] rounded-md border border-userLightGrey">
          <img
            src={checkmarkIcon}
            alt="Checkmark icon"
            className={`invisible h-full w-full rounded-md bg-userPurplishBlue p-1 ${
              isIncludedInAddons && " !visible"
            }`}
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-sm font-bold text-userMarineBlue md:text-base">
              {props.heading}
            </h2>
            <p className="text-xs text-userCoolGrey md:text-base">
              {props.text}
            </p>
          </div>
          <p className="text-xs font-bold text-userPurplishBlue md:text-base">
            {`+$${priceOutput}/${priceEndingOutput}`}
          </p>
        </div>
      </div>
    </label>
  );
}

export default StyledCheckbox;
