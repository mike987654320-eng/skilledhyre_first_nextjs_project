import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyItMatters() {
  const demands = [
    "Faster content production",
    "Hyper-personalized customer interactions",
    "Intelligent automation at scale",
    "Reduced operational costs",
    "Accelerated product development",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Generative AI Matters
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Businesses today demand:
            </p>
            <div className="space-y-4 mb-8">
              {demands.map((demand, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors"
                >
                  <CheckCircleIcon className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{demand}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-indigo-500 py-2 pl-6 italic">
              Generative AI enables organizations to move from manual effort to
              intelligent co-creation — where AI assists teams in delivering
              high-quality outputs in minutes instead of days.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-center min-h-[400px]">
              <div className="text-6xl text-center mb-6">⚙️</div>
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                Intelligent Co-creation
              </h3>
              <p className="text-center text-gray-400">
                Moving from manual effort to AI-assisted delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
