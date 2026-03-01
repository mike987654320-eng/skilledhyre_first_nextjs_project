import Section from "../common/Section";
import Card from "../common/Card";
import {
  CloudIcon,
  CpuChipIcon,
  CircleStackIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Multi-Cloud & Hybrid Strategy",
      description:
        "Seamless orchestration across AWS, Azure, Google Cloud, and private clouds.",
      icon: CloudIcon,
    },
    {
      title: "CI/CD Pipeline Architecture",
      description:
        "Automated, scalable delivery pipelines for continuous innovation.",
      icon: CpuChipIcon,
    },
    {
      title: "Infrastructure as Code (IaC)",
      description:
        "Managing infrastructure with precision using Terraform, Ansible, or CloudFormation.",
      icon: CircleStackIcon,
    },
    {
      title: "Site Reliability Engineering",
      description:
        "Ensuring high availability, performance, and observability through SRE practices.",
      icon: ChartBarIcon,
    },
    {
      title: "DevSecOps & Security Automation",
      description:
        "Integrating security into the heartbeat of development and operations.",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Core Cloud & DevOps Capabilities
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
