import Section from "../common/Section";
import Card from "../common/Card";
import {
  LightBulbIcon,
  CogIcon,
  FaceSmileIcon,
  TrophyIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function Benefits() {
  const benefits = [
    {
      title: "Data-Driven Decisions",
      description: "Reduce guesswork through intelligent insights.",
      icon: LightBulbIcon,
    },
    {
      title: "Improved Operational Efficiency",
      description: "Automate high-complexity tasks with accuracy.",
      icon: CogIcon,
    },
    {
      title: "Enhanced Customer Experience",
      description: "Deliver hyper-personalized interactions.",
      icon: FaceSmileIcon,
    },
    {
      title: "Competitive Differentiation",
      description:
        "Build intelligent products that outperform traditional systems.",
      icon: TrophyIcon,
    },
    {
      title: "Scalable Intelligence",
      description: "Models grow smarter as your data ecosystem expands.",
      icon: ChartBarIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            🌟 Benefits of Machine Learning Engineering
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              {...benefit}
              className={`bg-white/5 border border-white/10 group-hover:border-emerald-500/30 ${index === 4 ? "lg:col-span-1 lg:col-start-2" : ""}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
