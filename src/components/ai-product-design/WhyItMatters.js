import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyItMatters() {
  const demands = [
    "Contextually relevant experiences",
    "Adaptive, usable systems that grow with their needs",
    "Smarter automation and insights",
    "Products that anticipate actions — not just respond",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🧩 Why AI-First Product Design Matters
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Today’s users expect more than static features and manual
              workflows. They demand:
            </p>
            <div className="space-y-4 mb-8">
              {demands.map((demand, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors"
                >
                  <CheckCircleIcon className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{demand}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Products built with traditional logic and fixed decision paths
              struggle to keep up with dynamic user behavior and large-scale
              data flows. In contrast, AI-first products adapt in real time,
              offer proactive insights, and create deeper engagement across
              interactions.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-center min-h-[400px]">
              <div className="text-6xl text-center mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                The Shift is Here
              </h3>
              <p className="text-center text-gray-400">
                Moving from static software to living, learning, and adapting
                intelligent systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
