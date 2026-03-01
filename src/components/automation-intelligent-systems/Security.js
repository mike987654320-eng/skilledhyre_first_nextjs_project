import Section from "../common/Section";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Security() {
  const securityFeatures = [
    "Role-based access controls (RBAC)",
    "Secure data handling & zero-trust access",
    "Audit trails & detailed compliance logs",
    "Enterprise-grade AES-256 encryption",
    "Risk-based automation governance models",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="md:flex items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[36px] font-bold mb-6">
              🔐 Secure & Scalable Automation
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Security and governance are integrated into every automation
              layer. Our systems are built to scale securely across departments,
              ensuring compliance at every step.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/10"
                >
                  <ShieldCheckIcon className="w-5 h-5 text-blue-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 md:mt-0 flex-shrink-0 w-full md:w-1/3 p-8 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-700/20 border border-blue-500/30 text-center">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Enterprise Governance
            </h3>
            <p className="text-gray-400 text-sm">
              Engineered for absolute data protection and operational trust.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
