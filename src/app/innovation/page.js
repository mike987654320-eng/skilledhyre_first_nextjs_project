import { LightBulbIcon } from "@heroicons/react/24/outline";
import Section from "../../components/Section";
import Card from "../../components/Card";
import Button from "../../components/Button";
import InnovationTimeline from "../../components/InnovationTimeline";
import TechRadar from "../../components/TechRadar";

export default function Innovation() {
  const focusAreas = [
    {
      title: "Digital Transformation Strategy",
      description:
        "Reimagining business processes with digital-first solutions.",
      icon: LightBulbIcon,
    },
    {
      title: "AI-First Product Design",
      description:
        "Building products with AI at the core, not as an afterthought.",
      icon: LightBulbIcon,
    },
    {
      title: "Cloud-Native Architecture",
      description: "Scalable, resilient, and manageable infrastructure.",
      icon: LightBulbIcon,
    },
    {
      title: "Automation & Intelligent Systems",
      description: "Streamlining operations with smart automation.",
      icon: LightBulbIcon,
    },
    {
      title: "Emerging Technologies",
      description: "Leveraging GenAI, RPA, and IoT for competitive edge.",
      icon: LightBulbIcon,
    },
  ];

  return (
    <>
      <Section className="text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm mb-8">
          <LightBulbIcon className="w-4 h-4" />
          <span>Innovation</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Driving Innovation Through <br />{" "}
          <span className="text-gradient-primary">Engineering Excellence</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
          At SkilledHyre Labs, innovation is embedded into everything we build.
          We combine AI, cloud, and modern software engineering to create
          future-ready digital ecosystems.
        </p>
      </Section>

      <Section className="bg-white/5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <Card key={index} {...area} />
          ))}
        </div>
      </Section>

      {/* Innovation Framework Section */}
      <Section>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">
              The Innovation Framework
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
              How we turn abstract ideas into scalable market realities.
            </p>
          </div>
          <InnovationTimeline />
        </div>
      </Section>

      {/* Tech Radar Section */}
      <Section className="bg-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">Our Technology Radar</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
              The technologies we are mastering today to build your tomorrow.
            </p>
          </div>
          <TechRadar />
        </div>
      </Section>

      <Section>
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-900/20 to-purple-900/20 p-8 rounded-2xl border border-white/5">
          <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>
          <p className="text-gray-300 mb-6">
            We don’t just develop software — we engineer competitive advantage.
          </p>
          <Button href="/contact">Start Innovating</Button>
        </div>
      </Section>
    </>
  );
}
