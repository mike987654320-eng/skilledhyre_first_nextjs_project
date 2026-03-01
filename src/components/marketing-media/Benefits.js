import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Benefits() {
  const benefits = [
    {
      title: "Audience-Centric Media Innovation",
      description:
        "Deliver digital media experiences that audiences love and trust.",
    },
    {
      title: "Enhanced Operational Reliability",
      description:
        "Automate core content workflows and ensure high-traffic uptime.",
    },
    {
      title: "Improved Customer Retention",
      description:
        "Leverage AI and data to provide personalized and engaging content journeys.",
    },
    {
      title: "Secure & Scalable Infrastructure",
      description:
        "Build platforms that grow securely as your user base expands globally.",
    },
    {
      title: "High Market Confidence",
      description:
        "Ensure ongoing performance and security in a competitive media landscape.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🌟 Strategic Advantages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-fuchsia-500/30 transition-colors"
            >
              <CheckCircleIcon className="w-8 h-8 text-fuchsia-400 mb-4" />
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
