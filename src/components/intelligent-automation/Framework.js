import Section from "../common/Section";

export default function Framework() {
  const steps = [
    {
      number: "1",
      title: "Process Discovery & Assessment",
      description:
        "We analyze workflows to identify high-impact automation opportunities across departments.",
    },
    {
      number: "2",
      title: "Automation Strategy & Architecture Design",
      description:
        "We define the right combination of AI models, RPA bots, APIs, and orchestration systems.",
    },
    {
      number: "3",
      title: "AI-Driven Workflow Implementation",
      description:
        "We build and deploy automation bots and intelligent decision engines that integrate with existing systems.",
    },
    {
      number: "4",
      title: "Real-Time Monitoring & Optimization",
      description:
        "Automation systems are continuously monitored to ensure performance, efficiency, and scalability.",
    },
    {
      number: "5",
      title: "Governance & Compliance Integration",
      description:
        "Built-in audit trails, access control systems, and regulatory alignment ensure secure deployment.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Intelligent Automation Framework
        </h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xl">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
