import Section from "../common/Section";
import Card from "../common/Card";
import {
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

export default function Advantages() {
  const advantages = [
    {
      title: "Accelerated Innovation Cycles",
      description:
        "Reduce time-to-market through AI-powered ideation and production.",
      icon: FireIcon,
    },
    {
      title: "Cost Efficiency",
      description:
        "Lower operational expenses by automating repetitive content and workflow tasks.",
      icon: CurrencyDollarIcon,
    },
    {
      title: "Enhanced Personalization",
      description:
        "Deliver highly tailored user experiences using contextual AI intelligence.",
      icon: UserGroupIcon,
    },
    {
      title: "Workforce Augmentation",
      description:
        "Empower teams with AI copilots that enhance productivity rather than replace expertise.",
      icon: ClockIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            🌟 Competitive Advantages
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {advantages.map((adv, index) => (
            <Card
              key={index}
              {...adv}
              className="bg-white/5 border border-white/10 group-hover:border-indigo-500/30"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
