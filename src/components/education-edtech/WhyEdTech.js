import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyEdTech() {
  const points = [
    "Enhance student engagement and learning outcomes",
    "Ensure high levels of data privacy and COPPA/FERPA compliance",
    "Reduce administrative complexity for educators",
    "Improve personalized learning with AI-driven insights",
    "Enable seamless integration with global LMS systems",
    "Scale educational services with cloud-native engineering",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Intelligent Education Technology Matters
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Education is transitioning from traditional models to immersive,
              personalized learning ecosystems. We help institutions and edtech
              companies lead this transformation with precision.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <CheckCircleIcon className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <div className="text-6xl mb-6">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Learner Success
              </h3>
              <p className="text-gray-400">
                Where pedagogical strategy meets advanced technical execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
