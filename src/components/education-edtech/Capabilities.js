import Section from "../common/Section";
import Card from "../common/Card";
import {
  AcademicCapIcon,
  CpuChipIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Interactive Learning Systems",
      description:
        "Building engaging platforms for remote learning, assessments, and certifications.",
      icon: AcademicCapIcon,
    },
    {
      title: "AI in Personalized Learning",
      description:
        "Using machine learning to customize content and improve student retention.",
      icon: CpuChipIcon,
    },
    {
      title: "LMS & CRM Integration",
      description:
        "Ensuring seamless data flow between learning management systems and administration.",
      icon: CircleStackIcon,
    },
    {
      title: "Student Data Analytics",
      description:
        "Managing large-scale student data for actionable insights and performance tracking.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Educator Collaboration Portals",
      description:
        "Creating intuitive digital interfaces for educators to manage content and classroom engagement.",
      icon: UserGroupIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Our EdTech & Learning Technology Capabilities
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
