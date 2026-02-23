import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyMatter() {
  const points = [
    "Unlock new revenue streams",
    "Improve operational efficiency",
    "Enhance customer engagement",
    "Strengthen competitive differentiation",
    "Future-proof digital infrastructure",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🌟 Why Emerging Technologies Matter
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Adopting emerging technologies enables organizations to:
            </p>
            <div className="space-y-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-colors"
                >
                  <CheckCircleIcon className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xl text-pink-400 font-bold italic border-l-4 border-pink-500 py-2 pl-6">
              Companies that innovate proactively outperform those that react
              late.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-center min-h-[400px]">
              <div className="text-6xl text-center mb-6">🔮</div>
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                Future-Proofing
              </h3>
              <p className="text-center text-gray-400">
                Building the systems today that will solve the challenges of
                tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
