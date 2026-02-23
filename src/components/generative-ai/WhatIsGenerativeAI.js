import Section from "../common/Section";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function WhatIsGenerativeAI() {
  const models = [
    "Large Language Models (LLMs)",
    "Text-to-Image & Text-to-Video Models",
    "AI Code Generation Systems",
    "Conversational AI Engines",
    "Synthetic Data Generation Platforms",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-center min-h-[400px]">
              <SparklesIcon className="w-20 h-20 text-indigo-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                Original Generation
              </h3>
              <p className="text-center text-gray-400">
                These systems generate new, original outputs based on learned
                data patterns — enabling automation of complex creative and
                analytical tasks.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[36px] font-bold mb-6">
              🤖 What Are AI Generative Solutions?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              AI Generative Solutions utilize advanced models such as:
            </p>
            <div className="flex flex-wrap gap-4">
              {models.map((model, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium whitespace-wrap"
                >
                  {model}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
