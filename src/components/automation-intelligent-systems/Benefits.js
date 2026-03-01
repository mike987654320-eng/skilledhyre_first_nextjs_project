import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Benefits() {
  const benefits = [
    {
      title: "Operational Excellence",
      description:
        "Eliminate repetitive manual tasks and increase processing speed across the enterprise.",
    },
    {
      title: "Data Accuracy & Reliability",
      description:
        "Automation reduces human errors and ensures consistent, high-quality outputs.",
    },
    {
      title: "24/7 Productivity",
      description:
        "Automated systems operate continuously without downtime or fatigue.",
    },
    {
      title: "Faster Decision-Making",
      description:
        "AI-powered automation delivers real-time insights and predictive alerts for agility.",
    },
    {
      title: "Scalable Growth",
      description:
        "Business processes scale effortlessly as your operational volume increases.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-6">
            📊 Key Business Benefits
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Intelligent automation delivers measurable ROI by transforming
            operational efficiency into strategic competitive advantage.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
            >
              <CheckCircleIcon className="w-8 h-8 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
