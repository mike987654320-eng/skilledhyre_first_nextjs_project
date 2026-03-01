import Section from "../common/Section";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function Security() {
  const points = [
    "Strict COPPA, FERPA & GDPR compliance adherence",
    "End-to-end user data encryption",
    "Secure learning management systems (LMS)",
    "Regular data privacy & security audits",
    "Cloud-native high-availability models",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="md:flex items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-[36px] font-bold mb-6">
              🔐 Security, Privacy & Compliance
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              In education, data privacy is non-negotiable. We build learning
              platforms that prioritize student safety and regulatory
              confidence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <ShieldCheckIcon className="w-5 h-5 text-violet-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 md:mt-0 flex-shrink-0 w-full md:w-1/3 p-8 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 text-center">
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Learner Privacy
            </h3>
            <p className="text-gray-400 text-sm">
              Engineered for absolute data protection and educational trust.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
