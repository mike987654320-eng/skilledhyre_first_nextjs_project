import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyMatter() {
  const points = [
    "Reduce manual workload and errors",
    "Accelerate business process execution",
    "Improve compliance and traceability",
    "Enhance real-time decision-making",
    "Increase productivity without proportional hiring",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-center min-h-[400px]">
              <div className="text-6xl text-center mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                Strategic Enabler
              </h3>
              <p className="text-center text-gray-400">
                Automation becomes a power tool for growth, not just a
                cost-cutting measure.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Intelligent Automation Matters
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Modern enterprises face increasing complexity and volume.
              Intelligent automation enables organizations to move beyond manual
              constraints.
            </p>
            <div className="space-y-4">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors"
                >
                  <CheckCircleIcon className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
