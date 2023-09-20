import { create } from "zustand";

export type AddOns = "onlineService" | "largerStorage" | "customizableProfile";

interface Fields {
  name: string;
  email: string;
  phoneNumber: string;
  plan: "arcade" | "advanced" | "pro";
  billingInterval: "monthly" | "yearly";
  addOns: AddOns[];
}

interface SubscriptionState {
  fields: Fields;
}

interface SubscriptionActions {
  updateFields: (newFields: Partial<Fields>) => void;
  updateAddOns: (addOn: Partial<AddOns>) => void;
}

interface SubscriptionHelpers {
  isYearlySubscriptionActive: () => boolean;
  isIncludedInAddons: (addOn: AddOns) => boolean;
}

const useSubscription = create<SubscriptionState & SubscriptionActions>()(
  (set) => ({
    fields: {
      name: "",
      email: "",
      phoneNumber: "",
      plan: "arcade",
      billingInterval: "monthly",
      addOns: [],
    },
    updateFields: (newFields) =>
      set((state) => ({
        fields: {
          ...state.fields,
          ...newFields,
        },
      })),
    updateAddOns: (addOn) => {
      set((state) => {
        const { addOns } = state.fields;
        const updatedAddons = addOns.includes(addOn)
          ? [...addOns].filter((x) => x !== addOn)
          : addOns.concat(addOn);

        return {
          fields: {
            ...state.fields,
            addOns: updatedAddons,
          },
        };
      });
    },
  }),
);

export const subscriptionHelpers: SubscriptionHelpers = {
  isYearlySubscriptionActive: () => {
    const { fields } = useSubscription.getState();
    const { billingInterval } = fields;
    return billingInterval === "yearly";
  },
  isIncludedInAddons: (addOn: AddOns) => {
    const { fields } = useSubscription.getState();
    const { addOns } = fields;
    return addOns.includes(addOn);
  },
};

export default useSubscription;
