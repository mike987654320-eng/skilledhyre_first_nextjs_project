import Section from "../common/Section";
import Card from "../common/Card";
import {
  ShoppingBagIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  HeartIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

export default function AppTypes() {
  const types = [
    {
      title: "E-Commerce & Marketplaces",
      description:
        "Feature-rich shopping apps with secure payment systems and inventory management.",
      icon: ShoppingBagIcon,
    },
    {
      title: "Enterprise Mobility",
      description:
        "Internal apps for workflow automation, employee management, and BI.",
      icon: BuildingOffice2Icon,
    },
    {
      title: "EdTech & Learning",
      description:
        "Interactive learning platforms with real-time engagement features.",
      icon: AcademicCapIcon,
    },
    {
      title: "Healthcare & Telemedicine",
      description:
        "Secure patient portals, appointment scheduling, and digital health solutions.",
      icon: HeartIcon,
    },
    {
      title: "AI-Integrated Mobile Apps",
      description:
        "Apps powered by machine learning, predictive analytics, and automation.",
      icon: CpuChipIcon,
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Types of Mobile Apps We Build
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
