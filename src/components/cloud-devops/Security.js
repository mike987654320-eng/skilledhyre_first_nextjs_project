import Section from "../common/Section";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Security() {
  const points = [
    "Unified security policies",
    "Identity & access management (IAM)",
    "Encryption at rest and in transit",
    "Continuous compliance auditing",
    "Vulnerability management systems",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="md:flex items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[36px] font-bold mb-6">
              🔐 Security, Compliance & Governance
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Every cloud strategy we deploy is built with security-by-design.
              We ensure your data is protected and your systems are compliant.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <ShieldCheckIcon className="w-5 h-5 text-blue-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 md:mt-0 flex-shrink-0 w-full md:w-1/3 p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-center">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-2">DevSecOps</h3>
            <p className="text-gray-400 text-sm">
              Security automated throughout the lifecycle.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
