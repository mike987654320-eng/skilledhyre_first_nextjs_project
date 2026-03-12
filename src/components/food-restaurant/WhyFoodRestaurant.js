import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyFoodRestaurant() {
  const points = [
    "Enable seamless online ordering and table reservations",
    "Manage menus, orders, and inventory efficiently",
    "Integrate with food delivery platforms",
    "Improve customer engagement and loyalty",
    "Automate restaurant operations and reporting",
    "Expand services through cloud kitchens and online marketplaces",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Digital Transformation Matters in Food & Restaurant
              Businesses
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              The modern restaurant ecosystem is driven by digital convenience.
              From online ordering to delivery tracking and loyalty programs,
              technology plays a key role in improving customer satisfaction and
              operational efficiency. By adopting advanced digital systems, food
              businesses can:
            </p>
            <div className="grid grid-cols-1 gap-3">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 mt-6">
              Digital platforms allow restaurants to serve customers faster,
              manage operations efficiently, and increase revenue opportunities.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <div className="text-6xl mb-6">🍔</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Digital Dining
              </h3>
              <p className="text-gray-400">
                Where culinary excellence meets operational efficiency in the
                digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
