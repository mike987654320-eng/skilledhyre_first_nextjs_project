import Section from "../common/Section";
import Card from "../common/Card";
import {
  MagnifyingGlassIcon,
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon,
  DevicePhoneMobileIcon,
  VideoCameraIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Property Listing Platforms",
      description:
        "We develop scalable property listing websites and portals that allow users to search, filter, and explore properties with ease.",
      icon: MagnifyingGlassIcon,
    },
    {
      title: "Real Estate Marketplace Platforms",
      description:
        "Multi-vendor platforms where developers, agents, and brokers can list and promote residential and commercial properties.",
      icon: BuildingOfficeIcon,
    },
    {
      title: "Property Management Systems",
      description:
        "Custom systems that help real estate companies manage property inventory, tenants, rent collection, maintenance requests, and lease agreements.",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: "Real Estate Mobile Applications",
      description:
        "Feature-rich mobile apps that allow users to browse properties, schedule site visits, connect with agents, and track property investments.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Virtual Tour & Interactive Property Solutions",
      description:
        "Advanced technologies such as 3D virtual tours and interactive property viewing that help buyers explore properties remotely.",
      icon: VideoCameraIcon,
    },
    {
      title: "Real Estate CRM Solutions",
      description:
        "Customer relationship management platforms designed for real estate businesses to track leads, manage customer communication, and automate follow-ups.",
      icon: UserGroupIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Our Real Estate Technology Capabilities
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
