import Section from "../common/Section";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Security() {
  const points = [
    "PCI-DSS & SOC2 compliance readiness",
    "End-to-end data encryption & tokenization",
    "Advanced multi-factor authentication",
    "Real-time transaction monitoring & auditing",
    "Cloud-native security & disaster recovery",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="md:flex items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[36px] font-bold mb-6">
              🔐 Security, Compliance & Trust
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              In financial services, security is the product. We build systems
              that prioritize data integrity, user privacy, and regulatory
              confidence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <ShieldCheckIcon className="w-5 h-5 text-amber-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 md:mt-0 flex-shrink-0 w-full md:w-1/3 p-8 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-center">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Financial Grade
            </h3>
            <p className="text-gray-400 text-sm">
              Engineered for absolute reliability and regulatory adherence.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
