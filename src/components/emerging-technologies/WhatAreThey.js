import Section from "../common/Section";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function WhatAreThey() {
  const technologies = [
    "Artificial Intelligence & Generative AI",
    "Blockchain & Decentralized Systems",
    "Internet of Things (IoT)",
    "Augmented & Virtual Reality (AR/VR)",
    "Edge Computing",
    "Quantum Computing (early-stage exploration)",
    "Advanced Robotics & Automation",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-center min-h-[400px]">
              <SparklesIcon className="w-20 h-20 text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                Practical Integration
              </h3>
              <p className="text-center text-gray-400">
                At SkilledHyre Labs, we strategically integrate these
                technologies into practical, business-ready solutions.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[36px] font-bold mb-6">
              🚀 What Are Emerging Technologies?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Emerging technologies are innovative advancements that are rapidly
              evolving and have the potential to significantly impact
              industries. These include:
            </p>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-300 font-medium whitespace-wrap"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
