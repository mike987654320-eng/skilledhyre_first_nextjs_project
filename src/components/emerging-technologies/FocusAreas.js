import Section from "../common/Section";
import Card from "../common/Card";
import {
  CpuChipIcon,
  CubeTransparentIcon,
  GlobeAltIcon,
  EyeIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

export default function FocusAreas() {
  const areas = [
    {
      title: "Artificial Intelligence & Generative AI",
      description:
        "Smart systems capable of predictive insights, automation, personalization, and intelligent decision support.",
      icon: CpuChipIcon,
    },
    {
      title: "Blockchain Solutions",
      description:
        "Secure, transparent, and decentralized systems for finance, supply chain, identity management, and data security.",
      icon: CubeTransparentIcon,
    },
    {
      title: "Internet of Things (IoT)",
      description:
        "Connected devices enabling real-time monitoring, smart automation, and data-driven operations.",
      icon: GlobeAltIcon,
    },
    {
      title: "Augmented & Virtual Reality",
      description:
        "Immersive experiences for training, retail, education, and enterprise simulations.",
      icon: EyeIcon,
    },
    {
      title: "Edge Computing",
      description:
        "Real-time processing at the data source, reducing latency and improving system responsiveness.",
      icon: BoltIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">🔍 Key Focus Areas</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {areas.map((area, index) => (
            <div
              key={index}
              className={
                index === areas.length - 1
                  ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                  : ""
              }
            >
              <Card
                {...area}
                className="bg-white/5 border border-white/10 group-hover:border-pink-500/30"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
