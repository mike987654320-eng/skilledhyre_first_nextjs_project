import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Benefits() {
  const benefits = [
    {
      title: "High-Performance Products",
      description:
        "Seamless user experiences that drive engagement and retention.",
    },
    {
      title: "Improved Customer Retention",
      description: "Reliable, feature-rich platforms that users trust.",
    },
    {
      title: "Scalable & Reliable",
      description: "Systems that grow effortlessly as your user base expands.",
    },
    {
      title: "Rapid Innovation",
      description: "Accelerated development cycles for faster market impact.",
    },
    {
      title: "Future-Proof Tech Stack",
      description:
        "Built on modern frameworks and secure, scalable infrastructures.",
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
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors"
            >
              <CheckCircleIcon className="w-8 h-8 text-emerald-400 mb-4" />
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
