import Section from "../common/Section";
import Card from "../common/Card";
import {
  HeartIcon,
  CpuChipIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Telemedicine & Virtual Care",
      description:
        "Building responsive platforms for remote patient monitoring and consultations.",
      icon: HeartIcon,
    },
    {
      title: "AI in Diagnostics",
      description:
        "Using machine learning to improve clinical decision-making and pattern recognition.",
      icon: CpuChipIcon,
    },
    {
      title: "Healthcare Data Analytics",
      description:
        "Managing large-scale patient data for actionable operational and clinical insights.",
      icon: CircleStackIcon,
    },
    {
      title: "Interoperability & HL7/FHIR",
      description:
        "Ensuring seamless data exchange across diverse healthcare systems and providers.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Patient Engagement Portals",
      description:
        "Creating intuitive digital interfaces for patients to manage their health journey.",
      icon: UserGroupIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Our Healthcare Technology Capabilities
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
