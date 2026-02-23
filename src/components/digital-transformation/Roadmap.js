import Section from "../common/Section";
import {
  MagnifyingGlassIcon,
  CubeTransparentIcon,
  CpuChipIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function Roadmap() {
  const steps = [
    {
      title: "Discovery & Strategy",
      description:
        "We begin with a deep analysis of your business goals, current systems, and competitive landscape.",
      icon: MagnifyingGlassIcon,
    },
    {
      title: "Modern Architecture Design",
      description:
        "We build flexible, scalable technology frameworks — including microservices, API-first platforms, and cloud infrastructure.",
      icon: CubeTransparentIcon,
    },
    {
      title: "AI & Intelligent Automation",
      description:
        "We integrate AI-driven capabilities to streamline workflows, automate insights, and drive operational intelligence.",
      icon: CpuChipIcon,
    },
    {
      title: "Deployment & Optimization",
      description:
        "With iterative development and continuous integration practices, we ensure rapid delivery and measurable impact.",
      icon: RocketLaunchIcon,
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            🌐 End-to-End Transformation Roadmap
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-[16px]">
            Our approach to digital transformation is holistic, strategic, and
            rooted in results. Every step is guided by innovation, security, and
            measurable outcomes that align with your business vision.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-indigo-500/50 to-transparent z-0"></div>
              )}
              <div className="relative z-10 w-24 h-24 mx-auto bg-[#0B0F19] border-2 border-indigo-500/30 rounded-full flex items-center justify-center mb-6 group-hover:border-indigo-400 transition-colors shadow-lg shadow-indigo-500/10">
                <step.icon className="w-10 h-10 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
