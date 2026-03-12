import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Benefits() {
  const benefits = [
    {
      title: "Faster Policy Processing",
      description:
        "Automate policy issuance, renewals, and documentation processes.",
    },
    {
      title: "Simplified Claims Management",
      description:
        "Provide faster and more transparent claims processing for customers.",
    },
    {
      title: "Improved Customer Engagement",
      description:
        "Offer digital portals and mobile apps for convenient access to insurance services.",
    },
    {
      title: "Data-Driven Risk Management",
      description:
        "Use analytics to evaluate risks and improve underwriting decisions.",
    },
    {
      title: "Scalable Insurance Platforms",
      description:
        "Support growing policyholder bases with cloud-based digital systems.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🌟 Benefits for Insurance Businesses
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/30 transition-colors"
            >
              <CheckCircleIcon className="w-8 h-8 text-rose-400 mb-4" />
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
