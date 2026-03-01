import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyHealthcare() {
  const points = [
    "Enhance patient engagement and outcomes",
    "Ensure high levels of data security and HIPAA compliance",
    "Reduce operational complexity and overhead",
    "Improve diagnostic accuracy with AI-driven insights",
    "Enable seamless interoperability between systems",
    "Scale healthcare services with digital-first solutions",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Intelligent Healthcare Engineering Matters
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Healthcare is transitioning from traditional models to
              data-driven, patient-centric ecosystems. We help providers and
              health-tech companies navigate this transformation with precision.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <div className="text-6xl mb-6">🏥</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Patient-Centricity
              </h3>
              <p className="text-gray-400">
                Where medical expertise meets advanced technical execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
