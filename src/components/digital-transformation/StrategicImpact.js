import Section from "../common/Section";
import Card from "../common/Card";
import {
  ChartBarIcon,
  ChartPieIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function StrategicImpact() {
  const outcomes = [
    {
      title: "Operational Efficiency",
      description:
        "Streamline and automate routine processes to minimize errors, reduce overhead, and improve operational velocity — allowing teams to focus on innovation rather than maintenance.",
      icon: ChartBarIcon,
    },
    {
      title: "Data-Driven Decision-Making",
      description:
        "Convert raw data into actionable insights that fuel intelligent business decisions. By breaking down data silos and applying analytics, organizations gain unprecedented strategic clarity.",
      icon: ChartPieIcon,
    },
    {
      title: "Enhanced Security & Compliance",
      description:
        "Modern infrastructures are built with defense-in-depth principles. By upgrading legacy systems and implementing best-in-class security controls, we help protect your business against evolving threats.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Superior Customer Experience",
      description:
        "Customers expect seamless digital interactions. We design personalized, intuitive experiences that increase engagement and loyalty at every touchpoint.",
      icon: UserGroupIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            🔍 Strategic Impact Across Your Enterprise
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-[16px]">
            Every digital transformation initiative should deliver measurable
            business impact. At SkilledHyre Labs, we focus on four strategic
            outcomes that drive real value:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((outcome, index) => (
            <Card
              key={index}
              {...outcome}
              className="bg-white/5 border border-white/10"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
