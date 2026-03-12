import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyRealEstate() {
  const points = [
    "Offer seamless property search and listing platforms",
    "Enable virtual tours and immersive property experiences",
    "Manage property listings, leads, and customer interactions efficiently",
    "Automate property management and rental operations",
    "Improve communication between buyers, agents, and developers",
    "Expand reach to global property investors",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Digital Transformation Matters in Real Estate
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              The modern real estate ecosystem is driven by technology. From
              property discovery to virtual tours and online transactions,
              digital solutions play a crucial role in enhancing the property
              buying and selling experience. By implementing advanced digital
              systems, real estate businesses can:
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
            <p className="text-gray-400 mt-6">
              Digital innovation helps real estate companies operate more
              efficiently while delivering exceptional customer experiences.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <div className="text-6xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Smart Properties
              </h3>
              <p className="text-gray-400">
                Where modern property seekers meet intuitive digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
