import Section from "../common/Section";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Security() {
  const points = [
    "Secure authentication & data encryption",
    "Cloud-native backend architecture",
    "Scalable database systems",
    "API-first development models",
    "Compliance-ready frameworks",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="md:flex items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[36px] font-bold mb-6">
              🔐 Security & Scalability
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We ensure performance stability even under high user traffic, with
              secure authentication and data encryption at the core.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <ShieldCheckIcon className="w-5 h-5 text-purple-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 md:mt-0 flex-shrink-0 w-full md:w-1/3 p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-center">
            <div className="text-6xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-white mb-2">
              High Availability
            </h3>
            <p className="text-gray-400 text-sm">
              Engineered for stability and secure data handling.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
