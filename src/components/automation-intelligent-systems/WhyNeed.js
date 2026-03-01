import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyNeed() {
  const points = [
    "Reduce operational costs & overhead",
    "Improve speed and accuracy across workflows",
    "Minimize human error and operational risk",
    "Enhance compliance & auditability",
    "Free teams to focus on strategic tasks",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Workforce Elevation
              </h3>
              <p className="text-gray-400">
                {
                  "Automation is not about workforce reduction — it’s about workforce elevation."
                }
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Businesses Need Automation Now
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Manual processes slow growth, increase errors, and limit
              scalability. Intelligent automation enables organizations to
              operate at the speed of modern digital markets.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
