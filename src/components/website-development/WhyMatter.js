import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyMatter() {
  const points = [
    "Brand credibility and trust",
    "Customer engagement and retention",
    "Lead generation and conversions",
    "Search engine visibility",
    "Business scalability",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Professional Website Development Matters
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              A slow, outdated, or poorly designed website can limit growth and
              reduce competitive advantage. We build digital platforms optimized
              for performance, security, and long-term success.
            </p>
            <div className="space-y-4">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircleIcon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-center min-h-[400px]">
              <div className="text-6xl text-center mb-6">🏢</div>
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                Digital Headquarters
              </h3>
              <p className="text-center text-gray-400">
                A well-built website directly impacts customer trust and brand
                authority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
