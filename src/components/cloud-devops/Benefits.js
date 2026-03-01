import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Benefits() {
  const benefits = [
    {
      title: "Accelerated Delivery",
      description: "Automation reduces lead time for new features and updates.",
    },
    {
      title: "Cost Optimization",
      description: "Proactive management and rightsizing reduce cloud spend.",
    },
    {
      title: "High System Availability",
      description: "Resilient architectures ensure uptime and reliability.",
    },
    {
      title: "Future-Ready Infrastructure",
      description: "Platforms that support modern, elastic scaling needs.",
    },
    {
      title: "Strategic Operational Agility",
      description:
        "Teams that can react faster to market and business changes.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🌟 Business Benefits
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
