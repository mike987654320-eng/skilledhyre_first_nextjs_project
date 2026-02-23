import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyMatter() {
  const enables = [
    "Automate complex decision-making",
    "Enhance personalization at scale",
    "Improve forecasting accuracy",
    "Detect anomalies and fraud",
    "Optimize operations and performance",
    "Build intelligent digital products",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Machine Learning Matters
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Data is growing exponentially. Organizations that can extract
              intelligence from data gain strategic advantage.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Machine learning enables businesses to:
            </p>
            <div className="space-y-4 mb-4">
              {enables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors"
                >
                  <CheckCircleIcon className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-emerald-500 py-2 pl-6 italic">
              ML transforms raw data into actionable intelligence.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-center min-h-[400px]">
              <div className="text-6xl text-center mb-6">📊</div>
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                Data to Decisions
              </h3>
              <p className="text-center text-gray-400">
                Moving from raw information to predictive, strategic insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
