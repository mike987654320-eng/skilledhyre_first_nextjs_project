import Section from "../common/Section";
import Card from "../common/Card";
import {
  CogIcon,
  CpuChipIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Predictive Maintenance Systems",
      description:
        "Using AI to analyze sensor data and predict equipment failure before it happens.",
      icon: CogIcon,
    },
    {
      title: "AI-Driven Quality Control",
      description:
        "Automating visual inspections and defect detection with high-precision vision systems.",
      icon: CpuChipIcon,
    },
    {
      title: "ERP & MES Integration",
      description:
        "Ensuring seamless data flow between the shop floor and enterprise resource planning.",
      icon: CircleStackIcon,
    },
    {
      title: "IIoT & Sensor Orchestration",
      description:
        "Building resilient infrastructures for collecting and analyzing large-scale industrial data.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Industrial Data Analytics",
      description:
        "Creating real-time dashboards for production monitoring and operational insights.",
      icon: ChartBarIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Our Manufacturing Technology Capabilities
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
