import Section from "../common/Section";
import Card from "../common/Card";
import {
  CpuChipIcon,
  BeakerIcon,
  CogIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowsPointingInIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

export default function WhatIsIA() {
  const integrations = [
    { title: "Artificial Intelligence (AI)", icon: CpuChipIcon },
    { title: "Machine Learning (ML)", icon: BeakerIcon },
    { title: "Robotic Process Automation (RPA)", icon: CogIcon },
    {
      title: "Natural Language Processing (NLP)",
      icon: ChatBubbleBottomCenterTextIcon,
    },
    { title: "Workflow Orchestration", icon: ArrowsPointingInIcon },
    { title: "Predictive Decision Engines", icon: CircleStackIcon },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-[36px] font-bold mb-12">
          🔍 What Is Intelligent Automation?
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          Intelligent Automation adapts to new data, learns from patterns, and
          improves performance over time, moving beyond traditional fixed-rule
          automation.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all"
            >
              <div className="mb-4 inline-block p-3 rounded-xl bg-indigo-500/10">
                <item.icon className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
