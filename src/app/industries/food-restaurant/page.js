import Hero from "../../../components/food-restaurant/Hero";
import WhyFoodRestaurant from "../../../components/food-restaurant/WhyFoodRestaurant";
import Capabilities from "../../../components/food-restaurant/Capabilities";
import Approach from "../../../components/food-restaurant/Approach";
import Security from "../../../components/food-restaurant/Security";
import Benefits from "../../../components/food-restaurant/Benefits";
import CTA from "../../../components/food-restaurant/CTA";

export const metadata = {
  title: "Food & Restaurant | SkilledHyre Labs",
  description:
    "Powering Digital Innovation for Food & Restaurant Businesses. We help restaurants and cloud kitchens build intelligent platforms.",
};

export default function FoodRestaurantPage() {
  return (
    <>
      <Hero />
      <WhyFoodRestaurant />
      <Capabilities />
      <Approach />
      <Security />
      <Benefits />
      <CTA />
    </>
  );
}
