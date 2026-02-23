import Section from "../common/Section";
import Card from "../common/Card";
import {
  ChartBarIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

export default function Applications() {
  const applications = [
    {
      title: "Predictive Forecasting",
      description:
        "Demand prediction, revenue forecasting, and risk assessment models.",
      icon: ChartBarIcon,
    },
    {
      title: "Recommendation Systems",
      description:
        "Personalized product and content recommendations for enhanced user engagement.",
      icon: ShoppingCartIcon,
    },
    {
      title: "Anomaly & Fraud Detection",
      description:
        "Real-time detection of suspicious transactions and system irregularities.",
      icon: MagnifyingGlassIcon,
    },
    {
      title: "Intelligent Automation",
      description:
        "ML-powered decision engines integrated into enterprise workflows.",
      icon: LightBulbIcon,
    },
    {
      title: "Process Optimization",
      description:
        "Data-driven performance tuning across supply chains and operations.",
      icon: CogIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            📊 Core Business Applications
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {applications.map((app, index) => (
            <div key={index} className={index >= 3 ? "lg:col-span-1.5" : ""}>
              <Card
                {...app}
                className="bg-white/5 border border-white/10 group-hover:border-emerald-500/30"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
