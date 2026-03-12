import Section from "../common/Section";
import Card from "../common/Card";
import {
  BriefcaseIcon,
  QueueListIcon,
  UserGroupIcon,
  DocumentTextIcon,
  IdentificationIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Job Portal Development",
      description:
        "We build scalable job portals that allow companies to post job openings, manage applications, and connect with potential candidates efficiently.",
      icon: BriefcaseIcon,
    },
    {
      title: "Applicant Tracking Systems (ATS)",
      description:
        "Custom ATS platforms that help recruiters track candidate applications, manage interview stages, and streamline hiring workflows.",
      icon: QueueListIcon,
    },
    {
      title: "Recruitment CRM Solutions",
      description:
        "Systems designed to help recruitment agencies manage client relationships, candidate databases, and recruitment campaigns.",
      icon: UserGroupIcon,
    },
    {
      title: "AI-Powered Resume Screening",
      description:
        "Advanced AI tools that automatically analyze resumes and match candidates with suitable job roles.",
      icon: DocumentTextIcon,
    },
    {
      title: "HR Management Systems (HRMS)",
      description:
        "Comprehensive HR platforms that manage employee records, payroll, attendance, performance tracking, and employee engagement.",
      icon: IdentificationIcon,
    },
    {
      title: "Recruitment Mobile Applications",
      description:
        "Mobile apps that allow candidates to search jobs, apply easily, track application status, and communicate with recruiters.",
      icon: DevicePhoneMobileIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Our HR & Recruitment Technology Capabilities
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
