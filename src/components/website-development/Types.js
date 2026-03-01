import Section from "../common/Section";
import Card from "../common/Card";
import {
  BuildingOfficeIcon,
  ShoppingCartIcon,
  AcademicCapIcon,
  UserCircleIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

export default function Types() {
  const types = [
    {
      title: "Corporate & Business",
      description:
        "Professional platforms that establish brand authority and generate leads.",
      icon: BuildingOfficeIcon,
    },
    {
      title: "E-Commerce Platforms",
      description:
        "Scalable online stores with secure payment gateways and customer analytics.",
      icon: ShoppingCartIcon,
    },
    {
      title: "Educational Portals",
      description:
        "Interactive, user-friendly learning management systems and EdTech platforms.",
      icon: AcademicCapIcon,
    },
    {
      title: "Portfolio & Branding",
      description:
        "Custom-designed websites for professionals, creators, and entrepreneurs.",
      icon: UserCircleIcon,
    },
    {
      title: "AI-Integrated Platforms",
      description:
        "Web applications embedded with AI, automation, and predictive intelligence.",
      icon: CpuChipIcon,
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Types of Websites We Build
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
