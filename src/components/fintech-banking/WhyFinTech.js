import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyFinTech() {
  const points = [
    "Accelerate digital payment and transaction cycles",
    "Ensure high levels of security and regulatory compliance",
    "Enhance customer experience with personalized finance",
    "Improve fraud detection with AI-driven insights",
    "Enable seamless integration with global banking APIs",
    "Scale financial services with cloud-native engineering",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Intelligent FinTech Engineering Matters
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              The financial sector is undergoing a massive shift towards
              digital-first, data-driven ecosystems. We help banks and fintech
              companies lead this transformation with precision.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Financial Trust
              </h3>
              <p className="text-gray-400">
                Where financial expertise meets advanced technical execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
