import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      num: "1️⃣",
      title: "AI Strategy & Use Case Identification",
      desc: "We identify high-impact generative AI applications aligned with your business model — marketing automation, customer service bots, AI copilots, internal knowledge systems, and more.",
    },
    {
      num: "2️⃣",
      title: "Model Selection & Customization",
      desc: "We evaluate and fine-tune advanced AI models tailored to your domain, ensuring relevance, contextual accuracy, and performance optimization.",
    },
    {
      num: "3️⃣",
      title: "Secure Data Integration",
      desc: "Generative AI systems are integrated with enterprise databases, CRMs, ERPs, and knowledge repositories — enabling contextual, real-time outputs.",
    },
    {
      num: "4️⃣",
      title: "Responsible AI & Governance",
      desc: "We implement guardrails for data privacy protection, bias mitigation, explainability frameworks, compliance alignment, and controlled output generation.",
    },
    {
      num: "5️⃣",
      title: "Continuous Optimization",
      desc: "AI models are monitored and refined using feedback loops, performance analytics, and domain adaptation strategies.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            🧩 Our Generative AI Engineering Approach
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-[16px]">
            At SkilledHyre Labs, we build enterprise-grade generative AI systems
            designed for scalability, security, and measurable ROI.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-4xl">{step.num}</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
