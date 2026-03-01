import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Benefits() {
  const benefits = [
    {
      title: "Operational Efficiency",
      description:
        "Automate complex workflows and eliminate manual bottlenecks.",
    },
    {
      title: "Competitive Advantage",
      description:
        "Build proprietary systems that competitors cannot replicate easily.",
    },
    {
      title: "Scalability & Flexibility",
      description:
        "Software that grows with your business and adapts to market changes.",
    },
    {
      title: "Improved Data Visibility",
      description:
        "Centralized dashboards and analytics for better decision-making.",
    },
    {
      title: "Long-Term Cost Optimization",
      description: "Eliminate recurring licensing costs of generic platforms.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🌟 Key Business Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
            >
              <CheckCircleIcon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
