import Section from "../common/Section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyItMatters() {
  const helps = [
    "Scale applications automatically during traffic spikes",
    "Reduce downtime with fault-tolerant systems",
    "Accelerate feature releases through CI/CD automation",
    "Optimize infrastructure costs with pay-as-you-go models",
    "Strengthen security with cloud-native controls",
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              🚀 Why Cloud-Native Matters Today
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Modern businesses face rapidly evolving customer expectations,
              fluctuating workloads, and growing cybersecurity risks. Legacy
              infrastructure often struggles to meet these demands.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Cloud-native architecture helps organizations:
            </p>
          </div>
          <div className="space-y-4">
            {helps.map((help, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors"
              >
                <CheckCircleIcon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{help}</span>
              </div>
            ))}
            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold mt-4">
              The result? Faster innovation cycles and improved operational
              efficiency.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
