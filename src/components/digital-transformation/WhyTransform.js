import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyTransform() {
  const benefits = [
    "Modernize core systems with cloud-native technologies",
    "Streamline complex workflows through automation",
    "Leverage data for faster, smarter decisions",
    "Enhance security postures to protect critical assets",
    "Deliver exceptional customer experiences at scale",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Transform Now?
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Legacy systems may once have served well — but in today’s
              fast-moving landscape, they often hinder agility, innovation, and
              competitive advantage. Businesses that delay transformation risk
              slower time-to-market, higher operational costs, and reduced
              customer satisfaction.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              SkilledHyre Labs positions digital transformation as a proactive
              strategy, enabling organizations to:
            </p>
          </div>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors"
              >
                <CheckCircleIcon className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
