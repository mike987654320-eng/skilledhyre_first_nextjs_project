import Section from "../common/Section";
import Card from "../common/Card";
import {
  TruckIcon,
  CpuChipIcon,
  CircleStackIcon,
  GlobeAltIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Real-Time Tracking Systems",
      description:
        "Building high-precision platforms for monitoring assets and shipments globally.",
      icon: MapPinIcon,
    },
    {
      title: "AI in Route Optimization",
      description:
        "Using machine learning to optimize delivery routes and reduce operational costs.",
      icon: CpuChipIcon,
    },
    {
      title: "Warehouse & Inventory Integration",
      description:
        "Managing real-time stock levels and logistics data across diverse warehouse locations.",
      icon: CircleStackIcon,
    },
    {
      title: "Carrier API Orchestration",
      description:
        "Ensuring seamless and secure data exchange between global logistics providers and apps.",
      icon: TruckIcon,
    },
    {
      title: "Supply Chain Analytics",
      description:
        "Creating intuitive digital interfaces for monitoring performance and predicting bottlenecks.",
      icon: GlobeAltIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Our Logistics Technology Capabilities
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
