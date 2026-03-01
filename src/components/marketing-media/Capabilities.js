import Section from "../common/Section";
import Card from "../common/Card";
import {
  VideoCameraIcon,
  CpuChipIcon,
  CircleStackIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Scalable Content Platforms",
      description:
        "Building high-performance media hubs designed for global reach and secure streaming.",
      icon: VideoCameraIcon,
    },
    {
      title: "AI in Content Personalization",
      description:
        "Using machine learning to provide intelligent recommendations and high-impact storytelling.",
      icon: CpuChipIcon,
    },
    {
      title: "AdTech & Campaign Integration",
      description:
        "Managing real-time campaign data and ad performance across multiple channels.",
      icon: CircleStackIcon,
    },
    {
      title: "Omni-channel Media Architecture",
      description:
        "Ensuring a seamless and consistent brand experience across web, social, and mobile apps.",
      icon: GlobeAltIcon,
    },
    {
      title: "Audience Engagement Systems",
      description:
        "Creating digital tools for community interaction and long-term audience retention.",
      icon: UserGroupIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Our Marketing & Media Technology Capabilities
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
