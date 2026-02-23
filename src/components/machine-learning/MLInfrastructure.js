import Section from "../common/Section";
import { ServerStackIcon } from "@heroicons/react/24/outline";

export default function MLInfrastructure() {
  const infraFeatures = [
    "Cloud-native architectures",
    "Scalable compute environments",
    "Secure data governance policies",
    "API-driven deployment frameworks",
    "Enterprise security compliance standards",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16 border border-gray-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ServerStackIcon className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[36px] font-bold mb-6 text-white flex items-center gap-3">
                <ServerStackIcon className="w-10 h-10 text-emerald-400" />
                🔐 Secure & Scalable ML Infrastructure
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5">
                We ensure models are production-ready and enterprise-safe. Our
                ML solutions are built using robust foundational technologies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Built with:
              </h3>
              <div className="space-y-3">
                {infraFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
