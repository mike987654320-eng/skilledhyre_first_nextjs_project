import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyMatter() {
  const points = [
    "Accelerate product development cycles",
    "Access niche and emerging tech expertise",
    "Reduce hiring time and recruitment overhead",
    "Scale engineering teams flexibly",
    "Ensure high-performance delivery",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Tech Talent Is a Strategic Advantage
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Technology projects fail not because of poor ideas — but because
              of execution gaps. Our Tech Talent Solutions help businesses
              overcome these bottlenecks.
            </p>
            <div className="space-y-4">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
                >
                  <CheckCircleIcon className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-center min-h-[400px]">
              <div className="text-6xl text-center mb-6">👥</div>
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                Execution Excellence
              </h3>
              <p className="text-center text-gray-400">
                The right talent makes the difference between valid ideas and
                successful products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
