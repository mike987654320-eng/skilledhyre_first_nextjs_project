import Section from "../common/Section";
import Card from "../common/Card";
import {
  ArrowTrendingUpIcon,
  CogIcon,
  FaceSmileIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export default function Benefits() {
  const benefits = [
    {
      title: "Strategic Agility",
      description:
        "Adapt quickly to market changes and technological disruptions.",
      icon: ArrowTrendingUpIcon,
    },
    {
      title: "Operational Innovation",
      description:
        "Transform traditional workflows into intelligent digital ecosystems.",
      icon: CogIcon,
    },
    {
      title: "Enhanced Customer Experience",
      description:
        "Deliver immersive, personalized, and seamless interactions.",
      icon: FaceSmileIcon,
    },
    {
      title: "Competitive Leadership",
      description: "Position your organization as an industry innovator.",
      icon: TrophyIcon,
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            📊 Business Benefits of Adopting Emerging Technologies
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              {...benefit}
              className="bg-white/5 border border-white/10"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
