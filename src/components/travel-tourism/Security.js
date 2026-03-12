import Section from "../common/Section";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Security() {
  const points = [
    "Secure payment gateway integrations",
    "Data encryption and user authentication",
    "Cloud-based infrastructure for reliability",
    "Compliance with global data protection standards",
    "Continuous monitoring and system updates",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="md:flex items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[36px] font-bold mb-6">
              🔐 Security & Reliability for Travel Systems
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Travel platforms manage sensitive user information, payment
              transactions, and travel documents. Security and reliability are
              essential for maintaining trust.
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
              This ensures a secure and dependable experience for both travelers
              and travel businesses.
            </p>
          </div>
          <div className="mt-12 md:mt-0 flex-shrink-0 w-full md:w-1/3 p-8 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-500/30 text-center">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Reliable Experience
            </h3>
            <p className="text-gray-400 text-sm">
              Engineered for absolute data integrity and secure global
              transactions.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
