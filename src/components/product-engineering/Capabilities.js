import Section from "../common/Section";
import Card from "../common/Card";
import {
  CpuChipIcon,
  CloudIcon,
  CommandLineIcon,
  ArrowPathIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "AI-Integrated Development",
      description:
        "Building products with embedded AI, automation, and predictive features.",
      icon: CpuChipIcon,
    },
    {
      title: "Cloud-Native Architectures",
      description:
        "Designing elastic, resilient, and cost-optimized digital platforms.",
      icon: CloudIcon,
    },
    {
      title: "Full-Lifecycle Engineering",
      description:
        "End-to-end development from conceptualization to global scale.",
      icon: CommandLineIcon,
    },
    {
      title: "Legacy Modernization",
      description:
        "Transforming outdated systems into modern, high-performance applications.",
      icon: ArrowPathIcon,
    },
    {
      title: "Feature Engineering",
      description:
        "Data-driven development focused on user impact and product growth.",
      icon: ChartBarSquareIcon,
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Core Product Engineering Capabilities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
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
