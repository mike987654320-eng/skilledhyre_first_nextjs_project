import Section from "../common/Section";
import Card from "../common/Card";
import {
  DocumentCheckIcon,
  ShieldExclamationIcon,
  DevicePhoneMobileIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Insurance Policy Management Systems",
      description:
        "We develop advanced platforms that allow insurers to manage policy issuance, renewals, customer information, and policy documentation efficiently.",
      icon: DocumentCheckIcon,
    },
    {
      title: "Claims Management Solutions",
      description:
        "Automated claims processing systems that simplify claim submission, verification, and approval workflows.",
      icon: ShieldExclamationIcon,
    },
    {
      title: "Insurance Mobile Applications",
      description:
        "Mobile apps that allow policyholders to view policies, file claims, renew coverage, and access customer support easily.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Insurance Marketplace Platforms",
      description:
        "Digital marketplaces where customers can compare and purchase multiple insurance products from different providers.",
      icon: BuildingStorefrontIcon,
    },
    {
      title: "Insurance CRM Solutions",
      description:
        "Customer relationship management systems designed specifically for insurance companies to manage leads, agents, and customer interactions.",
      icon: UserGroupIcon,
    },
    {
      title: "AI-Powered Risk Assessment",
      description:
        "Intelligent systems that analyze customer data and risk profiles to assist insurers in making better underwriting decisions.",
      icon: ChartBarIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Our Insurance Technology Capabilities
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
