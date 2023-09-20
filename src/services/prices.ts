type PlanType = "arcade" | "advanced" | "pro";
type AddOnType = "onlineService" | "largerStorage" | "customizableProfile";

interface Plans {
  monthly: number;
  yearly: number;
}

interface Prices {
  plans: Record<PlanType, Plans>;
  addOns: Record<AddOnType, Plans>;
}

const getPrices: Prices = {
  plans: {
    arcade: {
      monthly: 9,
      yearly: 90,
    },
    advanced: {
      monthly: 12,
      yearly: 120,
    },
    pro: {
      monthly: 15,
      yearly: 150,
    },
  },
  addOns: {
    onlineService: {
      monthly: 1,
      yearly: 10,
    },
    largerStorage: {
      monthly: 2,
      yearly: 20,
    },
    customizableProfile: {
      monthly: 2,
      yearly: 20,
    },
  },
};

export default getPrices;
