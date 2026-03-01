import Section from "../common/Section";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Security() {
  const points = [
    "PCI-DSS compliance readiness",
    "Secure payment gateway integrations",
    "Scalable cloud-native architectures",
    "Global load balancing & speed optimization",
    "Continuous security monitoring",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="md:flex items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[36px] font-bold mb-6">
              🔐 Security, Scalability & Performance
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              In e-commerce, speed and security are paramount. We build systems
              that protect user data while delivering ultra-fast shopping
              experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <ShieldCheckIcon className="w-5 h-5 text-indigo-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 md:mt-0 flex-shrink-0 w-full md:w-1/3 p-8 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-center">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Omni-Channel Secure
            </h3>
            <p className="text-gray-400 text-sm">
              Engineered for global reach and absolute data protection.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
