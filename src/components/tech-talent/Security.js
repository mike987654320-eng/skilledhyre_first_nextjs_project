import Section from "../common/Section";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Security() {
  const points = [
    "Rigorous technical screening",
    "Domain expertise validation",
    "Agile project management practices",
    "Secure development lifecycle (SDLC)",
    "NDA & compliance adherence",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[36px] font-bold mb-6">
              🔐 Quality, Governance & Security
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Every engagement with SkilledHyre Labs ensures quality,
              accountability, and performance. We focus on rigorous validation
              and secure practices.
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
          <div className="flex-shrink-0 w-full md:w-1/3 p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 text-center">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Quality Assurance
            </h3>
            <p className="text-gray-400 text-sm">
              Technical screening and domain validation for all experts.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
