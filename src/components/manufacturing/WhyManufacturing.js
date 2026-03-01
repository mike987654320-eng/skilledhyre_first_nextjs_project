import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyManufacturing() {
  const points = [
    "Enhance production efficiency and throughput",
    "Ensure high uptime and system reliability",
    "Reduce operational downtime with predictive maintenance",
    "Improve quality control with AI-driven vision systems",
    "Enable seamless integration with existing ERP/MES systems",
    "Scale industrial operations with cloud-native engineering",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Intelligent Manufacturing Engineering Matters
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Manufacturing is shifting from manual oversight to automated,
              intelligent systems. We help industrial leaders lead this
              transformation with precision engineering and strategic design.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircleIcon className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-gray-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <div className="text-6xl mb-6">🏭</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Industrial Excellence
              </h3>
              <p className="text-gray-400">
                Where manufacturing expertise meets advanced technical
                execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
