import Section from "../common/Section";
import Card from "../common/Card";
import {
  BoltIcon,
  FaceSmileIcon,
  RocketLaunchIcon,
  CircleStackIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export default function CoreBenefits() {
  const benefits = [
    {
      title: "Real-Time Intelligence",
      description:
        "Products that understand context, surface insights, and reduce decision latency.",
      icon: BoltIcon,
    },
    {
      title: "Enhanced User Experiences",
      description:
        "Adaptive interfaces that feel natural, personalized, and responsive.",
      icon: FaceSmileIcon,
    },
    {
      title: "Faster Innovation Cycles",
      description:
        "AI-driven prototyping and testing accelerate time-to-value.",
      icon: RocketLaunchIcon,
    },
    {
      title: "Scalability Through Data",
      description:
        "Products that grow smarter with usage rather than aging with technology.",
      icon: CircleStackIcon,
    },
    {
      title: "Competitive Differentiation",
      description:
        "AI-first products set new benchmarks for performance, usability, and customer satisfaction.",
      icon: TrophyIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            🤖 Core Benefits for Your Business
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-[16px]">
            By embracing AI-first product design with SkilledHyre Labs, your
            business gains:
          </p>
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
