import Section from "../common/Section";
import Card from "../common/Card";
import {
  BuildingOffice2Icon,
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  CpuChipIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";

export default function ProductTypes() {
  const types = [
    {
      title: "Enterprise Applications",
      description:
        "ERP systems, workflow automation platforms, and internal management systems.",
      icon: BuildingOffice2Icon,
    },
    {
      title: "Mobile & Cross-Platform",
      description:
        "Android, iOS, and hybrid apps with scalable backend infrastructure.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "E-Commerce & Marketplaces",
      description:
        "Custom storefronts, order management systems, and inventory solutions.",
      icon: ShoppingBagIcon,
    },
    {
      title: "AI & Data-Driven Apps",
      description:
        "Predictive analytics tools, generative AI integrations, and automation systems.",
      icon: CpuChipIcon,
    },
    {
      title: "Business Intelligence",
      description:
        "Real-time reporting systems for data-driven decision-making.",
      icon: PresentationChartBarIcon,
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Types of Custom Software We Build
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <Card
              key={index}
              title={type.title}
              description={type.description}
              icon={type.icon}
              className="bg-white/5 border-white/10"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
