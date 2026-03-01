import Section from "../common/Section";
import Card from "../common/Card";
import {
  CpuChipIcon,
  CircleStackIcon,
  LightBulbIcon,
  ChartBarIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

export default function WhatIsIA() {
  const points = [
    {
      title: "Robotic Process Automation (RPA)",
      description:
        "Automating repetitive, rule-based tasks with software bots.",
      icon: ArrowsRightLeftIcon,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Systems that learn from data, adapt to changes, and improve over time.",
      icon: CpuChipIcon,
    },
    {
      title: "Workflow Orchestration",
      description:
        "Coordinating complex business processes across multiple departments.",
      icon: CircleStackIcon,
    },
    {
      title: "Business Process Automation (BPA)",
      description:
        "Streamlining end-to-end business operations for maximum efficiency.",
      icon: LightBulbIcon,
    },
    {
      title: "Data Analytics & Insights",
      description:
        "Turning raw operational data into actionable predictive insights.",
      icon: ChartBarIcon,
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-6">
            🤖 What Are Intelligent Automation Systems?
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg">
            Intelligent Automation combines RPA, AI, and workflow orchestration
            to create systems that don&apos;t just follow rules—they adapt and
            learn.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              className="bg-white/5 border-white/10"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
