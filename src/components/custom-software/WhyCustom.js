import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyCustom() {
  const points = [
    "Automate unique workflows",
    "Integrate with existing systems",
    "Enhance operational efficiency",
    "Improve data visibility and reporting",
    "Scale without platform constraints",
    "Gain competitive differentiation",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Choose Custom Software?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Off-the-shelf software often forces businesses to adapt their
              processes around limitations. Custom software empowers you to
              build strategic assets without compromises.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <div className="text-6xl mb-6">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Strategic Assets
              </h3>
              <p className="text-gray-400">
                Software designed around your success, not generic limitations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
