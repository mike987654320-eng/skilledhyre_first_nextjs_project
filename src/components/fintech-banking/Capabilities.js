import Section from "../common/Section";
import Card from "../common/Card";
import {
  BanknotesIcon,
  CpuChipIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Digital Payments & Wallets",
      description:
        "Building secure, high-speed transaction platforms and digital wallet solutions.",
      icon: BanknotesIcon,
    },
    {
      title: "AI in Fraud Detection",
      description:
        "Using machine learning to identify anomalies and protect financial assets in real-time.",
      icon: CpuChipIcon,
    },
    {
      title: "Open Banking & API Integration",
      description:
        "Ensuring seamless and secure data exchange between financial institutions and apps.",
      icon: CircleStackIcon,
    },
    {
      title: "Regulatory Tech (RegTech)",
      description:
        "Automating compliance auditing, KYC, and AML processes for financial institutions.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Wealth Management Portals",
      description:
        "Creating intuitive digital interfaces for investment tracking and financial planning.",
      icon: PresentationChartBarIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Our FinTech & Banking Technology Capabilities
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
