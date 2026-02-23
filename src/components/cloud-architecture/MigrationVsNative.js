import Section from "../common/Section";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function MigrationVsNative() {
  const cloudNativeMeans = [
    "Applications are designed for elasticity",
    "Infrastructure is automated and programmable",
    "Systems are resilient by design",
    "Innovation is continuous, not periodic",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 md:p-12 border border-gray-700 shadow-2xl">
          <h2 className="text-[32px] font-bold mb-6 text-center">
            🔄 Cloud Migration vs Cloud-Native — The Difference
          </h2>
          <p className="text-gray-400 text-center text-lg mb-10 max-w-2xl mx-auto">
            Simply migrating applications to the cloud does not guarantee
            agility.
          </p>

          <div className="bg-black/30 rounded-2xl p-8 border border-white/5 mb-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Cloud-native architecture means:
            </h3>
            <ul className="space-y-4">
              {cloudNativeMeans.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-cyan-500/20 p-1 rounded-full text-cyan-400">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                  <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center text-xl text-cyan-400 font-bold italic">
            At SkilledHyre Labs, we don’t just move workloads — we modernize
            them.
          </p>
        </div>
      </div>
    </Section>
  );
}
