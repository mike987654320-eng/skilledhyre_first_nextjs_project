import Section from "../common/Section";
import Card from "../common/Card";
import {
  ArrowsPointingOutIcon,
  ServerStackIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

export default function BusinessBenefits() {
  const benefits = [
    {
      title: "Elastic Scalability",
      description:
        "Automatically adjust computing resources based on real-time demand.",
      icon: ArrowsPointingOutIcon,
    },
    {
      title: "High Availability",
      description:
        "Distributed services ensure minimal downtime and operational continuity.",
      icon: ServerStackIcon,
    },
    {
      title: "Faster Innovation",
      description:
        "Independent service deployments allow rapid experimentation and iteration.",
      icon: RocketLaunchIcon,
    },
    {
      title: "Cost Optimization",
      description:
        "Eliminate underutilized infrastructure with dynamic scaling models.",
      icon: CurrencyDollarIcon,
    },
    {
      title: "Future-Ready Infrastructure",
      description:
        "Adapt seamlessly to AI, IoT, big data, and advanced analytics integrations.",
      icon: CubeTransparentIcon,
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            📊 Business Benefits of Cloud-Native Architecture
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={
                index === benefits.length - 1
                  ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                  : ""
              }
            >
              <Card
                {...benefit}
                className="bg-white/5 border border-white/10"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
