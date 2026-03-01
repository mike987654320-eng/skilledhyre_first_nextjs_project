import Section from "../common/Section";
import Card from "../common/Card";
import {
  CpuChipIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

export default function Expertise() {
  const expertise = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "AI engineers, data scientists, and ML specialists building predictive and generative systems.",
      icon: CpuChipIcon,
    },
    {
      title: "Cloud-Native Architecture",
      description:
        "Cloud architects and DevOps engineers designing scalable, resilient infrastructures.",
      icon: CloudIcon,
    },
    {
      title: "Intelligent Automation",
      description:
        "Automation engineers deploying RPA, AI-driven workflows, and process optimization systems.",
      icon: CogIcon,
    },
    {
      title: "Data Engineering & Analytics",
      description:
        "Data engineers and BI specialists building robust data pipelines and analytics dashboards.",
      icon: ChartBarIcon,
    },
    {
      title: "Full-Stack Development",
      description:
        "Frontend, backend, and mobile developers delivering modern, high-performance applications.",
      icon: CommandLineIcon,
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🔍 Expertise Across Advanced Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
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
