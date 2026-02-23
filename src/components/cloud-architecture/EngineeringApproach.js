import Section from "../common/Section";

export default function EngineeringApproach() {
  const steps = [
    {
      num: "1️⃣",
      title: "Cloud Readiness Assessment",
      desc: "We evaluate your current infrastructure, workloads, and business goals to define the most effective cloud strategy — whether public, private, or hybrid.",
    },
    {
      num: "2️⃣",
      title: "Microservices Architecture Design",
      desc: "Applications are broken down into independent, loosely coupled services. This improves flexibility, speeds up deployments, and reduces system-wide risk.",
    },
    {
      num: "3️⃣",
      title: "Containerization & Orchestration",
      desc: "Using container technologies and orchestration platforms, we ensure applications run consistently across environments while maintaining high availability and load balancing.",
    },
    {
      num: "4️⃣",
      title: "DevOps & Continuous Delivery",
      desc: "We integrate automated CI/CD pipelines to enable rapid development, testing, and deployment cycles — reducing manual errors and time-to-market.",
    },
    {
      num: "5️⃣",
      title: "Observability & Monitoring",
      desc: "Advanced logging, monitoring, and performance tracking ensure proactive issue resolution and system optimization.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            🧩 Our Cloud-Native Engineering Approach
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-[16px]">
            At SkilledHyre Labs, we adopt a structured, business-aligned
            methodology for cloud transformation:
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors"
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
