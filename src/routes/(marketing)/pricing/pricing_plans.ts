export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
  },
  {
    id: "pro",
    name: "Pro Monthly",
    description:
      "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
    price: "$19.95",
    priceIntervalName: "per month",
    stripe_price_id: "price_1OvOY2BY2rJMMJgqtPhtp3vX",
    stripe_product_id: "prod_PkuMEcwojqxKfc",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  {
    id: "pro",
    name: "Pro Yealry",
    description:
      "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
    price: "$19.95",
    priceIntervalName: "per year",
    stripe_price_id: "price_1OvOXRBY2rJMMJgqCMyOjree",
    stripe_product_id: "prod_PkuMdvq9kqOpY6",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },

]
