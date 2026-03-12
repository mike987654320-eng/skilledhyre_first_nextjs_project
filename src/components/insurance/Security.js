import Section from "../common/Section";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Security() {
  const points = [
    "Secure authentication and user access control",
    "Data encryption and secure payment processing",
    "Compliance with industry regulations",
    "Cloud-based high availability infrastructure",
    "Continuous monitoring and system maintenance",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="md:flex items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[36px] font-bold mb-6">
              🔐 Security & Compliance for Insurance Platforms
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Insurance platforms manage sensitive customer information,
              financial data, and policy documents. Ensuring security and
              regulatory compliance is essential.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <ShieldCheckIcon className="w-5 h-5 text-rose-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 mt-8">
              This ensures reliable and secure insurance services for both
              insurers and policyholders.
            </p>
          </div>
          <div className="mt-12 md:mt-0 flex-shrink-0 w-full md:w-1/3 p-8 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-500/30 text-center">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Regulatory Conformance
            </h3>
            <p className="text-gray-400 text-sm">
              Engineered for data protection and reliable financial operations.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
