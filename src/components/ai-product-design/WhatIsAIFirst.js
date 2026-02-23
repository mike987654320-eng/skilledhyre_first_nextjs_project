import Section from "../common/Section";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function WhatIsAIFirst() {
  const points = [
    {
      title: "AI is the foundation",
      desc: "The product would not function or deliver value without its AI capabilities.",
    },
    {
      title: "AI influences core behaviors",
      desc: "Core workflows, recommendations, and user experiences are shaped by intelligent models.",
    },
    {
      title: "Products learn and evolve",
      desc: "They improve through data, not just feature updates.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-[36px] font-bold mb-8">
          🌟 What Does “AI-First” Really Mean?
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          AI-first product design is a fundamental shift in how products are
          conceived, planned, and delivered:
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {points.map((pt, i) => (
            <div
              key={i}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors"
            >
              <SparklesIcon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">{pt.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-lg max-w-4xl mx-auto italic border-l-4 border-purple-500 py-2 pl-6 text-left">
          Unlike traditional or even “AI-enhanced” products — where intelligence
          may be an optional add-on — a true AI-first product is architected
          around AI from day one.
        </p>
      </div>
    </Section>
  );
}
