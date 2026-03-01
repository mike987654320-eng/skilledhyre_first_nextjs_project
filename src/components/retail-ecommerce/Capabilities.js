import Section from "../common/Section";
import Card from "../common/Card";
import {
  ShoppingBagIcon,
  CpuChipIcon,
  CircleStackIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Scalable E-commerce Platforms",
      description:
        "Building high-performance online stores designed for mass traffic and secure transactions.",
      icon: ShoppingBagIcon,
    },
    {
      title: "AI in Personalization",
      description:
        "Using machine learning to provide intelligent product recommendations and user experiences.",
      icon: CpuChipIcon,
    },
    {
      title: "Inventory & Supply Chain Integration",
      description:
        "Managing real-time stock levels and logistics data across multiple channels.",
      icon: CircleStackIcon,
    },
    {
      title: "Omni-channel Architecture",
      description:
        "Ensuring a seamless and consistent brand experience across web, mobile, and physical stores.",
      icon: GlobeAltIcon,
    },
    {
      title: "Customer Loyalty Systems",
      description:
        "Creating digital reward programs and engagement tools built for long-term retention.",
      icon: UserGroupIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Our Retail & E-commerce Technology Capabilities
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
