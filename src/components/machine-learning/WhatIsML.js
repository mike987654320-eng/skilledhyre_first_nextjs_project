import Section from "../common/Section";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function WhatIsML() {
  const points = [
    "Learn from historical and real-time data",
    "Identify patterns and correlations",
    "Make predictions and recommendations",
    "Continuously improve without explicit programming",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-center min-h-[400px]">
              <SparklesIcon className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                Evolving Intelligence
              </h3>
              <p className="text-center text-gray-400">
                Unlike rule-based systems, ML models evolve with new data,
                becoming more accurate and efficient over time.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[36px] font-bold mb-6">
              🔍 What Is Machine Learning?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Machine Learning is a branch of Artificial Intelligence that
              allows systems to:
            </p>
            <div className="flex flex-col gap-4">
              {points.map((pt, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium whitespace-wrap"
                >
                  {pt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
