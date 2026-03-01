import Section from "../common/Section";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Security() {
  const points = [
    "Cloud-native hosting solutions",
    "Secure authentication systems",
    "SEO-friendly architecture",
    "Scalable backend infrastructure",
    "API integration capabilities",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[36px] font-bold mb-6">
              🔐 Security & Scalability
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We ensure your platform grows as your business expands, with
              enterprise-grade security and a foundation built for long-term
              innovation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <ShieldCheckIcon className="w-5 h-5 text-cyan-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/3 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-center">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-2">Growth Ready</h3>
            <p className="text-gray-400 text-sm">
              Scalable infrastructure that evolves with your business goals.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
